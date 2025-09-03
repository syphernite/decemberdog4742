import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import site from "../content/site.json";

export default function Header() {
  const { pathname } = useLocation();
  const [solid, setSolid] = useState(false);

  const base = (import.meta as any).env.BASE_URL || "/";
  const logo = base + "images/logo.png";

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Nav = ({ to, label }: { to: string; label: string }) => (
    <Link
      to={to}
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
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt={site.name} className="w-10 h-10 object-contain" />
          <span className="hidden sm:block text-white font-semibold tracking-wide group-hover:opacity-90">
            Plaza Mexico
          </span>
        </Link>

        <nav className="hidden md:flex items-center">
          <Nav to="/" label="Home" />
          <Nav to="/menu" label="Menu" />
          <Nav to="/contact" label="Contact" />
        </nav>

        <a
          href={`tel:${site.phone}`}
          className="btn-call-now"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}
