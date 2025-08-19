import React from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <div className="animate-fade-in">
      {children}
    </div>
  );
};