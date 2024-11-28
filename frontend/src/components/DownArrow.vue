<script setup lang="ts">

</script>

<template>
  <div class="scroll-arrow-container">
    <div class="scroll-arrow">
      <svg width="40" height="40" viewBox="0 0 40 40">
        <circle class="circle" cx="20" cy="20" r="19" fill="transparent" stroke="rgba(255,255,255,0.1)"/>
        <path class="arrow" d="M20 12v16M13 21l7 7 7-7" stroke="white" stroke-width="2" fill="none"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.scroll-arrow-container {
  display: flex;
  justify-content: center;
  margin-top: 0;
}

.scroll-arrow {
  width: 40px;  /* Match SVG width */
  height: 40px; /* Match SVG height */
  cursor: pointer;
}

.scroll-arrow svg {
  transition: transform 0.3s ease;
}

.scroll-arrow:hover svg {
  transform: translateY(10px);
}

.circle {
  transition: stroke 0.3s ease;
}

.scroll-arrow:hover .circle {
  stroke: rgba(255,255,255,0.3);
}

.arrow {
  transition: stroke 0.3s ease;
}

.scroll-arrow:hover .arrow {
  stroke: rgba(255,255,255,1);
}
</style>