<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProjectById } from '../data/projects'

const route = useRoute()
const router = useRouter()

const project = computed(() => getProjectById(route.params.id))

function goBack() {
  router.push('/')
}
</script>

<template>
  <div class="project-detail" v-if="project">
    <button class="back-button" @click="goBack">
      ← Back to Projects
    </button>

    <div class="project-header">
      <h1 class="project-title">{{ project.name }}</h1>
      <div class="technologies">
        <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
          {{ tech }}
        </span>
      </div>
    </div>

    <div class="project-image-large">
      <img :src="project.gif || project.image" :alt="project.name" />
    </div>

    <div class="project-body">
      <section class="project-section">
        <h2>Overview</h2>
        <p v-for="(paragraph, index) in project.description.split('\n\n')" :key="index" class="paragraph">
          {{ paragraph }}
        </p>
      </section>

      <section class="project-section">
        <h2>Technical Implementation</h2>
        <div v-html="formatImplementation(project.implementation)" class="implementation-content"></div>
      </section>

      <a 
        v-if="project.externalLink" 
        :href="project.externalLink" 
        target="_blank" 
        rel="noopener noreferrer"
        class="external-link"
      >
        Visit {{ project.name }} →
      </a>
    </div>
  </div>

  <div class="not-found" v-else>
    <h1>Project not found</h1>
    <button class="back-button" @click="goBack">
      ← Back to Projects
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    formatImplementation(text) {
      // Convert markdown-style formatting to HTML
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/^- (.*?)$/gm, '<li>$1</li>')
        .replace(/(?:<li>.*?<\/li>\n?)+/g, '<ul>$&</ul>')
        .split('\n\n')
        .map(p => {
          if (p.includes('<ul>')) return p
          if (p.includes('<strong>')) return `<p class="paragraph">${p}</p>`
          return `<p class="paragraph">${p}</p>`
        })
        .join('')
    }
  }
}
</script>

<style scoped>
.project-detail {
  max-width: 860px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

.back-button {
  background: none;
  border: none;
  color: var(--color-text-muted);
  font-size: 0.9375rem;
  cursor: pointer;
  padding: 0.5rem 0;
  margin-bottom: 2rem;
  transition: color 0.2s ease;
  font-family: inherit;
}

.back-button:hover {
  color: var(--color-text);
}

.project-header {
  margin-bottom: 2rem;
}

.project-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  color: var(--color-text);
  line-height: 1.2;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  display: inline-block;
  padding: 0.375rem 0.75rem;
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  font-weight: 500;
}

.project-image-large {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 3rem;
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.project-image-large img {
  width: 100%;
  height: auto;
  display: block;
}

.project-body {
  color: var(--color-text);
}

.project-section {
  margin-bottom: 3rem;
}

.project-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  letter-spacing: -0.01em;
  color: var(--color-text);
}

.paragraph {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.implementation-content {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
}

.implementation-content :deep(strong) {
  color: var(--color-text);
  font-weight: 600;
  display: block;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.implementation-content :deep(ul) {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.implementation-content :deep(li) {
  margin-bottom: 0.5rem;
  color: var(--color-text);
  line-height: 1.7;
}

.implementation-content :deep(p) {
  margin-bottom: 1rem;
}

.external-link {
  display: inline-block;
  padding: 0.875rem 1.5rem;
  background: var(--color-accent);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-top: 2rem;
}

.external-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.not-found {
  text-align: center;
  padding: 4rem 1.5rem;
}

.not-found h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
}

@media (max-width: 640px) {
  .project-detail {
    padding: 1.5rem 1rem 3rem;
  }

  .project-title {
    font-size: 2rem;
  }

  .project-section h2 {
    font-size: 1.25rem;
  }

  .tech-tag {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
  }
}
</style>
