import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shirt, ExternalLink, Instagram } from 'lucide-react';

const ClothingPage = () => {
  const products = [
    { name: 'Essential Hoodie', category: 'Hoodies', price: '$85' },
    { name: 'Vintage Wash Tee', category: 'T-Shirts', price: '$35' },
    { name: 'Cargo Pants', category: 'Bottoms', price: '$120' },
    { name: 'Oversized Crewneck', category: 'Sweaters', price: '$75' },
    { name: 'Distressed Jeans', category: 'Denim', price: '$95' },
    { name: 'Graphic Tee', category: 'T-Shirts', price: '$40' }
  ];

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 z-50 p-6">
        <Link 
          to="/" 
          className="flex items-center text-stone-700 hover:text-stone-900 transition-colors duration-300"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span className="font-medium">BACK</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
          }}
        >
          <div className="absolute inset-0 bg-stone-900 bg-opacity-40"></div>
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div className="text-white">
              <Shirt className="w-20 h-20 text-stone-200 mx-auto mb-6" />
              <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-wider">STAKS</h1>
              <p className="text-xl md:text-2xl text-stone-200 mb-8 font-light tracking-widest">
                CLOTHING
              </p>
              <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Elevated streetwear with a minimalist approach. 
                Every piece tells a story of quality and craftsmanship.
              </p>
              <a 
                href="https://staksclothing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-4 border-2 border-stone-200 text-stone-200 font-medium tracking-wide hover:bg-stone-200 hover:text-stone-900 transition-all duration-300"
              >
                SHOP COLLECTION
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-wide">LOOKBOOK</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group">
                <div className="aspect-[3/4] bg-stone-200 mb-6 overflow-hidden">
                  <img 
                    src={`https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-stone-500 font-medium tracking-widest uppercase">{product.category}</p>
                  <h3 className="text-xl font-light">{product.name}</h3>
                  <p className="text-stone-700 font-medium">{product.price}</p>
                </div>
                <button className="w-full mt-4 py-3 border border-stone-300 text-stone-700 font-medium tracking-wide hover:border-stone-900 hover:text-stone-900 transition-all duration-300">
                  SHOP NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-12 tracking-wide">OUR STORY</h2>
          <div className="prose prose-lg prose-stone mx-auto font-light leading-relaxed">
            <p className="text-xl mb-8">
              STAKS was born from the belief that clothing should be an extension of your authentic self. 
              We create pieces that transcend trends, focusing on timeless design and exceptional quality.
            </p>
            <p className="text-lg text-stone-600 mb-8">
              Every garment is carefully crafted to embody our philosophy: less noise, more substance. 
              We believe in the power of simplicity and the beauty found in thoughtful details.
            </p>
            <p className="text-lg text-stone-600">
              From concept to creation, each piece reflects our commitment to sustainable practices 
              and ethical production. STAKS isn't just clothing—it's a statement of values.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-Promotion */}
      <section className="py-20 px-6 bg-stone-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-light mb-6 tracking-wide">COMPLETE YOUR STYLE</h3>
          <p className="text-xl text-stone-300 mb-8 font-light">
            Fresh threads deserve a fresh cut
          </p>
          <Link 
            to="/barber"
            className="inline-block px-8 py-3 border border-stone-300 text-stone-300 hover:bg-stone-300 hover:text-stone-800 transition-all duration-300 font-medium tracking-wide"
          >
            BOOK AT BST CUTS
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-stone-900 text-stone-400">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-white text-lg font-light tracking-widest mb-2">STAKS CLOTHING</h4>
              <p className="text-sm">Elevated streetwear, minimalist approach</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="https://staksclothing.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <ExternalLink className="w-6 h-6" />
              </a>
              <Instagram className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
          <div className="border-t border-stone-700 mt-8 pt-8 text-center text-sm">
            © 2025 Staks Clothing. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClothingPage;