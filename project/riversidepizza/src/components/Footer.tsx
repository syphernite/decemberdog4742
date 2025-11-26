import { Pizza, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-olive-green text-warm-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Pizza className="w-10 h-10 text-italian-red" />
              <div>
                <h3 className="text-2xl font-bold">Riverside Pizza &amp; Subs</h3>
                <p className="text-gray-400 text-sm">Your Neighborhood Favorite Since 1999</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Family-run, community-loved. From giant pies and cheesesteaks to wings and salads, Riverside has been
              feeding Newport for decades with hearty portions and no-nonsense comfort food.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Riverside Pizza & Subs on Facebook"
                className="bg-italian-red p-3 rounded-lg hover:bg-terracotta transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Riverside Pizza & Subs on Instagram"
                className="bg-italian-red p-3 rounded-lg hover:bg-terracotta transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Menu Highlights
                </a>
              </li>
              <li>
                <a href="#specials" className="hover:text-white transition-colors">
                  Daily Specials
                </a>
              </li>
              <li>
                <a href="#catering" className="hover:text-white transition-colors">
                  Catering
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Visit &amp; Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>6919 Hwy 70, Suite A</li>
              <li>Newport, NC 28570</li>
              <li className="pt-2">
                <a
                  href="tel:12522232277"
                  className="hover:text-white transition-colors font-semibold tracking-wide"
                >
                  (252) 223-2277
                </a>
              </li>
              <li>
                <a
                  href="mailto:riversidepizzaandsubs@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  riversidepizzaandsubs@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-soft-gray pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-soft-gray text-sm">
            &copy; {new Date().getFullYear()} Riverside Pizza &amp; Subs. All rights reserved.
          </p>
          <p className="text-soft-gray text-sm mt-4 md:mt-0">
            Made with fresh ingredients and hometown pride in Newport, North Carolina.
          </p>
          <p className="text-soft-gray text-sm mt-4 md:mt-0">
            Made with ❤️ by Built4You
          </p>
        </div>
      </div>
    </footer>
  );
}
