// src/App.tsx
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";

// lazy pages
const Home = React.lazy(() => import("./pages/Home"));
const ContactPage = React.lazy(() => import("./pages/Contact"));

function findAnchor(id: string): HTMLElement | null {
  const root = document.getElementById(id);
  if (!root) return null;
  // Prefer explicit anchor target if present
  const explicit = root.querySelector<HTMLElement>("[data-anchor-target='true']");
  if (explicit) return explicit;
  // Otherwise first heading inside the section
  const heading = root.querySelector<HTMLElement>("h1, h2, h3");
  return heading ?? root;
}

function headerOffsetPx(): number {
  const header = document.querySelector("header");
  return header instanceof HTMLElement ? header.offsetHeight + 12 : 84;
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  // Route change without hash → top
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  // Hash change → scroll to inner heading to avoid section padding gap
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const target = findAnchor(id);
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.scrollY - headerOffsetPx();
    requestAnimationFrame(() => window.scrollTo({ top: y, behavior: "smooth" }));
  }, [hash]);

  return null;
}

export default function App() {
  return (
    <>
      <Header />
      <ScrollManager />
      <React.Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </React.Suspense>
    </>
  );
}
