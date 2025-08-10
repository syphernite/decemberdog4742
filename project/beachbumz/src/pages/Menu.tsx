// project/beachbumz/src/pages/Menu.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Item = {
  name: string;
  description?: string;
  price?: string;                 // single price
  prices?: Record<string, string>; // size -> price
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
    { name: "Veggie Panini", description: "Artichoke, roasted red peppers, onions, mushrooms, black olives, provolone & roasted red pepper sauce", price: "13.95" },
    { name: "Chicken Caesar Panini", description: "Lettuce, Swiss cheese, roasted grilled chicken & creamy Caesar dressing", price: "14.95" },
    { name: "Chicken Club Panini", description: "Provolone, Canadian bacon, grilled chicken, lettuce & tomatoes with red pepper sauce", price: "14.95" },
    { name: "Buffalo Chicken Panini", description: "Chicken tossed in buffalo sauce, provolone, lettuce, tomatoes & blue cheese dressing", price: "14.95" },
    { name: "Italian Panini", description: "Ham, salami, pepperoni, lettuce, tomatoes, black olives, onions, roasted red peppers, provolone & roasted red pepper sauce", price: "14.95" },
  ],
  Pasta: [
    { name: "Spaghetti with Meatballs or Sausage", description: "", price: "15.95" },
    { name: "Bow Tie Pasta", description: "Italian sausage, mushrooms, onions & diced tomatoes in homemade Alfredo sauce", price: "16.95" },
    { name: "Shrimp Pasta", description: "Shrimp, Canadian bacon, onions, diced tomatoes, mushrooms & bow tie pasta in roasted red pepper sauce", price: "17.95" },
    { name: "Baked Ziti", description: "Ziti with three cheeses and marinara sauce, topped with mozzarella, then baked", price: "15.95" },
  ],
  Seafood: [
    { name: "Flounder Basket", description: "Two pieces of fried flounder with fries or chips and homemade slaw", price: "16.95" },
    { name: "Shrimp Basket", description: "Fried shrimp with fries or chips and homemade slaw", price: "17.95" },
    { name: "Combination of Flounder & Shrimp", description: "One piece of flounder and shrimp with fries or chips and homemade slaw", price: "18.95" },
    { name: "Boom Boom Shrimp Tacos", description: "Two flour tortillas with fried shrimp, boom boom sauce, red cabbage slaw & cheddar cheese", price: "16.95" },
  ],
  Calzones: [
    { name: "Veggie Calzone", description: "Zucchini, onions, mushrooms, green peppers, ricotta & mozzarella", price: "12.95" },
    { name: "Italian Calzone", description: "Salami, Canadian bacon, onions, green peppers, ricotta & mozzarella", price: "14.95" },
    { name: "Godfather Calzone", description: "Salami, Italian sausage, banana peppers & cheese", price: "14.95" },
  ],
  Pizzas: [
    { name: "Beach Bumz – Over the Top", description: "Italian sausage, pepperoni, black olives, tomatoes, mushrooms & basil", prices: { Small: "16.95", Medium: "18.95", Large: "21.95" } },
    { name: "Shrimp Lovers Pizza", description: "Shrimp, tomatoes, garlic & fresh basil", prices: { Small: "16.95", Medium: "18.95", Large: "22.95" } },
    { name: "Margherita Pizza", description: "Garlic, fresh basil, plum tomatoes & mozzarella", prices: { Small: "15.95", Medium: "17.95", Large: "20.95" } },
    { name: "Roasted Veggie", description: "Green peppers, mushrooms, zucchini, red peppers & onions, mozzarella", prices: { Small: "15.95", Medium: "17.95", Large: "20.95" } },
    { name: "California", description: "Grilled chicken, mushrooms, basil, garlic, tomatoes, black olives & mozzarella", prices: { Small: "15.95", Medium: "17.95", Large: "20.95" } },
    { name: "Hawaiian", description: "Canadian bacon & pineapple chunks with mozzarella", prices: { Small: "15.95", Medium: "17.95", Large: "20.95" } },
    { name: "Ultimate Cheese", description: "Mozzarella, provolone, swiss, parmesan & cheddar", prices: { Small: "15.95", Medium: "17.95", Large: "20.95" } },
    { name: "Greek Island", description: "Feta, black olives, artichoke hearts, spinach & sun-dried tomatoes", prices: { Small: "15.95", Medium: "17.95", Large: "20.95" } },
    { name: "BBQ Chicken", description: "Homemade BBQ sauce, grilled chicken & onions topped with mozzarella", prices: { Small: "15.95", Medium: "17.95", Large: "20.95" } },
    { name: "Chicken Florentine", description: "Homemade pesto sauce, grilled chicken, spinach, mushrooms, mozzarella", prices: { Small: "15.95", Medium: "17.95", Large: "20.95" } },
    { name: "Build Your Own", description: "", prices: { "Small Base": "11.95 plus $1.75/topping", "Medium Base": "14.95 plus $1.85/topping", "Large Base": "16.95 plus $2.50/topping" } },
    { name: "Supreme", description: "Garlic, pepperoni, red pepper, green pepper, onion, olives & mushrooms", prices: { Small: "16.95", Medium: "18.95", Large: "21.95" } },
    { name: "Meat Lovers", description: "Pepperoni, Italian sausage, Canadian bacon & salami", prices: { Small: "16.95", Medium: "18.95", Large: "21.95" } },
  ],
  "Desserts": [
    { name: "French Silk Pie", description: "", price: "6.95" },
    { name: "Key Lime Pie", description: "", price: "7.95" },
    { name: "Cheesecake", description: "", price: "8.95" },
    { name: "Dessert Pizza", description: "Vanilla pudding base with melted chocolate chips", prices: { Small: "10.95", Medium: "12.95", Large: "14.95" } },
  ],
  "Kids Menu": [
    { name: "Spaghetti & Meatballs", description: "", price: "8.95" },
    { name: "Mac & Cheese", description: "", price: "7.95" },
    { name: "Personal Pizza (Cheese or Pepperoni)", description: "", price: "8.95" },
    { name: "Grilled Cheese", description: "With fries, chips, or applesauce", price: "7.95" },
  ],
};

function PriceBlock({ item }: { item: Item }) {
  if (item.prices && Object.keys(item.prices).length > 0) {
    return (
      <div className="mt-2 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2">
        {Object.entries(item.prices).map(([size, price]) => (
          <div key={size} className="flex justify-between rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm">
            <span className="opacity-90">{size}</span>
            <span className="font-semibold">${price}</span>
          </div>
        ))}
      </div>
    );
  }
  const p = (item.price || "").trim();
  return p ? <div className="mt-1 font-semibold">${p}</div> : null;
}

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

export default function Menu() {
  const categories = useMemo(() => Object.keys(MENU), []);
  const [active, setActive] = useState<string>(categories[0] || "");
  const sentinelsRef = useRef<Record<string, HTMLDivElement | null>>({});

  // Observe sections to highlight active tab
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry nearest to top that's intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));
        if (visible.length > 0) {
          const id = (visible[0].target as HTMLElement).dataset.section;
          if (id) setActive(id);
        }
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: [0, 0.1, 0.5] }
    );

    categories.forEach((c) => {
      const el = sentinelsRef.current[c];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  const handleJump = (cat: string) => {
    const id = slug(cat);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="min-h-screen bg-slate-900 text-white">
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

        {/* Sticky sub-menu */}
        <div className="sticky top-20 z-40 mb-8 border-b border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="flex items-center justify-between py-2">
            <nav className="w-full overflow-x-auto">
              <ul className="flex gap-2 sm:gap-3 whitespace-nowrap px-1">
                {categories.map((cat) => {
                  const isActive = active === cat;
                  return (
                    <li key={cat}>
                      <button
                        onClick={() => handleJump(cat)}
                        className={`px-3 py-1.5 rounded-full text-sm transition
                          ${isActive ? "bg-turquoise text-slate-900 font-semibold" : "bg-white/5 hover:bg-white/10"}`}
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
            {/* invisible sentinel for intersection tracking */}
            <div
              ref={(el) => (sentinelsRef.current[section] = el)}
              data-section={section}
              aria-hidden
              className="h-px"
            />
            <h2 id={slug(section)} className="scroll-mt-24 text-2xl font-bold mb-4">
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
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-white/10"
          >
            Back to top
          </button>
          <span>Prices subject to change. Please confirm in-store.</span>
        </div>
      </div>

      {/* Smooth scroll for all anchors */}
      <style>{`html { scroll-behavior: smooth; } @media print { .sticky { position: static; } }`}</style>
    </section>
  );
}
