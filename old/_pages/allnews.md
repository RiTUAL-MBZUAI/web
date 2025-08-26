---
title: "RiTUAL - News | NLP & AI Research at MBZUAI - Text Understanding & Analysis"
layout: textlay
excerpt: "RiTUAL is a leading NLP and AI research group at Mohamed Bin Zayed University of Artificial Intelligences (MBZUAL)."
sitemap: false
permalink: /allnews.html
---

<h3>News</h3>


{% for article in site.data.news %}

{{ article.date }} <br> {{ article.headline | markdownify  | remove: "<p>" | remove: "</p>" }} <br>


{% endfor %}
