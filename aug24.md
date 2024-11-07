---
layout: page
title: "Aug '24"
subtitle: August 2024 Semester
wantimage: true
# image_directory: "assets/img/Aug24/"
images:
  - path: "assets/img/Aug24/Aug24.png"
    caption: "First 50 attendees: A milestone for L2L in August 2024"
  - path: "assets/img/Aug24/2Aug24.png"
    caption: "From blank slates to bustling spaces! - Aug '24"
  - path: "assets/img/Aug24/Shweta1.jpeg"
    caption: "Shweta Shankar's Talk - Oct '24"
  - path: "assets/img/Aug24/Meghana1.jpeg"
    caption: "Meghana Ajith's Talk - Oct '24"
  - path: "assets/img/Aug24/Vivek1.jpeg"
    caption: "Vivek Sabarad's Talk - Oct '24"
  - path: "assets/img/Aug24/Aashish1.jpeg"
    caption: "Aashish Jaiswal's Talk - Sept '24"
  - path: "assets/img/Aug24/Aashish1.jpeg"
    caption: "Aashish Jaiswal's Talk - Aug '24"
  - path: "assets/img/Aug24/Ira1.png"
    caption: "Ira Mishra's Talk in Summer Sprints 1 - Aug '24"
  - path: "assets/img/Aug24/Angad1.png"
    caption: "Angad Singh's Talk in Summer Sprints 1 - Aug '24"
  - path: "assets/img/Aug24/Harini1.png"
    caption: "Harini Karthikeyan's Talk in Summer Sprints 1 - Aug '24"
  - path: "assets/img/Aug24/Piyush1.png"
    caption: "Piyush Kolhe's Talk in Summer Sprints 1 - Aug '24"
  - path: "assets/img/Aug24/Niveditha1.png"
    caption: "Niveditha Warrier's Talk in Summer Sprints 1 - Aug '24"
---

<div class="post-list">
  {% assign start_date = '2024-07-01' | date: '%s' %}
  {% assign end_date = '2024-12-30' | date: '%s' %}

  {% assign sorted_posts = site.posts | reverse %}
  {% assign sorted_posts = sorted_posts | sort: 'date' %}

  {% for post in sorted_posts %}
    {% assign post_date = post.date | date: '%s' %}
    {% if post_date >= start_date and post_date <= end_date %}
      <div class="post-box">
        {% if post.date > site.time %}
          <h3 class="blinking-text" style="color: rgb(106, 20, 7);">[Upcoming!]</h3>
        {% endif %}
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
