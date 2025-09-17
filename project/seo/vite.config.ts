import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/seo/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
