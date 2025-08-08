import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GH Pages subfolder config
export default defineConfig({
  plugins: [react()],
  base: '/pestcontrol/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
