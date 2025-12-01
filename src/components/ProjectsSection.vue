<script setup>
import deckuImage from '../assets/screenshot-deckudb.png'
import layerzImage from '../assets/screenshot-layerz.png'

const projects = [
  {
    name: 'DeckuDB',
    description: 'A comprehensive database for Steam Deck game compatibility, helping gamers find the best experiences for their portable gaming device.',
    image: deckuImage,
    link: 'https://deckudb.com'
  },
  {
    name: 'LayerZ',
    description: 'A SaaS platform that empower your e-commerce business with advanced AI-driven tools to optimize sales and customer engagement.',
    image: layerzImage,
    link: 'https://layerz.com'
  }
]
</script>

<template>
  <section class="projects">
    <h2 class="section-title">Projects</h2>
    <div class="projects-grid">
      <a 
        v-for="project in projects" 
        :key="project.name"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="project-card"
      >
        <div class="project-image-container">
          <img 
            :src="project.image" 
            :alt="project.name"
            class="project-image"
          />
        </div>
        <div class="project-content">
          <h3 class="project-name">{{ project.name }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <span class="project-link">
            Visit site →
          </span>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.projects {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  letter-spacing: -0.01em;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.project-card {
  display: block;
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  color: inherit;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  opacity: 1;
}

.project-image-container {
  aspect-ratio: 2 / 1;
  overflow: hidden;
  background: #f0f0f0;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-content {
  padding: 1.25rem;
}

.project-name {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.project-description {
  color: var(--color-text-muted);
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.project-link {
  font-size: 0.875rem;
  color: var(--color-accent);
  font-weight: 500;
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-content {
    padding: 1rem;
  }

  .project-name {
    font-size: 1rem;
  }

  .project-description {
    font-size: 0.875rem;
  }
}
</style>
