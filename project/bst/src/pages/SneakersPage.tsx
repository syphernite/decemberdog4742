import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, RefreshCw, ShoppingCart } from "lucide-react";
import { FaSnapchatGhost, FaInstagram } from "react-icons/fa";
import { SiCashapp, SiVenmo } from "react-icons/si";

// Public helper
const pub = (p: string) => {
  const base = (import.meta as any).env?.BASE_URL ?? "/";
  return `${base}${p}`.replace(/\/{2,}/g, "/");
};

// CSV type
interface Sneaker {
  brand: string;
  name: string;
  size: string;
  price: number;
  imageURL: string;
}

// Title case helper
const toTitleCase = (str: string) =>
  str
    .toLowerCase()
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

// Price helper
const toNumber = (val: any): number => {
  if (!val) return NaN;
  const n = parseFloat(String(val).replace(/[^0-9.]/g, ""));
  return isNaN(n) ? NaN : n;
};

const PAGE_SIZE = 20;

const SneakersPage = () => {
  const features = [
    { icon: ShoppingCart, title: "BUY", description: "Curated selection of authentic sneakers" },
    { icon: TrendingUp, title: "SELL", description: "Get top dollar for your collection" },
    { icon: RefreshCw, title: "TRADE", description: "Exchange kicks" }
  ];

  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [visible, setVisible] = useState(PAGE_SIZE);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRLoBlBjeSeUiwN8QOo0EWS5W9qgradVwK-XW0shLbqCdbxu-AAEkmTnqgKBiq3_FrVTZu1uPDYd6tD/pub?gid=0&single=true&output=csv"
    )
      .then((res) => res.text())
      .then((text) => {
        const rows = text
          .trim()
          .split("\n")
          .map((r) => r.split(","));
        const headers = rows[0].map((h) => h.trim().toLowerCase());
        const data = rows.slice(1).map((row) =>
          Object.fromEntries(row.map((val, i) => [headers[i], val.trim()]))
        );

        const mapped: Sneaker[] = data
          .map((r: any) => ({
            brand: toTitleCase(r.brand || ""),
            name: toTitleCase(r.name || ""),
            size: toTitleCase(r.size || ""),
            price: toNumber(r.price),
            imageURL: r.imageurl || ""
          }))
          .filter((r) => r.name && r.imageURL && !Number.isNaN(r.price));

        setSneakers(mapped);
      })
      .catch((err) => console.error("Error fetching sheet:", err));
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#2C2C2C] text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-12 md:h-16 flex items-center px-4 md:px-6 bg-transparent">
        <Link
          to="/select"
          className="inline-flex items-center transition-colors text-white mix-blend-difference drop-shadow hover:text-red-500"
          aria-label="Back"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span className="font-medium">BACK</span>
        </Link>
      </nav>

      {/* Hero */}
      <div className="relative w-full" style={{ height: "100svh" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pub("shoe-bg.png")})` }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6">BST</h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-red-500 mb-3 sm:mb-4 font-bold">
            EXCLUSIVE
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Your destination for rare kicks and streetwear culture
          </p>
        </div>
      </div>

      {/* Features */}
      <section className="py-14 sm:py-16 px-4 md:px-6">
        <div className="max-w-6xl w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16">
            WHAT I DO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="text-center p-6 sm:p-8 border border-gray-700 hover:border-red-500 transition-colors"
              >
                <f.icon className="w-14 h-14 sm:w-16 sm:h-16 text-red-500 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{f.title}</h3>
                <p className="text-gray-300 sm:text-gray-400 text-base sm:text-lg">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inventory */}
      <section className="py-14 sm:py-16 px-4 md:px-6 bg-black">
        <div className="max-w-6xl w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16">
            CURRENT INVENTORY
          </h2>
          {sneakers.length === 0 ? (
            <p className="text-center text-gray-400 px-2">
              Inventory will appear here when linked to Google Sheets.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {sneakers.slice(0, visible).map((s, i) => (
                  <div key={i} className="group">
                    <div className="aspect-square bg-gray-800 mb-4 overflow-hidden rounded">
                      <img
                        src={s.imageURL}
                        alt={s.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl mb-2">
                      <span className="text-red-500 font-bold">{s.brand}</span>{" "}
                      <span className="text-white">{s.name}</span>
                    </h3>
                    <div className="flex justify-between items-center text-gray-300">
                      <span>Size {s.size}</span>
                      <span className="text-red-500 font-bold text-lg">${s.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              {visible < sneakers.length && (
                <div className="flex justify-center mt-10">
                  <button
                    onClick={() => setVisible((v) => Math.min(v + PAGE_SIZE, sneakers.length))}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 transition-colors rounded font-bold"
                  >
                    Show More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Socials */}
      <section className="py-14 sm:py-16 px-4 md:px-6 bg-gradient-to-r from-[#2C2C2C] to-black">
        <div className="max-w-4xl w-full mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12">
            STAY CONNECTED
          </h2>
          <div className="grid grid-cols-2 gap-5 sm:gap-8 justify-items-center">
            <a
              href="https://instagram.com/bst.exclusive"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors ring-1 ring-white/10 hover:ring-red-500"
            >
              <FaInstagram className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </a>
            <a
              href="https://t.snapchat.com/RInsoZeO"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Snapchat"
              className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors ring-1 ring-white/10 hover:ring-red-500"
            >
              <FaSnapchatGhost className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </a>
            <a
              href="https://venmo.com/u/Tony-Holmes-36"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Venmo"
              className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors ring-1 ring-white/10 hover:ring-red-500"
            >
              <SiVenmo className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </a>
            <a
              href="https://cash.app/$tonyboyz007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CashApp"
              className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors ring-1 ring-white/10 hover:ring-red-500"
            >
              <SiCashapp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 border-t border-gray-800">
        <div className="max-w-4xl w-full mx-auto flex justify-between items-center">
          <div className="text-gray-300">BST Exclusive © 2025</div>
          <div className="flex space-x-3 sm:space-x-4">
            <FaInstagram className="w-6 h-6 text-gray-300 hover:text-red-500 transition-colors" />
            <FaSnapchatGhost className="w-6 h-6 text-gray-300 hover:text-red-500 transition-colors" />
            <SiVenmo className="w-6 h-6 text-gray-300 hover:text-red-500 transition-colors" />
            <SiCashapp className="w-6 h-6 text-gray-300 hover:text-red-500 transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SneakersPage;
