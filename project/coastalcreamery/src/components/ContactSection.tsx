import { useState } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  const [message, setMessage] = useState('');
  const [scoopyResponse, setScoopyResponse] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const responses = [
      "Squawk! That sounds delicious! Come catch the wave in person!",
      "No online orders—but I promise the trip is worth it!",
      "Ooh, great question! Swing by the shop and the crew will hook you up!",
      "My feathers are tingling—sounds like you need a double scoop! See you soon!",
    ];
    setScoopyResponse(responses[Math.floor(Math.random() * responses.length)]);
    setMessage('');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-100 to-cyan-50 relative">
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full fill-blue-100">
          <path d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,42.7C672,43,768,53,864,56C960,59,1056,53,1152,48C1248,43,1344,37,1392,34.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-cyan-800 mb-4 font-display">
            Catch the Wave
          </h2>
          <p className="text-xl text-cyan-600 italic">Come visit us by the shore!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-pink-300 to-rose-300 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-800 mb-2">Location</h3>
                  <p className="text-cyan-700">
                    By the beautiful Morehead City pier
                    <br />
                    Morehead City, NC
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-emerald-300 to-teal-300 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-800 mb-2">Hours</h3>
                  <p className="text-cyan-700">
                    Daily: 11am - 9pm
                    <br />
                    <span className="text-sm italic">Extended hours in summer!</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-amber-300 to-yellow-300 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-800 mb-2">Contact</h3>
                  <p className="text-cyan-700">
                    Give us a ring!
                    <br />
                    <span className="font-semibold">(252) SCOOP-NC</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-cyan-200 rounded-3xl p-8 shadow-2xl">
            <div className="mb-6 text-center">
              <div className="inline-block text-6xl mb-4 animate-bounce">🦅</div>
              <h3 className="text-2xl font-bold text-cyan-900 mb-2">Ask Scoopy!</h3>
              <p className="text-cyan-700">Our friendly seagull guide</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What's your flavor crave today?"
                className="w-full p-4 rounded-2xl border-2 border-cyan-200 focus:border-cyan-400 focus:outline-none resize-none h-32"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white font-semibold py-4 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Ask Scoopy
              </button>
            </form>

            {scoopyResponse && (
              <div className="mt-6 bg-white/80 backdrop-blur rounded-2xl p-6 animate-fade-in">
                <p className="text-cyan-800 font-medium">
                  <span className="text-2xl mr-2">🦅</span>
                  {scoopyResponse}
                </p>
              </div>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-cyan-700 italic">
                No online orders—come catch the wave in person!
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-200 to-amber-200 rounded-2xl px-8 py-4 shadow-lg transform hover:rotate-2 transition-all duration-300">
            <p className="text-cyan-800 font-semibold text-lg">
              Follow the salt air and the smiles—you can't miss us!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
