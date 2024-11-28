<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue"
</script>

<template>
  <div>
    <NavBar />
    <RouterView />
  </div>
</template>

<style>
::-webkit-scrollbar {
    display: block;
    width: 5px;
  border-radius: 5px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background-color: rgb(94, 103, 122);
  border-radius: 5px;
}

::-webkit-scrollbar-track-piece:end {
    background: transparent;
}

::-webkit-scrollbar-track-piece:start {
    background: transparent;
}
</style>