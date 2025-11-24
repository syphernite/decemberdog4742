import { Pizza, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Pizza className="w-10 h-10 text-red-500" />
              <div>
                <h3 className="text-2xl font-bold">Riverside Pizza & Subs</h3>
                <p className="text-gray-400 text-sm">Your Neighborhood Favorite Since 1985</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Serving up big slices, fresh subs, and hometown charm for 40 years. When you ask locals where to eat, they all point to the same place: right here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-red-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-red-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#specials" className="hover:text-white transition-colors">Daily Specials</a></li>
              <li><a href="#catering" className="hover:text-white transition-colors">Catering</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Order Online</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>456 River Road</li>
              <li>Riverside, ST 12345</li>
              <li className="pt-2">
                <a href="tel:5557897499" className="hover:text-white transition-colors font-semibold">
                  (555) 789-PIZZA
                </a>
              </li>
              <li>
                <a href="mailto:hello@riversidepizza.com" className="hover:text-white transition-colors">
                  hello@riversidepizza.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Riverside Pizza & Subs. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Made with fresh ingredients and love in our community kitchen.
          </p>
        </div>
      </div>
    </footer>
  );
}
