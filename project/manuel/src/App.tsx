import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import FindUs from './components/FindUs';
import Footer from './components/Footer';
import UniversalDemoCTA from './components/UniversalDemoCTA';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Always start at top on first mount / refresh
  useEffect(() => {
    try {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
    } catch {}
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  // Scroll to top on reload without a hash
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  // Smooth scrolling for hash links and on initial hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) setTimeout(handleHashChange, 0);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden overflow-y-hidden scrollbar-hide">
      {/* Progress Bar above header touch area */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-primary z-[70] origin-left"
        style={{ scaleX }}
      />

      <Header />
      <main>
        <Hero />
        <Menu />
        <About />
        <FindUs />
      </main>
      <Footer />

      {/* Floating universal CTA modal, visible on all sections */}
      <UniversalDemoCTA />
    </div>
  );
}

export default App;
