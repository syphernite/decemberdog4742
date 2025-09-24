# Tattoo Johnny ATL — Built4You Subpath (/johnny)

This is the Bolt export adapted for Built4You's GitHub Pages multi-site workflow.

- Deployed path: `https://built4you.org/johnny/`
- Vite `base` is set to `/johnny/` so assets resolve correctly on GitHub Pages.
- SEO: canonical, robots, OpenGraph/Twitter tags injected; `public/og.jpg` + `public/favicon.svg` included.
- Sitemap: `public/sitemap.xml` includes /, /portfolio, /contact if present.

## Deploy
1) Place this folder in your repo at `project/johnny/`
2) Commit & push. Your workflow will build and publish to `/johnny/`.

## Notes
- If you add pages, update `public/sitemap.xml`.
- If any internal links break, ensure they are relative or start with `/johnny/`.
