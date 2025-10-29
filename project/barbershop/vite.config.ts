import { defineConfig } from 'vite';
import seoPlugin from "./vite.seo";
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/barbershop/',
  plugins: [react(),  seoPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
