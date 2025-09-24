import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // <-- add this

// React SPA under /johnny
export default defineConfig({
  base: '/johnny/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    host: true
  }
})
