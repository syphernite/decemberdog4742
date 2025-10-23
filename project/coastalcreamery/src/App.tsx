import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import FlavorForecast from './components/FlavorForecast';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-cyan-50 coastal-cursor">
      <Hero />
      <MenuSection />
      <FlavorForecast />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
