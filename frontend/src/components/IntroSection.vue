<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const openResume = () => {
  window.open('/Joseph_Holm_Resume.pdf', '_blank');
}

const goToBlog = () => {
  router.push('/blog')
}
</script>

<template>
<div class="layout-container">
    <div class="intro-container">
      <div class="greeting">Hi, my name is</div>
      <h1 class="name">Joseph Holm.</h1>
      <div class="title">Full-Stack Developer at ASU</div>
      <p class="description">
        I'm a sophomore at ASU pursuing a degree in Computer Science.
        I'm passionate about building impactful, innovative software
        and I'm always down for a good hackathon every now and then.
        <br><br>
        In my spare time when I'm not coding,
        you'll find me reading books, watching movies or TV shows, or playing badminton and volleyball.
      </p>
      <button @click="openResume" class="resume-button">Check out my resume!</button>
    </div>
    <div class="photo-container">
      <div class="placeholder-photo">
        <img src="/assets/me2.jpg" alt="Photo"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 2rem;
  min-height: 80vh;
}

.intro-container {
  border-left: 4px solid rgba(127, 159, 220, 0.3);
  padding-left: 30px;
  flex: 0 1 60%; /* Adjust the flex-basis to control width */
}

.photo-container {
  flex: 0 1 35%; /* Adjust the flex-basis to control width */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.placeholder-photo {
  position: relative;
  z-index: 2;
  aspect-ratio: 1;
}

.placeholder-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
}


.greeting {
  font-size: 28px;
  background: linear-gradient(to right, #88ABEC 0%, #3158CF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 6px;
  font-family: "Gilroy Regular", serif;
}

.name {
  font-size: 96px;
  font-weight: bold;
  color: #eaecef;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -2px;
  font-family: "Gilroy Bold", serif;
}

.title {
  font-size: 36px;
  background: linear-gradient(to right, #88ABEC 0%, #3158CF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 1;
  margin-top: 8px;
  margin-bottom: 32px;
  font-family: "Gilroy Medium", serif;
}

.description {
  font-size: 20px;
  line-height: 1.6;
  color: #f8f8fa;
  opacity: 0.92;
  max-width: 650px;
  font-family: "Gilroy Regular", serif;
}

.resume-button {
  font-family: 'Gilroy Medium', serif;
  border-radius: 4px;
  color: white;
  font-size: 20px;
  background: transparent;
  border: 0.1rem solid #88ABEC;
  padding: 16px 24px;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.resume-button:hover {
  cursor: pointer;
  transform: scale(1.01);
}

@media (max-width: 768px) {
  .intro-container {
    border-left: none;
    padding-left: 0;
    text-align: center;
  }

  .layout-container {
    flex-direction: column-reverse;
    padding: 1rem;
    justify-content: center;
    min-height: auto;
    gap: 2rem; /* Reduce gap for mobile view */
  }
  .intro-container {
    padding-right: 0;
    margin-top: 2rem;
    text-align: center;
    position: relative;
  }

  .description {
    margin: 0 auto;
  }

  .photo-container {
    margin-left: 0; /* Remove left margin for mobile view */
    margin-bottom: 2rem; /* Add bottom margin for separation in mobile view */
  }

  .placeholder-photo {
    width: 300px;
    height: 300px;
  }

  .name {
    font-size: 48px;
  }

  .resume-button {
    margin-top: 20px;
  }

  .title {
    font-size: 24px;
  }

  .greeting {
    font-size: 24px;
  }
}
</style>