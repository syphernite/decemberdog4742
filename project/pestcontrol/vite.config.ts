import { defineConfig } from 'vite';
import seoPlugin from "./vite.seo";
import react from '@vitejs/plugin-react';

// GH Pages subfolder config
export default defineConfig({
  plugins: [react(),  seoPlugin()],
  base: '/pestcontrol/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
