<!-- ProjectSection.vue -->
<script setup lang="ts">
import { onMounted } from 'vue'
import ProjectComponent from '@/components/ProjectComponent.vue'
</script>

<template>
  <section class="experience-section">
    <h2 class="experience-title">Featured Projects</h2>
    <div class="experience-container">
          <!-- Project 1-->
    <ProjectComponent
    title="Lighthouse"
      :description="[
        'Lighthouse is an all-in-one messaging platform combining chats from platforms like Instagram, Whatsapp, and Discord.',
        'It was created to battle social media addiction that teenagers face on a daily basis by cutting out all external distractions and fluff that comes with a social media app.'
      ]"
      :technologies="[
        { name: 'Vue.js' },
        { name: 'JavaScript' },
        { name: 'Python' },
        { name: 'Node.js' },
        { name: 'Express.js' },
      ]"
      gradientStart="rgba(88,94,240,0.7)"
      gradientEnd="rgba(40,47,150,1)"
      imageSrc="/assets/sodamentorship.png"
      imageAlt="WHY IS THIS NOT WORKING VERCEL"
      githubLink="https://github.com/Hololm/reverse-beeper"
      youtubeLink="https://youtu.be/039H_4pYU3U"
    />

    <!-- Project 2-->
    <ProjectComponent
    title="Trustify"
      :description="[
        'Trustify is an intelligent browser extension that detects fake or scam sellers on Amazon.',
        'By analyzing seller details and calculating a trust score, it helps users avoid fraudulent listings.'
      ]"
    :reverse="true"
      :technologies="[
        { name: 'Vue.js' },
        { name: 'Node.js' },
        { name: 'JavaScript' },
      ]"
      gradientStart="rgb(52,211,153,0.8)"
      gradientEnd="rgba(35,197,94,0.8)"
      imageSrc="/assets/trustify.png"
      imageAlt="Trustify project"
      githubLink="https://github.com/Hololm/hacksoda-2024"
      devpostLink="https://devpost.com/software/trustify-ul8n07"
    />
    <!-- Project 3-->
    <ProjectComponent
    title="findit."
      :description="[
        'findit. is an intelligent shopping assistant designed to guide users through the decision-making process.',
        'Interacting with the natural language chatbot, users can specify their needs, getting back 3-5 specific product recommendations.'
      ]"
      :technologies="[
        { name: 'Vue.js' },
        { name: 'JavaScript' },
        { name: 'Python' },
        { name: 'FastAPI' },
        { name: 'MongoDB' }
      ]"
      imageSrc="/assets/findit.png"
      imageAlt="findit. project"
      gradientStart="rgb(211,133,209,0.8)"
      gradientEnd="rgba(176,133,226,0.8)"
      githubLink="https://github.com/ZacharyHampton/sunhacks-2024"
      devpostLink="https://devpost.com/software/findit-lhqfgr"
      youtubeLink="https://www.youtube.com/watch?v=18lt6lk4K2E&ab_channel=SBBillusionist"
    />
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  padding: 4rem 24rem;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
}

.experience-title {
  text-align: center;
  font-family: 'Gilroy Bold', serif;
  font-size: 2.5rem;
  color: #eaecef;
  margin-bottom: 3rem;
}

.experience-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  overflow-x: hidden; /* Hide horizontal overflow */
}

@media (max-width: 768px) {
  .experience-section {
    padding: 2rem 1rem;
    width: 100%;
  }

  .experience-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .experience-container {
    gap: 2rem;
  }
  .project-component {
    flex-direction: column;
    padding: 1rem;
  }
}
</style>
