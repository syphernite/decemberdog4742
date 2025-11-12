import seoPlugin from "./vite.seo";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Use relative base so local preview and serving the `dist/` folder work reliably.
  // For GitHub Pages deploys that require a subpath, set an environment variable or revert to '/coastalcreamery'.
  base: '/coastalcreamery/',
  plugins: [react(),  seoPlugin()],
})