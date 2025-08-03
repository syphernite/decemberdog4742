import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/thairiverside/',
  plugins: [react()],
  build: {
    outDir: '../../__deploy/thairiverside',
    emptyOutDir: true
  }
});
