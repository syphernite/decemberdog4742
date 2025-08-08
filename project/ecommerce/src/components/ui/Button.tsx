import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-champagne text-obsidian hover:bg-champagne/90 shadow-luxury magnetic-hover',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline: 'border border-champagne/30 bg-transparent text-champagne hover:bg-champagne/10 hover:border-champagne/50',
        secondary: 'bg-onyx-600 text-white hover:bg-onyx-500',
        ghost: 'hover:bg-champagne/10 hover:text-champagne',
        link: 'text-champagne underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-6 py-3 text-sm',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-14 px-8 py-4 text-base',
        xl: 'h-16 px-10 py-5 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, disabled, ...props }, ref) => {
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';