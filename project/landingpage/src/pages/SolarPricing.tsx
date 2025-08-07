import React, { useMemo, useRef, useState } from "react";

/**
 * Route: /pricing
 * Stack: React + Tailwind
 * Single-file drop in. No new files created.
 *
 * Behaviors:
 * - Dark mode default with glowing, twinkling star background
 * - Orbit UI with center spotlight, rotating planets, desktop arrows, mobile swipe
 * - Legend/menu fixed top right with collapsible mobile behavior
 * - Full features panel below the orbit
 * - No em dashes used
 */

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
    cta: { label: "Start Startup", href: "#contact" },
  },
  {
    key: "basic",
    name: "Basic",
    price: "$350",
    cadence: "One-Time",
    kind: "core",
    shortBullets: ["1 Page Site", "Responsive", "Contact Form"],
    features: [
      "1 Page Website",
      "Mobile Responsive",
      "Contact Form",
      "Basic SEO Setup",
    ],
    notIncluded: ["Hosting", "Edits after delivery", "Extra pages"],
    spotlightColor: "ring-emerald-400",
    cta: { label: "Order Basic", href: "#contact" },
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
    addOns: [
      "Extra Page - $50",
      "Logo Design - $75",
      "Rush Delivery 48 hours - +$100",
    ],
    spotlightColor: "ring-cyan-400",
    cta: { label: "Order Pro", href: "#contact" },
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
    notIncluded: [
      "Hosting and domain unless added",
      "Ongoing edits after 1 week",
      "Booking or store setups",
    ],
    addOns: [
      "Hosting Only for Custom builds - $30 per month",
      "Logo Design - $75",
      "Rush Delivery 48 hours - +$100",
      "Extra Page - $50 per page",
    ],
    spotlightColor: "ring-yellow-400",
    cta: { label: "Get Elite Build", href: "#contact" },
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
    cta: { label: "Start Business", href: "#contact" },
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
    cta: { label: "Start Business Pro", href: "#contact" },
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
    notIncluded: [
      "Subscriptions",
      "Advanced filtering",
      "Shipping calculators",
    ],
    spotlightColor: "ring-rose-400",
    cta: { label: "Start Ecommerce", href: "#contact" },
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
    notIncluded: [
      "Large ecommerce without quote",
      "Complex data migrations without quote",
    ],
    spotlightColor: "ring-amber-400",
    cta: { label: "Start VIP Flex", href: "#contact" },
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
    cta: { label: "Request Custom Quote", href: "#contact" },
  },
];

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
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) onLeft();
      else onRight();
    }
    startX.current = null;
    startY.current = null;
  }
  return { onTouchStart, onTouchEnd };
}

const Starfield: React.FC = () => (
  <>
    <style>{`
      @keyframes twinkle {
        0% { opacity: 0.8; transform: translateY(0px); }
        50% { opacity: 0.4; transform: translateY(-0.5px); }
        100% { opacity: 0.8; transform: translateY(0px); }
      }
      .twinkle::before, .twinkle::after {
        content: "";
        position: absolute;
        inset: 0;
        background-image:
          radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.8), transparent 60%),
          radial-gradient(1.5px 1.5px at 80% 20%, rgba(255,255,255,0.7), transparent 60%),
          radial-gradient(1.5px 1.5px at 60% 70%, rgba(255,255,255,0.6), transparent 60%),
          radial-gradient(2px 2px at 30% 80%, rgba(255,255,255,0.7), transparent 60%),
          radial-gradient(1.5px 1.5px at 50% 50%, rgba(255,255,255,0.6), transparent 60%),
          radial-gradient(1px 1px at 10% 60%, rgba(255,255,255,0.5), transparent 60%),
          radial-gradient(1px 1px at 90% 40%, rgba(255,255,255,0.5), transparent 60%);
        animation: twinkle 6s infinite ease-in-out;
        filter: blur(0.2px);
      }
      .twinkle::after {
        animation-delay: 3s;
        opacity: 0.6;
      }
      @keyframes orbit-rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
    <div className="absolute inset-0 bg-[#070918] twinkle" />
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.14),transparent_55%),radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.12),transparent_55%)]" />
  </>
);

const Pricing: React.FC = () => {
  const orderedPlans = useMemo(() => PLANS_IN_ORDER, []);
  const [index, setIndex] = useState(0);
  const [legendOpen, setLegendOpen] = useState(false);

  const len = orderedPlans.length;
  const current = orderedPlans[index];

  function next() { setIndex((i) => (i + 1) % len); }
  function prev() { setIndex((i) => (i - 1 + len) % len); }

  const swipe = useSwipe(next, prev);

  // exclude the focused plan from orbiting planets
  const planets = orderedPlans.map((p, i) => ({ plan: p, i })).filter(({ i }) => i !== index);

  return (
    <div className="relative min-h-screen text-white overflow-hidden" {...swipe}>
      <Starfield />

      {/* Top bar with title and legend/menu */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Pricing <span className="ml-2 text-sm align-middle opacity-70">Solar orbit view</span>
        </h1>

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
                onClick={() => setIndex(i)}
                className={`px-3 py-1 rounded-lg text-sm border transition ${
                  i === index
                    ? "border-white/60 bg-white/10"
                    : "border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10"
                }`}
                title={p.name}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile legend list */}
      {legendOpen && (
        <div className="relative z-10 sm:hidden px-4 pb-2">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-2 grid grid-cols-2 gap-2">
            {orderedPlans.map((p, i) => (
              <button
                key={p.key}
                onClick={() => { setIndex(i); setLegendOpen(false); }}
                className={`w-full px-3 py-2 rounded-xl text-left text-sm border transition ${
                  i === index
                    ? "border-white/60 bg-white/10"
                    : "border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Orbit stage */}
      <div className="relative z-0 flex items-center justify-center pt-6 pb-8 sm:pb-12">
        <div className="relative w-[92vw] max-w-[1050px] aspect-square">
          {/* Rotating ring */}
          <div
            className="absolute inset-0 rounded-full border border-white/10"
            style={{ animation: "orbit-rotate 40s linear infinite" }}
          />

          {/* Center orb spotlight */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`relative w-[64vw] max-w-[520px] aspect-square rounded-full bg-white/5 backdrop-blur-sm border ${current.spotlightColor || "ring-cyan-400"} ring-2 ring-inset border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.12)]`}
            >
              <div className="absolute inset-[10%] rounded-full bg-black/30 blur-2xl" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="text-xs uppercase tracking-widest text-white/70 mb-2">In focus</div>
                <h2 className="text-2xl sm:text-3xl font-bold drop-shadow">{current.name}</h2>
                <div className="mt-1 text-lg sm:text-xl font-semibold">
                  {current.price} <span className="text-white/70">{current.cadence}</span>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-white/80">
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
                    className="mt-4 inline-flex items-center px-4 py-2 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition shadow"
                  >
                    {current.cta.label}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Orbiting planets */}
          <div className="absolute inset-0" style={{ animation: "orbit-rotate 60s linear infinite" }}>
            {planets.map(({ plan, i: planIndex }, slot) => {
              const totalSlots = planets.length;
              const angle = angleForSlot(slot, totalSlots);
              const radius = "42%";
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
                >
                  <div
                    className={`relative w-28 h-28 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm ring-2 ${plan.spotlightColor || "ring-cyan-400"} hover:scale-105 transition-transform`}
                    style={{ transform: "translate(-50%, -50%)" }}
                  >
                    <div className="absolute inset-0 rounded-full bg-black/30" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
                      <div className="text-[10px] uppercase tracking-wider text-white/70">Plan</div>
                      <div className="text-sm font-bold">{plan.name}</div>
                      <div className="text-xs text-white/80">
                        {plan.price} <span className="opacity-70">{plan.cadence}</span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Desktop arrows */}
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

      {/* Details panel */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-8 shadow-[0_0_40px_rgba(255,255,255,0.08)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">{current.name} Details</h3>
              <div className="text-white/80">
                <span className="font-semibold">{current.price}</span> {current.cadence}
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              {index > 0 && (
                <button
                  onClick={prev}
                  className="px-3 py-2 rounded-lg border border-white/15 bg-white/10 hover:bg-white/20"
                  title="Previous"
                >
                  Previous
                </button>
              )}
              <button
                onClick={next}
                className="px-3 py-2 rounded-lg border border-white/15 bg-white/10 hover:bg-white/20"
                title="Next"
              >
                Next
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            <div>
              <div className="text-sm uppercase tracking-wider text-white/70 mb-2">Included</div>
              <ul className="space-y-2">
                {current.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {current.notIncluded && current.notIncluded.length > 0 && (
                <>
                  <div className="text-sm uppercase tracking-wider text-white/70 mb-2">Not Included</div>
                  <ul className="space-y-2">
                    {current.notIncluded.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-rose-300" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {current.addOns && current.addOns.length > 0 && (
                <div className="mt-6">
                  <div className="text-sm uppercase tracking-wider text-white/70 mb-2">Add Ons</div>
                  <ul className="space-y-2">
                    {current.addOns.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Universal Add Ons */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="text-sm uppercase tracking-wider text-white/70 mb-2">Universal Add Ons</div>
            <ul className="grid sm:grid-cols-2 gap-2">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/70" /> Extra Page - $50 per page
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/70" /> Logo Design - $75 one time
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/70" /> Hosting Only for Custom builds - $30 per month
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/70" /> Rush Delivery 48 hours - +$100
              </li>
            </ul>
            <div className="mt-4 text-xs text-white/60">
              Large ecommerce and complex data migrations require a quote.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helpers
function angleForSlot(slotIndex: number, totalSlots: number) {
  const step = 360 / totalSlots;
  return step * slotIndex;
}

export default Pricing;
