import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/chickenmacandmore/',
  plugins: [react()],
  build: {
    outDir: '../../__deploy/chickenmacandmore',
    emptyOutDir: true
  }
});
