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
   
<!-- 
{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}
-->

<h4 id="bio">BIO</h4>
<div class="row">
<div class="col-sm-12 clearfix">
<div style="text-align: justify;">
<p>Prior to joining MBZUAI, Professor Solorio was a Professor of Computer Science at the University of Houston (UH) and the Director and Founder of the RiTUAL Lab at UH. She holds graduate degrees in computer science from the Instituto Nacional de Astrofísica, Óptica y Electrónica, in Puebla, Mexico.</p>

<p>Professor Solorio received an NSF CAREER award for her work on authorship attribution in 2014 – a very prestigious award for young investigators from the National Science Foundation. She is also a recipient of the 2014 Emerging Leader ABIE Award in Honor of Denice Denton.</p>

<p>She is currently serving a second term as an elected board member of the North American Chapter of the Association of Computational Linguistics and was PC co-chair for NAACL 2019. She is also co-Editor-in-Chief for the ACL Rolling Review (ARR) system and member of the ARR advisory board.</p>

<p>Professor Solorio has a US patent awarded in 2022 for her work on recommendation systems for books. Before joining UH, she was an Assistant Professor at the University of Alabama at Birmingham.</p>
</div></div>
</div>

<h4 id="Education">Education</h4>
<div class="row">
<div class="col-sm-12 clearfix">
<div style="text-align: justify;">
* Ph.D. in computer science, National Institute of Astrophysics, Optics and Electronics, in Puebla, Mexico
* Master’s in computer science, National Institute of Astrophysics, Optics and Electronics, in Puebla, Mexico
* Bachelor of Science in computer systems engineering, Autonomous University of Chihuahua, Chihuahua, Chihuahua, Mexico
</div></div>
</div>

<h4 id="Accolades">Accolades</h4>
<div class="row">
<div class="col-sm-12 clearfix">
<div style="text-align: justify;">
* Editor in Chief of the ACL Rolling Review (ARR) initiative, 2022-
* ARR Advisory board member
* Elected board member to the North American Chapter of Association for Computational Linguistics
* UHCS Academic Excellence Award, COSC Department Award,  Fall 2017
* CRA-W Mid Career Mentoring Workshop, Travel Grant, June 2015
* 2014 Denice Denton Emerging Leader ABIE Award, Recognition by the Anita Borg Institute, Fall 2014
* Research Visit for Distinguished Researchers, UPV, Spain, Fall 2011
* Anthony Barnard Award, CIS, UAB Fall 2011
</div></div>
</div>

<h4 id="Research">Research</h4>
<div class="row">
<div class="col-sm-12 clearfix">
<div style="text-align: justify;">
She has coauthored more than 200 publications in a wide range of NLP topics:
* Pubication 1
* Pubication 2
* Pubication 3
</div></div>
</div>

</div>

