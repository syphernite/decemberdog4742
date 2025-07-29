import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/landingpage/', // or '/' if deployed to root
  build: {
    outDir: 'dist',
  },
});
