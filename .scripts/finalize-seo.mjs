import fs from "fs";
import path from "path";

const PUBLISH = process.cwd();
const SITE_BASE = "https://built4you.org";
const IGNORE = new Set(["project", ".git", ".github", "node_modules"]);

// --- helpers to read controls ---
const readSet = (p) =>
  fs.existsSync(p)
    ? new Set(fs.readFileSync(p, "utf8").split(/\r?\n/).map(s => s.trim()).filter(Boolean))
    : new Set();

const readMap = (p) => {
  const m = new Map();
  if (!fs.existsSync(p)) return m;
  const lines = fs.readFileSync(p, "utf8").split(/\r?\n/).map(s => s.trim()).filter(Boolean);
  for (const line of lines) {
    const i = line.indexOf("|");
    if (i === -1) continue;
    const k = line.slice(0, i).trim();
    const v = line.slice(i + 1).trim();
    if (k) m.set(k, v);
  }
  return m;
};

const esc = (s) => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const titleCase = (s) => s.replace(/[-_]/g," ").replace(/\b\w/g, c => c.toUpperCase());

// --- inputs (all optional except clients/demos you already use) ---
const CLIENTS   = readSet(path.join(process.cwd(), "seo", "clients.txt"));
const DEMOS     = readSet(path.join(process.cwd(), "seo", "demos.txt"));
const INDUSTRY  = readMap(path.join(process.cwd(), "seo", "industries.txt")); // slug|Industry
const CITY      = readMap(path.join(process.cwd(), "seo", "locations.txt"));  // slug|City, ST
const overridesPath = path.join(process.cwd(), "seo", "overrides.json");
const OVERRIDES = fs.existsSync(overridesPath) ? JSON.parse(fs.readFileSync(overridesPath, "utf8")) : {};

const statusFor = (slug) => CLIENTS.has(slug) ? "client" : (DEMOS.has(slug) ? "demo" : "demo");

// default generator (clients may use city/industry; demos never do)
function defaultSEO(slug){
  const status = statusFor(slug);
  const brand = titleCase(slug || "Built4You");

  // Base defaults for everyone
  let title = `${brand} — Built4You`;
  let description = "Modern, mobile-first site by Built4You.";
  let keywords = slug ? [slug, "website", "Built4You", `${slug} site`, `${slug} online`] : ["Built4You","website","online"];

  // Enrich ONLY clients with industry/city if present
  if (status === "client") {
    const ind  = INDUSTRY.get(slug); // e.g. "Restaurant"
    const city = CITY.get(slug);     // e.g. "Morehead City, NC"
    if (ind && city) {
      title = `${ind} in ${city} — ${brand} | Built4You`;
      description = `Professional ${ind.toLowerCase()} in ${city}.`;
      keywords = [ind, city, `${ind} ${city}`, slug, "website", "Built4You"];
    } else if (ind) {
      title = `${ind} — ${brand} | Built4You`;
      description = `Professional ${ind.toLowerCase()} services.`;
      keywords = [ind, slug, "website", "Built4You"];
    }
  }

  return { status, title, description, keywords };
}

// merge defaults + optional overrides
function seoFor(slug){
  const base = defaultSEO(slug);
  const o = OVERRIDES[slug] || {};
  const forcedStatus = (o.status === "client" || o.status === "demo") ? o.status : base.status;
  return { ...base, ...o, status: forcedStatus };
}

function injectHead(file, slug, seo){
  if (!fs.existsSync(file)) return false;
  let html = fs.readFileSync(file, "utf8");
  const canonical = `${SITE_BASE}/${slug ? slug + "/" : ""}`;
  const robots = seo.status === "client" ? "index, follow" : "noindex, nofollow";

  const tags = [
    `<meta name="robots" content="${robots}">`,
    `<link rel="canonical" href="${esc(canonical)}">`,
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}">`,
    Array.isArray(seo.keywords) && seo.keywords.length ? `<meta name="keywords" content="${esc(seo.keywords.join(", "))}">` : "",
    `<meta property="og:type" content="website">`,
    `<meta property="og:title" content="${esc(seo.title)}">`,
    `<meta property="og:description" content="${esc(seo.description)}">`,
    `<meta property="og:url" content="${esc(canonical)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(seo.title)}">`,
    `<meta name="twitter:description" content="${esc(seo.description)}">`
  ].filter(Boolean).join("");

  const addr = seo.address || null;
  const ld = (seo.status === "client" && (addr || seo.phone)) ? `
<script type="application/ld+json">
${JSON.stringify({
  "@context":"https://schema.org",
  "@type":"LocalBusiness",
  name: seo.title,
  url: canonical,
  telephone: seo.phone || undefined,
  address: addr ? {
    "@type":"PostalAddress",
    streetAddress: addr.street,
    addressLocality: addr.locality,
    addressRegion: addr.region,
    postalCode: addr.postalCode,
    addressCountry: addr.country
  } : undefined
}, null, 2)}
</script>` : "";

  html = (/<\/head>/i.test(html))
    ? html.replace(/<\/head>/i, `${tags}\n${ld}\n</head>`)
    : `<!-- SEO INJECT START -->${tags}${ld}<!-- SEO INJECT END -->\n` + html;

  fs.writeFileSync(file, html, "utf8");
  return true;
}

// collect built subfolders at publish root
const slugs = fs.readdirSync(PUBLISH, { withFileTypes: true })
  .filter(d => d.isDirectory() && !IGNORE.has(d.name))
  .map(d => d.name)
  .filter(s => fs.existsSync(path.join(PUBLISH, s, "index.html")));

const entries = [];

// root
const rootIndex = path.join(PUBLISH, "index.html");
if (fs.existsSync(rootIndex)) {
  injectHead(rootIndex, "", seoFor(""));
  entries.push({ loc: `${SITE_BASE}/`, priority: "1.0", changefreq: "weekly" });
  entries.push({ loc: `${SITE_BASE}/pricing`, priority: "0.9", changefreq: "weekly" });
  entries.push({ loc: `${SITE_BASE}/why-we-exist`, priority: "0.7", changefreq: "monthly" });
}

// subsites
for (const slug of slugs) {
  const cfg = seoFor(slug);
  injectHead(path.join(PUBLISH, slug, "index.html"), slug, cfg);
  entries.push({
    loc: `${SITE_BASE}/${slug}/`,
    priority: cfg.status === "client" ? "0.9" : "0.5",
    changefreq: cfg.status === "client" ? "weekly" : "monthly"
  });
}

// write sitemap + robots at publish root
const urls = entries.map(e =>
  `  <url><loc>${e.loc}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`
).join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
fs.writeFileSync(path.join(PUBLISH, "sitemap.xml"), xml, "utf8");
fs.writeFileSync(path.join(PUBLISH, "robots.txt"),
`User-agent: *
Allow: /

Sitemap: ${SITE_BASE}/sitemap.xml
`, "utf8");

console.log(`SEO injected for ${slugs.length} subsites. Clients used city/industry where available. Wrote ${entries.length} URLs.`);
