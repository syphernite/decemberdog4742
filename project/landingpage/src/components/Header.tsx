import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Code, Menu, X } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Our Mission", path: "/why-we-exist" },
    { name: "Our Work", path: "/demos" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/40 dark:bg-slate-950/40 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg blur-lg opacity-30"></div>
              <div className="relative bg-gradient-to-r from-emerald-600 to-blue-600 p-1.5 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold text-white">Built4You</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-emerald-400"
                      : "text-slate-300 hover:text-emerald-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <span className="text-yellow-400">☀️</span>
              ) : (
                <span className="text-blue-400">🌙</span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
              aria-label="Open Menu"
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex flex-col p-6 space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-white">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive
                      ? "text-emerald-400"
                      : "text-slate-300 hover:text-emerald-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
