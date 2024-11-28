<template>
  <div class="experience-title">
    My Projects
  </div>
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
        { name: 'Vite' },
        { name: 'MongoDB' }
      ]"
      imageSrc="/assets/lighthouse.png"
      imageAlt="Lighthouse Project"
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
        { name: 'MongoDB' },
        { name: 'FastAPI' },
        { name: 'Node.js' },
        { name: 'Python' },
        { name: 'JavaScript' },
        { name: 'Vue.js' },
      ]"
      imageSrc="/assets/trustify.png"
      imageAlt="trustify project"
                      githubLink="https://github.com/yourproject"
      devpostLink="https://devpost.com/yourproject"
    />
    <!-- Project 3-->
    <ProjectComponent
    title="findit."
      :description="[
        'findit. is an intelligent shopping assistant designed to guide users through the decision-making process. By interacting with a natural language chatbot, users can specify their needs.',
        'A retrieval-augmented generation (RAG) system and a vectorized product database allows the chatbot to return 3-5 highly personalized product recommendations.'
      ]"
      :technologies="[
        { name: 'Vue.js' },
        { name: 'JavaScript' },
        { name: 'Python' },
        { name: 'FastAPI' },
        { name: 'Vite' },
        { name: 'MongoDB' }
      ]"
      imageSrc="/assets/findit.png"
      imageAlt="findit. project"
    />
  </div>
</template>

<style scoped>

.experience-title {
  padding-top: 60px;
  padding-bottom: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: 'Gilroy Bold', serif;
  font-size: 64px;
  color: white;
}

.experience-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.project-tech span {
  color: #88ABEC;
  font-size: 14px;
  font-family: "Gilroy Medium", serif;
}

.project-image img {
  width: 100%;
  border-radius: 4px;
  transition: transform 0.3s ease;
}

.project-image:hover img {
  transform: translateY(-5px);
}

</style>

<script setup lang="ts">
import ProjectComponent from '@/components/ProjectComponent.vue'
</script>