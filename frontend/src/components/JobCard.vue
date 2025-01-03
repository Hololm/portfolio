<script setup lang="ts">
defineProps<{
  logo: string
  company: string
  role: string
  startDate: string
  endDate: string
  location: string
  bulletPoints: string[]
  websiteUrl: string
}>()

const openWork = (website: string) => {
  window.open(website, '_blank');
}
</script>

<template>
  <div class="work-container">
    <div class="job-header">
      <div class="logo-container">
        <div class="logo-background">
          <img @click="openWork(websiteUrl)"
               :src="logo"
               :alt="company"
               class="logo-icon"
               style="cursor: pointer;"/>
        </div>
        <div class="job-info">
          <div class="job-title">{{ company }}</div>
          <div class="job-company">{{ role }}</div>
          <div class="job-duration">{{ startDate }} - {{ endDate }}</div>
          <div class="job-location">{{ location }}</div>
        </div>
      </div>
    </div>
    <div class="bullet-points">
      <div class="bullet-point" v-for="(point, index) in bulletPoints" :key="index">
        <div class="bullet-content">{{ point }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.work-container {
  margin-bottom: 2rem;
  padding-left: 2rem;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

.job-header {
  margin-bottom: 1.5rem;
}

.logo-container {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.job-company {
  background: linear-gradient(to right, #88ABEC 0%, #5087ea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Gilroy Medium', serif;
  font-size: 1.1rem
}

.logo-background {
  width: 64px;
  height: 64px;
  background: #ffffff;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.logo-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.job-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-family: 'Gilroy Regular', serif;
}

.job-title {
  color: #eaecef;
  font-family: 'Gilroy Bold', serif;
  font-size: 1.4rem;
}

.job-duration, .job-location {
  color: #bcc6d1;
  font-size: 0.9rem;
  font-family: 'Gilroy Regular', serif;
}

.bullet-points {
  position: relative;
  font-family: 'Gilroy Regular', serif;
  max-width: 800px;
  width: 100%;
  box-sizing: border-box;
}

.bullet-point {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
  color: #dae0e8;
}

.bullet-point::after {
  content: '';
  position: absolute;
  left: 0.5rem;
  top: 0.6rem;
  width: 6px;
  height: 6px;
  border-top: 2px solid #88ABEC;
  border-right: 2px solid #88ABEC;
  transform: rotate(45deg);
}

.bullet-content {
  line-height: 1.6;
}

@media (max-width: 768px) {
  .work-container {
    padding: 0 0.5rem;
  }

  .logo-container {
    flex-direction: column;
    align-items: center;
  }

  .job-info {
    align-items: center;
    text-align: center;
    padding: 0.5rem 0;
  }

  .bullet-points {
    padding: 0 0.5rem;
  }

  .bullet-point {
    padding-left: 1.5rem;
  }

  .bullet-point::after {
    left: 0.25rem;
  }

  .job-duration, .job-location {
    text-align: center;
  }
}
</style>
