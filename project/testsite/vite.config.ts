import seoPlugin from "./vite.seo";
export default defineConfig({
  plugins: [react(), seoPlugin()],
  base: "/testsite/"
})
