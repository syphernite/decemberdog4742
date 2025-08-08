// src/App.tsx
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import WhyWeCreatedBuilt4You from './pages/WhyWeExist';
import SolarPricing from './pages/SolarPricing';
import DemoShowcase from './pages/DemoShowcase'; // ← New import

function ScrollToTopOnRouteChange() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="why-we-exist" element={<WhyWeCreatedBuilt4You />} />
          <Route path="demos" element={<DemoShowcase />} /> {/* ← New route */}
        </Route>
        <Route path="/pricing" element={<SolarPricing />} />
      </Routes>
    </>
  );
}

export default App;
