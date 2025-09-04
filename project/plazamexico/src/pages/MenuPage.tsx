import React, { useMemo, useState } from "react";
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
  popular?: boolean;
  featured?: boolean;
};

type Category = {
  name: string;
  color?: string;
  items: Item[];
};

export default function MenuPage() {
  const [showFull, setShowFull] = useState(false);

  const base = (import.meta as any).env.BASE_URL || "/";
  const storefront = base + "images/storefront.jpg";

  const categories = (menu as any).categories as Category[];

  const popularItems = useMemo(() => {
    const all = categories.flatMap((c) =>
      c.items.map((it) => ({ ...it, _cat: c.name, _color: c.color }))
    ) as (Item & { _cat: string; _color?: string })[];

    const bySignal = all.filter((it) => {
      const tagHit = (it.tags || []).some((t) =>
        ["popular", "bestseller", "fan favorite", "chef special"].includes(
          t.toLowerCase()
        )
      );
      return Boolean(it.popular || it.featured || tagHit);
    });

    const withImage = (arr: (Item & { _cat: string; _color?: string })[]) =>
      arr.filter((it) => typeof it.image === "string" && it.image!.trim().length > 0);

    const primary = withImage(bySignal);
    const fallback = withImage(all);
    return (primary.length ? primary : fallback).slice(0, 9);
  }, [categories]);

  const placeholderFor = (i: number) =>
    base + `images/templates/plate-${(i % 3) + 1}.jpg`;

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
          <h1
            className="text-4xl md:text-5xl font-extrabold animate-fade-up opacity-0"
            style={{ animationDelay: "120ms", animationFillMode: "forwards" }}
          >
            Menu
          </h1>
          <p
            className="text-neutral-300 mt-2 animate-fade-up opacity-0"
            style={{ animationDelay: "220ms", animationFillMode: "forwards" }}
          >
            Fresh, fast, and faithful to {site.name}.
          </p>
        </header>

        {/* NEW: two extra images near top */}
        <section
          className="mb-10 animate-fade-up opacity-0"
          style={{ animationDelay: "260ms", animationFillMode: "forwards" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <figure className="relative overflow-hidden rounded-sm ring-1 ring-white/10">
              <img
                src={base + "images/menu-extra-1.jpg"}
                alt="Featured dish 1"
                className="w-full h-[260px] md:h-[320px] object-cover transition-transform duration-500 hover:scale-[1.03]"
                loading="eager"
              />
            </figure>
            <figure className="relative overflow-hidden rounded-sm ring-1 ring-white/10">
              <img
                src={base + "images/menu-extra-2.jpg"}
                alt="Featured dish 2"
                className="w-full h-[260px] md:h-[320px] object-cover transition-transform duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        {/* Popular section (default view) */}
        {!showFull && (
          <section
            className="animate-fade-up opacity-0"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            <h2
              className="text-2xl md:text-3xl font-extrabold mb-4"
              style={{ color: "var(--pm-green)" }}
            >
              Popular Picks
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularItems.map((it, i) => (
                <article
                  key={it.name + i}
                  className="menu-card overflow-hidden animate-fade-up opacity-0"
                  style={{ animationDelay: `${340 + i * 80}ms`, animationFillMode: "forwards" }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={
                        it.image
                          ? base + (it.image.startsWith("/") ? it.image.slice(1) : it.image)
                          : placeholderFor(i)
                      }
                      alt={it.name}
                      className="w-full h-full object-cover"
                      loading={i < 2 ? "eager" : "lazy"}
                    />
                  </div>
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

                    <div className="mt-3 flex flex-wrap gap-2">
                      {it.spicy && <span className="tag tag-red rounded-none">Spicy</span>}
                      {it.veg && <span className="tag tag-green rounded-none">Vegetarian</span>}
                      {(it.tags || []).map((t) => (
                        <span key={t} className="tag rounded-none">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA row with animated buttons */}
            <div className="mt-10 flex flex-col items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setShowFull(true);
                  requestAnimationFrame(() => {
                    const el = document.getElementById("full-menu-top");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  });
                }}
                className="relative group inline-flex items-center justify-center gap-2 rounded-none px-6 py-3
                           text-base md:text-lg font-semibold tracking-wide
                           bg-gradient-to-br from-emerald-600 to-emerald-700
                           shadow-[0_8px_30px_rgba(5,150,105,0.35)]
                           ring-1 ring-emerald-400/30
                           transition duration-200 ease-out
                           hover:from-emerald-500 hover:to-emerald-700
                           hover:shadow-[0_12px_40px_rgba(5,150,105,0.55)]
                           hover:scale-[1.03] active:scale-95
                           focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/60
                           animate-[pulse_2.2s_ease-in-out_infinite]"
                aria-label="View full menu"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/0 [mask-image:radial-gradient(180px_60px_at_var(--x,50%)_50%,#000_30%,transparent_60%)]" />
                <span className="transition-transform group-hover:-translate-y-0.5">
                  View full menu
                </span>
              </button>

              <a
                href={`tel:${site.phone}`}
                className="relative group inline-flex items-center justify-center gap-2 rounded-none px-6 py-3
                           text-base md:text-lg font-semibold tracking-wide
                           bg-gradient-to-br from-rose-600 to-rose-700
                           shadow-[0_8px_30px_rgba(244,63,94,0.35)]
                           ring-1 ring-rose-400/30
                           transition duration-200 ease-out
                           hover:from-rose-500 hover:to-rose-700
                           hover:shadow-[0_12px_40px_rgba(244,63,94,0.55)]
                           hover:scale-[1.03] active:scale-95
                           focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-300/60
                           animate-[pulse_2.4s_ease-in-out_infinite]"
                aria-label="Call to order"
              >
                <Phone className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="transition-transform group-hover:-translate-y-0.5">
                  Call to order
                </span>
              </a>
            </div>
          </section>
        )}

        {/* Full menu view */}
        {showFull && (
          <div id="full-menu-top" className="mt-2">
            <nav
              className="flex flex-wrap gap-2 justify-center mb-8 animate-fade-up opacity-0"
              style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
            >
              {categories.map((c) => (
                <a key={c.name} href={`#${slug(c.name)}`} className="chip rounded-none">
                  {c.name}
                </a>
              ))}
            </nav>

            <div className="space-y-12">
              {categories.map((cat, ci) => (
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
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={
                              it.image
                                ? base + (it.image.startsWith("/") ? it.image.slice(1) : it.image)
                                : placeholderFor(i)
                            }
                            alt={it.name}
                            className="w-full h-full object-cover"
                            loading={i < 2 ? "eager" : "lazy"}
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="font-semibold text-lg leading-snug">{it.name}</h3>
                            {typeof it.price === "number" && (
                              <div className="price">${it.price.toFixed(2)}</div>
                            )}
                          </div>
                          {it.desc && <p className="mt-1 text-neutral-300 text-sm">{it.desc}</p>}

                          <div className="mt-3 flex flex-wrap gap-2">
                            {it.spicy && <span className="tag tag-red rounded-none">Spicy</span>}
                            {it.veg && <span className="tag tag-green rounded-none">Vegetarian</span>}
                            {(it.tags || []).map((t) => (
                              <span key={t} className="tag rounded-none">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div
              className="text-center mt-12 animate-fade-up opacity-0"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              <button
                type="button"
                onClick={() => setShowFull(false)}
                className="relative group inline-flex items-center justify-center gap-2 rounded-none px-6 py-3
                           text-base md:text-lg font-semibold tracking-wide
                           bg-gradient-to-br from-neutral-700 to-neutral-800
                           shadow-[0_8px_30px_rgba(115,115,115,0.35)]
                           ring-1 ring-neutral-500/30
                           transition duration-200 ease-out
                           hover:from-neutral-600 hover:to-neutral-800
                           hover:shadow-[0_12px_40px_rgba(115,115,115,0.55)]
                           hover:scale-[1.03] active:scale-95
                           focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-300/60"
                aria-label="Back to popular"
              >
                <span className="transition-transform group-hover:-translate-y-0.5">
                  Back to popular
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
