import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import Container from './Container';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  showButtons?: boolean;
  height?: 'sm' | 'md' | 'lg' | 'full';
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = '/images/hero.jpg',
  showButtons = true,
  height = 'lg'
}) => {
  const heightClasses = {
    sm: 'h-96',
    md: 'h-[500px]',
    lg: 'h-[600px]',
    full: 'h-screen'
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('featured-dishes');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`relative ${heightClasses[height]} flex items-center justify-center bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <Container className="relative z-10 text-center text-white">
        <motion.h1 
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto text-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
        
        {showButtons && (
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" onClick={scrollToMenu}>
              View Menu
            </Button>
            <Button variant="outline" size="lg" href="tel:(555) 123-4567">
              Call Now
            </Button>
          </motion.div>
        )}
      </Container>
    </div>
  );
};

export default Hero;