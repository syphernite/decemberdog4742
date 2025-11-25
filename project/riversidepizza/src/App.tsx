import { useEffect } from 'react';
import { Pizza } from 'lucide-react';
import Hero from './components/Hero';
import MenuHighlights from './components/MenuHighlights';
import DailySpecials from './components/DailySpecials';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-red-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center min-h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-full p-2 shadow-md">
                <Pizza className="w-6 h-6 text-red-700" />
              </div>
              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-xl md:text-2xl font-extrabold tracking-tight">
                    Riverside Pizza &amp; Subs
                  </span>
                  <span className="px-2 py-1 text-xs font-bold bg-white/10 rounded-full border border-red-300/40">
                    Newport, NC
                  </span>
                </div>
                <p className="text-xs text-red-100 mt-0.5">
                  Family favorites, game-day fuel, and late-night cravings since day one
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
              <a href="#menu" className="hover:text-yellow-200 transition-colors">
                Menu
              </a>
              <a href="#specials" className="hover:text-yellow-200 transition-colors">
                Specials
              </a>
              <a href="#about" className="hover:text-yellow-200 transition-colors">
                Our Story
              </a>
              <a href="#contact" className="hover:text-yellow-200 transition-colors">
                Visit / Contact
              </a>
              <a
                href="tel:5557897499"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white text-red-700 font-bold shadow-md hover:bg-yellow-100 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      <Hero />
      <MenuHighlights />
      <DailySpecials />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
