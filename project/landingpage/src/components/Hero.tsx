// src/components/Hero.tsx
import React from "react";
import { ArrowRight, Play } from "lucide-react";
import CountUp from "./CountUp";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[78vh] flex items-center justify-center px-6"
    >
      {/* soft vignette + vertical gradient to clean up the background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_20%,rgba(0,0,0,0.35),transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl text-center">
        {/* headline chip with slight blur behind text */}
        <div className="inline-block rounded-2xl bg-black/20 backdrop-blur-sm px-5 py-2">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Custom Websites for{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
              Small Businesses
            </span>
          </h1>
        </div>

        <p className="mt-5 text-lg md:text-xl text-slate-200/90 max-w-3xl mx-auto">
          Professional, fast-loading websites that grow your business. No
          templates. No compromises. Built for results.
        </p>

        {/* cta buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("pricing")}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-500 transition"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </button>

        <button
            onClick={() => scrollTo("why-choose-us")}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white hover:bg-white/15 transition backdrop-blur-sm"
          >
            <Play className="h-5 w-5" />
            Learn More
          </button>
        </div>

        {/* stats on glass cards (animated) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-4">
            <div className="text-2xl font-bold text-emerald-300">
              <CountUp to={50} duration={1.2} />+
            </div>
            <div className="text-slate-200/80 text-sm">Projects Delivered</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-4">
            <div className="text-2xl font-bold text-emerald-300">
              <CountUp to={100} duration={1.2} delay={0.15} />%
            </div>
            <div className="text-slate-200/80 text-sm">Client Satisfaction</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-4">
            <div className="text-2xl font-bold text-emerald-300">
              <CountUp to={7} duration={1.2} delay={0.3} /> Days
            </div>
            <div className="text-slate-200/80 text-sm">Average Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
