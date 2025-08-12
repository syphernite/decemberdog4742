import React, { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle vignette so text stays readable over the galaxy */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Decorative soft blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            Custom Websites for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              {" "}Small Businesses
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Professional, fast-loading websites that grow your business.
            No templates, no compromises. Beautiful, custom web solutions built for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollTo("pricing")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 animate-bounce"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              onClick={() => scrollTo("why-choose-us")}
              className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20 hover:shadow-lg flex items-center space-x-2 backdrop-blur-sm"
            >
              <Play className="h-5 w-5" />
              <span>Learn More</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">50+</div>
              <div className="text-slate-200">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">100%</div>
              <div className="text-slate-200">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">7 Days</div>
              <div className="text-slate-200">Average Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
