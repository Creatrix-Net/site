---
layout: page
title: PhishNet
description: An AI-based solution for the monitoring and detection of phishing domains and URLs.
category: defence
status: active
importance: 5
giscus_comments: true
img: /assets/img/products/phishnet/phishnet.png
date: 2025-09-06
pretty_table: true
---

<center>
{% include figure.liquid loading="eager" path="assets/img/products/phishnet/phishnet.png" class="img-fluid rounded z-depth-1" %}
</center>

### Project Overview

PhishNet is a comprehensive, AI-based monitoring and detection system designed to combat sophisticated phishing attacks targeting Critical Sector Entities (CSEs). Developed as a solution by **Creative Net** for a hackathon hosted by NCIIPC, PhishNet provides a proactive approach to identify and alert on malicious domains and URLs in near real-time, safeguarding sensitive user information.

---

### Problem Solved

The cybersecurity landscape is under constant threat from increasingly sophisticated phishing attacks. Cybercriminals routinely exploit user trust by creating fraudulent domains and URLs that closely mimic those of legitimate Critical Sector Entities (CSEs). The goal of these attacks is to deceive users into divulging sensitive information, such as login credentials, financial data, and personal identification.

Traditional detection methods, which often rely on simple signature-based analysis or manual verification, are no longer sufficient to combat the evolving tactics of these attackers. Modern phishing campaigns utilize advanced techniques such as non-resemblance URLs, tunneling services, and typosquatting. These domains, often initially "parked" without content, can be activated at any time to host CSE-lookalike web pages.

Given this urgent and persistent threat, there is a critical need for a scalable, efficient, and automated solution to detect and alert on both active phishing domains and suspected domain.

---

### Key Features

- **Proactive Domain Identification**: Utilizes fuzzy permutation with the `dnstwist` library to actively find potential phishing domains before they are used in attacks.
- **Dual-Model AI Engine**: Employs two distinct **Random Forest Classifiers** for robust detection. One model analyzes a comprehensive set of URL-based features, while the second incorporates the raw URL string itself for enhanced accuracy.
- **Automated Classification**: URLs are classified as "phishing" if found in a verified database of **58 lakh URLs** from PhishTank and IEEE Dataport, or as "suspected" if newly identified and flagged by the AI.
- **Scalable Architecture**: Built on a modular, pipeline-based system using **Django**, **PostgreSQL**, and **Celery** to handle asynchronous tasks and large data volumes.
- **Automated Reporting**: Processes user requests submitted via a single input or Excel file list and emails a detailed, zipped report with all relevant attributes.

---

### Technologies Used

- **Framework**: Django
- **Database**: PostgreSQL
- **Task Queue**: Celery with Redis backend
- **Frontend**: Bootstrap Studio
- **Programming Language**: Python
- **AI/ML Libraries**: scikit-learn, pandas, joblib, matplotlib, seaborn
- **Third-Party Tools**: dnstwist, `pipenv`, `django-filer`, `cdx_toolkit`, `subfinder`

---

### Methodology

Our solution employs a multi-stage strategy that combines proactive domain identification with a sophisticated, dual-model AI engine.

#### Domain Identification

Our primary method for identifying new threats is **Fuzzy Permutation**, which uses the `dnstwist` library to generate and perform active DNS resolution on intentional misspellings and other permutations of legitimate CSE domains.

#### AI Classification

We use a pipeline of two distinct **Random Forest Classifiers** for robust detection.

- **Model 1** analyzes a comprehensive set of **structural URL features**.
- **Model 2** incorporates the **raw URL string** itself, processed via a TF-IDF Vectorizer, in addition to the structural features, which we found significantly improved accuracy.

The final classification is determined by averaging the confidence scores of both models. If one model's output is false while the other's is true, the output from Model 2 takes precedence due to its higher accuracy.

---

### Technical Architecture

Our system is built as a modular, full-stack application. The backend is a **Django** framework that manages all application logic and database operations. It handles asynchronous tasks using a **Celery** task queue with a **Redis** backend. User requests are stored in a **PostgreSQL** database.

The system pipeline is designed for efficiency and scalability:

- **Request Ingestion**: User requests (single URL or Excel file list) are submitted via the frontend and pushed to a Celery task queue.
- **Task Processing**: Celery workers pick up tasks from the queue to perform domain identification and AI classification.
- **Reporting**: A separate Celery task generates zipped reports with domain details and screenshots, which are then emailed to the user.

<center>
{% include figure.liquid loading="eager" path="/assets/img/products/phishnet/request_process_thread.png" class="img-fluid rounded z-depth-1" %}
{% include figure.liquid loading="eager" path="/assets/img/products/phishnet/request_creation.png" class="img-fluid rounded z-depth-1" %}
{% include figure.liquid loading="eager" path="/assets/img/products/phishnet/celery_loop_flow.png" class="img-fluid rounded z-depth-1" %}
</center>

---

### AI Models and Performance

Our AI models were trained on a substantial, custom-built dataset of **58 lakh URLs**. The project includes performance data for both models.

#### Model 1 (Structural Features Only)

- **Accuracy**: 87%

**Confusion Matrix**

|                         | **Predicted Not Phishing** | **Predicted Phishing** |
| ----------------------- | -------------------------- | ---------------------- |
| **Actual Not Phishing** | 4,787                      | 533                    |
| **Actual Phishing**     | 677                        | 3,489                  |

- **Key Feature Importances**: `entropyURL` (0.184), `averageSubdomainLength` (0.137), and `entropyDomain` (0.122).

<center>
{% include figure.liquid loading="eager" path="/assets/img/products/phishnet/without_url_repeatedDigitsInURL_repeatedDigitsInSubdomain_cse_confusion_matrix.png" class="img-fluid rounded z-depth-1" %}
</center>

#### Model 2 (Raw URL + Structural Features)

- **Accuracy**: 95%

**Confusion Matrix**

|                         | **Predicted Not Phishing** | **Predicted Phishing** |
| ----------------------: | -------------------------: | ---------------------: |
| **Actual Not Phishing** |                      6,363 |                    286 |
|     **Actual Phishing** |                        313 |                  5,098 |

- **Key Feature Importances**: Character n-grams from the URL string, such as `s:/` (0.0196) and `tp:/` (0.0172).

<center>
{% include figure.liquid loading="eager" path="/assets/img/products/phishnet/without_repeatedDigitsInURL_repeatedDigitsInSubdomain_cse_confusion_matrix.png" class="img-fluid rounded z-depth-1" %}
</center>

---

### Findings, Limitations, and Future Improvements

Our findings show that the dual-model approach significantly enhances detection accuracy. However, the current solution has a few limitations:

- **Subdomain Detection**: The solution does not actively find phishing subdomains.
- **Historical Data Analysis**: We have not yet integrated crawl indices for full historical analysis.
- **Model Complexity**: Due to initial resource constraints, we used a Random Forest model, and we plan to explore more advanced models like **LSTMs**.

Our roadmap includes plans to address these limitations by integrating the `subfinder` module for subdomain discovery and `cdx_toolkit` for historical analysis.
