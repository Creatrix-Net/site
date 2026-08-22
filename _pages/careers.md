---
layout: page
title: Careers
permalink: /careers/
description: Explore career opportunities at Creative Net.
nav: false
---

<section class="cn-hero">
  <span class="cn-kicker">Creative Net • Careers</span>
  <h1>Build Defense-Tech Software with Us</h1>
  <p class="cn-lead">
    We are building mission-critical software for intelligence communities and looking for engineers, researchers, and problem-solvers who thrive in high-impact environments.
  </p>
</section>

{% for job in site.data.careers %}

<div class="job-listing">
  <h3>{{ job.title }} {% if job.closed %} - [Closed]{% endif %}</h3>
  <ul>
    <li><strong>Type:</strong> {{ job.type }}</li>
    <li><strong>Status:</strong> {% if job.closed %}Closed{% else %}Open{% endif %}</li>
    {% if job.department %}
      <li><strong>Department:</strong> {{ job.department }}</li>
    {% endif %}
    <li><strong>Location:</strong> {{ job.location }}</li>
  </ul>
  <p>{{ job.description }}</p>
  <a href="{{ job.apply_url }}" target="_blank" >Apply Now</a>
</div>
<hr/>
{% endfor %}

---

We are always looking for talented and passionate individuals to join our team. Fill in the talent form below, and we will contact you when a suitable role opens.

<a href="https://forms.gle/Sfk2RaKhYb474yHk9" target="_blank" rel="noopener noreferrer">Talent Form</a>
