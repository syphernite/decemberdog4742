// src/App.tsx
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Phone, MapPin, Tv, Beer, Gamepad2, Calendar, Facebook, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SheetsSpecials from "./components/SheetsSpecials";
import Hours from "./components/Hours";
import MapEmbed from "./components/MapEmbed";
import CallFab from "./components/CallFab";
import Menu from "./components/Menu";
import bgUrl from "./assets/background.jpg";

const PHONE = "(252) 223-3303";
const ADDRESS = "360 E Chatham St, Newport, NC 28570";

/** floating sports emoji */
const FloatingEmoji: React.FC<{ symbol: string; left: string; delay: string }> = ({ symbol, left, delay }) => (
  <div
    className="absolute text-xl md:text-2xl opacity-70 animate-float-random pointer-events-none select-none"
    style={{ left, animationDelay: delay, top: "0%" }}
  >
    {symbol}
  </div>
);

/** center carousel with floating emojis */
function FeatureCarousel() {
  const items = useMemo(
    () => [
      { title: "Game-Day TVs", desc: "Every major game on in HD. Ask to tune your table.", Icon: Tv },
      { title: "Pool & Darts", desc: "Chalk up or take aim. Friendly leagues welcome.", Icon: Gamepad2 },
      { title: "Full Bar", desc: "Cold taps, classics, and house pours done right.", Icon: Beer }
    ],
    []
  );
  const [i, setI] = useState(0);
  const next = useCallback(() => setI((v) => (v + 1) % items.length), [items.length]);
  const prev = useCallback(() => setI((v) => (v - 1 + items.length) % items.length), [items.length]);

  useEffect(() => {
    const id = setInterval(next, 4200);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="relative mx-auto w-full max-w-2xl md:max-w-3xl">
      {/* floating emojis inside/outside carousel */}
      <FloatingEmoji symbol="🏈" left="10%" delay="0s" />
      <FloatingEmoji symbol="🏀" left="45%" delay="1.2s" />
      <FloatingEmoji symbol="⚾" left="80%" delay="2.4s" />

      <div
        className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md ring-1 ring-white/5 shadow-[0_0_28px_0_rgba(255,255,255,0.06)] relative z-10"
        role="region"
        aria-roledescription="carousel"
      >
        <div className="relative overflow-hidden">
          <div className="relative h-[110px] md:h-[128px]">
            {items.map((it, idx) => (
              <div
                key={it.title}
                className={[
                  "absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 px-5 md:px-6 text-center md:text-left transition-all duration-500 ease-out",
                  idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                ].join(" ")}
              >
                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <it.Icon className="h-6 w-6 md:h-7 md:w-7 text-red-300" />
                </div>
                <div className="max-w-[40ch] md:max-w-none">
                  <div className="text-lg md:text-2xl font-semibold text-red-200 leading-snug">{it.title}</div>
                  <div className="text-sm md:text-base text-white/70">{it.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-lg bg-black/40 ring-1 ring-white/10 hover:bg-black/55"
            onClick={prev}
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-white/80" />
          </button>
          <button
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-lg bg-black/40 ring-1 ring-white/10 hover:bg-black/55"
            onClick={next}
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-white/80" />
          </button>
        </div>
        <div className="flex justify-center gap-2 px-5 pb-4 pt-3">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 w-7 rounded-full transition-colors ${idx === i ? "bg-red-400/80" : "bg-white/15 hover:bg-white/25"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col text-base-text">
      {/* Background */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('${bgUrl}')`,
          filter: "blur(10px) brightness(0.7)",
          transform: "translateZ(0)"
        }}
      />

      {/* Foreground */}
      <div className="relative z-10 flex min-h-screen flex-col bg-black/40 backdrop-blur-sm">
        <Header />

        <main className="flex-1">
          {/* Hero */}
          <section>
            <div className="container-pad py-14 md:py-20">
              <div className="mx-auto max-w-5xl text-center animate-in">
                <h1
                  className="relative text-8xl md:text-[10rem] font-extrabold tracking-tight select-none text-white
                  transform -rotate-3 md:-rotate-6 drop-shadow-[0_0_12px_rgba(255,0,0,0.4)]
                  before:content-['TIME OUT'] before:absolute before:left-0 before:top-0 before:w-full before:text-white before:opacity-40
                  before:animate-tvstatic after:content-['TIME OUT'] after:absolute after:left-0 after:top-0 after:w-full after:text-white after:opacity-20 after:animate-tvstatic2"
                  style={{ fontFamily: "Impact, sans-serif" }}
                >
                  TIME OUT
                </h1>
                <p className="mt-5 text-base-muted text-lg md:text-xl">Veteran owned. Family friendly. Great food. Every game on.</p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="btn btn-primary h-11 px-5 text-base">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </a>
                  <a
                    href="#visit"
                    className="inline-flex items-center justify-center h-11 px-5 text-base rounded-lg font-medium transition text-white"
                    style={{ backgroundColor: "#22c55e", border: "1px solid #16a34a" }}
                  >
                    <MapPin className="mr-2 h-4 w-4" /> Maps
                  </a>
                  <a
                    href="https://www.facebook.com/TimeOutTavernNC/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "#1877F2" }}
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5 text-white" />
                  </a>
                </div>

                <div className="mt-8">
                  <FeatureCarousel />
                </div>

                <div className="mx-auto mt-6 w-full max-w-2xl md:max-w-3xl rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md ring-1 ring-white/5 px-6 py-4 text-center text-sm text-base-muted">
                  Cards accepted • Take-out available • Private lot parking
                </div>
              </div>
            </div>
          </section>

          {/* Events */}
          <section id="events">
            <div className="container-pad py-12 md:py-14">
              <div className="flex items-center gap-3 mb-4 md:mb-6 animate-in">
                <Calendar className="h-6 w-6 text-brand-primary" />
                <h2 className="text-2xl md:text-3xl font-semibold">
                  <span className="text-brand-primary">Live Events</span> & Specials
                </h2>
              </div>
              <SheetsSpecials />
            </div>
          </section>

          {/* Menu */}
          <section id="menu">
            <div className="container-pad py-12 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 animate-in">Menu</h2>
              <Menu />
              <p className="text-sm text-base-muted mt-6">Menu items and prices are subject to change. Call for current specials.</p>
            </div>
          </section>

          {/* Visit */}
          <section id="visit">
            <div className="container-pad py-12 md:py-14 grid lg:grid-cols-2 gap-8">
              <div className="animate-in">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Hours</h2>
                <Hours />
                <div className="mt-6">
                  <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="btn btn-primary">
                    <Phone className="mr-2 h-4 w-4" /> {PHONE}
                  </a>
                </div>
              </div>
              <div className="animate-in" style={{ animationDelay: "80ms" }}>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Find Us</h2>
                <div className="card overflow-hidden">
                  <MapEmbed address={ADDRESS} />
                </div>
                <p className="text-sm text-base-muted mt-3">{ADDRESS}</p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <CallFab />
      </div>
    </div>
  );
}

