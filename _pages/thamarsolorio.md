---
title: "Thamar Solorio | NLP Professor at MBZUAI - Text Understanding & Analysis"
layout: gridlay
excerpt: "Thamar Solorio | RiTUAL is a leading NLP and AI research group at Mohamed Bin Zayed University of Artificial Intelligences (MBZUAL)."
sitemap: false
permalink: /thamarsolorio/
---


{% assign number_printed = 0 %}
{% for member in site.data.team_leader %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-12 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/mbzuai_staff/{{ member.photo }}" class="img-responsive" width="30%" style="float: left" alt="{{ member.name }}" />
  <h1 class="sub-heading bold">{{ member.name }}</h1>  
  <em class="gray"> {{ member.role }}</em>

[//]: # (  <a href="mailto:{{ member.email }}">{{ member.email }}</a>)
  <div style="text-align: justify;">
  <p>{{ member.info }}</p>
  Email: {{ member.email }}
  </div>
 <p>X: {{ member.x }}</p>
 <!-- <h5>Education:</h5>
 -->
<ul style="overflow: hidden">

  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1 | markdownify}} </li>
  <li> {{ member.education2 | markdownify}} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

  {% if member.number_educ == 5 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  {% endif %}

</ul>
</div>
<div class="col-sm-12 clearfix">
  <a href="{{ member.google_scholar }}" class="custom-sky-btn" target="_blank">GOOGLE SCHOLAR</a>
  <a href="{{ member.x }}"  class="custom-sky-btn" target="_blank">X</a><br>
</div>
