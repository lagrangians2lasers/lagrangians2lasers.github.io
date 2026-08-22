---
layout: page
title: L2L Organizers
subtitle: Meet the Team
---

<div class="organizers-container">

  <div class="current-organizers">
    <h1>Current Organizer</h1>
    <div class="organizer">
      <div class="organizer-photo-container">
        <img src="/assets/img/eeshaan.jpeg" alt="Current Organizer" class="organizer-photo" />
      </div>
      <div class="organizer-info">
        <h2>Eeshaan K B</h2>
        <h3>4th year BS-MS (2022-2027)</h3>
        <p><strong>Tenure:</strong> Aug '26 - Present</p>
        <p></p>
      </div>
    </div>
  </div>

  <div class="previous-organizers">
    <h1>Previous Organizers</h1>
    <a href="https://shreyasbakare.github.io" target="_blank" class="organizer-link">
      <div class="organizer">
        <div class="organizer-photo-container">
          <img src="/assets/img/shreyas.png" alt="Previous Organizer" class="organizer-photo" />
        </div>
        <div class="organizer-info">
          <h2>Shreyas Bakare</h2>
          <h3>5th year BS-MS (2020-2025)</h3>
          <p><strong>Tenure:</strong> May '24 - Apr '25</p>
          <p>Building on Parijat's vision of L2L to bridge communication gaps between subfields of physics, I am encouraging younger students to engage more actively, aiming to close the gap between junior and senior students while ensuring the continuity of the club’s existing workflow.</p>
          <p>To further expand and nurture a more inclusive and vibrant community, I am developing an active social media presence and have created this website to better organize and present L2L.</p>
          <p>I appreciate the support from our speakers and attendees and look forward to further enriching and strengthening Lagrangians to Lasers.</p>
        </div>
      </div>
    </a>
    <div class="organizer">
      <div class="organizer-photo-container">
        <img src="/assets/img/pari.jpg" alt="Previous Organizer" class="organizer-photo" />
      </div>
      <div class="organizer-info">
        <h2>Parijat Banerjee</h2>
        <h3>BS-MS (2019-2024)</h3>
        <p><strong>Tenure:</strong> Jan '23 - Apr '24</p>
        <p>Throughout my tenure at IISER, I noticed a disconnect between various fields of physics and a lack of discussion of ideas among students. I decided to start a journal club as a platform primarily for undergrads interested in different fields of physics to communicate their research interests among peers.</p>
        <p>I am thankful to all the speakers and attendees for making this a success. I look forward to more engaging discussions in the next editions of Lagrangians To Lasers!</p>
      </div>
    </div>
  </div>

</div>

<style>
.organizers-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
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
  display: block;
}

.organizer {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  background-color: #ffffff;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
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
  display: block;
}

.organizer-info {
  padding: 20px;
  text-align: left;
}

.organizer-info h2 {
  margin: 10px 0;
  font-size: 26px;
  font-weight: 700;
}

.organizer-info h3 {
  margin: 5px 0;
  font-size: 20px !important;
  color: #6c757d !important;
  font-weight: 400;
}

.organizer-info p {
  font-size: 18px;
  line-height: 1.6;
  margin: 10px 0;
}

.organizer-info strong {
  color: #495057;
}

@media (min-width: 768px) {
  .organizer {
    flex-direction: row;
  }

  .organizer-photo-container {
    width: 250px;
    flex-shrink: 0;
  }

  .organizer-info {
    flex: 1;
  }
}
</style>
