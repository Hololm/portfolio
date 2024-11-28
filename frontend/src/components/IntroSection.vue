<script setup lang="ts">

</script>

<template>
<div class="layout-container">
    <div class="intro-container">
      <div class="greeting">Hi, my name is</div>
      <h1 class="name">Joseph Holm.</h1>
      <div class="title">Full-Stack Developer at ASU</div>
      <p class="description">
        I'm a sophomore at ASU pursuing a degree in Computer Science.
        I'm passionate about building impactful, innovative software
        and I'm always down for a good hackathon.
        <br><br>
        In my spare time when I'm not coding,
        you'll find me reading books or playing badminton and volleyball.
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
  min-height: 80vh;
}

.intro-container {
  border-left: 4px solid rgba(127, 159, 220, 0.3);
  padding-left: 30px;
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
     position: relative; /* Add this */
  }

  .description {
    margin: 0 auto;
  }

  .photo-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .placeholder-photo {
    width: 300px;
    height: 300px;
  }

  .placeholder-photo::after {
    width: 100%;
    height: 100%;
    left: -15px;
    bottom: -15px;
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
  width: 450px;
  height: 450px; /* Add fixed height equal to width */
  aspect-ratio: 1; /* Ensure square shape */
}

.placeholder-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  aspect-ratio: 1; /* Ensure square shape */
}

.greeting {
  font-size: 28px;
  background: linear-gradient(to right, #88ABEC 0%, #3158CF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 6px;
  font-family: "Gilroy Regular", serif;
}

.name {
  font-size: 96px;
  font-weight: bold;
  color: #eaecef;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -2px;
  font-family: "Gilroy Bold", serif;
}

.title {
  font-size: 36px;
  background: linear-gradient(to right, #88ABEC 0%, #3158CF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 1;
  margin-top: 8px;
  margin-bottom: 32px;
  font-family: "Gilroy Medium", serif;
}

.description {
  font-size: 20px;
  line-height: 1.6;
  color: #f8f8fa;
  opacity: 0.92;
  max-width: 650px;
  font-family: "Gilroy Regular", serif;
}
</style>