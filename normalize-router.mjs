import { promises as fs } from 'fs';
import path from 'path';

const ROOT = process.cwd();
const PROJECTS = path.join(ROOT, 'project');

const exists = async p => !!(await fs.stat(p).catch(() => null));
const read = p => fs.readFile(p, 'utf-8');
const write = (p, s) => fs.writeFile(p, s, 'utf-8');

const findFirst = async (dir, names) => {
  for (const n of names) {
    const p = path.join(dir, n);
    if (await exists(p)) return p;
  }
  return null;
};

const ensureHashImport = (src) => {
  return src.replace(
    /import\s*\{([^}]*)\}\s*from\s*['"]react-router-dom['"];/,
    (_, list) => {
      const names = list.split(',').map(s => s.trim()).filter(Boolean);
      if (!names.includes('HashRouter')) names.push('HashRouter');
      return `import { ${names.join(', ')} } from 'react-router-dom';`;
    }
  );
};

const addHashImportIfMissing = (src) => {
  if (!/from ['"]react-router-dom['"]/.test(src)) return src;
  if (!/HashRouter/.test(src)) return ensureHashImport(src);
  return src;
};

const wrapAppWithHashRouter = (src) => {
  if (/<HashRouter>[\s\S]*<\/HashRouter>/.test(src)) return src;
  if (!/from ['"]react-router-dom['"]/.test(src)) return src;
  return src
    .replace(/<App\s*\/>/, '<HashRouter><App /></HashRouter>')
    .replace(/<App\/>/, '<HashRouter><App /></HashRouter>');
};

const stripBrowserRouter = (src) => {
  if (!/from ['"]react-router-dom['"]/.test(src)) return src;
  let out = src.replace(/<BrowserRouter[^>]*>/g, '')
               .replace(/<\/BrowserRouter>/g, '');
  out = out.replace(
    /import\s*\{([^}]*)\}\s*from\s*['"]react-router-dom['"];/g,
    (_, list) => {
      const names = list.split(',').map(s => s.trim()).filter(n => n && n !== 'BrowserRouter');
      return names.length
        ? `import { ${names.join(', ')} } from 'react-router-dom';`
        : '';
    }
  );
  return out;
};

const run = async () => {
  const items = await fs.readdir(PROJECTS).catch(() => []);
  for (const slug of items) {
    if (slug === 'landingpage') continue;
    const dir = path.join(PROJECTS, slug);
    const stat = await fs.stat(dir).catch(() => null);
    if (!stat || !stat.isDirectory()) continue;

    const mainPath = await findFirst(dir, ['src/main.tsx','src/main.jsx','src/main.ts','src/main.js']);
    const appPath  = await findFirst(dir, ['src/App.tsx','src/App.jsx','src/App.ts','src/App.js']);

    let usesRouter = false;
    if (mainPath && /react-router-dom/.test(await read(mainPath))) usesRouter = true;
    if (!usesRouter && appPath && /react-router-dom/.test(await read(appPath))) usesRouter = true;
    if (!usesRouter) continue;

    if (mainPath) {
      let src = await read(mainPath);
      const before = src;
      src = addHashImportIfMissing(src);
      src = wrapAppWithHashRouter(src);
      if (src !== before) {
        await write(mainPath, src);
        console.log(`✔ updated ${path.relative(ROOT, mainPath)}`);
      }
    }

    if (appPath) {
      let src = await read(appPath);
      const out = stripBrowserRouter(src);
      if (out !== src) {
        await write(appPath, out);
        console.log(`✔ updated ${path.relative(ROOT, appPath)}`);
      }
    }
  }
};

run().catch(err => { console.error(err); process.exit(0); });
