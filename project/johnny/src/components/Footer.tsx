import React from "react";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="mb-3 inline-flex items-center gap-2">
            <span
              className="inline-block h-6 w-6 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-600"
              aria-hidden
            />
            <span className="text-base font-bold tracking-wide text-white">
              Johnny
            </span>
          </div>
          <p className="max-w-xs text-sm leading-6 text-white/70">
            Clean, bold tattoo work. Modern booking, clear communication, and a
            portfolio that speaks for itself.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <p className="mb-2 text-xs uppercase tracking-wider text-white/50">
              Pages
            </p>
            <Link to="/" className="block text-white/80 hover:text-white">
              Home
            </Link>
            <Link to="/portfolio" className="block text-white/80 hover:text-white">
              Portfolio
            </Link>
            <Link to="/contact" className="block text-white/80 hover:text-white">
              Contact
            </Link>
          </div>
          <div className="space-y-2">
            <p className="mb-2 text-xs uppercase tracking-wider text-white/50">
              Contact
            </p>
            <a
              href="tel:+1-000-000-0000"
              className="flex items-center gap-2 text-white/80 hover:text-white"
            >
              <Phone className="h-4 w-4" /> <span>(000) 000-0000</span>
            </a>
            <a
              href="mailto:hello@built4you.org"
              className="flex items-center gap-2 text-white/80 hover:text-white"
            >
              <Mail className="h-4 w-4" /> <span>hello@built4you.org</span>
            </a>
            <span className="flex items-center gap-2 text-white/60">
              <MapPin className="h-4 w-4" /> Lawton, OK
            </span>
          </div>
        </div>

        {/* Socials + Credit */}
        <div className="flex flex-col items-start justify-between gap-6 md:items-end">
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/tattoojohnnyatl/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-xl p-2 text-white/80 ring-1 ring-white/10 transition hover:bg-white/5 hover:text-white"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-white/70">
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
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <p className="mx-auto max-w-6xl px-4 text-xs text-white/50">
          © {new Date().getFullYear()} Johnny. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
