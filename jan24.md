---
layout: page
title: "Jan '24"
subtitle: January 2024 Semester
wantimage: true
image_directory: "assets/img/Jan24/"
images:
  # - path: "assets/img/Jan24/classroom.jpeg"
  #   caption: "From blank slates to bustling spaces!"
  - path: "assets/img/Jan24/all3.jpeg"
    caption: "L2L by the end of January 2024 semester"
  - path: "assets/img/Jan24/Shreyas1.jpeg"
    caption: "Shreyas Bakare's Talk - Feb '24"
  - path: "assets/img/Jan24/Soham.jpeg"
    caption: "Soham Chandak's Talk - Feb '24"
  - path: "assets/img/Jan24/Gautham.jpeg"
    caption: "Gautham Upadhyaya's Talk - Feb '24"
  - path: "assets/img/Jan24/Dhairya.jpeg"
    caption: "Dhairya Bhandari's Talk - Mar '24"
  - path: "assets/img/Jan24/Shalini.jpeg"
    caption: "Shalini Das's Talk - Mar '24"
  - path: "assets/img/Jan24/Abhilash.jpeg"
    caption: "Abhilash Sengupta's Talk - Mar '24"
  - path: "assets/img/Jan24/Anirban.jpeg"
    caption: "Anirban Roy Chowdhury's Talk - Apr '24"
  - path: "assets/img/Jan24/Chitrakshee.jpeg"
    caption: "Chitrakshee Yede's Talk - Apr '24"
  
---

<div class="post-list">
  {% assign start_date = '2024-01-01' | date: '%s' %}
  {% assign end_date = '2024-06-30' | date: '%s' %}

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
