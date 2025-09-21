import fs from "fs";
import path from "path";

const root = path.resolve(process.cwd(), "project");
const landingPublic = path.resolve(process.cwd(), "project/landingpage/public");
fs.mkdirSync(landingPublic, { recursive: true });

const entries = [];
const folders = fs.readdirSync(root).filter(f =>
  fs.existsSync(path.join(root, f, "seo.config.json"))
);

for (const f of folders) {
  try {
    const cfg = JSON.parse(fs.readFileSync(path.join(root, f, "seo.config.json"), "utf8"));
    const loc = cfg.siteUrl.endsWith("/") ? cfg.siteUrl : cfg.siteUrl + "/";
    const priority = cfg.status === "client" ? "0.9" : "0.5";
    const changefreq = cfg.status === "client" ? "weekly" : "monthly";
    entries.push({ loc, priority, changefreq });
  } catch {}
}

const roots = [
  { loc: "https://built4you.org/", priority: "1.0", changefreq: "weekly" },
  { loc: "https://built4you.org/pricing", priority: "0.9", changefreq: "weekly" },
  { loc: "https://built4you.org/why-we-exist", priority: "0.7", changefreq: "monthly" }
];

const urls = roots.concat(entries).map(e =>
  "  <url><loc>" + e.loc + "</loc><changefreq>" + e.changefreq + "</changefreq><priority>" + e.priority + "</priority></url>"
).join("\n");

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls + "\n</urlset>\n";

fs.writeFileSync(path.join(landingPublic, "sitemap.xml"), xml, "utf8");
fs.writeFileSync(
  path.join(landingPublic, "robots.txt"),
  "User-agent: *\nAllow: /\n\nSitemap: https://built4you.org/sitemap.xml\n",
  "utf8"
);

console.log("Wrote " + entries.length + " subpaths to sitemap.xml");