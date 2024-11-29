<script setup lang="ts">
import JobCard from '@/components/JobCard.vue'

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
      websiteUrl="https://thesoda.io/mentorship"
    />
    <JobCard
      logo="/assets/Arizona_State_University_logo-cropped.svg"
      company="Arizona State University"
      role="Safety Escort Associate"
      startDate="Sep. 2024"
      endDate="Present"
      location="Tempe, Arizona, United States"
      :bulletPoints="[
        'Provide safe transportation services across campus while maintaining detailed digital records of routes, pick-up/drop-off times, and passenger data through Google Sheets',
        'Monitor and respond to incoming safety-related communications through LiveSafe dashboard, ensuring prompt assistance to campus community members',
        'Coordinate real-time transportation logistics while maintaining clear communication with dispatchers and passengers to optimize response times and service efficiency'
      ]"
      websiteUrl="https://www.asu.edu/"
    />
    <JobCard
      logo="/assets/banner.svg"
      company="Banner Health"
      role="Software Engineer Intern"
      startDate="Mar. 2023"
      endDate="May 2023"
      location="Surprise, Arizona, United States"
      :bulletPoints="[
        'Engineered and deployed automated workflow solutions using Python and SS&C Blue Prism, reducing manual processing time by 60% and serving 1,000+ healthcare clients in a production environment',
        'Collaborated with senior software engineers on enterprise-scale automation initiatives, implementing best practices in version control, code review, and agile development methodologies',
        'Architected reusable backend script templates and standardized schemas that accelerated bot development cycles by 40% and improved code maintainability across the automation platform'
      ]"
      websiteUrl="https://www.bannerhealth.com/"
    />
    <JobCard
      logo="/assets/dysart.svg"
      company="Dysart Schools"
      role="Computer Systems Maintenance Assistant"
      startDate="Jan. 2023"
      endDate="Apr. 2023"
      location="Surprise, Arizona, United States"
      :bulletPoints="[
        'Diagnosed and repaired aging computers to enhance performance, utilizing systematic troubleshooting methods and research to resolve complex technical issues',
        'Collaborated on district-wide initiative to repair and maintain school-issued Chromebooks, ensuring optimal functionality for educational use',
        'Managed inventory of PC components, including organizing new shipments and maintaining stock levels for future computer assembly projects'
      ]"
      websiteUrl="https://www.dysart.org/mainsite"
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
  font-size: 38px;
  color: #eaecef;
}

.work-section {
  flex-direction: column;
  max-width: 1200px;
  border-left: 4px solid rgba(127, 159, 220, 0.3);
  margin: 0 6.4rem 0 auto;
}
</style>