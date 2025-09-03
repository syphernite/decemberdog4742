import React from "react";
import site from "../content/site.json";

export default function ContactPage() {
  const base = (import.meta as any).env.BASE_URL || "/";
  const logo = base + "images/logo.png";

  return (
    <section className="relative py-14 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4">
        <header className="text-center mb-10">
          <img src={logo} alt={site.name} className="mx-auto w-28 h-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold">Contact</h1>
          <p className="text-neutral-300 mt-2">We’re here to help.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Info cards */}
          <div className="card-glass-square">
            <div className="text-sm uppercase tracking-wider font-semibold" style={{ color: "var(--pm-green)" }}>Address</div>
            <div className="mt-2 text-neutral-200">{site.address}</div>
            <a href={`https://maps.google.com/?q=${encodeURIComponent(site.address)}`} target="_blank" rel="noreferrer" className="btn-outline mt-4 inline-block">Open in Maps</a>
          </div>

          <div className="card-glass-square">
            <div className="text-sm uppercase tracking-wider font-semibold" style={{ color: "var(--pm-red)" }}>Hours</div>
            <ul className="mt-2 space-y-1 text-neutral-200">
              {site.hours?.map((h) => (
                <li key={h.day}>{h.day}: {h.open}–{h.close}</li>
              ))}
            </ul>
          </div>

          <div className="card-glass-square">
            <div className="text-sm uppercase tracking-wider font-semibold" style={{ color: "var(--pm-gold)" }}>Phone</div>
            <div className="mt-2 text-neutral-200">{site.phone}</div>
            <a href={`tel:${site.phone}`} className="btn-secondary-red mt-4 inline-block">Call Now</a>
          </div>
        </div>

        {/* Simple message form (styling only) */}
        <div className="form-card mt-8">
          <h2 className="text-2xl font-bold mb-4">Send a message</h2>
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="input-square" placeholder="Name" required />
            <input className="input-square" placeholder="Email" type="email" required />
            <input className="input-square md:col-span-2" placeholder="Subject" />
            <textarea className="textarea-square md:col-span-2" rows={5} placeholder="Your message" />
            <div className="md:col-span-2">
              <button type="submit" className="btn-menu-neo">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
