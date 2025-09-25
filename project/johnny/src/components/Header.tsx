import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Phone, Mail } from "lucide-react";

type NavItem = { name: string; to: string };
const NAV: NavItem[] = [
  { name: "Home", to: "/" },
  { name: "Portfolio", to: "/portfolio" },
  { name: "Contact", to: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close drawer & scroll top on route change
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash, location.search]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Brand */}
        <Link to="/" className="group inline-flex items-center gap-2">
          <span
            className="inline-block h-6 w-6 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-600 transition-transform group-hover:scale-110"
            aria-hidden
          />
          <span className="text-base font-bold tracking-wide text-white">
            Johnny
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "text-sm transition-colors",
                  isActive ? "text-white" : "text-white/70 hover:text-white",
                ].join(" ")
              }
              end={item.to === "/"}
            >
              {item.name}
            </NavLink>
          ))}

          {/* Socials */}
          <div className="ml-2 flex items-center gap-3">
            <a
              href="https://www.instagram.com/tattoojohnnyatl/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-white/70 transition hover:text-white"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="tel:+1-000-000-0000"
              aria-label="Call"
              className="text-white/70 transition hover:text-white"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="mailto:hello@built4you.org"
              aria-label="Email"
              className="text-white/70 transition hover:text-white"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </nav>

        {/* Mobile Burger */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="rounded-xl p-2 text-white/80 ring-1 ring-white/10 transition hover:bg-white/5 active:scale-95 md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-[82%] max-w-xs overflow-y-auto border-l border-white/10 bg-neutral-950 shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="inline-flex items-center gap-2">
                <span
                  className="inline-block h-6 w-6 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-600"
                  aria-hidden
                />
                <span className="text-base font-bold tracking-wide text-white">
                  Johnny
                </span>
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-xl p-2 text-white/80 ring-1 ring-white/10 transition hover:bg-white/5 active:scale-95"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="px-4 pb-2 pt-1">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "block rounded-xl px-3 py-3 text-sm transition",
                      isActive
                        ? "bg-white/5 text-white ring-1 ring-white/10"
                        : "text-white/80 hover:bg-white/5 hover:text-white",
                    ].join(" ")
                  }
                  end={item.to === "/"}
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="mt-4 grid grid-cols-3 gap-3">
                <a
                  href="https://www.instagram.com/tattoojohnnyatl/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-white/80 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="text-xs">Insta</span>
                </a>
                <a
                  href="tel:+1-000-000-0000"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-white/80 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-xs">Call</span>
                </a>
                <a
                  href="mailto:hello@built4you.org"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-white/80 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-xs">Email</span>
                </a>
              </div>

              <p className="mt-6 rounded-xl bg-white/5 px-3 py-3 text-center text-[13px] text-white/70 ring-1 ring-white/10">
                Made with <span aria-hidden>🖋️</span> by{" "}
                <a
                  href="https://built4you.org"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-white hover:underline"
                >
                  Built4You
                </a>
              </p>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
