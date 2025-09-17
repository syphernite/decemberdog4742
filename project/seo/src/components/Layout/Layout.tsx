import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { tokens } from '../../styles/tokens';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`min-h-screen ${tokens.colors.background}`}>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
};