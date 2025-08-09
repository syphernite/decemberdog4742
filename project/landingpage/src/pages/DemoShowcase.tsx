// src/pages/DemoShowcase.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  MonitorSmartphone,
  Search,
  Info,
} from "lucide-react";

type Demo = {
  title: string;
  slug: string;
  externalUrl: string;
  badge?: string;
  tagline?: string;
  keywords?: string[];
  features?: string[];
  pricingPlanKey?: string;
};

const DEMOS: Demo[] = [
  {
    title: "Photography",
    slug: "photography",
    externalUrl: "https://built4you.org/photography",
    badge: "Portfolio",
    tagline: "Visual-first galleries with booking.",
    keywords: ["gallery", "portfolio", "booking", "lightbox", "photographer"],
    features: ["responsive", "contact form", "seo", "image grid", "hero slideshow"],
  },
  {
    title: "Barbershop",
    slug: "barbershop",
    externalUrl: "https://built4you.org/barbershop",
    badge: "Services",
    tagline: "Appointments, pricing tables, reviews.",
    keywords: ["barber", "appointments", "pricing", "reviews", "map"],
    features: ["mobile-first", "contact form", "maps", "social links"],
  },
  {
    title: "Detailer",
    slug: "detailer",
    externalUrl: "https://built4you.org/detailer",
    badge: "Auto",
    tagline: "Before/after gallery, service tiers, mobile-first.",
    keywords: ["auto", "detailing", "before/after", "packages", "mobile"],
    features: ["gallery", "contact form", "pricing tiers"],
  },
  {
    title: "Food Truck",
    slug: "foodtruck",
    externalUrl: "https://built4you.org/foodtruck",
    badge: "Food",
    tagline: "Menu, schedule, locations, events.",
    keywords: ["menu", "events", "schedule", "locations", "truck"],
    features: ["map", "contact form", "social links"],
    pricingPlanKey: "basic",
  },

  // Updated to same-origin paths
  {
    title: "Contractor",
    slug: "trades",
    externalUrl: "https://built4you.org/plumbing",
    badge: "Professional",
    tagline: "Trust-building, licensing, quotes, service areas.",
    keywords: ["plumber", "electrician", "contractor", "quote", "service area"],
    features: ["contact form", "badges", "testimonials"],
  },
  {
    title: "Tattoo",
    slug: "tattooshop",
    externalUrl: "https://built4you.org/tattooshop",
    badge: "Portfolio",
    tagline: "Artist profiles, galleries, booking forms.",
    keywords: ["tattoo", "artists", "portfolio", "booking", "instagram"],
    features: ["gallery", "contact form", "profiles"],
  },
  {
    title: "Pest Control",
    slug: "pestcontrol",
    externalUrl: "https://built4you.org/pestcontrol",
    badge: "Home Services",
    tagline: "Instant service requests.",
    keywords: ["pest", "bugs", "seasonal", "services"],
    features: ["service plans", "contact form", "pricing tiers"],
  },
  {
    title: "Ecommerce",
    slug: "ecommerce",
    externalUrl: "https://built4you.org/ecommerce",
    badge: "Online Store",
    tagline: "Products, cart, checkout, promos.",
    keywords: ["store", "cart", "checkout", "stripe", "shopify"],
    features: ["products", "search", "filters", "checkout"],
    pricingPlanKey: "ecom-starter",
  },
  {
    title: "Influencer / Creator",
    slug: "creator",
    externalUrl: "https://built4you.org/creator",
    badge: "Personal Brand",
    tagline: "Link hub, content, email capture, offers.",
    keywords: ["creator", "influencer", "newsletter", "links", "offers"],
    features: ["email capture", "social links", "landing page"],
  },
];

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

const IFramePreview: React.FC<{ url: string }> = ({ url }) => {
  const { ref, inView } = useInView();
  const [loaded, setLoaded] = useState(false);
  const [blocked, setBlocked] = useState(false);

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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-900/15 to-transparent z-10" />
      <div className="pointer-events-none absolute right-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full bg-slate-900/60 text-[11px] text-white/90 px-2 py-1 backdrop-blur">
        <Info className="h-3.5 w-3.5" />
        Live preview
      </div>

      {!inView ? (
        <div className="h-[460px] sm:h-[520px] w-full flex items-center justify-center">
          <div className="h-6 w-6 rounded-full border-2 border-slate-400/60 border-t-transparent animate-spin" />
        </div>
      ) : blocked ? (
        <div className="h-[460px] sm:h-[520px] w-full flex flex-col items-center justify-center text-center p-6">
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
            className="h-[460px] sm:h-[520px] w-full relative z-0"
            onLoad={() => setLoaded(true)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups"
          />
        </>
      )}
    </div>
  );
};

const DemoShowcase: React.FC = () => {
  const [query, setQuery] = useState("");

  const filtered = DEMOS.filter((d) => {
    const haystack = [
      d.title,
      d.badge,
      d.tagline,
      ...(d.keywords || []),
      ...(d.features || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes(query.toLowerCase());
  });

  const contactURLFor = (demo: Demo) => {
    const params = new URLSearchParams();
    params.set("demo", demo.slug);
    if (demo.pricingPlanKey) params.set("plan", demo.pricingPlanKey);
    params.set("source", "demos");
    return `/contact?${params.toString()}`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white">
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Demo Showcase
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Live, scrollable previews.
          </p>

          {/* Search kept in code but hidden so nothing else breaks */}
          <div className="w-full max-w-md hidden">
            <label className="sr-only" htmlFor="demo-search">
              Search demos
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                id="demo-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search industry, title, features (e.g., bookings, Stripe, gallery)..."
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

      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <motion.article
              key={d.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35 }}
              className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur overflow-hidden shadow hover:shadow-xl transition"
            >
              <div className="px-4 pt-4 flex items-center justify-between">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-tight">{d.title}</h3>
                  {d.tagline && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">{d.tagline}</p>
                  )}
                </div>
                {d.badge && (
                  <span className="ml-3 shrink-0 inline-flex items-center rounded-full border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 bg-emerald-500/10 px-2 py-0.5 text-xs">
                    {d.badge}
                  </span>
                )}
              </div>

              <div className="mt-3">
                <IFramePreview url={d.externalUrl} />
              </div>

              <div className="px-4 pb-4 pt-3 flex items-center justify-between flex-wrap gap-3">
                <a
                  href={d.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Open Live Demo <ExternalLink className="h-4 w-4" />
                </a>

                <Link
                  to={contactURLFor(d)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-300 hover:underline"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default DemoShowcase;
