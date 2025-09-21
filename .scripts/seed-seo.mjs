import fs from "fs";
import path from "path";

const REPO_ROOT = process.cwd();
const PROJECT_ROOT = path.join(REPO_ROOT, "project");
const VITE_SEO_FILENAME = "vite.seo.ts";
const SEO_CFG_FILENAME = "seo.config.json";

const viteSeoSource = `import fs from "fs";
import path from "path";

type SEO = {
  slug: string;
  siteUrl: string;
  status: "client" | "demo";
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  phone?: string;
  address?: {
    street?: string;
    locality?: string;
    region?: string;
    postalCode?: string;
    country?: string;
  };
};

function esc(s: string) {
  return s.replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");
}

export default function seoPlugin() {
  return {
    name: "b4y-seo-inject",
    transformIndexHtml(html: string) {
      const cfgPath = path.resolve(process.cwd(), "${SEO_CFG_FILENAME}");
      if (!fs.existsSync(cfgPath)) return html;
      const raw = fs.readFileSync(cfgPath, "utf8");
      const seo: SEO = JSON.parse(raw);

      const noindex = seo.status === "demo";
      const robots = noindex ? "noindex, nofollow" : "index, follow";
      const canonical = seo.siteUrl.replace(/index\\.html?$/i, "");

      const tags = [
        \`<meta name="robots" content="\${robots}" />\`,
        \`<link rel="canonical" href="\${esc(canonical)}" />\`,
        \`<title>\${esc(seo.title)}</title>\`,
        \`<meta name="description" content="\${esc(seo.description)}" />\`,
        seo.keywords?.length ? \`<meta name="keywords" content="\${esc(seo.keywords.join(", "))}" />\` : "",
        \`<meta property="og:type" content="website" />\`,
        \`<meta property="og:title" content="\${esc(seo.title)}" />\`,
        \`<meta property="og:description" content="\${esc(seo.description)}" />\`,
        \`<meta property="og:url" content="\${esc(canonical)}" />\`,
        seo.ogImage ? \`<meta property="og:image" content="\${esc(new URL(seo.ogImage, canonical).toString())}" />\` : "",
        \`<meta name="twitter:card" content="summary_large_image" />\`,
        \`<meta name="twitter:title" content="\${esc(seo.title)}" />\`,
        \`<meta name="twitter:description" content="\${esc(seo.description)}" />\`,
        seo.ogImage ? \`<meta name="twitter:image" content="\${esc(new URL(seo.ogImage, canonical).toString())}" />\` : ""
      ].filter(Boolean).join("");

      const localBusiness = !noindex && seo.address ? \`
<script type="application/ld+json">
\${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": seo.title,
  "url": canonical,
  "telephone": seo.phone || undefined,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": seo.address.street,
    "addressLocality": seo.address.locality,
    "addressRegion": seo.address.region,
    "postalCode": seo.address.postalCode,
    "addressCountry": seo.address.country
  }
}, null, 2)}
</script>\` : "";

      return html.replace(/<\/head>/i, \`\${tags}\\n\${localBusiness}\\n</head>\`);
    }
  };
}
`;

function defaultSeoConfig(slug) {
  return {
    slug,
    siteUrl: `https://built4you.org/${slug}/`,
    status: "demo",
    title: `${slug} — Built4You`,
    description: `Modern, mobile-first site by Built4You.`,
    keywords: [slug, "website", "Built4You"]
  };
}

function read(file) {
  try { return fs.readFileSync(file, "utf8"); } catch { return null; }
}

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, "utf8");
}

function ensureViteSeo(dir) {
  const f = path.join(dir, VITE_SEO_FILENAME);
  if (!fs.existsSync(f)) write(f, viteSeoSource);
}

function ensureSeoConfig(dir, slug) {
  const f = path.join(dir, SEO_CFG_FILENAME);
  if (!fs.existsSync(f)) write(f, JSON.stringify(defaultSeoConfig(slug), null, 2) + "\n");
}

function patchViteConfig(dir, slug) {
  const file = path.join(dir, "vite.config.ts");
  const src = read(file);
  if (!src) return;

  let out = src;

  if (!/from\s+["']\.\/vite\.seo["']/.test(out)) {
    out = out.replace(/(^\s*import .*?;[\r\n]+)/s, (m) => m + `import seoPlugin from "./vite.seo";\n`);
    if (!/import seoPlugin from/.test(out)) {
      out = `import seoPlugin from "./vite.seo";\n` + out;
    }
  }

  if (!/plugins\s*:\s*\[.*seoPlugin\(\)\s*]/s.test(out)) {
    out = out.replace(/plugins\s*:\s*\[\s*react\(\)\s*(,)?/s, (m) =>
      m.includes("react()") ? m.replace("react()", "react(), seoPlugin()") : m
    );
    if (!/plugins\s*:/.test(out)) {
      out = out.replace(/export default defineConfig\(\{/, 'export default defineConfig({\n  plugins: [react(), seoPlugin()],');
    }
  }

  if (/base\s*:\s*["'`][^"'`]*["'`]/.test(out)) {
    out = out.replace(/base\s*:\s*["'`][^"'`]*["'`]/, `base: "/${slug}/"`);
  } else {
    out = out.replace(/export default defineConfig\(\{/, `export default defineConfig({\n  base: "/${slug}/",`);
  }

  if (out !== src) write(file, out);
}

function main() {
  if (!fs.existsSync(PROJECT_ROOT)) {
    console.error("project/ not found");
    process.exit(1);
  }

  const folders = fs.readdirSync(PROJECT_ROOT, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(name => !name.startsWith("."));

  for (const slug of folders) {
    const dir = path.join(PROJECT_ROOT, slug);
    if (!fs.existsSync(path.join(dir, "vite.config.ts"))) continue;
    if (slug === "landingpage") continue;

    ensureSeoConfig(dir, slug);
    ensureViteSeo(dir);
    patchViteConfig(dir, slug);
    console.log(`seeded: ${slug}`);
  }
}

main();
