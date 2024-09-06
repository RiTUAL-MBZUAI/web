---
title: "RiTUAL - News"
layout: textlay
excerpt: "RiTUAL -- News"
sitemap: false
permalink: /allnews.html
---

<h3>News</h3>


{% for article in site.data.news %}

<!--
{{ article.date }} <br> {{ article.headline | markdownify  | remove: "<p>" | remove: "</p>" }} <br>
-->
  {{ article.date }} <br> {{ article.headline }} <br>
  {{ <p> article.newsbody </p> | markdownify }}
  
{% endfor %}
