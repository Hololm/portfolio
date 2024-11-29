<script setup lang="ts">
import JobCard from './JobCard.vue'
</script>

<template>
  <div class="work-title">
    My Experience
  </div>
  <div class="work-section">
    <JobCard
      logo="/assets/soda.svg"
      company="The Software Developer's Association"
      role="Software Development Intern"
      startDate="Oct. 2024"
      endDate="Present"
      location="Tempe, Arizona, United States"
      :bulletPoints="[
        'Developed a social media message retrieval system using Vue and Vite that enables users to send and receive Instagram and WhatsApp messages through a dynamic web interface',
        'Built a responsive frontend interface using Vue.js and Tailwind CSS, implementing dynamic routing and Vuex state management for optimized component rendering and user interactions',
        'Developed RESTful API endpoints using Express.js and Node.js for secure message retrieval and processing, implementing custom middleware for data transformation',
        'Implemented client-side caching and WebSocket connections using Socket.io and Vue’s Composition API for real-time message updates, ensuring seamless message delivery and reducing API calls by batching requests'
      ]"
    />
    <JobCard
      logo="/assets/banner.svg"
      company="Banner Health"
      role="Software Engineer Intern"
      startDate="Mar. 2023"
      endDate="May 2023"
      location="Surprise, Arizona, United States"
      :bulletPoints="[
        'Served as the primary touchpoint and relationship owner for high-value Consumer customers',
        'Provided best-in-class customer experience through effective stakeholder management',
        'Collaborated across teams to resolve customer issues'
      ]"
    />
    <JobCard
      logo="/assets/Arizona_State_University_logo-cropped.svg"
      company="ASU"
      role="Safety Escort Associate"
      startDate="Sep. 2024"
      endDate="Present"
      location="Tempe, Arizona, United States"
      :bulletPoints="[
        'Served as the primary touchpoint and relationship owner for high-value Consumer customers',
        'Provided best-in-class customer experience through effective stakeholder management',
        'Collaborated across teams to resolve customer issues'
      ]"
    />
  </div>
</template>

<style scoped>
.work-title {
  padding-top: 60px;
  padding-bottom: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: 'Gilroy Bold', serif;
  font-size: 64px;
  color: #eaecef;
}

.work-section {
  flex-direction: column;
  max-width: 1200px;
  border-left: 4px solid rgba(127, 159, 220, 0.3);
  margin: 0 6.4rem 0 auto;
}
</style>