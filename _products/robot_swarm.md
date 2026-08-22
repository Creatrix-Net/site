---
layout: page
title: Letting Robots Vote for Their Own Leader — Decentralized Master-Slave Election in Swarms
date: 2026-07-30 09:00:00
description: A fully decentralized, hysteresis-and-consensus-based dynamic leader election algorithm for robotic swarms, validated in simulation and on ESP32 hardware.
category: defence
status: research
importance: 6
giscus_comments: true
related_posts: false
img: /assets/img/products/robotswarm.png
toc:
  beginning: true
---

_**Here I means Dhruva Shaw, the author of this post at Creative Net.**_

Most robotic swarms you'll read about still lean on a classic master-slave setup: one robot is "in charge," the rest follow. It's simple, it's easy to reason about, and it breaks the moment that one robot loses power, drifts out of radio range, or just has a bad sensor day. In my paper **"Robotic Swarm With Independent Selection Of Master-Slave Configurations,"** presented at IEEE SPACE, I set out to fix that — not by abandoning the master-slave idea, but by making the _choice_ of master something the swarm figures out for itself, continuously, without any central authority.

Here's the short version of what the paper does and why.

## The problem with centralized leadership

A fixed master node is a single point of failure and a communication bottleneck — every coordination message radiates out from (or converges on) one robot. Decentralized alternatives exist, but the naive ones — an unweighted sum of "how good are my sensors right now" — tend to flap. Two robots with near-identical scores end up fighting over leadership every time sensor noise nudges one ahead of the other, which is worse than no election logic at all.

So the design goal became three requirements:

1. **Stability** — don't change leaders unless the improvement is real.
2. **Agreement** — the swarm should collectively agree before a handoff happens.
3. **Resilience** — a dead leader should be detected and replaced automatically.

## Three mechanisms, one election protocol

The algorithm layers three ideas on top of each other:

**A weighted, multi-criteria leader score.** Every robot computes a composite eligibility score from three sub-scores: sensor health across five sensors (IMU, ultrasonic, IR, GPS, encoder), proximity to the swarm's centroid (favoring robots that can reach everyone else easily), and remaining battery. These combine into a single bounded, monotonic, continuous score — the kind of formal properties that make it possible to reason about the system instead of just hoping it behaves.

**Hysteresis to stop flapping.** A challenger only unseats the incumbent leader if its score beats the incumbent's by more than a fixed margin τ. I set τ so it's comfortably above twice the sensor-noise standard deviation — meaning random noise alone, even at the two-sigma level, mathematically cannot trigger a leadership change. Only a genuine capability gap can.

**Majority-vote consensus.** Even when the hysteresis threshold is cleared, the transition still needs a majority of alive robots to independently agree, based on their own (possibly noisy) local view of everyone's scores. One robot's noisy reading can't unilaterally reshuffle the whole swarm's command structure.

On top of all that sits **heartbeat-based fault detection**: if a robot stops broadcasting, its peers time it out, drop it from the alive set, and — if it happened to be the leader — trigger an emergency re-election that skips the hysteresis check (there's no incumbent left to protect) but still requires consensus, unless the swarm has shrunk to a single surviving robot.

## Does it actually work?

I validated the algorithm two ways.

**A configurable Python simulation** with 5 robots over 300 timesteps, including a fault-injection scenario: GPS degradation on one robot, a sudden battery drain on another, and a full crash on a third. Across both the clean run and the fault run, the swarm elected a leader once at the start and then held stable — zero flapping events, and the crashed robot was detected and excluded within 5 simulation steps via heartbeat timeout.

**An ESP32 hardware prototype**, four robots' worth of firmware built around nRF24L01+ radios, MPU6050 IMUs with a Madgwick filter for orientation, HC-SR04 ultrasonic sensors, and quadrature encoders. The whole election state gets communicated in an 11-byte packet broadcast every 200 ms, well inside the radio's bandwidth even at swarm scale. Election rounds run every 500 ms, and a dead leader gets replaced within 5 seconds worst-case.

The headline number I'm happiest with: **O(N) communication complexity per election round** — every robot broadcasts once and locally evaluates every other robot's data — compared to O(N log N) for something like Raft or O(N²) for PBFT-style Byzantine consensus. For a swarm that's genuinely resource-constrained (an ESP32 isn't running a datacenter consensus stack), that difference matters.

## Where it breaks

I tried to be upfront about the limits in the paper itself, and I'll repeat them here because they're the honest scope of the work, not a footnote:

- Majority-vote consensus tolerates non-responsive robots, but **not Byzantine (malicious) ones** — there's no cryptographic trust layer here.
- The hardware prototype's proximity score currently uses a placeholder rather than live GPS — that integration is still pending.
- nRF24L01+ caps out at 6 receive pipes, so a single radio channel limits practical swarm size to 6 robots without pipe multiplexing.
- The battery model is linear, which is a simplification of real LiPo discharge curves.
- Both the simulation's motion model and the fault injection are still somewhat synthetic — full field trials with mobile robots navigating a real environment are the natural next step.

## What's next

Future work I'm chasing: machine-learning-based online tuning of the scoring weights instead of fixed mission profiles, real GPS-derived proximity on the hardware side, mesh-networked field trials beyond the current 6–8 robot ceiling, and — the harder problem — some form of lightweight, reputation-based Byzantine resilience that doesn't require the full 3f+1 node overhead of classical BFT.

If you want to dig into the math (the composite scoring function, the convergence proof, the full election state machine) or poke at the implementation, the code for both the simulation and the ESP32 firmware is on GitHub:

**[Dhruvacube/robotic-swarm-dynamic-leader-selection](https://github.com/Dhruvacube/robotic-swarm-dynamic-leader-selection)**

---

**Cite this work:**

```bibtex
@inproceedings{shaw2026robotic,
  title     = {Robotic Swarm With Independent Selection Of Master-Slave Configurations},
  author    = {Shaw, Dhruva},
  booktitle = {IEEE SPACE},
  year      = {2026},
  organization = {Creative Net}
}
```
