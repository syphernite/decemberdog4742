import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import OurStoryPage from "./pages/OurStoryPage";
import UniversalDemoCTA from "./components/UniversalDemoCTA";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
        </Routes>
      </main>
      <Footer />
      {/* Floating CTA visible everywhere */}
      <UniversalDemoCTA />
    </div>
  );
}

export default App;
