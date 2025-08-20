import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scissors, Clock, DollarSign, Instagram } from 'lucide-react';

const BarberPage = () => {
  const services = [
    { name: 'Classic Cut', price: '$25', duration: '30 min' },
    { name: 'Fade & Style', price: '$35', duration: '45 min' },
    { name: 'Beard Trim', price: '$20', duration: '20 min' },
    { name: 'Full Service', price: '$45', duration: '60 min' }
  ];

  const portfolio = [
    'https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1570808/pexels-photo-1570808.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1805602/pexels-photo-1805602.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1570809/pexels-photo-1570809.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1805603/pexels-photo-1805603.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 z-50 p-6">
        <Link
          to="/select"
          className="flex items-center text-white hover:text-yellow-400 transition-colors duration-300"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span className="font-medium">BACK</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div>
              <Scissors className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">BST CUTS</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Premium cuts, classic style, modern techniques
              </p>
              <a href="https://bstcuts.square.site" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-yellow-400 text-black font-bold text-lg hover:bg-yellow-500 transition-colors duration-300">
                  BOOK APPOINTMENT
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">PORTFOLIO</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {portfolio.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden group">
                <img
                  src={image}
                  alt={`Haircut ${index + 1}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 border border-gray-200 hover:border-yellow-400 transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                <div className="flex justify-between items-center text-lg">
                  <span className="flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-yellow-600" />
                    {service.price}
                  </span>
                  <span className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    {service.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Promotion */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">COMPLETE THE LOOK</h3>
          <p className="text-xl text-gray-400 mb-8">Fresh cut deserves fresh threads</p>
          <Link
            to="/clothing"
            className="inline-block px-8 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 font-semibold"
          >
            SHOP STAKS CLOTHING
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="text-gray-400">@bst.cuts</div>
          <div className="flex space-x-4">
            <a href="https://instagram.com/bst.cuts" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BarberPage;
