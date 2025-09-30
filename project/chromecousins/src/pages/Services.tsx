import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Phone, MessageSquare, Instagram, Clock, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const [packagesRef, packagesInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Load Calendly widget script once for the Booking section
  useEffect(() => {
    if (!document.querySelector('#calendly-widget')) {
      const s = document.createElement('script');
      s.id = 'calendly-widget';
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  // PRICING (flat across vehicle types)
  // - Basic Wash: $70
  // - Interior OR Exterior Only: $50
  // - Premium Wash: $120
  const packages = [
    {
      name: 'Basic Wash',
      prices: { sedan: 70, suv: 70, truck: 70 },
      features: [
        'Foam wash & hand dry',
        'Wheels & tires dressed',
        'Windows cleaned (exterior)',
        'Light interior vacuum',
      ],
      popular: false,
    },
    {
      name: 'Interior OR Exterior Only',
      prices: { sedan: 50, suv: 50, truck: 50 },
      features: [
        'Choose a focused service:',
        'Interior: vacuum, wipe-down, windows',
        'Exterior: wash, dry, wheels, tire shine',
      ],
      popular: false,
    },
    {
      name: 'Premium Wash',
      prices: { sedan: 120, suv: 120, truck: 120 },
      features: [
        'Thorough exterior decon + sealant',
        'Full interior vacuum & wipe-down',
        'Plastics conditioned',
        'Windows inside & out',
      ],
      popular: true,
    },
  ];

  const addOns = [
    { name: 'Pet Hair Removal', price: 35, description: 'Deep vacuum and lint brush treatment' },
    { name: 'Glass Coating', price: 99, description: 'Hydrophobic coating for all windows' },
    { name: 'Engine Bay Detail', price: 75, description: 'Complete engine compartment cleaning' },
    { name: 'Headlight Restoration', price: 65, description: 'Remove oxidation and restore clarity' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20 bg-black text-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-black mb-3 tracking-tight">Packages & Booking</h1>
            <p className="text-white/70 mb-6">Serving <span className="text-white">El Paso, TX</span> and nearby areas</p>
            <div className="bg-red-600 text-black px-8 py-4 rounded-lg inline-flex items-center gap-3 text-lg font-semibold mb-2 shadow-[0_0_25px_rgba(239,68,68,.35)]">
              <Zap className="h-6 w-6" />
              <span>No water or power? We bring our own.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" ref={packagesRef} className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={packagesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Choose Your Package</h2>
            <p className="text-xl text-white/70">Professional detailing delivered to your location</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ y: 30, opacity: 0 }}
                animate={packagesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-all ${pkg.popular ? 'ring-2 ring-red-500' : ''}`}
                whileHover={{ y: -5 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-red-600 text-black px-4 py-1 rounded-full text-sm font-semibold shadow-[0_0_16px_rgba(239,68,68,.35)]">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-4 text-center">{pkg.name}</h3>

                <div className="text-center mb-6">
                  <div className="text-sm text-white/60 mb-2">Flat price</div>
                  <div className="text-3xl font-extrabold text-red-500 mb-2">
                    ${pkg.prices.sedan}
                  </div>
                  <div className="text-xs text-white/50">Same price for sedan, SUV, or truck</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Call-to-book button */}
                <a
                  href="tel:9153185633"
                  className="w-full inline-block text-center bg-red-600 hover:bg-red-500 text-black py-3 rounded-lg font-semibold transition-colors shadow-[0_0_16px_rgba(239,68,68,.35)]"
                >
                  Call to Book
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Booking (Calendly) */}
      <section id="book" className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Book Online</h2>
            <p className="text-white/70">Choose a time that works for you. Bookings sync to our calendar instantly.</p>
          </div>

          <div
            className="calendly-inline-widget w-full mx-auto rounded-2xl overflow-hidden border border-white/10"
            data-url="https://calendly.com/built4youonline"
            style={{ minWidth: '320px', height: '900px' }}
          />
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Add-On Services</h2>
            <p className="text-xl text-white/70">Customize your detail with additional services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ y: 30, opacity: 0 }}
                animate={packagesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-zinc-900 border border-white/10 p-6 rounded-lg hover:bg-zinc-800 transition-colors"
                whileHover={{ y: -3 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">{addon.name}</h3>
                  <span className="text-xl font-bold text-red-500">+${addon.price}</span>
                </div>
                <p className="text-white/70 text-sm">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Info */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Phone className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a href="tel:9153185633" className="text-red-500 hover:text-red-400 text-lg font-medium">
                (915) 318-5633
              </a>
            </div>

            <div className="text-center">
              <MessageSquare className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Text Us</h3>
              <a href="sms:9153185633" className="text-red-500 hover:text-red-400 text-lg font-medium">
                (915) 318-5633
              </a>
            </div>

            <div className="text-center">
              <Clock className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <p className="text-white/70">Mon-Sat: 8AM-6PM</p>
              <p className="text-white/70">Sunday: By Appointment</p>
            </div>

            <div className="text-center">
              <Instagram className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <div className="space-x-4">
                <a
                  href="https://www.instagram.com/chromecousins_detailing/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-500 hover:text-red-400"
                >
                  Instagram
                </a>
                <a href="#" className="text-red-500 hover:text-red-400">TikTok</a>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-zinc-900 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Service Policies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold mb-2 text-red-500">Deposit Policy</h4>
                <p className="text-sm text-white/70">50% deposit required to secure appointment</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-red-500">Service Radius</h4>
                <p className="text-sm text-white/70">25-mile radius from El Paso, TX</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-red-500">Weather Policy</h4>
                <p className="text-sm text-white/70">Services rescheduled for severe weather</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
