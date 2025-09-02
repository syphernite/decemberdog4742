import React, { useRef, useState } from 'react';
import { ArrowLeft, ExternalLink, Instagram, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaSnapchatGhost } from 'react-icons/fa';

const ClothingPage = () => {
  // Spotlight cursor effect
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouse({ x, y });
  };

  // Simple hover tilt for cards
  const handleCardMove = (
    e: React.MouseEvent<HTMLDivElement>,
    el: HTMLDivElement | null
  ) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const tiltX = (py - 0.5) * -10;
    const tiltY = (px - 0.5) * 10;
    el.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-6px)`;
  };

  const resetCard = (el: HTMLDivElement | null) => {
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  const pub = (p: string) => `${import.meta.env.BASE_URL}${p}`.replace(/\/{2,}/g, '/');

  const products = [
    {
      id: 'pink-shirt',
      name: 'Pink Logo Tee',
      price: '$28',
      img: 'pink_shirt.png',
      href: 'https://staksclothing.com',
      float: 'animate-[float_5s_ease-in-out_infinite]',
      accent: 'from-pink-600/30 to-fuchsia-700/30',
      ring: 'ring-pink-500/60',
      glow: 'shadow-[0_0_40px_rgba(236,72,153,0.35)]',
      badge: 'bg-pink-500/20 text-pink-300'
    },
    {
      id: 'red-shirt',
      name: 'Crimson Script Tee',
      price: '$28',
      img: 'red_shirt.png',
      href: 'https://staksclothing.com',
      float: 'animate-[float_6s_ease-in-out_infinite]',
      accent: 'from-red-600/30 to-rose-700/30',
      ring: 'ring-red-500/60',
      glow: 'shadow-[0_0_40px_rgba(239,68,68,0.35)]',
      badge: 'bg-red-500/20 text-red-300'
    },
    {
      id: 'gray-jacket',
      name: 'Graphite Zip Jacket',
      price: '$56',
      img: 'gray_jacket.png',
      href: 'https://staksclothing.com',
      float: 'animate-[float_7s_ease-in-out_infinite]',
      accent: 'from-slate-500/30 to-zinc-700/30',
      ring: 'ring-slate-400/60',
      glow: 'shadow-[0_0_40px_rgba(148,163,184,0.35)]',
      badge: 'bg-slate-400/20 text-slate-200'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Background grid + spotlight */}
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
      <main
        onMouseMove={handleMouseMove}
        className="flex-1 px-6 pb-20 max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {products.map((p) => (
            <div key={p.id} className="relative">
              {/* Accent glow */}
              <div
                className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${p.accent} blur-2xl opacity-30`}
              />

              {/* Card */}
              <div
                className={`relative rounded-3xl border border-white/10 ring-1 ${p.ring} bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-6 md:p-8 group transition-all duration-300 ${p.glow}`}
                onMouseLeave={(e) => resetCard(e.currentTarget)}
                onMouseMove={(e) => handleCardMove(e, e.currentTarget)}
              >
                <div className="relative w-full aspect-[3/4] flex items-center justify-center">
                  <img
                    src={pub(p.img)}
                    alt={p.name}
                    className={`max-h-full max-w-full object-contain drop-shadow-2xl transition-transform duration-500 ${p.float} group-hover:scale-[1.03]`}
                    draggable={false}
                  />

                  {/* Subtle reflection */}
                  <div className="pointer-events-none absolute inset-x-8 bottom-2 h-8 bg-gradient-to-t from-white/10 to-transparent blur-md rounded-full opacity-70" />
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {p.name}
                    </h3>
                    <p className="text-sm text-gray-400">{p.price}</p>
                  </div>

                  <span className={`text-xs px-3 py-1 rounded-full ${p.badge}`}>
                    Limited
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Buy on Staks
                  </a>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-12 md:mt-16">
          <a
            href="https://staksclothing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center rounded-2xl border-2 border-yellow-400 text-yellow-400 py-4 md:py-5 tracking-wide hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            Shop the Full Collection
          </a>
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

      {/* Keyframes for float */}
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
