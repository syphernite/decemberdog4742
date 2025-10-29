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
  const glowClass = {
    cyan: 'glow-cyan',
    magenta: 'glow-magenta',
    purple: 'glow-purple',
    none: '',
  }[glow];

  return (
    <motion.div
      className={cn(
        'rounded-md',
        elevated ? 'glass-elevated' : 'glass',
        glowClass,
        hoverable && 'hover-elevate cursor-pointer',
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
