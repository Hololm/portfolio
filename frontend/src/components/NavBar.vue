<script setup lang="ts">
</script>

<template>
  <nav class="navbar">
    <div class="left-group">
      <button class="icon-button" title="Contact">
        <i class="icon email-icon"></i>
      </button>
      <button class="icon-button" title="Resume">
        <i class="icon resume-icon"></i>
      </button>
    </div>
    <div class="right-group">
      <a href="https://github.com/Hololm" target="_blank" rel="noopener noreferrer" class="icon-button">
        <i class="icon github-icon"></i>
      </a>
      <a href="https://linkedin.com/in/joseph-holm" target="_blank" rel="noopener noreferrer" class="icon-button">
        <i class="icon linkedin-icon"></i>
      </a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  position: sticky;
  top: 0;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
}

.left-group, .right-group {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.icon-button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
}

.icon-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.5s ease, height 0.5s ease;
}

.icon-button:hover {
  transform: scale(1.1);
}

.icon-button:hover::before {
  width: 150%;
  height: 150%;
}

.icon {
  width: 28px;
  height: 28px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  transition: all 0.3s ease;
}

.email-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>');
  width: 28px;
  height: 28px;
}

.resume-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>');
  width: 28px;
  height: 28px;
}

.github-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>');
  width: 28px;
  height: 28px;
}

.linkedin-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>');
  width: 28px;
  height: 28px;
}

</style>