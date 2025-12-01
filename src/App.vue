<script setup>
import ProfileSection from './components/ProfileSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import FooterSection from './components/FooterSection.vue';
</script>

<template>
  <div class="app">
    <main class="container">
      <ProfileSection />
      <ProjectsSection />
    </main>
    <FooterSection />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 720px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  flex: 1;
}

@media (max-width: 640px) {
  .container {
    padding: 2rem 1rem;
  }
}
</style>
