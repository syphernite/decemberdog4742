import React, { useState, useEffect, useMemo } from 'react';
import { Flame, Star } from 'lucide-react';
import { menuData, categories, MenuItem } from '../data/menuData';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories?.[0]?.key || 'appetizers');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('fade-in-up');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const items = useMemo(
    () => menuData.filter(i => i.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <div className="min-h-screen bg-ocean-blue pt-24 pb-16">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 mb-6">
        <h1 className="font-display text-white text-4xl md:text-5xl mb-2 zoom-in">Our Menu</h1>
        <p className="text-sandy-beige animate-on-scroll">
          Real ingredients. Big portions. Coastal comfort in every bite.
        </p>
      </section>

      {/* Categories strip */}
      <section className="max-w-6xl mx-auto px-4 mb-8">
        <div className="menu-categories">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`cat-chip ${selectedCategory === cat.key ? 'cat-chip--active' : ''}`}
              type="button"
            >
              <span className="mr-1">{cat.icon ?? ''}</span>{cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Items */}
      <section className="max-w-6xl mx-auto px-4">
        {items.length === 0 && (
          <div className="text-sandy-beige">No items in this category yet.</div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item: MenuItem) => (
            <article
              key={item.id}
              className="animate-on-scroll rounded-2xl p-5 border border-white/10 bg-white/5 hover:bg-white/[0.07] transition"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                <div className="text-turquoise font-semibold">{item.price || ''}</div>
              </div>

              {item.description && (
                <p className="text-sandy-beige mt-2 text-sm">{item.description}</p>
              )}

              <div className="mt-3 flex items-center gap-2 flex-wrap">
                {item.popular && (
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-white/10 border border-white/15 text-white">
                    <Star className="h-3 w-3" /> Popular
                  </span>
                )}
                {item.spicy && (
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-red-500 text-white">
                    <Flame className="h-3 w-3" /> Spicy
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
