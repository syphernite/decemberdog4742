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
  accent: string;   // gradient start color class
  accentTo: string; // gradient end color class
  badge: string;    // badge color classes
};

const pub = (p: string) => `${import.meta.env.BASE_URL}${p}`.replace(/\/{2,}/g, '/');

const products: Product[] = [
  {
    id: 'pink-shirt',
    name: 'Pink Logo Tee',
    price: '$28',
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
    price: '$28',
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
    price: '$56',
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
    price: '$42',
    images: ['bst_pants.png', 'bst_pants2.png', 'bst_pants3.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    desc: 'Relaxed fit pants with elastic waistband and embroidered logo.',
    accent: 'from-emerald-600/20',
    accentTo: 'to-green-700/10',
    badge: 'bg-emerald-500/20 text-emerald-300'
  }
];

const ClothingPage = () => {
  // modal state
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
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 z-40 p-6">
        <Link to="/select" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span className="font-medium">BACK</span>
        </Link>
      </nav>

      {/* Header */}
      <header className="pt-24 pb-6 text-center px-6">
        <img src={pub('staks_logo.png')} alt="Staks Logo" className="h-96 md:h-[32rem] mx-auto mb-4" />
        <h1 className="text-5xl md:text-7xl font-light tracking-[0.4em] mb-2">STAKS</h1>
        <p className="text-base md:text-lg text-gray-300 tracking-widest">CLOTHING COLLECTION</p>
      </header>

      {/* Products */}
      <main className="flex-1 px-6 pb-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {products.map((p) => (
            <div key={p.id} className="relative">
              <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${p.accent} ${p.accentTo} blur-xl opacity-30`} />
              <button
                type="button"
                onClick={() => setOpen(p)}
                className="relative w-full text-left rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 md:p-8 hover:-translate-y-0.5 transition-transform"
              >
                <div className="relative w-full aspect-[3/4] flex items-center justify-center">
                  <img
                    src={pub(p.images[0])}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain drop-shadow-2xl select-none"
                    draggable={false}
                  />
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
      <footer className="py-10 px-6 border-t border-gray-800">
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
          <div className="relative mx-auto my-8 w-[min(1100px,92vw)] max-h-[88vh] overflow-hidden rounded-3xl border border-white/15 bg-zinc-900 text-white shadow-2xl">
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

                <div className="text-xs text-gray-400 mt-4">
                  Ships in 2–4 business days.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClothingPage;
