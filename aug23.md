---
layout: page
title: "Aug '23"
subtitle: August 2023 Semester
wantimage: true
# image_directory: "assets/img/Aug24/"
images:
  - path: "assets/img/Aug23/all1.jpg"
    caption: "L2L in Aug '23"
  - path: "assets/img/Aug23/Dhairya.png"
    caption: "Dhairya Bhandari's Talk - Aug '23"
  - path: "assets/img/Aug23/Drishti.jpg"
    caption: "Drishti Gupta's Talk - Aug '23"
  - path: "assets/img/Aug23/Dhruv.jpg"
    caption: "Dhruv Patel's Talk - Aug '23"
  - path: "assets/img/Aug23/Soumya.jpg"
    caption: "Soumya Sarkar's Talk - Aug '23"
  - path: "assets/img/Aug23/Harrsh.jpg"
    caption: "Harrsh Goyal's Talk - Aug '23"
  - path: "assets/img/Aug23/Shivang.jpg"
    caption: "Shivang Yadav's Talk - Aug '23"
  - path: "assets/img/Aug23/Soorya.jpg"
    caption: "Soorya Narayan's Talk - Aug '23"
  - path: "assets/img/Aug23/Kartik.jpg"
    caption: "Kartik Singh's Talk - Aug '23"
---

<div class="post-list">
  {% assign start_date = '2023-07-01' | date: '%s' %}
  {% assign end_date = '2023-12-30' | date: '%s' %}

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
