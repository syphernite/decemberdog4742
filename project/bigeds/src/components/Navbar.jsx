import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary-dark">
          Big Ed's
        </Link>
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6 text-primary-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <ul
          className={`md:flex md:space-x-8 md:static absolute left-0 w-full md:w-auto md:mt-0 mt-4 bg-white md:bg-transparent px-4 md:px-0 transition-all duration-300 z-10 ${
            open ? 'top-16 opacity-100' : 'top-[-400px] opacity-0 md:opacity-100'
          }`}
        >
          <li className="my-2 md:my-0">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-primary-dark"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link
              to="/menu"
              className="block py-2 text-gray-700 hover:text-primary-dark"
              onClick={() => setOpen(false)}
            >
              Menu
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link
              to="/about"
              className="block py-2 text-gray-700 hover:text-primary-dark"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link
              to="/gallery"
              className="block py-2 text-gray-700 hover:text-primary-dark"
              onClick={() => setOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link
              to="/contact"
              className="block py-2 text-gray-700 hover:text-primary-dark"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
