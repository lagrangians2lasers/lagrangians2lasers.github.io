---
layout: page
title: "Aug '23"
subtitle: August 2023 Semester
wantimage: false
image_directory: "assets/img/Aug24/"
# images:
  # - path: "assets/img/Jan24/da.jpg"
  #   caption: "Caption for image 1"
  # - path: "assets/img/Jan24/dwd.jpg"
  #   caption: "Caption for image 2"
  # - path: "assets/img/Jan24/ssd.jpg"
  # Add more images as needed
---

<div class="post-list">
  {% assign start_date = '2024-07-01' | date: '%s' %}
  {% assign end_date = '2024-12-30' | date: '%s' %}

  {% for post in site.posts %}
    {% assign post_date = post.date | date: '%s' %}
    {% if post_date >= start_date and post_date <= end_date %}
      <div class="post-box">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
        <p class="post-author">By {% if post.author %}{{ post.author }}{% else %}Unknown Author{% endif %}</p>
        {% if post.thumbnail-img %}
        <div class="post-thumbnail" style="text-align: center;">
          <img src="{{ post.thumbnail-img }}" alt="{{ post.title }}"
         style="max-width: 200px; height: auto; display: block; margin: 0 auto;">
        </div>
        {% endif %}
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
      </div>
    {% endif %}
  {% endfor %}
</div>
