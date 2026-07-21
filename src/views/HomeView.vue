<script setup>
import ProfileSection from '../components/ProfileSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import { ProjectType, projects } from '../data/projects';
</script>

<template>
  <div class="home-view">
    <ProfileSection />
    <ProjectsSection  title="Professional Work" description="A selection of professional projects I contributed to or led." :projects="projects.filter(project => project.type === ProjectType.Work)" />
    <ProjectsSection  title="Personal Projects" description="Some of my personal projects and experiments." :projects="projects.filter(project => project.type === ProjectType.Personal)" />
  </div>
</template>

<style scoped>
.home-view {
  width: 100%;
}
</style>
