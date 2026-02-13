<script setup>
import { useRoute } from 'vue-router'
import FooterSection from './components/FooterSection.vue'
import { computed } from 'vue'

const route = useRoute()
const isDetailPage = computed(() => route.name === 'project')
</script>

<template>
  <div class="app">
    <main class="container" :class="{ 'detail-page': isDetailPage }">
      <RouterView />
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
  max-width: 860px;
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
