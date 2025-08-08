import React, { useEffect, useState } from 'react';
import { ChevronUp, MapPin, Phone, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Specials from './components/Specials';
import Gallery from './components/Gallery';
import FindUs from './components/FindUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Menu />
        <Specials />
        <Gallery />
        <FindUs />
        <Contact />
      </main>

      <Footer />

      {/* Floating Order Now Button - Mobile Only */}
      <button className="fixed bottom-6 right-6 lg:hidden z-40 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-sm animate-pulse">
        Order Now
      </button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App;