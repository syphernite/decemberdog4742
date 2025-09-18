// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // builds to /seo/ so the app works at /seo and /seo/
  base: "/seo/",
});
