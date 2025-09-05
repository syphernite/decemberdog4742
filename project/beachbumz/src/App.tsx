import React, { useEffect } from "react";
import { HashRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import "./index.css";

function ScrollToTop() {
  const { pathname, search, hash } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname, search, hash]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <main className="pt-16 md:pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
