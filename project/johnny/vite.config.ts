import { defineConfig } from 'vite'

// Static Bolt export for subpath /johnny (NO React plugin)
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
