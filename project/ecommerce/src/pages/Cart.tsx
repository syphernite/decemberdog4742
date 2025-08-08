import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useStore } from '../lib/store';
import { formatPrice } from '../lib/utils';

export function Cart() {
  const { cart, updateCartItem, removeFromCart } = useStore();

  const subtotal = cart.items.reduce((sum, item) => sum + (item.quantity * 2400), 0); // Mock price
  const shipping = subtotal > 10000 ? 0 : 1500; // Free shipping over $100
  const tax = Math.round(subtotal * 0.08); // 8% tax
  const total = subtotal + shipping + tax;

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-obsidian">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <ShoppingBag className="h-16 w-16 text-white/40 mx-auto" />
            <div>
              <h1 className="text-heading font-heading text-champagne mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-white/60 mb-8">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Button asChild size="lg">
                <Link to="/collections">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-obsidian">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-heading font-heading text-champagne mb-8">
            Shopping Cart ({cart.items.length} items)
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex space-x-4 p-6 bg-onyx border border-champagne/20"
                >
                  <div className="w-24 h-24 bg-white/10 flex-shrink-0"></div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white mb-1">
                      Product Title
                    </h3>
                    <p className="text-sm text-white/60 mb-2">
                      Variant info
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateCartItem(item.id, { 
                            quantity: Math.max(1, item.quantity - 1) 
                          })}
                          className="w-8 h-8 border border-champagne/30 flex items-center justify-center text-sm hover:bg-champagne/10"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartItem(item.id, { 
                            quantity: item.quantity + 1 
                          })}
                          className="w-8 h-8 border border-champagne/30 flex items-center justify-center text-sm hover:bg-champagne/10"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <span className="font-semibold text-champagne">
                          {formatPrice(2400 * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-white/60 hover:text-red-400"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <div className="bg-onyx border border-champagne/20 p-6">
                <h2 className="text-lg font-heading text-champagne mb-4">
                  Order Summary
                </h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">Subtotal</span>
                    <span className="text-white">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">Shipping</span>
                    <span className="text-white">
                      {shipping === 0 ? 'Free' : formatPrice(shipping)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">Tax</span>
                    <span className="text-white">{formatPrice(tax)}</span>
                  </div>
                  <div className="border-t border-champagne/20 pt-3">
                    <div className="flex justify-between font-semibold">
                      <span className="text-champagne">Total</span>
                      <span className="text-champagne">{formatPrice(total)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Input
                    placeholder="Discount code"
                    className="text-sm"
                  />
                  <Button variant="outline" className="w-full" size="sm">
                    Apply Discount
                  </Button>
                </div>
              </div>

              <Button asChild className="w-full" size="lg">
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>

              <Button asChild variant="outline" className="w-full" size="lg">
                <Link to="/collections">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}