import { useState } from 'react';
import { Camera, Zap } from 'lucide-react';

const specials = [
  {
    title: "MONDAY MADNESS",
    subtitle: "Buy One, Get a High-Five!",
    overlay: "50% OFF Egg Rolls",
    emoji: "🤜"
  },
  {
    title: "WOKDAY WEDNESDAY",
    subtitle: "Hump Day Flavor Dump",
    overlay: "Free Spring Roll w/ $15+",
    emoji: "🎉"
  },
  {
    title: "FRIDAY FEVER",
    subtitle: "Weekend Warrior Deals",
    overlay: "$2 OFF Any Combo",
    emoji: "🔥"
  },
  {
    title: "LUNCH RUSH SPECIAL",
    subtitle: "11AM-2PM Daily",
    overlay: "$8 Express Combos",
    emoji: "⚡"
  }
];

const polaroids = [
  { caption: "The Legendary Wok", emoji: "🥘", color: "from-orange-400 to-red-500" },
  { caption: "Sizzlin' Fresh Daily", emoji: "🔥", color: "from-red-500 to-pink-500" },
  { caption: "Our Happy Customers", emoji: "😋", color: "from-yellow-400 to-orange-400" },
  { caption: "Drive-Thru Magic", emoji: "🚗", color: "from-green-400 to-blue-400" },
  { caption: "Handwritten Menu Boards", emoji: "📝", color: "from-purple-400 to-pink-400" },
  { caption: "Cash Register Throne", emoji: "👑", color: "from-yellow-500 to-amber-500" }
];

export default function Gallery() {
  const [flashedIndex, setFlashedIndex] = useState<number | null>(null);
  const [exploded, setExploded] = useState(false);

  const handlePolaroidClick = (index: number) => {
    setFlashedIndex(index);
    setTimeout(() => setFlashedIndex(null), 300);
  };

  const handleExplosion = () => {
    setExploded(true);
    setTimeout(() => setExploded(false), 1000);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-yellow-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 gap-4 p-4">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="text-2xl transform rotate-45">
              📸
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-7xl font-['Luckiest_Guy'] text-center mb-4 text-yellow-300" style={{
          textShadow: '5px 5px 0 #000, 7px 7px 0 rgba(255,0,0,0.5)'
        }}>
          FLAVOR SNAPSHOTS
        </h2>
        <p className="text-center font-['Permanent_Marker'] text-xl mb-16 text-yellow-400">
          Real moments, real wok, real good
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {polaroids.map((polaroid, idx) => (
            <div
              key={idx}
              className="group cursor-pointer"
              onClick={() => handlePolaroidClick(idx)}
            >
              <div className={`relative transform hover:scale-110 hover:rotate-0 transition-all duration-300 ${
                idx % 2 === 0 ? 'rotate-3' : '-rotate-3'
              }`}>
                <div className={`absolute -inset-2 bg-gradient-to-br ${polaroid.color} opacity-50 blur-lg group-hover:opacity-100 transition-opacity`}></div>

                <div className="relative bg-white p-4 pb-16 shadow-2xl border-4 border-white">
                  {flashedIndex === idx && (
                    <div className="absolute inset-0 bg-white animate-ping z-20"></div>
                  )}

                  <div className={`bg-gradient-to-br ${polaroid.color} aspect-square flex items-center justify-center text-8xl border-4 border-gray-200 relative overflow-hidden`}>
                    <span className="relative z-10">{polaroid.emoji}</span>
                    <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity"></div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-['Permanent_Marker'] text-black text-center text-sm">
                      {polaroid.caption}
                    </p>
                  </div>

                  <Camera className="absolute top-2 right-2 w-6 h-6 text-gray-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12 text-center">
          <button
            onClick={handleExplosion}
            className="group relative bg-red-600 text-yellow-300 px-16 py-8 text-4xl font-['Bangers'] comic-border hover:bg-red-700 transform hover:scale-110 transition-all duration-300"
          >
            <Zap className="inline-block w-10 h-10 mr-3 pulse-glow" />
            FLAVOR EXPLOSION
            <Zap className="inline-block w-10 h-10 ml-3 pulse-glow" />
          </button>

          {exploded && (
            <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
              <div className="text-9xl animate-ping">💥</div>
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-6xl animate-ping"
                  style={{
                    left: `${50 + Math.cos(i * 0.31) * 40}%`,
                    top: `${50 + Math.sin(i * 0.31) * 40}%`,
                    animationDelay: `${i * 0.05}s`
                  }}
                >
                  {['🔥', '⚡', '💫', '✨'][i % 4]}
                </div>
              ))}
            </div>
          )}
        </div>

        <h3 className="text-6xl font-['Luckiest_Guy'] text-center mb-12 text-red-500">
          DAILY SPECIALS
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specials.map((special, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 opacity-75 blur-xl group-hover:opacity-100 transition-opacity"></div>

              <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 p-6 comic-border transform group-hover:scale-105 group-hover:rotate-2 transition-all">
                <div className="text-6xl text-center mb-3">{special.emoji}</div>
                <h4 className="font-['Bangers'] text-2xl text-center mb-2 text-black">
                  {special.title}
                </h4>
                <p className="font-['Permanent_Marker'] text-sm text-center mb-4 text-gray-900">
                  {special.subtitle}
                </p>
                <div className="bg-black text-yellow-300 py-2 px-4 text-center border-2 border-white transform -rotate-2">
                  <p className="font-['Bangers'] text-lg">{special.overlay}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
