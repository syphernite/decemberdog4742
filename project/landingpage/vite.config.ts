import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Keep this if deploying to root domain like built4you.org
  build: {
    outDir: 'dist',
  },
});
