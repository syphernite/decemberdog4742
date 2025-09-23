// src/components/Menu.tsx
import React, { useMemo, useRef, useState, useEffect, UIEvent, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

type Category = 'fried-rice' | 'burgers' | 'chicken' | 'sides' | 'drinks';

type MenuItem = {
  id: string;
  category: Category;
  name: string;
  description: string;
  price?: string;
  featured?: boolean;
};

const MENU: MenuItem[] = [
  { id: 'fr-chicken', category: 'fried-rice', name: 'Chicken Fried Rice', description: 'Hot wok-fried rice with chicken and egg.', featured: true },
  { id: 'fr-beef', category: 'fried-rice', name: 'Beef Fried Rice', description: 'Savory beef tossed with seasoned fried rice.' },
  { id: 'fr-pork', category: 'fried-rice', name: 'Pork Fried Rice', description: 'Tender pork, scallions, and egg.' },
  { id: 'fr-shrimp', category: 'fried-rice', name: 'Shrimp Fried Rice', description: 'Plump shrimp, garlic, and wok heat.' },
  { id: 'fr-two', category: 'fried-rice', name: 'Any Two Meats Fried Rice', description: 'Pick two: chicken, beef, pork, or shrimp.' },

  { id: 'bg-hamburger', category: 'burgers', name: 'Hamburger', description: 'Griddled patty on a toasted bun.' },
  { id: 'bg-cheeseburger', category: 'burgers', name: 'Cheeseburger', description: 'Melted cheese, lettuce, tomato, and sauce.', featured: true },
  { id: 'bg-bacon-cheese', category: 'burgers', name: 'Bacon Cheeseburger', description: 'Crispy bacon with melty cheese.' },

  { id: 'ck-crispy-sandwich', category: 'chicken', name: 'Crispy Chicken Sandwich', description: 'Crispy filet, pickles, and mayo.' },
  { id: 'ck-tenders', category: 'chicken', name: 'Chicken Tenders Basket', description: 'Crunchy tenders with dipping sauce.' },
  { id: 'ck-wings-6', category: 'chicken', name: 'Wings (6 pc)', description: 'Tossed in house sauce.' },

  { id: 'sd-fries', category: 'sides', name: 'French Fries', description: 'Golden and salted.' },
  { id: 'sd-loaded-fries', category: 'sides', name: 'Loaded Fries', description: 'Cheese and toppings. Ask for today’s load.' },

  { id: 'dr-soda', category: 'drinks', name: 'Soda', description: 'Assorted cans or bottles.' },
  { id: 'dr-water', category: 'drinks', name: 'Water', description: 'Cold and refreshing.' },
];

const LABELS: Record<Category, string> = {
  'fried-rice': 'FRIED RICE',
  burgers: 'BURGERS',
  chicken: 'CHICKEN',
  sides: 'SIDES',
  drinks: 'DRINKS',
};

const ICON: Record<Category, string> = {
  'fried-rice': '🍚',
  burgers: '🍔',
  chicken: '🍗',
  sides: '🍟',
  drinks: '🥤',
};

const getByCategory = (c: Category) => MENU.filter((m) => m.category === c);

export default function Menu() {
  const [active, setActive] = useState<Category>('fried-rice');
  const [expanded, setExpanded] = useState<Record<Category, boolean>>({});
  const itemsAll = useMemo(() => getByCategory(active), [active]);

  const VISIBLE = 6;
  const isExpanded = !!expanded[active];
  const gridItems = isExpanded || itemsAll.length <= VISIBLE ? itemsAll : itemsAll.slice(0, VISIBLE);

  /** ----------------------- Mobile slider measurements ---------------------- */
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [slideIdx, setSlideIdx] = useState(0);
  const stepRef = useRef<number>(0);
  const cardWidthRef = useRef<number>(0);

  const computeMetrics = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const styles = getComputedStyle(el);
    const gapPx = parseFloat(styles.columnGap || '0') || 0;

    const firstCard = el.querySelector<HTMLElement>('[data-card]');
    let cardW = 0;
    if (firstCard) cardW = firstCard.getBoundingClientRect().width;
    if (!cardW) cardW = el.clientWidth * 0.82;

    cardWidthRef.current = cardW;
    stepRef.current = cardW + gapPx;
  }, []);

  const snapToIndex = useCallback(
    (idx: number, behavior: ScrollBehavior = 'smooth') => {
      const el = trackRef.current;
      if (!el) return;

      const count = itemsAll.length;
      const clamped = Math.max(0, Math.min(idx, count - 1));

      const step = stepRef.current || 0;
      const cardW = cardWidthRef.current || 0;
      const containerW = el.clientWidth;

      let target = clamped * step - (containerW - cardW) / 2;
      const maxLeft = el.scrollWidth - containerW;
      if (target < 0) target = 0;
      if (target > maxLeft) target = maxLeft;

      el.scrollTo({ left: target, behavior });
      setSlideIdx(clamped);
    },
    [itemsAll.length]
  );

  const scrollToDir = (dir: -1 | 1) => snapToIndex(slideIdx + dir);

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const step = stepRef.current || Math.max(1, Math.round(el.clientWidth * 0.82));
    const cardW = cardWidthRef.current || 0;
    const approxIdx = Math.round((el.scrollLeft + (el.clientWidth - cardW) / 2) / step);
    const clamped = Math.max(0, Math.min(approxIdx, itemsAll.length - 1));
    if (clamped !== slideIdx) setSlideIdx(clamped);
  };

  useEffect(() => {
    const handle = () => {
      computeMetrics();
      snapToIndex(0, 'auto');
    };
    handle();

    const ro = new ResizeObserver(() => handle());
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener('orientationchange', handle);
    window.addEventListener('resize', handle);

    return () => {
      ro.disconnect();
      window.removeEventListener('orientationchange', handle);
      window.removeEventListener('resize', handle);
    };
  }, [active, itemsAll.length, computeMetrics, snapToIndex]);

  useEffect(() => {
    setSlideIdx(0);
    computeMetrics();
    snapToIndex(0, 'auto');
  }, [active, computeMetrics, snapToIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { y: 18, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  const shimmerStyle: React.CSSProperties = {
    backgroundImage: 'linear-gradient(90deg,#ffffff 0%,#ef4444 50%,#ffffff 100%)',
    backgroundSize: '200% 100%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  };

  const BASE = import.meta.env.BASE_URL;
  const BG = `${BASE}images/menu-bg2.jpg`;

  return (
    <section id="menu-page" className="relative scroll-mt-24 sm:scroll-mt-28">
      {/* Background layer */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center transform-gpu scale-[1.06]"
          style={{ backgroundImage: `url(${BG})`, filter: 'blur(8px)', backgroundPosition: 'center 35%' }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      <div className="container mx-auto px-4 pt-24 md:pt-28 pb-16">
        {/* Menu surface (the white card). We give it an ID so the header scroll hits it exactly. */}
        <div
          id="menu-card"
          className="mx-auto w-full max-w-5xl rounded-2xl bg-[#f9f5f5] shadow-2xl border border-black/5 p-5 sm:p-10"
        >
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-5 sm:mb-8">
            <motion.h2
              className="font-display text-4xl sm:text-7xl font-extrabold tracking-tight text-transparent"
              style={shimmerStyle}
              animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            >
              OUR MENU
            </motion.h2>
            <p className="font-body text-base sm:text-xl text-gray-700 mt-3">
              Fresh ingredients, bold flavors, generous portions
            </p>
          </motion.div>

          {/* Category pills */}
          <div className="mb-6 sm:mb-8 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="inline-flex bg-white rounded-xl p-1 shadow border border-black/10">
              {(Object.keys(LABELS) as Category[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-4 sm:px-7 py-2.5 sm:py-3 rounded-lg font-body font-bold text-sm sm:text-base transition-all ${
                    active === c
                      ? 'bg-red-primary text-white shadow-lg border border-red-primary/70'
                      : 'text-gray-800 hover:text-red-primary hover:bg-white'
                  }`}
                  aria-pressed={active === c}
                >
                  {LABELS[c]}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Slider */}
          <div className="sm:hidden relative">
            <div
              ref={trackRef}
              onScroll={onScroll}
              className="flex gap-3 overflow-x-auto snap-x snap-mandatory snap-center px-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {itemsAll.map((item) => (
                <div key={item.id} className="snap-center shrink-0 w-[82vw] max-w-[520px] mx-auto" data-card>
                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -2, scale: 1.01 }}
                    className="rounded-2xl border border-white/30 bg-white/10 backdrop-blur-xl overflow-hidden transition-all duration-300 shadow-[0_8px_28px_rgba(0,0,0,0.18)] ring-1 ring-white/20"
                  >
                    <div className="h-40 bg-gradient-to-br from-rose-50/80 via-rose-100/70 to-rose-50/40 relative overflow-hidden">
                      {item.featured && (
                        <div className="absolute top-3 right-3 bg-red-primary text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow">
                          <Star size={14} fill="currentColor" />
                          <span>POPULAR</span>
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/70 flex items-center justify-center ring-1 ring-black/5">
                          <span className="text-3xl">{ICON[item.category]}</span>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/5" />
                    </div>
                    <div className="p-5 bg-white/90">
                      <div className="flex justify-between items-start mb-2.5">
                        <h3 className="font-body font-bold text-lg text-gray-900">{item.name}</h3>
                        {item.price ? (
                          <span className="font-display text-xl font-normal text-red-600 ml-3 flex-shrink-0">
                            {item.price}
                          </span>
                        ) : null}
                      </div>
                      <p className="text-gray-700 font-body text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {itemsAll.length > 1 && (
              <>
                <button
                  onClick={() => scrollToDir(-1)}
                  aria-label="Previous item"
                  className="absolute left-1 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/85 text-black shadow backdrop-blur"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => scrollToDir(1)}
                  aria-label="Next item"
                  className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/85 text-black shadow backdrop-blur"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}

            {itemsAll.length > 1 && (
              <div className="mt-3 flex items-center justify-center gap-1.5">
                {itemsAll.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${i === slideIdx ? 'w-5 bg-red-primary' : 'w-2 bg-black/30'}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={active + String(isExpanded)}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {gridItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    whileHover={{
                      y: -6,
                      scale: 1.04,
                      boxShadow: '0 14px 40px rgba(0,0,0,0.16)',
                      transition: { duration: 0.25 },
                    }}
                    className="rounded-2xl overflow-hidden border border-white/30 bg-white/10 backdrop-blur-xl transition-all duration-300 group ring-1 ring-white/20"
                  >
                    <div className="h-44 bg-gradient-to-br from-rose-50/80 via-rose-100/70 to-rose-50/40 relative overflow-hidden">
                      {item.featured && (
                        <div className="absolute top-4 right-4 bg-red-primary text-white px-2.5 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow">
                          <Star size={14} fill="currentColor" />
                          <span>POPULAR</span>
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/70 flex items-center justify-center ring-1 ring-black/5">
                          <span className="text-3xl">{ICON[item.category]}</span>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/5" />
                    </div>
                    <div className="p-6 bg-white/90">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-body font-bold text-lg text-gray-900 group-hover:text-red-700 transition-colors leading-tight">
                          {item.name}
                        </h3>
                        {item.price ? (
                          <span className="font-display text-xl font-normal text-red-600 ml-4 flex-shrink-0">
                            {item.price}
                          </span>
                        ) : null}
                      </div>
                      <p className="text-gray-700 font-body text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {itemsAll.length > VISIBLE && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setExpanded((s) => ({ ...s, [active]: !s[active] }))}
                  className="mx-auto inline-flex items-center justify-center rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? 'Show fewer items' : 'Show more items'}
                </button>
              </div>
            )}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center mt-10 sm:mt-12"
          >
            <motion.a
              href="tel:580-771-6373"
              className="bg-red-primary hover:bg-red-dark text-white px-6 sm:px-8 py-4 rounded-xl font-body font-bold text-lg md:text-xl border-2 border-red-600 inline-flex items-center justify-center gap-3 w-full sm:w-auto shadow-[0_0_30px_rgba(220,38,38,0.45)]"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(220,38,38,0.55)' }}
              whileTap={{ scale: 0.97 }}
            >
              CALL TO ORDER: 580-771-6373
            </motion.a>
            <p className="text-xs text-gray-600 mt-3">
              Menu items may change. Call for today’s prices and specials.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
