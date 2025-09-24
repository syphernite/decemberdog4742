import seoPlugin from "./vite.seo";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deploying under https://built4you.org/manuel/
export default defineConfig({
  plugins: [react(), seoPlugin()],
  base: "/manuel/",
})
