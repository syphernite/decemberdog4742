import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/thairiverside/',
  plugins: [react()],
})
// This configuration sets the base path for the project to '/thairiverside/'
// and includes the React plugin for Vite to handle React files.