import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { writeFileSync, copyFileSync } from 'fs';

export default defineConfig({
  base: '/', // keep '/' if deployed at root like built4you.org
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  // ✅ Custom hook to copy index.html → 404.html after build (GitHub Pages SPA fix)
  // This runs only after `vite build`
  closeBundle: () => {
    const indexPath = resolve(__dirname, 'dist/index.html');
    const fallbackPath = resolve(__dirname, 'dist/404.html');
    try {
      copyFileSync(indexPath, fallbackPath);
      console.log('✅ Copied index.html → 404.html for GitHub Pages fallback');
    } catch (err) {
      console.warn('⚠️ Failed to copy fallback 404.html:', err);
    }
  },
});
