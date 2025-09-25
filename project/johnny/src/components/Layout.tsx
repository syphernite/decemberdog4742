import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/** Ensures Header/Footer wrap all routes, adds smooth hash scrolling */
export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Top on first load without hash
  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Smooth-scroll to in-page anchors with header offset
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
