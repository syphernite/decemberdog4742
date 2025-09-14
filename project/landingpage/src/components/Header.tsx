import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Code, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Lock scroll on body and html. Restore on close.
  useEffect(() => {
    if (!isMenuOpen) return;
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Our Work", path: "/demos" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/60 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg blur-lg opacity-30" />
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
                  `text-sm font-medium transition-colors ${
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 transition-colors"
            aria-label="Open Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md"
          style={{
            minHeight: "100dvh",
            paddingTop: "calc(env(safe-area-inset-top) + 1rem)",
            paddingBottom: "calc(env(safe-area-inset-bottom) + 1rem)",
          }}
        >
          <div className="flex flex-col h-full px-6">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-white">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
                className="p-2"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <nav className="mt-8 flex-1 overflow-y-auto flex flex-col space-y-4">
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
        </div>
      )}
    </header>
  );
};

export default Header;
