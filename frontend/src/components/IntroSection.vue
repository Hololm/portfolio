<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import AOS from 'aos'

const router = useRouter()

const openResume = () => {
  window.open('/Joseph_Holm_Resume.pdf', '_blank');
}

const goToBlog = () => {
  router.push('/blog')
}

onMounted(() => {
  AOS.init()
})
</script>

<template>
  <section class="intro-section">
    <div class="content-wrapper">
      <div class="text-content">
        <div class="header-group">
          <h1 class="name">Joseph Holm</h1>
          <h2 class="title">Incoming SWE Intern @ Docusign</h2>
        </div>

        <p class="description">
          I'm a Computer Science student at ASU passionate about creating impactful software solutions.
          I'm also always down for a good hackathon every now and then.
        </p>
        <p class="description">
          In my spare time when I'm not coding,
          you'll find me reading books, watching movies and TV shows, or playing badminton and volleyball.
        </p>

        <div class="action-buttons">
          <button @click="openResume" class="resume-button">
            View Resume
            <span class="button-icon">→</span>
          </button>
        </div>
      </div>

      <div class="avatar-container">
        <div class="avatar-frame">
          <img src="/assets/me2.jpg" alt="Joseph Holm" class="avatar-image" />
          <div class="avatar-overlay"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro-section {
  width: 100%;
  padding: 6rem 0;
  background: linear-gradient(to bottom, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
}

.content-wrapper {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.text-content {
  position: relative;
  z-index: 2;
}

.header-group {
  margin-bottom: 2.5rem;
}

.name {
  font-size: 4rem;
  color: #eaecef;
  margin: 0;
  line-height: 1;
  font-family: 'Gilroy Bold', serif;
  position: relative;
  display: inline-block;
}

.name::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60%;
  height: 3px;
  background: #4ECDC4;
}

.title {
  font-size: 1.8rem;
  color: #eaecef;
  margin: 1rem 0 0;
  font-family: 'Gilroy Medium', serif;
}

.description {
  font-size: 1.2rem;
  line-height: 1.7;
  color: #bcc6d1;
  max-width: 600px;
  margin-bottom: 2rem;
  font-family: 'Gilroy Regular', serif;
}

.action-buttons {
  display: flex;
  gap: 1.5rem;
}

.resume-button {
  background: #4ECDC4;
  color: #0a0a0a;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'Gilroy Medium', serif;
}

.resume-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
}

.button-icon {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}

.resume-button:hover .button-icon {
  transform: translateX(3px);
}

.avatar-container {
  position: relative;
  display: flex;
  justify-content: center;
}

.avatar-frame {
  width: 400px;
  height: 400px;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.avatar-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(78, 205, 196, 0.1) 0%, rgba(78, 205, 196, 0) 100%);
  pointer-events: none;
}

.avatar-frame:hover {
  transform: translateY(-5px);
}

@media (max-width: 1200px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .header-group {
    text-align: center;
  }

  .name::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .tech-highlights {
    justify-content: center;
  }

  .action-buttons {
    justify-content: center;
  }

  .avatar-container {
    order: -1;
  }

  .avatar-frame {
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .intro-section {
    padding: 4rem 1rem;
  }

  .name {
    font-size: 2.5rem;
  }

  .title {
    font-size: 1.25rem;
  }

  .description {
    font-size: 1rem;
  }

  .avatar-frame {
    width: 250px;
    height: 250px;
  }

  .resume-button {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
}
</style>