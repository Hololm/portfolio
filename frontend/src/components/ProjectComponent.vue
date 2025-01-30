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
  githubLink?: string;
  devpostLink?: string;
  youtubeLink?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="project-card">
    <div class="image-container">
      <img :src="imageSrc" :alt="imageAlt || title" class="project-image" />
    </div>

    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <div class="description">
        <p v-for="(paragraph, index) in description" :key="index">
          {{ paragraph }}
        </p>
      </div>

      <div class="tech-stack">
        <span v-for="tech in technologies" :key="tech.name" class="tech-tag">
          {{ tech.name }}
        </span>
      </div>

      <div class="links">
        <a v-if="githubLink" :href="githubLink" target="_blank" class="link">
          <img src="/assets/github.svg" alt="GitHub" class="github-icon" />
        </a>
        <a v-if="devpostLink" :href="devpostLink" target="_blank" class="link">
          <img src="/assets/devpost.svg" alt="DevPost" class="devpost-icon" />
        </a>
        <a v-if="youtubeLink" :href="youtubeLink" target="_blank" class="link">
          <img src="/assets/youtube.svg" alt="YouTube" class="youtube-icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  background: rgba(30, 30, 30, 0.6);
  border-radius: 16px;
  padding: 2rem;
  margin: 1.5rem 0; /* Reduced from 2.5rem */
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: #4ECDC4;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.image-container {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  height: 300px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: rgba(0, 0, 0, 0.2);
}

.project-card:hover .project-image {
  transform: none;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.title {
  font-size: 1.8rem;
  color: #eaecef;
  margin: 0;
  font-family: 'Gilroy Bold';
}

.description {
  color: #bcc6d1;
  line-height: 1.6;
  font-size: 1rem;
  font-family: 'Gilroy Regular';
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto;
}

.tech-tag {
  background: rgba(78, 205, 196, 0.1);
  color: #4ECDC4;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid rgba(78, 205, 196, 0.3);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: rgba(78, 205, 196, 0.2);
  transform: translateY(-2px);
}

.links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.link {
  width: 32px;
  height: 32px;
  transition: all 0.3s ease;
  opacity: 0.8;
}

.github-icon {
  width: 28px;
  height: 28px;
  filter: brightness(0) invert(1);
  transition: all 0.3s ease;
}

.github-icon:hover {
  filter: brightness(0) invert(1) drop-shadow(0 2px 4px rgba(78, 205, 196, 0.3));
  transform: scale(1.1);
}

.devpost-icon {
  width: 28px;
  height: 28px;
  transition: all 0.3s ease;
  transform: translateY(1px);
}

.devpost-icon:hover {
  filter: drop-shadow(0 2px 4px rgba(106, 216, 106, 0.3));
  transform: scale(1.1);
}

.youtube-icon {
  width: 32px;
  height: 32px;
  filter: drop-shadow(0 2px 4px rgba(255, 0, 0, 0.2));
  transform: translateY(-1px);
  transition: all 0.3s ease;
}

.youtube-icon:hover {
  filter: drop-shadow(0 4px 8px rgba(255, 0, 0, 0.3));
  transform: scale(1.1);
}

.github-icon,
.devpost-icon,
.youtube-icon {
  vertical-align: middle;
  display: inline-block;
}

/* Remove the link hover transform since we're handling it on icons */
.link:hover {
  transform: none;
  opacity: 1;
}

@media (max-width: 768px) {
  .project-card {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }

  .title {
    font-size: 1.5rem;
  }

  .tech-tag {
    font-size: 0.8rem;
  }
}
</style>
