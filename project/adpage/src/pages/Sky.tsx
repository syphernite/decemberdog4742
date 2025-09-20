import React from "react";

export default function Sky() {
  return (
    <main className="wrap stripes">
      <section className="panel">
        <div className="acc-sky h-1" />
        <header className="px-6 sm:px-10 pt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="logo hue" style={{ background: "#0ea5e9" }}>A</span>
            <div>
              <h2 className="text-xl font-bold text-neutral-900 leading-tight">AeroShine Detailing</h2>
              <p className="sub">Mobile interior • exterior</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="badge">On-site</span>
            <span className="badge">Paint safe</span>
          </div>
        </header>

        <div className="px-6 sm:px-10 py-8 grid2">
          <div>
            <h1 className="h1">Showroom finish delivered to your driveway</h1>
            <p className="sub mt-3 max-w-xl">We come to you. Shine that lasts.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="cta hover:brightness-110 pulse" style={{ background: "#0ea5e9" }} href="#">Book Detail</a>
              <a className="ghost" href="#">View Packages</a>
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white/80 p-5 backdrop-blur">
            <h3 className="font-semibold">Premium materials</h3>
            <p className="sub mt-1">Pro-grade products only.</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-14 h-14 rounded-full acc-sky animate-spin [animation-duration:6s]" />
              <span className="sub">Quality seal</span>
            </div>
          </div>
        </div>

        <div className="acc-sky h-0.5" />
      </section>
    </main>
  );
}
