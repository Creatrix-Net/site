---
layout: page
permalink: /adverse/
title: Adverse - Automated Open-Source Intelligence System for Digital Identity Verification and Cyber Surveillance ©
description: Adverse © is an advanced open-source intelligence (OSINT) and facial recognition system designed to aggregate, analyze, and verify publicly available digital information
img: /assets/img/products/adverse.png
original_base_url: "thecreativenet.in"
category: defence
status: copyright
giscus_comments: true
importance: 1
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

<center>
{% include figure.liquid loading="eager" path="assets/img/products/adverse.png" class="img-fluid rounded z-depth-1" %}
</center>

# ADVERSE — _Automated Open-Source Intelligence System_

### _for Digital Identity Verification and Cyber Surveillance_ ©

> **CLASSIFIED // OSINT — ADVERSE INTELLIGENCE PLATFORM v3.0**

**Adverse** is a state-of-the-art intelligence software designed for **advanced surveillance and open-source intelligence (OSINT) gathering**. Inspired by Netflix series _The Night Agent_, it empowers intelligence professionals to **track digital footprints across social media platforms**, **scan publicly available internet data**, and **access open CCTV networks in over 80 countries** using just a **name and image**.

A key highlight of **Adverse** is its **powerful face comparison technology**, which enables users to **analyze and match faces from downloaded images** with high accuracy — an invaluable tool for **law enforcement, cybersecurity experts, and intelligence agencies** involved in **criminal investigations, missing person searches, and security threat assessments**.

---

## ⚡ What Can Adverse Do?

| Capability                     | Details                                                                 |
| ------------------------------ | ----------------------------------------------------------------------- |
| 🌐 **Multi-Engine OSINT**      | Bing, Google, DuckDuckGo, Yahoo, Startpage, Dogpile, Ask, Brave, Mojeek |
| 🎯 **Target Profiling**        | Auto-classifies any input → dispatches relevant OSINT modules           |
| 🖼️ **Face Matching**           | Threshold-based comparison (0–100%) across downloaded images            |
| 📡 **CAMINT**                  | Public CCTV feeds from 80+ countries via Insecam, dorks, Shodan         |
| 📋 **PDF Intelligence Briefs** | Auto-generated, classification-stamped, AI-summarized reports           |
| 🌍 **13-Domain Country Intel** | Full national threat assessment from ORBAT to Sanctions                 |
| 📞 **Phone OSINT**             | Carrier, WhatsApp/Telegram, breach check, reverse lookup                |
| 🖥️ **Web GUI Dashboard**       | Military-grade dark-themed browser interface                            |
| 🤖 **Local AI Summaries**      | Offline extractive NLP — no API, no GPU required                        |

---

## 🔑 Key Features

### 1. Open-Source Intelligence (OSINT) Gathering

- Perform **deep web searches** using Bing, Google, and advanced dorking techniques
- Results deduplicated by URL across **8 parallel search engines**
- Extract valuable data from publicly available sources

### 2. Social Media Tracking

- Search for social media profiles using just a **name or username**
- Enhance searches with **username variations** and custom username lists
- Conduct **silent searches** to avoid cluttering console output

### 3. Image-Based Search & Face Matching

- Use **face-only detection** to filter non-human elements from image searches
- Compare faces with a **threshold-based algorithm (0–100%)** to verify identities
- **4 parallel workers** with 10-second per-image timeout for speed
- Works from a single reference photo

### 4. Open CCTV & Insecam Surveillance (CAMINT)

- Access **open CCTV cameras from 80+ countries**
- Search for available **live camera feeds** by country code
- Discover exposed cameras via **search dorks**, manufacturer panel detection (Hikvision, Dahua, Axis), public directories (Opentopia, EarthCam, WebcamTaxi), **RTSP stream references**, and Shodan/Censys census data

### 5. Subdomain Enumeration

- Detect **hidden subdomains** to uncover additional attack surface
- Choose between **passive (stealthy)** and **active (direct probing)** methods
- Powered by [subfinder](https://github.com/projectdiscovery/subfinder)

### 6. Automated & Customizable Searches

- Set **face recognition accuracy thresholds**
- Limit search depth (pages, image count)
- Disable specific engines (e.g., skip Google)
- Use **multiple parallel workers** for faster results

### 7. Random Username & Query Generation

- Generate **random usernames** to test for possible profiles
- Add **custom username lists** for broader coverage

### 8. No-Confirmation Mode

- Execute searches **without confirmation prompts** — ideal for automation pipelines

---

## 🌐 Intelligence Suite (v3.1) — 13 Domains

Run comprehensive OSINT on any **country, region, or threat actor** with a single command:

| Domain                | Module                   | Description                                             |
| --------------------- | ------------------------ | ------------------------------------------------------- |
| 🏛️ Area Intelligence  | `area_intel.py`          | Military bases, nuclear facilities, defense industry    |
| ⚔️ ORBAT              | `orbat.py`               | Order of Battle — army, navy, air force, special forces |
| 🗺️ GEOINT             | `geoint.py`              | Facility mapping via OpenStreetMap                      |
| 💻 Cyber Intel        | `cyber_intel.py`         | ASN info, APT groups, government domains                |
| 📡 SIGINT             | `sigint_recon.py`        | Radar, EW, satellite, comms infrastructure              |
| 📰 Regional Sentiment | `regional_sentiment.py`  | News sentiment, risk indicators, narratives             |
| 🚀 Weapons Database   | `weapons_db.py`          | 17 categories of weapons systems                        |
| 🚫 Sanctions          | `sanctions_watchlist.py` | UN, OFAC, EU sanctions & arms embargoes                 |
| 💰 Economic Intel     | `economic_intel.py`      | GDP, military spending, arms trade, resources           |
| 🕵️ HUMINT Leads       | `humint_leads.py`        | Key personnel, org charts, defense officials            |
| 📂 Leaked Docs        | `leaked_docs.py`         | WikiLeaks, declassified, FOIA, think tanks              |
| 📷 CAMINT             | `leaked_cameras.py`      | Public security cams (Insecam, RTSP, dorks, Shodan)     |
| 🔮 Predictive Intel   | `predictive_intel.py`    | Geopolitical tension index & Polymarket forecasting     |

---

## 🎯 Target Profiling — Any Input, Instant Intelligence

The profiler **auto-classifies** any input and dispatches the right OSINT modules automatically:

| Input Type  | Example                    | Modules Activated                          |
| ----------- | -------------------------- | ------------------------------------------ |
| Twitter/X   | `@elonmusk`                | Twitter OSINT, cross-platform search       |
| Instagram   | `instagram.com/username`   | Instagram OSINT, image search              |
| LinkedIn    | `linkedin.com/in/username` | LinkedIn OSINT, person search              |
| Reddit      | `reddit.com/u/username`    | Reddit OSINT, post history                 |
| GitHub      | `github.com/username`      | Repo search, developer OSINT               |
| Email       | `user@example.com`         | Breach check, WHOIS, social search         |
| Phone       | `+91 9876543210`           | Carrier, reverse lookup, WhatsApp/Telegram |
| Domain/URL  | `example.com`              | WHOIS, subdomain enum, IP lookup           |
| IP Address  | `1.2.3.4`                  | GeoIP, reverse DNS, ASN lookup             |
| Person Name | `John Doe`                 | Multi-platform search, image search        |
| Username    | `johndoe`                  | Cross-platform social search               |
| TikTok      | `tiktok.com/@username`     | Social search, video mentions              |
| Mastodon    | `@user@instance.social`    | Fediverse search                           |

---

## 📄 Automated PDF Intelligence Briefs

Every `intel` and `target` command auto-generates a **professional PDF report** including:

- 🔴 **Cover page** with classification banner (7 levels supported)
- 📊 **Executive Summary** with threat scores and domain capability breakdown
- 📚 **Rich Wikipedia content** — paragraphs, infobox facts, structured data per category
- 🤖 **AI-generated extractive summaries** per section (sumy LSA — offline, no GPU)
- 🔢 **Key numeric facts** highlighted per section (troop counts, budgets, ranges)
- 📷 **CAMINT section** — table of publicly exposed security cameras
- 📋 Full **threat assessment, recommendations, and source index**

### Classification Levels Supported

| Level      | Marking                       |
| ---------- | ----------------------------- |
| ✅ Default | `UNCLASSIFIED // OSINT`       |
| 🔵         | `UNCLASSIFIED // FOUO`        |
| 🟡         | `CONFIDENTIAL`                |
| 🟠         | `SECRET`                      |
| 🔴         | `TOP SECRET`                  |
| 🔴🔴       | `TOP SECRET // SCI`           |
| 🔴🔴🔴     | `TOP SECRET // SCI // NOFORN` |

---

## 🤖 Local AI Summaries — No API, No GPU

Every section of the PDF report includes an **AI-generated summary** using extractive NLP:

- ✅ Works **100% offline** — no internet connection required
- ✅ **No API key** needed — no OpenAI, no Gemini dependency
- ✅ **No model download** — lightweight sumy LSA algorithm
- ✅ Runs comfortably on **low-end hardware** (tested on Dell Latitude)
- ✅ Automatically selects the **most fact-dense sentences** from Wikipedia sources

---

## 🖥️ Web GUI Dashboard

Military-grade dark-themed browser interface for all capabilities:
**Features:**

- 📡 Intel Collection form with all 13 domain modules
- 🎯 Target Profiling with face image upload
- 📊 Live progress tracking (phase-by-phase)
- 📁 Results management with per-session ZIP download
- 📥 **Download All Results** button
- 📄 Integrated report viewer (HTML, PDF, JSON)

---

## ⚡ Performance

### Multi-Engine Search Coverage

| Context                     | Engines                                                         |
| --------------------------- | --------------------------------------------------------------- |
| Area intelligence (`intel`) | Bing, DuckDuckGo, Yahoo, Startpage, Dogpile, Ask, Brave, Mojeek |
| Dorking                     | Bing **+** all above in parallel                                |
| General target search       | Bing + Google                                                   |
| Reports                     | Up to **100 results/engine**, **200 top results** overall       |

### Parallel Face Comparison

| Metric            | Before     | After        |
| ----------------- | ---------- | ------------ |
| Workers           | 1 (serial) | 4 (parallel) |
| Per-image timeout | none       | 10 seconds   |

### Smart Timeouts

- WHOIS lookups enforce a **5-second socket timeout** per domain
- Unresolvable domain guesses skip subdomain enumeration automatically
- Cuts worst-case runtime from **minutes → seconds**

---

## ⚖️ Patent Information

**Adverse** is undergoing patenting process in India.

> **Patent Application No: 202531018252**
> Published in _India Patent Journal_ (Issue No: 13/2025, 28/03/2025) under the title
> _"Automated Open-Source Intelligence System for Digital Identity Verification and Cyber Surveillance"_

<div class="containerpdf">
    <iframe src='https://bucket.{{ page.original_base_url }}/assets/pdf/adverse_patent_status.pdf' class="responsive-object-pdf" type='application/pdf'></iframe>
</div>

The patent for adverse been published in India Patent Journal (Issue No: 13/2025, 28/03/2025, Friday) under the title "Automated Open-Source Intelligence System for Digital Identity Verification and Cyber Surveillance" with the application number **202531018252**. _Pdf page - 1070_

<div class="containerpdf">
    <iframe src='https://bucket.{{ page.original_base_url }}/adverse-patent-journal-28thmarch.pdf#page=1070' class="responsive-object-pdf" type='application/pdf'></iframe>
</div>

---

## **Demo report generated by Adverse**

Adverse is capable of generating a comprehensive report based on the data it collects. This report includes detailed information about the target, including their social media profiles, images, and any other relevant data. The report is designed to be user-friendly and can be easily shared with law enforcement or other relevant parties.
Below I have shared a demo report which does not include all the parts of the report but gives you an idea of how the report looks like.

**China Intel (Demo)** [**Password Accessible**: __7453__]: [https://short.thecreativenet.in/adverse/china](https://workdrive.zohoexternal.in/external/a226211798920bb7b3deaeab4f75c09d167a3ef513b2192da442286182fb37b4)

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/products/adverse/china_intel_brief.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/products/adverse/china_intel_capabilities.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

**Mazood Azhar Intel (Demo)** [**Password Accessible**: To be to shared to approved individuals]: [https://short.thecreativenet.in/adverse/azhar](https://workdrive.zohoexternal.in/external/a7ef9680c9396972d546f62f7361d7e544934ba9a267d210ddf04a2994518e35)

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/products/adverse/masood_azhar_executive_summary.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/products/adverse/masood_azhar_final_report.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/products/adverse/masood_azhar_social_search.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/products/adverse/masood_azhar_sentiment_keywords.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

---

## 📜 Usage & Licensing

> _This software is exclusively offered for licensing to the **Ministry of Defence, Government of India** and allied departments & Ministries of Government of India._
>
> If you are from any other country or organization, this software is not available for sale or distribution.

For licensing inquiries, contact:

- 📧 **me@dhruvashaw.in**
- 📧 **hello@thecreativenet.in**

---

_Note: This project was developed within the timeframe of 2 weeks._

---
