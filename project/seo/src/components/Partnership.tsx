// src/components/Partnership.tsx
import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { tokens } from "../styles/tokens";

/**
 * Partnership section
 * Compact, high-contrast, mobile-first.
 * Swap VARIANT between: "cta" | "credit" | "badges"
 */
const VARIANT: "cta" | "credit" | "badges" = "cta";

export const Partnership: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className={tokens.section} ref={elementRef}>
      <div className={tokens.container}>
        {VARIANT === "cta" && <Cta isVisible={isVisible} />}
        {VARIANT === "credit" && <Credit isVisible={isVisible} />}
        {VARIANT === "badges" && <Badges isVisible={isVisible} />}
      </div>
    </section>
  );
};

const Cta: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
    transition={{ duration: 0.35 }}
    className={`${tokens.card} overflow-hidden p-0`}
  >
    {/* dark panel for contrast */}
    <div className="relative isolate">
      <div className="absolute inset-0 bg-neutral-900" />
      {/* soft accent glows that do not reduce contrast */}
      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-emerald-600/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-sky-600/20 blur-3xl" />
      <div className="relative px-5 py-10 md:px-10 md:py-14 text-center text-white">
        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15">
          <ExternalLink size={18} className="text-white" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold">Want a site like this?</h3>
        <p className="mt-2 text-sm md:text-base text-white/80">
          Get a free demo. Simple and fast. Tailored to your business.
        </p>

        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/contact?plan=basic&step=1"
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
          >
            Get your free demo
          </a>
          <a
            href="/portfolio"
            className="rounded-md px-4 py-2 text-sm font-medium text-white ring-1 ring-white/25 hover:bg-white/5"
          >
            See recent work
          </a>
        </div>

        <p className="mt-4 text-xs text-white/70">
          Simple builds only for the promo. Full builds available on request.
        </p>
      </div>
    </div>
  </motion.div>
);

const Credit: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
    transition={{ duration: 0.3 }}
    className={`${tokens.card} p-4`}
  >
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm">
      <p className="text-neutral-600">
        Built by <span className="font-medium text-neutral-900">Built4You</span>
      </p>
      <div className="flex items-center gap-3">
        <a href="/portfolio" className="text-neutral-800 hover:underline">
          Portfolio
        </a>
        <span aria-hidden className="text-neutral-300">•</span>
        <a href="/contact?ref=credit" className="text-emerald-700 hover:underline">
          Start a free demo
        </a>
      </div>
    </div>
  </motion.div>
);

const Badges: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
    transition={{ duration: 0.3 }}
    className={`${tokens.card} p-6`}
  >
    <div className="text-center">
      <h4 className="text-base md:text-lg font-semibold text-neutral-900">You’re in good hands</h4>
      <p className="mt-1 text-sm text-neutral-600">Local-first builds. Fast delivery. Clear pricing.</p>
    </div>
    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
      {['Mobile-first','SEO-ready','Fast hosting','No lock-in','Free demo','US-based'].map((label) => (
        <div key={label} className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-center text-xs text-neutral-700">
          {label}
        </div>
      ))}
    </div>
    <div className="mt-5 flex items-center justify-center gap-3">
      <a href="/contact?ref=badges" className="rounded-md bg-neutral-900 px-4 py-2 text-xs md:text-sm font-medium text-white hover:bg-neutral-800">
        Start a demo
      </a>
      <a href="/pricing" className="rounded-md px-4 py-2 text-xs md:text-sm font-medium text-neutral-900 ring-1 ring-neutral-300 hover:bg-neutral-50">
        Pricing
      </a>
    </div>
  </motion.div>
);

export default Partnership;
