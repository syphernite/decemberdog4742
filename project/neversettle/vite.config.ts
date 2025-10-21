import { defineConfig } from 'vite';
import seoPlugin from "./vite.seo";
import react from '@vitejs/plugin-react';

// Vite dev (localhost) should mirror the Bolt design with no custom base.
export default defineConfig({
  base: "/neversettle/",
  plugins: [react(), seoPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
