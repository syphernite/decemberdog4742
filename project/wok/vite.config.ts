import seoPlugin from "./vite.seo";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), seoPlugin()],
  base: "/wok/"
})
