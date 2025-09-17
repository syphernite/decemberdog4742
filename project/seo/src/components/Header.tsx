// src/components/Header.tsx
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { tokens } from "../styles/tokens";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const close = () => setIsOpen(false);

  const gotoSection = (id: string) => {
    const onHome = location.pathname === "/" || location.pathname === "";
    if (!onHome) {
      navigate("/");
      // defer to next tick so home is mounted
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    close();
  };

  return (
    <header className="bg-neutral-100 border-b border-neutral-200">
      <div className={`${tokens.container} flex items-center justify-between py-4`}>
        <Link to="/" className="text-xl font-bold text-neutral-900">Built4You</Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => gotoSection("hero")} className="text-neutral-700 hover:text-neutral-900">
            Home
          </button>
          <button onClick={() => gotoSection("services")} className="text-neutral-700 hover:text-neutral-900">
            Services
          </button>
          <button onClick={() => gotoSection("why")} className="text-neutral-700 hover:text-neutral-900">
            Why Us
          </button>
          <Link to="/contact" className="text-neutral-700 hover:text-neutral-900">
            Contact
          </Link>
        </nav>

        {/* Mobile trigger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-neutral-700 hover:text-neutral-900">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-neutral-50 border-t border-neutral-200"
          >
            <div className="flex flex-col p-4 gap-4">
              <button onClick={() => gotoSection("hero")} className="text-left text-neutral-700 hover:text-neutral-900">
                Home
              </button>
              <button onClick={() => gotoSection("services")} className="text-left text-neutral-700 hover:text-neutral-900">
                Services
              </button>
              <button onClick={() => gotoSection("why")} className="text-left text-neutral-700 hover:text-neutral-900">
                Why Us
              </button>
              <Link to="/contact" onClick={close} className="text-neutral-700 hover:text-neutral-900">
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
