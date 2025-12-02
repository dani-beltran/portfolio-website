<template>
  <footer class="footer" role="contentinfo">
    <div class="footer-content">
      <!-- Social Media Icons Row -->
      <nav class="social-links" aria-label="Social media links">
        <a 
          href="https://github.com/dani-beltran" 
          target="_blank" 
          rel="noopener noreferrer"
          class="social-link"
          aria-label="Visit Daniel Beltran's GitHub profile"
        >
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
        <a 
          href="https://x.com/danlbeltran" 
          target="_blank" 
          rel="noopener noreferrer"
          class="social-link"
          aria-label="Visit Daniel Beltran's Twitter/X profile"
        >
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
        </a>
        <a 
          href="https://www.linkedin.com/in/daniellidonbeltran/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="social-link"
          aria-label="Visit Daniel Beltran's LinkedIn profile"
        >
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a 
          href="mailto:hello@danielbeltran.me"
          class="social-link"
          aria-label="Send an email to Daniel Beltran"
        >
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Email</title><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>
        </a>
        
      </nav>
      
      <!-- Separator Line -->
      <div class="separator"></div>
      
      <div class="disclaimer-info">
        <p class="copyright">© {{ currentYear }} Daniel J. L. Beltran</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
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
  color: #b8b8b8;
  text-decoration: none;
  border-radius: 50%;
  transition: all 0.3s ease;
  border: 1px solid #404040;
  background: rgba(255, 255, 255, 0.05);
}

.social-link:hover {
  background-color: #404040;
  color: #ffffff;
  transform: translateY(-2px);
  border-color: #666;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.social-link svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
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