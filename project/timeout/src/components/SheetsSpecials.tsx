// src/components/LiveSpecials.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";

type SheetRow = { title: string; date?: string; time?: string; details?: string };

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRHgAkbYaPZxYRk64At8SGv7bJNHDNqKhrFOiCzEOTtcTSlMlS48ofyVS4ZZiAIlrE2JtKMDAgIVAxH/pub?output=csv";

function parseCsv(csv: string): SheetRow[] {
  const lines = csv.trim().split(/\r?\n/);
  if (!lines.length) return [];
  const headers = lines[0].split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((h) => h.trim().toLowerCase());
  const idx = {
    title: headers.indexOf("title"),
    date: headers.indexOf("date") > -1 ? headers.indexOf("date") : headers.indexOf("day"),
    time: headers.indexOf("time"),
    details: headers.indexOf("details"),
  };
  return lines
    .slice(1)
    .map((line) => {
      const cols = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((c) => c.replace(/^"(.*)"$/, "$1").trim());
      return {
        title: idx.title >= 0 ? cols[idx.title] : "",
        date: idx.date >= 0 ? cols[idx.date] : "",
        time: idx.time >= 0 ? cols[idx.time] : "",
        details: idx.details >= 0 ? cols[idx.details] : "",
      };
    })
    .filter((r) => r.title);
}

function tryDateKey(s?: string): number | null {
  if (!s) return null;
  const m = s.match(/^\s*(\d{1,2})\s*\/\s*(\d{1,2})\s*$/);
  if (!m) return null;
  const y = new Date().getFullYear();
  const d = new Date(y, parseInt(m[1], 10) - 1, parseInt(m[2], 10));
  return isNaN(d.getTime()) ? null : d.getTime();
}

export default function LiveSpecials() {
  const [rows, setRows] = useState<SheetRow[]>([]);
  const [err, setErr] = useState<string | null>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [step, setStep] = useState(340);

  // mobile hint
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch(CSV_URL, { cache: "no-store" })
      .then((r) => r.text())
      .then((t) => {
        if (!mounted) return;
        const parsed = parseCsv(t);
        const withKeys = parsed.map((r, i) => ({ r, i, k: tryDateKey(r.date) }));
        withKeys.sort((a, b) => {
          if (a.k !== null && b.k !== null) return a.k - b.k;
          if (a.k !== null) return -1;
          if (b.k !== null) return 1;
          return a.i - b.i;
        });
        setRows(withKeys.map((x) => x.r));
      })
      .catch((e) => setErr(e?.message || "Failed to load specials"));
    return () => {
      mounted = false;
    };
  }, []);

  const cards = useMemo(() => rows, [rows]);
  const showArrow = cards.length > 3;

  const measure = () => {
    const el = railRef.current;
    if (!el) return;
    const first = el.querySelector("article") as HTMLElement | null;
    const gap = 24; // gap-6
    const w = first ? first.offsetWidth + gap : 340;
    setStep(w);
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const pages = maxScroll > 0 ? Math.ceil(maxScroll / w) : 0;
    setMaxPage(pages);
    setPage((p) => {
      const np = Math.min(p, pages);
      el.scrollTo({ left: np * w, behavior: "auto" });
      return np;
    });
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [cards.length]);

  // init mobile hint only when it makes sense
  useEffect(() => {
    const el = railRef.current;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!el || !isMobile || cards.length <= 1) {
      setShowHint(false);
      return;
    }
    setShowHint(true);

    const onScroll = () => {
      if (el.scrollLeft > 8) setShowHint(false);
    };
    el.addEventListener("scroll", onScroll, { passive: true });

    const to = window.setTimeout(() => setShowHint(false), 6000);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.clearTimeout(to);
    };
  }, [cards.length]);

  const nudgeRight = () => {
    const el = railRef.current;
    if (!el) return;
    const next = page >= maxPage ? 0 : page + 1;
    setPage(next);
    el.scrollTo({ left: next * step, behavior: "smooth" });
    // user engaged, hide hint
    setShowHint(false);
  };

  return (
    <section className="relative py-14">
      {/* Title */}
      <div className="relative mx-auto max-w-3xl">
        <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-30">
          <div className="mx-auto h-24 w-3/4 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(185,28,28,0.25),rgba(17,24,39,0))]" />
        </div>
        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-wide">
          <span className="relative inline-block">
            <span className="absolute -inset-1 rounded-lg bg-red-900/20 blur-sm" />
            <span className="relative bg-gradient-to-b from-red-200 via-red-100 to-gray-200 bg-clip-text text-transparent drop-shadow">
              EVENTS &amp; SPECIALS
            </span>
          </span>
        </h2>
        <div className="mt-3 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-white/15" />
          <span className="text-xs uppercase tracking-[0.25em] text-white/50">Happenings</span>
          <span className="h-px w-12 bg-white/15" />
        </div>
      </div>

      {/* Rail */}
      <div className="mt-10 w-full relative">
        <div
          ref={railRef}
          className="relative mx-auto max-w-7xl overflow-x-auto scrollbar-none"
          style={{ scrollPaddingLeft: 24, scrollPaddingRight: 24 }}
        >
          {/* Right edge fade (mobile only) */}
          {showHint && (
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/70 to-transparent md:hidden" />
          )}

          <div className="mx-auto w-max inline-flex gap-6 px-6 snap-x snap-mandatory">
            {err && <div className="text-white/70 text-sm">{err}</div>}
            {!err && cards.length === 0 && <div className="text-white/60 text-sm">No events yet.</div>}

            {cards.map((s, idx) => (
              <article
                key={`${s.title}-${idx}`}
                className={[
                  "snap-start",
                  "min-w-[85vw] sm:min-w-[320px] md:min-w-[340px] max-w-[420px]",
                  "group relative overflow-hidden rounded-2xl border border-white/10",
                  "bg-neutral-900/45 backdrop-blur-md",
                  "ring-1 ring-red-800/20",
                  "animate-float-slow will-change-transform",
                  "transition-transform duration-300 hover:-translate-y-1",
                ].join(" ")}
              >
                <div className="p-5">
                  <div className="flex items-baseline gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <h3 className="text-lg font-semibold text-red-200">{s.title}</h3>
                  </div>
                  {(s.date || s.time) && (
                    <p className="mt-1 text-[13px] text-white/70 tabular-nums">
                      {[s.date, s.time].filter(Boolean).join(" • ")}
                    </p>
                  )}
                  {s.details && <p className="mt-3 text-[13px] leading-snug text-white/70">{s.details}</p>}
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-5" />
              </article>
            ))}
          </div>

          {/* Mobile swipe hint bubble */}
          {showHint && (
            <button
              type="button"
              onClick={() => setShowHint(false)}
              className="md:hidden absolute right-3 bottom-3 z-10 flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur-md active:scale-[0.98] transition"
            >
              <span className="inline-block animate-pulse-slow">Swipe left for more</span>
              <span className="flex -mr-1">
                <svg viewBox="0 0 24 24" className="h-4 w-4 animate-chev" fill="currentColor"><path d="M8 5l7 7-7 7"/></svg>
                <svg viewBox="0 0 24 24" className="h-4 w-4 -ml-1 animate-chev-delayed" fill="currentColor"><path d="M8 5l7 7-7 7"/></svg>
              </span>
            </button>
          )}
        </div>

        {/* Right arrow button if >3 specials */}
        {cards.length > 3 && (
          <button
            onClick={nudgeRight}
            aria-label="Scroll specials"
            className="absolute right-3 -bottom-4 h-10 w-10 rounded-full bg-black/50 ring-1 ring-white/15 backdrop-blur-md flex items-center justify-center hover:bg-black/60 transition"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-white/80" fill="currentColor">
              <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
            </svg>
          </button>
        )}
      </div>

      <style>{`
        @keyframes float-slow { 0%{transform:translateY(0)} 50%{transform:translateY(-4px)} 100%{transform:translateY(0)} }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }

        .scrollbar-none { scrollbar-width: none; -ms-overflow-style: none; }
        .scrollbar-none::-webkit-scrollbar { display: none; }

        @keyframes chev { 0% { transform: translateX(0); opacity:.9 } 50% { transform: translateX(2px); opacity:.6 } 100% { transform: translateX(0); opacity:.9 } }
        .animate-chev { animation: chev 1.2s ease-in-out infinite; }
        .animate-chev-delayed { animation: chev 1.2s ease-in-out .2s infinite; }

        @keyframes pulse-slow { 0%,100%{ opacity: .85 } 50%{ opacity: 1 } }
        .animate-pulse-slow { animation: pulse-slow 1.6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
