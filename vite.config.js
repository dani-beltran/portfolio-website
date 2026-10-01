import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// Keep Vite's usual local-origin policy; opaque iframe origins need an explicit opt-in.
const localOrigins = /^https?:\/\/(?:(?:[^:]+\.)?localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/;

export default defineConfig(({ command, mode, isPreview }) => ({
  plugins: [vue()],
  server: {
    cors: {
      origin:
        command === 'serve' && !isPreview && mode === 'dxp-preview'
          ? [localOrigins, 'null']
          : localOrigins,
    },
  },
}));
