import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/anissaylaa/',
  plugins: [react()],
  build: {
    outDir: '../../__deploy/anissaylaa',
    emptyOutDir: true
  }
});
