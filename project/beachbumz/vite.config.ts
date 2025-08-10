import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Must match your subpath folder name
export default defineConfig({
  base: "/beachbumz/",
  plugins: [react()],
  build: { outDir: "dist", emptyOutDir: true },
});
