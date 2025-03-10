---
layout: page
title: L2L Organizers
# subtitle: Meet the Team
# cover-img: /assets/img/dbgi.jpeg
---

<head>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<div class="container">
  <div class="current-organizers">
    <h1>Current Organizer</h1>
    <a href="https://shreyasbakare.github.io" target="_blank" class="organizer-link">
      <div class="organizer">
        <div class="organizer-photo-container">
          <img src="/assets/img/shreyas.png" alt="Current Organizer" class="organizer-photo">
        </div>
        <div class="organizer-info">
          <h2>Shreyas Bakare</h2>
          <h3>5th year BS-MS (2020-2025)</h3>
          <p><strong>Tenure:</strong> May '24 - Present</p>
          <p>Building on Parijat's vision of L2L to bridge communication gaps between subfields of physics, I am encouraging younger students to engage more actively, aiming to close the gap between junior and senior students while ensuring the continuity of the club’s existing workflow.</p>
          <p>To further expand and nurture a more inclusive and vibrant community, I am developing an active social media presence and have created this website to better organize and present L2L.</p>
          <p>I appreciate the support from our speakers and attendees and look forward to further enriching and strengthening Lagrangians to Lasers.</p>
        </div>
      </div>
    </a>
  </div>

  <div class="previous-organizers">
    <h1>Previous Organizers</h1>
    <!-- <a href="https://shreyasbakare.github.io" target="_blank" class="organizer-link"> -->
      <div class="organizer">
        <div class="organizer-photo-container">
          <img src="/assets/img/pari.jpg" alt="Previous Organizer" class="organizer-photo">
        </div>
        <div class="organizer-info">
          <h2>Parijat Banerjee</h2>
          <h3>BS-MS (2019-2024)</h3>
          <p><strong>Tenure:</strong> Jan '23 - Apr '24</p>
          <p>Throughout my tenure at IISER, I noticed a disconnect between various fields of physics and a lack of discussion of ideas among students. I decided to start a journal club as a platform primarily for undergrads interested in different fields of physics to communicate their research interests among peers.</p>
          <p>I am thankful to all the speakers and attendees for making this a success. I look forward to more engaging discussions in the next editions of Lagrangians To Lasers!</p>
        </div>
      </div>
    <!-- </a> -->
  </div>
</div>


<style>
  body {
  font-family: 'Montserrat', sans-serif;
  background-color: #f8f9fa;
  color: #343a40;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  max-width: 1200px;
  margin: auto;
}

.current-organizers, .previous-organizers {
  width: 100%;
  margin-bottom: 60px;
}

.current-organizers h1, .previous-organizers h1 {
  font-size: 32px;
  margin-bottom: 30px;
  font-weight: 700;
  border-bottom: 2px solid #dee2e6;
  padding-bottom: 10px;
}

.organizer-link {
  text-decoration: none;
  color: inherit;
}

.organizer {
  display: flex;
  flex-direction: column; /* Stack vertically by default */
  margin-bottom: 50px;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  background-color: #ffffff;
  overflow: hidden;
}

.organizer:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.organizer-photo-container {
  width: 100%;
  height: auto;
  position: relative;
}

.organizer-photo {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.organizer-info {
  padding: 20px;
  text-align: left;
}

h2 {
  margin: 10px 0;
  font-size: 26px;
  font-weight: 700;
}

h3 {
  margin: 5px 0;
  font-size: 20px;
  color: #6c757d;
  font-weight: 500;
}

p {
  font-size: 18px;
  line-height: 1.6;
}

strong {
  color: #495057;
}

@media (min-width: 768px) {
  .organizer {
    flex-direction: row; /* Align horizontally on larger screens */
  }

  .organizer-photo-container {
    width: 250px; /* Fixed width for image container */
  }

  .organizer-info {
    flex: 1; /* Allow text to take remaining space */
  }
}

</style>
