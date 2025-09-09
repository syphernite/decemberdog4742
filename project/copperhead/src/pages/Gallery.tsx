// src/pages/Gallery.tsx
import React, { useEffect, useState } from 'react';
import { loadGallery } from '../lib/gallery';

type Img = { src: string; caption?: string };

export default function GalleryPage() {
  const [items, setItems] = useState<Img[]>([]);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    loadGallery()
      .then((imgs) => alive && setItems(imgs))
      .catch(() => alive && setErr('Failed to load gallery.'));
    return () => {
      alive = false;
    };
  }, []);

  return (
    <main className="min-h-[80svh] bg-ink text-bone">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-extrabold text-copper mb-2">Gallery</h1>
        <p className="text-white/60 mb-8">Swipe or scroll horizontally.</p>

        {err ? <div className="text-red-400 mb-4">{err}</div> : null}

        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
          {items.map((img, i) => (
            <article
              key={i}
              className="shrink-0 w-[280px] h-[360px] rounded-3xl bg-white/5 border border-white/10 shadow-2xl snap-start overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.caption || `Gallery ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
