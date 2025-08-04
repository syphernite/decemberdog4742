// project/landingpage/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // ← use relative URLs so built index.html refers to "assets/…" not "/assets/…"
  base: './',
  plugins: [react()],
})
