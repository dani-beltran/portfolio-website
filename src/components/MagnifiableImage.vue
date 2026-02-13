<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  }
})

const showFullscreen = ref(false)

function toggleFullscreen() {
  showFullscreen.value = !showFullscreen.value
}

function handleEscKey(event) {
  if (event.key === 'Escape') {
    showFullscreen.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscKey)
})
</script>

<template>
  <div>
    <div class="image-container" @click="toggleFullscreen">
      <img :src="src" :alt="alt" />
    </div>

    <!-- Fullscreen Image Modal -->
    <Transition name="fullscreen">
      <div v-if="showFullscreen" class="fullscreen-overlay" @click="toggleFullscreen">
        <img :src="src" :alt="alt" class="fullscreen-image" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.image-container {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  cursor: zoom-in;
  transition: transform 0.2s ease;
}

.image-container:hover {
  transform: scale(1.01);
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;
}

.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: zoom-out;
  padding: 2rem;
}

.fullscreen-image {
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.fullscreen-enter-active,
.fullscreen-leave-active {
  transition: opacity 0.3s ease;
}

.fullscreen-enter-from,
.fullscreen-leave-to {
  opacity: 0;
}

.fullscreen-enter-active .fullscreen-image,
.fullscreen-leave-active .fullscreen-image {
  transition: transform 0.3s ease;
}

.fullscreen-enter-from .fullscreen-image,
.fullscreen-leave-to .fullscreen-image {
  transform: scale(0.9);
}
</style>
