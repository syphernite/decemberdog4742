import React from "react";
import { Phone } from "lucide-react";
import menu from "../content/menu.json";
import site from "../content/site.json";

type Item = {
  name: string;
  desc?: string;
  price?: number;
  image?: string;
  tags?: string[];
  spicy?: boolean;
  veg?: boolean;
};

export default function MenuPage() {
  const base = (import.meta as any).env.BASE_URL || "/";
  const storefront = base + "images/storefront.jpg";

  return (
    <section className="relative min-h-[92svh] bg-black text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover blur-sm"
        style={{ backgroundImage: `url(${storefront})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold animate-fade-up opacity-0" style={{ animationDelay: "120ms", animationFillMode: "forwards" }}>
            Menu
          </h1>
          <p className="text-neutral-300 mt-2 animate-fade-up opacity-0" style={{ animationDelay: "220ms", animationFillMode: "forwards" }}>
            Fresh, fast, and faithful to {site.name}.
          </p>
        </header>

        {/* Category quick links */}
        <nav className="flex flex-wrap gap-2 justify-center mb-8 animate-fade-up opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
          {(menu as any).categories.map((c: any) => (
            <a
              key={c.name}
              href={`#${slug(c.name)}`}
              className="chip rounded-none"
            >
              {c.name}
            </a>
          ))}
        </nav>

        {/* Categories */}
        <div className="space-y-12">
          {(menu as any).categories.map((cat: any, ci: number) => (
            <section
              key={cat.name}
              id={slug(cat.name)}
              className="animate-fade-up opacity-0"
              style={{ animationDelay: `${380 + ci * 120}ms`, animationFillMode: "forwards" }}
            >
              <h2
                className="text-2xl md:text-3xl font-extrabold mb-4"
                style={{ color: cat.color || "var(--pm-green)" }}
              >
                {cat.name}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((it: Item, i: number) => (
                  <article
                    key={it.name + i}
                    className="menu-card overflow-hidden animate-fade-up opacity-0"
                    style={{ animationDelay: `${420 + i * 80}ms`, animationFillMode: "forwards" }}
                  >
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
                      {it.desc && (
                        <p className="mt-1 text-neutral-300 text-sm">{it.desc}</p>
                      )}

                      {/* Tags */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {it.spicy && <span className="tag tag-red rounded-none">Spicy</span>}
                        {it.veg && <span className="tag tag-green rounded-none">Vegetarian</span>}
                        {(it.tags || []).map((t) => (
                          <span key={t} className="tag rounded-none">{t}</span>
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
        <div className="text-center mt-12 animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          <a
            href={`tel:${site.phone}`}
            className="group inline-flex items-center justify-center gap-2 rounded-none px-6 py-3
                       text-base md:text-lg font-semibold tracking-wide
                       bg-gradient-to-br from-rose-600 to-rose-700
                       shadow-[0_8px_30px_rgba(244,63,94,0.35)]
                       hover:shadow-[0_12px_40px_rgba(244,63,94,0.55)]
                       active:translate-y-px ring-1 ring-rose-400/30
                       hover:from-rose-500 hover:to-rose-700
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/80
                       transition-all"
          >
            <Phone className="h-5 w-5 transition-transform group-hover:scale-110" />
            Call to order
          </a>
        </div>
      </div>
    </section>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
