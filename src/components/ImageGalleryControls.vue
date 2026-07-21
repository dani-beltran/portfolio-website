<script setup>
import { nextTick, onMounted, ref, watch } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  currentIndex: {
    type: Number,
    required: true,
  },
  thumbnails: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['previous', 'next', 'select']);

const thumbnailStripRef = ref(null);

function handleSelect(index) {
  emit('select', index);
}

async function scrollActiveThumbnailIntoView() {
  await nextTick();

  if (!props.thumbnails || !thumbnailStripRef.value) {
    return;
  }

  const activeThumbnail = thumbnailStripRef.value.querySelector('.thumbnail-button.active');
  if (!activeThumbnail) {
    return;
  }

  activeThumbnail.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'nearest',
  });
}

watch(() => props.currentIndex, scrollActiveThumbnailIntoView);

onMounted(scrollActiveThumbnailIntoView);
</script>

<template>
  <div class="gallery-controls-wrapper" v-if="props.images.length > 1">
    <div class="gallery-controls">
      <button class="gallery-button" type="button" @click="emit('previous')">Previous</button>
      <span class="gallery-counter">{{ props.currentIndex + 1 }} / {{ props.images.length }}</span>
      <button class="gallery-button" type="button" @click="emit('next')">Next</button>
    </div>

    <div v-if="props.thumbnails" ref="thumbnailStripRef" class="thumbnail-strip">
      <button
        v-for="(image, index) in props.images"
        :key="image.url || index"
        class="thumbnail-button"
        :class="{ active: index === props.currentIndex }"
        type="button"
        @click="handleSelect(index)"
        :aria-label="`View image ${index + 1}`"
      >
        <img :src="image.url" :alt="image.alt || `Thumbnail ${index + 1}`" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.gallery-controls-wrapper {
  margin-top: 0.75rem;
}

.gallery-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.gallery-button {
  border: 1px solid var(--color-border);
  background: var(--color-surface, #ffffff);
  color: var(--color-text);
  border-radius: 999px;
  padding: 0.45rem 0.9rem;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.gallery-button:hover {
  background: var(--color-accent-light, #f3f4f6);
  transform: translateY(-1px);
}

.gallery-counter {
  min-width: 80px;
  text-align: center;
  color: var(--color-text-muted, #6b7280);
  font-size: 0.9rem;
}

.thumbnail-strip {
  margin-top: 0.85rem;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  overflow-x: auto;
  padding-bottom: 0.25rem;
}

.thumbnail-button {
  flex: 0 0 auto;
  width: 72px;
  height: 72px;
  border-radius: 10px;
  border: 2px solid transparent;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  background: transparent;
  opacity: 0.75;
  transition: opacity 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.thumbnail-button img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.thumbnail-button:hover {
  opacity: 1;
  transform: translateY(-1px);
}

.thumbnail-button.active {
  border-color: var(--color-primary, #2563eb);
  opacity: 1;
}
</style>
