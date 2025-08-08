import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { Cart, CartItem, User, Product } from './types';

interface AppState {
  // Cart
  cart: Cart;
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  updateCartItem: (id: string, updates: Partial<CartItem>) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  applyDiscount: (code: string) => Promise<void>;
  removeDiscount: (id: string) => void;
  
  // User
  user: User | null;
  setUser: (user: User | null) => void;
  
  // Wishlist
  wishlist: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  
  // Recently Viewed
  recentlyViewed: string[];
  addToRecentlyViewed: (productId: string) => void;
  
  // UI State
  cartDrawerOpen: boolean;
  setCartDrawerOpen: (open: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const initialCart: Cart = {
  id: 'guest-cart',
  items: [],
  discounts: [],
  subtotal: 0,
  total: 0,
  currency: 'USD',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const useStore = create<AppState>()(
  persist(
    immer((set, get) => ({
      // Cart
      cart: initialCart,
      
      addToCart: (item) => set((state) => {
        const existingItem = state.cart.items.find(
          (i) => i.productId === item.productId && i.variantId === item.variantId
        );
        
        if (existingItem) {
          existingItem.quantity += item.quantity;
        } else {
          state.cart.items.push({
            ...item,
            id: `${item.productId}-${item.variantId}-${Date.now()}`,
          });
        }
        
        state.cart.updatedAt = new Date().toISOString();
      }),
      
      updateCartItem: (id, updates) => set((state) => {
        const item = state.cart.items.find((i) => i.id === id);
        if (item) {
          Object.assign(item, updates);
          state.cart.updatedAt = new Date().toISOString();
        }
      }),
      
      removeFromCart: (id) => set((state) => {
        state.cart.items = state.cart.items.filter((i) => i.id !== id);
        state.cart.updatedAt = new Date().toISOString();
      }),
      
      clearCart: () => set((state) => {
        state.cart = {
          ...initialCart,
          id: state.cart.id,
          createdAt: state.cart.createdAt,
          updatedAt: new Date().toISOString(),
        };
      }),
      
      applyDiscount: async (code) => {
        // Mock discount application
        set((state) => {
          const discount = {
            id: code,
            code,
            type: 'percentage' as const,
            value: 10,
            title: '10% Off',
            savings: state.cart.subtotal * 0.1,
          };
          state.cart.discounts.push(discount);
        });
      },
      
      removeDiscount: (id) => set((state) => {
        state.cart.discounts = state.cart.discounts.filter((d) => d.id !== id);
      }),
      
      // User
      user: null,
      setUser: (user) => set({ user }),
      
      // Wishlist
      wishlist: [],
      addToWishlist: (productId) => set((state) => {
        if (!state.wishlist.includes(productId)) {
          state.wishlist.push(productId);
        }
      }),
      removeFromWishlist: (productId) => set((state) => {
        state.wishlist = state.wishlist.filter((id) => id !== productId);
      }),
      
      // Recently Viewed
      recentlyViewed: [],
      addToRecentlyViewed: (productId) => set((state) => {
        state.recentlyViewed = state.recentlyViewed.filter((id) => id !== productId);
        state.recentlyViewed.unshift(productId);
        if (state.recentlyViewed.length > 10) {
          state.recentlyViewed = state.recentlyViewed.slice(0, 10);
        }
      }),
      
      // UI State
      cartDrawerOpen: false,
      setCartDrawerOpen: (open) => set({ cartDrawerOpen: open }),
      searchOpen: false,
      setSearchOpen: (open) => set({ searchOpen: open }),
      mobileMenuOpen: false,
      setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
    })),
    {
      name: 'luxury-store',
      partialize: (state) => ({
        cart: state.cart,
        user: state.user,
        wishlist: state.wishlist,
        recentlyViewed: state.recentlyViewed,
      }),
    }
  )
);