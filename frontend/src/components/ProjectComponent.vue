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
    <div class="project-image" :class="{ reverse }">
    <img :src="imageSrc" :alt="imageAlt || title" />
    <div class="image-overlay"
         :class="{ reverse }"
         :style="{
           background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`
         }">
    </div>
  </div>
  </div>
</template>

<style scoped>
.project-row {
  flex-direction: row-reverse;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  gap: 6rem;
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
  z-index: 1;
}

.project-image img {
  width: 100%;
  border-radius: 4px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
}

.image-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  top: 15px;
  right: 15px; /* Changed from left to right */
  z-index: 1;
  opacity: 0.6;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-overlay.reverse {
  right: auto;
  left: 15px;
}

.project-image:hover img {
  transform: translate(8px, -8px);
}

.project-image:hover .image-overlay {
  transform: translate(-8px, 8px);
}

.project-image:hover .image-overlay.reverse {
  transform: translate(8px, 8px);
}

.project-image.reverse:hover img {
  transform: translate(-8px, -8px); /* Changed to move left instead of right */
}

.project-image.reverse:hover .image-overlay {
  transform: translate(8px, 8px);
}

@media (max-width: 768px) {
  .project-row, .project-row.reverse {
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
    margin-bottom: 60px;
  }

  .project-title {
    font-size: 28px;
    text-align: left;
  }

  .project-content {
    text-align: left;
    width: 100%;
  }

  .project-description {
    padding: 1.5rem;
    margin: 1rem 0;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
  }

  .project-tech-container {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .project-tech-container.reverse {
    flex-direction: column;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    width: 100%;
    justify-content: flex-start;
  }

  .project-tech.reverse {
    flex-direction: row;
    justify-content: flex-start;
  }

  .project-tech span {
    font-size: 14px;
  }

  .project-social-icons {
    margin: 0;
    width: 100%;
    justify-content: flex-start;
  }

  .project-image {
    width: 100%;
  }

  .image-overlay {
    top: 10px;
    right: 10px;
  }

  .image-overlay.reverse {
    left: 10px;
  }

  .social-icon {
    width: 20px;
    height: 20px;
  }
}
</style>