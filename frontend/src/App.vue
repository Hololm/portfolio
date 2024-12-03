<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue"
import FooterSection from "@/components/FooterSection.vue"
</script>

<template>
  <div>
    <Transition name="fade" appear>
      <NavBar />
    </Transition>
    <Transition name="slide-fade" appear>
      <RouterView />
    </Transition>
    <Transition name="fade" appear>
      <FooterSection />
    </Transition>
  </div>
</template>

<style>
/* Fade animation for navbar */
.fade-enter-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from {
  opacity: 0;
}

/* Slide and fade animation for main content */
.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

::-webkit-scrollbar {
    display: block;
    width: 5px;
  border-radius: 5px;
}

::-webkit-scrollbar-track {
    background: rgb(49, 55, 69);
}

::-webkit-scrollbar-thumb {
    background-color: rgb(109, 119, 140);
  border-radius: 5px;
}

::-webkit-scrollbar-track-piece:end {
    background: transparent;
}

::-webkit-scrollbar-track-piece:start {
    background: transparent;
}
</style>