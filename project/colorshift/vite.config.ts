import { defineConfig } from 'vite';
import seoPlugin from "./vite.seo";
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/colorshift/',
  plugins: [react(),  seoPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
