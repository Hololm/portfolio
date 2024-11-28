<script setup lang="ts">
import { useRouter } from 'vue-router'
import IntroSection from "@/components/IntroSection.vue"
import DownArrow from '@/components/DownArrow.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'

const router = useRouter()

const goToAbout = () => {
  router.push('/about')
}
</script>

<template>
  <IntroSection />
  <DownArrow />
  <ExperienceSection />
</template>

<style scoped>
</style>
