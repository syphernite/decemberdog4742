import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Deployed at built4you.org/beachbumz
export default defineConfig({
  base: "/beachbumz/",
  plugins: [react()],
  build: { outDir: "dist", emptyOutDir: true },
});
