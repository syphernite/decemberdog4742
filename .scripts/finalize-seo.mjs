import fs from "fs";
import path from "path";

const PUBLISH = process.cwd();
const SITE_BASE = "https://built4you.org";
const IGNORE = new Set(["project", ".git", ".github", "node_modules", "seo", "og", "icons"]);

function readLines(p) { try { return fs.readFileSync(p, "utf8").split(/\r?\n/).map(s=>s.trim()).filter(Boolean); } catch { return []; } }
function readMap(p) {
  const m = new Map();
  try {
    for (const line of fs.readFileSync(p, "utf8").split(/\r?\n/)) {
      const s = line.trim(); if (!s) continue;
      const i = s.indexOf("|"); if (i === -1) continue;
      const k = s.slice(0, i).trim(); const v = s.slice(i + 1).trim();
      if (k) m.set(k, v);
    }
  } catch {}
  return m;
}
const esc = (s) => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const titleCase = (s) => s.replace(/[-_]/g," ").replace(/\b\w/g, c => c.toUpperCase());
const exists = (p) => { try { fs.accessSync(p); return true; } catch { return false; } };

const SEO_DIR   = path.join(PUBLISH, "seo");
const CLIENTS   = new Set(readLines(path.join(SEO_DIR, "clients.txt")));
const INDUSTRY  = readMap(path.join(SEO_DIR, "industries.txt"));
const CITY      = readMap(path.join(SEO_DIR, "locations.txt"));
const KEYWORDS  = (exists(path.join(SEO_DIR, "industry-keywords.json")) ? JSON.parse(fs.readFileSync(path.join(SEO_DIR, "industry-keywords.json"),"utf8")) : {});
const OVERRIDES = (exists(path.join(SEO_DIR, "overrides.json")) ? JSON.parse(fs.readFileSync(path.join(SEO_DIR, "overrides.json"), "utf8")) : {});

const slugs = fs.readdirSync(PUBLISH, { withFileTypes: true })
  .filter(d => d.isDirectory() && !IGNORE.has(d.name))
  .map(d => d.name)
  .filter(s => exists(path.join(PUBLISH, s, "index.html")));

const entries = [];
const OG_DIR = path.join(PUBLISH, "og");

function ogExists(name) { return exists(path.join(OG_DIR, name)); }

function injectHead(file, { canonical, title, description, robots, ogImage }) {
  let html = fs.readFileSync(file, "utf8");
  const tags = [
    `<meta name="robots" content="${robots}">`,
    `<link rel="canonical" href="${esc(canonical)}">`,
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}">`,
    `<meta property="og:site_name" content="Built4You">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${esc(canonical)}">`,
    `<meta property="og:image" content="${esc(ogImage)}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
    `<meta name="twitter:image" content="${esc(ogImage)}">`
  ].join("");

  // Root-only icon/link tags
  if (file === path.join(PUBLISH, "index.html")) {
    const iconTags = [
      `<link rel="apple-touch-icon" href="/apple-touch-icon.png">`,
      `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">`,
      `<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">`,
      `<link rel="manifest" href="/site.webmanifest" crossorigin="use-credentials">`,
      `<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#10b981">`,
      `<meta name="theme-color" content="#0ea5e9">`,
      `<meta name="application-name" content="Built4You">`,
      `<meta name="apple-mobile-web-app-capable" content="yes">`,
      `<meta name="apple-mobile-web-app-title" content="Built4You">`
    ].join("");
    html = html.replace(/<\/head>/i, `${tags}${iconTags}\n</head>`);
  } else {
    html = html.replace(/<\/head>/i, `${tags}\n</head>`);
  }

  // Guard: ensure no lingering noindex if we want index
  if (!/noindex/.test(robots)) {
    html = html.replace(
      /(<meta[^>]*name=["']robots["'][^>]*content=["'])[^"']*noindex[^"']*(["'][^>]*>)/ig,
      '$1index, follow$2'
    );
  }

  fs.writeFileSync(file, html, "utf8");
}

function pushSitemap(loc, priority="0.8", changefreq="monthly") {
  entries.push({ loc, priority, changefreq });
}

function buildDesc(name, ind, loc) {
  const keySet = KEYWORDS[ind] || KEYWORDS[(ind||"").toLowerCase()] || [];
  const kws = keySet.slice(0, 6).join(", ");
  const parts = []; if (name) parts.push(name); if (ind) parts.push(ind); if (loc) parts.push(loc);
  const who = parts.filter(Boolean).join(" • ") || "Custom websites";
  return `${who} by Built4You. ${kws}`.trim().slice(0,155);
}

// ---- Root
if (exists(path.join(PUBLISH, "index.html"))) {
  injectHead(path.join(PUBLISH, "index.html"), {
    canonical: `${SITE_BASE}/`,
    title: "Built4You — Custom websites for small businesses",
    description: "Fast, mobile-first websites that convert. $0 demos, subscription or one-time pricing.",
    robots: "index, follow",
    ogImage: `${SITE_BASE}/og/root.png`
  });
  pushSitemap(`${SITE_BASE}/`, "1.0", "weekly");
}

// ---- Marketing shells
function injectMarketing(slug, title, description, { noindex=false, addToSitemap=true, canonicalOverride }={}) {
  const file = path.join(PUBLISH, slug, "index.html");
  if (!exists(file)) return;
  let og = `${SITE_BASE}/og/root.png`;
  if (ogExists(`${slug}.png`)) og = `${SITE_BASE}/og/${slug}.png`;
  injectHead(file, {
    canonical: canonicalOverride || `${SITE_BASE}/${slug}/`,
    title, description,
    robots: noindex ? "noindex, nofollow" : "index, follow",
    ogImage: og
  });
  if (!noindex && addToSitemap) pushSitemap(`${SITE_BASE}/${slug}/`, "0.8", "monthly");
}
injectMarketing("pricing", "Pricing — Built4You", "Simple plans for small businesses: $0 demos, fair monthly or one-time pricing.");
injectMarketing("careers", "Careers — Built4You", "Join Built4You and help small businesses win online. We value speed, craft, and real outcomes.");
injectMarketing("home", "Built4You — Home", "Fast, mobile-first websites that convert. $0 demos plus simple pricing.", {
  canonicalOverride: `${SITE_BASE}/`,
  addToSitemap: false
});
injectMarketing("demos", "Demo Gallery — Built4You", "Preview industry demos (examples).", { noindex: true, addToSitemap: false });

// ---- Client & non-client folders
for (const slug of slugs) {
  if (["pricing","careers","home","demos"].includes(slug)) continue;

  const file = path.join(PUBLISH, slug, "index.html");
  const isClient = CLIENTS.has(slug);

  const name = titleCase(slug);
  const ind  = (INDUSTRY.get(slug) || "").replace(/\b\w/g, c => c.toUpperCase());
  const loc  = CITY.get(slug) || "";

  let title = `${name} — Built4You`;
  if (ind && loc) title = `${ind} in ${loc} — ${name} | Built4You`;
  else if (ind)   title = `${ind} — ${name} | Built4You`;

  const o = OVERRIDES[slug] || {};
  const description = (o.description) || buildDesc(name, ind, loc);

  // OG image selection:
  // 1) If /og/<slug>.png exists (user override in seo/og/<slug>.png), use it.
  // 2) Else if client → use shared /og/clients-default.png
  // 3) Else → fall back to /og/root.png
  let ogImage = `${SITE_BASE}/og/root.png`;
  if (ogExists(`${slug}.png`)) {
    ogImage = `${SITE_BASE}/og/${slug}.png`;
  } else if (isClient && ogExists("clients-default.png")) {
    ogImage = `${SITE_BASE}/og/clients-default.png`;
  }

  // Index policy: ONLY clients index by default
  let noindex = !isClient;
  if (o.noindex === true) noindex = true;
  if (o.noindex === false) noindex = false;

  injectHead(file, {
    canonical: `${SITE_BASE}/${slug}/`,
    title: o.title || title,
    description,
    robots: noindex ? "noindex, nofollow" : "index, follow",
    ogImage
  });

  if (!noindex) pushSitemap(`${SITE_BASE}/${slug}/`, "0.9", "weekly");
}

// ---- sitemap.xml + robots.txt
const dedup = entries.filter((e, i, a) => a.findIndex(x => x.loc === e.loc) === i);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${dedup.map(e => `  <url><loc>${e.loc}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(PUBLISH, "sitemap.xml"), xml, "utf8");

fs.writeFileSync(path.join(PUBLISH, "robots.txt"),
`User-agent: *
Allow: /

Sitemap: ${SITE_BASE}/sitemap.xml
`, "utf8");

console.log("Finalize SEO complete (clients indexed, shared/per-client OG logic applied, sitemap/robots written).");
