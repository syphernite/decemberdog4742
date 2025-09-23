import fs from "fs";
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
  noindex?: boolean; // <-- opt-in noindex (defaults to false)
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
      const cfgPath = path.resolve(process.cwd(), "seo.config.json");
      if (!fs.existsSync(cfgPath)) return html;
      const raw = fs.readFileSync(cfgPath, "utf8");
      const seo: SEO = JSON.parse(raw);

      // IMPORTANT: default to index unless explicitly opted out
      const robots = seo.noindex ? "noindex, nofollow" : "index, follow";
      const canonical = seo.siteUrl.replace(/index\.html?$/i, "");

      const tags = [
        `<meta name="robots" content="${robots}" />`,
        `<link rel="canonical" href="${esc(canonical)}" />`,
        `<title>${esc(seo.title)}</title>`,
        `<meta name="description" content="${esc(seo.description)}" />`,
        seo.keywords?.length ? `<meta name="keywords" content="${esc(seo.keywords.join(", "))}" />` : "",
        `<meta property="og:type" content="website" />`,
        `<meta property="og:title" content="${esc(seo.title)}" />`,
        `<meta property="og:description" content="${esc(seo.description)}" />`,
        `<meta property="og:url" content="${esc(canonical)}" />`,
        seo.ogImage ? `<meta property="og:image" content="${esc(new URL(seo.ogImage, canonical).toString())}" />` : "",
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${esc(seo.title)}" />`,
        `<meta name="twitter:description" content="${esc(seo.description)}" />`,
        seo.ogImage ? `<meta name="twitter:image" content="${esc(new URL(seo.ogImage, canonical).toString())}" />` : ""
      ].filter(Boolean).join("");

      const localBusiness = !seo.noindex && seo.address ? `
<script type="application/ld+json">
${JSON.stringify({
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
</script>` : "";

      return html.replace(/<\/head>/i, `${tags}\n${localBusiness}\n</head>`);
    }
  };
}
