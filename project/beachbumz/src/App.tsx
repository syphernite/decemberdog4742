import React, { useEffect } from "react";
import { HashRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";

// keep your existing pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Convert <a href="/..."> into client-side hash navigation without editing page files
function LinkInterceptor() {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: Event) => {
      const path = (node: Element | null): string | null => {
        let el: Element | null = node;
        while (el) {
          if (el instanceof HTMLAnchorElement && el.getAttribute("href")) {
            return el.getAttribute("href");
          }
          el = el.parentElement;
        }
        return null;
      };

      const target = e.target as Element | null;
      const href = path(target);
      if (!href) return;

      // ignore external, hash-only, mailto, tel, http(s)
      if (/^(https?:|mailto:|tel:|#)/i.test(href)) return;

      // internal paths like "/", "/menu", "/about", "/contact"
      if (href.startsWith("/")) {
        e.preventDefault();
        const clean = href.replace(/\/+/g, "/"); // normalize slashes
        const route = clean === "/" ? "/" : clean; // HashRouter expects app-relative paths
        navigate(route);
      }
    };

    document.addEventListener("click", handler, true); // capture phase to beat default
    return () => document.removeEventListener("click", handler, true);
  }, [navigate]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <LinkInterceptor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
