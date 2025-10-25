import { useState, useEffect } from 'react';
import { Sun, Cloud, Sparkles, LucideProps, Loader2 } from 'lucide-react';

/** Uses your published CSV, but allows override via VITE_FLAVOR_CSV. Adds cache-busting. */
function csvUrl() {
  const base =
    import.meta.env.VITE_FLAVOR_CSV ||
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTiILY_qFThxRTELPdgfnBv19mrnuq8H05fWZVtqr_BTTbR4Ej5OYZti0AjVebUyojhjhA8jeX9rnfI/pub?gid=0&single=true&output=csv';
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}_=${Date.now()}`;
}

const iconMap: Record<string, React.FC<LucideProps>> = { sun: Sun, cloud: Cloud, sparkles: Sparkles };

interface Forecast {
  weather: string;
  icon: React.FC<LucideProps>;
  special: string;
}

/** Robust CSV parser */
function parseCsv(text: string): string[][] {
  const out: string[][] = [];
  let row: string[] = [];
  let cur = '';
  let i = 0;
  let inQuotes = false;
  const s = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  while (i < s.length) {
    const ch = s[i];
    if (inQuotes) {
      if (ch === '"') {
        if (s[i + 1] === '"') {
          cur += '"';
          i += 2;
        } else {
          inQuotes = false;
          i += 1;
        }
      } else {
        cur += ch;
        i += 1;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
        i += 1;
      } else if (ch === ',') {
        row.push(cur);
        cur = '';
        i += 1;
      } else if (ch === '\n') {
        row.push(cur);
        out.push(row);
        row = [];
        cur = '';
        i += 1;
      } else {
        cur += ch;
        i += 1;
      }
    }
  }
  row.push(cur);
  out.push(row);
  return out.filter(r => r.some(c => String(c).trim() !== ''));
}

const clean = (v: unknown) =>
  String(v ?? '')
    .replace(/^"+|"+$/g, '')
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .trim();

const normKey = (k: string) => clean(k).toLowerCase();
const normFlag = (v: unknown) => {
  const s = clean(v).toLowerCase().replace(/[^a-z0-9]/g, '');
  return s === 'y' || s === 'yes' || s === 'true' || s === '1';
};

export default function FlavorForecast() {
  const [current, setCurrent] = useState<Forecast | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(csvUrl(), { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();

        const table = parseCsv(text);
        if (!table.length) {
          if (!cancelled) setCurrent(null);
          return;
        }

        const headers = table[0].map(normKey);
        const rows = table.slice(1);
        const objects = rows
          .map(r => {
            const o: Record<string, string> = {};
            for (let i = 0; i < headers.length; i++) o[headers[i]] = clean(r[i] ?? '');
            return o;
          })
          .filter(o => Object.values(o).some(v => v !== ''));

        const idx = {
          active: headers.indexOf('active'),
          weather: headers.indexOf('weather'),
          icon: headers.indexOf('icon'),
          special: headers.indexOf('special'),
        };

        const activeKey = idx.active !== -1 ? 'active' : headers[3] ?? 'active';
        const weatherKey = idx.weather !== -1 ? 'weather' : headers[0] ?? 'weather';
        const iconKey = idx.icon !== -1 ? 'icon' : headers[1] ?? 'icon';
        const specialKey = idx.special !== -1 ? 'special' : headers[2] ?? 'special';

        const actives = objects.filter(o => normFlag(o[activeKey]));
        if (!actives.length) {
          if (!cancelled) setCurrent(null);
          return;
        }
        const pick = actives[0];
        const Icon = iconMap[normKey(pick[iconKey] || '')] || Sun;

        const next: Forecast = {
          weather: pick[weatherKey] || '',
          icon: Icon,
          special: pick[specialKey] || '',
        };
        if (!cancelled) setCurrent(next);
      } catch (e) {
        if (!cancelled) {
          setError('Could not load the flavor forecast.');
          console.error('FlavorForecast error:', e);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="specials"
      className="scroll-mt-24 py-16 bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-300 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display drop-shadow-lg">
          Today's Flavor Forecast
        </h2>

        <div
          className={`bg-white/90 backdrop-blur rounded-3xl p-8 md:p-12 shadow-2xl transform transition-all duration-300 min-h-[300px] flex flex-col justify-center ${
            isActive ? 'scale-105 shadow-cyan-400/50' : 'hover:scale-105'
          }`}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          {loading && (
            <div className="flex flex-col items-center justify-center gap-4">
              <Loader2 className="w-16 h-16 animate-spin" />
              <p className="text-xl text-cyan-700">Forecasting the flavor...</p>
            </div>
          )}

          {error && <p className="text-xl text-red-500">{error}</p>}

          {!loading && !error && current && (
            <>
              <div className="flex items-center justify-center gap-6 mb-6">
                <current.icon className="w-16 h-16 text-yellow-500 animate-pulse" />
                <p className="text-3xl md:text-4xl font-bold text-cyan-800">{current.weather}</p>
              </div>

              <div className="border-t-2 border-cyan-200 pt-6 mt-6">
                <p className="text-xl text-cyan-600 mb-3 font-semibold">Special of the Day:</p>
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                  {current.special}
                </p>
              </div>
            </>
          )}

          {!loading && !error && !current && (
            <div className="flex flex-col items-center justify-center gap-2">
              <Cloud className="w-12 h-12" />
              <p className="text-lg text-cyan-800">
                No active forecast found. Mark at least one row’s <strong>active</strong> column as
                <strong> y</strong>.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 inline-block bg-white/60 backdrop-blur rounded-2xl px-6 py-3 shadow-lg">
          <p className="text-cyan-800 font-medium italic">Catch the flavor wave before it melts!</p>
        </div>
      </div>
    </section>
  );
}
