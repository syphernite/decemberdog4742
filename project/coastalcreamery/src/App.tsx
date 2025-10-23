import { useEffect } from 'react';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import FlavorForecast from './components/FlavorForecast';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // On component mount (page load/refresh), scroll to the top of the page.
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-cyan-50 coastal-cursor">
      <Hero />
      <MenuSection />
      <FlavorForecast />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
