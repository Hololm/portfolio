<template>
  <div class="tech-stack-carousel">
    <div class="carousel-container">
      <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(tech, index) in techStack" :key="index" class="carousel-slide">
          <img :src="tech.icon" :alt="tech.name" class="tech-icon" />
          <span class="tech-name">{{ tech.name }}</span>
        </div>
      </div>
    </div>
    <button class="nav-button prev" @click="prev">&lt;</button>
    <button class="nav-button next" @click="next">&gt;</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      techStack: [
        { name: 'Python', icon: '/icons/python.svg' },
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
        { name: 'TypeScript', icon: '/icons/typescript.svg' },
        { name: 'Vue', icon: '/icons/vue.svg' },
        { name: 'React', icon: '/icons/react.svg' }
      ]
    }
  },
  methods: {
    next() {
      if (this.currentIndex < this.techStack.length - 1) {
        this.currentIndex++
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    }
  }
}
</script>

<style scoped>
.tech-stack-carousel {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0;
}

.carousel-container {
  overflow: hidden;
  border-radius: 8px;
  background: #f5f5f5;
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.tech-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}

.tech-name {
  font-size: 18px;
  font-weight: bold;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #333;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: background 0.3s;
}

.nav-button:hover {
  background: #555;
}

.prev {
  left: -50px;
}

.next {
  right: -50px;
}
</style>