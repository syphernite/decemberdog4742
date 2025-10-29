import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  gradient?: 'cyan-purple' | 'purple-magenta' | 'cyan-magenta';
}

export function GradientText({ children, className, gradient = 'cyan-purple' }: GradientTextProps) {
  const gradientClasses = {
    'cyan-purple': 'bg-gradient-to-r from-[#00F5FF] to-[#8A2BE2]',
    'purple-magenta': 'bg-gradient-to-r from-[#8A2BE2] to-[#FF00C8]',
    'cyan-magenta': 'bg-gradient-to-r from-[#00F5FF] to-[#FF00C8]',
  }[gradient];

  return (
    <span
      className={cn(
        gradientClasses,
        'bg-clip-text text-transparent font-bold',
        className
      )}
      data-testid="gradient-text"
    >
      {children}
    </span>
  );
}
