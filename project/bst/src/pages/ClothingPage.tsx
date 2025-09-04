import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Instagram, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaSnapchatGhost } from 'react-icons/fa';

type Product = {
  id: string;
  name: string;
  price: string;
  images: string[];
  sizes?: string[];
  desc?: string;
  accent: string;
  accentTo: string;
  badge: string;
};

const pub = (p: string) => `${import.meta.env.BASE_URL}${p}`.replace(/\/{2,}/g, '/');

const products: Product[] = [
  {
    id: 'pink-shirt',
    name: 'Pink Logo Tee',
    price: '$50',
    images: ['pink_shirt.png', 'pink_shirt2.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    desc: 'Soft-weight cotton tee with front logo. Classic fit.',
    accent: 'from-pink-600/20',
    accentTo: 'to-fuchsia-700/10',
    badge: 'bg-pink-500/20 text-pink-300'
  },
  {
    id: 'red-shirt',
    name: 'Crimson Script Tee',
    price: '$50',
    images: ['red_shirt.png', 'red_shirt2.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    desc: 'Mid-weight tee with script graphic. True to size.',
    accent: 'from-red-600/20',
    accentTo: 'to-rose-700/10',
    badge: 'bg-red-500/20 text-red-300'
  },
  {
    id: 'gray-jacket',
    name: 'Graphite Zip Jacket',
    price: '$100',
    images: ['gray_jacket.png', 'gray_jacket2.png', 'gray_jacket3.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    desc: 'Lightweight zip jacket with rib cuffs. Relaxed fit.',
    accent: 'from-slate-500/20',
    accentTo: 'to-zinc-700/10',
    badge: 'bg-slate-400/20 text-slate-200'
  },
  {
    id: 'bst-pants',
    name: 'BST Pants',
    price: '$70',
    images: ['bst_pants.png', 'bst_pants2.png', 'bst_pants3.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    desc: 'Relaxed fit pants with elastic waistband and embroidered logo.',
    accent: 'from-emerald-600/20',
    accentTo: 'to-green-700/10',
    badge: 'bg-emerald-500/20 text-emerald-300'
  }
];

const ClothingPage = () => {
  const [open, setOpen] = useState<null | Product>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (open) setIndex(0);
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % open.images.length);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + open.images.length) % open.images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const [hidden, setHidden] = useState<Record<string, boolean>>({});
  const hideIfBroken = (key: string) => () => setHidden((h) => ({ ...h, [key]: true }));

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* page background */}
      <style>{`
        @keyframes slow-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes floaty { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
        .card-tilt {
          transform-style: preserve-3d;
          transition: transform 300ms ease, box-shadow 300ms ease;
        }
        .group:hover .card-tilt {
          transform: rotateX(3deg) rotateY(-3deg) translateY(-4px);
        }
        .bg-weave {
          background:
            radial-gradient(60rem 60rem at 50% -10%, rgba(99,102,241,0.10), transparent 60%),
            radial-gradient(40rem 40rem at 100% 100%, rgba(16,185,129,0.08), transparent 60%),
            radial-gradient(50rem 50rem at 0% 100%, rgba(244,63,94,0.08), transparent 60%),
            #000;
        }
        .twinkle {
          background-image:
            radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.35) 0, rgba(255,255,255,0.0) 60%),
            radial-gradient(1px 1px at 80% 70%, rgba(255,255,255,0.25) 0, rgba(255,255,255,0.0) 60%),
            radial-gradient(1px 1px at 60% 20%, rgba(255,255,255,0.25) 0, rgba(255,255,255,0.0) 60%);
          animation: pulse 5s ease-in-out infinite;
          opacity: .25;
          filter: blur(0.2px);
        }
        @keyframes pulse { 0%,100% { opacity:.15 } 50% { opacity:.35 } }
      `}</style>

      {/* animated layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-weave"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-20%] -z-10 opacity-30"
        style={{
          background:
            'conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0.05), rgba(255,255,255,0) 25%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 75%)',
          animation: 'slow-rotate 60s linear infinite'
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 twinkle" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 z-40 p-6">
        <Link to="/select" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span className="font-medium">BACK</span>
        </Link>
      </nav>

      {/* Header */}
      <header className="pt-24 pb-6 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* 200% larger logo */}
          <img
            src={pub('staks_logo.png')}
            alt="Staks Logo"
            className="mx-auto mb-4 h-[20rem] md:h-[28rem]"
          />
          {/* Shorter STAKS (reduced tracking) */}
          <h1 className="text-5xl md:text-7xl font-light tracking-[0.1em] mb-2 mx-auto leading-none">
            STAKS
          </h1>
          <p className="text-base md:text-lg text-gray-300 tracking-widest">CLOTHING COLLECTION</p>
        </div>
      </header>

      {/* Products */}
      <main className="flex-1 px-6 pb-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {products.map((p, i) => (
            <div key={p.id} className="relative group [perspective:1200px]">
              <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${p.accent} ${p.accentTo} blur-xl opacity-30`} />
              <button
                type="button"
                onClick={() => setOpen(p)}
                className="relative w-full h-[520px] text-left rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 md:p-8 transition-transform flex flex-col card-tilt"
                style={{ animation: `floaty ${6 + i}s ease-in-out ${i * 0.4}s infinite` }}
              >
                <div className="relative w-full flex-1 flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={pub(p.images[0])}
                      alt={p.name}
                      className="max-h-full max-w-full object-contain drop-shadow-2xl select-none"
                      draggable={false}
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-x-8 bottom-2 h-8 bg-gradient-to-t from-white/10 to-transparent blur-md rounded-full opacity-70" />
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">{p.name}</h3>
                    <p className="text-sm text-gray-400">{p.price}</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${p.badge}`}>View</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-800/60">
        <div className="max-w-4xl mx-auto flex justify-center space-x-6">
          <a href="https://instagram.com/staks.tn" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow-400 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://t.snapchat.com/RInsoZeO" target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
            <FaSnapchatGhost className="w-6 h-6" />
          </a>
        </div>
      </footer>

      {/* Product Modal */}
      {open && (
        <div className="fixed inset-0 z-50" aria-modal="true" role="dialog">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(null)} />
          <div className="relative mx-auto my-8 w=[min(1100px,92vw)] max-w-[92vw] max-h-[88vh] overflow-hidden rounded-3xl border border-white/15 bg-zinc-900 text-white shadow-2xl">
            <button onClick={() => setOpen(null)} className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-white/10 hover:bg-white/15" aria-label="Close">
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Gallery */}
              <div className="relative p-4 md:p-6">
                <div className="relative aspect-square rounded-2xl bg-black/40 flex items-center justify-center overflow-hidden">
                  <img
                    key={index}
                    src={pub(open.images[index])}
                    alt={`${open.name} ${index + 1}`}
                    className="max-h-full max-w-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)] select-none"
                    onError={hideIfBroken(`${open.id}-${index}`)}
                    draggable={false}
                  />
                  <button
                    onClick={() => setIndex((i) => (i - 1 + open.images.length) % open.images.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/10 hover:bg-white/20"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setIndex((i) => (i + 1) % open.images.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/10 hover:bg-white/20"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-3 grid grid-cols-5 gap-2">
                  {open.images.map((fn, i) => {
                    const k = `${open.id}-thumb-${i}`;
                    if (hidden[`${open.id}-${i}`]) return null;
                    return (
                      <button
                        key={k}
                        onClick={() => setIndex(i)}
                        className={`aspect-square rounded-xl overflow-hidden border ${index === i ? 'border-yellow-400' : 'border-white/10'} bg-black/40`}
                        aria-label={`Image ${i + 1}`}
                      >
                        <img
                          src={pub(fn)}
                          alt={`thumb ${i + 1}`}
                          className="h-full w-full object-contain select-none"
                          onError={hideIfBroken(`${open.id}-${i}`)}
                          draggable={false}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 md:p-8 flex flex-col">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold">{open.name}</h2>
                  <p className="text-yellow-300 mt-1">{open.price}</p>
                  {open.desc && <p className="text-sm text-gray-300 mt-3 leading-relaxed">{open.desc}</p>}
                  {open.sizes && open.sizes.length > 0 && (
                    <div className="text-sm text-gray-300 mt-4">Sizes: {open.sizes.join(' • ')}</div>
                  )}
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => setOpen(null)}
                    className="inline-flex items-center justify-center px-4 py-3 rounded-2xl border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition-all duration-300"
                  >
                    Continue Browsing
                  </button>
                </div>

                <div className="text-xs text-gray-400 mt-4">Ships in 2–4 business days.</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClothingPage;
