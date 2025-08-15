import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--c-charcoal)' }}
    >
      {/* Light sweep background */}
      <div className="light-sweep" />
      
      {/* Vignette overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.1) 100%)',
        }}
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.h1
          className="text-display mb-6 font-bold tracking-tight"
          initial={{ scale: 0.985, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3 
          }}
        >
          Bespoke websites that look sharp{' '}
          <span className="text-secondary">and convert faster.</span>
        </motion.h1>

        <motion.p
          className="text-xl text-secondary mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.8 
          }}
        >
          No templates. No bloat. Just precision.
        </motion.p>

        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
            delay: 1.2 
          }}
        >
          <motion.button
            className="glass px-8 py-4 text-lg font-medium rounded-full relative overflow-hidden"
            whileHover={{ 
              scale: 1.02,
              backdropFilter: 'blur(12px)',
            }}
            whileTap={{ scale: 0.98 }}
            animate={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            onClick={() => {
              const services = document.getElementById('services');
              services?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="relative z-10">Start Your Project</span>
            
            {/* Magnetic hover effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
            
            {/* Press state inner stroke */}
            <motion.div
              className="absolute inset-0 border border-white/20 rounded-full"
              initial={{ opacity: 0 }}
              whileTap={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"
          animate={{ scaleY: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};