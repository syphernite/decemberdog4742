import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Coaching from './components/Coaching';
import Recipes from './components/Recipes';
import ContentHub from './components/ContentHub';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Coaching />
      <Recipes />
      <ContentHub />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;