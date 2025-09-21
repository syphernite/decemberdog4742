// project/testsite/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import seoPlugin from "./vite.seo";

// adjust base to this folder name
export default defineConfig({
  plugins: [react(), seoPlugin()],
  base: "/testsite/",
});
