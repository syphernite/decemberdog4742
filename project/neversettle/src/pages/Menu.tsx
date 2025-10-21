import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Share2, Flame, Droplet, Apple } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { MenuItem, AddIn } from '../types';

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Tropical Thunder',
    category: 'shake',
    base_cal: 240,
    macros: { protein: 24, carbs: 28, fat: 2 },
    img_url: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: true,
    description: 'Pineapple, mango, and coconut bliss',
  },
  {
    id: '2',
    name: 'Chocolate Thunder',
    category: 'shake',
    base_cal: 260,
    macros: { protein: 26, carbs: 30, fat: 3 },
    img_url: 'https://images.pexels.com/photos/5945998/pexels-photo-5945998.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: true,
    description: 'Rich chocolate with protein power',
  },
  {
    id: '3',
    name: 'Berry Blast',
    category: 'shake',
    base_cal: 220,
    macros: { protein: 22, carbs: 26, fat: 2 },
    img_url: 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
    description: 'Mixed berries and vanilla',
  },
  {
    id: '4',
    name: 'Electric Energy',
    category: 'tea',
    base_cal: 24,
    macros: { protein: 0, carbs: 6, fat: 0 },
    img_url: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: true,
    description: 'Energizing loaded tea with vitamins',
  },
  {
    id: '5',
    name: 'Peach Paradise',
    category: 'tea',
    base_cal: 20,
    macros: { protein: 0, carbs: 5, fat: 0 },
    img_url: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
    description: 'Refreshing peach loaded tea',
  },
  {
    id: '6',
    name: 'Power Waffle',
    category: 'waffle',
    base_cal: 320,
    macros: { protein: 28, carbs: 35, fat: 8 },
    img_url: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: true,
    description: 'Protein-packed Belgian waffle',
  },
];

const addIns: AddIn[] = [
  {
    id: 'protein',
    name: 'Extra Protein',
    type: 'protein',
    macros: { protein: 12, carbs: 2, fat: 1, calories: 60 },
    compatible_with: ['shake', 'waffle'],
  },
  {
    id: 'collagen',
    name: 'Collagen Boost',
    type: 'collagen',
    macros: { protein: 10, carbs: 0, fat: 0, calories: 40 },
    compatible_with: ['shake', 'tea'],
  },
  {
    id: 'caffeine',
    name: 'Caffeine Shot',
    type: 'caffeine',
    macros: { protein: 0, carbs: 0, fat: 0, calories: 5 },
    compatible_with: ['shake', 'tea'],
  },
  {
    id: 'vitamin',
    name: 'Vitamin Infusion',
    type: 'vitamin',
    macros: { protein: 0, carbs: 1, fat: 0, calories: 10 },
    compatible_with: ['shake', 'tea'],
  },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState<'shake' | 'tea' | 'snack' | 'waffle'>('shake');
  const [selectedBase, setSelectedBase] = useState<MenuItem | null>(null);
  const [selectedAddIns, setSelectedAddIns] = useState<AddIn[]>([]);
  const [filter, setFilter] = useState<string>('all');

  const tabs = [
    { id: 'shake' as const, label: 'Shakes', icon: Droplet },
    { id: 'tea' as const, label: 'Teas', icon: Flame },
    { id: 'waffle' as const, label: 'Waffles', icon: Apple },
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'low-cal', label: 'Low Cal' },
    { id: 'energy', label: 'Energy Boost' },
    { id: 'muscle', label: 'Muscle Fuel' },
  ];

  const filteredItems = menuItems.filter((item) => {
    if (item.category !== activeTab) return false;
    if (filter === 'all') return true;
    if (filter === 'low-cal') return item.base_cal < 250;
    if (filter === 'energy') return item.category === 'tea';
    if (filter === 'muscle') return item.macros.protein > 20;
    return true;
  });

  const calculateTotalMacros = () => {
    if (!selectedBase) return null;

    let totals = {
      calories: selectedBase.base_cal,
      protein: selectedBase.macros.protein,
      carbs: selectedBase.macros.carbs,
      fat: selectedBase.macros.fat,
    };

    selectedAddIns.forEach((addIn) => {
      totals.calories += addIn.macros.calories;
      totals.protein += addIn.macros.protein;
      totals.carbs += addIn.macros.carbs;
      totals.fat += addIn.macros.fat;
    });

    return totals;
  };

  const toggleAddIn = (addIn: AddIn) => {
    if (selectedAddIns.find((a) => a.id === addIn.id)) {
      setSelectedAddIns(selectedAddIns.filter((a) => a.id !== addIn.id));
    } else {
      setSelectedAddIns([...selectedAddIns, addIn]);
    }
  };

  const shareBlend = () => {
    if (!selectedBase) return;
    const addInNames = selectedAddIns.map((a) => a.name).join(', ');
    const message = `Check out my custom blend: ${selectedBase.name}${addInNames ? ` with ${addInNames}` : ''}`;
    navigator.clipboard.writeText(message);
    alert('Blend copied to clipboard!');
  };

  const totals = calculateTotalMacros();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24 pb-20">
      <AnimatedSection className="px-4 mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Interactive Menu
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Build your perfect fuel, your way
          </p>
        </div>
      </AnimatedSection>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/50'
                  : 'bg-slate-800 text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </motion.button>
          ))}
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f.id
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                  : 'bg-slate-800/50 text-gray-400 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05 }}
                  className={`relative group cursor-pointer rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 border-2 transition-all ${
                    selectedBase?.id === item.id
                      ? 'border-emerald-500 shadow-lg shadow-emerald-500/50'
                      : 'border-slate-700 hover:border-cyan-500/50'
                  }`}
                  onClick={() => setSelectedBase(item)}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={item.img_url}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    {item.featured && (
                      <div className="absolute top-3 right-3 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-emerald-400 font-semibold">{item.base_cal} cal</span>
                      <span className="text-cyan-400 font-semibold">{item.macros.protein}g protein</span>
                    </div>
                  </div>

                  {selectedBase?.id === item.id && (
                    <motion.div
                      layoutId="selected"
                      className="absolute inset-0 border-4 border-emerald-400 rounded-2xl pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            className="lg:sticky lg:top-24 h-fit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-emerald-500/20 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Build Your Own</h3>

              {!selectedBase ? (
                <div className="text-center py-12">
                  <p className="text-gray-400">Select a base to start building</p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-emerald-400 mb-3">Step 1: Base</h4>
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-emerald-500/30">
                      <p className="text-white font-medium">{selectedBase.name}</p>
                      <p className="text-gray-400 text-sm">{selectedBase.base_cal} cal</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Step 2: Add-ins</h4>
                    <div className="space-y-2">
                      {addIns
                        .filter((addIn) => addIn.compatible_with.includes(selectedBase.category))
                        .map((addIn) => {
                          const isSelected = selectedAddIns.find((a) => a.id === addIn.id);
                          return (
                            <motion.button
                              key={addIn.id}
                              onClick={() => toggleAddIn(addIn)}
                              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                                isSelected
                                  ? 'bg-emerald-500/20 border border-emerald-500'
                                  : 'bg-slate-900/50 border border-slate-700 hover:border-cyan-500/50'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="text-left">
                                <p className="text-white font-medium">{addIn.name}</p>
                                <p className="text-gray-400 text-xs">+{addIn.macros.calories} cal</p>
                              </div>
                              {isSelected ? (
                                <Minus className="w-5 h-5 text-emerald-400" />
                              ) : (
                                <Plus className="w-5 h-5 text-gray-400" />
                              )}
                            </motion.button>
                          );
                        })}
                    </div>
                  </div>

                  {totals && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-xl p-5 border border-emerald-500/30 mb-4"
                    >
                      <h4 className="text-lg font-semibold text-white mb-3">Your Macros</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-gray-400">Calories</p>
                          <p className="text-white font-bold text-xl">{totals.calories}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Protein</p>
                          <p className="text-emerald-400 font-bold text-xl">{totals.protein}g</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Carbs</p>
                          <p className="text-cyan-400 font-bold text-xl">{totals.carbs}g</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Fat</p>
                          <p className="text-blue-400 font-bold text-xl">{totals.fat}g</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <motion.button
                    onClick={shareBlend}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/50 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Share2 className="w-5 h-5" />
                    Share My Blend
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
