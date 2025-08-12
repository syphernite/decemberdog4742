// src/App.tsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import WhyWeCreatedBuilt4You from "./pages/WhyWeExist";
import SolarPricing from "./pages/SolarPricing";
import DemoShowcase from "./pages/DemoShowcase";
import Galaxy from "./components/Galaxy";

function ScrollToTopOnRouteChange() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <>
      {/* global animated background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <Galaxy
          mouseInteraction
          mouseRepulsion
          transparent={true}
          density={1.9}
          glowIntensity={0.3}
          saturation={0.9}
          hueShift={100}
          twinkleIntensity={0.7}
          rotationSpeed={0.25}
          repulsionStrength={5}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={2.1}
        />
      </div>

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
          <Route path="demos" element={<DemoShowcase />} />
        </Route>
        <Route path="/pricing" element={<SolarPricing />} />
      </Routes>
    </>
  );
}
