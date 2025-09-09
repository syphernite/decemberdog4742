// src/pages/Gallery.tsx
import React, { useEffect, useRef, useState } from 'react';
import { loadGallery } from '../lib/gallery';

type Img = { src: string; caption?: string };

export default function GalleryPage() {
  const [items, setItems] = useState<Img[]>([]);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let live = true;
    loadGallery().then((g) => live && setItems(g));
    return () => { live = false; };
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const apply = () => {
      if (window.matchMedia('(min-width: 768px)').matches) return;
      const panels = Array.from(el.querySelectorAll<HTMLElement>('.panel'));
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      panels.forEach((p) => {
        const pr = p.getBoundingClientRect();
        const px = pr.left + pr.width / 2;
        const dist = (px - centerX) / pr.width;
        const clamped = Math.max(-1, Math.min(1, dist));
        const rotate = -clamped * 30;
        const translateZ = (1 - Math.abs(clamped)) * 120;
        p.style.transform = `rotateY(${rotate}deg) translateZ(${translateZ}px)`;
      });
    };
    const onScroll = () => apply();
    const onResize = () => apply();
    apply();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [items.length]);

  const rows: Img[][] = (() => {
    if (items.length === 0) return [];
    const out: Img[][] = [];
    const order = [1, 2, 3];
    let idx = 0;
    for (let k = 0; idx < items.length; k++) {
      const take = k < order.length ? order[k] : 3;
      out.push(items.slice(idx, idx + take));
      idx += take;
    }
    return out;
  })();

  return (
    <main className="min-h-[80svh] bg-ink text-bone">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-2">
          <span className="copper-text">Gallery</span>
        </h1>

        {/* Mobile bay-window slider */}
        <div
          ref={trackRef}
          className="relative h-[420px] overflow-x-auto overflow-y-hidden md:hidden"
          style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
        >
          <div className="flex gap-8 pr-8">
            {items.map((img, i) => (
              <figure
                key={i}
                className="panel shrink-0 w-[300px] h-[380px] rounded-3xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden will-change-transform"
                style={{ transformStyle: 'preserve-3d', transition: 'transform 120ms ease-out' }}
              >
                <img src={img.src} alt={img.caption || `Gallery ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
              </figure>
            ))}
          </div>
        </div>

        {/* Desktop pyramid */}
        <div className="hidden md:flex md:flex-col md:items-center md:gap-8">
          {rows.map((row, rIdx) => (
            <div key={rIdx} className="flex gap-8" style={{ transform: `translateY(${rIdx * 6}px)` }}>
              {row.map((img, i) => (
                <figure key={`${rIdx}-${i}`} className="w-[280px] h-[360px] rounded-3xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
                  <img src={img.src} alt={img.caption || `Gallery ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
