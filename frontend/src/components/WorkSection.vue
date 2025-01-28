<script setup lang="ts">
import JobCard from '@/components/JobCard.vue'
</script>

<template>
  <section class="work-section">
    <h2 class="work-title">Professional Experience</h2>
    <div class="jobs-container">
      <JobCard
      logo="/assets/docusign.svg"
      company="Docusign"
      role="Incoming Software Engineering Intern"
      startDate="Jun. 2025"
      endDate="Aug. 2025"
      location="SF Bay Area, California, United States"
      :technologies="[]"
      :bulletPoints="[
        'To be added',
        'To be added',
        'To be added',
      ]"
      websiteUrl="https://www.docusign.com/"
    />
      <JobCard
      logo="/assets/epics.jpg"
      company="epics@ASU"
      role="Software Engineer"
      startDate="Jan. 2025"
      endDate="Present"
      location="Tempe, Arizona, United States"
      :technologies="[]"
      :bulletPoints="[
        'To be added',
        'To be added',
        'To be added',
      ]"
      websiteUrl="https://www.docusign.com/"
    />
    <JobCard
      logo="/assets/soda.svg"
      company="The Software Developer's Association"
      role="Software Development Intern"
      startDate="Oct. 2024"
      endDate="Present"
      location="Tempe, Arizona, United States"
      :technologies="['Vue.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB']"
      :bulletPoints="[
        'Selected as the top-performing team to present project outcomes at a company-wide event, showcasing the\n'+
        'messaging platform to an audience of over 100 attendees including industry professionals',
        'Developed the Vue chat interface for an all-in-one messaging platform, enabling users to send and receive messages\n'+
        'across multiple platforms through a single web client',
        'Deployed REST API message endpoints using ExpressJS and NodeJS, allowing for secure message retrieval and\n'+
        'processing',
        'Implemented a MongoDB database schema to efficiently store and retrieve user session data and messages,\n'+
        'optimizing query performance and enabling real-time message synchronization across platforms'
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
      :technologies="['Python', 'Selenium', 'Google Sheets API']"
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
      :technologies="['BluePrism', 'Python', 'RPA']"
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
      :technologies="['IT', 'Operating Systems', 'Hardware']"
      websiteUrl="https://dysart.org/mainsite"
    />
    </div>
  </section>
</template>

<style scoped>
.work-section {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.work-title {
  text-align: center;
  font-family: 'Gilroy Bold', serif;
  font-size: 2.5rem;
  color: #eaecef;
  margin-bottom: 3rem;
}

.jobs-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .work-section {
    padding: 2rem 1rem;
  }

  .work-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}
</style>
