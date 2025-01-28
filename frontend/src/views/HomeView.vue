<script setup lang="ts">
import { useRouter } from 'vue-router'
import IntroSection from '@/components/IntroSection.vue'
import DownArrow from '@/components/DownArrow.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import WorkSection from '@/components/WorkSection.vue'
import TechSection from '@/components/TechSection.vue'

const router = useRouter()

const goToAbout = () => {
  router.push('/about')
}
</script>

<template>
  <IntroSection />
  <WorkSection />
  <ExperienceSection />
  <TechSection />
</template>

<style scoped>
</style>
