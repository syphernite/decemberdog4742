import React from "react";
import { Link } from "react-router-dom";
import { Phone, Utensils } from "lucide-react";
import site from "../content/site.json";

export default function Hero() {
  const base = (import.meta as any).env.BASE_URL || "/";
  const logo = base + "images/logo.png";
  const storefront = base + "images/storefront.jpg";

  return (
    <section className="relative min-h-[92svh] flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover blur-sm"
        style={{ backgroundImage: `url(${storefront})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
        <img
          src={logo}
          alt={site.name}
          className="mx-auto w-[36rem] md:w-[48rem] drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)] animate-fade-down"
          loading="eager"
        />

        {/* Subheadline */}
        <p
          className="mt-2 text-xl md:text-3xl animate-fade-up opacity-0"
          style={{ animationDelay: "200ms", animationFillMode: "forwards", color: "var(--pm-gold)" }}
        >
          {site.heroSubheadline || "Authentic Mexican flavors served hot daily"}
        </p>

        {/* CTAs */}
        <div
          className="mt-6 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0"
          style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
        >
          <Link
            to="/menu"
            aria-label="View Menu"
            className="group inline-flex items-center justify-center gap-2 rounded-none px-6 py-3 text-base md:text-lg font-semibold tracking-wide
                       bg-gradient-to-br from-emerald-600 to-emerald-700
                       shadow-[0_8px_30px_rgba(16,185,129,0.35)]
                       hover:shadow-[0_12px_40px_rgba(16,185,129,0.55)]
                       active:translate-y-px ring-1 ring-emerald-400/30
                       hover:from-emerald-500 hover:to-emerald-700
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80
                       transition-all"
          >
            <Utensils className="h-5 w-5 transition-transform group-hover:-rotate-6" />
            <span>View Menu</span>
          </Link>

          <a
            href={`tel:${site.phone}`}
            aria-label={`Call ${site.phone}`}
            className="group inline-flex items-center justify-center gap-2 rounded-none px-6 py-3 text-base md:text-lg font-semibold tracking-wide
                       bg-gradient-to-br from-rose-600 to-rose-700
                       shadow-[0_8px_30px_rgba(244,63,94,0.35)]
                       hover:shadow-[0_12px_40px_rgba(244,63,94,0.55)]
                       active:translate-y-px ring-1 ring-rose-400/30
                       hover:from-rose-500 hover:to-rose-700
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/80
                       transition-all"
          >
            <Phone className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span>Call {site.phone}</span>
          </a>
        </div>

        {/* Info cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-base md:text-lg">
          <div
            className="card-glass-square p-6 animate-fade-up opacity-0"
            style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
          >
            <div className="font-semibold text-lg" style={{ color: "var(--pm-green)" }}>
              Hours
            </div>
            <ul className="mt-3 space-y-2 text-neutral-200">
              {site.hours?.map((h) => (
                <li key={h.day}>
                  {h.day}: {h.open}–{h.close}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="card-glass-square p-6 animate-fade-up opacity-0"
            style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
          >
            <div className="font-semibold text-lg" style={{ color: "var(--pm-red)" }}>
              Address
            </div>
            <div className="mt-3 text-neutral-200">{site.address}</div>
          </div>

          <div
            className="card-glass-square p-6 animate-fade-up opacity-0"
            style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}
          >
            <div className="font-semibold text-lg" style={{ color: "var(--pm-gold)" }}>
              Special
            </div>
            <div className="mt-3 text-neutral-200">{site.dailySpecials}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
