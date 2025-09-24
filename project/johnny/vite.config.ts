import { defineConfig } from 'vite'

// Static site for subpath /johnny
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
