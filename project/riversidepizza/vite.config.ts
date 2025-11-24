import seoPlugin from "./vite.seo";
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  seoPlugin()],
  base: '/riversidepizza/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
