<script setup lang="ts">

</script>

<template>
<div class="layout-container">
    <div class="intro-container">
      <div class="greeting">Hi, I'm</div>
      <h1 class="name">Joseph Holm</h1>
      <div class="title">Full-Stack Developer at ASU</div>
      <p class="description">
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        <br><br>
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
      </p>
    </div>
    <div class="photo-container">
      <div class="placeholder-photo">
        <img src="/assets/me.jpg" alt="Photo"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  min-height: 100vh;
}

@media (max-width: 768px) {
  .placeholder-photo::after {
    left: -15px;
    bottom: -15px;
  }

  .layout-container {
    flex-direction: column-reverse;
    padding: 1rem;
    justify-content: center;
    min-height: auto;
  }
   .intro-container {
    padding-right: 0;
    margin-top: 2rem;
    text-align: center;
  }

  .description {
    margin: 0 auto;
  }

  .photo-container {
    margin-bottom: 2rem;
  }

  .placeholder-photo img {
    width: 300px;
    height: 300px;
  }

  .name {
    font-size: 48px;
  }
}

.photo-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.placeholder-photo {
  position: relative;
  z-index: 2;
  width: 400px;
}

.placeholder-photo img {
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  position: relative;
}

.placeholder-photo::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  left: 20px;
  bottom: -10px;
  z-index: -1;
}

.greeting {
  font-size: 32px;
  color: #ffffff;
  opacity: 0.9;
  margin-bottom: 8px;
  font-family: "Gilroy Medium", serif;
}

.name {
  font-size: 72px;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -2px;
  font-family: "Gilroy Bold", serif;
}

.title {
  font-size: 24px;
  color: #ffffff;
  opacity: 0.8;
  margin-top: 8px;
  margin-bottom: 32px;
  font-family: "Gilroy Medium", serif;
}

.description {
  font-size: 18px;
  line-height: 1.6;
  color: #ffffff;
  opacity: 0.7;
  max-width: 650px;
  font-family: "Gilroy Regular", serif;
}
</style>