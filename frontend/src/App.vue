<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue"
import HomeView from "@/views/HomeView.vue"

</script>

<template>
  <div>
    <NavBar />
    <HomeView />
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