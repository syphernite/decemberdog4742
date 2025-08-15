import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import FloatingBookButton from './components/FloatingBookButton';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Results from './pages/Results';
import SEO from './components/SEO';

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top only when the route (pathname) changes
    window.scrollTo(0, 0);
    requestAnimationFrame(() => window.scrollTo(0, 0));
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SEO />
      <Navbar />
      <FloatingBookButton />
      <BackToTop />

      {/* Scroll to top on real route changes; no anchor interception */}
      <ScrollToTopOnRouteChange />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
