import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
})
// This configuration sets up a Vite project for a React application
// with a relative base path and includes the React plugin for Vite.