import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/detailer/',
  optimizeDeps: { exclude: ['lucide-react'] },
  build: {
    rollupOptions: {
      input: {
        // MPA entry points
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        results: resolve(__dirname, 'results.html'),
      },
    },
  },
});
