import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Star, MapPin, Instagram, Clock, Award, Users, Anchor } from "lucide-react";

type SpecialRow = {
  name: string;
  image?: string;
  desc?: string;
  price?: string;
  badge?: string;
  active?: string;
};

const SPECIALS_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTBS6smx5NCdPCPH7iCW2lKIWZ_w-0YaFXeUj3B4pNdYDopkRHGhxm613iu_vvU6Qfgf5Bzy-owT6BS/pub?output=csv";

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [specials, setSpecials] = useState<SpecialRow[]>([]);
  const [specialsErr, setSpecialsErr] = useState<string | null>(null);

  // Use Vite base for assets in public/ to support subpath deploys
  const base = (import.meta as any).env.BASE_URL || "/";

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target as HTMLElement).classList.add("fade-in-up")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    let alive = true;
    fetch(SPECIALS_CSV, { cache: "no-store" })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then((text) => {
        if (!alive) return;
        setSpecials(parseCSV(text));
      })
      .catch((e) => alive && setSpecialsErr(String(e)));
    return () => {
      alive = false;
    };
  }, []);

  const activeSpecials = useMemo(
    () =>
      specials.filter((r) => {
        const v = (r.active || "").toString().trim().toLowerCase();
        return v === "true" || v === "1" || v === "yes" || v === "y";
      }),
    [specials]
  );

  const handleOrderClick = () =>
    window.open(
      "https://www.doordash.com/store/beach-bumz-morehead-city-31247691/44617761/?utm_source=mx_share",
      "_blank"
    );

  const handleScrollToSpecials = () => {
    const specialsEl = document.getElementById("specials");
    if (specialsEl) specialsEl.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const instagramPosts = [
    { id: 1, image: "https://images.pexels.com/photos/33406006/pexels-photo-33406006.png?auto=compress&cs=tinysrgb&w=400", caption: "Fresh pizza perfection! 🍕" },
    { id: 2, image: "https://images.pexels.com/photos/33406008/pexels-photo-33406008.png?auto=compress&cs=tinysrgb&w=400", caption: "Wings that hit different 🔥" },
    { id: 3, image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400", caption: "Beachside vibes daily ✨" },
    { id: 4, image: "https://images.pexels.com/photos/5490915/pexels-photo-5490915.jpeg?auto=compress&cs=tinysrgb&w=400", caption: "Cold drinks, hot food 🍻" },
  ];

  return (
    <div className="min-h-screen">
      {/* sky layer */}
      <div className="sky-bird">🕊️</div>
      <div className="sky-bird delay-1">🕊️</div>

      {/* ===== Hero Section ===== */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pt-safe min-h-[88vh] md:min-h-screen flex items-center justify-center pb-14 md:pb-24 lg:pb-28"
      >
        {/* BACKDROP */}
        <div className="absolute inset-0 scene">
          <div aria-hidden className="pointer-events-none absolute right-6 sm:right-12 top-10 sm:top-12">
            <Anchor className="h-12 w-12 sm:h-16 sm:w-16 text-white/80 drop-shadow-[0_6px_12px_rgba(0,0,0,.35)] anchor-bob" strokeWidth={1.75} />
          </div>

          <div className="clouds">
            <div className="cloud c1" /><div className="cloud c2" /><div className="cloud c3" />
            <div className="cyclone" />
          </div>

          <div className="caustics" />
          <div className="water-ripple" />
          <div className="surface-waves">
            <div className="crest a" /><div className="crest b" /><div className="crest c" />
          </div>

          <div className="floating-bubbles">
            {Array.from({ length: 18 }).map((_, i) => (<div key={i} className="bubble" />))}
          </div>

          <div className="dunes back" /><div className="dunes mid" /><div className="dunes front" />

          <div className="underwater">
            <div className="reef">
              <div className="kelp k1" /><div className="kelp k2" /><div className="kelp k3" />
              <div className="starfish" /><div className="shell" />
            </div>
            <div className="shoal s1">
              {Array.from({ length: 8 }).map((_, i) => (<span key={i} className="fish f" />))}
            </div>
            <div className="shoal s2">
              {Array.from({ length: 10 }).map((_, i) => (<span key={i} className="fish f small" />))}
            </div>
            <div className="jelly j1" /><div className="jelly j2" />
            <div className="manta" />
          </div>

          <div className="shoreline">
            <div className="foam f1" /><div className="foam f2" /><div className="foam f3" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pb-32 md:pb-40 lg:pb-44">
          <h1 className="font-display leading-tight text-white mb-4 neon-glow zoom-in text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
            BEACH BUMZ
          </h1>
          <p className="font-display text-turquoise mb-3 slide-in-left text-xl sm:text-2xl md:text-3xl" style={{ animationDelay: "0.2s" }}>
            PUB & PIZZERIA
          </p>
          <p className="text-sandy-beige mb-8 font-light slide-in-right text-base sm:text-lg md:text-2xl" style={{ animationDelay: "0.4s" }}>
            Where Comfort Meets the Coast
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center mb-2 fade-in-up" style={{ animationDelay: "0.6s" }}>
            {/* Specials first */}
            <button onClick={handleScrollToSpecials} className="btn-primary w-full sm:w-auto">
              View Today’s Specials
            </button>

            {/* Clover Order Pickup */}
            <a
              href="https://www.clover.com/online-ordering/beach-bumz-morehead-city"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-ocean-blue hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 w-full sm:w-auto"
            >
              <span>Order Pickup</span>
            </a>

            {/* DoorDash Delivery logo from public/images/doordash.png with base path */}
            <button
              onClick={handleOrderClick}
              className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <img
                src={`${base}images/doordash.png`}
                alt="DoorDash"
                className="h-6"
                loading="lazy"
                width={96}
                height={24}
              />
              <span className="sr-only">Order Delivery</span>
            </button>

            {/* Menu last */}
            <Link to="/menu" className="btn-primary w-full sm:w-auto">
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Sand bridge */}
      <div className="relative z-0 -mt-2 sm:-mt-3 md:-mt-4 lg:-mt-6">
        <div className="h-10 sm:h-12 md:h-14 bg-sandy-beige" />
        <div className="-mt-6 sm:-mt-8 md:-mt-10">
          <div className="wave-divider">
            <div className="wave wave-back"></div>
            <div className="wave wave-mid"></div>
            <div className="wave wave-front"></div>
          </div>
        </div>
      </div>

      {/* ===== Today's Specials ===== */}
      <section id="specials" className="py-20 bg-ocean-blue/80">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 animate-on-scroll zoom-in">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-3">Today’s Specials</h2>
            <p className="text-sandy-beige text-lg">Updated daily</p>
          </div>

          {specialsErr && (
            <div className="rounded-lg border border-red-400/40 bg-red-500/10 p-4 text-sm text-white/90 mb-8">
              Failed to load specials: {specialsErr}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-on-scroll fade-in-up">
            {activeSpecials.map((s, i) => (
              <article key={`${s.name}-${i}`} className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover-lift beach-card">
                <div className="w-full aspect-[16/9] bg-white/10 flex items-center justify-center">
                  {s.image ? (
                    <img
                      src={toDirectImageURL(s.image)}
                      alt={s.name}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain"
                      style={{ display: "block" }}
                    />
                  ) : (
                    <div className="grid place-items-center w-full h-full text-white/60">No image</div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold">{s.name}</h3>
                    {s.price && <span className="text-white/90">{s.price}</span>}
                  </div>
                  {s.desc && <p className="mt-2 text-sm text-white/80 leading-relaxed">{s.desc}</p>}
                  {s.badge && (
                    <div className="mt-3 inline-flex px-2 py-1 rounded-md text-xs bg-sunset-orange text-black font-semibold">
                      {s.badge}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {!specialsErr && activeSpecials.length === 0 && (
            <div className="text-center text-white/75 mt-6">No active specials today.</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;

/* ---------- utils ---------- */
function parseCSV(input: string): SpecialRow[] {
  const clean = input.replace(/^\uFEFF/, "");
  const lines = clean.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
  if (!lines.length) return [];
  const header = splitCSVLine(lines[0]).map((h) => h.replace(/^\uFEFF/, "").trim().toLowerCase());
  const rows: SpecialRow[] = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    const cols = splitCSVLine(line);
    const obj: Record<string, string> = {};
    header.forEach((h, idx) => (obj[h] = (cols[idx] ?? "").trim()));
    rows.push(obj as SpecialRow);
  }
  return rows;
}

function splitCSVLine(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (ch === "," && !inQuotes) {
      out.push(cur);
      cur = "";
      continue;
    }
    cur += ch;
  }
  out.push(cur);
  return out;
}

function toDirectImageURL(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("drive.google.com")) {
      const idMatch = u.pathname.match(/\/d\/([^/]+)/)?.[1] || u.searchParams.get("id");
      if (idMatch) return `https://drive.google.com/uc?export=view&id=${idMatch}`;
    }
    return url;
  } catch {
    return url;
  }
}
