import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/tattooshop/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
