import { defineConfig } from "vite";
import seoPlugin from "./vite.seo";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

/**
 * Replit export normalization for GitHub Pages subpath:
 * - root: "client" (index.html lives in /client)
 * - base: '/havelockcafe/' (required for assets on subpath)
 * - outDir: "../dist" (so CI copies project/<slug>/dist → /<slug>/)
 * - Aliases: "@" → client/src (optional convenience)
 */
export default defineConfig({
  plugins: [react(),  seoPlugin()],
  root: "client",
  base: '/havelockcafe/',
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "client/src"),
    },
  },
  server: { port: 5173 },
  preview: { port: 4173 },
});
