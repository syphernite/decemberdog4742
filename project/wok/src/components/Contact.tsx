import { Phone, MapPin, Clock, DollarSign, Navigation } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [fortune, setFortune] = useState("Your next meal is destiny");

  const fortunes = [
    "Your next meal is destiny",
    "Tip your wok master",
    "Cash is king, flavor is queen",
    "Good things come to those who wok",
    "The secret ingredient is always love... and MSG",
    "Fortune favors the hungry"
  ];

  const refreshFortune = () => {
    const newFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(newFortune);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-red-900 to-black text-white">
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-7xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            🥠
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-7xl font-['Luckiest_Guy'] text-center mb-4 text-yellow-300" style={{
          textShadow: '5px 5px 0 #000, 7px 7px 0 rgba(255,0,0,0.5)'
        }}>
          GET YOUR FIX
        </h2>
        <p className="text-center font-['Permanent_Marker'] text-xl mb-16 text-red-400">
          Call us old-fashioned... we'll take it as a compliment!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 opacity-75 blur-xl group-hover:opacity-100 transition-opacity"></div>

            <div className="relative bg-white text-black p-8 comic-border">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center border-8 border-black transform -rotate-6">
                    <Phone className="w-16 h-16 text-white" strokeWidth={3} />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-yellow-400 text-black rounded-full w-16 h-16 flex items-center justify-center font-['Bangers'] text-3xl border-4 border-black animate-pulse">
                    📞
                  </div>
                </div>
              </div>

              <h3 className="font-['Bangers'] text-3xl text-center mb-4">
                ORDER NOW
              </h3>

              <button className="w-full bg-green-500 text-white py-4 text-2xl font-['Luckiest_Guy'] comic-border hover:bg-green-600 transform hover:scale-105 transition-all mb-4">
                (555) WOK-FIRE
              </button>

              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-gray-100 p-3 border-2 border-black">
                  <Clock className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="font-['Bangers'] text-sm">Mon-Sat: 11AM-9PM</p>
                    <p className="font-['Bangers'] text-sm">Sunday: 12PM-8PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-gray-100 p-3 border-2 border-black">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <p className="font-['Bangers'] text-sm">123 Flavor Street, Lawton, TN</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-75 blur-xl group-hover:opacity-100 transition-opacity"></div>

            <div className="relative bg-black p-8 comic-border border-yellow-400">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-1 mb-6">
                <div className="bg-black p-4">
                  <h3 className="font-['Luckiest_Guy'] text-3xl text-yellow-300 text-center mb-2">
                    REBEL MODE
                  </h3>
                  <p className="font-['Permanent_Marker'] text-lg text-white text-center">
                    The Cash-Only Code
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-yellow-400 text-black p-4 border-2 border-black transform -rotate-1">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="w-8 h-8" />
                    <p className="font-['Bangers'] text-xl">CASH = FLAVOR FUEL</p>
                  </div>
                  <p className="font-['Permanent_Marker'] text-sm">
                    ATMs nearby? Absolutely. Worth it? 100%.
                  </p>
                </div>

                <div className="bg-white text-black p-4 border-2 border-black transform rotate-1">
                  <p className="font-['Bangers'] text-lg mb-2">
                    💡 EXACT CHANGE = GOOD KARMA
                  </p>
                  <p className="font-['Permanent_Marker'] text-sm">
                    We're not saying it's magic... but it totally is.
                  </p>
                </div>

                <div className="bg-green-400 text-black p-4 border-2 border-black transform -rotate-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Navigation className="w-6 h-6" />
                    <p className="font-['Bangers'] text-lg">FIND AN ATM</p>
                  </div>
                  <p className="font-['Permanent_Marker'] text-xs">
                    Corner of Main & 5th (0.2mi) • Gas Station on Route 9 (0.4mi)
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-600 border-2 border-yellow-300 transform rotate-1">
                <p className="font-['Permanent_Marker'] text-center text-yellow-300 text-sm">
                  "Can I pay with card?"<br/>
                  <span className="text-white">Only if it's made of gold. 😉</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-1 comic-border">
            <div className="bg-white text-black p-8 text-center">
              <h3 className="font-['Luckiest_Guy'] text-4xl mb-4">
                TODAY'S FORTUNE
              </h3>
              <div className="relative inline-block cursor-pointer" onClick={refreshFortune}>
                <div className="text-8xl mb-4 transform hover:scale-110 transition-transform">
                  🥠
                </div>
                <div className="bg-yellow-100 border-2 border-dashed border-yellow-600 p-4 transform -rotate-1">
                  <p className="font-['Permanent_Marker'] text-xl text-yellow-900">
                    "{fortune}"
                  </p>
                </div>
              </div>
              <p className="font-['Bangers'] text-sm mt-4 text-gray-600">
                Click the cookie for a new fortune!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
