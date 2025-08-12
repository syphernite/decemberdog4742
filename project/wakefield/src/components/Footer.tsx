import React from 'react';
import { Instagram, Youtube, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="text-3xl font-bold mb-4">
              Oli Wakefield <span className="text-orange-500">Fitness</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Transforming lives through personalized fitness coaching, nutrition guidance, 
              and mindset development. Your strongest self is waiting.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#"
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#coaching"
                  onClick={() => scrollToSection('coaching')}
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Coaching
                </a>
              </li>
              <li>
                <a 
                  href="#recipes"
                  onClick={() => scrollToSection('recipes')}
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Recipes
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: 'https://instagram.com/oliwakefieldfitness', color: 'hover:text-pink-500' },
                { icon: Youtube, href: 'https://www.youtube.com/channel/UCSNa_smPFrELPhS6xLbpFqA', color: 'hover:text-red-500' },
                { icon: Facebook, href: 'https://www.facebook.com/share/19w6RhurwL/?mibextid=wwXIfr', color: 'hover:text-blue-500' },
                { icon: MessageCircle, href: '#contact', color: 'hover:text-purple-500' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 Oli Wakefield Fitness. All rights reserved.
          </p>
          
          <p className="text-gray-400 flex items-center space-x-2">
            <span>Made with</span>
            <span role="img" aria-label="flexed biceps" className="text-yellow-400 text-lg">💪</span>
            <span>by Built4You</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
