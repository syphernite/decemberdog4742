import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const inputVariants = cva(
  'flex w-full bg-transparent border border-champagne/20 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-champagne/50 focus:outline-none focus:ring-2 focus:ring-champagne/20 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-champagne/20 focus:border-champagne/50',
        error: 'border-red-500/50 focus:border-red-500',
      },
      size: {
        default: 'h-12 px-4 py-3',
        sm: 'h-9 px-3 py-2 text-xs',
        lg: 'h-14 px-5 py-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, label, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-champagne">
            {label}
          </label>
        )}
        <input
          className={cn(inputVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';