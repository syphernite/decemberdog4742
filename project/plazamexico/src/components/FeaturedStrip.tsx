import React, { useMemo } from "react";
import menu from "../content/menu.json";

type Item = { name: string; desc?: string; price?: number; image?: string; tags?: string[]; featured?: boolean };

export default function FeaturedStrip() {
  const items = useMemo(() => {
    const list: Item[] = [];
    for (const cat of (menu as any).categories) {
      for (const it of cat.items as Item[]) {
        if (it.featured || (it.tags || []).includes("popular")) list.push(it);
      }
    }
    return list.slice(0, 3);
  }, []);

  if (items.length === 0) return null;

  return (
    <section className="relative py-16 bg-gradient-to-b from-black via-black to-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-white mb-8 tracking-tight">
          Crowd Favorites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <article
              key={it.name}
              className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden animate-fade-up"
              style={{ animationDelay: `${i * 120}ms` as React.CSSProperties["animationDelay"] }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={it.image || "/images/restaurant-interior.jpg"}
                  alt={it.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{it.name}</h3>
                {it.desc && <p className="text-neutral-300 text-sm mt-1 line-clamp-2">{it.desc}</p>}
                {typeof it.price === "number" && (
                  <div className="mt-3 text-[#ce1126] font-semibold">${it.price.toFixed(2)}</div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-sheen" />
    </section>
  );
}
