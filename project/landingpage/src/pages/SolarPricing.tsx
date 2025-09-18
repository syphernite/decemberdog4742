// src/pages/SolarPricing.tsx
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

type BillingMode = "monthly" | "onetime";

type Plan = {
  slug: string;
  name: string;
  price: string;
  cadence: string;
  blurb?: string;
  features: string[];
  highlight?: boolean;
  bestFor?: string;
};

const monthlyPlans: Plan[] = [
  { slug: "low-orbit", name: "Low Orbit", price: "$49", cadence: "/month", blurb: "Starter presence", bestFor: "Best for small mobile businesses", features: ["1 page", "Contact form", "Basic SEO"] },
  { slug: "deep-space", name: "Deep Space", price: "$79", cadence: "/month", blurb: "Up to 3 pages", bestFor: "Best for standard businesses", features: ["Up to 3 pages", "Hosting + domain", "1 edit batch / month"] },
  { slug: "interstellar", name: "Interstellar", price: "$129", cadence: "/month", blurb: "Most popular", bestFor: "Best for daily updating", highlight: true, features: ["Unlimited edits", "Hosting + domain", "Monthly report"] },
  { slug: "space-pirate", name: "Space Pirate", price: "$299", cadence: "/month", bestFor: "Best for ecommerce", features: ["Same day edits", "Strategy calls", "Custom integrations"] },
  { slug: "supernova", name: "Supernova", price: "$499", cadence: "/month", bestFor: "Best for big projects", features: ["Unlimited same day edits", "Weekly calls", "Quarterly redesigns"] },
];

const onetimePlans: Plan[] = [
  { slug: "space-traveler", name: "Space Traveler", price: "$350", cadence: "One time", blurb: "Then $30/month hosting if needed", bestFor: "Best for small one-page builds", features: ["1 page site", "Responsive", "Contact form"] },
  { slug: "orbital-nomad", name: "Orbital Nomad", price: "$600", cadence: "One time", blurb: "Then $30/month hosting if needed", bestFor: "Best for multi-page small business sites", highlight: true, features: ["Up to 5 pages", "Gallery + Maps", "Custom domain setup"] },
  { slug: "cosmic-titan", name: "Cosmic Titan", price: "$1200", cadence: "One time", blurb: "Then $30/month hosting if needed", bestFor: "Best for larger custom designs", features: ["Up to 8 pages", "Advanced styling", "1 week post-launch support"] },
];

const pageWrap = "relative min-h-screen text-white bg-transparent";
const cardBase = "group relative flex flex-col rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]";
const cardRing = "absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/20 transition";

const fadeSwap = {
  initial: { opacity: 0, y: 12, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -12, filter: "blur(4px)" },
  transition: { duration: 0.28, ease: "easeInOut" },
};

const emojiFor = (slug: string) => {
  switch (slug) {
    case "low-orbit": return "🚀";
    case "deep-space": return "🪐";
    case "interstellar": return "✨";
    case "space-pirate": return "🏴‍☠️";
    case "supernova": return "🕳️";
    case "space-traveler": return "👨‍🚀";
    case "orbital-nomad": return "🛰️";
    case "cosmic-titan": return "🌌";
    default: return "💫";
  }
};

const SolarPricing: React.FC = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<BillingMode>("monthly");

  useEffect(() => {
    document.documentElement.classList.add("dark");
    try { localStorage.setItem("theme", "dark"); } catch {}
  }, []);

  const plans = useMemo(() => (mode === "monthly" ? monthlyPlans : onetimePlans), [mode]);
  const gridCols =
    mode === "monthly"
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  const goContact = (p: Plan | { slug: string }) => {
    const qs = new URLSearchParams({ plan: p.slug, billing: mode });
    navigate(`/contact?${qs.toString()}`);
  };

  return (
    <div className={pageWrap}>
      <div className="h-20 sm:h-24" />
      <main className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 pb-24">
        <header className="text-center mb-8">
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">Our Pricing Plans</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Pricing and Plans</h1>
          <p className="mt-2 text-white/70">Transparent background. Glass cards. Space icons.</p>
        </header>

        <div className="mx-auto mb-12 flex w-full max-w-md items-center justify-center">
          <div className="relative grid w-full grid-cols-2 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md p-1">
            <button
              onClick={() => setMode("monthly")}
              className={`z-10 rounded-lg px-4 py-2 text-sm font-semibold transition ${mode === "monthly" ? "text-black" : "text-white/85 hover:text-white"}`}>
              Pay Monthly
            </button>
            <button
              onClick={() => setMode("onetime")}
              className={`z-10 rounded-lg px-4 py-2 text-sm font-semibold transition ${mode === "onetime" ? "text-black" : "text-white/85 hover:text-white"}`}>
              One Time
            </button>
            <motion.div layout className="absolute top-1 bottom-1 left-1 right-1 rounded-lg bg-gradient-to-r from-emerald-400 to-blue-500"
              style={{ width: "calc(50% - 4px)" }}
              animate={{ x: mode === "monthly" ? 0 : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.section key={mode} {...fadeSwap} className={`grid ${gridCols} gap-6`}>
            {plans.map((p) => (
              <motion.article key={p.slug} {...fadeSwap} className={`${cardBase} min-h-[540px]`} whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}>
                <div className={cardRing} />
                <div className="absolute -top-6 left-6">
                  <div className="h-12 w-12 rounded-full border border-white/25 bg-white/10 backdrop-blur-md grid place-items-center shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
                    <span className="text-2xl">{emojiFor(p.slug)}</span>
                  </div>
                </div>

                {/* No special badge now — highlight handled only by styling */}
                {p.highlight && (
                  <div className="absolute -top-6 right-6">
                    <span className="rounded-full bg-emerald-500/90 text-black px-3 py-1 text-[11px] font-semibold tracking-wide shadow-md">
                      Best choice
                    </span>
                  </div>
                )}

                <div className="mt-6 text-[11px] uppercase tracking-[0.18em] text-white/70">Plan</div>
                <h3 className="text-2xl font-bold">{p.name}</h3>
                {p.bestFor && <p className="mt-1 text-sm text-emerald-300">{p.bestFor}</p>}

                <div className="mt-4 flex items-baseline gap-2">
                  <div className="text-4xl font-extrabold">{p.price}</div>
                  <div className="text-white/70">{p.cadence}</div>
                </div>
                {p.blurb && <p className="mt-1 text-sm text-white/75">{p.blurb}</p>}

                <ul className="mt-6 space-y-3 text-[15px] text-white/95">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-blue-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <button onClick={() => goContact(p)} className="relative w-full rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 px-5 py-3 font-semibold text-black transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
                    Choose Plan
                    <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10" />
                  </button>
                  {mode === "onetime" && <p className="mt-3 text-xs text-white/65">Hosting available at $30 per month after launch.</p>}
                  {mode === "monthly" && <p className="mt-3 text-xs text-emerald-300">Month to month. Cancel anytime.</p>}
                </div>
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(59,130,246,.22),transparent_60%)]" />
              </motion.article>
            ))}
          </motion.section>
        </AnimatePresence>

        {/* Lost CTA with perfectly centered satellite */}
        <div className="relative mt-16 flex justify-center">
          <div className="relative flex items-center justify-center h-40 w-40">
            <motion.div aria-hidden className="absolute h-full w-full rounded-full border border-white/10" />
            <motion.div aria-hidden className="absolute" style={{ transformOrigin: "50% 50%" }}
              animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 14, ease: "linear" }}>
              <div className="translate-x-[80px]">
                <span className="text-2xl drop-shadow">🛰️</span>
              </div>
            </motion.div>
            <button
              onClick={() => goContact({ slug: "custom" })}
              className="absolute z-10 rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-md hover:bg-white/15 hover:border-white/25 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Lost? Get a custom quote
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-white/60">Large ecommerce or complex data work is quoted separately.</p>
      </main>
    </div>
  );
};

export default SolarPricing;
