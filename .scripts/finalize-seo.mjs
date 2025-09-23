import fs from "fs";
import path from "path";

const PUBLISH = process.cwd();
const SITE_BASE = "https://built4you.org";
const IGNORE = new Set(["project", ".git", ".github", "node_modules", "seo", "og"]);

// ---- load SEO data (optional but used if present)
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

const SEO_DIR = path.join(PUBLISH, "seo");
const CLIENTS   = new Set(readLines(path.join(SEO_DIR, "clients.txt")));
const DEMOS     = new Set(readLines(path.join(SEO_DIR, "demos.txt")));
const INDUSTRY  = readMap(path.join(SEO_DIR, "industries.txt"));  // slug|Industry
const CITY      = readMap(path.join(SEO_DIR, "locations.txt"));   // slug|City, ST
const IK_PATH   = path.join(SEO_DIR, "industry-keywords.json");
const KEYWORDS  = fs.existsSync(IK_PATH) ? JSON.parse(fs.readFileSync(IK_PATH,"utf8")) : {};
const overridesPath = path.join(SEO_DIR, "overrides.json");
const OVERRIDES = fs.existsSync(overridesPath) ? JSON.parse(fs.readFileSync(overridesPath, "utf8")) : {};

const OG_DIR = path.join(PUBLISH, "og");

// canonicalize common typos
const CANON = new Map([
  ["restaraunt", "Restaurant"]
]);
const canonIndustry = (x) => {
  if (!x) return undefined;
  const s = String(x).trim();
  const lower = s.toLowerCase();
  return CANON.get(lower) || s.charAt(0).toUpperCase() + s.slice(1);
};

// ---- discover subfolders that have an index.html
const slugs = fs.readdirSync(PUBLISH, { withFileTypes: true })
  .filter(d => d.isDirectory() && !IGNORE.has(d.name))
  .map(d => d.name)
  .filter(s => fs.existsSync(path.join(PUBLISH, s, "index.html")));

const entries = [];

// ---- helpers
function statusFor(slug) {
  if (CLIENTS.has(slug)) return "client";
  if (DEMOS.has(slug)) return "demo";
  return "demo";
}

function buildDesc(name, ind, loc) {
  const keySet = KEYWORDS[canonIndustry(ind)] || KEYWORDS[ind] || [];
  const kws = keySet.slice(0, 6).join(", ");
  const parts = [];
  if (name) parts.push(name);
  if (ind) parts.push(canonIndustry(ind));
  if (loc) parts.push(loc);
  const who = parts.filter(Boolean).join(" • ") || "Custom websites";
  const baseline = `${who} by Built4You. ${kws}`.trim();
  return baseline.slice(0, 155);
}

function injectHead(file, slug, data) {
  if (!fs.existsSync(file)) return false;
  let html = fs.readFileSync(file, "utf8");

  const canonical = `${SITE_BASE}/${slug ? slug + "/" : ""}`;
  const shouldNoindex = data.noindex === true;
  const robots = shouldNoindex ? "noindex, nofollow" : "index, follow";

  // Resolve OG image
  let ogImageUrl = data.ogImage;
  if (!ogImageUrl) {
    const ogFile = slug ? path.join(OG_DIR, `${slug}.png`) : path.join(OG_DIR, "root.png");
    if (fs.existsSync(ogFile)) {
      ogImageUrl = `${SITE_BASE}/og/${slug ? slug : "root"}.png`;
    }
  }

  const tags = [
    `<meta name="robots" content="${robots}">`,
    `<link rel="canonical" href="${esc(canonical)}">`,
    `<title>${esc(data.title)}</title>`,
    `<meta name="description" content="${esc(data.description)}">`,
    data.keywords?.length ? `<meta name="keywords" content="${esc(data.keywords.join(", "))}">` : "",
    `<meta property="og:type" content="website">`,
    `<meta property="og:title" content="${esc(data.title)}">`,
    `<meta property="og:description" content="${esc(data.description)}">`,
    `<meta property="og:url" content="${esc(canonical)}">`,
    ogImageUrl ? `<meta property="og:image" content="${esc(ogImageUrl)}">` : "",
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(data.title)}">`,
    `<meta name="twitter:description" content="${esc(data.description)}">`,
    ogImageUrl ? `<meta name="twitter:image" content="${esc(ogImageUrl)}">` : ""
  ].filter(Boolean).join("");

  const address = data.address || null;
  const ld = (!shouldNoindex && (address || data.phone)) ? `
<script type="application/ld+json">
${JSON.stringify({
  "@context":"https://schema.org",
  "@type":"LocalBusiness",
  name: data.schemaName || data.title,
  url: canonical,
  telephone: data.phone || undefined,
  address: address ? {
    "@type":"PostalAddress",
    streetAddress: address.street,
    addressLocality: address.locality,
    addressRegion: address.region,
    postalCode: address.postalCode,
    addressCountry: address.country
  } : undefined
}, null, 2)}
</script>` : "";

  html = (/<\/head>/i.test(html))
    ? html.replace(/<\/head>/i, `${tags}\n${ld}\n</head>`)
    : `<!-- SEO INJECT START -->${tags}${ld}<!-- SEO INJECT END -->\n` + html;

  if (!shouldNoindex) {
    html = html.replace(
      /(<meta[^>]*name=["']robots["'][^>]*content=["'])[^"']*noindex[^"']*(["'][^>]*>)/ig,
      '$1index, follow$2'
    );
  }

  fs.writeFileSync(file, html, "utf8");
  return true;
}

// ---- ROOT
const rootIndex = path.join(PUBLISH, "index.html");
if (fs.existsSync(rootIndex)) {
  const title = "Built4You — Custom websites for small businesses";
  const description = "Fast, mobile-first websites that convert. $0 demos, subscription or one-time pricing.";
  injectHead(rootIndex, "", {
    title,
    description,
    keywords: ["Built4You","web design","mobile first","small business"]
  });
  entries.push({ loc: `${SITE_BASE}/`, priority: "1.0", changefreq: "weekly" });
  entries.push({ loc: `${SITE_BASE}/pricing`, priority: "0.9", changefreq: "weekly" });
  entries.push({ loc: `${SITE_BASE}/why-we-exist`, priority: "0.7", changefreq: "monthly" });
}

// ---- SUBSITES
for (const slug of slugs) {
  const status = statusFor(slug);
  const name = titleCase(slug);
  const indRaw = INDUSTRY.get(slug);
  const ind = canonIndustry(indRaw);
  const loc = CITY.get(slug);
  const kws = (KEYWORDS[ind] || KEYWORDS[indRaw] || []);
  const baseKeywords = [slug, "website", "Built4You", ...(kws || [])];

  let title = `${name} — Built4You`;
  if (ind && loc) title = `${ind} in ${loc} — ${name} | Built4You`;
  else if (ind) title = `${ind} — ${name} | Built4You`;

  const description = buildDesc(name, ind || indRaw, loc);

  const o = OVERRIDES[slug] || {};
  const data = {
    status,
    title: o.title || title,
    description: o.description || description,
    keywords: Array.isArray(o.keywords) ? o.keywords : baseKeywords,
    noindex: o.noindex === true ? true : false,
    phone: o.phone,
    address: o.address,
    schemaName: o.schemaName,
    ogImage: o.ogImage // optional manual override
  };

  injectHead(path.join(PUBLISH, slug, "index.html"), slug, data);

  entries.push({
    loc: `${SITE_BASE}/${slug}/`,
    priority: data.noindex ? "0.3" : (status === "client" ? "0.9" : "0.7"),
    changefreq: data.noindex ? "yearly" : (status === "client" ? "weekly" : "monthly")
  });
}

// ---- root sitemap + robots at publish root
const urls = entries.map(e =>
  `  <url><loc>${e.loc}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`
).join("\n");

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

console.log("Finalize SEO complete. OG tags linked. Canonicals, metas, JSON-LD, and sitemaps generated.");
