import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartDrawer } from '../cart/CartDrawer';
import { SearchModal } from '../search/SearchModal';
import { MobileMenu } from './MobileMenu';
import { Toaster } from 'react-hot-toast';

export function Layout() {
  return (
    <div className="min-h-screen bg-obsidian text-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      
      {/* Modals and Drawers */}
      <CartDrawer />
      <SearchModal />
      <MobileMenu />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1A1A2E',
            color: '#FFFFFF',
            border: '1px solid rgba(212, 175, 55, 0.2)',
          },
          success: {
            iconTheme: {
              primary: '#D4AF37',
              secondary: '#1A1A2E',
            },
          },
        }}
      />
    </div>
  );
}