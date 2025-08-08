// src/pages/DemoShowcase.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  MonitorSmartphone,
  Search,
  Info,
} from "lucide-react";

/**
 * DemoShowcase (interactive, scrollable previews)
 * - 9 demos (Photography, Barbershop, Detailer, Food Truck, Blue Collar/Trades, Tattoo, Lawn Care, Ecommerce, Influencer/Creator)
 * - Live, scrollable iframes (no full overlay so users can scroll and interact)
 * - “See details” button routes to internal page; “Open Live Demo” opens external URL in a new tab
 * - Lazy-load iframes when cards are in view; graceful fallback if embedding is blocked
 */

type Demo = {
  title: string;
  slug: string;
  externalUrl: string; // live demo URL (can be placeholder for now)
  internalPath: string; // where your internal page lives (e.g. "/demos/photography")
  badge?: string;
  tagline?: string;
};

const DEMOS: Demo[] = [
  // Completed
  {
    title: "Photography",
    slug: "photography",
    externalUrl: "https://demos.built4you.org/photography", // replace when ready
    internalPath: "/demos/photography",
    badge: "Portfolio",
    tagline: "Visual-first galleries with booking.",
  },
  {
    title: "Barbershop",
    slug: "barbershop",
    externalUrl: "https://demos.built4you.org/barbershop",
    internalPath: "/demos/barbershop",
    badge: "Services",
    tagline: "Appointments, pricing tables, reviews.",
  },

  // Not completed (placeholders for now)
  {
    title: "Detailer",
    slug: "detailer",
    externalUrl: "https://demos.built4you.org/detailer",
    internalPath: "/demos/detailer",
    badge: "Auto",
    tagline: "Before/after gallery, service tiers, mobile-first.",
  },
  {
    title: "Food Truck",
    slug: "food-truck",
    externalUrl: "https://demos.built4you.org/food-truck",
    internalPath: "/demos/food-truck",
    badge: "Hospitality",
    tagline: "Menu, schedule, locations, events.",
  },
  {
    title: "Blue Collar / Trades",
    slug: "trades",
    externalUrl: "https://demos.built4you.org/trades",
    internalPath: "/demos/trades",
    badge: "Professional",
    tagline: "Trust-building, licensing, quotes, service areas.",
  },
  {
    title: "Tattoo",
    slug: "tattoo",
    externalUrl: "https://demos.built4you.org/tattoo",
    internalPath: "/demos/tattoo",
    badge: "Portfolio",
    tagline: "Artist profiles, galleries, booking forms.",
  },
  {
    title: "Lawn Care",
    slug: "lawn-care",
    externalUrl: "https://demos.built4you.org/lawn-care",
    internalPath: "/demos/lawn-care",
    badge: "Home Services",
    tagline: "Seasonal promos, service plans, before/after.",
  },
  {
    title: "Ecommerce",
    slug: "ecommerce",
    externalUrl: "https://demos.built4you.org/ecommerce",
    internalPath: "/demos/ecommerce",
    badge: "Store",
    tagline: "Products, cart, checkout, promos.",
  },
  {
    title: "Influencer / Creator",
    slug: "creator",
    externalUrl: "https://demos.built4you.org/creator",
    internalPath: "/demos/creator",
    badge: "Personal Brand",
    tagline: "Link hub, content, email capture, offers.",
  },
];

/* ------------------------------ Utilities ------------------------------ */

const useInView = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => setInView(entries[0]?.isIntersecting ?? false),
      { root: null, threshold: 0.15, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
};

const IFramePreview: React.FC<{
  url: string;
  interactiveHint?: boolean;
}> = ({ url, interactiveHint = true }) => {
  const { ref, inView } = useInView();
  const [loaded, setLoaded] = useState(false);
  const [blocked, setBlocked] = useState(false);

  // If we don't complete loading in time (CSP / X-Frame-Options), show fallback UI
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => {
      if (!loaded) setBlocked(true);
    }, 4500);
    return () => clearTimeout(t);
  }, [inView, loaded]);

  return (
    <div
      ref={ref}
      className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur"
    >
      {/* Top gradient strip to soften hard edges with bright sites */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-900/15 to-transparent z-10" />

      {/* “Interactive” hint – does not block scrolling/clicks */}
      {interactiveHint && (
        <div className="pointer-events-none absolute right-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full bg-slate-900/60 text-[11px] text-white/90 px-2 py-1 backdrop-blur">
          <Info className="h-3.5 w-3.5" />
          Live preview
        </div>
      )}

      {!inView ? (
        <div className="h-[520px] w-full flex items-center justify-center">
          <div className="h-6 w-6 rounded-full border-2 border-slate-400/60 border-t-transparent animate-spin" />
        </div>
      ) : blocked ? (
        <div className="h-[520px] w-full flex flex-col items-center justify-center text-center p-6">
          <MonitorSmartphone className="h-8 w-8 text-slate-400 mb-2" />
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            Preview unavailable (site blocks embedding). Use “Open Live Demo”.
          </p>
        </div>
      ) : (
        <>
          {!loaded && (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="h-6 w-6 rounded-full border-2 border-slate-400/60 border-t-transparent animate-spin" />
            </div>
          )}
          <iframe
            key={url}
            title="Live preview"
            src={url}
            loading="lazy"
            className="h-[520px] w-full relative z-0"
            onLoad={() => setLoaded(true)}
            // Allow scroll/interaction while keeping it safe
            sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups"
          />
        </>
      )}
    </div>
  );
};

/* --------------------------------- Page --------------------------------- */

const DemoShowcase: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const filtered = DEMOS.filter((d) =>
    [d.title, d.badge, d.tagline].filter(Boolean).join(" ").toLowerCase().includes(query.toLowerCase())
  );

  const go = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Demo Showcase
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Live, scrollable previews. Click a card’s buttons to view details or open the live demo in a new tab.
          </p>

          {/* Search */}
          <div className="w-full max-w-md">
            <label className="sr-only" htmlFor="demo-search">Search demos</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                id="demo-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search industry, title, features..."
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="mt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <motion.article
              key={d.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35 }}
              className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur overflow-hidden shadow hover:shadow-xl transition"
            >
              {/* Card Header */}
              <div className="px-4 pt-4 flex items-center justify-between">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-tight truncate">{d.title}</h3>
                  {d.tagline && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{d.tagline}</p>
                  )}
                </div>
                {d.badge && (
                  <span className="ml-3 shrink-0 inline-flex items-center rounded-full border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 bg-emerald-500/10 px-2 py-0.5 text-xs">
                    {d.badge}
                  </span>
                )}
              </div>

              {/* Live, scrollable Preview */}
              <div className="mt-3">
                <IFramePreview url={d.externalUrl} />
              </div>

              {/* Actions */}
              <div className="px-4 pb-4 pt-3 flex items-center justify-between">
                <button
                  onClick={() => go(d.internalPath)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 hover:underline"
                >
                  See details <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={d.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  title="Open the live demo in a new tab"
                >
                  Open Live Demo <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full text-center text-sm text-gray-600 dark:text-gray-300">
              No demos match your search.
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default DemoShowcase;
