import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ Keep this if you're deploying to the root of your domain (e.g. built4you.org)
  build: {
    outDir: 'dist',
  },
});
