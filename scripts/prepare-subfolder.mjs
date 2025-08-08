// Auto-prepare GH Pages subfolders for this repo.
// For each folder in project/* (except landingpage), it will:
// 1) Ensure vite.config.(ts|js) has base: '/<slug>/'
// 2) Ensure index.html uses relative paths for favicon + main script
// 3) Ensure HashRouter wraps <App /> in src/main.(tsx|jsx|ts|js)
// 4) Remove BrowserRouter wrapper in src/App.(tsx|jsx|ts|js)
// If a required file (index.html or vite.config) is missing, it will create a minimal one.
//
// It does NOT change your UI/content — only subfolder/deploy plumbing.

import { promises as fs } from "fs";
import path from "path";

const ROOT = process.cwd();
const PROJECTS_DIR = path.join(ROOT, "project");
const enc = "utf-8";

const exists = async (p) => !!(await fs.stat(p).catch(() => null));

const listDirs = async (dir) => {
  const names = await fs.readdir(dir);
  const out = [];
  for (const name of names) {
    const full = path.join(dir, name);
    const stat = await fs.stat(full);
    if (stat.isDirectory()) out.push({ slug: name, dir: full });
  }
  return out;
};

const detectFile = async (dir, candidates) => {
  for (const rel of candidates) {
    const p = path.join(dir, rel);
    if (await exists(p)) return p;
  }
  return null;
};

async function ensureIndexHtml(dir) {
  const indexPath = path.join(dir, "index.html");
  if (await exists(indexPath)) return indexPath;

  const minimal = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${path.basename(dir)}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./src/main.tsx"></script>
  </body>
</html>
`;
  await fs.writeFile(indexPath, minimal, enc);
  console.log(`✔ created index.html in ${path.relative(ROOT, dir)}`);
  return indexPath;
}

async function ensureViteConfig(dir, slug) {
  const tsPath = path.join(dir, "vite.config.ts");
  const jsPath = path.join(dir, "vite.config.js");

  let file = (await exists(tsPath)) ? tsPath : (await exists(jsPath)) ? jsPath : null;

  if (!file) {
    // create vite.config.ts
    const tpl = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/${slug}/',
  optimizeDeps: { exclude: ['lucide-react'] },
});
`;
    await fs.writeFile(tsPath, tpl, enc);
    console.log(`✔ created vite.config.ts for ${slug}`);
    return tsPath;
  }

  let src = await fs.readFile(file, enc);
  const baseLine = `base: '/${slug}/'`;

  if (/base\s*:\s*['"`]\/[^'"`]+\/['"`]/.test(src)) {
    src = src.replace(/base\s*:\s*['"`]\/[^'"`]+\/['"`]/, baseLine);
  } else if (/defineConfig\s*\(\s*\{/.test(src)) {
    src = src.replace(/defineConfig\s*\(\s*\{/, (m) => `${m}\n  ${baseLine},`);
  } else {
    // fallback: append
    src += `\n\n// Injected by prepare-subfolder\nexport const __base='/${slug}/'\n`;
  }

  await fs.writeFile(file, src, enc);
  console.log(`✔ set base '/${slug}/' in ${path.relative(ROOT, file)}`);
  return file;
}

async function fixIndexHtmlPaths(indexPath) {
  let src = await fs.readFile(indexPath, enc);
  const before = src;

  // favicon → relative
  src = src.replace(/href=["']\/vite\.svg["']/g, 'href="./vite.svg"');

  // script main → relative (any /src/main.*)
  src = src.replace(
    /(<script[^>]+src=["'])\/src\/main\.(t|j)sx?(["'][^>]*><\/script>)/g,
    "$1./src/main.$2x$3"
  );

  if (src !== before) {
    await fs.writeFile(indexPath, src, enc);
    console.log(`✔ fixed relative paths in ${path.relative(ROOT, indexPath)}`);
  }
}

async function ensureHashRouterInMain(dir) {
  const mainPath =
    (await detectFile(dir, ["src/main.tsx"])) ||
    (await detectFile(dir, ["src/main.jsx"])) ||
    (await detectFile(dir, ["src/main.ts"])) ||
    (await detectFile(dir, ["src/main.js"]));

  if (!mainPath) return null;

  let src = await fs.readFile(mainPath, enc);
  const before = src;

  const hasImportLine = /from ['"]react-router-dom['"]/.test(src);
  const hasHash = /HashRouter/.test(src);
  if (!hasImportLine) {
    src = `import { HashRouter } from 'react-router-dom';\n` + src;
  } else if (!hasHash) {
    // add HashRouter to existing named import
    src = src.replace(
      /import\s+\{([^}]+)\}\s+from\s+['"]react-router-dom['"];/,
      (m, g1) => {
        const names = g1.split(",").map((s) => s.trim()).filter(Boolean);
        if (!names.includes("HashRouter")) names.push("HashRouter");
        return `import { ${names.join(", ")} } from 'react-router-dom';`;
      }
    );
  }

  // Wrap <App /> if not wrapped
  if (!/<HashRouter>[\s\S]*<\/HashRouter>/.test(src)) {
    // handle <App /> or <App/>
    src = src.replace(/<App\s*\/>/, "<HashRouter><App /></HashRouter>");
    src = src.replace(/<App\/>/, "<HashRouter><App /></HashRouter>");
  }

  if (src !== before) {
    await fs.writeFile(mainPath, src, enc);
    console.log(`✔ enforced HashRouter in ${path.relative(ROOT, mainPath)}`);
  }
  return mainPath;
}

async function removeBrowserRouterInApp(dir) {
  const appPath =
    (await detectFile(dir, ["src/App.tsx"])) ||
    (await detectFile(dir, ["src/App.jsx"])) ||
    (await detectFile(dir, ["src/App.ts"])) ||
    (await detectFile(dir, ["src/App.js"]));

  if (!appPath) return null;

  let src = await fs.readFile(appPath, enc);
  const before = src;

  // Strip <BrowserRouter> tags
  src = src.replace(/<BrowserRouter[^>]*>/g, "");
  src = src.replace(/<\/BrowserRouter>/g, "");

  // Remove BrowserRouter from import list (but keep others)
  src = src.replace(
    /import\s+\{([^}]+)\}\s+from\s+['"]react-router-dom['"];/g,
    (m, g1) => {
      const names = g1
        .split(",")
        .map((s) => s.trim())
        .filter((n) => n && n !== "BrowserRouter");
      return names.length
        ? `import { ${names.join(", ")} } from 'react-router-dom';`
        : ""; // remove import if it had only BrowserRouter
    }
  );

  if (src !== before) {
    await fs.writeFile(appPath, src, enc);
    console.log(`✔ removed BrowserRouter in ${path.relative(ROOT, appPath)}`);
  }
  return appPath;
}

(async () => {
  if (!(await exists(PROJECTS_DIR))) {
    console.log("No project directory found.");
    return;
  }

  const dirs = await listDirs(PROJECTS_DIR);
  for (const { slug, dir } of dirs) {
    if (slug === "landingpage") continue;

    const looksLikeVite = await exists(path.join(dir, "package.json"));
    if (!looksLikeVite) continue;

    // Ensure baseline files exist/are fixed
    const indexPath = await ensureIndexHtml(dir);
    await ensureViteConfig(dir, slug);
    await fixIndexHtmlPaths(indexPath);
    await ensureHashRouterInMain(dir);
    await removeBrowserRouterInApp(dir);
  }

  console.log("Done preparing subfolders.");
})();
