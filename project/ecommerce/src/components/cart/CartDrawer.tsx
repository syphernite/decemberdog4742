import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';
import { Button } from '../ui/Button';
import { useStore } from '../../lib/store';
import { formatPrice } from '../../lib/utils';

export function CartDrawer() {
  const { cartDrawerOpen, setCartDrawerOpen, cart } = useStore();

  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.items.reduce((sum, item) => sum + (item.quantity * 2400), 0); // Mock price

  return (
    <AnimatePresence>
      {cartDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-obsidian/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartDrawerOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-md bg-onyx border-l border-champagne/20 z-50 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 400, damping: 40 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-champagne/20">
              <h2 className="text-lg font-heading text-champagne">
                Shopping Bag ({itemCount})
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCartDrawerOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Content */}
            {cart.items.length === 0 ? (
              <div className="flex-1 flex items-center justify-center p-6">
                <div className="text-center space-y-4">
                  <ShoppingBag className="h-12 w-12 text-white/40 mx-auto" />
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      Your bag is empty
                    </h3>
                    <p className="text-white/60 text-sm">
                      Start shopping to add items to your bag
                    </p>
                  </div>
                  <Button onClick={() => setCartDrawerOpen(false)}>
                    Continue Shopping
                  </Button>
                </div>
              </div>
            ) : (
              <>
                {/* Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {cart.items.map((item) => (
                    <motion.div
                      key={item.id}
                      className="flex space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <div className="w-16 h-16 bg-white/10 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-white">
                          Product Title
                        </h4>
                        <p className="text-sm text-white/60">Variant info</p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center space-x-2">
                            <button className="w-6 h-6 border border-champagne/30 flex items-center justify-center text-xs">
                              -
                            </button>
                            <span className="text-sm">{item.quantity}</span>
                            <button className="w-6 h-6 border border-champagne/30 flex items-center justify-center text-xs">
                              +
                            </button>
                          </div>
                          <div className="text-sm font-semibold text-champagne">
                            {formatPrice(2400)}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="border-t border-champagne/20 p-6 space-y-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Subtotal:</span>
                    <span className="text-champagne">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full" size="lg">
                      Checkout
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      View Cart
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}