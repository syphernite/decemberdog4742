import { defineConfig } from 'vite';
import seoPlugin from "./vite.seo";
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), seoPlugin()],
  base: "/chromecousins/",
  optimizeDeps: { exclude: ['lucide-react'] }
});
