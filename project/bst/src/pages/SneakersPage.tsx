import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Instagram, MessageCircle, TrendingUp, RefreshCw, ShoppingCart } from 'lucide-react';

const SneakersPage = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: 'BUY',
      description: 'Curated selection of authentic sneakers'
    },
    {
      icon: TrendingUp,
      title: 'SELL',
      description: 'Get top dollar for your collection'
    },
    {
      icon: RefreshCw,
      title: 'TRADE',
      description: 'Exchange kicks with fellow collectors'
    }
  ];

  const featuredSneakers = [
    { name: 'Air Jordan 1 High', size: '10.5', price: '$350' },
    { name: 'Yeezy 350 V2', size: '9', price: '$280' },
    { name: 'Travis Scott 1s', size: '11', price: '$1,200' },
    { name: 'Off-White Chicagos', size: '10', price: '$4,500' },
    { name: 'Dior 1s', size: '9.5', price: '$8,000' },
    { name: 'Fragment Jordans', size: '11.5', price: '$2,800' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 z-50 p-6">
        <Link 
          to="/" 
          className="flex items-center text-white hover:text-green-400 transition-colors duration-300"
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
            backgroundImage: 'url("https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div>
              <ShoppingBag className="w-20 h-20 text-green-400 mx-auto mb-6" />
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">BST</h1>
              <p className="text-2xl md:text-3xl text-green-400 mb-4 font-bold">EXCLUSIVE</p>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Your destination for rare kicks and streetwear culture
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-green-400 text-black font-bold text-lg hover:bg-green-500 transition-colors duration-300">
                  BROWSE INVENTORY
                </button>
                <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-bold text-lg hover:bg-green-400 hover:text-black transition-all duration-300">
                  SELL TO US
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">HOW WE OPERATE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 border border-gray-700 hover:border-green-400 transition-colors duration-300">
                <feature.icon className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Inventory */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">FEATURED KICKS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSneakers.map((sneaker, index) => (
              <div key={index} className="group">
                <div className="aspect-square bg-gray-800 mb-4 overflow-hidden">
                  <img 
                    src={`https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2`}
                    alt={sneaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{sneaker.name}</h3>
                <div className="flex justify-between items-center text-gray-400">
                  <span>Size {sneaker.size}</span>
                  <span className="text-green-400 font-bold text-lg">{sneaker.price}</span>
                </div>
                <button className="w-full mt-4 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 font-semibold">
                  VIEW DETAILS
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">STAY CONNECTED</h2>
          <p className="text-xl text-gray-400 mb-12">
            Follow us for the latest drops and exclusive deals
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <div className="flex items-center space-x-4">
              <Instagram className="w-8 h-8 text-green-400" />
              <div className="text-left">
                <p className="text-green-400 font-semibold">@bst.exclusive</p>
                <p className="text-gray-400">Instagram</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MessageCircle className="w-8 h-8 text-green-400" />
              <div className="text-left">
                <p className="text-green-400 font-semibold">@bstexclusive</p>
                <p className="text-gray-400">Snapchat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="text-gray-400">
            BST Exclusive © 2025
          </div>
          <div className="flex space-x-4">
            <Instagram className="w-6 h-6 text-gray-400 hover:text-green-400 transition-colors cursor-pointer" />
            <MessageCircle className="w-6 h-6 text-gray-400 hover:text-green-400 transition-colors cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SneakersPage;