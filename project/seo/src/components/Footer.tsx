// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { tokens } from "../styles/tokens";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className={`${tokens.container} py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}>
        <div className="space-y-2">
          <div className="text-xl font-semibold flex items-center gap-2">
            <img src={logo} alt="logo" className="h-6 w-6" />
            Seoecon
          </div>
          <p className="text-sm text-neutral-600">SEO made simple. Results you can measure.</p>
        </div>

        <nav className="flex gap-6 text-sm">
          <a href="/#pricing" className="hover:text-neutral-900 text-neutral-700">Pricing</a>
          <Link to="/contact" className="hover:text-neutral-900 text-neutral-700">Contact</Link>
          <a href="/privacy" className="hover:text-neutral-900 text-neutral-700">Privacy</a>
          <a href="/terms" className="hover:text-neutral-900 text-neutral-700">Terms</a>
        </nav>

        <p className="text-xs text-neutral-500 flex items-center gap-2">
          <img src={logo} alt="logo" className="h-4 w-4 opacity-90" />
          © {new Date().getFullYear()} Seoecon.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
