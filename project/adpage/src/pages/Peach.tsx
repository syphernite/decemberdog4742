import React from "react";

export default function Peach() {
  return (
    <main className="wrap sparkles">
      <section className="panel">
        <div className="acc-rose h-1" />

        <div className="px-6 sm:px-10 pt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-white font-black" style={{ background: "#f43f5e" }}>B</span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-neutral-900 leading-tight">BrightBite Bakery</h2>
              <p className="sub">Fresh daily • Custom orders</p>
            </div>
          </div>
          <div className="hidden sm:flex gap-2">
            <span className="badge">Pastries</span>
            <span className="badge">Breads</span>
            <span className="badge">Cakes</span>
          </div>
        </div>

        <div className="px-6 sm:px-10 py-8">
          <h1 className="h1">Baked fresh every morning</h1>
          <p className="sub mt-3 max-w-xl">Order ahead and skip the line.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="cta hover:brightness-110 pulse" style={{ background: "#f43f5e" }} href="#">Order Now</a>
            <a className="ghost" href="#">Today’s Menu</a>
          </div>
        </div>

        <div className="ticker">
          <div className="tape py-3">
            <span className="mx-6 text-neutral-700">Croissants</span>
            <span className="mx-6 text-neutral-700">Sourdough</span>
            <span className="mx-6 text-neutral-700">Cinnamon Rolls</span>
            <span className="mx-6 text-neutral-700">Macarons</span>
            <span className="mx-6 text-neutral-700">Cheesecake</span>
            <span className="mx-6 text-neutral-700">Croissants</span>
            <span className="mx-6 text-neutral-700">Sourdough</span>
          </div>
        </div>

        <div className="acc-rose h-0.5" />
      </section>
    </main>
  );
}
