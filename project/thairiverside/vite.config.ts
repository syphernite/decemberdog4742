import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/thairiverside/', // for the subfolder site
  plugins: [react()],
})
