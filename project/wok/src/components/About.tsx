import { Users, Heart, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl">🐉</div>
        <div className="absolute bottom-10 right-10 text-9xl">🥢</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* --- Keep ONLY WHY CASH ONLY --- */}
        <div className="bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 p-1 comic-border max-w-4xl mx-auto">
          <div className="bg-black p-8">
            <h3 className="font-['Luckiest_Guy'] text-4xl text-yellow-300 mb-6 text-center">
              WHY CASH ONLY?
            </h3>
            <p className="font-['Permanent_Marker'] text-xl text-white text-center leading-relaxed mb-4">
              "In a world of apps and delivery drones, we keep it HUMAN. Your
              cash fuels the flame, keeps the wok hot, and the spirit ALIVE."
            </p>

            <div className="flex justify-center gap-6 flex-wrap mt-6">
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
