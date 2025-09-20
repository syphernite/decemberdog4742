import React from "react";

export default function Mint() {
  return (
    <main className="wrap mesh">
      <section className="panel">
        <div className="wave h-1" />

        <div className="px-6 sm:px-10 pt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-white font-black" style={{ background: "#10b981" }}>F</span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-neutral-900 leading-tight">FreshFlow Plumbing</h2>
              <p className="sub">24/7 local service</p>
            </div>
          </div>
          <div className="hidden sm:flex gap-2 float">
            <span className="badge">Emergencies</span>
            <span className="badge">Installs</span>
            <span className="badge">Repairs</span>
          </div>
        </div>

        <div className="px-6 sm:px-10 py-8 grid2">
          <div>
            <h1 className="h1">Plumbing help without the headache</h1>
            <p className="sub mt-3 max-w-xl">Fair, local, and fast. Book in minutes.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="cta hover:brightness-110 pulse" style={{ background: "#10b981" }} href="#">Call Now</a>
              <a className="ghost" href="#">Get a Quote</a>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white/80 p-5 backdrop-blur float">
            <div className="h2">Same-day options</div>
            <p className="sub mt-1">Priority slots for urgent jobs.</p>
            <div className="mt-4 h-10 rounded-xl acc-mint hue" />
          </div>
        </div>

        <div className="acc-mint h-0.5" />
      </section>
    </main>
  );
}
