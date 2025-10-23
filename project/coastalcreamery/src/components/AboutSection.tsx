import { Heart, Users, Palmtree } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-cyan-50 to-blue-100 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-cyan-800 mb-4 font-display">
            The Scoop Squad
          </h2>
          <p className="text-xl text-cyan-600 italic">A family recipe with a coastal twist</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:rotate-1">
            <div className="bg-gradient-to-br from-pink-300 to-rose-300 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="w-8 h-8 text-white" fill="white" />
            </div>
            <h3 className="text-2xl font-bold text-cyan-800 mb-4 text-center">Made with Love</h3>
            <p className="text-cyan-700 text-center leading-relaxed">
              Every batch is handcrafted by our family, using recipes passed down through generations and perfected by the coastal breeze.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:-rotate-1">
            <div className="bg-gradient-to-br from-emerald-300 to-teal-300 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Palmtree className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-cyan-800 mb-4 text-center">Morehead Magic</h3>
            <p className="text-cyan-700 text-center leading-relaxed">
              Born and raised by the pier, we blend local ingredients with that unmistakable salt-air sweetness only coastal NC can deliver.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:rotate-1">
            <div className="bg-gradient-to-br from-amber-300 to-yellow-300 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-cyan-800 mb-4 text-center">Community First</h3>
            <p className="text-cyan-700 text-center leading-relaxed">
              We're more than a creamery—we're your neighbors, your friends, and your go-to spot for creating sweet summer memories.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-cyan-200 rounded-3xl p-12 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-cyan-900 mb-6">
              The Story Behind the Scoop
            </h3>
            <p className="text-lg text-cyan-800 leading-relaxed mb-6">
              Coastal Creamery started as a dream by the waterfront—literally. Our founders met on the Morehead City pier over melting cones on a blazing summer day. They knew the town needed something special, something that tasted like childhood, vacation, and home all at once.
            </p>
            <p className="text-lg text-cyan-800 leading-relaxed mb-6">
              Years later, that dream turned into a small shop where locals and visitors alike line up for our signature flavors. From sunrise walks with waffle cones to sunset sundaes by the shore, we've been scooping happiness since day one.
            </p>
            <p className="text-xl font-semibold text-cyan-900 italic">
              Come say hi—we promise our ice cream is saltier than the sea (in the best way)!
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-white/60 backdrop-blur rounded-2xl px-8 py-4 shadow-lg">
            <p className="text-cyan-700 font-medium">
              Fun Fact: We once dropped a cone that started a seagull riot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
