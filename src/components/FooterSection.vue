<template>
  <footer class="footer" role="contentinfo">
    <div class="footer-content">
      
      <SocialLinks darkMode />
      <!-- Separator Line -->
      <div class="separator"></div>
      
      <div class="disclaimer-info">
        <p class="copyright">© {{ currentYear }} Daniel J. L. Beltran</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SocialLinks from './SocialLinks.vue';

const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  padding: 20px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-top: 1px solid #404040;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.separator {
  width: 100%;
  max-width: 400px;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #404040 20%, #606060 50%, #404040 80%, transparent 100%);
  margin: 0 auto;
}

.disclaimer-info {
  color: #b8b8b8;
  font-size: 0.8rem;
  max-width: 100%;
  line-height: 1.4;
  text-align: center;
}

.disclaimer-text {
  font-weight: 400;
}

@media (max-width: 768px) {
  .footer-content {
    padding: 0 16px;
    gap: 16px;
  }
  
  .social-links {
    gap: 20px;
  }
  
  .social-link {
    width: 48px;
    height: 48px;
  }
  
  .social-link svg {
    width: 24px;
    height: 24px;
  }
  
  .disclaimer-info {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .social-links {
    gap: 16px;
  }
  
  .social-link {
    width: 44px;
    height: 44px;
  }
  
  .social-link svg {
    width: 22px;
    height: 22px;
  }
}
</style>