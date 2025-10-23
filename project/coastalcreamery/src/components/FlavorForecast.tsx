import { useState, useEffect } from 'react';
import { Sun, Cloud, Sparkles } from 'lucide-react';

const forecasts = [
  { weather: 'Sunny with a chance of sprinkles!', icon: Sun, special: 'Double Chocolate Dip' },
  { weather: 'Partly cloudy, fully delicious!', icon: Cloud, special: 'Caramel Cloud Nine' },
  { weather: 'Tropical vibes ahead!', icon: Sparkles, special: 'Mango Tango Sorbet' },
  { weather: 'Sweet breeze incoming!', icon: Sun, special: 'Honey Lavender Dream' },
];

export default function FlavorForecast() {
  const [currentForecast] = useState(() => forecasts[Math.floor(Math.random() * forecasts.length)]);
  const Icon = currentForecast.icon;

  return (
    <section className="py-16 bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-300 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display drop-shadow-lg">
          Today's Flavor Forecast
        </h2>

        <div className="bg-white/90 backdrop-blur rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-center gap-6 mb-6">
            <Icon className="w-16 h-16 text-yellow-500 animate-pulse" />
            <p className="text-3xl md:text-4xl font-bold text-cyan-800">
              {currentForecast.weather}
            </p>
          </div>

          <div className="border-t-2 border-cyan-200 pt-6 mt-6">
            <p className="text-xl text-cyan-600 mb-3 font-semibold">Special of the Day:</p>
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
              {currentForecast.special}
            </p>
          </div>
        </div>

        <div className="mt-8 inline-block bg-white/60 backdrop-blur rounded-2xl px-6 py-3 shadow-lg">
          <p className="text-cyan-800 font-medium italic">
            Forecast updates daily—catch the wave before it melts!
          </p>
        </div>
      </div>
    </section>
  );
}
