import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/monolith/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
