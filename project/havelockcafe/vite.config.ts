import { defineConfig } from 'vite';
import seoPlugin from "./vite.seo";
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/havelockcafe/',
  plugins: [react(),  seoPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
