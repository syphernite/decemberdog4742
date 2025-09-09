// src/pages/Gallery.tsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
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

  // attach scroll transform
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const panels = Array.from(el.querySelectorAll<HTMLElement>('.panel'));
    const update = () => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      panels.forEach((p) => {
        const pr = p.getBoundingClientRect();
        const px = pr.left + pr.width / 2;
        const dist = (px - centerX) / pr.width; // -inf..inf
        const clamped = Math.max(-1, Math.min(1, dist)); // -1..1
        const rotate = -clamped * 30; // degrees
        const translateZ = (1 - Math.abs(clamped)) * 120; // pop center forward
        p.style.transform = `rotateY(${rotate}deg) translateZ(${translateZ}px)`;
      });
    };

    const ro = new ResizeObserver(update);
    ro.observe(el);
    const onScroll = () => update();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    el.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      el.removeEventListener('scroll', onScroll);
    };
  }, [items.length]);

  return (
    <main className="min-h-[80svh] bg-ink text-bone">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-extrabold text-copper mb-2">Gallery</h1>
        <p className="text-white/60 mb-8">Swipe or scroll horizontally.</p>

        <div
          ref={trackRef}
          className="relative h-[420px] overflow-x-auto overflow-y-hidden"
          style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
        >
          <div className="flex gap-8 pr-8">
            {items.map((img, i) => (
              <figure
                key={i}
                className="panel shrink-0 w-[300px] h-[380px] rounded-3xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden will-change-transform"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 120ms ease-out',
                }}
              >
                <img
                  src={img.src}
                  alt={img.caption || `Gallery ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
