import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'popular' | 'spicy' | 'vegetarian' | 'featured';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'popular', className = '' }) => {
  const variantClasses = {
    popular: 'bg-gold text-charcoal',
    spicy: 'bg-chili text-white',
    vegetarian: 'bg-cactus text-white',
    featured: 'bg-gradient-to-r from-chili to-gold text-white',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;