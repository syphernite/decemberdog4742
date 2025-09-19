// src/pages/Events.tsx
import React from 'react';
import { Calendar, Music, Mic, Trophy, Tv } from 'lucide-react';

const upcomingEvents = [
  { date: '2025-01-15', day: 'Wednesday', title: 'Trivia Night', time: '7:00 PM', description: 'Test your knowledge and win prizes! Teams of up to 6 players.', icon: Trophy },
  { date: '2025-01-18', day: 'Saturday', title: 'Live Music - Local Band', time: '8:00 PM', description: 'Enjoy live music from talented local musicians.', icon: Music },
  { date: '2025-01-19', day: 'Sunday', title: 'NFL Conference Championships', time: 'All Day', description: 'Watch all the playoff action on our big screens!', icon: Tv },
  { date: '2025-01-22', day: 'Wednesday', title: 'Trivia Night', time: '7:00 PM', description: 'Weekly trivia competition with great prizes.', icon: Trophy },
  { date: '2025-01-25', day: 'Saturday', title: 'Karaoke Night', time: '9:00 PM', description: 'Show off your singing skills! All skill levels welcome.', icon: Mic }
];

const regularEvents = [
  { day: 'Monday', event: 'Trivia Night', time: '7:00 PM', description: 'Weekly trivia competition' },
  { day: 'Thursday', event: 'Live Music', time: '8:00 PM', description: 'Local bands and musicians' },
  { day: 'Saturday', event: 'Karaoke Night', time: '9:00 PM', description: 'Sing your heart out' },
  { day: 'Sunday', event: 'Game Day', time: 'All Day', description: 'NFL and college football' }
];

export default function Events() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Events & Game Day</h1>
          <p className="text-gray-300 text-lg">Live music, trivia, sports, and more!</p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-amber-500" />
            Upcoming Events
          </h2>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <div
                  key={index}
                  className="bg-neutral-900/70 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-amber-500/50 transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-charcoal" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{event.title}</h3>
                        <div className="text-amber-500 font-semibold">
                          {event.day} • {event.time}
                        </div>
                      </div>
                      <p className="text-gray-300">{event.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Regular Weekly Events */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Weekly Schedule</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularEvents.map((event, index) => (
              <div key={index} className="bg-neutral-900/70 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-bold text-lg">{event.event}</h3>
                  <span className="text-amber-500 font-semibold">{event.time}</span>
                </div>
                <p className="text-gray-300 mb-2">{event.description}</p>
                <div className="text-sm text-gray-400">Every {event.day}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Game Day Features */}
        <section className="bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Game Day Experience</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Tv className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">NFL Sundays</h3>
              <p className="text-gray-300">Every game on our big screens with surround sound</p>
            </div>

            <div>
              <Trophy className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">College Football Saturdays</h3>
              <p className="text-gray-300">Cheer for your team with fellow fans</p>
            </div>

            <div>
              <Calendar className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">PPV Events</h3>
              <p className="text-gray-300">UFC, Boxing, and other pay-per-view events</p>
            </div>
          </div>
        </section>

        <div className="text-center mt-8">
          <p className="text-gray-400">
            Event schedules subject to change. Call ahead for special events and reservations.
          </p>
        </div>
      </div>
    </div>
  );
}
