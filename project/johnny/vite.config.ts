import { defineConfig } from 'vite'

// Static Bolt export adapted for subpath /johnny (no React plugin needed)
export default defineConfig({
  base: '/johnny/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    host: true
  }
})
