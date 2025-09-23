/**
 * Generates:
 *  - OG images (1200x630 PNG) at /og/root.png and /og/<slug>.png
 *  - Icon pack at site root:
 *      /apple-touch-icon.png (180x180)
 *      /favicon-32x32.png, /favicon-16x16.png
 *      /android-chrome-192x192.png, /android-chrome-512x512.png
 *      /favicon.ico  (optional; built if ico library available)
 *      /safari-pinned-tab.svg
 *
 * Gradient: Tailwind emerald-600 (#059669) → blue-600 (#2563eb)
 * Logo: auto-detected at seo/logo.svg|png or root logo.svg|png
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLISH = path.resolve(__dirname, "..");
const OG_DIR = path.join(PUBLISH, "og");
const IGNORE = new Set(["project", ".git", ".github", "node_modules", "seo", "og", "icons"]);

function readLines(p) {
  if (!fs.existsSync(p)) return [];
  return fs.readFileSync(p, "utf8").split(/\r?\n/).map(s => s.trim()).filter(Boolean);
}
function readMap(p) {
  const m = new Map();
  if (!fs.existsSync(p)) return m;
  for (const line of readLines(p)) {
    const i = line.indexOf("|");
    if (i === -1) continue;
    const k = line.slice(0, i).trim();
    const v = line.slice(i + 1).trim();
    if (k) m.set(k, v);
  }
  return m;
}
const titleCase = (s) => String(s).replace(/[-_]/g, " ").replace(/\b\w/g, c => c.toUpperCase());

function findLogo() {
  const candidates = [
    path.join(PUBLISH, "seo", "logo.svg"),
    path.join(PUBLISH, "seo", "logo.png"),
    path.join(PUBLISH, "logo.svg"),
    path.join(PUBLISH, "logo.png"),
  ];
  for (const p of candidates) if (fs.existsSync(p)) return p;
  return null;
}
function fileToDataURL(p) {
  const buf = fs.readFileSync(p);
  const ext = p.toLowerCase().endsWith(".svg") ? "image/svg+xml" : "image/png";
  return `data:${ext};base64,${buf.toString("base64")}`;
}

function discoverSlugs() {
  return fs.readdirSync(PUBLISH, { withFileTypes: true })
    .filter(d => d.isDirectory() && !IGNORE.has(d.name))
    .map(d => d.name)
    .filter(slug => fs.existsSync(path.join(PUBLISH, slug, "index.html")));
}

function ogHTML({ title, subtitle, logoDataUrl }) {
  const logo = logoDataUrl
    ? `<div class="logo"><img src="${logoDataUrl}" alt="logo" /></div>`
    : `<div class="logo-fallback">B4Y</div>`;

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    html, body {
      margin: 0; padding: 0; width: 1200px; height: 630px;
      background: linear-gradient(135deg, #059669, #2563eb);
      color: #ffffff;
      font-family: ui-sans-serif, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial;
    }
    .wrap { position: relative; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; }
    .card {
      width: 1000px; border-radius: 28px; padding: 56px;
      background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.25);
      box-shadow: 0 20px 60px rgba(0,0,0,0.25), inset 0 0 40px rgba(255,255,255,0.08); backdrop-filter: blur(8px);
    }
    h1 { margin: 0 0 12px 0; font-size: 72px; line-height: 1.05; }
    p  { margin: 0; font-size: 36px; opacity: .92; }
    .logo, .logo-fallback {
      position: absolute; top: 28px; left: 32px;
      width: 120px; height: 120px; border-radius: 24px;
      background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.35);
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 12px 28px rgba(0,0,0,0.25), inset 0 0 24px rgba(255,255,255,0.12);
      overflow: hidden;
    }
    .logo img { width: 76%; height: 76%; object-fit: contain; }
    .logo-fallback { font-size: 48px; font-weight: 800; letter-spacing: 1px; }
  </style>
</head>
<body>
  <div class="wrap">
    ${logo}
    <div class="card">
      <h1>${title}</h1>
      <p>${subtitle}</p>
    </div>
  </div>
</body>
</html>`;
}

function iconHTML({ logoDataUrl, size }) {
  const content = logoDataUrl ? `<img src="${logoDataUrl}" alt="logo" />` : `<div class="txt">B4Y</div>`;
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    html, body { margin:0; padding:0; width:${size}px; height:${size}px;
      background: linear-gradient(135deg, #059669, #2563eb); color:#fff;
      font-family: ui-sans-serif, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial; }
    .wrap { width:100%; height:100%; display:flex; justify-content:center; align-items:center; }
    .badge {
      width:${Math.floor(size*0.72)}px; height:${Math.floor(size*0.72)}px;
      border-radius:${Math.floor(size*0.14)}px;
      background: rgba(255,255,255,.10); border: 1px solid rgba(255,255,255,.35);
      display:flex; align-items:center; justify-content:center;
      box-shadow: 0 18px 40px rgba(0,0,0,.25), inset 0 0 30px rgba(255,255,255,.12);
      overflow:hidden;
    }
    img { width:76%; height:76%; object-fit:contain; }
    .txt { font-size:${Math.floor(size*0.35)}px; font-weight:800; letter-spacing:2px; }
  </style>
</head>
<body>
  <div class="wrap"><div class="badge">${content}</div></div>
</body>
</html>`;
}

async function shot({ html, outPath, width, height }) {
  const puppeteer = await import("puppeteer");
  const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox","--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: "networkidle0" });
  const buf = await page.screenshot({ path: outPath, type: "png" });
  await browser.close();
  return buf;
}

async function makeIcoFromPngBuffers(buffers, outFile) {
  // Try to-ico first (v2), then png-to-ico v2; skip if neither is available
  try {
    const mod = await import("to-ico");
    const toIco = mod.default || mod;
    const ico = await toIco(buffers);
    fs.writeFileSync(outFile, ico);
    return true;
  } catch {}
  try {
    const mod = await import("png-to-ico");
    const pngToIco = mod.default || mod;
    const ico = await pngToIco(buffers);
    fs.writeFileSync(outFile, ico);
    return true;
  } catch {}
  console.warn("Skipping favicon.ico (ico library not available)");
  return false;
}

async function main() {
  fs.mkdirSync(OG_DIR, { recursive: true });

  // Optional SEO params
  const SEO_DIR = path.join(PUBLISH, "seo");
  const INDUSTRY = readMap(path.join(SEO_DIR, "industries.txt"));
  const CITY = readMap(path.join(SEO_DIR, "locations.txt"));

  const logoPath = findLogo();
  const logoDataUrl = logoPath ? fileToDataURL(logoPath) : null;

  // Root OG
  await shot({
    html: ogHTML({ title: "Built4You", subtitle: "Custom websites for small businesses", logoDataUrl }),
    outPath: path.join(OG_DIR, "root.png"),
    width: 1200, height: 630
  });

  // Subsite OGs
  const slugs = discoverSlugs();
  for (const slug of slugs) {
    const name = titleCase(slug);
    const ind = INDUSTRY.get(slug) || "";
    const loc = CITY.get(slug) || "";
    const subtitle = [ind, loc].filter(Boolean).join(" • ") || "Modern, mobile-first site";
    await shot({
      html: ogHTML({ title: name, subtitle, logoDataUrl }),
      outPath: path.join(OG_DIR, `${slug}.png`),
      width: 1200, height: 630
    });
  }

  // Icons at site root
  await shot({ html: iconHTML({ logoDataUrl, size: 512 }), outPath: path.join(PUBLISH, "android-chrome-512x512.png"), width: 512, height: 512 });
  await shot({ html: iconHTML({ logoDataUrl, size: 192 }), outPath: path.join(PUBLISH, "android-chrome-192x192.png"), width: 192, height: 192 });
  await shot({ html: iconHTML({ logoDataUrl, size: 180 }), outPath: path.join(PUBLISH, "apple-touch-icon.png"), width: 180, height: 180 });
  const fav32 = await shot({ html: iconHTML({ logoDataUrl, size: 32 }), outPath: path.join(PUBLISH, "favicon-32x32.png"), width: 32, height: 32 });
  const fav16 = await shot({ html: iconHTML({ logoDataUrl, size: 16 }), outPath: path.join(PUBLISH, "favicon-16x16.png"), width: 16, height: 16 });

  // Optional favicon.ico
  await makeIcoFromPngBuffers([fav16, fav32], path.join(PUBLISH, "favicon.ico"));

  // Pinned tab SVG: prefer your SVG logo; else a mono fallback
  if (logoPath && logoPath.toLowerCase().endsWith(".svg")) {
    fs.copyFileSync(logoPath, path.join(PUBLISH, "safari-pinned-tab.svg"));
  } else {
    const pinned = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="currentColor"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#fff" font-weight="700">B4Y</text></svg>`;
    fs.writeFileSync(path.join(PUBLISH, "safari-pinned-tab.svg"), pinned, "utf8");
  }

  console.log(`OG images generated: root + ${slugs.length}; icon pack written to site root.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
