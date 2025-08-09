import { promises as fs } from 'fs';
import path from 'path';

const ROOT = process.cwd();
const PROJECTS = path.join(ROOT, 'project');

const exists = async p => !!(await fs.stat(p).catch(() => null));
const read = p => fs.readFile(p, 'utf-8');

const routeRegexes = [
  /<Route[^>]*\spath=["']([^"']+)["'][^>]*>/g,                        // <Route path="x" ...>
  /path\s*:\s*["']([^"']+)["']/g,                                     // path: 'x'
  /createBrowserRouter\(\s*\[\s*\{\s*path:\s*["']([^"']+)["']/g,      // createBrowserRouter([{ path: 'x'
  /createHashRouter\(\s*\[\s*\{\s*path:\s*["']([^"']+)["']/g          // createHashRouter([{ path: 'x'
];

const bad = new Set(['', '/', '*']);
const pickFirstRoute = (code) => {
  for (const rx of routeRegexes) {
    rx.lastIndex = 0;
    const m = rx.exec(code);
    if (m && m[1] && !bad.has(m[1])) return m[1].replace(/^\//,''); // drop leading slash
  }
  return ''; // no specific route → use '/'
};

const run = async () => {
  const slugs = await fs.readdir(PROJECTS).catch(() => []);
  for (const slug of slugs) {
    if (slug === 'landingpage') continue;
    const dir = path.join(PROJECTS, slug);
    const stat = await fs.stat(dir).catch(() => null);
    if (!stat || !stat.isDirectory()) continue;

    // read all src files we care about
    const candidates = [
      'src/App.tsx','src/App.jsx','src/App.ts','src/App.js',
      'src/main.tsx','src/main.jsx','src/main.ts','src/main.js',
      'src/routes.tsx','src/routes.jsx','src/routes.ts','src/routes.js'
    ].map(f => path.join(dir, f));

    let combined = '';
    for (const p of candidates) {
      if (await exists(p)) combined += await read(p) + '\n';
    }

    const def = pickFirstRoute(combined);
    const idx = path.join(dir, 'index.html');
    if (await exists(idx)) {
      let html = await read(idx);
      html = html.replace(/__DEFAULT_HASH__/g, def);
      await fs.writeFile(idx, html, 'utf-8');
      console.log(`✔ ${slug} default route: ${def || '(root)'}`);
    }
  }
};

run().catch(err => { console.error(err); process.exit(0); });
