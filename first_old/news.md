---
layout: default
title: News
permalink: /news/
---

<section class="page-header container">
  <h1>News</h1>
  <p>Stay up‑to‑date with our latest announcements and achievements.</p>
</section>
<section class="news container">
  <div class="news-grid">
    {% for item in site.data.news.news %}
    <article class="news-item reveal">
      <h3>{{ item.title }}</h3>
      <span class="date">{{ item.date | date: "%B %-d, %Y" }}</span>
      <p>{{ item.content }}</p>
    </article>
    {% endfor %}
  </div>
</section>