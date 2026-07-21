<script setup lang="tsx">
import emailIcon from '../assets/icons/email.svg?raw';
import githubIcon from '../assets/icons/github.svg?raw';
import linkedinIcon from '../assets/icons/linkedin.svg?raw';
import xIcon from '../assets/icons/x.svg?raw';

defineProps<{
  darkMode: boolean;
}>();
</script>

<template>
  <!-- Social Media Icons Row -->
  <nav :class="['social-links', { 'social-links-dark': darkMode }]" aria-label="Social media links">
    <a href="https://github.com/dani-beltran" target="_blank" rel="noopener noreferrer" class="social-link"
      aria-label="Visit Daniel Beltran's GitHub profile">
      <span class="social-icon" v-html="githubIcon" aria-hidden="true"></span>
    </a>
    <a href="https://x.com/danlbeltran" target="_blank" rel="noopener noreferrer" class="social-link"
      aria-label="Visit Daniel Beltran's Twitter/X profile">
      <span class="social-icon" v-html="xIcon" aria-hidden="true"></span>
    </a>
    <a href="https://www.linkedin.com/in/daniellidonbeltran/" target="_blank" rel="noopener noreferrer"
      class="social-link" aria-label="Visit Daniel Beltran's LinkedIn profile">
      <span class="social-icon" v-html="linkedinIcon" aria-hidden="true"></span>
    </a>
    <a href="mailto:hello@danielbeltran.dev" class="social-link" aria-label="Send an email to Daniel Beltran">
      <span class="social-icon" v-html="emailIcon" aria-hidden="true"></span>
    </a>
  </nav>
</template>

<style scoped>
.social-links {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #2f2f2f;
  text-decoration: none;
  border-radius: 50%;
  transition: all 0.3s ease;
  border: 1px solid #d7d7d7;
  background: #ffffff;
}

.social-links-dark .social-link {
  color: #b8b8b8;
  border-color: #404040;
  background: rgba(255, 255, 255, 0.05);
}

.social-link:hover {
  background-color: #f3f3f3;
  color: #111111;
  transform: translateY(-2px);
  border-color: #bdbdbd;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.social-links-dark .social-link:hover {
  background-color: #404040;
  color: #ffffff;
  border-color: #666;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
}

.social-icon :deep(svg) {
  display: block;
  width: 20px;
  height: 20px;
  fill: currentColor;
}
</style>