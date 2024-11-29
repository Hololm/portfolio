<script setup lang="ts">
const openEmail = () => {
  window.location.href = 'mailto:your.email@example.com'
}
</script>

<template>
  <div class="footer-container">
    <div class="footer-title">Get In Touch</div>
    <p class="footer-text">
      If you have any inquiries or would like to collaborate, feel free to reach out to me on LinkedIn or send me an email using the button below.
    </p>
    <button class="contact-button" @click="openEmail">
      Contact
    </button>
    <div class="footer-bottom">
      <p class="copyright">Built by Joseph Holm</p>
      <div class="source-code">
        <img src="/assets/github.svg" alt="GitHub" class="github-icon"/>
        <a href="https://github.com/yourusername/portfolio" target="_blank">
          Source Code - GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
}

.footer-title {
  padding-top: 60px;
  padding-bottom: 20px; /* Reduced from 60px */
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: 'Gilroy Bold', serif;
  font-size: 38px;
  color: #eaecef;
}

.footer-text {
  text-align: center;
  max-width: 600px;
  color: #8b949e;
  font-family: 'Gilroy Regular', serif;
  font-size: 18px;
  margin-bottom: 2rem;
}

.contact-button {
  font-family: 'Gilroy Medium', serif;
  border-radius: 4px;
  color: white;
  font-size: 20px;
  background: transparent;
  border: 2px solid #88ABEC;
  padding: 16px 48px; /* Wider button */
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-bottom: 6rem; /* More gap before footer */
}

.contact-button:hover {
  transform: scale(1.01);
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.copyright {
  color: #8b949e;
  font-family: 'Gilroy Regular', serif;
  font-size: 14px;
}

.source-code {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.github-icon {
  width: 16px;
  height: 16px;
  filter: invert(56%) sepia(12%) saturate(343%) hue-rotate(176deg) brightness(91%) contrast(86%);
}

.source-code a {
  color: #8b949e;
  text-decoration: none;
  font-family: 'Gilroy Regular', serif;
  font-size: 14px;
}

.source-code a:hover {
  color: #eaecef;
}
</style>