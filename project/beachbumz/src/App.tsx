import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import FloatingOrderButton from './components/FloatingOrderButton';

/** Scroll to top on every route change (all pages) */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // if navigating to an in-page anchor, let the browser handle it
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-champagne">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <FloatingOrderButton />
    </div>
  );
}

export default App;
