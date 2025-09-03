import React from "react";
import { Link } from "react-router-dom";
import site from "../content/site.json";

export default function Hero() {
  const base = (import.meta as any).env.BASE_URL || "/";
  const logo = base + "images/logo.png";
  const interior = base + "images/restaurant-interior.jpg";

  return (
    <section className="relative min-h-[92svh] flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${interior})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center">
        <img
          src={logo}
          alt={site.name}
          className="mx-auto w-56 md:w-72 drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)] animate-fade-down"
          loading="eager"
        />

        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight animate-fade-up text-white">
          {site.heroHeadline || "Plaza Mexico"}
        </h1>

        <p
          className="mt-3 text-lg md:text-2xl animate-fade-up"
          style={{ animationDelay: "120ms", color: "var(--pm-gold)" }}
        >
          {site.heroSubheadline || "Authentic Mexican flavors served hot daily"}
        </p>

        <div
          className="mt-7 flex flex-col sm:flex-row gap-3 justify-center animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <Link to="/menu" className="btn-menu-neo">
            View Menu
          </Link>
          <a
            href={`tel:${site.phone}`}
            className="btn-secondary-red"
          >
            Call {site.phone}
          </a>
        </div>

        {/* Info cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm md:text-base">
          <div className="card-glass-square animate-fade-up" style={{ animationDelay: "320ms" }}>
            <div className="font-semibold" style={{ color: "var(--pm-green)" }}>Hours</div>
            <ul className="mt-2 space-y-1 text-neutral-200">
              {site.hours?.map((h) => (
                <li key={h.day}>
                  {h.day}: {h.open}–{h.close}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-glass-square animate-fade-up" style={{ animationDelay: "380ms" }}>
            <div className="font-semibold" style={{ color: "var(--pm-red)" }}>Address</div>
            <div className="mt-2 text-neutral-200">{site.address}</div>
          </div>

          <div className="card-glass-square animate-fade-up" style={{ animationDelay: "440ms" }}>
            <div className="font-semibold" style={{ color: "var(--pm-gold)" }}>Special</div>
            <div className="mt-2 text-neutral-200">{site.dailySpecials}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
