import { useState, useEffect } from 'react';
import { Sun, Cloud, Sparkles, LucideProps, Loader2 } from 'lucide-react';

/** =========
 * CSV helpers
 * ========= */
function csvUrl() {
  const base =
    import.meta.env.VITE_FLAVOR_CSV ||
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTiILY_qFThxRTELPdgfnBv19mrnuq8H05fWZVtqr_BTTbR4Ej5OYZti0AjVebUyojhjhA8jeX9rnfI/pub?gid=0&single=true&output=csv';
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}_=${Date.now()}`;
}

function featuredCsvUrl() {
  const base = import.meta.env.VITE_FEATURED_CSV || '';
  if (!base) return '';
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}_=${Date.now()}`;
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

const iconMap: Record<string, React.FC<LucideProps>> = {
  sun: Sun,
  cloud: Cloud,
  sparkles: Sparkles,
};

/** Normalize Google Drive share links to direct-view URLs. Pass-through for normal URLs. */
function normalizeImageUrl(value: string): string {
  const v = clean(value);
  if (!v) return '';
  if (v.startsWith('http')) {
    const m = v.match(/\/file\/d\/([^/]+)\//) || v.match(/[?&]id=([^&]+)/);
    if (m && m[1]) return `https://drive.google.com/uc?export=view&id=${m[1]}`;
    return v;
  }
  return v; // already a filename or relative URL
}

/** =========
 * Featured Desserts
 * ========= */
// Local assets (restore routing via relative imports)
import imgLoadedCrepe from '../assets/images/loaded_crepe.png';
import imgMapleBananaWaffle from '../assets/images/maple_banana_waffle.png';
import imgMixedBerryKiwiCrepe from '../assets/images/mixedberry_kiwi_crepe.png';
import imgSprinklesCone from '../assets/images/sprinkles_marshmallow_cone.png';

type FeaturedItem = {
  title: string;
  caption?: string;
  img: string;
  tag?: string;
  price?: string;
};

const STATIC_FEATURED: FeaturedItem[] = [
  { title: 'Loaded Crepe', caption: 'Fruit, drizzle, whipped cream', img: imgLoadedCrepe, tag: 'Rich' },
  { title: 'Maple Banana Waffle', caption: 'Caramelized banana + maple', img: imgMapleBananaWaffle, tag: 'Warm' },
  { title: 'Mixed Berry Kiwi Crepe', caption: 'Bright kiwi with berries', img: imgMixedBerryKiwiCrepe, tag: 'Fresh' },
  { title: 'Sprinkles Marshmallow Cone', caption: 'Soft mallows + crunch', img: imgSprinklesCone, tag: 'Fun' },
];

function FeaturedDesserts() {
  const [items, setItems] = useState<FeaturedItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const url = featuredCsvUrl();
    if (!url) {
      setItems(STATIC_FEATURED);
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();
        const rows = parseCsv(text);
        if (!rows.length) throw new Error('Empty CSV');

        const headers = rows[0].map(normKey);
        const idx = {
          name: headers.indexOf('name'),
          image: headers.indexOf('image'),
          desc: headers.indexOf('desc'),
          price: headers.indexOf('price'),
          badge: headers.indexOf('badge'),
          active: headers.indexOf('active'),
        };

        const nameKey = idx.name !== -1 ? 'name' : headers[0] ?? 'name';
        const imageKey = idx.image !== -1 ? 'image' : headers[1] ?? 'image';
        const descKey = idx.desc !== -1 ? 'desc' : headers[2] ?? 'desc';
        const priceKey = idx.price !== -1 ? 'price' : headers[3] ?? 'price';
        const badgeKey = idx.badge !== -1 ? 'badge' : headers[4] ?? 'badge';
        const activeKey = idx.active !== -1 ? 'active' : headers[5] ?? 'active';

        const data = rows.slice(1).map(r => {
          const obj: Record<string, string> = {};
          for (let i = 0; i < headers.length; i++) obj[headers[i]] = clean(r[i] ?? '');
          return obj;
        });

        const actives = data.filter(o => !activeKey || normFlag(o[activeKey]));
        const mapped: FeaturedItem[] = actives.map(o => ({
          title: o[nameKey] || '',
          caption: o[descKey] || '',
          img: normalizeImageUrl(o[imageKey] || ''),
          tag: o[badgeKey] || '',
          price: o[priceKey] || '',
        }));

        if (!cancelled) {
          setItems(mapped.slice(0, 4).length ? mapped.slice(0, 4) : STATIC_FEATURED);
        }
      } catch (e) {
        console.error('Featured CSV error:', e);
        if (!cancelled) {
          setErr('Could not load featured desserts.');
          setItems(STATIC_FEATURED);
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
    <section className="py-16 bg-gradient-to-r from-sky-200 via-cyan-200 to-blue-200 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-8 left-10 w-28 h-28 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-8 right-10 w-36 h-36 bg-pink-200 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h3 className="text-3xl md:text-5xl font-bold text-white text-center mb-10 font-display drop-shadow-lg">
          Featured Desserts
        </h3>

        {loading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="w-10 h-10 animate-spin text-cyan-800" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(items ?? STATIC_FEATURED).slice(0, 4).map((it, i) => (
              <article
                key={i}
                className="group bg-white/90 backdrop-blur rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-cyan-400/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {it.tag ? (
                    <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-cyan-600/90 text-white text-xs font-semibold px-3 py-1 shadow">
                      {it.tag}
                    </span>
                  ) : null}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
                </div>

                <div className="p-5">
                  <h4 className="text-xl font-bold text-cyan-900">{it.title}</h4>
                  {it.caption ? <p className="mt-1 text-cyan-700 text-sm">{it.caption}</p> : null}
                  {it.price ? <p className="mt-2 text-cyan-900 font-semibold">{it.price}</p> : null}
                </div>
              </article>
            ))}
          </div>
        )}

        {err ? <div className="mt-6 text-center text-sm text-cyan-900/80">{err}</div> : null}

        <div className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center rounded-2xl bg-white/70 backdrop-blur px-6 py-3 text-cyan-900 font-semibold shadow-lg transition hover:shadow-cyan-400/40 hover:-translate-y-0.5"
          >
            Ask about today’s desserts
          </a>
        </div>
      </div>
    </section>
  );
}

/** =========
 * Rotating Forecast (slideshow of all active rows)
 * ========= */
type Special = {
  name: string;
  desc: string;
  price: string;
  badge: string;
  img: string;
  Icon: React.FC<LucideProps>;
};

export default function FlavorForecast() {
  const [specials, setSpecials] = useState<Special[]>([]);
  const [idx, setIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);

  // fetch and build list of active specials
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(csvUrl(), { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();
        const rows = parseCsv(text);
        if (!rows.length) {
          if (!cancelled) setSpecials([]);
          return;
        }

        const headers = rows[0].map(normKey);
        const data = rows.slice(1).map(r => {
          const o: Record<string, string> = {};
          for (let i = 0; i < headers.length; i++) o[headers[i]] = clean(r[i] ?? '');
          return o;
        });

        // Accept either: name/desc/price/badge/image/active or weather/special/icon/active
        const activeKey = headers.includes('active') ? 'active' : 'active';
        const nameKey = headers.includes('name') ? 'name' : headers.includes('weather') ? 'weather' : 'name';
        const descKey = headers.includes('desc') ? 'desc' : headers.includes('special') ? 'special' : 'desc';
        const priceKey = headers.includes('price') ? 'price' : 'price';
        const badgeKey = headers.includes('badge') ? 'badge' : 'badge';
        const imageKey = headers.includes('image') ? 'image' : 'image';
        const iconKey = headers.includes('icon') ? 'icon' : 'icon';

        const actives = data.filter(o => !activeKey || normFlag(o[activeKey]));
        const mapped: Special[] = actives.map(o => {
          const Icon = iconMap[normKey(o[iconKey] || '')] || Sparkles;
          return {
            name: o[nameKey] || '',
            desc: o[descKey] || '',
            price: o[priceKey] || '',
            badge: o[badgeKey] || '',
            img: normalizeImageUrl(o[imageKey] || ''),
            Icon,
          };
        });

        if (!cancelled) {
          setSpecials(mapped);
          setIdx(0);
        }
      } catch (e) {
        if (!cancelled) {
          setError('Could not load today’s specials.');
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

  // auto-rotate every 5 seconds
  useEffect(() => {
    if (specials.length <= 1) return;
    const t = setInterval(() => setIdx(i => (i + 1) % specials.length), 5000);
    return () => clearInterval(t);
  }, [specials.length]);

  const current = specials[idx];

  return (
    <>
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
            Today&apos;s Flavor Forecast
          </h2>

        <div
          className={`bg-white/90 backdrop-blur rounded-3xl p-8 md:p-12 shadow-2xl transform transition-all duration-300 min-h-[320px] flex flex-col justify-center ${
            isActive ? 'scale-105 shadow-cyan-400/50' : 'hover:scale-105'
          }`}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          {loading && (
            <div className="flex flex-col items-center justify-center gap-4">
              <Loader2 className="w-16 h-16 animate-spin" />
              <p className="text-xl text-cyan-700">Forecasting the flavor…</p>
            </div>
          )}

          {error && <p className="text-xl text-red-500">{error}</p>}

          {!loading && !error && current && (
            <>
              <div className="flex flex-col items-center justify-center gap-4 mb-6">
                <current.Icon className="w-16 h-16 text-yellow-500 animate-pulse" />
                <p className="text-3xl md:text-4xl font-bold text-cyan-800">{current.name}</p>
                {current.img ? (
                  <img
                    src={current.img}
                    alt={current.name}
                    className="w-40 h-40 rounded-2xl object-cover shadow-lg border-2 border-cyan-100"
                  />
                ) : null}
                {current.badge ? (
                  <span className="inline-flex items-center rounded-full bg-cyan-600/90 text-white text-xs font-semibold px-3 py-1 shadow">
                    {current.badge}
                  </span>
                ) : null}
              </div>

              <div className="border-t-2 border-cyan-200 pt-6 mt-2">
                <p className="text-xl text-cyan-600 mb-3 font-semibold">Special of the Day:</p>
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                  {current.desc || current.price}
                </p>
              </div>

              {/* dots */}
              {specials.length > 1 ? (
                <div className="mt-6 flex justify-center gap-2">
                  {specials.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Show slide ${i + 1}`}
                      onClick={() => setIdx(i)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        i === idx ? 'bg-cyan-600' : 'bg-cyan-300 hover:bg-cyan-400'
                      }`}
                    />
                  ))}
                </div>
              ) : null}
            </>
          )}

          {!loading && !error && specials.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-2">
              <Cloud className="w-12 h-12" />
              <p className="text-lg text-cyan-800">No specials today, come back later!</p>
            </div>
          )}
        </div>

        <div className="mt-8 inline-block bg-white/60 backdrop-blur rounded-2xl px-6 py-3 shadow-lg">
          <p className="text-cyan-800 font-medium italic">Catch the flavor wave before it melts!</p>
        </div>
      </div>
    </section>

    {/* Featured Desserts below */}
    <FeaturedDesserts />
  </>
  );
}
