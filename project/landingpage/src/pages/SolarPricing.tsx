import React, { useMemo, useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * /pricing — Solar orbit layout with neon galaxy background
 * - Local header (logo glow) only on this page
 * - Dark mode forced; no light toggle
 * - Mobile auto-slide w/ pause on interaction or when out of view
 * - Tighter orbit, readable larger planets, outer orbit ring removed
 */

/* ----------------------------- TYPES & DATA ----------------------------- */

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
  addOns?: string[]; // kept in data, but we won't render plan-specific add-ons in Details anymore
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

/* ------------------------------- UTILITIES ------------------------------ */

function useSwipe(onLeft: () => void, onRight: () => void) {
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  function onTouchStart(e: React.TouchEvent) {
    startX.current = e.changedTouches[0].clientX;
    startY.current = e.changedTouches[0].clientY;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (startX.current == null || startY.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    const dy = e.changedTouches[0].clientY - startY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) (dx < 0 ? onLeft : onRight)();
    startX.current = null;
    startY.current = null;
  }
  return { onTouchStart, onTouchEnd };
}

/* ------------------------- LOCAL PAGE-ONLY HEADER ------------------------ */

const LocalHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Our Mission", path: "/why-we-exist" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-slate-900/80 backdrop-blur-xl shadow-2xl border-b border-slate-700/20" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* logo glow */}
      <style>{`
        @keyframes logoPulse { 0%{opacity:.35;transform:scale(1)} 50%{opacity:.85;transform:scale(1.07)} 100%{opacity:.35;transform:scale(1)} }
        @keyframes logoOrbit { 0%{transform:rotate(0)} 100%{transform:rotate(360deg)} }
      `}</style>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 group">
            <motion.div className="relative flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
              <div
                className="absolute -inset-4 rounded-2xl opacity-60 blur-2xl pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(16,185,129,.45), rgba(59,130,246,.45), rgba(168,85,247,.45), rgba(16,185,129,.45))",
                  animation: "logoOrbit 10s linear infinite",
                }}
              />
              <div
                className="absolute -inset-2 rounded-2xl bg-emerald-400/15 blur-xl pointer-events-none"
                style={{ animation: "logoPulse 4.5s ease-in-out infinite" }}
              />
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-emerald-600 to-blue-600 p-2 rounded-xl shadow-lg shadow-emerald-500/25">
                  <Code className="h-8 w-8 text-white" />
                </div>
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
            {navItems.map((item) => (
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
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
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

/* --------------------------- BACKGROUND (CRAZY) -------------------------- */

const Starfield: React.FC = () => (
  <>
    <style>{`
      :root { --mx: 0px; --my: 0px; }
      @keyframes twinkleA { 0%{opacity:1;transform:translateY(0)}50%{opacity:.55;transform:translateY(-.8px)}100%{opacity:1;transform:translateY(0)} }
      @keyframes twinkleB { 0%{opacity:.9;transform:translateY(0)}50%{opacity:.4;transform:translateY(.8px)}100%{opacity:.9;transform:translateY(0)} }
      @keyframes auroraShift { 0%{background-position:0% 50%,100% 50%;opacity:.6}50%{background-position:100% 50%,0% 50%;opacity:.95}100%{background-position:0% 50%,100% 50%;opacity:.6} }
      @keyframes pulseNebula { 0%{opacity:.25;transform:scale(1)}50%{opacity:.7;transform:scale(1.06)}100%{opacity:.25;transform:scale(1)} }
      @keyframes shimmerNoise { 0% { opacity:.2; } 50% { opacity:.45; } 100% { opacity:.2; } }
      @keyframes shoot {
        0%   { transform: translate3d(-10vw,-10vh,0) rotate(45deg); opacity: 0; }
        5%   { opacity: 1; }
        70%  { opacity: .9; }
        100% { transform: translate3d(120vw,120vh,0) rotate(45deg); opacity: 0; }
      }
      @keyframes orbit-rotate { 0%{transform:rotate(0)}100%{transform:rotate(360deg)} }
      @keyframes orbit-rotate-reverse { 0%{transform:rotate(0)}100%{transform:rotate(-360deg)} }
      @media (prefers-reduced-motion: reduce) {
        .anim { animation: none !important; }
        .parallax { transform: none !important; }
      }
    `}</style>

    <div className="absolute inset-0 bg-[#02020a]" />

    {/* stars */}
    <div
      className="absolute inset-0 anim parallax"
      style={{
        animation: "twinkleA 7s ease-in-out infinite",
        backgroundImage: `
          radial-gradient(2.2px 2.2px at 10% 20%, rgba(255,255,255,0.95), transparent 60%),
          radial-gradient(1.8px 1.8px at 25% 75%, rgba(255,255,255,0.8), transparent 60%),
          radial-gradient(1.6px 1.6px at 80% 15%, rgba(255,255,255,0.85), transparent 60%),
          radial-gradient(2.4px 2.4px at 65% 60%, rgba(255,255,255,0.95), transparent 60%),
          radial-gradient(1.4px 1.4px at 45% 45%, rgba(255,255,255,0.7), transparent 60%),
          radial-gradient(1.2px 1.2px at 92% 42%, rgba(255,255,255,0.7), transparent 60%)`,
        backgroundRepeat: "no-repeat",
        filter: "drop-shadow(0 0 3px rgba(255,255,255,0.7))",
        transform: "translate3d(calc(var(--mx) * 0.08), calc(var(--my) * 0.08), 0)",
      }}
    />
    <div
      className="absolute inset-0 anim parallax"
      style={{
        animation: "twinkleB 9s ease-in-out infinite",
        backgroundImage: `
          radial-gradient(3px 3px at 15% 35%, rgba(255,255,255,0.95), transparent 60%),
          radial-gradient(2.6px 2.6px at 70% 25%, rgba(255,255,255,0.9), transparent 60%),
          radial-gradient(2.4px 2.4px at 30% 85%, rgba(255,255,255,0.9), transparent 60%),
          radial-gradient(2px 2px at 88% 65%, rgba(255,255,255,0.85), transparent 60%)`,
        backgroundRepeat: "no-repeat",
        transform: "translate3d(calc(var(--mx) * 0.15), calc(var(--my) * 0.15), 0)",
      }}
    />

    {/* shimmer + aurora + nebula */}
    <div
      className="absolute inset-0 anim pointer-events-none"
      style={{
        animation: "shimmerNoise 6s ease-in-out infinite",
        backgroundImage:
          "repeating-conic-gradient(from 0deg, rgba(255,255,255,0.03) 0deg 10deg, transparent 10deg 20deg)",
        mixBlendMode: "screen",
      }}
    />
    <div
      className="absolute inset-0 anim parallax"
      style={{
        background:
          "radial-gradient(1200px 600px at 8% 18%, rgba(0,255,220,0.30), transparent 60%), radial-gradient(1000px 520px at 85% 28%, rgba(170,100,255,0.34), transparent 60%), radial-gradient(1000px 520px at 40% 85%, rgba(0,160,255,0.30), transparent 60%)",
        mixBlendMode: "screen",
        animation: "auroraShift 30s ease-in-out infinite",
        transform: "translate3d(calc(var(--mx) * 0.04), calc(var(--my) * 0.04), 0)",
      }}
    />
    <div
      className="absolute inset-0 anim parallax"
      style={{
        background:
          "radial-gradient(700px 700px at 70% 18%, rgba(255,0,200,0.25), transparent 72%), radial-gradient(800px 800px at 18% 80%, rgba(0,120,255,0.25), transparent 72%)",
        mixBlendMode: "screen",
        filter: "blur(2px)",
        animation: "pulseNebula 12s ease-in-out infinite",
        transform: "translate3d(calc(var(--mx) * 0.02), calc(var(--my) * 0.02), 0)",
      }}
    />

    {/* shooting stars */}
    {Array.from({ length: 7 }).map((_, i) => (
      <div
        key={i}
        className="absolute pointer-events-none anim"
        style={{
          top: `${-12 - i * 5}vh`,
          left: `${-14 - (i % 3) * 12}vw`,
          width: "22vmin",
          height: "2px",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 30%, rgba(0,255,255,0.8) 70%, rgba(255,0,255,0) 100%)",
          boxShadow: "0 0 12px rgba(255,255,255,0.8)",
          transform: "rotate(45deg)",
          animation: `shoot ${12 + i * 2}s linear ${i * 2.3}s infinite`,
          opacity: 0,
        }}
      />
    ))}

    {/* color spots + vignette */}
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_55%_10%,rgba(56,189,248,0.35),transparent_62%),radial-gradient(circle_at_82%_24%,rgba(168,85,247,0.35),transparent_62%),radial-gradient(circle_at_20%_78%,rgba(34,197,94,0.26),transparent_62%)]" />
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.62)_100%)]" />
  </>
);

/* ---------------------------------- PAGE --------------------------------- */

const Pricing: React.FC = () => {
  // force dark
  useEffect(() => {
    document.documentElement.classList.add("dark");
    try { localStorage.setItem("theme", "dark"); } catch {}
  }, []);

  const orderedPlans = useMemo(
    () => ORDER_KEYS.map((k) => PLANS_IN_ORDER.find((p) => p.key === k)!).filter(Boolean),
    []
  );

  const [index, setIndex] = useState(0);
  const [legendOpen, setLegendOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // mouse parallax control
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const mx = Math.max(-30, Math.min(30, ((e.clientX - cx) / cx) * 30));
      const my = Math.max(-30, Math.min(30, ((e.clientY - cy) / cy) * 30));
      document.documentElement.style.setProperty("--mx", `${mx}px`);
      document.documentElement.style.setProperty("--my", `${my}px`);
    };
    if (!isMobile) window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [isMobile]);

  const len = orderedPlans.length;
  const current = orderedPlans[index];

  const next = () => setIndex((i) => (i + 1) % len);
  const prev = () => setIndex((i) => (i - 1 + len) % len);

  // mobile auto-slide with pause logic
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
    const shouldRun = inView && !userInteracting;
    if (shouldRun) {
      intervalRef.current = window.setInterval(() => setIndex((i) => (i + 1) % len), 5000) as unknown as number;
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isMobile, inView, userInteracting, len]);

  const pauseForInteraction = (ms = 6000) => {
    setUserInteracting(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      if (inViewRef.current) setUserInteracting(false);
    }, ms) as unknown as number;
  };

  const swipe = useSwipe(
    () => { pauseForInteraction(); next(); },
    () => { pauseForInteraction(); prev(); }
  );

  const planets = orderedPlans.map((p, i) => ({ plan: p, i })).filter(({ i }) => i !== index);
  const angleForSlot = (slotIndex: number, totalSlots: number) => (360 / totalSlots) * slotIndex;

  // scroll hint (shows until user scrolls a bit or reaches bottom)
  const [showScrollHint, setShowScrollHint] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      const scrolledPast = window.scrollY > 120;
      const nearBottom =
        window.innerHeight + window.scrollY >= (document.documentElement.scrollHeight || document.body.scrollHeight) - 120;
      setShowScrollHint(!(scrolledPast || nearBottom));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <LocalHeader />

      {/* background */}
      <div className="absolute inset-0 -z-10">
        <Starfield />
      </div>

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
                  onClick={() => { pauseForInteraction(); setIndex(i); }}
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
                  onClick={() => { pauseForInteraction(); setIndex(i); setLegendOpen(false); }}
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
          <div
            className="w-full"
            ref={carouselRef}
            onTouchStart={(e) => { pauseForInteraction(); swipe.onTouchStart(e); }}
            onTouchEnd={(e) => swipe.onTouchEnd(e)}
          >
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-[0_0_40px_rgba(255,255,255,0.10)]">
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
                    onClick={() => { pauseForInteraction(); setIndex(i); }}
                    className={`h-2 w-2 rounded-full transition ${i === index ? "bg-cyan-400" : "bg-white/30 hover:bg-white/60"}`}
                    aria-label={`Go to ${orderedPlans[i].name}`}
                  />
                ))}
              </div>

              <div className="mt-3 text-center text-xs text-white/60">Auto slides. Swipe to change.</div>
            </div>
          </div>
        </div>

        {/* DESKTOP ORBIT */}
        <div className="relative z-0 hidden sm:flex items-center justify-center pt-6 pb-8 sm:pb-12">
          <div className="relative w-[92vw] max-w-[1120px] aspect-square">
            {/* Center orb */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`relative w-[46vw] max-w-[400px] aspect-square rounded-full bg-white/5 backdrop-blur-sm border ${
                  current.spotlightColor || "ring-cyan-400"
                } ring-2 ring-inset border-white/10 shadow-[0_0_60px_rgba(0,255,255,0.28)]`}
              >
                <div className="absolute inset-[10%] rounded-full bg-black/30 blur-2xl" />
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

            {/* Plan planets — tighter orbit, larger, spin + readable labels */}
            <div className="absolute inset-0" style={{ animation: "orbit-rotate 30s linear infinite" }}>
              {planets.map(({ plan, i: planIndex }, slot) => {
                const totalSlots = planets.length;
                const angle = angleForSlot(slot, totalSlots);
                const radius = "34%"; // tight orbit
                return (
                  <button
                    key={plan.key}
                    onClick={() => setIndex(planIndex)}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `calc(50% + ${radius} * cos(${angle}deg))`,
                      top: `calc(50% + ${radius} * sin(${angle}deg))`,
                    }}
                    title={plan.name}
                    aria-label={plan.name}
                  >
                    <div
                      className={`relative w-[5.5rem] h-[5.5rem] overflow-hidden rounded-full bg-white/10 border border-white/15 backdrop-blur-sm ring-2 ${
                        plan.spotlightColor || "ring-cyan-400"
                      } hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.18)]`}
                      style={{ animation: "orbit-rotate 14s linear infinite" }} // planet spins
                    >
                      <div className="absolute inset-0 rounded-full bg-black/30" />
                      {/* counter-rotate text so it stays upright */}
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center text-center px-1 leading-tight"
                        style={{ animation: "orbit-rotate-reverse 14s linear infinite" }}
                      >
                        <div className="text-[10px] uppercase tracking-wider text-white/70">Plan</div>
                        <div className="text-[12px] font-semibold break-words text-center px-1">
                          {plan.name}
                        </div>
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
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-8 shadow-[0_0_40px_rgba(255,255,255,0.10)]">
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

                {/* Removed plan-specific Add Ons to avoid duplicates.
                    Universal add-ons appear in the section below. */}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-sm uppercase tracking-wider text-white/70 mb-2">Universal Add Ons</div>
              <ul className="grid sm:grid-cols-2 gap-2 list-none">
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-white/70" /> Extra Page - $50 per page</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-white/70" /> Logo Design - $75 one time</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-white/70" /> Hosting Only for Custom builds - $30 per month</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-white/70" /> Rush Delivery 48 hours - +$100</li>
              </ul>
              <div className="mt-4 text-xs text-white/60">Large ecommerce and complex data migrations require a quote.</div>

              {/* MOBILE-ONLY: keep top selection in sync when tapping Next/Previous down here */}
              <div className="mt-6 flex sm:hidden items-center justify-end gap-2">
                <button
                  onClick={() => { pauseForInteraction(); prev(); }}
                  className="px-3 py-2 rounded-lg border border-white/15 bg-white/10 hover:bg-white/20"
                  title="Previous"
                >
                  Previous
                </button>
                <button
                  onClick={() => { pauseForInteraction(); next(); }}
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
