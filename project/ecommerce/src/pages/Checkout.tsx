import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Truck, Shield, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useStore } from '../lib/store';
import { formatPrice } from '../lib/utils';

export function Checkout() {
  const [step, setStep] = useState(1);
  const [guestCheckout, setGuestCheckout] = useState(true);
  const { cart } = useStore();

  const subtotal = cart.items.reduce((sum, item) => sum + (item.quantity * 2400), 0);
  const shipping = 1500;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  const steps = [
    { id: 1, title: 'Information', icon: Truck },
    { id: 2, title: 'Shipping', icon: Truck },
    { id: 3, title: 'Payment', icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-obsidian">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            {steps.map((stepItem, index) => (
              <div key={stepItem.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 border-2 ${
                    step >= stepItem.id
                      ? 'border-champagne bg-champagne text-obsidian'
                      : 'border-champagne/30 text-champagne'
                  }`}
                >
                  {step > stepItem.id ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <stepItem.icon className="h-5 w-5" />
                  )}
                </div>
                <span
                  className={`ml-2 text-sm font-medium ${
                    step >= stepItem.id ? 'text-champagne' : 'text-white/60'
                  }`}
                >
                  {stepItem.title}
                </span>
                {index < steps.length - 1 && (
                  <div className="w-16 h-px bg-champagne/30 mx-4" />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Checkout Form */}
            <div className="space-y-8">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-xl font-heading text-champagne mb-4">
                      Contact Information
                    </h2>
                    
                    <div className="flex items-center space-x-4 mb-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          checked={guestCheckout}
                          onChange={() => setGuestCheckout(true)}
                          className="mr-2"
                        />
                        <span className="text-white">Guest Checkout</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          checked={!guestCheckout}
                          onChange={() => setGuestCheckout(false)}
                          className="mr-2"
                        />
                        <span className="text-white">Create Account</span>
                      </label>
                    </div>

                    <div className="space-y-4">
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                      {!guestCheckout && (
                        <Input
                          label="Password"
                          type="password"
                          placeholder="Create a password"
                          required
                        />
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading text-champagne mb-4">
                      Shipping Address
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input label="First Name" required />
                      <Input label="Last Name" required />
                      <Input label="Address" className="md:col-span-2" required />
                      <Input label="Apartment, suite, etc." className="md:col-span-2" />
                      <Input label="City" required />
                      <Input label="State" required />
                      <Input label="ZIP Code" required />
                      <Input label="Phone" type="tel" className="md:col-span-2" />
                    </div>
                  </div>

                  <Button onClick={() => setStep(2)} className="w-full" size="lg">
                    Continue to Shipping
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-heading text-champagne">
                    Shipping Method
                  </h2>

                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-4 border border-champagne/20 cursor-pointer hover:border-champagne/50">
                      <div className="flex items-center">
                        <input type="radio" name="shipping" className="mr-3" defaultChecked />
                        <div>
                          <div className="font-medium text-white">Standard Shipping</div>
                          <div className="text-sm text-white/60">5-7 business days</div>
                        </div>
                      </div>
                      <span className="text-champagne font-semibold">Free</span>
                    </label>

                    <label className="flex items-center justify-between p-4 border border-champagne/20 cursor-pointer hover:border-champagne/50">
                      <div className="flex items-center">
                        <input type="radio" name="shipping" className="mr-3" />
                        <div>
                          <div className="font-medium text-white">Express Shipping</div>
                          <div className="text-sm text-white/60">2-3 business days</div>
                        </div>
                      </div>
                      <span className="text-champagne font-semibold">{formatPrice(1500)}</span>
                    </label>

                    <label className="flex items-center justify-between p-4 border border-champagne/20 cursor-pointer hover:border-champagne/50">
                      <div className="flex items-center">
                        <input type="radio" name="shipping" className="mr-3" />
                        <div>
                          <div className="font-medium text-white">Overnight Shipping</div>
                          <div className="text-sm text-white/60">Next business day</div>
                        </div>
                      </div>
                      <span className="text-champagne font-semibold">{formatPrice(3500)}</span>
                    </label>
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                      Back
                    </Button>
                    <Button onClick={() => setStep(3)} className="flex-1" size="lg">
                      Continue to Payment
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-heading text-champagne">
                    Payment Information
                  </h2>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input label="Card Number" placeholder="1234 5678 9012 3456" required />
                      <Input label="Cardholder Name" required />
                      <Input label="Expiry Date" placeholder="MM/YY" required />
                      <Input label="CVV" placeholder="123" required />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="billing" className="mr-2" />
                      <label htmlFor="billing" className="text-sm text-white/80">
                        Billing address same as shipping address
                      </label>
                    </div>
                  </div>

                  <div className="bg-onyx/50 p-4 border border-champagne/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="h-4 w-4 text-champagne" />
                      <span className="text-sm font-medium text-champagne">Secure Payment</span>
                    </div>
                    <p className="text-xs text-white/60">
                      Your payment information is encrypted and secure. We never store your card details.
                    </p>
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                      Back
                    </Button>
                    <Button className="flex-1" size="lg">
                      Complete Order
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Order Summary */}
            <div className="bg-onyx border border-champagne/20 p-6 h-fit">
              <h3 className="text-lg font-heading text-champagne mb-4">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex space-x-3">
                    <div className="w-12 h-12 bg-white/10 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-white">Product Title</h4>
                      <p className="text-xs text-white/60">Variant • Qty: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-semibold text-champagne">
                      {formatPrice(2400 * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-white/80">Subtotal</span>
                  <span className="text-white">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/80">Shipping</span>
                  <span className="text-white">{formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/80">Tax</span>
                  <span className="text-white">{formatPrice(tax)}</span>
                </div>
                <div className="border-t border-champagne/20 pt-2">
                  <div className="flex justify-between font-semibold">
                    <span className="text-champagne">Total</span>
                    <span className="text-champagne">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}