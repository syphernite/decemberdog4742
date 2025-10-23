import { ChefHat, Flame, CircleDollarSign } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [exploded, setExploded] = useState(false);

  const handleMenuClick = () => {
    setExploded(true);
    setTimeout(() => {
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setExploded(false), 1000);
    }, 600);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-red-600 via-orange-500 to-yellow-500 overflow-hidden">
      {/* Overlay layers */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent" />

      {/* Floating dots */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-50 steam-rise"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-3 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="float-bounce mb-8">
          <ChefHat className="w-24 h-24 text-yellow-300 pulse-glow" strokeWidth={2.5} />
        </div>

        {/* Main title */}
        <h1
          className="text-7xl md:text-9xl font-['Luckiest_Guy'] text-white mb-2 relative"
          style={{
            textShadow: '6px 6px 0 #000, 8px 8px 0 rgba(0,0,0,0.5), 0 0 40px rgba(255,215,0,0.5)',
          }}
        >
          <span className="inline-block -rotate-3">CHINA</span>{' '}
          <span className="inline-block rotate-2 text-yellow-300">WOK</span>
        </h1>

        {/* EXPRESS plate */}
        <div className="relative mb-8 md:mb-10 flex items-center justify-center">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-52 md:w-64 h-16 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.15)]" />
          <div
            className="relative text-4xl md:text-6xl font-['Bangers'] text-red-600 z-20 rotate-2"
            style={{
              textShadow:
                '3px 3px 0 #fff, 4px 4px 0 #000, 0 0 20px rgba(255,0,0,0.5)',
            }}
          >
            EXPRESS
          </div>
        </div>

        {/* Tagline banner */}
        <div className="mb-8 relative z-10 mt-1 md:mt-0">
          <div className="absolute -inset-4 bg-black/30 -rotate-2 rounded-lg" />
          <p className="relative text-2xl md:text-4xl font-['Permanent_Marker'] text-yellow-300 px-6 py-3 neon-glow">
            Where Flavor Hits Hard – Cash Only, No Regrets!
          </p>
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap gap-4 items-center justify-center mb-12">
          <div className="flex items-center gap-2 bg-black text-yellow-300 px-4 py-2 comic-border -rotate-2">
            <Flame className="w-6 h-6" />
            <span className="font-['Bangers'] text-xl">Wok-Fired</span>
          </div>
          <div className="flex items-center gap-2 bg-black text-green-400 px-4 py-2 comic-border rotate-2">
            <CircleDollarSign className="w-6 h-6" />
            <span className="font-['Bangers'] text-xl">Cash Only</span>
          </div>
          <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 comic-border -rotate-1">
            <span className="font-['Bangers'] text-xl">Drive-Thru</span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleMenuClick}
          className={`group relative bg-yellow-400 text-black px-12 py-6 text-3xl font-['Bangers'] comic-border hover:bg-yellow-300 transform hover:scale-110 transition-all duration-300 ${
            exploded ? 'animate-ping' : ''
          }`}
        >
          <span className="relative z-10">VIEW MENU</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity" />
        </button>

        {/* Confetti dumplings */}
        {exploded && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-8 h-8 text-4xl animate-ping"
                style={{
                  left: '50%',
                  top: '50%',
                  animation: `ping 0.6s ease-out forwards`,
                  animationDelay: `${i * 0.02}s`,
                  transform: `translate(-50%, -50%) translate(${Math.cos(i * 0.21) * 100}px, ${
                    Math.sin(i * 0.21) * 100
                  }px)`,
                }}
              >
                🥟
              </div>
            ))}
          </div>
        )}

        {/* Footer text */}
        <div className="mt-16 text-white font-['Permanent_Marker'] text-lg">
          <p className="mb-2">📍 Lawton, OK</p>
          <p>👇 Scroll for the flavor adventure 👇</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
