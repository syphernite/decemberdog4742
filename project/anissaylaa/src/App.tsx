import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import SocialProof from './components/SocialProof';
import Mentorship from './components/Mentorship';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Update page title and meta tags
    document.title = "Anissa - Financial Education & Wealth Building at 19";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Join Anissa, a 19-year-old financial educator with 32.8K followers, as she shares real money habits that work. From Amazon paychecks to wealth building - no fluff, just results.';
    document.head.appendChild(metaDescription);
    
    // Add viewport meta tag for mobile optimization
    const viewport = document.createElement('meta');
    viewport.name = 'viewport';
    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(viewport);
    
    // Add smooth scroll CSS
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(viewport);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <About />
      <SocialProof />
      <Mentorship />
      <Contact />
    </div>
  );
}

export default App;