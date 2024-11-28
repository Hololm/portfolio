<script setup lang="ts">
import { useRouter } from 'vue-router'
import IntroSection from "@/components/IntroSection.vue"
import DownArrow from '@/components/DownArrow.vue'

const router = useRouter()

const goToAbout = () => {
  router.push('/about')
}
</script>

<template>
  <IntroSection />
  <DownArrow />
</template>

<style scoped>
</style>
