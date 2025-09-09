// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Smartphone, Clock, CreditCard, ArrowRight, Star } from 'lucide-react';
import { BadgeCounter } from '../components/BadgeCounter';
import { TestimonialCard } from '../components/TestimonialCard';
import { MapEmbed } from '../components/MapEmbed';
import { Gallery } from '../components/Gallery';
import siteData from '../content/site.json';

export const Home: React.FC = () => {
  const featuredGallery = siteData.gallery.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gradient-to-br from-copper/10 to-bone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl lg:text-6xl font-bold text-charcoal mb-6">Copperhead Cuts</h1>
              <p className="text-2xl text-bone mb-8">Mobile barber. On your schedule.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book"
                  className="bg-copper text-bone px-8 py-4 rounded-lg hover:bg-copper/90 transition-colors text-lg font-semibold text-center focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2"
                >
                  Book a Cut
                </Link>
                <Link
                  to="/prices"
                  className="bg-bone text-copper border border-copper px-8 py-4 rounded-lg hover:bg-copper/5 transition-colors text-lg font-semibold text-center focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2"
                >
                  See Prices
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
              <img
                src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg"
                alt="Professional barber providing mobile service"
                className="w-full h-auto rounded-lg shadow-2xl"
                loading="eager"
              />
              <div className="absolute -top-4 -right-4">
                <BadgeCounter count={siteData.freeCuts.totalGiven} label="Free Cuts Given" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* USP Grid */}
      <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-bone rounded-lg p-6 shadow-lg text-center">
              <Smartphone className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-2">Mobile Service</h3>
              <p className="text-bone">We come to you wherever you are.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-bone rounded-lg p-6 shadow-lg text-center">
              <Clock className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-2">Same Day Available</h3>
              <p className="text-bone">Book today and get cut today.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-bone rounded-lg p-6 shadow-lg text-center">
              <CreditCard className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-2">Cash or Card</h3>
              <p className="text-bone">Pay however works best for you.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Service Area Map */}
      <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <MapEmbed />
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Gallery */}
      <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Our Work</h2>
            <p className="text-xl text-bone">Quality cuts that speak for themselves.</p>
          </motion.div>

          <Gallery images={featuredGallery} />

          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-copper text-bone px-6 py-3 rounded-lg hover:bg-copper/90 transition-colors focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2"
            >
              View Full Gallery
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Reviews */}
      <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4">What Clients Say</h2>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-lg font-semibold text-bone">5.0 Stars</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Free Cut Banner */}
      <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-success text-bone py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Next Free Cut Day: February 15th</h3>
              <p className="text-success-100">Join our community giveback program and get notified of free cut events.</p>
            </div>
            <Link
              to="/free-cuts"
              className="bg-bone text-success px-6 py-3 rounded-lg hover:bg-charcoal transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-success"
            >
              Join the List
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
