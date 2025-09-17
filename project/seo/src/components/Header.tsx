// src/components/Header.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { tokens } from "../styles/tokens";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <header className="bg-neutral-100 border-b border-neutral-200">
      <div className={`${tokens.container} flex items-center justify-between py-4`}>
        <Link to="/" className="text-xl font-bold text-neutral-900">
          SEOECON
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          <a href="#hero" className="text-neutral-700 hover:text-neutral-900">
            Home
          </a>
          <a href="#services" className="text-neutral-700 hover:text-neutral-900">
            Services
          </a>
          <a href="#why" className="text-neutral-700 hover:text-neutral-900">
            Why Us
          </a>
          <a href="#contact" className="text-neutral-700 hover:text-neutral-900">
            Contact
          </a>
        </nav>

        {/* Mobile nav button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-700 hover:text-neutral-900"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-neutral-50 border-t border-neutral-200"
          >
            <div className="flex flex-col p-4 gap-4">
              <a
                href="#hero"
                className="text-neutral-700 hover:text-neutral-900"
                onClick={handleClose}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-neutral-700 hover:text-neutral-900"
                onClick={handleClose}
              >
                Services
              </a>
              <a
                href="#why"
                className="text-neutral-700 hover:text-neutral-900"
                onClick={handleClose}
              >
                Why Us
              </a>
              <a
                href="#contact"
                className="text-neutral-700 hover:text-neutral-900"
                onClick={handleClose}
              >
                Contact
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
