---
layout: page
title: "Jan '23"
subtitle: January 2023 Semester
wantimage: true
images:
  - path: "assets/img/Jan23/all.png"
    caption: "by the end of January 2023 semester"
  - path: "assets/img/Jan23/Soumil.png"
    caption: "Soumil Kelkar's Talk - Jan '23"
  - path: "assets/img/Jan23/Amogh.png"
    caption: "Amogh Rakesh's Talk - Jan '23"
  - path: "assets/img/Jan23/Shivang.png"
    caption: "Shivang Yadav's Talk - Jan '23"
  - path: "assets/img/Jan23/Parijat.png"
    caption: "Parijat Banerjee's Talk - Feb '23"
  - path: "assets/img/Jan23/Kaustubh.png"
    caption: "Kaustubh Gupta's Talk - Mar '23"
  - path: "assets/img/Jan23/Pranav.png"
    caption: "Pranav Maheshwari's Talk - Mar '23"
  - path: "assets/img/Jan23/Vishal.png"
    caption: "Vishal's Talk - Mar '23"
  - path: "assets/img/Jan23/Vedhanth.png"
    caption: "S.V.U. Vedhanth's Talk - Apr '23"
---

<div class="post-list">
  {% assign start_date = '2023-01-01' | date: '%s' %}
  {% assign end_date = '2023-06-30' | date: '%s' %}

  {% assign sorted_posts = site.posts | reverse %}
  {% assign sorted_posts = sorted_posts | sort: 'date' %}

  {% for post in sorted_posts %}
    {% assign post_date = post.date | date: '%s' %}
    {% if post_date >= start_date and post_date <= end_date %}
      <div class="post-box">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
        <p class="post-author">By {% if post.author %}{{ post.author }}{% else %}Unknown Author{% endif %}</p>
        {% if post.thumbnail-img %}
        <div class="post-thumbnail" style="text-align: center;">
          <img src="{{ post.thumbnail-img | relative_url }}" alt="{{ post.title }}"
         style="max-width: 200px; height: auto; display: block; margin: 0 auto;">
        </div>
        {% endif %}
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
      </div>
    {% endif %}
  {% endfor %}
</div>
