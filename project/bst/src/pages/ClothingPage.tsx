import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Instagram, ShoppingCart, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaSnapchatGhost } from 'react-icons/fa';

type Product = {
  id: string;
  name: string;
  price: string;
  images: string[]; // filenames only; we map through pub() at render
  accent: string;
  ring: string;
  glow: string;
  badge: string;
  float: string;
  sizes?: string[];
  desc?: string;
};

const ClothingPage = () => {
  // spotlight bg
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouse({ x, y });
  };

  // helpers
  const pub = (p: string) => `${import.meta.env.BASE_URL}${p}`.replace(/\/{2,}/g, '/');

  // products
  const products: Product[] = [
    {
      id: 'pink-shirt',
      name: 'Pink Logo Tee',
      price: '$28',
      images: [
        'pink_shirt.png',
        'pink_shirt_2.png',
        'pink_shirt_3.png'
      ],
      float: 'animate-[float_5s_ease-in-out_infinite]',
      accent: 'from-pink-600/30 to-fuchsia-700/30',
      ring: 'ring-pink-500/60',
      glow: 'shadow-[0_0_40px_rgba(236,72,153,0.35)]',
      badge: 'bg-pink-500/20 text-pink-300',
      sizes: ['S','M','L','XL'],
      desc: 'Soft-weight cotton tee with front logo. Classic fit.'
    },
    {
      id: 'red-shirt',
      name: 'Crimson Script Tee',
      price: '$28',
      images: [
        'red_shirt.png',
        'red_shirt_2.png',
        'red_shirt_3.png'
      ],
      float: 'animate-[float_6s_ease-in-out_infinite]',
      accent: 'from-red-600/30 to-rose-700/30',
      ring: 'ring-red-500/60',
      glow: 'shadow-[0_0_40px_rgba(239,68,68,0.35)]',
      badge: 'bg-red-500/20 text-red-300',
      sizes: ['S','M','L','XL'],
      desc: 'Mid-weight tee with script graphic. True to size.'
    },
    {
      id: 'gray-jacket',
      name: 'Graphite Zip Jacket',
      price: '$56',
      images: [
        'gray_jacket.png',
        'gray_jacket_2.png',
        'gray_jacket_3.png'
      ],
      float: 'animate-[float_7s_ease-in-out_infinite]',
      accent: 'from-slate-500/30 to-zinc-700/30',
      ring: 'ring-slate-400/60',
      glow: 'shadow-[0_0_40px_rgba(148,163,184,0.35)]',
      badge: 'bg-slate-400/20 text-slate-200',
      sizes: ['S','M','L','XL'],
      desc: 'Lightweight zip jacket with rib cuffs. Relaxed fit.'
    }
  ];

  // modal state
  const [open, setOpen] = useState<null | Product>(null);
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState<string | null>(null);

  // reset on open change
  useEffect(() => {
    if (open) {
      setIndex(0);
      setSize(open.sizes?.[0] ?? null);
      setQty(1);
    }
  }, [open]);

  // keyboard nav in modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, index]);

  const nextImage = () => {
    if (!open) return;
    setIndex((i) => (i + 1) % open.images.length);
  };
  const prevImage = () => {
    if (!open) return;
    setIndex((i) => (i - 1 + open.images.length) % open.images.length);
  };

  const addToBag = () => {
    if (!open) return;
    setToast(`${open.name} • ${size ?? 'One Size'} • x${qty} added`);
    setTimeout(() => setToast(null), 2200);
  };

  // graceful image fallback: hide broken thumbs
  const [hidden, setHidden] = useState<Record<string, boolean>>({});
  const hideIfBroken = (key: string) => () =>
    setHidden((h) => ({ ...h, [key]: true }));

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Background */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 60%)'
        }}
      />
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />
      <div className="fixed inset-0 -z-20 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,_#ffffff_1px,_transparent_1px)] [background-size:24px_24px]" />

      {/* Toast */}
      {toast && (
        <div className="fixed top-6 right-6 z-[60] rounded-xl bg-white/10 text-white backdrop-blur border border-white/15 px-4 py-3">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm">{toast}</span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 z-50 p-6">
        <Link
          to="/select"
          className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span className="font-medium">BACK</span>
        </Link>
      </nav>

      {/* Header */}
      <header className="pt-24 pb-6 text-center px-6">
        <img
          src={pub('staks_logo.png')}
          alt="Staks Logo"
          className="h-96 md:h-[32rem] mx-auto mb-4"
        />
        <h1 className="text-5xl md:text-7xl font-light tracking-[0.4em] mb-2">
          STAKS
        </h1>
        <p className="text-base md:text-lg text-gray-300 tracking-widest">
          CLOTHING COLLECTION
        </p>
      </header>

      {/* Products */}
      <main className="flex-1 px-6 pb-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {products.map((p) => (
            <div key={p.id} className="relative">
              {/* Accent glow */}
              <div
                className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${p.accent} blur-2xl opacity-30`}
              />

              {/* Card */}
              <button
                type="button"
                onClick={() => setOpen(p)}
                className={`relative w-full text-left rounded-3xl border border-white/10 ring-1 ${p.ring} bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-6 md:p-8 group transition-all duration-300 ${p.glow} hover:translate-y-[-2px]`}
              >
                <div className="relative w-full aspect-[3/4] flex items-center justify-center">
                  <img
                    src={pub(p.images[0])}
                    alt={p.name}
                    className={`max-h-full max-w-full object-contain drop-shadow-2xl transition-transform duration-500 ${p.float} group-hover:scale-[1.03]`}
                    draggable={false}
                  />
                  <div className="pointer-events-none absolute inset-x-8 bottom-2 h-8 bg-gradient-to-t from-white/10 to-transparent blur-md rounded-full opacity-70" />
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">{p.name}</h3>
                    <p className="text-sm text-gray-400">{p.price}</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${p.badge}`}>
                    View
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto flex justify-center space-x-6">
          <a
            href="https://instagram.com/staks.tn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-yellow-400 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://t.snapchat.com/RInsoZeO"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Snapchat"
            className="flex items-center space-x-2 hover:text-yellow-400 transition-colors"
          >
            <FaSnapchatGhost className="w-6 h-6" />
          </a>
        </div>
      </footer>

      {/* Product Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50"
          aria-modal="true"
          role="dialog"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          />
          {/* panel */}
          <div className="relative mx-auto my-8 w-[min(1100px,92vw)] max-h-[88vh] overflow-hidden rounded-3xl border border-white/15 bg-zinc-900 text-white shadow-2xl">
            {/* close */}
            <button
              onClick={() => setOpen(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-white/10 hover:bg-white/15"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* gallery */}
              <div className="relative bg-gradient-to-b from-white/5 to-transparent p-4 md:p-6">
                <div className="relative aspect-square rounded-2xl bg-black/40 flex items-center justify-center overflow-hidden">
                  {/* main image */}
                  <img
                    key={index}
                    src={pub(open.images[index])}
                    alt={`${open.name} ${index + 1}`}
                    className="max-h-full max-w-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                    onError={hideIfBroken(`${open.id}-${index}`)}
                    draggable={false}
                  />

                  {/* arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/10 hover:bg-white/20"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/10 hover:bg-white/20"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* thumbs */}
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {open.images.map((fn, i) => {
                    const key = `${open.id}-thumb-${i}`;
                    if (hidden[`${open.id}-${i}`]) return null; // hide if main variant broken
                    return (
                      <button
                        key={key}
                        onClick={() => setIndex(i)}
                        className={`aspect-square rounded-xl overflow-hidden border ${
                          index === i ? 'border-yellow-400' : 'border-white/10'
                        } bg-black/40`}
                        aria-label={`Image ${i + 1}`}
                      >
                        <img
                          src={pub(fn)}
                          alt={`thumb ${i + 1}`}
                          className="h-full w-full object-contain"
                          onError={hideIfBroken(`${open.id}-${i}`)}
                          draggable={false}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* details */}
              <div className="p-6 md:p-8 flex flex-col">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold">{open.name}</h2>
                  <p className="text-yellow-300 mt-1">{open.price}</p>
                  {open.desc && (
                    <p className="text-sm text-gray-300 mt-3 leading-relaxed">{open.desc}</p>
                  )}
                </div>

                {/* selectors */}
                <div className="mt-6 space-y-5">
                  {open.sizes && open.sizes.length > 0 && (
                    <div>
                      <div className="text-sm text-gray-300 mb-2">Size</div>
                      <div className="flex flex-wrap gap-2">
                        {open.sizes.map((s) => (
                          <button
                            key={s}
                            onClick={() => setSize(s)}
                            className={`px-3 py-2 rounded-xl border ${
                              size === s
                                ? 'border-yellow-400 text-yellow-300'
                                : 'border-white/15 text-white/80 hover:border-white/30'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="text-sm text-gray-300 mb-2">Quantity</div>
                    <div className="inline-flex items-center rounded-xl border border-white/15 overflow-hidden">
                      <button
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        className="px-3 py-2 hover:bg-white/10"
                        aria-label="Decrease"
                      >
                        -
                      </button>
                      <div className="px-4 py-2 select-none">{qty}</div>
                      <button
                        onClick={() => setQty((q) => Math.min(10, q + 1))}
                        className="px-3 py-2 hover:bg-white/10"
                        aria-label="Increase"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* actions */}
                <div className="mt-8 flex flex-col gap-3">
                  <button
                    onClick={addToBag}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Bag
                  </button>
                  <button
                    onClick={() => setOpen(null)}
                    className="inline-flex items-center justify-center px-4 py-3 rounded-2xl border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition-all duration-300"
                  >
                    Continue Browsing
                  </button>
                  <div className="text-xs text-gray-400 mt-2">
                    Ships in 2–4 business days. Free returns within 14 days.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Keyframes */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default ClothingPage;
