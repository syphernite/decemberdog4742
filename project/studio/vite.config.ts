import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({ base: '/studio/', 
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
