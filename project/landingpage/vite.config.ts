import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Root custom domain (built4you.org). Use absolute base.
  base: "/",
  plugins: [react()],
});
