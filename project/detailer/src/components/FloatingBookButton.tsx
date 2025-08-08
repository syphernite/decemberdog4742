import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';

const FloatingBookButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-40 md:hidden"
        >
          <Link
            to="/services#book"
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 font-medium transition-colors duration-200"
          >
            <Calendar className="h-5 w-5" />
            <span>Book</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingBookButton;