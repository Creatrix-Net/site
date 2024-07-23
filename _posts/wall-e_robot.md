---
layout: post
title: Assessing the Feasibility of Creating a WALL-E-Like Robot For Human Assistance
date: 2024-10-04 00:00:00
description: A WALL-E inspired robot assistant, examining technological feasibility, design considerations, and ethical implications for improved human life.
---

{% include figure.liquid loading="eager" path="![assets/img/8.jpg](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kkm6qu674bx36fntlqzm.jpeg)" class="img-fluid rounded z-depth-1" zoomable=true %}

## Abstract:

The concept of creating robots for human assistance has gained significant attention in recent years. This abstract explores the feasibility of developing a robot akin to WALL-E, the beloved fictional character from Pixar's animated film, as an assistant for human tasks and interactions. Drawing inspiration from WALL-E's characteristics, including mobility, communication abilities, and emotional resonance, this study examines the technological, practical, and ethical considerations of bringing such a robot to reality. The feasibility assessment encompasses several dimensions. First, the technological aspect delves into the current state of robotics, AI (Artificial Intelligence) and mobility systems, evaluating their potential to replicate WALL-E's functionality. This involves analyzing advancements in AI cognition, sensor miniaturization, battery efficiency, and mobility mechanisms. Second, practical considerations encompass the robot's physical design, its capacity to navigate real-world environments, and its ability to perform a range of tasks – from basic chores to complex interactions requiring emotional comprehension. Furthermore, the study addresses the emotional connection between humans and robots, a pivotal aspect demonstrated by WALL-E's ability to evoke empathy.

Ethical implications surrounding user data privacy, emotional manipulation, and the potential for over-reliance on such robots are explored.

## Introduction

Initially in the movie the WALL-E robot was the last robot on the earth and was meant to clean the waste left by the mankind. Here in this assessment we look on why WALL-E like robot, how to design it’s brain, implementation of electrical and electronics parts, challenges to be faced while designing a robot like WALL-E. We also would need to study and understand as to how these kinds of robots would help mankind provide the betterment in life or day-today activities.

## Designing of brain for the robot

The designing of brain is one of the most important aspect of the robot to function as per the expectations set.

At a glance it may look like that brain for the robot would be plain simple AI model like of ChatGPT or Bard, but in practical it would be different as laid down below:

Brain of the robot can be divided into _6 different basic required parts:_

- **Manual mode switcher**:
  This is the most important thing required in robot, there should be a _manual mode switcher_ as not everything can be left to AI or automation in general. In this one program of the robot to work via voice commands or program it via some external signals which can be activated via the push buttons.
- **AI Model** :
  This is the main part of the brain where all the automation would take place. One can develop its own AI Model or can use API’s of Google or OpenAI. The model should be more of like the conversational bot mixed with AI assistant. Heavy applications of NLP and ANN is required. Simply designing and training the AI model or using api’s won’t be enough.

We will need to develop the logic on where on which commands or actions the electronic parts would be used or on where basic speaking using the speaker is required. Designing of the logic to channelize the commands or actions of robot to specific electronic hardware is also equally important.

- **Pathfinding Algorithm**:
  After the competition of AI model and its logic the major work required would be to implement the loads of various different pathfinding algorithms for the smooth traversal around its user or acting according to instructions given by the user.

For the efficient path traversal through the unknown area one needs to use a mix of different path traversal algorithm for example using of A\* with BFS via a modified heuristic for the traversal of unknown maze/path. One can use fuzzy logic for the pathfinding but it also needs to be kept in mind about the time complexity of the function.

- **Area mapper/eyes of the brain**:
  It is better to implement this part of the robot brain in a separate area, isolating its memory computation. It would also be better to allocate more computation power to this area or use the concept of threading with parallel computation. This would provide basic sensory input to the robot for it to function. Options to use and integrate camera can also be done. With camera we can map an area using GPS also. This needs to be computed as fast as possible so that the other work(s) of the robot can be done without any lag.
- **Sensor fusion component**:
  This also needs to be implemented in a separate microprocessor/microcontroller as sensor fusion requires a lot of matrix multiplication and requires to store a continuous range of data. As matrix multiplication itself is power hungry thus it is better to implement it separately in a separate pipeline. Eg: one can fuse Ultrasonic sensor with the TOF sensor using Kalman Filter or also one can fuse IMU data with the Magnetometer using the Kalman Filter or other filtering techniques.
- **End effector controller**:
  This can be implemented in various ways, either inbuilt or separated (code or PCB). Proper implementation of PID control should be there as one can either.

## Implementation of electrical and electronics parts

One should be able to perfectly picturize for which application or where the robot needs to be used or deployed, thus the sizing of the robot would matter accordingly. In respect to the sizing of robot the miniaturization or expansion of the PCB would be required. For example for a 5 kg robot we can use (15cm x 15cm) with 4 layer PCB.

This would be sufficient to house and mount the basic components like microcontroller, signal transmitter, electrolytic capacitors for the voltage and power regulators. It is very essential to keep in mind while designing the PCB that, there should be no 90° turns in the copper traces in the PCB. Though there won’t be any signal going beyond the 10GHz, still use of best practice is recommended in the possible areas while designing the PCB to optimize the power consumption.

## Challenges to be faced while designing and deploying this kind of robot in the respective areas

Some major challenges to be faced while developing/designing the WALL-E kind are listed below but not limited to the list below:

- Selection of adequate power source for the robot, whether it is LiPo or Lead Acid, depending on the size of robot and power consumption.
- Gaining the trust of the users to use the robots.
- Gaining the trust of the user to believe in them about the data privacy regarding the robot.
- Providing the training to staff in order to use the robot and repair it when require.
- Unexpected shutting down of the api might disrupt the services if it is used.

### How these kinds of robots will help people to lead a better life than ever?

These WALL-E types of robots are well suited for the companion to the old-aged/paralyzed or lonely people.

These kind of robots can easily cure depression and loneliness as it provides companionship.

It would aid people to do their daily chores and also act as a reminder assistant to take their medicines properly on time, etc.

## References

| [1] | W. contributors, "WALL-E," 26 August 2023. [Online]. Available: https://en.wikipedia.org/w/index.php?title=WALL-E&oldid=1172280439.                            |
| :-- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [2] | N. McLaughlin, "Maze Solving Algorithms for Micro Mouse," SlideShow, [Online]. Available: https://slideplayer.com/slide/8569125/.                              |
| [3] | james-ralph8555,_DrexelMicromouse2020._                                                                                                                        |
| [4] | M. A. Dharmasiri, "Micromouse from scratch                                                                                                                     |
| [5] | W. contributors, "Micromouse," Wikipedia, The Free Encyclopedia., [Online]. Available: https://en.wikipedia.org/w/index.php?title=Micromouse&oldid=1158883816. |
| [6] | GreatScott!, "From Idea to Schematic to PCB - How to do it easily! - YouTube," [Online]. Available: https://www.youtube.com/watch?v=35YuILUlfGs.               |

## Note

Soon a research paper this would be published in the IEEE journal when I finish completing on this project of my own WALL-E :)
