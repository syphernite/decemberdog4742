import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/anissaylaa/', // ✅ This is CRITICAL
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
