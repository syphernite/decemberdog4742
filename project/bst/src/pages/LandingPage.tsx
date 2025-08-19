import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, ShoppingBag, Shirt } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-stone-900">
      {/* Upside-down T Layout */}
      <div className="grid grid-rows-2 h-screen">
        {/* Top Row - Split (Barber | Sneakers) */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Barber Section */}
          <Link to="/barber" className="group relative overflow-hidden">
            <div 
              className="h-full bg-cover bg-center relative"
              style={{
                backgroundImage: 'url("https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-50 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                <Scissors className="w-16 h-16 mb-4 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center tracking-tight">BARBER</h2>
                <p className="text-xl md:text-2xl mb-6 text-center opacity-90">BST CUTS</p>
                <div className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 font-semibold tracking-wide">
                  BOOK NOW
                </div>
              </div>
            </div>
          </Link>

          {/* Sneakers Section */}
          <Link to="/sneakers" className="group relative overflow-hidden">
            <div 
              className="h-full bg-cover bg-center relative"
              style={{
                backgroundImage: 'url("https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-60 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                <ShoppingBag className="w-16 h-16 mb-4 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center tracking-tight">SNEAKERS</h2>
                <p className="text-xl md:text-2xl mb-6 text-center opacity-90">BUY • SELL • TRADE</p>
                <div className="px-8 py-3 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 font-semibold tracking-wide">
                  SHOP NOW
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom Row - Full Width (Clothing) */}
        <Link to="/clothing" className="group relative overflow-hidden">
          <div 
            className="h-full bg-cover bg-center relative"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
            }}
          >
            <div className="absolute inset-0 bg-stone-900 bg-opacity-70 group-hover:bg-opacity-60 transition-all duration-500"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
              <Shirt className="w-20 h-20 mb-6 text-stone-300 group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-5xl md:text-8xl font-bold mb-6 text-center tracking-tight">STAKS</h2>
              <p className="text-2xl md:text-3xl mb-8 text-center opacity-90 tracking-widest">CLOTHING</p>
              <div className="px-12 py-4 border-2 border-stone-300 text-stone-300 hover:bg-stone-300 hover:text-stone-900 transition-all duration-300 font-semibold tracking-wide text-lg">
                EXPLORE COLLECTION
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-4 text-stone-400 text-sm">
        @bst.exclusive
      </div>
    </div>
  );
};

export default LandingPage;