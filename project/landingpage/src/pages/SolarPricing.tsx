import React, { useMemo, useRef, useState, useEffect, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Use a direct image URL here, not an album URL.
// Example: https://i.imgur.com/abcdefg.jpg
const SPACE_BG_URL = "https://imgur.com/a/dxH9FGB"; // REPLACE with direct image file URL

type PlanKind = "core" | "optional" | "one-time" | "custom";

type Plan = {
  key: string;
  name: string;
  price: string;
  cadence: string;
  kind: PlanKind;
  shortBullets: string[];
  features: string[];
  notIncluded?: string[];
  addOns?: string[];
  spotlightColor?: string;
  cta?: { label: string; href: string };
};

const PLANS_IN_ORDER: Plan[] = [
  {
    key: "startup",
    name: "Startup",
    price: "$79",
    cadence: "/month",
    kind: "optional",
    shortBullets: ["Up to 3 Pages", "Hosting + Domain", "1 Edit Batch per Month"],
    features: [
      "Up to 3 Pages",
      "Hosting and 1 Domain",
      "1 Edit Batch per Month",
      "Contact Form",
      "Support within 72 hours",
    ],
    notIncluded: ["Unlimited edits", "Strategy calls", "SEO reports"],
    spotlightColor: "ring-blue-400",
    cta: { label: "Start Startup", href: "/contact" },
  },
  {
    key: "basic",
    name: "Basic",
    price: "$350",
    cadence: "One-Time",
    kind: "core",
    shortBullets: ["1 Page Site", "Responsive", "Contact Form"],
    features: ["1 Page Website", "Mobile Responsive", "Contact Form", "Basic SEO Setup"],
    notIncluded: ["Hosting", "Edits after delivery", "Extra pages"],
    spotlightColor: "ring-emerald-400",
    cta: { label: "Order Basic", href: "/contact" },
  },
  {
    key: "pro",
    name: "Pro",
    price: "$600",
    cadence: "One-Time",
    kind: "core",
    shortBullets: ["Up to 5 Pages", "Gallery", "Maps + Socials"],
    features: [
      "Up to 5 Pages",
      "Photo Gallery",
      "Google Maps and Social Media Links",
      "Custom Domain Setup",
    ],
    notIncluded: ["Hosting", "Ongoing support", "Advanced integrations"],
    addOns: ["Extra Page - $50", "Logo Design - $75", "Rush Delivery 48 hours - +$100"],
    spotlightColor: "ring-cyan-400",
    cta: { label: "Order Pro", href: "/contact" },
  },
  {
    key: "elite",
    name: "Elite Build",
    price: "$1,200",
    cadence: "One-Time",
    kind: "one-time",
    shortBullets: ["Up to 8 Pages", "Advanced Styling", "Post-Launch Support"],
    features: [
      "Up to 8 Pages",
      "Advanced Styling: custom fonts, scroll animations, hover effects, parallax, layered overlays, section transitions, sticky elements, microinteractions, dark mode toggle, animated SVGs or icons, custom cursors, video backgrounds with mobile fallback",
      "Mobile and Tablet Optimization",
      "Photo Gallery and Google Maps",
      "Contact Form with Conditional Logic",
      "Custom Domain Setup",
      "1 Week of Post-Launch Support",
      "SEO Foundations: headers, meta, structure",
    ],
    notIncluded: ["Hosting and domain unless added", "Ongoing edits after 1 week", "Booking or store setups"],
    addOns: ["Hosting Only - $30 per month", "Logo Design - $75", "Rush Delivery 48 hours - +$100", "Extra Page - $50 per page"],
    spotlightColor: "ring-yellow-400",
    cta: { label: "Get Elite Build", href: "/contact" },
  },
  {
    key: "business",
    name: "Business",
    price: "$129",
    cadence: "/month",
    kind: "core",
    shortBullets: ["Unlimited Edits", "Hosting + Domain", "Monthly Reports"],
    features: [
      "Unlimited Edits, Mon to Fri, 24 to 48 hour turnaround",
      "Hosting and 1 Domain",
      "Monthly Reports",
      "Contact Form, Google Maps and Socials, optional Photo Gallery",
      "Basic SEO Maintenance",
      "Priority Email Support",
    ],
    notIncluded: ["Strategy calls", "Advanced integrations"],
    spotlightColor: "ring-violet-400",
    cta: { label: "Start Business", href: "/contact" },
  },
  {
    key: "business-pro",
    name: "Business Pro",
    price: "$199",
    cadence: "/month",
    kind: "core",
    shortBullets: ["Same Day Edits", "Strategy Calls", "Custom Integrations"],
    features: [
      "Everything in Business",
      "Same Day Edits, Mon to Fri, cutoff 2 PM",
      "Biweekly Strategy Calls",
      "Custom Integrations: bookings, menus, payments",
      "Advanced Contact Forms with conditional logic",
      "VIP Support",
    ],
    notIncluded: ["Large ecommerce builds", "Full redesigns without quote"],
    spotlightColor: "ring-fuchsia-400",
    cta: { label: "Start Business Pro", href: "/contact" },
  },
  {
    key: "ecom-starter",
    name: "Ecommerce Starter",
    price: "$299",
    cadence: "/month",
    kind: "optional",
    shortBullets: ["Store Setup", "Up to 10 Products", "Hosting + Domain"],
    features: [
      "Store Setup with Stripe, PayPal, or Shopify Lite",
      "Up to 10 Products Uploaded",
      "Hosting and 1 Domain",
      "1 Edit Batch per Month",
      "Basic Support",
    ],
    notIncluded: ["Subscriptions", "Advanced filtering", "Shipping calculators"],
    spotlightColor: "ring-rose-400",
    cta: { label: "Start Ecommerce", href: "/contact" },
  },
  {
    key: "vip-flex",
    name: "VIP Flex",
    price: "$499",
    cadence: "/month",
    kind: "optional",
    shortBullets: ["Unlimited Same Day Edits", "Weekly Calls", "Quarterly Redesigns"],
    features: [
      "Unlimited Same Day Edits, Mon to Fri",
      "Weekly Strategy Calls",
      "Advanced Performance Tracking",
      "Quarterly Redesigns",
      "Socials, Reviews, Google Business Management",
      "Dedicated Account Manager",
    ],
    notIncluded: ["Large ecommerce without quote", "Complex data migrations without quote"],
    spotlightColor: "ring-amber-400",
    cta: { label: "Start VIP Flex", href: "/contact" },
  },
  {
    key: "custom",
    name: "Custom",
    price: "Quote",
    cadence: "Only",
    kind: "custom",
    shortBullets: ["Fully Custom", "Complex Integrations", "PM Included"],
    features: [
      "Fully Custom Design",
      "Ecommerce, Booking, Membership Setup",
      "Complex Integrations or Dashboards",
      "Multi-Step Forms or Funnels",
      "Custom CMS or Admin Panel",
      "Dedicated Project Manager",
    ],
    spotlightColor: "ring-sky-400",
    cta: { label: "Request Custom Quote", href: "/contact" },
  },
];

const ORDER_KEYS = [
  "startup",
  "basic",
  "pro",
  "elite",
  "business",
  "business-pro",
  "ecom-starter",
  "vip-flex",
  "custom",
];

/* --------------------------- STATIC BG --------------------------- */

const StaticSpaceBG: React.FC = () => (
  <>
    <div
      className="absolute inset-0 -z-10"
      style={{
        backgroundColor: "#060616",
        backgroundImage: `url(${SPACE_BG_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
    <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.65)_100%)]" />
  </>
);

/* ------------------------- LOCAL PAGE-ONLY HEADER ------------------------ */

const LocalHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Our Mission", path: "/why-we-exist" },
    { label: "Our Work", path: "https://built4you.org/#/demos" },
    { label: "Contact", path: "/contact" },
  ];

  const isExternal = (p: string) => p.startsWith("http");

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-slate-900/80 backdrop-blur-xl shadow-2xl border-b border-slate-700/20" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ willChange: "transform" }}
    >
      <style>{`
        @keyframes logoPulse { 0%{opacity:.35;transform:scale(1)} 50%{opacity:.85;transform:scale(1.07)} 100%{opacity:.35;transform:scale(1)} }
        @keyframes logoOrbit { 0%{transform:rotate(0)} 100%{transform:rotate(360deg)} }
      `}</style>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 group">
            <motion.div className="relative flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
              <div className="relative bg-gradient-to-r from-emerald-600 to-blue-600 p-2 rounded-xl shadow-lg shadow-emerald-500/20">
                <Code className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Built4You
                </span>
                <span className="text-xs text-slate-300/80 font-medium tracking-wider">WEB SOLUTIONS</span>
              </div>
            </motion.div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) =>
              isExternal(item.path) ? (
                <a
                  key={item.label}
                  href={item.path}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-emerald-400 bg-emerald-900/20"
                      : "text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="p-2 rounded-lg text-slate-200 hover:bg-slate-800/60 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* mobile nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-slate-900/95 border-t border-slate-700/20 shadow-xl backdrop-blur-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, i) => (
                  <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                    {isExternal(item.path) ? (
                      <a
                        href={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-3 rounded-lg font-medium transition-all duration-200 text-slate-300 hover:text-emerald-400 hover:bg-slate-800"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                          location.pathname === item.path
                            ? "text-emerald-400 bg-emerald-900/20"
                            : "text-slate-300 hover:text-emerald-400 hover:bg-slate-800"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

/* ---------------------------------- PAGE --------------------------------- */

const Pricing: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add("dark");
    try {
      localStorage.setItem("theme", "dark");
    } catch {}
  }, []);

  const orderedPlans = useMemo(
    () => ORDER_KEYS.map((k) => PLANS_IN_ORDER.find((p) => p.key === k)!).filter(Boolean),
    []
  );

  // Initial focus from URL on first paint to avoid flashing "Startup"
  const initialPlan = (() => {
    const raw = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("plan") : null;
    const key = raw?.toLowerCase() || "";
    const idx = ORDER_KEYS.indexOf(key);
    return idx >= 0 ? idx : 0;
  })();

  const [index, setIndex] = useState(initialPlan);
  const [legendOpen, setLegendOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Update focus if query changes after load
  useEffect(() => {
    const q = new URLSearchParams(location.search).get("plan")?.toLowerCase() || "";
    const idx = ORDER_KEYS.indexOf(q);
    if (idx >= 0 && idx !== index) setIndex(idx);
  }, [location.search]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const len = orderedPlans.length;
  const current = orderedPlans[index];

  const next = () => setIndex((i) => (i + 1) % len);
  const prev = () => setIndex((i) => (i - 1 + len) % len);

  // mobile auto-slide
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const inViewRef = useRef<boolean>(true);
  const [inView, setInView] = useState(true);
  const [userInteracting, setUserInteracting] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries[0].isIntersecting;
        inViewRef.current = vis;
        setInView(vis);
      },
      { root: null, threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const shouldRun = inView && !userInteracting && document.visibilityState === "visible";
    if (shouldRun) {
      intervalRef.current = window.setInterval(() => setIndex((i) => (i + 1) % len), 5200) as unknown as number;
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isMobile, inView, userInteracting, len]);

  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState !== "visible" && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const pauseForInteraction = (ms = 6000) => {
    setUserInteracting(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      if (inViewRef.current && document.visibilityState === "visible") setUserInteracting(false);
    }, ms) as unknown as number;
  };

  // scroll hint
  const [showScrollHint, setShowScrollHint] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      const scrolledPast = window.scrollY > 120;
      const doc = document.documentElement;
      const nearBottom =
        window.innerHeight + window.scrollY >= (doc.scrollHeight || document.body.scrollHeight) - 120;
      setShowScrollHint(!(scrolledPast || nearBottom));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reduced-motion
  const [animEnabled, setAnimEnabled] = useState(true);
  useEffect(() => {
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAnimEnabled(!q.matches);
    update();
    q.addEventListener?.("change", update);
    return () => q.removeEventListener?.("change", update);
  }, []);

  /* ---------- EVEN SPACING (MEASURE + TRANSFORM CHAIN) ---------- */
  const orbitRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);
  const samplePlanetRef = useRef<HTMLDivElement | null>(null);

  const [centerRadius, setCenterRadius] = useState(0);
  const [planetRadius, setPlanetRadius] = useState(44); // ≈ 5.5rem / 2
  useLayoutEffect(() => {
    const measure = () => {
      if (centerRef.current) {
        const r = centerRef.current.getBoundingClientRect();
        setCenterRadius(r.width / 2);
      }
      if (samplePlanetRef.current) {
        setPlanetRadius(samplePlanetRef.current.offsetWidth / 2);
      }
    };
    measure();
    const ro1 = new ResizeObserver(measure);
    const ro2 = new ResizeObserver(measure);
    if (centerRef.current) ro1.observe(centerRef.current);
    if (orbitRef.current) ro2.observe(orbitRef.current);
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      ro1.disconnect();
      ro2.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const GAP_BETWEEN = 56; // px
  const total = orderedPlans.length;
  const startAngle = -90; // 12 o'clock

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <LocalHeader />
      <StaticSpaceBG />

      <main className="pt-24">
        {/* top controls */}
        <div className="relative z-10 flex items-center justify-end px-4 sm:px-6 py-2">
          <div className="flex items-center gap-3">
            <button
              className="sm:hidden inline-flex items-center px-3 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition"
              onClick={() => setLegendOpen((v) => !v)}
              aria-expanded={legendOpen}
            >
              {legendOpen ? "Hide Plans" : "Show Plans"}
            </button>

            <div className="hidden sm:flex items-center gap-2">
              {orderedPlans.map((p, i) => (
                <button
                  key={p.key}
                  onClick={() => {
                    pauseForInteraction();
                    setIndex(i);
                  }}
                  className={`px-3 py-1 rounded-lg text-sm border transition ${
                    i === index ? "border-white/60 bg-white/10" : "border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10"
                  }`}
                  title={p.name}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* mobile legend */}
        {legendOpen && (
          <div className="relative z-10 sm:hidden px-4 pb-2">
            <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-2 grid grid-cols-2 gap-2">
              {orderedPlans.map((p, i) => (
                <button
                  key={p.key}
                  onClick={() => {
                    pauseForInteraction();
                    setIndex(i);
                    setLegendOpen(false);
                  }}
                  className={`w-full px-3 py-2 rounded-xl text-left text-sm border transition ${
                    i === index ? "border-white/60 bg-white/10" : "border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* MOBILE CAROUSEL */}
        <div className="relative z-0 sm:hidden px-4 pb-6">
          <div className="w-full" ref={carouselRef} onTouchStart={() => pauseForInteraction()} onTouchEnd={() => {}}>
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-[0_0_30px_rgba(255,255,255,0.08)]">
              <div className="text-xs uppercase tracking-widest text-white/70 mb-2 text-center">In focus</div>
              <h2 className="text-2xl font-bold text-center">{current.name}</h2>
              <div className="mt-1 text-lg font-semibold text-center">
                {current.price} <span className="text-white/70">{current.cadence}</span>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-white/80 list-none">
                {current.shortBullets.map((b, idx) => (
                  <li key={idx} className="flex items-center justify-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/70" />
                    {b}
                  </li>
                ))}
              </ul>
              {current.cta && (
                <a
                  href={current.cta.href}
                  className="mt-4 mx-auto w-full inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition shadow"
                  onClick={() => pauseForInteraction()}
                >
                  {current.cta.label}
                </a>
              )}

              <div className="mt-5 flex items-center justify-center gap-1.5">
                {orderedPlans.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      pauseForInteraction();
                      setIndex(i);
                    }}
                    className={`h-2 w-2 rounded-full transition ${i === index ? "bg-cyan-400" : "bg-white/30 hover:bg-white/60"}`}
                    aria-label={`Go to ${orderedPlans[i].name}`}
                  />
                ))}
              </div>

              <div className="mt-3 text-center text-xs text-white/60">Auto slides. Swipe to change.</div>
            </div>
          </div>
        </div>

        {/* DESKTOP ORBIT (even spacing via transform chain) */}
        <div className="relative z-0 hidden sm:flex items-center justify-center pt-6 pb-8 sm:pb-12">
          <style>{`
            @keyframes orbit-rotate { 0%{transform:rotate(0)}100%{transform:rotate(360deg)} }
            @keyframes orbit-rotate-reverse { 0%{transform:rotate(0)}100%{transform:rotate(-360deg)} }
          `}</style>

          <div
            ref={orbitRef}
            className="relative w-[92vw] max-w-[1120px] aspect-square"
            style={{ willChange: "transform", transform: "translateZ(0)" }}
          >
            {/* Center orb */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                ref={centerRef}
                className={`relative w-[46vw] max-w-[400px] aspect-square rounded-full bg-white/5 backdrop-blur-sm border ${
                  current.spotlightColor || "ring-cyan-400"
                } ring-2 ring-inset border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.2)]`}
              >
                <div className="absolute inset-[10%] rounded-full bg-black/30 blur-xl" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <div className="text-xs uppercase tracking-widest text-white/70 mb-2">In focus</div>
                  <h2 className="text-2xl sm:text-3xl font-bold drop-shadow">{current.name}</h2>
                  <div className="mt-1 text-lg sm:text-xl font-semibold">
                    {current.price} <span className="text-white/70">{current.cadence}</span>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm text-white/80 list-none">
                    {current.shortBullets.map((b, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/70" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Rotating wrapper */}
            <div
              className="absolute inset-0"
              style={{
                animation: animEnabled ? "orbit-rotate 32s linear infinite" : "none",
                willChange: "transform",
                transformOrigin: "50% 50%",
              }}
            >
              {orderedPlans.map((plan, slotIdx) => {
                const angleDeg = startAngle + (360 / total) * slotIdx;
                const radius = centerRadius + GAP_BETWEEN + planetRadius;

                return (
                  <button
                    key={plan.key}
                    onClick={() => setIndex(slotIdx)}
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) rotate(${angleDeg}deg) translateX(${radius}px) rotate(${-angleDeg}deg)`,
                      willChange: "transform",
                    }}
                    title={plan.name}
                    aria-label={plan.name}
                  >
                    <div
                      ref={slotIdx === 0 ? samplePlanetRef : undefined}
                      className={`relative w-[5.5rem] h-[5.5rem] overflow-hidden rounded-full bg-white/10 border border-white/15 backdrop-blur-sm ring-2 ${
                        plan.spotlightColor || "ring-cyan-400"
                      } hover:scale-105 transition-transform shadow-[0_0_24px_rgba(255,255,255,0.14)]`}
                    >
                      <div className="absolute inset-0 rounded-full bg-black/30" />
                      {/* Counter-rotate inner content so it stays upright while the ring orbits */}
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center text-center px-1 leading-tight"
                        style={{
                          animation: animEnabled ? "orbit-rotate-reverse 32s linear infinite" : "none",
                          willChange: "transform",
                        }}
                      >
                        <div className="text-[10px] uppercase tracking-wider text-white/70">Plan</div>
                        <div className="text-[12px] font-semibold break-words text-center px-1">{plan.name}</div>
                        <div className="text-[11px] text-white/80 text-center">
                          {plan.price} <span className="opacity-70">{plan.cadence}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* arrows */}
            <div className="hidden sm:block">
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-xl border border-white/15 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                aria-label="Previous plan"
                title="Previous plan"
              >
                ←
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-xl border border-white/15 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                aria-label="Next plan"
                title="Next plan"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* DETAILS */}
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 pb-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-8 shadow-[0_0_30px_rgba(255,255,255,0.08)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">{current.name} Details</h3>
                <div className="text-white/80">
                  <span className="font-semibold">{current.price}</span> {current.cadence}
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                {index > 0 && (
                  <button onClick={prev} className="px-3 py-2 rounded-lg border border-white/15 bg-white/10 hover:bg-white/20" title="Previous">
                    Previous
                  </button>
                )}
                <button onClick={next} className="px-3 py-2 rounded-lg border border-white/15 bg-white/10 hover:bg-white/20" title="Next">
                  Next
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <div>
                <div className="text-sm uppercase tracking-wider text-white/70 mb-2">Included</div>
                <ul className="space-y-2 list-none">
                  {current.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300 flex-shrink-0" />
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {current.notIncluded && current.notIncluded.length > 0 && (
                  <>
                    <div className="text-sm uppercase tracking-wider text-white/70 mb-2">Not Included</div>
                    <ul className="space-y-2 list-none">
                      {current.notIncluded.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-rose-300 flex-shrink-0" />
                          <span className="leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-sm uppercase tracking-wider text-white/70 mb-2">Universal Add Ons</div>
              <ul className="grid sm:grid-cols-2 gap-2 list-none">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/70" /> Extra Page - $50 per page
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/70" /> Logo Design - $75 one time
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/70" /> Hosting Only - $30 per month
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/70" /> Rush Delivery 48 hours - +$100
                </li>
              </ul>
              <div className="mt-4 text-xs text-white/60">Large ecommerce and complex data migrations require a quote.</div>

              {/* MOBILE-ONLY nav */}
              <div className="mt-6 flex sm:hidden items-center justify-end gap-2">
                <button
                  onClick={() => {
                    pauseForInteraction();
                    prev();
                  }}
                  className="px-3 py-2 rounded-lg border border-white/15 bg-white/10 hover:bg-white/20"
                  title="Previous"
                >
                  Previous
                </button>
                <button
                  onClick={() => {
                    pauseForInteraction();
                    next();
                  }}
                  className="px-3 py-2 rounded-lg border border-white/15 bg-white/10 hover:bg-white/20"
                  title="Next"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* subtle scroll indicator */}
      {showScrollHint && (
        <div className="pointer-events-none fixed bottom-6 left-0 right-0 flex justify-center z-40">
          <div className="px-3 py-2 rounded-full bg-black/30 backdrop-blur text-white/80 text-sm animate-bounce shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            Scroll for more ↓
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
