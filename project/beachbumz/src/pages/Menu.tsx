// project/beachbumz/src/pages/Menu.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const DOORDASH_URL = "https://www.doordash.com/"; // replace with your actual DoorDash store link

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
    {
      name: "Wings (Market Price)",
      description: "Mild, Hot, Jamaican Jerk, Garlic, Teriyaki, or BBQ",
      prices: {
        "10 Wings": "$13.95",
        "20 Wings": "$24.95",
      },
    },
    {
      name: "Stuffed Mushrooms",
      description:
        "Mushroom caps filled with Italian sausage topped with marinara sauce and mozzarella, then baked",
      price: "$9.95",
    },
    {
      name: "Fried Calamari",
      description:
        "Fresh calamari breaded & flash fried. Served with marinara sauce",
      price: "$14.95",
    },
    {
      name: "Angel Hair Onion Rings",
      description:
        "Bermuda onions lightly breaded, served with our signature dipping sauce",
      price: "$9.95",
    },
    {
      name: "Sea Salt Chips",
      description: "A heaping basket of our thin-sliced, warm homemade chips",
      price: "$6.50",
    },
    {
      name: "Bacon Cheese Fries",
      description:
        "Our homemade fries topped with bacon and cheddar cheese, served on a sizzling skillet",
      price: "$9.95",
    },
    {
      name: "Garlic Cheese Bread",
      description: "Served with homemade marinara sauce",
      price: "$8.95",
    },
    {
      name: "Half Moon Mozzarella Sticks",
      description: "Served with homemade marinara sauce",
      price: "$9.95",
    },
  ],

  Paninis: [
    {
      name: "Veggie Panini",
      description:
        "Artichoke, roasted red peppers, black olives, provolone & roasted red pepper sauce",
      price: "13.95",
    },
    {
      name: "Chicken Caesar Panini",
      description:
        "Lettuce, Swiss, grilled chicken & creamy Caesar dressing",
      price: "14.95",
    },
    {
      name: "Chicken Club Panini",
      description:
        "Provolone, Canadian bacon, grilled chicken, lettuce & tomatoes with red pepper sauce",
      price: "14.95",
    },
    {
      name: "Buffalo Chicken Panini",
      description:
        "Chicken tossed in buffalo sauce with provolone, lettuce, tomatoes & blue cheese dressing",
      price: "14.95",
    },
    {
      name: "Italian Panini",
      description:
        "Ham, salami, pepperoni, onion, tomatoes, banana peppers, provolone & roasted red pepper sauce",
      price: "14.95",
    },
  ],

  Pasta: [
    {
      name: "Spaghetti with Meatballs or Sausage",
      description: "",
      price: "15.95",
    },
    {
      name: "Bow Tie Pasta",
      description:
        "Italian sausage, mushrooms, onions & diced tomatoes in homemade Alfredo sauce",
      price: "16.95",
    },
    {
      name: "Shrimp Pasta",
      description:
        "Shrimp, Canadian bacon, mushrooms, onions & bow tie pasta in roasted red pepper sauce",
      price: "17.95",
    },
    {
      name: "Baked Ziti",
      description:
        "Ziti with three cheeses and marinara sauce, topped with mozzarella, then baked",
      price: "15.95",
    },
  ],

  Seafood: [
    {
      name: "Flounder Basket",
      description:
        "Two pieces of fried flounder with fries or chips and homemade slaw",
      price: "16.95",
    },
    {
      name: "Shrimp Basket",
      description: "Fried shrimp with fries or chips and homemade slaw",
      price: "17.95",
    },
    {
      name: "Combination of Flounder & Shrimp",
      description:
        "One piece of fried flounder and fried shrimp with fries or chips and homemade slaw",
      price: "18.95",
    },
    {
      name: "Boom Boom Shrimp Tacos",
      description:
        "Two flour tortillas, fried shrimp, boom boom sauce, red cabbage slaw & cheddar cheese",
      price: "16.95",
    },
  ],

  Calzones: [
    {
      name: "Veggie Calzone",
      description:
        "Zucchini, onions, mushrooms, green peppers, ricotta & mozzarella",
      price: "12.95",
    },
    {
      name: "Italian Calzone",
      description:
        "Salami, Canadian bacon, onions, mushrooms, ricotta & mozzarella",
      price: "13.95",
    },
    {
      name: "Godfather Calzone",
      description: "Salami, Italian sausage, banana peppers & cheese",
      price: "14.95",
    },
    {
      name: "Create Your Own Calzone",
      description: "Includes mozzarella & ricotta",
      prices: { S: "10.95", M: "12.95", L: "14.95" },
    },
  ],

  Pizzas: [
    {
      name: "Beach Bumz | OVER THE TOP",
      description:
        "Italian sausage, pepperoni, black olives, tomatoes, fresh mushrooms & basil topped with mozzarella cheese",
      prices: { 'Small 12"': "$16.95", 'Medium 16"': "$18.95", 'Large 18"': "$21.95" },
    },
    {
      name: "Shrimp Lovers Pizza",
      description:
        "Shrimp, tomatoes, garlic & fresh basil topped with mozzarella cheese",
      prices: { 'Small 12"': "$16.95", 'Medium 16"': "$18.95", 'Large 18"': "$22.95" },
    },
    {
      name: "Margarita Pizza",
      description:
        "Garlic, fresh basil, plum tomatoes & mozzarella cheese",
      prices: { 'Small 12"': "$15.95", 'Medium 16"': "$17.95", 'Large 18"': "$20.95" },
    },
    {
      name: "Roasted Veggie",
      description:
        "Green peppers, mushrooms, zucchini, red peppers & onions topped with mozzarella cheese",
      prices: { 'Small 12"': "$15.95", 'Medium 16"': "$17.95", 'Large 18"': "$20.95" },
    },
    {
      name: "California",
      description:
        "Grilled chicken, fresh mushrooms, basil, garlic, tomatoes, black olives topped with mozzarella cheese",
      prices: { 'Small 12"': "$16.95", 'Medium 16"': "$17.95", 'Large 18"': "$20.95" },
    },
    {
      name: "Hawaiian",
      description:
        "Canadian bacon & pineapple chunks topped with mozzarella cheese",
      prices: { 'Small 12"': "$15.95", 'Medium 16"': "$17.95", 'Large 18"': "$20.95" },
    },
    {
      name: "Ultimate Cheese",
      description:
        "Mozzarella, provolone, swiss, parmesan & cheddar",
      prices: { 'Small 12"': "$15.95", 'Medium 16"': "$17.95", 'Large 18"': "$20.95" },
    },
    {
      name: "Greek Island",
      description:
        "Feta cheese, black olives, artichoke hearts, spinach & sun-dried tomatoes",
      prices: { 'Small 12"': "$15.95", 'Medium 16"': "$17.95", 'Large 18"': "$20.95" },
    },
    {
      name: "BBQ Chicken",
      description:
        "Homemade BBQ sauce, grilled sliced chicken & onions topped with mozzarella cheese",
      prices: { 'Small 12"': "$15.95", 'Medium 16"': "$17.95", 'Large 18"': "$20.95" },
    },
    {
      name: "Chicken Florentine",
      description:
        "Homemade pesto sauce, grilled sliced chicken, spinach, mushrooms, topped with mozzarella cheese",
      prices: { 'Small 12"': "$15.95", 'Medium 16"': "$17.95", 'Large 18"': "$20.95" },
    },
    {
      name: "Build Your Own Pizza",
      description:
        'SMALL add $1.75 for each topping • MEDIUM add $2.00 for each topping • LARGE add $2.50 for each topping',
      prices: { 'Small 12"': "$11.95", 'Medium 16"': "$14.95", 'Large 18"': "$16.95" },
    },
    {
      name: "Supreme",
      description:
        "Garlic, pepperoni, red pepper, green pepper, onion, olives & mushrooms",
      prices: { 'Small 12"': "$16.95", 'Medium 16"': "$18.95", 'Large 18"': "$21.95" },
    },
    {
      name: "Meat Lovers",
      description:
        "Pepperoni, Italian sausage, Canadian bacon & Salami",
      prices: { 'Small 12"': "$16.95", 'Medium 16"': "$18.95", 'Large 18"': "$21.95" },
    },
  ],

  Desserts: [
    { name: "French Silk Pie", price: "$6.95" },
    { name: "Key Lime Pie", price: "$7.95" },
    { name: "Cheesecake", price: "$8.95" },
    {
      name: "Dessert Pizza",
      description:
        "Vanilla pudding base with melted chocolate chips for a warm, sweet treat",
      prices: { Small: "$10.95", Medium: "$12.95", Large: "$14.95" },
    },
  ],

  "Kids Menu": [
    { name: "Spaghetti & Meatballs", price: "$8.95" },
    { name: "Mac & Cheese", price: "$7.95" },
    {
      name: "Personal Pizza",
      description: "Cheese or Pepperoni",
      price: "$8.95",
    },
    {
      name: "Grilled Cheese",
      description: "With fries, chips or apple sauce",
      price: "$7.95",
    },
    {
      name: "Chicken Tenders",
      description: "With fries, chips or apple sauce",
      price: "$8.95",
    },
    {
      name: "Cheeseburger",
      description: "With fries, chips or apple sauce",
      price: "$8.95",
    },
  ],
};

const categories = Object.keys(MENU);

function formatSizeLabel(size: string): string {
  if (/Small/i.test(size)) return 'S 12"';
  if (/Medium/i.test(size)) return 'M 16"';
  if (/Large/i.test(size)) return 'L 18"';
  return size;
}

function PriceBlock({ item }: { item: Item }) {
  if (item.prices && Object.keys(item.prices).length) {
    const entries = Object.entries(item.prices);
    return (
      <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm w-full sm:w-auto">
        {entries.map(([size, price]) => (
          <div key={size} className="flex items-center justify-between gap-3 py-0.5">
            <span className="opacity-90">{formatSizeLabel(size)}</span>
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) =>
            a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1
          );
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
  }, []);

  const handleJump = (cat: string) => {
    const id = slug(cat);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="pt-4 sm:pt-12 bg-slate-900 text-white min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header row */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Menu
          </h1>
          <div className="flex items-center gap-3">
            {DOORDASH_URL && (
              <a
                href={DOORDASH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-sm hover:bg-emerald-400/20"
              >
                Order on DoorDash
              </a>
            )}
            <Link
              to="/"
              className="text-turquoise hover:opacity-90 underline underline-offset-4"
            >
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

        {/* Mobile quick picker */}
        <div className="md:hidden mb-3">
          <label htmlFor="catSelect" className="sr-only">
            Select category
          </label>
          <select
            id="catSelect"
            value={active}
            onChange={(e) => {
              setActive(e.target.value);
              handleJump(e.target.value);
            }}
            className="w-full rounded-lg border border-white/15 bg-white/10 text-white px-3 py-2"
          >
            {categories.map((c) => (
              <option key={c} value={c} className="bg-slate-900 text-white">
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Sticky category chips (desktop) */}
        <div className="sticky top-20 z-40 mb-8 bg-slate-900/85 backdrop-blur border-b border-white/10 hidden md:block">
          <div className="relative">
            <span className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-slate-900/85 to-transparent" />
            <span className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-slate-900/85 to-transparent" />
            <nav
              aria-label="Menu categories"
              className="w-full overflow-x-auto no-scrollbar"
              ref={scrollerRef}
            >
              <ul className="flex gap-3 whitespace-nowrap px-1 py-2 pr-6">
                {categories.map((cat) => {
                  const isActive = active === cat;
                  return (
                    <li key={cat} className="shrink-0">
                      <button
                        onClick={() => handleJump(cat)}
                        className={`px-4 py-2 rounded-full text-sm transition
                        ${
                          isActive
                            ? "bg-turquoise text-slate-900 font-semibold"
                            : "bg-white/6 hover:bg-white/12 text-white"
                        } 
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

            {/* Pizzas banner note */}
            {section === "Pizzas" && (
              <div className="mb-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm opacity-80">
                — No changes on specialty pizzas please —
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              {(MENU[section] || []).map((item) => (
                <article
                  key={item.name}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <h3 className="text-lg font-semibold break-words">
                      {item.name}
                    </h3>
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

      <style>{`
        .no-scrollbar{ -ms-overflow-style:none; scrollbar-width:none }
        .no-scrollbar::-webkit-scrollbar{ display:none }
        html { scroll-behavior: smooth; }
        @media print { .sticky { position: static; } }
      `}</style>
    </section>
  );
}
