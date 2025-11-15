import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import Modal from './components/Modal';
// Gallery removed per request ("A Peek Inside")
import Visit from './components/Visit';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const openMenuModal = () => {
    setMenuModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        openMenuModal={openMenuModal}
      />
      <Hero scrollToSection={scrollToSection} openMenuModal={openMenuModal} />
      <About />
      <Visit />
      <Footer />
      <Modal isOpen={menuModalOpen} onClose={() => setMenuModalOpen(false)}>
        <MenuSection />
      </Modal>
    </div>
  );
}

export default App;
