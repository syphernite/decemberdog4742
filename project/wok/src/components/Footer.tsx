import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-12 border-t-4 border-yellow-400">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="font-['Luckiest_Guy'] text-3xl text-yellow-300 mb-3">
              CHINA WOK
            </h3>
            <p className="font-['Permanent_Marker'] text-sm text-gray-400">
              Serving flavor with attitude since forever
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-['Bangers'] text-xl text-yellow-300 mb-4">
              FOLLOW THE WOK
            </h4>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-12 h-12 bg-red-600 flex items-center justify-center comic-border hover:bg-red-700 transform hover:scale-110 transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-blue-600 flex items-center justify-center comic-border hover:bg-blue-700 transform hover:scale-110 transition-all">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-cyan-500 flex items-center justify-center comic-border hover:bg-cyan-600 transform hover:scale-110 transition-all">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-['Bangers'] text-xl text-yellow-300 mb-3">
              QUICK LINKS
            </h4>
            <div className="space-y-2">
              <a href="#menu" className="block font-['Permanent_Marker'] text-sm text-gray-400 hover:text-yellow-300 transition-colors">
                Menu
              </a>
              <a href="#" className="block font-['Permanent_Marker'] text-sm text-gray-400 hover:text-yellow-300 transition-colors">
                Catering
              </a>
              <a href="#" className="block font-['Permanent_Marker'] text-sm text-gray-400 hover:text-yellow-300 transition-colors">
                Employment (We're Hiring!)
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500 pulse-glow" />
              <p className="font-['Permanent_Marker'] text-sm text-gray-400">
                Made with love, wok-fired with passion
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 comic-border">
              <p className="font-['Bangers'] text-xl text-yellow-300">
                WOK THIS WAY NEXT TIME! 👉
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="font-['Permanent_Marker'] text-xs text-gray-600">
              © 2025 China Wok. Cash Only. No Regrets. All Rights Reserved.
            </p>
            <p className="font-['Permanent_Marker'] text-xs text-gray-600 mt-2">
              Best Chinese Takeout in Lawton, TN | Cash-Only Drive-Thru | Family Owned & Operated
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          {['🥟', '🍜', '🥢', '🔥', '🥠', '🦐', '🥦'].map((emoji, idx) => (
            <span
              key={idx}
              className="text-4xl opacity-30 hover:opacity-100 transform hover:scale-125 transition-all cursor-default"
              style={{
                animation: `float 3s ease-in-out infinite`,
                animationDelay: `${idx * 0.2}s`
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
