import { Users, Heart, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl">🐉</div>
        <div className="absolute bottom-10 right-10 text-9xl">🥢</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className="text-7xl font-['Luckiest_Guy'] text-center mb-16 text-yellow-300"
          style={{
            textShadow: '4px 4px 0 #000, 6px 6px 0 rgba(255,0,0,0.5)',
          }}
        >
          OUR LEGENDARY ORIGINS
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'THE NOODLE ESCAPE',
              icon: '🍜',
              text: "Grandma fled the Great Noodle Monster of '62 with nothing but her secret wok and a dream. That wok? It's still in the kitchen.",
              year: '1962',
            },
            {
              title: 'THE WOK LEGACY',
              icon: '🥘',
              text: 'Three generations, one wok. Passed down like Excalibur, this baby has cooked more than a million meals and counting.',
              year: '1985',
            },
            {
              title: 'SPATULA WARRIORS',
              icon: '🔥',
              text: "Today's chef wields spatulas like samurai swords. Cash register? A throne. The drive-thru window? Portal to flavor paradise.",
              year: '2025',
            },
          ].map((panel, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-yellow-500 opacity-75 blur-xl group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white text-black p-6 comic-border transform hover:scale-105 transition-transform">
                <div className="absolute -top-6 -right-6 bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-['Bangers'] text-sm border-4 border-black transform rotate-12">
                  {panel.year}
                </div>
                <div className="text-6xl mb-4 text-center">{panel.icon}</div>
                <h3 className="font-['Bangers'] text-2xl mb-3 text-center">
                  {panel.title}
                </h3>
                <p className="font-['Permanent_Marker'] text-sm leading-relaxed">
                  {panel.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 p-1 comic-border max-w-4xl mx-auto">
          <div className="bg-black p-8">
            <h3 className="font-['Luckiest_Guy'] text-4xl text-yellow-300 mb-6 text-center">
              WHY CASH ONLY?
            </h3>
            <p className="font-['Permanent_Marker'] text-xl text-white text-center leading-relaxed mb-4">
              "In a world of apps and delivery drones, we keep it HUMAN. Your
              cash fuels the flame, keeps the wok hot, and the spirit ALIVE."
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-green-400">
                <Heart className="w-6 h-6 pulse-glow" />
                <span className="font-['Bangers'] text-lg">Real Connection</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-300">
                <Sparkles className="w-6 h-6 pulse-glow" />
                <span className="font-['Bangers'] text-lg">Old School Cool</span>
              </div>
              <div className="flex items-center gap-2 text-red-400">
                <Users className="w-6 h-6 pulse-glow" />
                <span className="font-['Bangers'] text-lg">Family Vibes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
