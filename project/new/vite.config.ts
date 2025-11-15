import seoPlugin from "./vite.seo";
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(),  seoPlugin()],
  base: '/new/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
