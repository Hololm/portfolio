<template>
  <div class="tech-title">
    My Tech Stack
  </div>
  <div class="tech-container">
    <div class="tech-card"
         :style="{
             background: `linear-gradient(to right, rgba(52, 211, 153, 0.8), rgba(35, 197, 94, 0.8))`
           }">
      <p class="tech-header">Programming Languages</p>
      <div class="tech-content">
        <div class="tech-column">
          <div class="tech-item">
            <img src="/assets/python-logo-only.svg" alt="Python" class="tech-icon"/>
            <span>Python</span>
          </div>
          <div class="tech-item">
            <img src="/assets/javascript.svg" alt="JavaScript" class="tech-icon"/>
            <span>JavaScript</span>
          </div>
          <div class="tech-item">
            <img src="/assets/typescript.svg" alt="TypeScript" class="tech-icon"/>
            <span>TypeScript</span>
          </div>
          <div class="tech-item">
            <img src="/assets/matlab.svg" alt="MATLAB" class="tech-icon"/>
            <span>MATLAB</span>
          </div>
        </div>
        <div class="tech-column">
          <div class="tech-item">
            <img src="/assets/java.svg" alt="Java" class="tech-icon"/>
            <span>Java</span>
          </div>
          <div class="tech-item">
            <img src="/assets/C.svg" alt="C" class="tech-icon"/>
            <span>C</span>
          </div>
          <div class="tech-item">
            <img src="/assets/cpp.svg" alt="C++" class="tech-icon"/>
            <span>C++</span>
          </div>
          <div class="tech-item">
            <img src="/assets/sql.svg" alt="SQL" class="tech-icon"/>
            <span>SQL</span>
          </div>
        </div>
      </div>
    </div>
    <div class="tech-card"
         :style="{
             background: `linear-gradient(to right, rgba(60, 130, 246, 0.8), rgba(37, 99, 235, 0.8))`
           }">
      <p class="tech-header">Frameworks & Libraries</p>
      <div class="tech-content">
        <div class="tech-column">
          <div class="tech-item">
            <img src="/assets/vue.svg" alt="Vue.js" class="tech-icon"/>
            <span>Vue</span>
          </div>
          <div class="tech-item">
            <img src="/assets/react.svg" alt="React" class="tech-icon"/>
            <span>React</span>
          </div>
          <div class="tech-item">
            <img src="/assets/fastapi.svg" alt="FastAPI" class="tech-icon"/>
            <span>FastAPI</span>
          </div>
          <div class="tech-item">
            <img src="/assets/Flask.svg" alt="Flask" class="tech-icon"/>
            <span>Flask</span>
          </div>
        </div>
        <div class="tech-column">
          <div class="tech-item">
            <img src="/assets/nodejs.svg" alt="Node.js" class="tech-icon"/>
            <span>Node.js</span>
          </div>
          <div class="tech-item">
            <img src="/assets/express.svg" alt="Express" class="tech-icon"/>
            <span>Express.js</span>
          </div>
          <div class="tech-item">
            <img src="/assets/next.svg" alt="Next" class="tech-icon"/>
            <span>Next.js</span>
          </div>
          <div class="tech-item">
            <img src="/assets/vite.svg" alt="Vite" class="tech-icon"/>
            <span>Vite</span>
          </div>
        </div>
      </div>
    </div>
    <div class="tech-card"
         :style="{
         background: `linear-gradient(to right, rgba(91, 18, 238, 0.8), rgba(111, 36, 243, 0.8))`
                       }">
      <p class="tech-header">Cloud & Infrastructure</p>
      <div class="tech-content">
        <div class="tech-column">
          <div class="tech-item">
            <img src="/assets/mongodb.svg" alt="MongoDB" class="tech-icon"/>
            <span>NoSQL</span>
          </div>
          <div class="tech-item">
            <img src="/assets/selenium.svg" alt="AWS" class="tech-icon"/>
            <span>Selenium</span>
          </div>
          <div class="tech-item">
            <img src="/assets/kubernetes.svg" alt="AWS" class="tech-icon"/>
            <span>Kubernetes</span>
          </div>
          <div class="tech-item">
            <img src="/assets/huggingface.svg" alt="huggingface" class="tech-icon"/>
            <span>Transformers</span>
          </div>

        </div>
        <div class="tech-column">
          <div class="tech-item">
            <img src="/assets/postgresql.svg" alt="PostgreSQL" class="tech-icon"/>
            <span>RDBMS</span>
          </div>
          <div class="tech-item">
            <img src="/assets/git.svg" alt="Git" class="tech-icon"/>
            <span>Git</span>
          </div>
          <div class="tech-item">
            <img src="/assets/jenkins.svg" alt="Jenkins" class="tech-icon"/>
            <span>Jenkins</span>
          </div>
          <div class="tech-item">
            <img src="/assets/docker.svg" alt="Docker" class="tech-icon"/>
            <span>Docker</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tech-title {
  padding-top: 60px;
  padding-bottom: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: 'Gilroy Bold', serif;
  font-size: 38px;
  color: #eaecef;
}

.tech-container {
  justify-content: center;
  gap: 2rem;
  flex-direction: row;
  display: flex;
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.tech-card {
  flex: 1;
  padding: 2rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, border-color 0.3s ease;
  min-height: 300px;
}

.tech-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.3);
}

.tech-header {
  font-size: 24px;
  font-family: 'Gilroy Bold', serif;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
}

.tech-content {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  font-family: 'Gilroy Medium', serif;
  color: white;
}

.tech-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.tech-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  padding: 2px;
}

.tech-item span {
  color: white;
  font-family: 'Gilroy Medium', serif;
  font-size: 16px;
}

@media (max-width: 768px) {
  .tech-container {
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  .tech-card {
    margin-bottom: 1rem;
    padding: 1.5rem;
    width: 100%;
    box-sizing: border-box;
  }

  .tech-content {
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  .tech-column {
    gap: 1rem;
    width: 100%;
  }

  .tech-item {
    gap: 0.5rem;
    width: 100%;
    overflow: hidden;
  }

  .tech-item span {
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .tech-icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  .tech-header {
    font-size: 20px;
    margin-bottom: 1.5rem;
  }

  .tech-title {
    font-size: 32px;
    padding: 40px 1rem;
  }
}
</style>

<script setup lang="ts">
</script>