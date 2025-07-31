import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import FeaturedDrinks from './components/FeaturedDrinks';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import VisitUs from './components/VisitUs';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <section id="home">
          <Hero scrollToSection={scrollToSection} />
          <Story />
          <FeaturedDrinks />
          <Gallery />
        </section>
        
        <section id="menu">
          <Menu />
        </section>
        
        <section id="visit">
          <VisitUs />
        </section>
        
        <section id="events">
          <Events />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;