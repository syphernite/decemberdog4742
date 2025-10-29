import { defineConfig } from 'vite';
import seoPlugin from "./vite.seo";
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Ensures paths resolve correctly when deployed to built4you.org/wakefield
  base: '/wakefield/',
  plugins: [react(),  seoPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: true,
  },
});
