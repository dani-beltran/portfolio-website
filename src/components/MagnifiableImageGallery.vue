<script setup>
import { ref, onMounted, onUnmounted, useTemplateRef } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          url: { type: 'string' },
          alt: { type: 'string' },
          displayDuration: { type: 'number' }
        },
        required: ['url']
      }
    }
  },
  alt: {
    type: String,
    default: ''
  }
})

const showFullscreen = ref(false)
const imgIndex = ref(0)
const imageRef = useTemplateRef('imgRef');

function toggleFullscreen() {
  showFullscreen.value = !showFullscreen.value
}

function handleEscKey(event) {
  if (event.key === 'Escape') {
    showFullscreen.value = false
  }
}

const cycleImages = () => {
  if (props.images.length < 1) {
    return props.images[0] || '';
  }
  const duration = props.images[imgIndex.value].displayDuration || 5000;
  setTimeout(async () => {
    const img = imageRef.value;
      img.classList.add('hidden');
      // wait for the transition
      await new Promise(resolve => setTimeout(resolve, 400));
      imgIndex.value = (imgIndex.value + 1) % props.images.length
      img.classList.remove('hidden');
      await cycleImages();
  }, duration)
}

onMounted(() => {
  window.addEventListener('keydown', handleEscKey)
  cycleImages();
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscKey)
})
</script>

<template>
  <div>
    <div class="image-container" @click="toggleFullscreen">
      <img ref="imgRef" class="smooth-img" :src="images[imgIndex].url" :alt="images[imgIndex].alt || alt" />
    </div>

    <!-- Fullscreen Image Modal -->
    <Transition name="fullscreen">
      <div v-if="showFullscreen" class="fullscreen-overlay" @click="toggleFullscreen">
        <img :src="images[imgIndex].url" :alt="images[imgIndex].alt || alt" class="fullscreen-image" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.image-container {
  width: 100%;
  height: 430px;
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

.smooth-img {
  opacity: 1;
  transition: opacity 0.4s ease-in-out;
}
.smooth-img.hidden {
  opacity: 0;
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
