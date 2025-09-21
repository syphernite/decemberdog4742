import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

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

const Menu = () => {
  const [active, setActive] = useState<Category>('fried-rice');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { y: 18, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  const items = getByCategory(active);

  return (
    <section id="menu-page" className="relative bg-neutral-50 scroll-mt-24 sm:scroll-mt-28">
      <div className="container mx-auto px-4 pt-24 md:pt-28 pb-16">
        {/* Card wrapper */}
        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white shadow-xl sm:shadow-2xl border border-black/5 ring-1 ring-black/5 p-5 sm:p-10">
          {/* Title */}
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-5 sm:mb-8">
            <h2 className="font-display text-4xl sm:text-7xl font-normal text-black-deep tracking-tight">
              OUR MENU
            </h2>
            <p className="font-body text-base sm:text-xl text-gray-800 mt-3">
              Fresh ingredients, bold flavors, generous portions
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="mb-6 sm:mb-8 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="inline-flex bg-white rounded-xl p-1 shadow border border-black/10">
              {(Object.keys(LABELS) as Category[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-4 sm:px-7 py-2.5 sm:py-3 rounded-lg font-body font-bold text-sm sm:text-base transition-all ${
                    active === c
                      ? 'bg-red-primary text-white shadow-lg border-2 border-red-primary/70'
                      : 'text-gray-700 hover:text-red-primary hover:bg-white'
                  }`}
                  aria-pressed={active === c}
                >
                  {LABELS[c]}
                </button>
              ))}
            </div>
          </div>

          {/* Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ y: -4, rotateY: 2, scale: 1.02, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl shadow-md sm:shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-red-primary/30 transition-all duration-300 group"
                >
                  {/* Visual header */}
                  <div className="h-36 sm:h-44 bg-gradient-to-br from-red-primary/5 to-red-primary/10 relative overflow-hidden">
                    {item.featured && (
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-red-primary text-white px-2.5 py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1">
                        <Star size={14} fill="currentColor" />
                        <span>POPULAR</span>
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-2xl sm:text-3xl">{ICON[item.category]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Copy */}
                  <div className="p-5 sm:p-6">
                    <div className="flex justify-between items-start mb-2.5 sm:mb-3">
                      <h3 className="font-body font-bold text-base sm:text-lg text-black-deep group-hover:text-red-primary transition-colors leading-tight">
                        {item.name}
                      </h3>
                      {item.price ? (
                        <span className="font-display text-lg sm:text-xl font-normal text-red-primary ml-3 sm:ml-4 flex-shrink-0">
                          {item.price}
                        </span>
                      ) : null}
                    </div>
                    <p className="text-gray-600 font-body text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

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
              className="bg-red-primary hover:bg-red-dark text-white px-6 sm:px-8 py-4 rounded-xl font-body font-bold text-lg md:text-xl border-2 border-red-primary/70 inline-flex items-center justify-center gap-3 w-full sm:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 24px rgba(199,20,24,0.4)' }}
            >
              CALL TO ORDER: 580-771-6373
            </motion.a>
            <p className="text-xs text-gray-500 mt-3">
              Menu items may change. Call for today’s prices and specials.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
