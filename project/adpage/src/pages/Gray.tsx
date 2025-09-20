import React from "react";

export default function Gray() {
  return (
    <main className="wrap bg-neutral-100">
      <section className="panel">
        <div className="acc-gray h-1" />

        <div className="px-6 sm:px-10 pt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-800 text-white font-black">E</span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-neutral-900 leading-tight">EdgeWorks Consulting</h2>
              <p className="sub">Web strategy • Sites that convert</p>
            </div>
          </div>
          <div className="hidden sm:flex gap-2">
            <span className="badge">SEO-ready</span>
            <span className="badge">Fast</span>
            <span className="badge">Glare-safe</span>
          </div>
        </div>

        <div className="px-6 sm:px-10 py-8 grid2">
          <div>
            <h1 className="h1">Turn ad clicks into booked calls</h1>
            <p className="sub mt-3 max-w-xl">Clean copy. One action. No distractions.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="cta bg-neutral-900 hover:brightness-110 pulse" href="#">Get Your Free Build</a>
              <a className="ghost" href="#">See Examples</a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-neutral-200 bg-white/80 p-5 backdrop-blur float">
              <div className="h2">One-page funnels</div>
              <p className="sub mt-1">Everything above the fold.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white/80 p-5 backdrop-blur">
              <div className="h2">Analytics in mind</div>
              <p className="sub mt-1">Events wired for ads.</p>
            </div>
          </div>
        </div>

        <div className="ticker">
          <div className="tape py-3">
            <span className="mx-6 text-neutral-700">Mobile-first</span>
            <span className="mx-6 text-neutral-700">Sub-2s load</span>
            <span className="mx-6 text-neutral-700">A/B ready</span>
            <span className="mx-6 text-neutral-700">Clear CTA</span>
            <span className="mx-6 text-neutral-700">Brand-neutral</span>
            <span className="mx-6 text-neutral-700">Mobile-first</span>
          </div>
        </div>

        <div className="acc-gray h-0.5" />
      </section>
    </main>
  );
}
