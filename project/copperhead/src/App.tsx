import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Book } from './pages/Book';
import { Prices } from './pages/Prices';
import { Gallery } from './pages/Gallery';
import { FreeCuts } from './pages/FreeCuts';
import { Contact } from './pages/Contact';
import { JsonLdSchema } from './components/JsonLdSchema';

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <JsonLdSchema />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/freecuts" element={<FreeCuts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
