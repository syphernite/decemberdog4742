/**
 * Generates:
 *  - OG images (1200x630 PNG) for root and each subsite (og/root.png, og/<slug>.png)
 *  - Icon pack for root:
 *      /apple-touch-icon.png (180x180)
 *      /favicon-32x32.png, /favicon-16x16.png
 *      /android-chrome-192x192.png, /android-chrome-512x512.png
 *      /safari-pinned-tab.svg (simple B4Y mark)
 *
 * No external fonts; uses system fonts. Styled with emerald→blue gradient.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLISH = path.resolve(__dirname, "..");
const OG_DIR = path.join(PUBLISH, "og");
const ICON_DIR = path.join(PUBLISH, "icons");

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

const SEO_DIR = path.join(PUBLISH, "seo");
const INDUSTRY = readMap(path.join(SEO_DIR, "industries.txt"));
const CITY = readMap(path.join(SEO_DIR, "locations.txt"));
const titleCase = (s) => String(s).replace(/[-_]/g, " ").replace(/\b\w/g, c => c.toUpperCase());

function discoverSlugs() {
  return fs.readdirSync(PUBLISH, { withFileTypes: true })
    .filter(d => d.isDirectory() && !IGNORE.has(d.name))
    .map(d => d.name)
    .filter(slug => fs.existsSync(path.join(PUBLISH, slug, "index.html")));
}

function cardHTML({ title, subtitle }) {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    html, body { margin:0; padding:0; width:1200px; height:630px; background:linear-gradient(135deg,#059669,#2563eb); color:#fff; font-family: ui-sans-serif, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial; }
    .wrap { width:100%; height:100%; display:flex; justify-content:center; align-items:center; }
    .card { width:1000px; border-radius:28px; padding:56px; background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.25); box-shadow:0 20px 60px rgba(0,0,0,.25), inset 0 0 40px rgba(255,255,255,.08); backdrop-filter: blur(8px); }
    h1 { margin:0 0 12px 0; font-size:72px; line-height:1.05; }
    p { margin:0; font-size:36px; opacity:.92; }
    .brand { position:absolute; top:30px; left:40px; font-weight:700; letter-spacing:.5px; opacity:.95; }
  </style>
</head>
<body>
  <div class="brand">Built4You</div>
  <div class="wrap">
    <div class="card">
      <h1>${title}</h1>
      <p>${subtitle}</p>
    </div>
  </div>
</body>
</html>`;
}

function squareHTML({ label }) {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    html, body { margin:0; padding:0; width:512px; height:512px; background:linear-gradient(135deg,#059669,#2563eb); color:#fff; font-family: ui-sans-serif, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial; }
    .wrap { width:100%; height:100%; display:flex; justify-content:center; align-items:center; }
    .mark { width:360px; height:360px; border-radius:72px; background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.35); display:flex; align-items:center; justify-content:center; box-shadow:0 18px 40px rgba(0,0,0,.25), inset 0 0 30px rgba(255,255,255,.12); }
    .text { font-size:160px; font-weight:800; letter-spacing:2px; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="mark"><div class="text">${label}</div></div>
  </div>
</body>
</html>`;
}

async function shot({ html, outPath, width, height }) {
  const puppeteer = await import("puppeteer");
  const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox","--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.screenshot({ path: outPath, type: "png" });
  await browser.close();
}

async function main() {
  fs.mkdirSync(OG_DIR, { recursive: true });
  fs.mkdirSync(ICON_DIR, { recursive: true });

  // Root OG
  await shot({
    html: cardHTML({ title: "Built4You", subtitle: "Custom websites for small businesses" }),
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
      html: cardHTML({ title: name, subtitle }),
      outPath: path.join(OG_DIR, `${slug}.png`),
      width: 1200, height: 630
    });
  }

  // Icon pack for root
  // 512 base
  const base512 = path.join(ICON_DIR, "base-512.png");
  await shot({
    html: squareHTML({ label: "B4Y" }),
    outPath: base512,
    width: 512, height: 512
  });

  // Render other sizes directly for crispness
  await shot({ html: squareHTML({ label: "B4Y" }), outPath: path.join(PUBLISH, "android-chrome-512x512.png"), width: 512, height: 512 });
  await shot({ html: squareHTML({ label: "B4Y" }), outPath: path.join(PUBLISH, "android-chrome-192x192.png"), width: 192, height: 192 });
  await shot({ html: squareHTML({ label: "B4Y" }), outPath: path.join(PUBLISH, "apple-touch-icon.png"), width: 180, height: 180 });
  await shot({ html: squareHTML({ label: "B4Y" }), outPath: path.join(PUBLISH, "favicon-32x32.png"), width: 32, height: 32 });
  await shot({ html: squareHTML({ label: "B4Y" }), outPath: path.join(PUBLISH, "favicon-16x16.png"), width: 16, height: 16 });

  // Simple pinned tab SVG (monochrome)
  const pinned = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M12 12h40v40H12z"/><text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#fff" font-weight="700">B4Y</text></svg>`;
  fs.writeFileSync(path.join(PUBLISH, "safari-pinned-tab.svg"), pinned, "utf8");

  console.log(`OG images generated: root + ${slugs.length}; icon pack written to site root.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
