<script setup lang="ts">
const openEmail = () => {
  window.location.href = 'mailto:joseph.holm27@gmail.com'
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
        <a href="https://github.com/Hololm/portfolio" target="_blank">
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
  padding-bottom: 1rem;
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
  margin-bottom: 3rem;
}

.contact-button {
  font-family: 'Gilroy Medium', serif;
  border-radius: 4px;
  color: white;
  font-size: 20px;
  background: transparent;
  border: 2px solid #88ABEC;
  padding: 16px 48px;
  cursor: pointer;
  margin-bottom: 4rem;
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
  margin-bottom: 0.5rem;
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

@media (max-width: 768px) {
  .footer-container {
    padding: 0 1rem 1.5rem;
  }

  .footer-title {
    font-size: 28px;
    padding-top: 30px;
    padding-bottom: 15px;
  }

  .footer-text {
    font-size: 15px;
    padding: 0;
    margin-bottom: 1.5rem;
  }

  .contact-button {
    font-size: 16px;
    padding: 12px 32px;
    margin-bottom: 3rem;
  }

  .copyright, .source-code a {
    font-size: 13px;
  }

  .github-icon {
    width: 14px;
    height: 14px;
  }
}
</style>