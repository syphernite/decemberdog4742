import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import Artists from './pages/Artists';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Aftercare from './pages/Aftercare';
import Contact from './pages/Contact';

/**
 * Scroll to the very top on route path change.
 * Ignores hash-only changes so in-page anchors still work.
 * Instant behavior (no smooth scrolling).
 */
function ScrollToTopOnPathChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-ink-900 text-white">
      <Navigation />
      <ScrollToTopOnPathChange />
      <main className="min-h-[60vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/aftercare" element={<Aftercare />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
