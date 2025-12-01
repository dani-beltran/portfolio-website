<script setup>
import profileImage from '../assets/profile.jpeg'
</script>

<template>
  <section class="profile">
    <div class="profile-image-container">
      <img 
        :src="profileImage" 
        alt="Daniel J. L. Beltran" 
        class="profile-image"
      />
    </div>
    <div class="profile-content">
      <h1 class="name">Daniel J. L. Beltran</h1>
      <p class="title">Software Engineer</p>
      <p class="description">
        Passionate developer with over 10 years of experience crafting web applications. 
        Specialized in building scalable, user-centric solutions from concept to deployment.
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
