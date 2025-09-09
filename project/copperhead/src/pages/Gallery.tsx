
import React, { useEffect, useRef, useState } from 'react';
import { loadGallery, GalleryImage } from '../lib/gallery';
export function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => { loadGallery().then(setImages); }, []);
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const cards = Array.from(el.querySelectorAll<HTMLElement>('.bay-card'));
      const center = el.scrollLeft + el.clientWidth / 2;
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2 - el.getBoundingClientRect().left;
        const distance = Math.abs(cx - el.clientWidth / 2);
        card.classList.toggle('is-center', distance < rect.width * 0.25);
      });
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, [images]);
  return (
    <section className="min-h-[92svh] bg-ink text-bone">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <h1 className="text-4xl md:text-5xl font-black copper-text">Gallery</h1>
        <p className="mt-2 text-white/70">Swipe or scroll horizontally.</p>
        <div className="bay-window mt-8">
          <div ref={trackRef} className="bay-track">
            {images.map((img, i) => (
              <figure key={i} className="bay-card">
                <img className="bay-img" src={img.src} alt={img.caption || `Gallery ${i+1}`} loading="lazy" />
                <figcaption className="bay-caption">{img.caption || ''}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="mt-10 text-sm text-white/70">
          Want your cut featured? Tag <span className="text-white">@copperheadcutz</span> or send to our Facebook inbox.
        </div>
      </div>
    </section>
  );
}
