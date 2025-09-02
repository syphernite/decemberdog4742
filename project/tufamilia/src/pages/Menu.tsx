import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus } from 'lucide-react';
import Button from '../components/Button';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  heat: number;
  category: string;
  dietary: string[];
  story?: string;
  allergens?: string[];
  image: string;
}

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('antojitos');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'antojitos', name: 'Antojitos', emoji: '🌮' },
    { id: 'tacos', name: 'Tacos', emoji: '🌯' },
    { id: 'platos', name: 'Platos', emoji: '🍽️' },
    { id: 'postres', name: 'Postres', emoji: '🍰' },
    { id: 'bebidas', name: 'Bebidas', emoji: '🍹' },
  ];

  const menuItems: MenuItem[] = [
    // Antojitos
    {
      id: '1',
      name: 'Guacamole Tradicional',
      description: 'Fresh avocados with lime, cilantro, and jalapeños',
      price: '$12',
      heat: 1,
      category: 'antojitos',
      dietary: ['vegetarian', 'gluten-free'],
      story: 'Made tableside with the perfect balance of creamy avocados, bright lime, and a hint of heat from jalapeños.',
      allergens: [],
      image: 'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      name: 'Queso Fundido',
      description: 'Melted Oaxaca cheese with chorizo and poblano peppers',
      price: '$14',
      heat: 2,
      category: 'antojitos',
      dietary: [],
      story: 'Our signature cheese blend melted to perfection with house-made chorizo and roasted poblanos.',
      allergens: ['dairy'],
      image: 'https://images.pexels.com/photos/4051443/pexels-photo-4051443.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    // Tacos
    {
      id: '3',
      name: 'Carnitas',
      description: 'Slow-braised pork shoulder with house-made tortillas',
      price: '$14',
      heat: 2,
      category: 'tacos',
      dietary: [],
      story: 'Pork shoulder braised for 8 hours until tender, served on handmade corn tortillas with onions and cilantro.',
      allergens: [],
      image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '4',
      name: 'Pescado del Día',
      description: 'Fresh catch with chipotle crema and cabbage slaw',
      price: '$16',
      heat: 2,
      category: 'tacos',
      dietary: [],
      story: 'Daily fresh catch grilled to perfection, topped with smoky chipotle crema and crisp cabbage.',
      allergens: ['fish', 'dairy'],
      image: 'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    // Platos
    {
      id: '5',
      name: 'Mole Poblano',
      description: 'Traditional chocolate-chili sauce with tender chicken',
      price: '$22',
      heat: 3,
      category: 'platos',
      dietary: [],
      story: 'Our grandmother\'s recipe featuring 20 ingredients including Mexican chocolate and dried chiles.',
      allergens: ['nuts'],
      image: 'https://images.pexels.com/photos/8448328/pexels-photo-8448328.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    // Postres
    {
      id: '6',
      name: 'Tres Leches Cake',
      description: 'Classic sponge cake soaked in three milks',
      price: '$9',
      heat: 0,
      category: 'postres',
      dietary: ['vegetarian'],
      story: 'Light sponge cake soaked in evaporated milk, condensed milk, and heavy cream, topped with cinnamon.',
      allergens: ['dairy', 'eggs', 'gluten'],
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    // Bebidas
    {
      id: '7',
      name: 'Margarita Clásica',
      description: 'Premium tequila with fresh lime and orange liqueur',
      price: '$12',
      heat: 0,
      category: 'bebidas',
      dietary: [],
      story: 'Made with 100% agave tequila, fresh lime juice, and just a touch of orange liqueur.',
      allergens: [],
      image: 'https://images.pexels.com/photos/5947043/pexels-photo-5947043.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ];

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  return (
    <motion.div
      className="min-h-screen pt-20 pb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal mb-4">
            Our <span className="text-chili">Menu</span>
          </h1>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Authentic Mexican flavors crafted with love and tradition
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 rounded-full font-medium transition-all relative overflow-hidden ${
                selectedCategory === category.id
                  ? 'bg-chili text-papel shadow-lg'
                  : 'bg-white text-charcoal hover:bg-chili/10 border border-gray-200'
              }`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {category.emoji} {category.name}
              </span>
              {selectedCategory === category.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-chili/80 to-chili"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  rotateX: 2
                }}
                onClick={() => setSelectedDish(item)}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Heat level indicator */}
                  {item.heat > 0 && (
                    <div className="absolute top-4 right-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${
                            i < item.heat ? 'text-chili' : 'text-white/30'
                          }`}
                        >
                          🌶️
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Price badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-marigold text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                      {item.price}
                    </span>
                  </div>

                  {/* Dietary indicators */}
                  {item.dietary.length > 0 && (
                    <div className="absolute bottom-4 left-4 flex gap-1">
                      {item.dietary.includes('vegetarian') && (
                        <span className="bg-nopal text-papel px-2 py-1 rounded text-xs">V</span>
                      )}
                      {item.dietary.includes('gluten-free') && (
                        <span className="bg-cobalt text-papel px-2 py-1 rounded text-xs">GF</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-charcoal mb-2">
                    {item.name}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4">
                    {item.description}
                  </p>
                  <Button variant="ghost" size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedDish && (
          <motion.div
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDish(null)}
          >
            <motion.div
              className="bg-papel rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <button
                  className="absolute top-4 right-4 w-10 h-10 bg-charcoal/80 text-papel rounded-full flex items-center justify-center hover:bg-charcoal transition-colors"
                  onClick={() => setSelectedDish(null)}
                >
                  <X size={20} />
                </button>
                
                {/* Price badge */}
                <div className="absolute bottom-4 right-4">
                  <span className="bg-marigold text-charcoal px-4 py-2 rounded-full text-lg font-bold">
                    {selectedDish.price}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl font-display font-bold text-charcoal">
                    {selectedDish.name}
                  </h2>
                  {selectedDish.heat > 0 && (
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < selectedDish.heat ? 'text-chili' : 'text-gray-300'
                          }`}
                        >
                          🌶️
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-lg text-charcoal/80 mb-6">
                  {selectedDish.description}
                </p>

                {selectedDish.story && (
                  <div className="mb-6">
                    <h3 className="font-display font-bold text-charcoal mb-2">Our Story</h3>
                    <p className="text-charcoal/70 italic">
                      {selectedDish.story}
                    </p>
                  </div>
                )}

                {selectedDish.dietary.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-display font-bold text-charcoal mb-2">Dietary Information</h3>
                    <div className="flex gap-2">
                      {selectedDish.dietary.map((diet) => (
                        <span
                          key={diet}
                          className="bg-nopal text-papel px-3 py-1 rounded-full text-sm capitalize"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedDish.allergens && selectedDish.allergens.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-display font-bold text-charcoal mb-2">Contains</h3>
                    <p className="text-charcoal/70 text-sm">
                      {selectedDish.allergens.join(', ')}
                    </p>
                  </div>
                )}

                <div className="flex gap-4">
                  <Button variant="primary" className="flex-1">
                    Add to Order
                  </Button>
                  <Button variant="secondary">
                    <Plus size={20} />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Menu;