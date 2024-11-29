<script setup lang="ts">
defineProps<{
  logo: string
  company: string
  role: string
  startDate: string
  endDate: string
  location: string
  bulletPoints: string[]
}>()
</script>

<template>
  <div class="work-container">
    <div class="job-header">
      <div class="logo-container">
        <div class="logo-background">
          <img :src="logo" :alt="company" class="logo-icon"/>
        </div>
        <div class="job-info">
          <div class="job-title">{{ role}} @ {{ company }}</div>
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
}

.job-header {
  margin-bottom: 1.5rem;
}

.logo-container {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
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
  font-family: 'Gilroy Medium', serif;
  font-size: 1.5rem;
}

.job-duration, .job-location {
  color: #bcc6d1;
  font-size: 0.9rem;
  font-family: 'Gilroy Regular', serif;
}

.bullet-points {
  padding-left: calc(64px + 1rem);
  position: relative;
  font-family: 'Gilroy Regular', serif;
  max-width: 800px;
}

.bullet-point {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  color: #b4bfcc;
}

.bullet-point::before {
  content: '>';
  position: absolute;
  left: 0;
  color: #88ABEC;
  font-family: 'Gilroy Medium', serif;
  font-size: 1.2rem;
}

.bullet-content {
  line-height: 1.6;
}

.bullet-point:last-child .bullet-marker::before {
  display: none;
}

.bullet-content {
  line-height: 1.6;
}
</style>