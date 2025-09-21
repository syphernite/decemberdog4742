import { defineConfig } from 'vite';
import seoPlugin from "./vite.seo";
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/restaraunt/",
  plugins: [react(), seoPlugin()]
});
