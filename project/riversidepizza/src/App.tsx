import { Pizza } from 'lucide-react';
import Hero from './components/Hero';
import MenuHighlights from './components/MenuHighlights';
import DailySpecials from './components/DailySpecials';
import About from './components/About';
import Catering from './components/Catering';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-red-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Pizza className="w-10 h-10" />
              <div>
                <h1 className="text-2xl font-bold">Riverside Pizza & Subs</h1>
                <p className="text-sm text-red-100">Your Neighborhood Favorite</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#menu" className="hover:text-yellow-300 transition-colors font-medium">Menu</a>
              <a href="#specials" className="hover:text-yellow-300 transition-colors font-medium">Specials</a>
              <a href="#catering" className="hover:text-yellow-300 transition-colors font-medium">Catering</a>
              <a href="#contact" className="hover:text-yellow-300 transition-colors font-medium">Contact</a>
              <button className="bg-yellow-400 text-red-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors shadow-lg">
                Order Online
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Hero />
      <MenuHighlights />
      <DailySpecials />
      <About />
      <Catering />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
