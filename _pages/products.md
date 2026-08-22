---
layout: page
title: Products & Research
permalink: /products/
description: Ongoing/Finished Products & Research.
nav: true
nav_order: 3
display_categories: [defence, work, fun]
horizontal: false
---

<section class="cn-hero">
  <span class="cn-kicker">Creative Net • Portfolio</span>
  <h1>Mission-Driven Products & Research</h1>
  <p class="cn-lead">
    Explore defense software systems, applied research programs, and engineering products built for intelligence, robotics, and secure automation.
  </p>
  <div class="cn-chip-row">
    <span class="cn-chip">Defense Intelligence Software</span>
    <span class="cn-chip">Cybersecurity & Threat Detection</span>
    <span class="cn-chip">Robotics & Autonomy</span>
    <span class="cn-chip">Applied R&D</span>
  </div>
</section>

<div class="projects">
{% if site.enable_product_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  {% assign category_label = category %}
  {% if category == "defence" %}
    {% assign category_label = "Defense Systems" %}
  {% elsif category == "work" %}
    {% assign category_label = "Applied Research" %}
  {% elsif category == "fun" %}
    {% assign category_label = "Community & Open Innovation" %}
  {% endif %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category cn-section-title">{{ category_label }}</h2>
  </a>
  {% assign categorized_projects = site.products | where: "category", category %}
  {% assign sorted_projects = categorized_projects | default: empty | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.products | default: empty | sort: "importance" %}

<!-- Generate cards for each project -->

{% if page.horizontal %}

<div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
