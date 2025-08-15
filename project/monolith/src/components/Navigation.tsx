import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
];

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsVisible(scrolled);

      // Update active section
      const sections = document.querySelectorAll('[data-section]');
      let currentSection = '';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.getAttribute('data-section') || '';
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-6"
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            <motion.div 
              className="font-semibold text-lg"
              whileHover={{ letterSpacing: '0.5px' }}
              transition={{ duration: 0.2 }}
            >
              Monolith
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
                  whileHover={{ letterSpacing: '0.25px' }}
                >
                  {item.name}
                  {activeSection === item.name.toLowerCase() && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                      layoutId="activeSection"
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </motion.a>
              ))}
            </div>
            
            <motion.button
              className="glass px-6 py-3 text-sm font-medium rounded-full"
              whileHover={{ scale: 1.02, backdropFilter: 'blur(12px)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const contact = document.getElementById('contact');
                contact?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </motion.button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};