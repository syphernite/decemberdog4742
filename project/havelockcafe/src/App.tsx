import { Menu, MapPin, Phone, Coffee } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F3EE]">
      <Navigation
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <MenuSection />
      <Gallery />
      <Visit />
      <Footer />
    </div>
  );
}

function Navigation({ scrollToSection, mobileMenuOpen, setMobileMenuOpen }: {
  scrollToSection: (id: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <EggLogo />
            <span className="font-chalk text-2xl text-[#8B6F47]">Havelock Cafe</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-[#6B5B3E] hover:text-[#F4C430] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-[#6B5B3E] hover:text-[#F4C430] transition-colors">
              Menu
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-[#6B5B3E] hover:text-[#F4C430] transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('visit')} className="text-[#6B5B3E] hover:text-[#F4C430] transition-colors">
              Visit
            </button>
          </div>

          <button
            className="md:hidden text-[#6B5B3E]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E8DCC8]">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-[#6B5B3E] hover:text-[#F4C430]"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left py-2 text-[#6B5B3E] hover:text-[#F4C430]"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left py-2 text-[#6B5B3E] hover:text-[#F4C430]"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('visit')}
              className="block w-full text-left py-2 text-[#6B5B3E] hover:text-[#F4C430]"
            >
              Visit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function EggLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="22" rx="14" ry="16" fill="#F5F3EE" stroke="#8B6F47" strokeWidth="2"/>
      <path d="M 10 20 Q 15 18, 20 20 Q 25 18, 30 20 L 28 22 Q 25 20, 20 22 Q 15 20, 12 22 Z" fill="#F4C430" stroke="#D4A017" strokeWidth="1"/>
      <circle cx="20" cy="23" r="5" fill="#FF9500" />
      <circle cx="20" cy="23" r="3" fill="#FFBB00" />
      <ellipse cx="18" cy="21.5" rx="1.5" ry="1" fill="white" opacity="0.7"/>
    </svg>
  );
}

function Hero({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4C430] via-[#E8DCC8] to-[#9BAA8D]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B6F47' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-8 flex justify-center">
          <div className="transform scale-150">
            <EggLogo />
          </div>
        </div>
        <h1 className="font-chalk text-5xl sm:text-6xl md:text-7xl text-[#6B5B3E] mb-6 leading-tight">
          Good coffee.<br />Hot eggs.<br />Friendly faces.
        </h1>
        <p className="text-xl sm:text-2xl text-[#8B6F47] mb-10 font-light">
          Your neighborhood breakfast spot in Havelock
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('menu')}
            className="px-8 py-4 bg-[#8B6F47] text-white rounded-full font-medium text-lg hover:shadow-lg hover:shadow-[#8B6F47]/50 transition-all duration-300 transform hover:scale-105 min-w-[200px]"
          >
            View Menu
          </button>
          <a
            href="tel:2526526115"
            className="px-8 py-4 bg-[#F4C430] text-[#6B5B3E] rounded-full font-medium text-lg hover:shadow-lg hover:shadow-[#F4C430]/50 transition-all duration-300 transform hover:scale-105 min-w-[200px] flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            Call Now
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=1000+E+Main+St,+Havelock,+NC+28532"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#9BAA8D] text-white rounded-full font-medium text-lg hover:shadow-lg hover:shadow-[#9BAA8D]/50 transition-all duration-300 transform hover:scale-105 min-w-[200px] flex items-center justify-center gap-2"
          >
            <MapPin size={20} />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-chalk text-4xl sm:text-5xl text-[#6B5B3E] mb-6">
          Where Neighbors Become Friends
        </h2>
        <div className="w-24 h-1 bg-[#F4C430] mx-auto mb-8" />
        <p className="text-lg sm:text-xl text-[#8B6F47] leading-relaxed mb-6">
          Havelock Cafe is your cozy corner for homestyle breakfast and fresh-brewed coffee.
          We've been serving up warm smiles and hot plates since day one, treating every guest like family.
        </p>
        <p className="text-lg sm:text-xl text-[#8B6F47] leading-relaxed">
          From fluffy pancakes to perfectly cooked eggs, everything here is made with love and care.
          Pull up a chair, grab a mug of our signature coffee, and start your day the right way.
        </p>
      </div>
    </section>
  );
}

function MenuSection() {
  const menuItems = [
    {
      name: 'Classic Breakfast Plate',
      description: 'Two eggs any style, crispy bacon, golden hash browns, and buttered toast',
      icon: '🍳',
    },
    {
      name: 'Avocado Toast + Egg',
      description: 'Smashed avocado on sourdough, topped with a perfectly poached egg',
      icon: '🥑',
    },
    {
      name: 'Buttermilk Pancakes',
      description: 'Stack of three fluffy pancakes with real maple syrup and butter',
      icon: '🥞',
    },
    {
      name: 'Biscuits & Gravy',
      description: 'Homemade buttermilk biscuits smothered in savory sausage gravy',
      icon: '🫓',
    },
  ];

  return (
    <section id="menu" className="py-20 px-4 bg-[#F5F3EE]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-chalk text-4xl sm:text-5xl text-[#6B5B3E] mb-6">
            Breakfast Favorites
          </h2>
          <div className="w-24 h-1 bg-[#F4C430] mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-[#E8DCC8]"
            >
              <div className="text-5xl mb-4 text-center">{item.icon}</div>
              <h3 className="font-chalk text-2xl text-[#6B5B3E] mb-3 text-center">
                {item.name}
              </h3>
              <p className="text-[#8B6F47] text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { alt: 'Cozy cafe interior', bg: 'from-[#E8DCC8] to-[#C8B89A]' },
    { alt: 'Fresh breakfast plate', bg: 'from-[#F4C430] to-[#D4A017]' },
    { alt: 'Coffee and pastries', bg: 'from-[#9BAA8D] to-[#7B8A6D]' },
    { alt: 'Sunny morning atmosphere', bg: 'from-[#FFE5B4] to-[#E8D4A4]' },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-chalk text-4xl sm:text-5xl text-[#6B5B3E] mb-6">
            A Peek Inside
          </h2>
          <div className="w-24 h-1 bg-[#F4C430] mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-full h-full bg-gradient-to-br ${image.bg} flex items-center justify-center`}>
                <Coffee size={48} className="text-white/30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="py-20 px-4 bg-[#F5F3EE]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-chalk text-4xl sm:text-5xl text-[#6B5B3E] mb-6">
            Come Visit Us
          </h2>
          <div className="w-24 h-1 bg-[#F4C430] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="font-chalk text-3xl text-[#6B5B3E] mb-6">Location & Hours</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#F4C430] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-[#6B5B3E] font-medium mb-1">Address</p>
                  <p className="text-[#8B6F47]">
                    1000 E Main St<br />
                    Havelock, NC 28532
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-[#F4C430] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-[#6B5B3E] font-medium mb-1">Phone</p>
                  <a href="tel:2526526115" className="text-[#8B6F47] hover:text-[#F4C430] transition-colors">
                    (252) 652-6115
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Coffee className="text-[#F4C430] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-[#6B5B3E] font-medium mb-1">Hours</p>
                  <p className="text-[#8B6F47]">
                    Monday - Friday: 6:00 AM - 2:00 PM<br />
                    Saturday - Sunday: 7:00 AM - 3:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=1000+E+Main+St,+Havelock,+NC+28532"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-8 py-4 bg-[#9BAA8D] text-white rounded-full font-medium text-lg text-center hover:shadow-lg hover:shadow-[#9BAA8D]/50 transition-all duration-300 transform hover:scale-105"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.234!2d-76.901234!3d34.878901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9147c0e0e0e0e%3A0x0!2s1000%20E%20Main%20St%2C%20Havelock%2C%20NC%2028532!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Havelock Cafe Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#6B5B3E] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <EggLogo />
            <div>
              <p className="font-chalk text-2xl">Havelock Cafe</p>
              <p className="text-[#E8DCC8] text-sm">Good coffee. Hot eggs. Friendly faces.</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[#E8DCC8] mb-2">1000 E Main St, Havelock, NC 28532</p>
            <a href="tel:2526526115" className="text-[#F4C430] hover:text-white transition-colors text-lg font-medium">
              (252) 652-6115
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#8B6F47] text-center text-[#E8DCC8] text-sm">
          <p>&copy; 2024 Havelock Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default App;
