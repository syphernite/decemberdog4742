// src/pages/MenuPage.tsx
import React from "react";
import { motion } from "framer-motion";
import { FileText, Utensils } from "lucide-react";

type Dish = {
  name: string;
  desc?: string;
  price?: string;
  image: string;
  tag?: "popular" | "new";
};

const BASE = (import.meta as any).env.BASE_URL || "/";

const ORDER_URL =
  "https://onlineordering.rmpos.com/Order/?wci=ma1ddpkZ";

const PDF_MENU_URL =
  "https://wixlabs-pdf-dev.appspot.com/assets/pdfjs/web/viewer.html?file=%2Fpdfproxy%3Finstance%3D98lpBj85TDC14KOhvZX8wofyua7oU9IiUuGIJIcN2yI.eyJpbnN0YW5jZUlkIjoiYjgzMzNjMTYtNzVmYy00Yzg2LTk3NWEtNTk5YzZlODczM2ZjIiwiYXBwRGVmSWQiOiIxM2VlMTBhMy1lY2I5LTdlZmYtNDI5OC1kMmY5ZjM0YWNmMGQiLCJtZXRhU2l0ZUlkIjoiODg5YmNlZTgtM2FhOC00MzcxLWI1OGMtNTMxNDVmNWJhNWFlIiwic2lnbkRhdGUiOiIyMDI1LTA5LTAzVDE4OjExOjQ4Ljg1NloiLCJkZW1vTW9kZSI6ZmFsc2UsImFpZCI6ImIwNDIxOGQzLTM1ZmMtNDhiOC04OGE1LWQzMTYxYmY0NmFmNyIsImJpVG9rZW4iOiIzMGE4ZjJmZS00ZjU0LTBmZjctMjJkNi0wYTg4MzFkYzk2NTIiLCJzaXRlT3duZXJJZCI6IjRhOTU4OTA3LTc1NzItNDZmNS1iODg4LTFmNTJmMzA1ODMzZCIsImJzIjoibUJjWEVfTTU3THNLUlptb0cxQ05rRzVVS2JrUVNxWUxxQkVUc1U5WTlSQSIsInNjZCI6IjIwMTYtMDMtMTBUMTg6MzA6MDcuNDQwWiJ9%26compId%3Dcomp-kbsf9t46%26url%3Dhttps%3A%2F%2Fdocs.wixstatic.com%2Fugd%2F4a9589_078637ab0a7a4cb38496b6c4e48c680f.pdf#page=1&links=false&originalFileName=PlazaMexicoMenu24&locale=en&allowDownload=true&allowPrinting=true";

const curated: Dish[] = [
  {
    name: "Mar y Tierra",
    desc: "Rib eye steak and shrimp. Served with rice & guacamole salad.",
    price: "$19.99",
    image: `${BASE}menu/mar_y_tierra.jpg`,
    tag: "popular",
  },
  {
    name: "Chilaquiles Rojos",
    desc:
      "Tortilla casserole smothered in red salsa and grilled chicken. Topped with cilantro, onions, guaca, queso and sour cream. Served with beans and guacamole salad.",
    price: "$14.99",
    image: `${BASE}menu/chilaquiles_rojos.jpg`,
  },
  {
    name: "Tacos de Cochinita",
    desc:
      "Special marinated shredded pork, served with sliced onions and avocado-lime salsa.",
    price: "$14.99",
    image: `${BASE}menu/tacos_de_cochinita.jpg`,
  },
  {
    name: "El Molcajete",
    desc:
      "Tender sliced steak, grilled chicken, chorizo, and shrimp cooked with onions, bell peppers, nopales, chambray potatoes, queso fresco, fried plantains, chile toreado. Served in a molcajete with a side of rice, beans and salad.",
    price: "$26.99",
    image: `${BASE}menu/el_molcajete.jpg`,
    tag: "new",
  },
  {
    name: "Loaded Potato Fajita",
    desc:
      "Your choice of steak or chicken fajita, chorizo, and topped with cheese.",
    price: "$17.99",
    image: `${BASE}menu/loaded_potato_fajita.jpg`,
  },
  {
    name: "Enchiladas Bandera",
    desc: "Served with rice and sour cream salad.",
    price: "$17.99",
    image: `${BASE}menu/enchiladas_bandera.jpg`,
  },
];

export default function MenuPage() {
  return (
    <section className="relative min-h-[92svh] bg-black text-white">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${BASE}images/dining-room.jpg)` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-semibold tracking-tight">Menu</h1>
          <p className="mt-2 text-white/70">
            Fresh, fast, and faithful to Plaza Mexico Restaurant Bar and Grill.
          </p>
        </motion.div>

        {/* Primary actions: big, centered, highly visible */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
          <MotionButton
            as="a"
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            icon={<Utensils className="h-5 w-5" />}
            label="Order Online"
            variant="primary"
            big
          />
          <MotionButton
            as="a"
            href={PDF_MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
            icon={<FileText className="h-5 w-5" />}
            label="View Full Menu (PDF)"
            variant="pdf"
            big
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-12">
          {curated.slice(0, 2).map((d, i) => (
            <Card key={i} dish={d} featured />
          ))}
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-medium">Featured Dishes</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {curated.map((d, i) => (
            <Card key={i} dish={d} />
          ))}
        </div>

        {/* Repeat actions at bottom for visibility */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <MotionButton
            as="a"
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            icon={<Utensils className="h-5 w-5" />}
            label="Start Order"
            variant="primary"
            big
          />
          <MotionButton
            as="a"
            href={PDF_MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
            icon={<FileText className="h-5 w-5" />}
            label="Full Menu PDF"
            variant="pdf"
            big
          />
        </div>
      </div>
    </section>
  );
}

function Card({ dish, featured = false }: { dish: Dish; featured?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={[
        "group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10",
        featured ? "aspect-[16/10]" : "aspect-[4/3]",
      ].join(" ")}
    >
      <img
        src={dish.image}
        alt={dish.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="flex items-center gap-2">
          {dish.tag && (
            <span className="rounded-full bg-emerald-500/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-black">
              {dish.tag}
            </span>
          )}
          {dish.price && (
            <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-black">
              {dish.price}
            </span>
          )}
        </div>
        <h3 className="mt-2 text-lg font-semibold">{dish.name}</h3>
        {dish.desc && (
          <p className="mt-1 line-clamp-2 text-sm text-white/80">{dish.desc}</p>
        )}
      </div>
    </motion.article>
  );
}

function MotionButton(props: {
  as?: "a" | "button";
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  label: string;
  variant?: "primary" | "ghost" | "pdf";
  big?: boolean;
}) {
  const {
    as = "button",
    href,
    target,
    rel,
    icon,
    label,
    variant = "primary",
    big,
  } = props;

  const Comp: any = as;

  const base =
    "inline-flex items-center gap-2 rounded-xl transition will-change-transform focus:outline-none";
  const size = big ? "px-6 py-3 text-base" : "px-4 py-2 text-sm";
  const style =
    variant === "primary"
      ? "bg-red-600 hover:bg-red-500 active:scale-[0.98] text-white shadow-lg shadow-red-600/30"
      : variant === "pdf"
      ? "bg-yellow-400 text-black hover:bg-yellow-300 active:scale-[0.98] shadow-lg shadow-yellow-400/30"
      : "bg-white/10 hover:bg-white/15 active:scale-[0.98] text-white ring-1 ring-white/20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Comp href={href} target={target} rel={rel} className={`${base} ${size} ${style}`}>
        {icon}
        <span>{label}</span>
      </Comp>
    </motion.div>
  );
}
