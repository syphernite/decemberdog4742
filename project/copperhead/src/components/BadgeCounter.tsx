import React from 'react';
import { motion } from 'framer-motion';

interface BadgeCounterProps {
  count: number;
  label: string;
  className?: string;
}

export const BadgeCounter: React.FC<BadgeCounterProps> = ({ count, label, className = '' }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`bg-success text-bone rounded-full px-4 py-2 text-center ${className}`}
    >
      <div className="text-2xl font-bold">{count}</div>
      <div className="text-xs font-medium">{label}</div>
    </motion.div>
  );
};