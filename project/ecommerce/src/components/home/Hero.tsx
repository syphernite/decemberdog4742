import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Film Grain */}
      <div 
        className="absolute inset-0 film-grain bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.6)), url("https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg")'
        }}
      />

      {/* Parallax Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-obsidian/20 via-transparent to-crimson/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-6"
        >
          <h1 className="font-heading text-hero text-white text-shadow-luxury">
            Where Earth's Fire
            <br />
            <span className="text-champagne">Meets Artistry</span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Discover jewelry born from volcanic glass and forged with precious metals. 
            Each piece tells a story of transformation and timeless elegance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="xl" className="magnetic-hover shadow-glow">
            Explore Collections
          </Button>
          <Button variant="outline" size="xl" className="magnetic-hover">
            Discover Our Story
          </Button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-8 text-sm text-white/60 mt-12"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-champagne rounded-full" />
            <span>Free 30-Day Returns</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-champagne rounded-full" />
            <span>Carbon Neutral Shipping</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-champagne rounded-full" />
            <span>Lifetime Warranty</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6 text-champagne/60" />
      </motion.div>
    </section>
  );
}