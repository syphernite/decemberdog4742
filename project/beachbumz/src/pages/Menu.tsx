// project/beachbumz/src/pages/Menu.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Item = {
  name: string;
  description?: string;
  price?: string;
  prices?: Record<string, string>;
};

type MenuData = Record<string, Item[]>;

/** Real menu data */
const MENU: MenuData = {
  Appetizers: [
    { name: "Stuffed Hot Peppers", description: "", price: "" },
    { name: "Stuffed Mushrooms", description: "", price: "" },
    { name: "Fried Calamari", description: "", price: "" },
    { name: "Angel Hair Onion Rings", description: "", price: "" },
    { name: "Sea Salt Chips", description: "Homemade sea salt chips", price: "" },
    { name: "Homemade Fries", description: "", price: "" },
    { name: "Garlic Cheese Bread", description: "", price: "" },
  ],
  Paninis: [
    { name: "Veggie Panini", description: "Artichoke, roasted red peppers, black olives, provolone & roasted red pepper sauce", price: "13.95" },
    { name: "Chicken Caesar Panini", description: "Lettuce, Swiss, grilled chicken & creamy Caesar dressing", price: "14.95" },
    { name: "Chicken Club Panini", description: "Provolone, Canadian bacon, grilled chicken, lettuce & tomatoes with red pepper sauce", price: "14.95" },
    { name: "Buffalo Chicken Panini", description: "Chicken tossed in buffalo sauce with provolone, lettuce, tomatoes & blue cheese dressing", price: "14.95" },
    { name: "Italian Panini", description: "Ham, salami, pepperoni, onion, tomatoes, banana peppers, provolone & roasted red pepper sauce", price: "14.95" },
  ],
  Pasta: [
    { name: "Spaghetti with Meatballs or Sausage", description: "", price: "15.95" },
    { name: "Bow Tie Pasta", description: "Italian sausage, mushrooms, onions & diced tomatoes in homemade Alfredo sauce", price: "16.95" },
    { name: "Shrimp Pasta", description: "Shrimp, Canadian bacon, mushrooms, onions & bow tie pasta in roasted red pepper sauce", price: "17.95" },
    { name: "Baked Ziti", description: "Ziti with three cheeses and marinara sauce, topped with mozzarella, then baked", price: "15.95" },
  ],
  Seafood: [
    { name: "Flounder Basket", description: "Two pieces of fried flounder with fries or chips and homemade slaw", price: "16.95" },
    { name: "Shrimp Basket", description: "Fried shrimp with fries or chips and homemade slaw", price: "17.95" },
    { name: "Combination of Flounder & Shrimp", description: "One piece of fried flounder and fried shrimp with fries or chips and homemade slaw", price: "18.95" },
    { name: "Boom Boom Shrimp Tacos", description: "Two flour tortillas, fried shrimp, boom boom sauce, red cabbage slaw & cheddar cheese", price: "16.95" },
  ],
  Calzones: [
    { name: "Veggie Calzone", description: "Zucchini, onions, mushrooms, green peppers, ricotta & mozzarella", price: "12.95" },
    { name: "Italian Calzone", description: "Salami, Canadian bacon, onions, mushrooms, ricotta & mozzarella", price: "13.95" },
    { name: "Meat Lovers Calzone", description: "Canadian bacon, pepperoni, hamburger, sausage, ricotta & mozzarella", price: "13.95" },
    { name: "Create Your Own Calzone", description: "Includes mozzarella & ricotta", prices: { "S": "10.95", "M": "12.95", "L": "14.95" } },
  ],
  Pizza: [
    { name: "Classic Cheese", description: "", price: "" },
    { name: "Pepperoni", description: "", price: "" },
  ],
  Desserts: [
    { name: "Tiramisu", description: "", price: "" },
    { name: "Cannoli", description: "", price: "" },
  ],
  Drinks: [
    { name: "Fountain Drinks", description: "", price: "" },
    { name: "Iced Tea", description: "", price: "" },
  ],
};

const categories = Object.keys(MENU);

function PriceBlock({ item }: { item: Item }) {
  if (item.prices && Object.keys(item.prices).length) {
    const entries = Object.entries(item.prices);
    return (
      <div className="mt-1 grid grid-cols-2 gap-x-4 gap-y-1 text-right text-sm">
        {entries.map(([size, price]) => (
          <div key={size} className="flex items-center justify-between gap-3 py-1 text-sm">
            <span className="opacity-90">{size}</span>
            <span className="font-semibold">{price}</span>
          </div>
        ))}
      </div>
    );
  }
  const p = (item.price || "").trim();
  return p ? <div className="mt-1 font-semibold">{p}</div> : null;
}

const slug = (s: string) =>
  s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

export default function Menu() {
  const [active, setActive] = useState<string>(categories[0] || "");
  const sentinelsRef = useRef<Record<string, HTMLDivElement | null>>({});
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));
        if (visible.length > 0) {
          const id = (visible[0].target as HTMLElement).dataset.section;
          if (id) setActive(id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: [0, 0.1, 0.5] }
    );

    categories.forEach((c) => {
      const el = sentinelsRef.current[c];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      setShowHint(false);
      setAtStart(el.scrollLeft <= 2);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
    };
    el.addEventListener('scroll', update);
    const t = setTimeout(() => setShowHint(false), 2000);
    update();
    return () => { el.removeEventListener('scroll', update); clearTimeout(t); };
  }, []);

  const handleJump = (cat: string) => {
    const id = slug(cat);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="pt-20 bg-slate-900 text-white min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header row */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Menu</h1>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-turquoise hover:opacity-90 underline underline-offset-4">
              ← Back to Home
            </Link>
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10"
            >
              Print
            </button>
          </div>
        </div>

        {/* Sticky mobile-friendly category bar */}
        <div className="sticky top-20 z-40 mb-8 bg-slate-900/85 backdrop-blur border-b border-white/10">
          <div className="relative">
            {showHint && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-300 animate-pulse">
                Swipe to see more
              </div>
            )}

            {/* edge fades to hint scroll */}
            <span className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-slate-900/85 to-transparent" />
            <span className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-slate-900/85 to-transparent" />

            {/* chevrons */}
            {!atStart && (
              <button
                aria-label="Scroll left"
                onClick={() => scrollerRef.current?.scrollBy({ left: -160, behavior: "smooth" })}
                className="absolute left-1 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/50 hover:bg-black/70"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
            )}
            {!atEnd && (
              <button
                aria-label="Scroll right"
                onClick={() => scrollerRef.current?.scrollBy({ left: 160, behavior: "smooth" })}
                className="absolute right-1 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/50 hover:bg-black/70"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
                </svg>
              </button>
            )}

            <nav aria-label="Menu categories" className="w-full overflow-x-auto no-scrollbar snap-x snap-mandatory" ref={scrollerRef}>
              <ul className="flex gap-2 sm:gap-3 whitespace-nowrap px-1 py-2 pr-6">
                {categories.map((cat) => {
                  const isActive = active === cat;
                  return (
                    <li key={cat} className="shrink-0 snap-start">
                      <button
                        onClick={() => handleJump(cat)}
                        className={`px-4 py-2 rounded-full text-base sm:text-sm transition
                        ${isActive
                            ? "bg-turquoise text-slate-900 font-semibold"
                            : "bg-white/6 hover:bg-white/12 text-white"} 
                        border border-white/10`}
                        aria-current={isActive ? "true" : undefined}
                      >
                        {cat}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        {/* Sections */}
        {categories.map((section) => (
          <div key={section} className="mb-12">
            {/* invisible sentinel */}
            <div
              ref={(el) => (sentinelsRef.current[section] = el)}
              data-section={section}
              aria-hidden
              className="h-px"
            />
            <h2
              id={slug(section)}
              className="scroll-mt-[88px] md:scroll-mt-[110px] text-2xl font-bold mb-4"
            >
              {section}
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {(MENU[section] || []).map((item) => (
                <article key={item.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <PriceBlock item={item} />
                  </div>
                  {item.description && item.description.trim().length > 0 && (
                    <p className="mt-2 text-sm opacity-90">{item.description}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 flex items-center justify-between text-xs opacity-70 print:hidden">
          <span>
            Allergies or dietary needs? Please inform our staff before ordering.
          </span>
          <span>Prices subject to change. Please confirm in-store.</span>
        </div>
      </div>

      {/* local helpers for cross-browser polish */}
      <style>{`
        .no-scrollbar{ -ms-overflow-style:none; scrollbar-width:none }
        .no-scrollbar::-webkit-scrollbar{ display:none }
        html { scroll-behavior: smooth; }
        @media print { .sticky { position: static; } }
      `}</style>
    </section>
  );
}
