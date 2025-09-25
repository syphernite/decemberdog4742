import { defineConfig } from 'vite';
import seoPlugin from "./vite.seo";
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seoPlugin()],
  base: "/johnny/",
});
