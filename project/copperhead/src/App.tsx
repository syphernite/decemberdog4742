// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Prices from './pages/Prices';
import Contact from './pages/Contact';
import GalleryPage from './pages/Gallery';
import FreeCutsPage from './pages/FreeCuts';
import Book from './pages/Book';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-svh flex flex-col bg-ink">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/freecuts" element={<FreeCutsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
