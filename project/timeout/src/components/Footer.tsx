// src/components/Footer.tsx
import React from "react";
import { Facebook, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: branding text */}
        <div className="text-center md:text-left text-sm space-y-1">
          <div>© 2025 TimeOut Tavern • Veteran owned • Family friendly</div>
          <div>
            made with 🏈 by{" "}
            <a
              href="https://built4you.org"
              target="_blank"
              rel="noreferrer"
              className="underline hover:opacity-80"
            >
              Built4You
            </a>
          </div>
        </div>

        {/* Right: social + call buttons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/TimeOutTavernNC"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-[#1877F2] hover:opacity-80 transition"
            aria-label="Facebook"
          >
            <Facebook size={20} className="text-white" />
          </a>
          <a
            href="https://www.instagram.com/tavern.timeout?igsh=MTM1dzFnaTF3OGs5MA=="
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-80 transition"
            aria-label="Instagram"
          >
            <Instagram size={20} className="text-white" />
          </a>
          <a
            href="tel:+1-555-555-5555"
            className="p-2 rounded-full bg-green-600 hover:opacity-80 transition"
            aria-label="Call"
          >
            <Phone size={20} className="text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
