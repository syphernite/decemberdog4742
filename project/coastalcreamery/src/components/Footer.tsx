import { IceCream, Heart, Waves } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-cyan-800 to-cyan-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="wave-animation-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-4 mb-4">
            <IceCream className="w-12 h-12 text-pink-300 animate-float" />
            <h3 className="text-3xl md:text-4xl font-bold font-display">Coastal Creamery</h3>
            <IceCream className="w-12 h-12 text-pink-300 animate-float-delayed" />
          </div>
          <p className="text-xl text-cyan-200 italic mb-6">
            Where the sea meets sweet
          </p>
        </div>

        <div className="border-t border-cyan-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-cyan-200">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-pink-400 fill-pink-400 animate-pulse" />
            <span>by Built4You</span>
          </div>

          <div className="flex items-center gap-2">
            <Waves className="w-6 h-6 text-cyan-400" />
            <span className="text-2xl font-bold text-cyan-200 italic">
              Catch you on the flip cone!
            </span>
            <Waves className="w-6 h-6 text-cyan-400" />
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-cyan-700/50 backdrop-blur rounded-2xl px-6 py-3">
            <p className="text-sm text-cyan-100">
              © {new Date().getFullYear()} Coastal Creamery. All rights reserved. All ice cream responsibly enjoyed.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="inline-block neon-cone text-6xl animate-pulse-slow">
            🍦
          </div>
        </div>
      </div>
    </footer>
  );
}
