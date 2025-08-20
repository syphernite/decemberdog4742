import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Instagram, TrendingUp, RefreshCw, ShoppingCart } from 'lucide-react';

const SneakersPage = () => {
  const features = [
    { icon: ShoppingCart, title: 'BUY', description: 'Curated selection of authentic sneakers' },
    { icon: TrendingUp, title: 'SELL', description: 'Get top dollar for your collection' },
    { icon: RefreshCw, title: 'TRADE', description: 'Exchange kicks with fellow collectors' }
  ];

  const [sneakers, setSneakers] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() { setSneakers([]); }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 z-50 p-6">
        <Link
          to="/select"
          className="flex items-center text-white hover:text-green-400 transition-colors duration-300"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span className="font-medium">BACK</span>
        </Link>
      </nav>

      {/* Hero */}
      <div className="relative h-screen">
        <div
          className="h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <ShoppingBag className="w-20 h-20 text-green-400 mx-auto mb-6" />
            <h1 className="text-6xl md:text-8xl font-bold mb-6">BST</h1>
            <p className="text-2xl md:text-3xl text-green-400 mb-4 font-bold">EXCLUSIVE</p>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Your destination for rare kicks and streetwear culture</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">HOW WE OPERATE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="text-center p-8 border border-gray-700 hover:border-green-400 transition-colors duration-300">
                <f.icon className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-gray-400 text-lg">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inventory placeholder */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">CURRENT INVENTORY</h2>
          {sneakers.length === 0 ? (
            <p className="text-center text-gray-400">Inventory will appear here when linked to Google Sheets.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sneakers.map((s, i) => (
                <div key={i} className="group">
                  <div className="aspect-square bg-gray-800 mb-4 overflow-hidden">
                    <img src={s.imageURL} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                  <div className="flex justify-between items-center text-gray-400">
                    <span>Size {s.size}</span>
                    <span className="text-green-400 font-bold text-lg">{s.price}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Socials */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">STAY CONNECTED</h2>
          <div className="space-y-6">
            <div>
              <a
                href="https://instagram.com/bst.exclusive"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 hover:scale-105 transition-transform"
              >
                <Instagram className="w-8 h-8 text-green-400" />
                <span className="text-green-400 font-semibold">@bst.exclusive</span>
              </a>
            </div>
            <div>
              <a
                href="https://t.snapchat.com/RInsoZeO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 hover:scale-105 transition-transform"
              >
                <span className="text-green-400 font-semibold">@bstexclusive</span>
                <span className="text-gray-400">(Snapchat)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="text-gray-400">BST Exclusive © 2025</div>
          <div className="flex space-x-4">
            <a href="https://instagram.com/bst.exclusive" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-green-400 transition-colors" />
            </a>
            <a href="https://t.snapchat.com/RInsoZeO" target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="text-gray-400 hover:text-green-400 transition-colors">
              @bstexclusive
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SneakersPage;
