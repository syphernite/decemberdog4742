/**
 * Generates Open Graph images and icon pack.
 * - Shared default OG for ALL client pages: /og/clients-default.png
 * - Per-client override: put a PNG at seo/og/<slug>.png → copied to /og/<slug>.png
 * - Marketing OGs: /og/root.png, /og/pricing.png, /og/careers.png
 * - Icons: apple-touch-icon, favicons, android-chrome, site.webmanifest, safari-pinned-tab.svg
 *
 * Gradient: emerald-600 (#059669) → blue-600 (#2563eb)
 * Logo: seo/logo.svg (preferred) or seo/logo.png (fallback)
 */

import fs from "fs";
import fsp from "fs/promises";
import path from "path";
import puppeteer from "puppeteer";

const PUBLISH = process.cwd();
const OUT_OG = path.join(PUBLISH, "og");
const SEO_DIR = path.join(PUBLISH, "seo");
const OG_OVERRIDE_DIR = path.join(SEO_DIR, "og");

const COLORS = { g1: "#059669", g2: "#2563eb" }; // emerald-600 → blue-600

async function ensureDir(p) {
  await fsp.mkdir(p, { recursive: true });
}

function exists(p) {
  try { fs.accessSync(p, fs.constants.F_OK); return true; } catch { return false; }
}

async function loadLogoDataURL() {
  const svg = path.join(SEO_DIR, "logo.svg");
  const png = path.join(SEO_DIR, "logo.png");
  if (exists(svg)) {
    const svgText = await fsp.readFile(svg, "utf8");
    const b64 = Buffer.from(svgText, "utf8").toString("base64");
    return `data:image/svg+xml;base64,${b64}`;
  }
  if (exists(png)) {
    const buf = await fsp.readFile(png);
    const b64 = buf.toString("base64");
    return `data:image/png;base64,${b64}`;
  }
  return null;
}

function htmlTemplate({ title, subtitle, logoDataURL, width = 1200, height = 630 }) {
  // Very clean card: gradient bg, centered logo, optional title/subtitle
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=${width}, initial-scale=1">
<style>
  :root { --g1:${COLORS.g1}; --g2:${COLORS.g2}; }
  * { box-sizing: border-box; }
  html, body { margin:0; padding:0; }
  body {
    width:${width}px; height:${height}px;
    display:flex; align-items:center; justify-content:center;
    background: linear-gradient(135deg, var(--g1), var(--g2));
    font-family: ui-sans-serif, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial;
    color:#fff;
  }
  .wrap { width:100%; height:100%; display:flex; align-items:center; justify-content:center; position:relative; }
  .logo {
    width: 360px; max-width: 60%; opacity: 0.98;
    filter: drop-shadow(0 10px 30px rgba(0,0,0,.35));
  }
  .text { position:absolute; bottom:48px; left:64px; right:64px; text-align:center; }
  .title { font-size:56px; font-weight:800; line-height:1.05; margin:0; }
  .subtitle { margin-top:10px; font-size:28px; opacity:.92 }
</style>
</head>
<body>
  <div class="wrap">
    ${logoDataURL ? `<img class="logo" src="${logoDataURL}" alt="">` : ""}
    <div class="text">
      ${title ? `<h1 class="title">${title}</h1>` : ""}
      ${subtitle ? `<div class="subtitle">${subtitle}</div>` : ""}
    </div>
  </div>
</body>
</html>`;
}

async function renderPNG(page, html, outPath, width = 1200, height = 630) {
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.screenshot({ path: outPath, type: "png" });
}

async function simpleSquare(page, size, outPath, logoDataURL) {
  const html = `<!doctype html><meta charset="utf-8"><style>
    :root{--g1:${COLORS.g1};--g2:${COLORS.g2}}
    html,body{margin:0;padding:0;width:${size}px;height:${size}px;background:linear-gradient(135deg,var(--g1),var(--g2));display:flex;align-items:center;justify-content:center}
    img{max-width:${Math.round(size*0.6)}px;max-height:${Math.round(size*0.6)}px;filter: drop-shadow(0 6px 18px rgba(0,0,0,.35));}
  </style>${logoDataURL ? `<img src="${logoDataURL}">` : ""}`;
  await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.screenshot({ path: outPath, type: "png" });
}

async function copyIfExists(src, dst) {
  if (exists(src)) await fsp.copyFile(src, dst);
}

async function main() {
  await ensureDir(OUT_OG);

  const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  const logoDataURL = await loadLogoDataURL();

  // 1) Marketing OGs
  await renderPNG(page, htmlTemplate({ title: "", subtitle: "", logoDataURL }), path.join(OUT_OG, "root.png"));
  await renderPNG(page, htmlTemplate({ title: "Pricing", subtitle: "Fair monthly or one-time", logoDataURL }), path.join(OUT_OG, "pricing.png"));
  await renderPNG(page, htmlTemplate({ title: "Careers", subtitle: "Build fast. Ship value.", logoDataURL }), path.join(OUT_OG, "careers.png"));

  // 2) Clients default OG (shared across all client pages)
  // If user provided a custom default at seo/og/clients-default.png, use it. Otherwise, generate a clean default.
  const clientsDefaultOverride = path.join(OG_OVERRIDE_DIR, "clients-default.png");
  if (exists(clientsDefaultOverride)) {
    await fsp.copyFile(clientsDefaultOverride, path.join(OUT_OG, "clients-default.png"));
  } else {
    await renderPNG(
      page,
      htmlTemplate({ title: "", subtitle: "", logoDataURL }),
      path.join(OUT_OG, "clients-default.png")
    );
  }

  // 3) Per-client overrides: copy any seo/og/<slug>.png to /og/<slug>.png
  if (exists(OG_OVERRIDE_DIR)) {
    for (const entry of fs.readdirSync(OG_OVERRIDE_DIR)) {
      if (!entry.toLowerCase().endsWith(".png")) continue;
      if (entry.toLowerCase() === "clients-default.png") continue; // handled
      const src = path.join(OG_OVERRIDE_DIR, entry);
      const dst = path.join(OUT_OG, entry);
      await fsp.copyFile(src, dst);
    }
  }

  // 4) Icons (simple gradient square w/ logo)
  const ICONS = [
    { size: 512, name: "android-chrome-512x512.png" },
    { size: 192, name: "android-chrome-192x192.png" },
    { size: 180, name: "apple-touch-icon.png" },
    { size: 32,  name: "favicon-32x32.png" },
    { size: 16,  name: "favicon-16x16.png" }
  ];
  const ICON_ROOT = PUBLISH;
  for (const icon of ICONS) {
    await simpleSquare(page, icon.size, path.join(ICON_ROOT, icon.name), logoDataURL);
  }

  // 5) site.webmanifest
  const manifest = {
    name: "Built4You",
    short_name: "Built4You",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    theme_color: "#0ea5e9",
    background_color: "#0b1120",
    display: "standalone"
  };
  await fsp.writeFile(path.join(ICON_ROOT, "site.webmanifest"), JSON.stringify(manifest, null, 2), "utf8");

  // 6) safari pinned tab (use logo.svg if available; else a tiny fallback)
  const pinned = path.join(ICON_ROOT, "safari-pinned-tab.svg");
  const logoSvg = path.join(SEO_DIR, "logo.svg");
  if (exists(logoSvg)) {
    await fsp.copyFile(logoSvg, pinned);
  } else {
    await fsp.writeFile(pinned, `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="${COLORS.g1}"/></svg>`, "utf8");
  }

  await browser.close();
  console.log("OG images and icons generated.");
}

main().catch(err => { console.error(err); process.exit(1); });
