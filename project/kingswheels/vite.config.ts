import { defineConfig } from 'vite';
import seoPlugin from './vite.seo';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), seoPlugin()],
  // IMPORTANT: this must match the folder you deploy to on the server
  base: "/kingswheels/",
  optimizeDeps: { exclude: ['lucide-react'] }
});
