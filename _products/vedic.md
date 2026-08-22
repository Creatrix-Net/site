---
layout: page
title: "VEDIC: Teaching a Drone to Win a Dogfight with Math, Not Missiles"
date: 2026-07-30 10:00:00
description: How a Velocity-Extended Dynamic Interceptor Control (VEDIC) guidance law lets a small multirotor out-think — not out-accelerate — an evasive aerial target.
category: defence
status: research
importance: 7
giscus_comments: true
related_posts: false
img: /assets/img/products/dronedogfight.jpeg
toc:
  sidebar: left
related_publications: true
---

Autonomous counter-drone interception is a deceptively hard problem. Everyone's first instinct is "just point the interceptor at the target and go faster" — but multirotors rarely have a speed advantage over each other, and classical missile guidance laws assume one. This post walks through **VEDIC** (Velocity-Extended Dynamic Interceptor Control), a purely kinematic guidance law I developed at [Creative Net](https://thecreativenet.in) for autonomous "Hunter-Killer" drone-on-drone interception, and the Simulink digital twin used to validate it.

The full technical report is linked at the bottom of this post.

## The problem with borrowing missile guidance

The textbook answer to "how do I intercept a moving target" is **Proportional Navigation (PNG)**, the guidance law used in essentially every modern air-to-air missile. PNG commands lateral acceleration proportional to how fast the line-of-sight to the target is rotating:

$$
a_c = N \cdot V_c \cdot \dot{\lambda}
$$

where $N$ is the navigation constant, $V_c$ is closing velocity, and $\dot{\lambda}$ is the line-of-sight rotation rate. PNG works beautifully — as long as the interceptor has a large speed and acceleration margin over the target, typically cited around 3:1. That assumption collapses the moment you're chasing a target multirotor with roughly the _same_ thrust-to-weight ratio as your interceptor.

The naive alternative, pure pursuit (always steer straight at the target), fails in the opposite way: it degenerates into an endless tail chase. If the target weaves or turns sharply, a pure-pursuit interceptor can never close the last few meters.

VEDIC sits between these two failure modes. Instead of reacting to line-of-sight rate like PNG, or blindly chasing the target's current position like pure pursuit, it **predicts where the target will be**, aims at that point, and — critically — knows when to stop predicting and start blocking.

## Bounded autonomy: a 7-stage FSM, not a black box

Because this has to run under real Rules of Engagement, the system is built on a "Bounded Autonomy" philosophy rather than an end-to-end learned policy. High-level "Brain" logic runs on an NVIDIA Jetson; low-level "Reflexes" (attitude stabilization, motor mixing) stay on a Pixhawk flight controller. Between the two sits a deterministic **7-stage Finite State Machine**, implemented natively as a Simulink Stateflow chart:

- **S1 — Takeoff:** climb to a tactical altitude to bank potential energy.
- **S2 — Search:** constant yaw-rate sweep to maximize sensor coverage.
- **S3 — Track:** close distance at nominal cruise speed once the target is acquired.
- **S4 — Engage:** triggered once range drops below $R_{engage}$; VEDIC guidance takes full authority.
- **S5 — RTL:** autonomous return-to-launch on target neutralization or geofence breach.
- **S6 — Complete:** simulation/mission terminates.

A hysteresis timer keeps the FSM from chattering between Track and Search on momentary sensor dropouts.

## How VEDIC actually computes an intercept

### Step 1 — how fast can the interceptor even go?

Before projecting anything forward in time, VEDIC has to know its own dynamic speed ceiling $v_{max}$. This isn't a fixed spec-sheet number — it's derived from a force balance between maximum thrust and quadratic aerodynamic drag:

$$
v_{max} = \sqrt{\frac{2mg \tan(\arccos(mg / T_{max}))}{\rho C_d A}}
$$

Feeding this dynamically-derived ceiling back into the guidance solver keeps commanded velocities inside what the airframe can physically deliver, which matters a lot for avoiding integral windup in the low-level PID loops.

### Step 2 — predicting the intercept point (without solving a differential equation)

Exact time-to-intercept (TTI) requires solving a nonlinear differential equation if the target's path is curved. VEDIC sidesteps this by treating the target's short-term future as a straight ray and running a **two-step fixed-point iteration**:

$$
TTI_0 = \frac{\lVert \vec{R}_{rel} \rVert}{v_{max}}, \qquad
p_{pred,0} = \hat{p}_t + \hat{v}_t \cdot (TTI_0 \cdot L)
$$

$$
TTI_1 = \frac{\lVert p_{pred,0} - p_b \rVert}{v_{max}}, \qquad
p^* = \hat{p}_t + \hat{v}_t \cdot (TTI_1 \cdot L)
$$

The lead-aggressiveness gain $L$ (empirically $L = 1.05$) deliberately over-leads the target by ~5% to compensate for the interceptor's own rotational inertia. Monte Carlo testing showed that a **single refinement pass** — two iterations total — converges more than sufficiently for a 20 Hz control loop, and it keeps the whole computation at strict $O(1)$ worst-case execution time, which matters for hard-real-time certification.

### Step 3 — Terminal Corridor Denial (the actual trick)

Here's the part that separates VEDIC from a slightly-smarter pure-pursuit law. Pure lead-pursuit still fails against a target that jinks hard in the final moments: the interceptor arrives at its predicted point either slightly early or slightly late, and its own angular momentum means it can't correct in time — the classic PNG overshoot.

Instead of trying to out-turn a last-second evasion, VEDIC **stops trying to intercept a point and starts matching the target's heading**, blending smoothly into a "wall" that slides alongside the target's escape plane rather than slicing through it:

$$
\gamma(TTI_1) =
\begin{cases}
0 & TTI_1 > \tau_{crit} \\
\dfrac{\tau_{crit} - TTI_1}{\tau_{crit}} & TTI_1 \le \tau_{crit}
\end{cases}
$$

$$
\vec{v}_{cmd} = \frac{(1-\gamma)\vec{v}_{dir} + \gamma \hat{v}_t}{\lVert (1-\gamma)\vec{v}_{dir} + \gamma \hat{v}_t \rVert} \cdot v_{max}
$$

As $\gamma \to 1$ in the terminal window (typically $\tau_{crit} \in [0.8, 1.2]$ s), the command collapses to $\vec{v}_{cmd} = \hat{v}_t \cdot (v_{max}/\lVert \hat{v}_t \rVert)$ — pure heading-matching, no more corner-cutting.

This is provably stable, not just empirically nice: a Lyapunov candidate $V(e_v) = \tfrac{1}{2}e_v^T e_v$ on the lateral velocity error gives

$$
\dot{V}(e_v) = -\frac{1}{\tau_{resp}}\lVert e_v \rVert^2 \le 0,
$$

so the relative lateral velocity error asymptotically converges to zero even against an acute snap-turn.

### Step 4 — don't run out of altitude

Multirotors can't glide. A target that dives hard can bait an interceptor into trading away its altitude reserve, leaving nothing left if the target then climbs back out. VEDIC tracks a kinetic energy ratio $E_r = \lVert \hat{v}_t \rVert / v_{max}$ and, above a threshold, clips downward velocity commands to preserve a "tactical high ground" until the terminal dive is actually warranted.

## Validating it in Simulink

The whole architecture was implemented twice inside MATLAB/Simulink as a cross-check: once as interpreted `MATLAB Function` blocks wired to `Stateflow.EMCharts` (fast to iterate, but prone to artificial algebraic loops that needed unit-delay breaks to resolve), and once fully decompiled into native Simulink primitives — summers, dot products, discrete integrators, comparators — which passed strict C/C++ autocoding checks for eventual deployment to PX4/Pixhawk hardware.

A Monte Carlo batch simulator ($\Delta t = 0.05$ s, 90 s engagement envelope, 10 m kill radius) ran the interceptor against five evasion profiles:

| Target Pattern | Time-to-Kill (s) | Min Range (m) | Peak $E_r$ | Status |
| -------------- | ---------------- | ------------- | ---------- | ------ |
| Figure-8       | 16.4             | 0.06          | 0.82       | HIT    |
| Circle         | 14.0             | 0.04          | 0.81       | HIT    |
| Random         | 29.0             | 0.09          | 0.75       | HIT    |
| Straight Dash  | 29.1             | 0.03          | 0.95       | HIT    |
| Evasive (Sine) | 15.4             | 0.18          | 0.88       | HIT    |

100% intercept rate, sub-0.2 m miss distance across every profile — close enough that a proximity warhead becomes optional rather than necessary. The straight-dash case took the longest simply because closing velocity was minimized; VEDIC correctly recognized no lateral maneuvering was needed and settled into a tail chase. The sine-weave case had the highest miss distance, but Corridor Denial kept the interceptor from overshooting the way a classic PNG law would.

## Where this breaks (on purpose, said out loud)

A few honest limitations, since a proof-of-concept is only useful if you're clear about what it hasn't proven yet:

- **Sensor noise:** the model uses zero-mean Gaussian noise; real optical tracking has structured, non-Gaussian error from lighting and occlusion. An EKF is the obvious next step for the velocity estimate VEDIC leans on so heavily.
- **Actuator bandwidth:** the first-order velocity lag model doesn't capture what happens if the target's maneuver frequency exceeds the interceptor's actual roll/pitch bandwidth.
- **1-vs-1 only:** there's no inter-agent coordination yet, so naively extending this to swarm-vs-swarm would cause redundant trajectories and blue-on-blue collisions. Repulsive potential fields are the planned fix.

## What's next

Follow-on work is aimed at Extended Kalman Filtering for vision-based state estimation and Hardware-in-the-Loop testing ahead of live flight trials on PX4.

## GITHUB

**[Dhruvacube/vedic](https://github.com/Dhruvacube/vedic)**

---

**Cite this work:**

```bibtex
@inproceedings{shaw2026vedic,
  title     = {Velocity-driven Exponential Domain Intercept Controller},
  author    = {Shaw, Dhruva},
  booktitle = {IEEE SPACE},
  year      = {2026},
  organization = {Creative Net}
}
```
