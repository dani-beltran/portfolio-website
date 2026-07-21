<script setup>
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import ImageGalleryControls from './ImageGalleryControls.vue';

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
          displayDuration: { type: 'number' },
        },
        required: ['url'],
      },
    },
  },
  autoCycle: {
    type: Boolean,
    default: false,
  },
  alt: {
    type: String,
    default: '',
  },
});

const showFullscreen = ref(false);
const imgIndex = ref(0);
const imageRef = useTemplateRef('imgRef');
let cycleTimeoutId = null;

function toggleFullscreen() {
  showFullscreen.value = !showFullscreen.value;
}

function handleEscKey(event) {
  if (event.key === 'Escape') {
    showFullscreen.value = false;
  }
}

async function transitionToImage(nextIndex) {
  if (!props.images.length || nextIndex < 0 || nextIndex >= props.images.length) {
    return;
  }
  imgIndex.value = nextIndex;
}

async function showNextImage() {
  if (!props.images.length) {
    return;
  }

  const nextIndex = (imgIndex.value + 1) % props.images.length;
  await transitionToImage(nextIndex);
}

async function showPreviousImage() {
  if (!props.images.length) {
    return;
  }

  const previousIndex = (imgIndex.value - 1 + props.images.length) % props.images.length;
  await transitionToImage(previousIndex);
}

async function selectImage(index) {
  if (index === imgIndex.value) {
    return;
  }

  await transitionToImage(index);
  scheduleCycle();
}

const scheduleCycle = () => {
  if (!props.autoCycle) {
    return;
  }

  if (cycleTimeoutId) {
    clearTimeout(cycleTimeoutId);
    cycleTimeoutId = null;
  }

  if (props.images.length <= 1) {
    return;
  }

  const duration = props.images[imgIndex.value].displayDuration || 5000;
  cycleTimeoutId = setTimeout(async () => {
    await showNextImage();
    scheduleCycle();
  }, duration);
};

async function handleNextClick() {
  await showNextImage();
  scheduleCycle();
}

async function handlePreviousClick() {
  await showPreviousImage();
  scheduleCycle();
}

onMounted(() => {
  window.addEventListener('keydown', handleEscKey);
  scheduleCycle();
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscKey);
  if (cycleTimeoutId) {
    clearTimeout(cycleTimeoutId);
  }
});
</script>

<template>
  <div>
    <div class="image-container" @click="toggleFullscreen" v-if="images.length">
      <img ref="imgRef" class="" :src="images[imgIndex].url" :alt="images[imgIndex].alt || alt" />
    </div>

    <ImageGalleryControls
      :images="images"
      :current-index="imgIndex"
      @previous="handlePreviousClick"
      @next="handleNextClick"
      @select="selectImage"
    />

    <!-- Fullscreen Image Modal -->
    <Transition name="fullscreen">
      <div v-if="showFullscreen" class="fullscreen-overlay">
        <div class="fullscreen-content">
          <div class="fullscreen-img-container" @click="toggleFullscreen">            
            <img :src="images[imgIndex].url" :alt="images[imgIndex].alt || alt" class="fullscreen-image" />
          </div>

          <ImageGalleryControls
            class="fullscreen-controls"
            :images="images"
            :current-index="imgIndex"
            :thumbnails="false"
            @previous="handlePreviousClick"
            @next="handleNextClick"
            @select="selectImage"
          />
        </div>
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
  object-fit: contain;
}

.image-container:hover {
  transform: scale(1.01);
}

.image-container img {
  width: auto;
  height: auto;
  margin: auto;
  display: block;
  max-height: 100%;
  max-width: 100%;
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
  padding: 2rem;
}

.fullscreen-content {
  width: min(100%, 1200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.fullscreen-img-container {
  cursor: zoom-out;
  transition: transform 0.2s ease;
}

.fullscreen-image {
  max-width: 95vw;
  max-height: calc(100vh - 160px);
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.fullscreen-controls {
  width: min(900px, 95vw);
  padding: 0.85rem 1rem;
  border-radius: 12px;
  background: rgba(32, 29, 29, 0.72);
  backdrop-filter: blur(6px);
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
