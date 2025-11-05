import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
  glow?: 'cyan' | 'magenta' | 'purple' | 'none';
  hoverable?: boolean;
}

export function GlassCard({
  children,
  className,
  elevated = false,
  glow = 'none',
  hoverable = false
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'clean-card',
        elevated && 'shadow-lg',
        hoverable && 'hover:shadow-xl transition-shadow duration-300 cursor-pointer',
        className
      )}
      whileHover={hoverable ? { scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
      data-testid="glass-card"
    >
      {children}
    </motion.div>
  );
}
