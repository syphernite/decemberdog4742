import React from "react";
import menu from "../content/menu.json";
import site from "../content/site.json";

type Item = { name: string; desc?: string; price?: number; image?: string; tags?: string[]; spicy?: boolean; veg?: boolean };

export default function MenuPage() {
  const base = (import.meta as any).env.BASE_URL || "/";
  return (
    <section className="relative py-14 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold">Menu</h1>
          <p className="text-neutral-300 mt-2">
            Fresh, fast, and faithful to {site.name}.
          </p>
        </header>

        {/* Category quick links */}
        <nav className="flex flex-wrap gap-2 justify-center mb-8">
          {(menu as any).categories.map((c: any) => (
            <a key={c.name} href={`#${slug(c.name)}`} className="chip">
              {c.name}
            </a>
          ))}
        </nav>

        {/* Categories */}
        <div className="space-y-12">
          {(menu as any).categories.map((cat: any) => (
            <section key={cat.name} id={slug(cat.name)}>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4"
                  style={{ color: cat.color || "var(--pm-green)" }}>
                {cat.name}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((it: Item, i: number) => (
                  <article key={it.name + i} className="menu-card">
                    {it.image && (
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={base + (it.image.startsWith("/") ? it.image.slice(1) : it.image)}
                          alt={it.name}
                          className="w-full h-full object-cover"
                          loading={i < 2 ? "eager" : "lazy"}
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-semibold text-lg leading-snug">{it.name}</h3>
                        {typeof it.price === "number" && (
                          <div className="price">${it.price.toFixed(2)}</div>
                        )}
                      </div>
                      {it.desc && <p className="mt-1 text-neutral-300 text-sm">{it.desc}</p>}

                      {/* Tags */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {it.spicy && <span className="tag tag-red">Spicy</span>}
                        {it.veg && <span className="tag tag-green">Vegetarian</span>}
                        {(it.tags || []).map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <a href={`tel:${site.phone}`} className="btn-secondary-red">Call to order</a>
        </div>
      </div>
    </section>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
