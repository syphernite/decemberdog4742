// File: src/App.tsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
import Careers from "./pages/Careers";
import Galaxy from "./components/Galaxy";
import { WalkthroughProvider } from "./context/Walkthrough";
import WalkthroughModal from "./components/WalkthroughModal";

function ScrollToTopOnRouteChange() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const hideGalaxy = location.pathname.startsWith("/demos"); // disable heavy bg on demos

  return (
    <WalkthroughProvider>
      <Helmet>
        <title>Built4You — Custom websites for small businesses</title>
        <meta
          name="description"
          content="Built4You builds fast, mobile-first custom websites for small businesses. $0 demos. Subscription or one-time pricing."
        />
        <link rel="canonical" href="https://built4you.org/" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Built4You" />
        <meta property="og:title" content="Built4You — Custom websites for small businesses" />
        <meta property="og:description" content="Fast, mobile-first custom websites. $0 demos. Flexible pricing." />
        <meta property="og:url" content="https://built4you.org/" />
        <meta property="og:image" content="/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* background */}
      {!hideGalaxy ? (
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
      ) : (
        <div className="fixed inset-0 -z-10 bg-black" />
      )}

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
          <Route path="careers" element={<Careers />} />
        </Route>
        <Route
          path="/pricing"
          element={
            <>
              <Helmet>
                <title>Pricing — Built4You</title>
                <meta
                  name="description"
                  content="Choose a Built4You plan: subscription or one-time pricing. Fast delivery. $0 demo to start."
                />
                <link rel="canonical" href="https://built4you.org/pricing" />
              </Helmet>
              <SolarPricing />
            </>
          }
        />
      </Routes>

      <WalkthroughModal />
    </WalkthroughProvider>
  );
}
