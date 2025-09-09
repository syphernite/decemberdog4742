Copperhead Cutz — Full project scaffold for /copperhead subpath

Deploy notes
- Vite base is set to '/copperhead/' for GitHub Pages subfolder deploys.
- Router uses HashRouter to avoid 404s on deep links.
- Put Booksy image URLs into src/content/gallery.json.

Build
- npm ci
- npm run build
- output in dist/
