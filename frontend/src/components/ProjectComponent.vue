<script setup lang="ts">
interface ProjectTech {
  name: string;
}

interface Props {
  title: string;
  description: string[];
  technologies: ProjectTech[];
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean;
  githubLink?: string;
  devpostLink?: string;
  gradientStart?: string; // Add these two new props
  gradientEnd?: string;
}

const props = withDefaults(defineProps<Props>(), {
  gradientStart: 'rgba(255, 255, 255, 0.1)', // Default values
  gradientEnd: 'rgba(255, 255, 255, 0.1)'
});
</script>

<template>
  <div class="project-row" :class="{ reverse }">
    <div class="project-content">
      <h3 class="project-title">{{ title }}</h3>
            <div class="project-description"
           :style="{
             background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`
           }">
        <p v-for="(paragraph, index) in description" :key="index">
          {{ paragraph }}
        </p>
      </div>
      <div class="project-tech-container" :class="{ reverse }">
        <div class="project-tech" :class="{ reverse }">
          <span v-for="tech in technologies" :key="tech.name">
            {{ tech.name }}
          </span>
        </div>
        <div class="project-social-icons">
          <a v-if="githubLink" :href="githubLink" target="_blank" class="social-icon">
            <img src="/assets/github.svg" alt="GitHub" />
          </a>
          <a v-if="devpostLink" :href="devpostLink" target="_blank" class="social-icon">
            <img src="/assets/devpost.svg" alt="DevPost" />
          </a>
        </div>
      </div>
    </div>
    <div class="project-image">
      <img :src="imageSrc" :alt="imageAlt || title" />
    </div>
  </div>
</template>

<style scoped>
.project-row {
  flex-direction: row-reverse;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  gap: 4rem;
}

.project-row.reverse {
  flex-direction: row;
}

.project-tech-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}


.project-tech-container.reverse {
  flex-direction: row-reverse;
}

.project-tech-container.reverse .project-social-icons {
  margin-left: 0; /* Reset right margin when reversed */
  margin-right: auto; /* Push to left when reversed */
}

.project-tech {
  display: flex;
  gap: 1rem;
}

.project-tech.reverse {
  flex-direction: row-reverse;
}

.project-social-icons {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-left: auto; /* Default: push to right */
}

.social-icon {
  opacity: 0.9;
  transition: opacity 0.3s ease;
  width: 24px;
  height: 24px;
}

.social-icon img {
  width: 100%;
  height: 100%;
}

.social-icon:hover {
  opacity: 1;
}

.project-tech span {
  background: linear-gradient(to right, #88ABEC 0%, #78a3ef 100%);
  -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
  font-size: 14px;
  font-family: "Gilroy Medium", serif;
}

.project-content {
  flex: 1;
  z-index: 2;
}

.project-title {
  font-size: 36px;
  color: #eaecef;
  margin-bottom: 1rem;
  font-family: "Gilroy Bold", serif;
}

.project-description {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 4px;
  margin: 1rem 0;
  color: #f8f8fa;
  font-family: "Gilroy Regular", serif;
  font-size: 18px;
}

.project-image {
  flex: 1;
  position: relative;
}

.project-image img {
  width: 100%;
  border-radius: 4px;
  transition: transform 0.3s ease;
}

.project-image:hover img {
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .project-row, .project-row.reverse {
    flex-direction: column;
    gap: 2rem;
  }

  .project-content {
    text-align: center;
  }

.project-tech-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

  .project-tech {
    justify-content: center;
  }

.project-social-icons {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-left: auto; /* Default: push to right */
}
}
</style>