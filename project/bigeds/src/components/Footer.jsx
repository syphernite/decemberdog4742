import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-12 border-t">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold text-lg mb-2 text-primary-dark">Big Ed's Hamburgers & Gyros</h3>
          <p className="text-sm max-w-xs">
            Serving Oklahoma City since 1982, we’re dedicated to fresh ingredients and hand‑cut fries. Stop by our family‑friendly diner for burgers, gyros and more!
          </p>
        </div>
        <div className="flex space-x-6">
          <Link to="/menu" className="hover:text-primary-dark">Menu</Link>
          <Link to="/about" className="hover:text-primary-dark">About</Link>
          <Link to="/contact" className="hover:text-primary-dark">Contact</Link>
        </div>
      </div>
      <div className="mt-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} Big Ed's Hamburgers & Gyros. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
