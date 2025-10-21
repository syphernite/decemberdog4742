import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // On initial mount, ensure we’re at the top (in case restoration slipped through)
  useEffect(() => {
    // microtask + rAF ensures this runs after the first paint/layout
    Promise.resolve().then(() =>
      requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }))
    );
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
