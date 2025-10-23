import { Phone, MapPin, Clock, DollarSign, Navigation } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const fortunes = [
    'Good fortune comes to those who eat here often.',
    'Your next meal will bring unexpected joy.',
    'A crispy bite is the secret to happiness.',
    'Patience brings perfect fried rice.',
    'Your generosity will return as free spring rolls.',
    'Luck follows those who dine with chopsticks.',
    'You will soon receive extra sauce in life.',
    'Happiness is fried, not found.',
    'Balance is key - one sweet, one spicy.',
    'Great taste awaits you tomorrow.',
    'The wok never lies.',
    'Your wallet will forgive you for this meal.',
    'Today’s spice, tomorrow’s wisdom.',
    'The fortune you seek is in your next bite.',
    'Your heart knows when it is perfectly seasoned.',
    'Noodles unite all hungry souls.',
    'A full plate equals a full heart.',
    'Your next fortune cookie will be right.',
    'Wok on, hungry traveler.',
    'Life tastes better with sesame oil.',
  ];

  // Default text on load
  const [fortune, setFortune] = useState('Click to reveal');

  // Shuffle function
  const refreshFortune = () => {
    const newFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(newFortune);
  };

  // Business facts
  const PHONE_DISPLAY = '(580) 353-0883';
  const PHONE_TEL = '+15803530883';
  const ADDRESS_DISPLAY = '1409 NW Sheridan Rd, Lawton, OK 73505';
  const MAPS_URL =
    'https://www.google.com/maps/search/?api=1&query=1409+NW+Sheridan+Rd,+Lawton,+OK+73505';

  const hours = [
    { label: 'Sunday', value: '11:00 AM - 9:30 PM' },
    { label: 'Monday', value: '11:00 AM - 9:30 PM' },
    { label: 'Tuesday', value: '11:00 AM - 9:30 PM' },
    { label: 'Wednesday', value: '11:00 AM - 9:30 PM' },
    { label: 'Thursday', value: '11:00 AM - 9:30 PM' },
    { label: 'Friday', value: '11:00 AM - 10:00 PM' },
    { label: 'Saturday', value: '11:00 AM - 10:00 PM' },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-red-900 to-black text-white">
      {/* floating fortune cookies */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-7xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            🥠
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className="text-7xl font-['Luckiest_Guy'] text-center mb-4 text-yellow-300"
          style={{ textShadow: '5px 5px 0 #000, 7px 7px 0 rgba(255,0,0,0.5)' }}
        >
          GET YOUR FIX
        </h2>
        <p className="text-center font-['Permanent_Marker'] text-xl mb-16 text-red-400">
          China Wok Express of Lawton, off Sheridan Rd
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          {/* Call and core info */}
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

              <h3 className="font-['Bangers'] text-3xl text-center mb-4">ORDER NOW</h3>

              <a
                href={`tel:${PHONE_TEL}`}
                className="block text-center w-full bg-green-500 text-white py-4 text-2xl font-['Luckiest_Guy'] comic-border hover:bg-green-600 transform hover:scale-105 transition-all mb-4"
              >
                {PHONE_DISPLAY}
              </a>

              <div className="space-y-3">
                {/* Hours */}
                <div className="flex items-start gap-3 bg-gray-100 p-3 border-2 border-black">
                  <Clock className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <p className="font-['Bangers'] text-base mb-1">Hours</p>
                    <ul className="text-sm leading-6">
                      {hours.map((h) => (
                        <li key={h.label} className="flex justify-between gap-4">
                          <span className="font-['Bangers']">{h.label}:</span>
                          <span>{h.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-3 bg-gray-100 p-3 border-2 border-black">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <div className="flex-1">
                    <p className="font-['Bangers'] text-sm">{ADDRESS_DISPLAY}</p>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 mt-2 text-sm text-blue-700 underline"
                    >
                      <Navigation className="w-4 h-4" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cash-only and ATM helper - updated to on-site ATM */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-75 blur-xl group-hover:opacity-100 transition-opacity"></div>

            <div className="relative bg-black p-8 comic-border border-yellow-400">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-1 mb-6">
                <div className="bg-black p-4">
                  <h3 className="font-['Luckiest_Guy'] text-3xl text-yellow-300 text-center mb-2">
                    REBEL MODE
                  </h3>
                  <p className="font-['Permanent_Marker'] text-lg text-white text-center">
                    The Cash Only Code
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* On-site ATM callout */}
                <div className="bg-yellow-400 text-black p-4 border-2 border-black transform -rotate-1">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="w-8 h-8" />
                    <p className="font-['Bangers'] text-xl">ATM On Site - Inside The Restaurant</p>
                  </div>
                  <p className="font-['Permanent_Marker'] text-sm">
                    Grab cash without leaving. Worth it. Absolutely.
                  </p>
                </div>

                <div className="bg-white text-black p-4 border-2 border-black transform rotate-1">
                  <p className="font-['Bangers'] text-lg mb-2">Tip</p>
                  <p className="font-['Permanent_Marker'] text-sm">
                    Exact change is good karma. Extra sauce is loved.
                  </p>
                </div>

                <div className="bg-green-400 text-black p-4 border-2 border-black transform -rotate-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Navigation className="w-6 h-6" />
                    <p className="font-['Bangers'] text-lg">Find Us</p>
                  </div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-sm"
                  >
                    {ADDRESS_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-600 border-2 border-yellow-300 transform rotate-1">
                <p className="font-['Permanent_Marker'] text-center text-yellow-300 text-sm">
                  "Can I pay with card?"<br />
                  <span className="text-white">Only if it is made of gold.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fortune card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-1 comic-border">
            <div className="bg-white text-black p-8 text-center">
              <h3 className="font-['Luckiest_Guy'] text-4xl mb-4">TODAY'S FORTUNE</h3>
              <div
                className="relative inline-block cursor-pointer"
                onClick={refreshFortune}
                title="Click to reveal a random fortune"
              >
                <div className="text-8xl mb-4 transform hover:scale-110 transition-transform">🥠</div>
                <div className="bg-yellow-100 border-2 border-dashed border-yellow-600 p-4 transform -rotate-1">
                  <p className="font-['Permanent_Marker'] text-xl text-yellow-900">
                    "{fortune}"
                  </p>
                </div>
              </div>
              <p className="font-['Bangers'] text-sm mt-4 text-gray-600">
                Click the cookie to reveal or shuffle your fortune
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
