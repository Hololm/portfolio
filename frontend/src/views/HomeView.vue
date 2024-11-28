<script setup lang="ts">
import { useRouter } from 'vue-router'
import IntroSection from "@/components/IntroSection.vue"

const router = useRouter()

const goToAbout = () => {
  router.push('/about')
}
</script>

<template>
  <IntroSection/>
</template>

<style scoped>
</style>
