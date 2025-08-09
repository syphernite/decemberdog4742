import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FunnelIcon, 
  StarIcon, 
  ShoppingCartIcon,
  ArrowRightIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { products } from '../data/sampleData';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'luts', name: 'LUTs' },
  { id: 'presets', name: 'Presets' },
  { id: 'templates', name: 'Templates' },
  { id: 'ebooks', name: 'E-Books' },
];

const sortOptions = [
  { id: 'newest', name: 'Newest First' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
  { id: 'popular', name: 'Most Popular' },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = products
    .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'popular': return b.downloads - a.downloads;
        default: return b.id - a.id;
      }
    });

  const addToCart = (product: any, variant: any = null) => {
    const cartItem = {
      id: `${product.id}-${variant?.name || 'default'}`,
      product,
      variant,
      price: variant?.price || product.price,
      quantity: 1
    };
    setCart([...cart, cartItem]);
    setShowCart(true);
  };

  const removeFromCart = (itemId: string) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-black mb-4">
            <span className="gradient-text">DIGITAL</span> SHOP
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Premium digital products to elevate your content creation game
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-neon-violet to-neon-cyan text-white shadow-neon'
                    : 'glass-panel text-gray-300 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="glass-panel px-4 py-2 text-sm text-white bg-transparent border-0 focus:outline-none focus:ring-2 focus:ring-neon-violet"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id} className="bg-onyx-900">
                  {option.name}
                </option>
              ))}
            </select>

            <button
              onClick={() => setShowCart(true)}
              className="glass-panel px-4 py-2 text-white hover:shadow-neon transition-all duration-300 flex items-center space-x-2"
            >
              <ShoppingCartIcon className="h-5 w-5" />
              <span>Cart ({cart.length})</span>
            </button>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-panel overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-gradient-to-r from-neon-violet to-neon-cyan text-white text-xs font-medium">
                    {product.category.toUpperCase()}
                  </span>
                </div>
                {product.originalPrice > product.price && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-neon-magenta text-white text-xs font-medium">
                      SALE
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIconSolid
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">
                    ({product.downloads} downloads)
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-white">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-neon-violet to-neon-cyan text-white text-sm font-medium hover:shadow-neon transition-all duration-300"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl w-full glass-panel overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full aspect-square object-cover mb-4"
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-display font-black text-white mb-4">
                    {selectedProduct.title}
                  </h2>
                  <p className="text-gray-400 mb-6">
                    {selectedProduct.description}
                  </p>

                  <div className="flex items-center mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIconSolid
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(selectedProduct.rating) ? 'text-yellow-400' : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-400 ml-2">
                      {selectedProduct.rating} ({selectedProduct.downloads} downloads)
                    </span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-lg font-semibold text-white">Choose Variant:</h3>
                    {selectedProduct.variants.map((variant: any) => (
                      <div key={variant.name} className="glass-panel p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-white">{variant.name}</h4>
                          <span className="text-lg font-bold text-white">${variant.price}</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">{variant.files} files included</p>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => addToCart(selectedProduct, variant)}
                          className="w-full py-2 bg-gradient-to-r from-neon-violet to-neon-cyan text-white font-medium hover:shadow-neon transition-all duration-300"
                        >
                          Add to Cart - ${variant.price}
                        </motion.button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Cart Drawer */}
        {showCart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setShowCart(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed right-0 top-0 h-full w-full max-w-md glass-panel p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-display font-bold text-white">Shopping Cart</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-400 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 bg-onyx-800/50">
                        <img
                          src={item.product.image}
                          alt={item.product.title}
                          className="w-16 h-16 object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-white font-medium">{item.product.title}</h3>
                          {item.variant && (
                            <p className="text-gray-400 text-sm">{item.variant.name}</p>
                          )}
                          <p className="text-neon-violet font-bold">${item.price}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-400"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-onyx-800 pt-4 mb-6">
                    <div className="flex justify-between items-center text-lg font-bold text-white">
                      <span>Total:</span>
                      <span>${cartTotal}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-neon-violet to-neon-cyan text-white font-medium hover:shadow-neon-strong transition-all duration-300 mb-4"
                  >
                    Checkout with Stripe
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition-all duration-300"
                  >
                    PayPal Checkout
                  </motion.button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}