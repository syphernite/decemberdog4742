// src/components/Header.tsx
import React, { useEffect, useState } from "react";
import logo from "../assets/tavern.png";

export default function Header() {
  const [elevated, setElevated] = useState(false);
  const [open, setOpen] = useState(false);

  const HEADER_BG = "#151312"; // darker

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Main header */}
      <header
        className={`sticky top-0 z-50 ${elevated ? "shadow-lg" : ""}`}
        style={{
          backgroundColor: HEADER_BG,
          color: "#fff",
          // layered subtle texture
          backgroundImage: [
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
            "linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)"
          ].join(","),
          backgroundSize: "10px 10px, 6px 6px, 6px 6px",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container-pad h-24 flex items-center justify-between font-['Bebas_Neue',sans-serif]">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="TimeOut Tavern"
              className="h-20 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4">
            {[
              { href: "#events", label: "🎵 Events" },
              { href: "#menu", label: "🍔 Menu" },
              { href: "#visit", label: "📍 Visit" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-5 py-2 text-sm rounded-full relative overflow-hidden text-white font-semibold
                  border border-white/20 backdrop-blur-lg bg-white/10
                  before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/30 before:via-white/20 before:to-white/30
                  before:blur before:animate-[liquid_4s_infinite]
                  hover:before:translate-x-0 hover:scale-105 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-md border border-white/20 bg-white/10 backdrop-blur
                       active:scale-95 transition"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden border-t border-white/10">
            <nav className="container-pad py-3 flex flex-col gap-2">
              {[
                { href: "#events", label: "🎵 Events" },
                { href: "#menu", label: "🍔 Menu" },
                { href: "#visit", label: "📍 Visit" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white/5 text-white
                             font-semibold text-base active:scale-[0.99] transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}

        {/* decorative triangles */}
        <svg
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "14px" }}
        >
          <polygon
            points="0,0 5,10 10,0 15,10 20,0 25,10 30,0 35,10 40,0 45,10 50,0 55,10 60,0 65,10 70,0 75,10 80,0 85,10 90,0 95,10 100,0"
            fill={HEADER_BG}
          />
        </svg>
      </header>

      {/* keyframes for liquid shimmer */}
      <style>{`
        @keyframes liquid {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </>
  );
}
