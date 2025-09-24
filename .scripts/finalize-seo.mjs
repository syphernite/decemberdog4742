import fs from "fs";
import path from "path";

const PUBLISH = process.cwd();
const SITE_BASE = "https://built4you.org";
const IGNORE = new Set(["project", ".git", ".github", "node_modules", "seo", "og", "icons"]);

// ---- IO helpers
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
const esc = (s) => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const titleCase = (s) => s.replace(/[-_]/g," ").replace(/\b\w/g, c => c.toUpperCase());

const SEO_DIR   = path.join(PUBLISH, "seo");
const CLIENTS   = new Set(readLines(path.join(SEO_DIR, "clients.txt")));
const INDUSTRY  = readMap(path.join(SEO_DIR, "industries.txt"));
const CITY      = readMap(path.join(SEO_DIR, "locations.txt"));
const KEYWORDS  = (fs.existsSync(path.join(SEO_DIR, "industry-keywords.json")) ? JSON.parse(fs.readFileSync(path.join(SEO_DIR, "industry-keywords.json"),"utf8")) : {});
const OVERRIDES = (fs.existsSync(path.join(SEO_DIR, "overrides.json")) ? JSON.parse(fs.readFileSync(path.join(SEO_DIR, "overrides.json"), "utf8")) : {});

const slugs = fs.readdirSync(PUBLISH, { withFileTypes: true })
  .filter(d => d.isDirectory() && !IGNORE.has(d.name))
  .map(d => d.name)
  .filter(s => fs.existsSync(path.join(PUBLISH, s, "index.html")));

const entries = [];

const CANON = new Map([ ["restaraunt","Restaurant"] ]);
const canonIndustry = (x) => {
  if (!x) return undefined;
  const s = String(x).trim(); const lower = s.toLowerCase();
  return CANON.get(lower) || s.charAt(0).toUpperCase() + s.slice(1);
};

function buildDesc(name, ind, loc) {
  const keySet = KEYWORDS[canonIndustry(ind)] || KEYWORDS[ind] || [];
  const kws = keySet.slice(0, 6).join(", ");
  const parts = []; if (name) parts.push(name); if (ind) parts.push(canonIndustry(ind)); if (loc) parts.push(loc);
  const who = parts.filter(Boolean).join(" • ") || "Custom websites";
  const baseline = `${who} by Built4You. ${kws}`.trim();
  return baseline.slice(0, 155);
}

function injectHead(file, slug, data, isRoot = false) {
  if (!fs.existsSync(file)) return false;
  let html = fs.readFileSync(file, "utf8");

  const canonical = data.canonical || `${SITE_BASE}/${slug ? slug + "/" : ""}`;
  const shouldNoindex = data.noindex === true;
  const robots = shouldNoindex ? "noindex, nofollow" : "index, follow";

  let ogImageUrl = data.ogImage;
  if (!ogImageUrl) ogImageUrl = `${SITE_BASE}/og/${slug ? slug : "root"}.png`;
  const ogW = "1200", ogH = "630";

  const baseTags = [
    `<meta name="robots" content="${robots}">`,
    `<link rel="canonical" href="${esc(canonical)}">`,
    `<title>${esc(data.title)}</title>`,
    `<meta name="description" content="${esc(data.description)}">`,
    `<meta property="og:site_name" content="Built4You">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:title" content="${esc(data.title)}">`,
    `<meta property="og:description" content="${esc(data.description)}">`,
    `<meta property="og:url" content="${esc(canonical)}">`,
    `<meta property="og:image" content="${esc(ogImageUrl)}">`,
    `<meta property="og:image:width" content="${ogW}">`,
    `<meta property="og:image:height" content="${ogH}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(data.title)}">`,
    `<meta name="twitter:description" content="${esc(data.description)}">`,
    `<meta name="twitter:image" content="${esc(ogImageUrl)}">`
  ];

  const iconTags = isRoot ? [
    `<link rel="apple-touch-icon" href="/apple-touch-icon.png">`,
    `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">`,
    `<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">`,
    `<link rel="manifest" href="/site.webmanifest" crossorigin="use-credentials">`,
    `<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#10b981">`,
    `<meta name="theme-color" content="#0ea5e9">`,
    `<meta name="application-name" content="Built4You">`,
    `<meta name="apple-mobile-web-app-capable" content="yes">`,
    `<meta name="apple-mobile-web-app-title" content="Built4You">`
  ] : [];

  const tags = baseTags.concat(iconTags).join("");

  html = (/<\/head>/i.test(html))
    ? html.replace(/<\/head>/i, `${tags}\n</head>`)
    : `<!-- SEO INJECT START -->${tags}<!-- SEO INJECT END -->\n` + html;

  if (!shouldNoindex) {
    html = html.replace(
      /(<meta[^>]*name=["']robots["'][^>]*content=["'])[^"']*noindex[^"']*(["'][^>]*>)/ig,
      '$1index, follow$2'
    );
  }

  fs.writeFileSync(file, html, "utf8");
  return true;
}

// ---- Root page
const rootIndex = path.join(PUBLISH, "index.html");
if (fs.existsSync(rootIndex)) {
  injectHead(rootIndex, "", {
    title: "Built4You — Custom websites for small businesses",
    description: "Fast, mobile-first websites that convert. $0 demos, subscription or one-time pricing.",
    keywords: ["Built4You","web design","mobile first","small business"]
  }, true);
  entries.push({ loc: `${SITE_BASE}/`, priority: "1.0", changefreq: "weekly" });
}

// ---- Marketing pages
function injectSimple(slug, title, description, { noindex=false, addToSitemap=true, canonicalOverride } = {}) {
  const file = path.join(PUBLISH, slug, "index.html");
  if (!fs.existsSync(file)) return;
  injectHead(file, slug, { title, description, noindex, canonical: canonicalOverride });
  if (!noindex && addToSitemap) {
    entries.push({ loc: `${SITE_BASE}/${slug}/`, priority: "0.8", changefreq: "monthly" });
  }
}
injectSimple("pricing", "Pricing — Built4You", "Simple plans for small businesses: $0 demos, fair monthly or one-time pricing.");
injectSimple("careers", "Careers — Built4You", "Join Built4You and help small businesses win online. We value speed, craft, and real outcomes.");
// /home → indexable if you really want, but canonical must be root to avoid duplication.
// We keep it out of the sitemap to keep things clean.
injectSimple("home", "Built4You — Home", "Fast, mobile-first websites for small businesses. $0 demos plus simple pricing.", {
  noindex: false,
  addToSitemap: false,
  canonicalOverride: `${SITE_BASE}/`
});
// /demos stays noindex and out of the sitemap (human-only gallery)
injectSimple("demos", "Demo Gallery — Built4You", "Preview industry demos (examples).", { noindex: true, addToSitemap: false });

// ---- Client and non-client subsites
for (const slug of slugs) {
  if (["pricing","careers","home","clients","demos"].includes(slug)) continue;

  const isClient = CLIENTS.has(slug);
  const name = titleCase(slug);
  const indRaw = INDUSTRY.get(slug);
  const ind = canonIndustry(indRaw);
  const loc = CITY.get(slug);

  let title = `${name} — Built4You`;
  if (ind && loc) title = `${ind} in ${loc} — ${name} | Built4You`;
  else if (ind) title = `${ind} — ${name} | Built4You`;

  const description = buildDesc(name, ind || indRaw, loc);
  const o = OVERRIDES[slug] || {};

  let noindex = !isClient;         // only clients index by default
  if (o.noindex === true) noindex = true;
  if (o.noindex === false) noindex = false;

  injectHead(path.join(PUBLISH, slug, "index.html"), slug, {
    title: o.title || title,
    description: o.description || description,
    keywords: Array.isArray(o.keywords) ? o.keywords : undefined,
    noindex
  });

  if (!noindex) {
    entries.push({ loc: `${SITE_BASE}/${slug}/`, priority: "0.9", changefreq: "weekly" });
  }
}

// ---- sitemap.xml + robots.txt
const urls = entries
  .filter((e, i, a) => a.findIndex(x => x.loc === e.loc) === i)
  .map(e => `  <url><loc>${e.loc}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`)
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
fs.writeFileSync(path.join(PUBLISH, "sitemap.xml"), xml, "utf8");

fs.writeFileSync(
  path.join(PUBLISH, "robots.txt"),
  `User-agent: *
Allow: /

Sitemap: ${SITE_BASE}/sitemap.xml
`,
  "utf8"
);

console.log("Finalize SEO complete. Clients indexed; /pricing & /careers optimized; /home canonical → root; /demos noindexed.");
