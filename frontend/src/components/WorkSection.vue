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
        'Selected as the top-performing team to present project outcomes at a company-wide event, showcasing the\n'+
        'messaging platform to an audience of over 100 attendees including industry professionals\n',
        'Developed the Vue chat interface for an all-in-one messaging platform, enabling users to send and receive messages\n'+
        'across multiple platforms through a single web client',
        'Worked on REST API message endpoints using ExpressJS and NodeJS, allowing for secure message retrieval and\n'+
        'processing\n',
        'Designed and implemented a MongoDB database schema to efficiently store and retrieve user session data and\n'+
'messages, optimizing query performance and enabling real-time message synchronization across platforms',
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
        'Improved automation efficiency for healthcare workflows, resulting in a 25% reduction in manual data entry errors\n'+
        'through the implementation of 5 new RPA processes',
        'Accelerated bot development cycles by 40%, reducing average project delivery time from 4 weeks to 2.5 weeks by\n'+
        'architecting reusable backend script templates and standardized schemas in BluePrism',
        'Enhanced cross-team collaboration and knowledge sharing by creating comprehensive documentation for RPA\n'+
        'solutions, including process design documents and user guides, facilitating smooth handovers to operations teams'
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
  max-width: 1250px;
  border-left: 4px solid rgba(127, 159, 220, 0.3);
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .work-section {
    margin: 0;
    padding: 0 1rem;
    border-left: none;
  }
}
</style>