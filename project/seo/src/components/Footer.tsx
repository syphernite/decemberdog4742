// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { tokens } from "../styles/tokens";

export const Footer = () => {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200">
      <div className={tokens.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between py-6"
        >
          <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} SEOECON. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-sm text-neutral-600 hover:text-neutral-900"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-neutral-600 hover:text-neutral-900"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
