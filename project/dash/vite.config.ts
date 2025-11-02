import seoPlugin from "./vite.seo";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Replit export: client/ holds index.html and src/
  root: 'client',
  plugins: [react(),  seoPlugin()],
  base: '/dash/',
  build: {
    outDir: '../dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false
  }
})
