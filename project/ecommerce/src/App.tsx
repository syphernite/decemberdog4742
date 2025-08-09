import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Collections } from './pages/Collections';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { About } from './pages/About';
import { Help } from './pages/Help';
import { Wishlist } from './pages/Wishlist';
import { Account } from './pages/Account';
import { NewArrivals } from './pages/NewArrivals';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="new-arrivals" element={<NewArrivals />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="account" element={<Account />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
