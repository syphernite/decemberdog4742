import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, QrCode } from 'lucide-react';

const Hero = () => {
  const scrollToFindUs = () => {
    const element = document.getElementById('findus');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-200 to-blue-50">
      {/* Sky Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-b from-blue-300 via-blue-100 to-gray-50"></div>
        {/* Subtle cloud shapes */}
        <motion.div 
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-16 bg-white/30 rounded-full blur-sm"
        ></motion.div>
        <motion.div 
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 right-20 w-24 h-12 bg-white/20 rounded-full blur-sm"
        ></motion.div>
      </div>

      {/* Asphalt Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gray-800 opacity-20">
        {/* Parking stripe */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-yellow-400 opacity-40"></div>
      </div>

      {/* Food Truck */}
      <motion.div
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute bottom-16 right-8 md:right-16 w-72 md:w-96"
      >
        <motion.div
          animate={{ 
            x: [0, 1, -1, 0],
            y: [0, 0.5, -0.5, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        >
          <img 
            src="/images/manuel.jpg" 
            alt="Manuel Food Truck" 
            className="w-full h-auto rounded-lg shadow-2xl"
          />
          
          {/* QR Code */}
          <motion.div
            className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-lg"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <QrCode size={24} className="text-black-deep" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-display text-6xl md:text-8xl lg:text-9xl font-normal text-black-deep mb-2 leading-none tracking-tight"
            >
              COMBO FRIED RICE
            </motion.h1>
            
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-normal text-red-primary mb-6 leading-none tracking-tight"
            >
              AND MORE
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="font-body text-xl md:text-2xl text-gray-700 mb-8 font-medium"
            >
              Fast, hot, and local
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="tel:580-771-6373"
                className="bg-red-primary hover:bg-red-dark text-white px-8 py-4 rounded-xl font-body font-bold text-lg flex items-center justify-center space-x-3 shadow-xl border-2 border-red-primary hover:shadow-2xl transition-all animate-pulse-slow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 24px rgba(199,20,24,0.4)'
                }}
              >
                <Phone size={24} />
                <span>CALL NOW</span>
              </motion.a>

              <motion.button
                onClick={scrollToFindUs}
                className="bg-white hover:bg-gray-50 text-black-deep px-8 py-4 rounded-xl font-body font-bold text-lg flex items-center justify-center space-x-3 shadow-xl border-2 border-silver-accent hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin size={24} />
                <span>FIND US</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-black-deep"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center"
        >
          <div className="w-6 h-10 border-2 border-black-deep rounded-full flex justify-center">
            <div className="w-1 h-3 bg-black-deep rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;