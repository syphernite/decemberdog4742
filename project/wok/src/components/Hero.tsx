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
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent"></div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-50 steam-rise"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="float-bounce mb-8">
          <ChefHat className="w-24 h-24 text-yellow-300 pulse-glow" strokeWidth={2.5} />
        </div>

        <h1 className="text-8xl md:text-9xl font-['Luckiest_Guy'] text-white mb-4 relative" style={{
          textShadow: '6px 6px 0 #000, 8px 8px 0 rgba(0,0,0,0.5), 0 0 40px rgba(255,215,0,0.5)'
        }}>
          <span className="inline-block transform -rotate-3">CHINA</span>{' '}
          <span className="inline-block transform rotate-2 text-yellow-300">WOK</span>
        </h1>

        <div className="mb-8 relative">
          <div className="absolute -inset-4 bg-black/30 transform -rotate-2 rounded-lg"></div>
          <p className="relative text-2xl md:text-4xl font-['Permanent_Marker'] text-yellow-300 px-6 py-3 neon-glow">
            Where Flavor Hits Hard – Cash Only, No Regrets!
          </p>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center mb-12">
          <div className="flex items-center gap-2 bg-black text-yellow-300 px-4 py-2 comic-border transform -rotate-2">
            <Flame className="w-6 h-6" />
            <span className="font-['Bangers'] text-xl">Wok-Fired</span>
          </div>
          <div className="flex items-center gap-2 bg-black text-green-400 px-4 py-2 comic-border transform rotate-2">
            <CircleDollarSign className="w-6 h-6" />
            <span className="font-['Bangers'] text-xl">Cash Only</span>
          </div>
          <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 comic-border transform -rotate-1">
            <span className="font-['Bangers'] text-xl">Drive-Thru</span>
          </div>
        </div>

        <button
          onClick={handleMenuClick}
          className={`group relative bg-yellow-400 text-black px-12 py-6 text-3xl font-['Bangers'] comic-border hover:bg-yellow-300 transform hover:scale-110 transition-all duration-300 ${exploded ? 'animate-ping' : ''}`}
        >
          <span className="relative z-10">VIEW MENU</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
        </button>

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
                  transform: `translate(-50%, -50%) translate(${Math.cos(i * 0.21) * 100}px, ${Math.sin(i * 0.21) * 100}px)`
                }}
              >
                🥟
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 text-white font-['Permanent_Marker'] text-lg">
          <p className="mb-2">📍 Lawton, TN</p>
          <p>👇 Scroll for the flavor adventure 👇</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
