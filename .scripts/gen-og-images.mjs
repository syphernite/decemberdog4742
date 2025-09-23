/**
 * Generate OG images (1200x630 PNG) for:
 *  - Root: og/root.png
 *  - Each subsite folder with index.html: og/<slug>.png
 *
 * Uses Puppeteer to render a simple HTML card with your emerald→blue gradient.
 * No repo dependencies needed besides puppeteer (installed in workflow).
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLISH = path.resolve(__dirname, ".."); // repo root during workflow
const OUT_DIR = path.join(PUBLISH, "og");
const IGNORE = new Set(["project", ".git", ".github", "node_modules", "seo", "og"]);

const SITE_BASE = "https://built4you.org";

// Optional SEO data
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

async function ensureDir(d) {
  await fs.promises.mkdir(d, { recursive: true });
}

function discoverSlugs() {
  return fs.readdirSync(PUBLISH, { withFileTypes: true })
    .filter(d => d.isDirectory() && !IGNORE.has(d.name))
    .map(d => d.name)
    .filter(slug => fs.existsSync(path.join(PUBLISH, slug, "index.html")));
}

function htmlFor(title, subtitle) {
  // System fonts + gradient background
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    html, body {
      margin: 0; padding: 0; width: 1200px; height: 630px;
      font-family: ui-sans-serif, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji";
      background: linear-gradient(135deg, #059669, #2563eb);
      color: #ffffff;
    }
    .wrap {
      position: relative;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .brand {
      position: absolute;
      top: 30px;
      left: 40px;
      font-weight: 700;
      letter-spacing: .5px;
      opacity: .95;
    }
    .card {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 28px;
      padding: 48px 56px;
      max-width: 980px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.25), inset 0 0 40px rgba(255,255,255,0.08);
      backdrop-filter: blur(8px);
    }
    h1 {
      margin: 0 0 16px 0;
      font-size: 72px;
      line-height: 1.05;
      letter-spacing: .4px;
    }
    p {
      margin: 0;
      font-size: 36px;
      opacity: .92;
    }
    .tag {
      position: absolute;
      right: 40px;
      bottom: 28px;
      font-size: 22px;
      opacity: .9;
    }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="brand">Built4You</div>
    <div class="card">
      <h1>${title}</h1>
      <p>${subtitle}</p>
    </div>
    <div class="tag">1200 × 630</div>
  </div>
</body>
</html>`;
}

async function renderPNG(html, outPath) {
  const puppeteer = await import("puppeteer");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.screenshot({ path: outPath, type: "png" });
  await browser.close();
}

async function main() {
  await ensureDir(OUT_DIR);

  // Root image
  {
    const title = "Built4You";
    const subtitle = "Custom websites for small businesses";
    const html = htmlFor(title, subtitle);
    await renderPNG(html, path.join(OUT_DIR, "root.png"));
  }

  // Each subsite
  const slugs = discoverSlugs();
  for (const slug of slugs) {
    const name = titleCase(slug);
    const ind = INDUSTRY.get(slug) || "";
    const loc = CITY.get(slug) || "";
    const title = name;
    const subtitle = [ind, loc].filter(Boolean).join(" • ") || "Modern, mobile-first site";
    const html = htmlFor(title, subtitle);
    const out = path.join(OUT_DIR, `${slug}.png`);
    await renderPNG(html, out);
  }

  console.log(`OG images generated: root + ${slugs.length}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
