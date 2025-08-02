import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/anissaylaa/', // 👈 this line makes your app work at built4you.org/anissaylaa/
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
