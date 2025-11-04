import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

export default defineConfig({
  root: 'client',                      // Replit layout
  plugins: [react()],
  base: '/dash/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./client/src', import.meta.url)), // "@/..." → client/src
      '@shared': fileURLToPath(new URL('./shared', import.meta.url)), // "@shared/..." → shared
    },
  },
  build: {
    outDir: '../dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
  },
})
