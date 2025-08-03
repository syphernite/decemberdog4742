import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '',
  plugins: [react()],
  build: {
    outDir: '../../__deploy/anissaylaa', // <-- only change the folder name here
    emptyOutDir: true,
  },
});
