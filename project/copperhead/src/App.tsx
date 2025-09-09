// src/App.tsx
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Book } from './pages/Book';
import { Prices } from './pages/Prices';
import { Gallery } from './pages/Gallery';
import { FreeCuts } from './pages/FreeCuts';
import { Contact } from './pages/Contact';
import { JsonLdSchema } from './components/JsonLdSchema';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-charcoal text-bone">
        <JsonLdSchema />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/free-cuts" element={<FreeCuts />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback to Home on unknown routes or refresh */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
