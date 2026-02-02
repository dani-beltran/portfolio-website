<script setup>
import { ref } from 'vue'
import profileImage from '../assets/profile.jpeg'

const imageVisible = ref(false)

function onImageLoad() {
  imageVisible.value = true
}
</script>

<template>
  <section class="profile">
    <div class="profile-image-container" :class="{ 'slide-down': imageVisible }">
      <img 
        :src="profileImage" 
        alt="Daniel J. L. Beltran" 
        class="profile-image"
        @load="onImageLoad"
      />
    </div>
    <div class="profile-content">
      <h1 class="name">Daniel J. L. Beltran</h1>
      <p class="title">Software Engineer</p>
      <p class="description">
        Experienced Full Stack Engineer and Tech Lead with a strong background in building scalable web
applications, multi-tenant SaaS platforms, real-time data pipelines and driving product development in
fast-paced environments. Passionate about product design, UX, clean code, efficient architectures, and
mentoring teams to deliver high-quality user-centric solutions. Skilled in JavaScript/TypeScript, Node.js,
React, Vue, cloud infrastructure, and big data technologies.
      </p>
    </div>
  </section>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 4rem;
}

.profile-image-container {
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.profile-image-container.slide-down {
  opacity: 1;
  transform: translateY(0);
}

.profile-image {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-border);
}

.name {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  letter-spacing: -0.02em;
}

.title {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  font-weight: 400;
  margin-bottom: 1rem;
}

.description {
  max-width: 480px;
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.7;
}

@media (max-width: 640px) {
  .profile-image {
    width: 120px;
    height: 120px;
  }

  .name {
    font-size: 1.75rem;
  }

  .title {
    font-size: 1rem;
  }

  .description {
    font-size: 0.9375rem;
  }
}
</style>
