
import React from 'react';
import { ExternalLink } from 'lucide-react';
export function Book() {
  return (
    <section className="min-h-[92svh] bg-ink text-bone grid place-items-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-black">Book a Cut</h1>
        <p className="mt-3 text-white/80">Reserve your mobile appointment on Booksy.</p>
        <a href="https://booksy.com/en-us/1282324_copperhead-cutz_barber-shop_32141_lawton" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-5 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15">Open Booksy <ExternalLink size={16}/></a>
      </div>
    </section>
  );
}
