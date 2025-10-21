import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite dev (localhost) should mirror the Bolt design with no custom base.
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
