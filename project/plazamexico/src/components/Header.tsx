import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import site from "../content/site.json";

export default function Header() {
  const { pathname } = useLocation();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  const base = (import.meta as any).env.BASE_URL || "/";
  const logo = base + "images/logo.png";

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const Nav = ({
    to,
    label,
    onClick
  }: {
    to: string;
    label: string;
    onClick?: () => void;
  }) => (
    <Link
      to={to}
      onClick={onClick}
      className={[
        "relative px-4 py-2 text-sm md:text-base transition-colors",
        pathname === to ? "text-white" : "text-neutral-200 hover:text-white"
      ].join(" ")}
    >
      {label}
      {pathname === to && (
        <span className="absolute left-4 right-4 -bottom-1 h-[3px] rounded-full bg-[var(--pm-red)] animate-grow" />
      )}
    </Link>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={[
          "mx-auto max-w-7xl px-4 py-3 flex items-center justify-between transition-all",
          solid ? "backdrop-blur bg-black/60 border-b border-white/10" : "bg-transparent"
        ].join(" ")}
      >
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt={(site as any).name ?? "Logo"} className="w-10 h-10 object-contain" />
          <span className="hidden sm:block text-white font-semibold tracking-wide group-hover:opacity-90">
            Plaza Mexico
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          <Nav to="/" label="Home" />
          <Nav to="/menu" label="Menu" />
          <Nav to="/contact" label="Contact" />
          <Nav to="/our-story" label="Our Story" />
        </nav>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-neutral-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <svg
            className={`h-6 w-6 ${open ? "hidden" : "block"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            className={`h-6 w-6 ${open ? "block" : "hidden"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={[
          "md:hidden fixed inset-0 z-40 transition-colors",
          open ? "bg-black/50 pointer-events-auto" : "bg-transparent pointer-events-none"
        ].join(" ")}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Mobile sheet */}
      <nav
        className={[
          "md:hidden fixed top-0 right-0 z-50 h-full w-72 max-w-[85vw] bg-black/90 backdrop-blur border-l border-white/10 transform transition-transform",
          open ? "translate-x-0" : "translate-x-full"
        ].join(" ")}
        role="dialog"
        aria-modal="true"
      >
        <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt={(site as any).name ?? "Logo"} className="w-9 h-9 object-contain" />
            <span className="text-white font-semibold">Plaza Mexico</span>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-neutral-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col px-2 py-2">
          <Nav to="/" label="Home" onClick={() => setOpen(false)} />
          <Nav to="/menu" label="Menu" onClick={() => setOpen(false)} />
          <Nav to="/contact" label="Contact" onClick={() => setOpen(false)} />
          <Nav to="/our-story" label="Our Story" onClick={() => setOpen(false)} />
        </div>

        <div className="mt-auto p-4 text-xs text-neutral-400 space-y-2">
          <div>Hours: {typeof site.hours === "string" ? site.hours : "See menu for hours"}</div>
          <div>Location: {site.address ?? "See contact page"}</div>
        </div>
      </nav>
    </header>
  );
}
