import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use relative paths so built index.html refers to "assets/…" rather than "/assets/…"
  base: './',
  plugins: [react()],
})
