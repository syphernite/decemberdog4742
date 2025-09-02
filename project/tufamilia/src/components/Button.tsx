import React, { forwardRef } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  as?: React.ElementType;
  [key: string]: any;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps & MotionProps>(
  ({ variant = 'primary', size = 'md', children, className = '', disabled = false, as: Component = motion.button, ...props }, ref) => {
    const baseClasses = 'font-medium rounded-lg transition-all duration-200 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-chili text-papel hover:bg-chili/90 focus:ring-chili shadow-lg hover:shadow-xl',
      secondary: 'border-2 border-cobalt text-cobalt hover:bg-cobalt hover:text-papel focus:ring-cobalt',
      ghost: 'text-charcoal hover:bg-chili/10 focus:ring-chili/50',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <Component
        ref={ref}
        className={classes}
        disabled={disabled}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {!disabled && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.5 }}
          />
        )}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;