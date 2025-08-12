import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  // initialize from localStorage or system
  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored === "true") setDarkMode(true);
    else if (stored === "false") setDarkMode(false);
    else setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  // apply/remove .dark on <html>
  useEffect(() => {
    if (darkMode === null) return;
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((v) => !v);

  if (darkMode === null) return null;

  return (
    <div className="zoom-desktop-only min-h-screen bg-transparent">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {/* keep galaxy visible under all content */}
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
