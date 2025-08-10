import React, { useEffect } from "react";
import { HashRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css";

/** Scroll to top on route change */
function ScrollToTop() {
  const { pathname, search, hash } = useLocation();
  useEffect(() => {
    // always jump to top for new routes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, search, hash]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      {/* Fixed navbar height = 64px mobile, 80px desktop. Offset content with padding-top */}
      <Navbar />
      <main className="pt-16 md:pt-20 bg-slate-900 text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
