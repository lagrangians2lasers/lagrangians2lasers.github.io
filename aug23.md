---
layout: page
title: "Jan '24"
subtitle: August Semester 2023
---

<div class="post-list">
  {% assign start_date = '2023-07-01' | date: '%s' %}
  {% assign end_date = '2023-12-31' | date: '%s' %}

  {% for post in site.posts %}
    {% assign post_date = post.date | date: '%s' %}
    {% if post_date >= start_date and post_date <= end_date %}
      <div class="post-box">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
        <p class="post-author">By {% if post.author %}{{ post.author }}{% else %}Unknown Author{% endif %}</p>
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
      </div>
    {% endif %}
  {% endfor %}
</div>


