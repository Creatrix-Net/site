---
layout: distill
title: Mind Controlled Bionic Arm with Sense of Touch
description: Imagine a prosthetic arm that functions like your natural arm. You wear a headband, and with the thought process, the working signal from mind connects to the prosthetic about moving the arm, it responds accordingly—just like your real arm!
tags: Bionic Arm Robotics Biotechnology Mind Control Prosthetics
giscus_comments: true
citation: true
img: /assets/img/products/mcba/mcba_logo.jpeg
date: 2024-12-12
importance: 2
category: work
status: patent pending
pretty_table: true
mermaid:
  enabled: true
  zoomable: true
code_diff: true
chart:
  chartjs: true
  echarts: true
  vega_lite: true
tikzjax: true
typograms: true
tabs: true

authors:
  - name: Dhruva Shaw
    url: "https://dhruvashaw.in"
    affiliations:
      name: Creative Net
  - name: Arittrabha Sengupta
    url: "https://arittrabha-biotech.pages.dev"
    affiliations:
      name: Creative Net
  - name: Jay Baswaraj Khaple
    url: "mailto:khaplejay00@gmail.com"
    affiliations:
      name: Lovely Professional University
  - name: Dr. G. Raam Dheep
    url: "mailto:raam.25227@lpu.co.in"
    affiliations:
      name: Lovely Professional University

bibliography: papers.bib

profiles:
  # if you want to include more than one profile, just replicate the following block
  # and create one content file for each profile inside _pages/
  - align: right
    image: prof_pic.jpg
    content: profile/about_dhruva.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Dhruva Shaw</p>
      <p><a href="mailto:dhruvashaw@ieee.org">dhruvashaw@ieee.org</a></p>
      <p><a href="mailto:me@dhruvashaw.in">me@dhruvashaw.in</a></p>
  - align: left
    image: products/mcba/at_icics23.jpg
    content: profile/about_arittrabha.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Arittrabha Sengupta</p>
      <p><a href="mailto:arittrabhasengupta@gmail.com">arittrabhasengupta@gmail.com</a></p>
  - align: right
    image: products/mcba/jay_pic.jpg
    content: profile/about_jaykhaple.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Jay Baswaraj Khaple</p>
      <p><a href="mailto:khaplejay00@gmail.com">khaplejay00@gmail.com</a></p>
  - align: left
    image: products/mcba/raam_pic.jpg
    content: profile/about_raamdheep.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Dr. Raam Dheep</p>
      <p><a href="mailto:raam.25227@lpu.co.in">raam.25227@lpu.co.in</a></p>

toc: true

_styles: >
  .containerpdf {
      position: relative;
      overflow: hidden;
      width: 100%;
      padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  }

  /* Then style the iframe to fit in the container div with full height and width */
  .responsive-object-pdf {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
  }
---

## Abstract

Advancements in bionic technology are transforming the possibilities for restoring hand function in individuals with amputations or paralysis. This paper introduces a **cost-effective bionic arm** design that leverages **mind-controlled functionality** and integrates a **sense of touch** to replicate natural hand movements. The system utilizes a **non-invasive EEG-based control mechanism**, enabling users to operate the arm using brain signals processed into PWM commands for servo motor control of the bionic arm. Additionally, the design incorporates a touch sensor (tactile feedback) in the gripper, offering sensory feedback to enhance user safety and dexterity<d-cite key="nprnews"></d-cite>.
The proposed bionic arm prioritizes three essential features:

1. **Integrated Sensory Feedback**: Providing users with a tactile experience to mimic the sense of touch (signals directly going to the brain). This capability is crucial for safe object manipulation by arm and preventing injuries
2. **Mind-Control Potential**: Harnessing EEG signals for seamless, thought-driven operation.
3. **Non-Invasive Nature**: Ensuring user comfort by avoiding invasive surgical procedures.
   This novel approach aims to deliver an intuitive, natural, and efficient solution for restoring complex hand functions.

---

## Motivation and Journey

### 1. Our Journey: From SIH Hackathon to Independent Research

Our journey began at the internal hackathon of SIH 2023 at Lovely Professional University, held on September 27th and 28th. We had a thrilling 30 hours to tackle a challenging problem statement provided by the Ministry of Social Justice and Empowerment.

Initially, the problem statement focused on "Low Cost Mind Control Bionic Arm." However, it was later refined to "Low Cost Myoelectric Prosthetic Arm" with the new PS code "SIH1404."

{% details SIH1404 - Low Cost Myoelectric Prosthetic Arm %}

- **ID**: SIH1404
- **Title**: Low-cost Myoelectric Prosthetic Arm
- **Technology Bucket**: MedTech / BioTech / HealthTech
- **Category**: Hardware
- **Description**: In India the cost of a new Myoelectric/Bionic prosthetic arm can range from 1lakh - 2 lakh Rupees, putting the Myoelectric hand out of reach of many middle-class and lower middle-class patients/amputee, we decided to design and build a far cheaper and pocket friendly version of prosthetic arm with Myoelectric capabilities. We are using 3-DPrinting technology for the structure of the prosthetic hand, and servo motors and Arduino for the mechanical purpose, Myoware muscle sensor is responsible for reading the electrical signals generated by muscle. These components and microprocessor can bring the cost of the prosthetic arm much cheaper and pocket friendly for the patient/amputee.
- **Problem Creater's Organization**: Ministry of Social Justice and Empowerment

{% enddetails %}

While we successfully navigated the internal hackathon, we unfortunately didn't make it to the regionals. But our passion for this project didn't diminish. We decided to continue our exploration as an independent research endeavor.

Throughout the internal SIH 2023 hackathon, we were fortunate to have the guidance of Dr. Bhaveshkumar C Dharmani, whose mentorship proved invaluable.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/products/mcba/sih_project.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
        <div class="caption">
            Project which we displayed at SIH 2023 Internal Selection
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/products/mcba/sih_team.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
        <div class="caption">
            Initial Team at SIH 2023
        </div>
    </div>
</div>

<div class="containerpdf">
    <iframe width="560" height="315" class="responsive-object-pdf" src="https://www.youtube.com/embed/ahVZ6MouFis?si=AXpMK3PYxzNr4BYV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/vtti_rdOrQI" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/UHQl-qWLEv0" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/Vo5Ph_H6Imk" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Following the hackathon, we came under the esteemed guidance of Dr. G Raam Dheep, who has continued to mentor us throughout this exciting research journey.

This blog will chronicle our ongoing research journey, detailing the challenges we face, the successes we achieve, and the innovative solutions we develop.

### 2. A Step Forward: Presenting at ICICS 2023

Our next step was to present our work to a wider audience. We had the privilege of showcasing our research through a poster presentation at the 5th International Conference on Intelligent Circuits and Systems ([ICICS 2023](https://www.lpu.in/conferences/icics/icics2023)), held at LPU, Jalandhar, on October 12th, 2023.

{% include figure.liquid loading="eager" path="assets/img/products/mcba/at_icics23.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}

<div class="caption">
    Arittrabha Sengupta with our poster at ICICS 23
</div>
<br/>
{% include figure.liquid loading="eager" path="assets/img/products/mcba/icics23.jpeg" class="img-fluid rounded z-depth-1" zoomable=true %}
<div class="caption">
    Group photo of ICICS 23
</div>

### 3. Selected for Oral Presentation at India Science Congress 2023

Building upon our initial successes, we aimed to further elevate our research by presenting our work at a prestigious national platform. We were thrilled to be selected for an oral presentation at the India Science Congress 2023. Although the conference has been postponed due to unforeseen circumstances on the organizers' end, we eagerly anticipate the opportunity to share our findings with the scientific community at the rescheduled event.

<div class="containerpdf">
    <iframe src='{{ site.url }}/assets/pdf/mcba/isc24_acceptanceletter.pdf' class="responsive-object-pdf" type='application/pdf'></iframe>
</div>

### 4. A Triumph at IIT Ropar: Second Place at EE Research Day

A pivotal moment in our research journey occurred on March 16, 2024, during the EE Research Day celebrations at IIT Ropar. Our team, comprising Dhruva Shaw and Arittrabha Sengupta, participated in the poster presentation competition. To our delight, our project secured second place! We learned about this competition through our IEEE network and never anticipated such a remarkable achievement.

{% include figure.liquid loading="eager" path="assets/img/products/mcba/iitr/5_iitr.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}

<div class="caption">
    Dhruva Shaw & Arittrabha Sengupta with appreciation certificate in front of IIT Ropar
</div>

<br/>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/products/mcba/iitr/prize_recive_iitr.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
        <div class="caption">
            Receiving 2nd prize for poster presentation
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/products/mcba/iitr/3_iitr.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
        <div class="caption">
            Dhruva Shaw with the project poster at IIT Ropar
        </div>
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/products/mcba/iitr/certificates_iitr.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/products/mcba/iitr/group_iitr.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/products/mcba/iitr/4_iitr.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/products/mcba/iitr/1_iitr.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

{% include figure.liquid loading="eager" path="assets/img/products/mcba/iitr/2_iitr.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}

<div class="caption">
    Dhruva Shaw & Arittrabha Sengupta discussing the plan of action
</div>

### 5. Exploring Funding Opportunities: The IEEE Telehealth Tech Pitching Competition

We then set our sights on the 2024 IEEE Standards Association Telehealth Tech Pitching Competition. This competition encourages innovative solutions that aim to improve patient engagement, streamline healthcare delivery, and enhance overall patient outcomes. We successfully submitted our project and cleared the first round of selection. While we didn't advance to the final round, we were hopeful that this competition would provide an avenue for securing funding to further advance our research.

<div class="containerpdf">
    <iframe width="560" height="315" class="responsive-object-pdf" src="https://www.youtube.com/embed/pU9OGLIYMsE?si=sPKLxx6YKQ6C9mzD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 6. The 39th Indian Engineering Congress 2024

We are delighted to announce that our research paper has been accepted for oral presentation at the Indian Engineering Congress 2024. We are eager to present our findings at this prestigious conference and anticipate making a significant impact on the engineering community.

<div class="containerpdf">
    <iframe src='{{ site.url }}/assets/pdf/mcba/iec_certificate.pdf' class="responsive-object-pdf" type='application/pdf'></iframe>
</div>
<div class="containerpdf">
    <iframe src='https://www.ieindia.org/webui/ajax/Downloads/WebUI_PDF/IEC/IEC_39.pdf?v20250320.1#page=64' class="responsive-object-pdf" type='application/pdf'></iframe>
</div>
<div class="containerpdf">
    <iframe width="560" height="315" class="responsive-object-pdf" src="https://www.youtube.com/embed/T8JX1OMt7ko?si=ZoHrOgGlHeFlHTc9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</div>

---

## Methodology

### 1. Data Collection and Dataset Overview

The model development utilized a publicly available EEG dataset comprising data from **60 volunteers** performing **8 distinct activities**<d-cite key="asanza2023"></d-cite> . The dataset includes a total of **8,680 four-second EEG recordings**, collected using **16 dry electrodes** configured according to the **international 10-10 system**<d-cite key="asanza2023"></d-cite>.

- Electrode Configuration: Monopolar configuration, where each electrode's potential was measured relative to neutral electrodes placed on both earlobes (ground references).
- Signal Sampling: EEG signals were sampled at **125 Hz** and preprocessed using:
  - **A bandpass filter (5–50 Hz)** to isolate relevant frequencies<d-cite key="asanza2023"></d-cite>.
  - **A notch filter (60 Hz)** to remove powerline interference<d-cite key="asanza2023"></d-cite>.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/products/mcba/16_electrode_system.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        <div class="caption">
            16 dry electrodes - international 10-10 system <d-cite key="asanza2023"></d-cite>
        </div>
    </div>
</div>

### 2. Data Preprocessing

The dataset, originally provided in **CSV format**, underwent a comprehensive preprocessing workflow:

- The data was split into individual CSV files for each of the 16 channels, resulting in an increase from **74,441** files to **1,191,056** files.
- Each individual channel's EEG data was converted into **audio signals** and saved in **.wav format**, allowing the brain signals to be audibly analyzed.
- The entire preprocessing workflow was implemented in **Python** to ensure scalability and accuracy.
  The dataset captured brainwave signals corresponding to the following activities:

1. **BEO** (Baseline with Eyes Open): One-time recording at the beginning of each run<d-cite key="asanza2023"></d-cite>.
2. **CLH** (Closing Left Hand): Five recordings per run<d-cite key="asanza2023"></d-cite>.
3. **CRH** (Closing Right Hand): Five recordings per run<d-cite key="asanza2023"></d-cite>.
4. **DLF** (Dorsal Flexion of Left Foot): Five recordings per run<d-cite key="asanza2023"></d-cite>.
5. **PLF** (Plantar Flexion of Left Foot): Five recordings per run<d-cite key="asanza2023"></d-cite>.
6. **DRF** (Dorsal Flexion of Right Foot): Five recordings per run<d-cite key="asanza2023"></d-cite>.
7. **PRF** (Plantar Flexion of Right Foot): Five recordings per <d-cite key="asanza2023"></d-cite>.
8. **Rest**: Recorded between each task to capture the resting <d-cite key="asanza2023, gigadb"></d-cite>.

### 3. Feature Extraction and Classification

Feature extraction and activity classification were performed using **transfer learning** with **YamNet** <d-cite key="yamnetgithub"></d-cite>, a deep neural network model.

- **Audio Representation**: Audio files were imported into **MATLAB** using an **Audio Datastore**<d-cite key="audiodatastore"></d-cite>. Mel-spectrograms, a time-frequency representation of the audio signals, were extracted using the yamnetPreprocess function<d-cite key="yamnetpreprocess, transferlearningmatlab"></d-cite>.
- Dataset Split: The data was divided into **training (70%)**, **validation (20%)**, and **testing (10%)** sets<d-cite key="transferlearningmatlab"></d-cite>.
  Transfer Learning with YamNet :

* The **pre-trained YamNet model** (86 layers)<d-cite key="yamnetgithub"></d-cite> was adapted for an 8-class classification task:
  - The initial layers of YamNet were **frozen** to retain previously learned representations<d-cite key="transferlearningmatlab, yamnetgithub"></d-cite>.
  - A **new classification layer** was added to the model <d-cite key="transferlearningmatlab"></d-cite>.
* Training details:
  - **Learning Rate**: Initial rate of **3e-4**, with an exponential learning rate decay schedule<d-cite key="transferlearningmatlab"></d-cite>.
  - **Mini-Batch Size**: 128 samples per batch<d-cite key="transferlearningmatlab"></d-cite>.
  - **Validation**: Performed every **651 iterations**.

### 4. Robotic Arm Design and Simulation

A **3-Degree-of-Freedom (DOF) robotic arm** was designed using **MATLAB Simulink** and **Simscape toolboxes**. To ensure robust validation:

- A **virtual environment** was developed in Simulink, simulating the interactions between the trained AI models and the robotic arm.
- The simulations served as a testbed to evaluate the system's performance before real-world integration.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/products/mcba/data_acquisition.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        <div class="caption">
            The whole workflow of the project <d-cite key="essa_kotte_2021"></d-cite>
        </div>
    </div>
</div>

### 5. Project Progress and Future Directions

_Completed Tasks_:

1. **AI Model Development**: Successfully trained models to classify human activities based on EEG signals.
2. **Robotic Arm Design**: Designed a functional 3-DOF robotic arm with simulated controls.
3. **Virtual Simulation**: Validated AI-robotic arm interactions in a virtual environment.

_Future Directions_:

1. **Hardware Integration**: Implement the developed AI models into physical robotic hardware for real-world testing.
2. **Real-Time EEG Acquisition**: Develop a system for **real-time EEG data acquisition** and activity classification.
3. **Tactile Feedback System**: Integrate tactile sensors with the robotic arm for **real-world sensory feedback**, complemented by Simulink-based simulations.

---

## Protocols

Here is the protocol(steps) to reproduce our work with ease. [Published in Protocols.io]

<iframe src="https://www.protocols.io/widgets/doi?uri=dx.doi.org/10.17504/protocols.io.n92ldr869g5b/v1" style="width: 100%; height: 300px; border: 1px solid transparent;"></iframe>
<div class="containerpdf">
    <iframe src='{{ site.url }}/assets/pdf/mcba/protocol_mcba.pdf' class="responsive-object-pdf" type='application/pdf'></iframe>
</div>

---

## Training Graph

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/products/mcba/learninggraph.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        <div class="caption">
            Learning Graph
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/products/mcba/learninggraph_log.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        <div class="caption">
            Learning Graph in Log Scale
        </div>
    </div>
</div>

---

## Results

{% tabs results %}

{% tab results Results Table %}

| name           | classes_1   | classes_2   | classes_3   | classes_4   | classes_5   | classes_6   | classes_7   | classes_8   | macroAVG    | microAVG    |
| -------------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| true_positive  | 0           | 0           | 0           | 0           | 0           | 960         | 0           | 0           | 120         | 120         |
| false_positive | 0           | 0           | 0           | 0           | 0           | 10944       | 0           | 0           | 1368        | 1368        |
| false_negative | 192         | 958         | 960         | 960         | 960         | 0           | 960         | 5954        | 1368        | 1368        |
| true_negative  | 11712       | 10946       | 10944       | 10944       | 10944       | 0           | 10944       | 5950        | 9048        | 9048        |
| precision      |             |             |             |             |             | 0.080645161 |             |             |             | 0.080645161 |
| sensitivity    | 0           | 0           | 0           | 0           | 0           | 1           | 0           | 0           | 0.125       | 0.080645161 |
| specificity    | 1           | 1           | 1           | 1           | 1           | 0           | 1           | 1           | 0.875       | 0.868663594 |
| accuracy       | 0.080645161 | 0.080645161 | 0.080645161 | 0.080645161 | 0.080645161 | 0.080645161 | 0.080645161 | 0.080645161 | 0.080645161 | 0.080645161 |
| F-measure      |             |             |             |             |             | 0.149253731 |             |             |             | 0.080645161 |

{% endtab %}

{% tab results Confusion Matrix %}

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/products/mcba/confusion_matrix.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    <div class="caption">
        Confusin Matrix of the trained model.
    </div>
</div>

{% endtab %}

{% endtabs %}

---

## Simulation in Simulink

{% include figure.liquid loading="eager" path="assets/img/products/mcba/processsim.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}

<div class="caption">
    Internal Data Acquisition Process Simulation
</div>

<br/>
{% include figure.liquid loading="eager" path="assets/img/products/mcba/system_simulation.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
<div class="caption">
    Whole System Simulation
</div>

---

## Conclusion and Future Work

To enhance the accuracy and performance of our mind-controlled bionic arm with a sense of touch, we propose the following refinements, that we intend to do in future:

**Model Refinement**:

- **Feature Augmentation**: Incorporate additional features such as delta, theta, beta, alpha, and gamma wave components, along with signal processing metrics like SNR, bandwidth, mean frequency, occupied bandwidth, and standard deviation.
- **Ensemble Learning**: Train a separate AI classification model on these augmented features and combine its predictions with the YamNet model using a data fusion technique, similar to sensor fusion.

**Hardware Integration and User Experience**:

- **Hardware Optimization**: Further optimize the hardware implementation to ensure reliable and efficient operation.
- **Tactile Feedback Development**: Develop a sophisticated tactile feedback system to provide the user with a realistic sense of touch.

This project represents a significant step towards realizing a functional mind-controlled bionic arm with a sense of touch. However, substantial research and development efforts are still required to bring this technology to market.

---

## Awards/Achievements

- Awarded 2nd Place for outstanding poster presentation at the EE Research Day celebrations held at IIT Ropar on March 16, 2024.

---

## Our Team Members

Meet the talented team members who are driving this incredible project forward!

{::nomarkdown}
{% include profiles.liquid %}
{:/nomarkdown}

---

## Supporting Files/Links

{% tabs support %}

{% tab support Github Respository %}

- [https://github.com/Dhruvacube/Mind-Control-Bionic-Arm](https://github.com/Dhruvacube/Mind-Control-Bionic-Arm)

{% endtab %}

{% tab support Simulation Files %}

It contains two different simulink simulation files with a data files, all are required for the simulation purpose

- [https://github.com/Dhruvacube/Mind-Control-Bionic-Arm/tree/main/Simulation](https://github.com/Dhruvacube/Mind-Control-Bionic-Arm/tree/main/Simulation)

{% endtab %}

{% tab support Model Files (Kaggle) %}

- [https://www.kaggle.com/models/dhruvacube/mindgrip](https://www.kaggle.com/models/dhruvacube/mindgrip)

{% endtab %}
{% tab support Dataset Files %}

### Kaggle (Pre-processed dataset)

- [https://www.kaggle.com/datasets/dhruvacube/brain-activities-classification-signals/](https://www.kaggle.com/datasets/dhruvacube/brain-activities-classification-signals/)

### Original Dataset

#### Mendely Data

- [https://data.mendeley.com/datasets/x8psbz3f6x/2](https://data.mendeley.com/datasets/x8psbz3f6x/2)

#### GigaDb

- [https://gigadb.org/dataset/100295](https://gigadb.org/dataset/100295)

{% endtab %}

{% tab support Protocols %}

- [https://dx.doi.org/10.17504/protocols.io.n92ldr869g5b/v1](https://dx.doi.org/10.17504/protocols.io.n92ldr869g5b/v1)

{% endtab %}

{% tab support Conferences/Presentations %}

### SIH 2023

- [http://dx.doi.org/10.13140/RG.2.2.36119.48806](http://dx.doi.org/10.13140/RG.2.2.36119.48806)
- [http://dx.doi.org/10.13140/RG.2.2.27259.02081](http://dx.doi.org/10.13140/RG.2.2.27259.02081)

### ICICS 2023

- [http://dx.doi.org/10.13140/RG.2.2.11164.46724](http://dx.doi.org/10.13140/RG.2.2.11164.46724)

### ISC 2023

- [Acceptance Letter at ISC 2023](https://media.licdn.com/dms/document/media/v2/D562DAQGOF_iYu33xFw/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1733040323273?e=1735171200&v=beta&t=5olBsD8ULmzjBA8nxGY5v0j4tX6P0BbWnAiPdFWg4iE)

### EE Research Day IIT Ropar, 24

- [http://dx.doi.org/10.13140/RG.2.2.19542.87361](http://dx.doi.org/10.13140/RG.2.2.19542.87361)

### IEEE Telehealth Tech Pitching 2024

- [https://www.youtube.com/watch?v=pU9OGLIYMsE](https://www.youtube.com/watch?v=pU9OGLIYMsE)
- [http://dx.doi.org/10.13140/RG.2.2.29113.68961](http://dx.doi.org/10.13140/RG.2.2.29113.68961)
- [http://dx.doi.org/10.13140/RG.2.2.17245.12004](http://dx.doi.org/10.13140/RG.2.2.17245.12004)

### 39th Indian Engineering Congress 2024

- [https://www.youtube.com/watch?v=T8JX1OMt7ko](https://www.youtube.com/watch?v=T8JX1OMt7ko)
- [https://www.researchgate.net/publication/387459720_Mind_Controlled_Bionic_Arm_with_Sense_of_Touch](https://www.researchgate.net/publication/387459720_Mind_Controlled_Bionic_Arm_with_Sense_of_Touch)
- [https://www.researchgate.net/publication/387459543_Mind_Controlled_Bionic_Arm_with_Sense_of_Touch](https://www.researchgate.net/publication/387459543_Mind_Controlled_Bionic_Arm_with_Sense_of_Touch)
- [https://www.ieindia.org/webui/ajax/Downloads/WebUI_PDF/IEC/IEC_39.pdf?v20250320.1#page=64](https://www.ieindia.org/webui/ajax/Downloads/WebUI_PDF/IEC/IEC_39.pdf?v20250320.1#page=64)
- [{{ site.url }}/assets/pdf/mcba/iec_certificate.pdf]({{ site.url }}/assets/pdf/mcba/iec_certificate.pdf)

{% endtab %}

{% endtabs %}
