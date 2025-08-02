import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/anissaylaa/', // 👈 REQUIRED for GitHub Pages subpath
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
