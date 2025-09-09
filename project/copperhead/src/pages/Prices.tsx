// src/pages/Prices.tsx
import React from 'react';

function Prices() {
  const items = [
    { name: 'Mens Haircut', price: 30 },
    { name: 'Mens Haircut w/ Beard', price: 35 },
    { name: 'Temp Taper', price: 25 },
    { name: 'Line Up', price: 15 },
    { name: 'Head Shave', price: 25 },
    { name: 'Kids 12 And Under', price: 20 },
  ];

  return (
    <section className="min-h-[92svh] bg-ink text-bone">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <h1 className="text-4xl md:text-5xl font-black">
          <span className="copper-text">Prices</span>
        </h1>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {items.map((it) => (
            <div
              key={it.name}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between"
            >
              <div className="font-semibold text-white">{it.name}</div>
              <div className="text-white/80">
                <span className="copper-text">${it.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-white/60 text-sm mt-4">
          Final pricing may vary. See Booksy for live rates.
        </p>
      </div>
    </section>
  );
}

export default Prices;
