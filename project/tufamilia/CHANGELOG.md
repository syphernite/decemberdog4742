# Tu Familia Site — Update 2025-09-02

## Summary
- Header contrast improved at top-of-page. Solid white with border; adds shadow after scroll.
- Removed "About" from nav and routes.
- Updated featured menu items and pricing on Home page.
- Footer now includes real address, phone, hours, and Facebook link.
- Logo path uses `import.meta.env.BASE_URL` so it works at `/tufamilia/`.

## Files Touched
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/App.tsx`
- `src/pages/Home.tsx`

## Notes
- Place your logo at `public/logo.svg` for the header image.
- Build: `npm ci && npm run build` (or `npm install` then `npm run build`).
- Deploy per your GitHub Pages workflow.

