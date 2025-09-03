import React from "react";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import site from "../content/site.json";

export default function ContactPage() {
  const base = (import.meta as any).env.BASE_URL || "/";
  const logo = base + "images/logo.png";
  const storefront = base + "images/storefront.jpg";

  return (
    <section className="relative min-h-[92svh] bg-black text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover blur-sm"
        style={{ backgroundImage: `url(${storefront})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        {/* Header */}
        <header className="text-center mb-10">
          <img
            src={logo}
            alt={site.name}
            className="mx-auto w-[20rem] md:w-[28rem] drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)] animate-fade-down"
            loading="eager"
          />
          <h1
            className="mt-3 text-4xl md:text-5xl font-extrabold animate-fade-up opacity-0"
            style={{ animationDelay: "160ms", animationFillMode: "forwards" }}
          >
            Contact
          </h1>
          <p
            className="text-neutral-300 mt-2 animate-fade-up opacity-0"
            style={{ animationDelay: "280ms", animationFillMode: "forwards" }}
          >
            We’re here to help.
          </p>
        </header>

        {/* Info cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            className="card-glass-square p-6 animate-fade-up opacity-0"
            style={{ animationDelay: "320ms", animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-2 text-sm uppercase tracking-wider font-semibold" style={{ color: "var(--pm-green)" }}>
              <MapPin className="h-4 w-4" />
              Address
            </div>
            <div className="mt-3 text-neutral-200">{site.address}</div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(site.address)}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-none px-5 py-2 mt-5
                         text-base font-semibold tracking-wide
                         bg-gradient-to-br from-emerald-600 to-emerald-700
                         shadow-[0_8px_30px_rgba(16,185,129,0.35)]
                         hover:shadow-[0_12px_40px_rgba(16,185,129,0.55)]
                         active:translate-y-px ring-1 ring-emerald-400/30
                         hover:from-emerald-500 hover:to-emerald-700
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80
                         transition-all"
            >
              Open in Maps
            </a>
          </div>

          <div
            className="card-glass-square p-6 animate-fade-up opacity-0"
            style={{ animationDelay: "420ms", animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-2 text-sm uppercase tracking-wider font-semibold" style={{ color: "var(--pm-red)" }}>
              <Clock className="h-4 w-4" />
              Hours
            </div>
            <ul className="mt-3 space-y-2 text-neutral-200">
              {site.hours?.map((h: any) => (
                <li key={h.day}>
                  {h.day}: {h.open}–{h.close}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="card-glass-square p-6 animate-fade-up opacity-0"
            style={{ animationDelay: "520ms", animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-2 text-sm uppercase tracking-wider font-semibold" style={{ color: "var(--pm-gold)" }}>
              <Phone className="h-4 w-4" />
              Phone
            </div>
            <div className="mt-3 text-neutral-200">{site.phone}</div>
            <a
              href={`tel:${site.phone}`}
              className="group inline-flex items-center justify-center gap-2 rounded-none px-5 py-2 mt-5
                         text-base font-semibold tracking-wide
                         bg-gradient-to-br from-rose-600 to-rose-700
                         shadow-[0_8px_30px_rgba(244,63,94,0.35)]
                         hover:shadow-[0_12px_40px_rgba(244,63,94,0.55)]
                         active:translate-y-px ring-1 ring-rose-400/30
                         hover:from-rose-500 hover:to-rose-700
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/80
                         transition-all"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Message form */}
        <div
          className="form-card mt-10 p-6 animate-fade-up opacity-0"
          style={{ animationDelay: "640ms", animationFillMode: "forwards" }}
        >
          <h2 className="text-2xl font-bold mb-4">Send a message</h2>
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="input-square" placeholder="Name" required />
            <input className="input-square" placeholder="Email" type="email" required />
            <input className="input-square md:col-span-2" placeholder="Subject" />
            <textarea className="textarea-square md:col-span-2" rows={5} placeholder="Your message" />
            <div className="md:col-span-2">
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-none px-6 py-3
                           text-base font-semibold tracking-wide
                           bg-gradient-to-br from-emerald-600 to-emerald-700
                           shadow-[0_8px_30px_rgba(16,185,129,0.35)]
                           hover:shadow-[0_12px_40px_rgba(16,185,129,0.55)]
                           active:translate-y-px ring-1 ring-emerald-400/30
                           hover:from-emerald-500 hover:to-emerald-700
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80
                           transition-all"
              >
                <Send className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
