import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CursorAura = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX - 60, y: e.clientY - 60 });
      setIsVisible(true);
    };

    const hideAura = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', hideAura);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', hideAura);
    };
  }, []);

  return (
    <motion.div
      className="cursor-aura"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{
        type: 'tween',
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  );
};