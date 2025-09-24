/**
 * Generates two static hub pages:
 *  - /clients/index.html  → indexable hub linking ONLY to client folders in seo/clients.txt
 *  - /demos/index.html    → noindex gallery linking to non-client demo folders
 */

import fs from "fs";
import path from "path";

const PUBLISH = process.cwd();
const SITE = "https://built4you.org";
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

const SEO_DIR = path.join(PUBLISH, "seo");
const CLIENTS = new Set(readLines(path.join(SEO_DIR, "clients.txt")));
const INDUSTRY = readMap(path.join(SEO_DIR, "industries.txt"));
const CITY = readMap(path.join(SEO_DIR, "locations.txt"));

function discoverSlugs() {
  return fs.readdirSync(PUBLISH, { withFileTypes: true })
    .filter(d => d.isDirectory() && !IGNORE.has(d.name))
    .map(d => d.name)
    .filter(slug => fs.existsSync(path.join(PUBLISH, slug, "index.html")));
}

function li(slug) {
  const name = titleCase(slug);
  const ind = INDUSTRY.get(slug) || "";
  const loc = CITY.get(slug) || "";
  const meta = [ind, loc].filter(Boolean).join(" • ");
  return `
      <li class="item">
        <a href="/${slug}/" class="link">${name}</a>
        ${meta ? `<span class="meta">${meta}</span>` : ""}
      </li>`;
}

function page({ title, desc, canonical, robots, items }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <meta name="description" content="${desc}">
  <meta name="robots" content="${robots}">
  <link rel="canonical" href="${canonical}">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <style>
    :root { --g1:#059669; --g2:#2563eb; }
    html, body { margin:0; padding:0; font-family: ui-sans-serif, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial; background:#0b1120; color:#e5e7eb; }
    .hero { padding: 48px 24px; background: linear-gradient(135deg, var(--g1), var(--g2)); color:#fff; }
    .wrap { max-width: 1024px; margin: 0 auto; }
    h1 { margin: 0 0 6px 0; font-size: clamp(28px, 6vw, 40px); }
    p.lead { margin: 0; opacity: .92; }
    ul.grid { list-style:none; padding:24px; margin:0; display:grid; gap:16px; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); }
    .item { background: rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.15); border-radius: 16px; padding:16px; }
    .link { color:#fff; text-decoration:none; font-weight:700; }
    .link:hover { text-decoration:underline; }
    .meta { display:block; margin-top:6px; font-size: 14px; opacity:.85; }
    footer { padding: 24px; text-align:center; opacity:.8; }
    a.home { color:#93c5fd; text-decoration:none; }
    a.home:hover { text-decoration:underline; }
  </style>
</head>
<body>
  <header class="hero">
    <div class="wrap">
      <h1>${title}</h1>
      <p class="lead">${desc}</p>
    </div>
  </header>
  <main class="wrap">
    <ul class="grid">
${items}
    </ul>
  </main>
  <footer><a class="home" href="/">← Back to Built4You</a></footer>
</body>
</html>`;
}

function writePage(outDir, html) {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf8");
}

function build() {
  const allSlugs = discoverSlugs();
  const clientSlugs = allSlugs.filter(s => CLIENTS.has(s)).sort();
  const demoSlugs = allSlugs.filter(s => !CLIENTS.has(s) && !["clients","demos","pricing","careers","home"].includes(s)).sort();

  // /clients/ (indexable)
  const clientsHTML = page({
    title: "Client Sites — Built4You",
    desc: "Live client sites by industry and location. Fast, mobile-first, and built to convert.",
    canonical: `${SITE}/clients/`,
    robots: "index,follow",
    items: clientSlugs.map(li).join("\n")
  });
  writePage(path.join(PUBLISH, "clients"), clientsHTML);

  // /demos/ (noindex)
  const demosHTML = page({
    title: "Demo Gallery — Built4You",
    desc: "Preview industry demo sites. These are examples and may not reflect a live client.",
    canonical: `${SITE}/demos/`,
    robots: "noindex,nofollow",
    items: demoSlugs.map(li).join("\n")
  });
  writePage(path.join(PUBLISH, "demos"), demosHTML);

  console.log(`Hubs written: clients=${clientSlugs.length} demos=${demoSlugs.length}`);
}

build();
