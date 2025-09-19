import React, { useLayoutEffect, useRef } from "react";

/* --------------------------------- DATA --------------------------------- */

type Item = { name: string; desc?: string; price?: string };
type Section = { title: string; accent: "red" | "gray"; img?: string; items: Item[] };

const sections: Section[] = [
  {
    title: "Appetizers",
    accent: "gray",
    img: "https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg?auto=compress&cs=tinysrgb&w=1280",
    items: [
      { name: "Mozzarella Sticks", price: "$8.99" },
      { name: "Loaded Potato Skins", price: "$8.49" },
      { name: "Fried Pickles", price: "$7.49" },
      { name: "Onion Rings", price: "$7.99" },
      { name: "Nachos with Cheese & Salsa", price: "$9.99" }
    ]
  },
  {
    title: "Wings",
    accent: "red",
    img: "https://images.pexels.com/photos/10361458/pexels-photo-10361458.jpeg?auto=compress&cs=tinysrgb&w=1280",
    items: [
      { name: "Buffalo Wings (6 pcs)", price: "$10.99" },
      { name: "Barbecue Wings (6 pcs)", price: "$10.99" },
      { name: "Honey Garlic Wings (6 pcs)", price: "$11.49" },
      { name: "Spicy Buffalo Wings (6 pcs)", price: "$11.49" }
    ]
  },
  {
    title: "Burgers",
    accent: "gray",
    img: "https://images.pexels.com/photos/20117233/pexels-photo-20117233.jpeg?auto=compress&cs=tinysrgb&w=1280",
    items: [
      { name: "Classic Cheeseburger", price: "$12.99" },
      { name: "Bacon Burger", price: "$13.99" },
      { name: "Mushroom Swiss Burger", price: "$13.99" },
      { name: "Build Your Own Burger (½ lb)", desc: "Lettuce, tomato, onion, pickle. Add-ons: bacon, cheese, avocado, jalapeños.", price: "$12.99" },
      { name: "Veggie Burger", price: "$11.99" }
    ]
  },
  {
    title: "Sandwiches & Wraps",
    accent: "red",
    img: "https://images.pexels.com/photos/15813482/pexels-photo-15813482.jpeg?auto=compress&cs=tinysrgb&w=1280",
    items: [
      { name: "Reuben Sandwich", price: "$13.99" },
      { name: "Philly Cheesesteak", price: "$13.99" },
      { name: "Buffalo Chicken Wrap", price: "$12.99" },
      { name: "Grilled Chicken Sandwich", price: "$11.99" }
    ]
  },
  {
    title: "Tacos",
    accent: "gray",
    img: "https://images.pexels.com/photos/28895975/pexels-photo-28895975.jpeg?auto=compress&cs=tinysrgb&w=1280",
    items: [
      { name: "Shrimp Tacos (2 pcs)", price: "$12.99" },
      { name: "Fish Tacos (2 pcs)", price: "$11.99" },
      { name: "Chicken Tacos (2 pcs)", price: "$10.99" }
    ]
  },
  {
    title: "Entrées",
    accent: "red",
    img: "https://images.pexels.com/photos/14096641/pexels-photo-14096641.jpeg?auto=compress&cs=tinysrgb&w=1280",
    items: [
      { name: "Fish & Chips", price: "$14.99" },
      { name: "Shrimp & Grits", price: "$15.99" },
      { name: "Crab Cake Dinner", price: "$18.99" },
      { name: "Blackened Chicken Alfredo", price: "$13.99" }
    ]
  },
  {
    title: "Sides",
    accent: "gray",
    img: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1280",
    items: [
      { name: "French Fries", price: "$3.99" },
      { name: "Sweet Potato Fries", price: "$4.49" },
      { name: "Coleslaw", price: "$2.99" },
      { name: "Side Salad", price: "$3.99" },
      { name: "Onion Rings", price: "$4.49" }
    ]
  }
];

/* --------------------------------- THEME --------------------------------- */

function useAccent(accent: Section["accent"]) {
  return React.useMemo(() => {
    if (accent === "gray") {
      return {
        band: "from-gray-400/30 via-gray-300/20 to-transparent",
        titleText: "text-gray-200",
        dot: "bg-gray-300",
        glowRing: "ring-gray-400/30",
        glowShadow: "shadow-[0_0_24px_0_rgba(148,163,184,0.12)]"
      };
    }
    return {
      band: "from-red-800/40 via-red-700/30 to-transparent",
      titleText: "text-red-300",
      dot: "bg-red-400",
      glowRing: "ring-red-700/40",
      glowShadow: "shadow-[0_0_24px_0_rgba(185,28,28,0.14)]"
    };
  }, [accent]);
}

function Card({ s, idx }: { s: Section; idx: number }) {
  const a = useAccent(s.accent);
  return (
    <div
      data-menu-card
      data-idx={idx}
      className={[
        "relative rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-white/10",
        "ring-2", a.glowRing,
        "overflow-hidden",
        "transition-shadow duration-300",
        a.glowShadow,
        "hover:shadow-[0_0_36px_0_rgba(255,255,255,0.06)]"
      ].join(" ")}
    >
      <div className="relative px-5 py-3 border-b border-white/10 bg-black/40 backdrop-blur-sm">
        <div className={`absolute inset-0 bg-gradient-to-r ${a.band}`} />
        <div className="relative flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full ${a.dot}`} />
          <h3 className={`text-xl font-semibold ${a.titleText}`}>{s.title}</h3>
        </div>
      </div>
      {s.img && (
        <div className="h-40 w-full">
          <img src={s.img} alt={s.title} className="h-full w-full object-cover" loading="lazy" />
        </div>
      )}
      <ul className="p-5 space-y-3">
        {s.items.map((it) => (
          <li key={it.name}>
            <div className="flex items-baseline gap-3">
              <span className="text-white/95">{it.name}</span>
              <span className="flex-1 border-b border-dotted border-white/15 translate-y-1" />
              {it.price && (
                <span className="text-sm text-white/80 tabular-nums whitespace-nowrap">
                  {it.price}
                </span>
              )}
            </div>
            {it.desc && (
              <p className="text-[13px] text-white/60 mt-1 leading-snug">{it.desc}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ----------------------------- PARTICLES LAYER ---------------------------- */

function Particles({ hostRef }: { hostRef: React.RefObject<HTMLDivElement> }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reqRef = useRef<number | null>(null);
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; r: number; a: number }>>([]);
  const roRef = useRef<ResizeObserver | null>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = host.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width));
      canvas.height = Math.max(1, Math.floor(rect.height));
      const count = Math.min(120, Math.floor((canvas.width * canvas.height) / 22000));
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        r: Math.random() * 0.9 + 0.4,
        a: Math.random() * 0.08 + 0.04
      }));
    };

    resize();
    roRef.current = new ResizeObserver(resize);
    roRef.current.observe(host);

    let last: number | null = null;
    const step = (ts: number) => {
      if (last == null) last = ts;
      const dt = Math.min(0.05, (ts - last) / 1000);
      last = ts;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particlesRef.current) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        if (p.x < -5) p.x = canvas.width + 5;
        if (p.x > canvas.width + 5) p.x = -5;
        if (p.y < -5) p.y = canvas.height + 5;
        if (p.y > canvas.height + 5) p.y = -5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.a})`;
        ctx.fill();
      }

      reqRef.current = requestAnimationFrame(step);
    };

    reqRef.current = requestAnimationFrame(step);
    return () => {
      if (reqRef.current != null) cancelAnimationFrame(reqRef.current);
      if (roRef.current) roRef.current.disconnect();
    };
  }, [hostRef]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-10"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

/* --------------------------------- PAGE --------------------------------- */

export default function Menu() {
  const normal = sections.filter((s) => s.title !== "Sides");
  const sides = sections.find((s) => s.title === "Sides");
  const hostRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={hostRef} className="relative space-y-8">
      <div className="relative mx-auto max-w-3xl pt-2">
        <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-30">
          <div className="mx-auto h-24 w-3/4 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(185,28,28,0.25),rgba(17,24,39,0))]" />
        </div>
        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-wide">
          <span className="relative inline-block">
            <span className="absolute -inset-1 rounded-lg bg-red-900/20 blur-sm" />
            <span className="relative bg-gradient-to-b from-red-200 via-red-100 to-gray-200 bg-clip-text text-transparent drop-shadow">
              Menu
            </span>
          </span>
        </h2>
        <div className="mt-3 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-white/15" />
          <span className="text-xs uppercase tracking-[0.25em] text-white/50">Tavern Classics</span>
          <span className="h-px w-12 bg-white/15" />
        </div>
      </div>

      {/* subtle transparent particles */}
      <Particles hostRef={hostRef} />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {normal.map((s, i) => (
          <Card key={s.title} s={s} idx={i} />
        ))}
      </div>

      {sides && (
        <div className="grid">
          <div className="md:col-span-2 xl:col-span-3">
            <Card s={sides} idx={999} />
          </div>
        </div>
      )}
    </div>
  );
}
