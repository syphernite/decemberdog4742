import React from 'react';
import { Instagram, Youtube, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="text-3xl font-bold mb-4">
              Oli Wakefield <span className="text-sky-400">Fitness</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Personalized coaching, nutrition, and mindset — built for you.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                  className="text-gray-400 hover:text-sky-400 transition-colors cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#coaching"
                  onClick={(e) => { e.preventDefault(); scrollToSection('coaching'); }}
                  className="text-gray-400 hover:text-sky-400 transition-colors cursor-pointer"
                >
                  Coaching
                </a>
              </li>
              <li>
                <a
                  href="#recipes"
                  onClick={(e) => { e.preventDefault(); scrollToSection('recipes'); }}
                  className="text-gray-400 hover:text-sky-400 transition-colors cursor-pointer"
                >
                  Recipes
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                  className="text-gray-400 hover:text-sky-400 transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: 'https://instagram.com/oliwakefieldfitness', color: 'hover:text-pink-500' },
                { icon: Youtube, href: 'https://www.youtube.com/@oliwakefieldfitness', color: 'hover:text-red-500' },
                { icon: Facebook, href: 'https://www.facebook.com/share/19w6RhurwL/?mibextid=wwXIfr', color: 'hover:text-blue-500' },
                { icon: MessageCircle, href: '#contact', color: 'hover:text-sky-500' },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`text-gray-400 transition-all duration-300 transform hover:scale-110 ${s.color}`}
                >
                  <s.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} Oli Wakefield Fitness</p>
          <p className="text-gray-400">Built by <span className="text-sky-400">Built4You</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
