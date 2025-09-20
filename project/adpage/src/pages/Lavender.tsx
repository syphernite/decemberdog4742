import React from "react";

export default function Lavender() {
  return (
    <main className="wrap relative">
      <div className="absolute inset-0 -z-10 grid place-items-center">
        <div className="w-[520px] h-[380px] acc-violet blob opacity-40" />
      </div>

      <section className="panel">
        <div className="acc-violet h-1" />

        <div className="px-6 sm:px-10 pt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-white font-black" style={{ background: "#7c3aed" }}>I</span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-neutral-900 leading-tight">Inkspire Studio</h2>
              <p className="sub">Custom • Fine line • Flash</p>
            </div>
          </div>
          <div className="hidden sm:flex gap-2 float">
            <span className="badge">By appointment</span>
            <span className="badge">Sterile</span>
          </div>
        </div>

        <div className="px-6 sm:px-10 py-8 grid2">
          <div className="float">
            <h1 className="h1">Tattoos with intent</h1>
            <p className="sub mt-3 max-w-xl">Designs that hold meaning and age well.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="cta text-white" style={{ background: "linear-gradient(90deg,#7c3aed,#a78bfa)", backgroundSize: "200% 100%", animation: "wave 6s ease-in-out infinite" }} href="#">
                Book a Session
              </a>
              <a className="ghost" href="#">View Artists</a>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white/80 p-5 backdrop-blur">
            <div className="h2">Consult first</div>
            <p className="sub mt-1">Quick calls to align on style.</p>
          </div>
        </div>

        <div className="acc-violet h-0.5" />
      </section>
    </main>
  );
}
