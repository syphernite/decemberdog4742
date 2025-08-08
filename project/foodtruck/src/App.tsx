import React, { useEffect, useState, Suspense } from 'react';
import { ChevronUp } from 'lucide-react';
import Navigation from './components/Navigation';
import './App.css';

// Above-the-fold
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));

// Below-the-fold (lazy)
const Menu = React.lazy(() => import('./components/Menu'));
const Specials = React.lazy(() => import('./components/Specials'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const FindUs = React.lazy(() => import('./components/FindUs'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      <Navigation />

      <Suspense fallback={null}>
        <Hero />
        <About />
        <Menu />
        <Specials />
        <Gallery />
        <FindUs />
        <Contact />
        <Footer />
      </Suspense>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 bg-gray-800 text-white rounded-full p-3 shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App;
