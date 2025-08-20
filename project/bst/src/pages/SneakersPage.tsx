import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, RefreshCw, ShoppingCart } from 'lucide-react';
import { FaSnapchatGhost, FaInstagram } from 'react-icons/fa';
import { SiCashapp, SiVenmo } from 'react-icons/si';

const pub = (p: string) => {
  const base = (import.meta as any).env?.BASE_URL ?? '/';
  return `${base}${p}`.replace(/\/{2,}/g, '/');
};

const NAV_H_REM = 3; // 3rem = 48px

const SneakersPage = () => {
  const features = [
    { icon: ShoppingCart, title: 'BUY', description: 'Curated selection of authentic sneakers' },
    { icon: TrendingUp, title: 'SELL', description: 'Get top dollar for your collection' },
    { icon: RefreshCw, title: 'TRADE', description: 'Exchange kicks' }
  ];

  const [sneakers, setSneakers] = useState<any[]>([]);
  useEffect(() => { setSneakers([]); }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#2C2C2C] text-white pt-12 md:pt-16">
      {/* Navigation (fixed height) */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-12 md:h-16 flex items-center px-4 md:px-6">
        <Link to="/select" className="inline-flex items-center text-white hover:text-red-500 transition-colors">
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span className="font-medium">BACK</span>
        </Link>
      </nav>

      {/* Hero: height = viewport minus nav */}
      <div
        className="relative w-full"
        style={{ minHeight: `calc(100dvh - ${NAV_H_REM}rem)` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pub('shoe-bg.png')})` }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6">BST</h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-red-500 mb-3 sm:mb-4 font-bold">EXCLUSIVE</p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Your destination for rare kicks and streetwear culture
          </p>
        </div>
      </div>

      {/* Features */}
      <section className="py-14 sm:py-16 px-4 md:px-6">
        <div className="max-w-6xl w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16">WHAT I DO</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {features.map((f, i) => (
              <div key={i} className="text-center p-6 sm:p-8 border border-gray-700 hover:border-red-500 transition-colors">
                <f.icon className="w-14 h-14 sm:w-16 sm:h-16 text-red-500 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{f.title}</h3>
                <p className="text-gray-300 sm:text-gray-400 text-base sm:text-lg">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inventory */}
      <section className="py-14 sm:py-16 px-4 md:px-6 bg-black">
        <div className="max-w-6xl w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16">CURRENT INVENTORY</h2>
          {sneakers.length === 0 ? (
            <p className="text-center text-gray-400 px-2">Inventory will appear here when linked to Google Sheets.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {sneakers.map((s, i) => (
                <div key={i} className="group">
                  <div className="aspect-square bg-gray-800 mb-4 overflow-hidden rounded">
                    <img src={s.imageURL} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{s.name}</h3>
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Size {s.size}</span>
                    <span className="text-red-500 font-bold text-lg">{s.price}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Socials */}
      <section className="py-14 sm:py-16 px-4 md:px-6 bg-gradient-to-r from-[#2C2C2C] to-black">
        <div className="max-w-4xl w-full mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12">STAY CONNECTED</h2>
          <div className="grid grid-cols-2 gap-5 sm:gap-8 justify-items-center">
            <a href="https://instagram.com/bst.exclusive" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
               className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors ring-1 ring-white/10 hover:ring-red-500">
              <FaInstagram className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </a>
            <a href="https://t.snapchat.com/RInsoZeO" target="_blank" rel="noopener noreferrer" aria-label="Snapchat"
               className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors ring-1 ring-white/10 hover:ring-red-500">
              <FaSnapchatGhost className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </a>
            <a href="https://venmo.com/u/Tony-Holmes-36" target="_blank" rel="noopener noreferrer" aria-label="Venmo"
               className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors ring-1 ring-white/10 hover:ring-red-500">
              <SiVenmo className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </a>
            <a href="https://cash.app/$tonyboyz007" target="_blank" rel="noopener noreferrer" aria-label="CashApp"
               className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors ring-1 ring-white/10 hover:ring-red-500">
              <SiCashapp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 border-t border-gray-800">
        <div className="max-w-4xl w-full mx-auto flex justify-between items-center">
          <div className="text-gray-300">BST Exclusive © 2025</div>
          <div className="flex space-x-3 sm:space-x-4">
            <FaInstagram className="w-6 h-6 text-gray-300 hover:text-red-500 transition-colors" />
            <FaSnapchatGhost className="w-6 h-6 text-gray-300 hover:text-red-500 transition-colors" />
            <SiVenmo className="w-6 h-6 text-gray-300 hover:text-red-500 transition-colors" />
            <SiCashapp className="w-6 h-6 text-gray-300 hover:text-red-500 transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SneakersPage;
