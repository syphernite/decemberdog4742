import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Users, ArrowRight, Zap, Skull } from 'lucide-react';
import { fadeUp, driftParallax, glitchIn, bloodDrip, neonFlicker } from '../utils/animations';

const MarqueeStatus: React.FC = () => {
  return (
    <div className="absolute bottom-8 left-0 right-0 overflow-hidden">
      <motion.div
        animate={{ x: ['100%', '-100%'] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: 'linear' 
        }}
        className="whitespace-nowrap text-stone-400 text-sm font-medium animate-flicker"
      >
        ⚡ Walk-ins accepted when the light is on • Same-day appointments available • Licensed & insured artists ⚡
      </motion.div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center film-grain rain-overlay overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        variants={driftParallax}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(10, 10, 11, 0.8) 0%, rgba(17, 17, 19, 0.9) 100%),
            url("https://images.pexels.com/photos/1070930/pexels-photo-1070930.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={glitchIn}
          initial="hidden"
          animate="visible"
          className="relative mb-6"
        >
          <Skull className="w-16 h-16 mx-auto mb-4 text-blood-600 animate-pulse-glow" />
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-bone-100 text-glow-white">
            INK WITH
            <br />
            <span className="text-blood-600 text-glow animate-pulse-glow">INTENTION</span>
          </h1>
          <motion.div
            variants={bloodDrip}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-blood-600 opacity-60"
          />
        </motion.div>
        
        <motion.p
          variants={neonFlicker}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-xl sm:text-2xl text-stone-400 mb-12 font-light font-gothic"
        >
          ⚡ Custom work, clean process, walk-ins welcome ⚡
        </motion.p>
        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-4 bg-blood-600 text-bone-100 rounded-medium font-semibold text-lg hover:bg-blood-700 transition-all duration-300 group glow-accent animate-pulse-glow hover:animate-shake"
          >
            <Calendar className="w-5 h-5 mr-3 animate-bounce" />
            Book a Session
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform animate-pulse" />
          </Link>
          
          <Link
            to="/artists"
            className="inline-flex items-center px-8 py-4 border-2 border-stone-500 text-bone-100 rounded-medium font-semibold text-lg hover:border-blood-600 hover:bg-blood-600 hover:text-bone-100 transition-all duration-300 hover:text-glow-white hover:animate-shake"
          >
            <Users className="w-5 h-5 mr-3 animate-pulse" />
            View Artists
            <Zap className="w-4 h-4 ml-2 animate-bounce" />
          </Link>
        </motion.div>
      </div>
      
      <MarqueeStatus />
    </section>
  );
};

export default Hero;