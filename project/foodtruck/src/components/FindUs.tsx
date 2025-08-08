import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

// Request compressed, reasonable width images
const imgUrl = (u: string) => (u.includes('?') ? u : `${u}?auto=compress&cs=tinysrgb&w=1200`);

const FindUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Defer heavy work until section is in view
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setIsVisible(true)),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const events = [
    {
      date: "Sat",
      day: "17",
      month: "AUG",
      name: "Downtown Night Market",
      time: "6:00 PM – 11:00 PM",
      address: "Main & 3rd, City Center",
      photo: imgUrl("https://images.pexels.com/photos/2587014/pexels-photo-2587014.jpeg")
    },
    {
      date: "Sun",
      day: "25",
      month: "AUG",
      name: "Riverside Food Fest",
      time: "12:00 PM – 6:00 PM",
      address: "Riverside Park, West Lawn",
      photo: imgUrl("https://images.pexels.com/photos/1304471/pexels-photo-1304471.jpeg")
    },
    {
      date: "Fri",
      day: "30",
      month: "AUG",
      name: "Campus Late Bites",
      time: "9:00 PM – 1:00 AM",
      address: "University Quad",
      photo: imgUrl("https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg")
    }
  ];

  return (
    <section
      id="find-us"
      ref={sectionRef}
      className={`py-20 bg-gray-900 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Find Us / Events</h2>
          <p className="mt-3 text-gray-400">Catch the truck around the city</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map / photo column */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl overflow-hidden">
              <img
                loading="lazy"
                decoding="async"
                src={events[0].photo}
                alt="Event preview"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {events.slice(0,3).map((e, i) => (
                <img
                  key={i}
                  loading="lazy"
                  decoding="async"
                  src={e.photo}
                  alt={e.name}
                  className="w-full h-20 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Events list */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {events.map((e, i) => (
                <div key={i} className="flex gap-4 bg-gray-950 rounded-xl p-4 border border-gray-800">
                  <div className="w-16 text-center rounded-lg bg-yellow-500 text-black font-bold py-2">
                    <div className="text-xs uppercase tracking-wide">{e.month}</div>
                    <div className="text-2xl leading-none">{e.day}</div>
                    <div className="text-xs">{e.date}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{e.name}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-gray-300">
                      <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" /> {e.time}</span>
                      <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" /> {e.address}</span>
                      <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" /> Free entry</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social follow block */}
            <div className="mt-8 bg-gray-950 rounded-xl p-6 border border-gray-800">
              <h4 className="text-xl font-semibold mb-4">Follow for pop-ups</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="#"
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-4 rounded-lg font-semibold text-center transform hover:scale-105 transition-all duration-300"
                >
                  <Instagram className="w-6 h-6 mx-auto mb-2" />
                  Instagram
                </a>
                <a
                  href="#"
                  className="flex-1 bg-blue-600 text-white p-4 rounded-lg font-semibold text-center transform hover:scale-105 transition-all duration-300"
                >
                  <Facebook className="w-6 h-6 mx-auto mb-2" />
                  Facebook
                </a>
                <a
                  href="#"
                  className="flex-1 bg-blue-400 text-white p-4 rounded-lg font-semibold text-center transform hover:scale-105 transition-all duration-300"
                >
                  <Twitter className="w-6 h-6 mx-auto mb-2" />
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
