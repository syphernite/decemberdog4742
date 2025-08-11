import React from "react";

const milestones = [
  { year: "2018", title: "Beach Bumz Opens", text: "Started as a small pizzeria with big dreams" },
  { year: "2019", title: "Community Favorite", text: "Became a local hotspot for families and friends" },
  { year: "2022", title: "New Location", text: "Expanded seating and refreshed our bar program" },
  { year: "2024", title: "Liquor License", text: "Craft cocktails & premium spirits now available" },
];

const About: React.FC = () => (
  <div className="pt-24 pb-16">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="font-display text-white text-4xl mb-3">Our <span className="text-gradient">Milestones</span></h1>
      <p className="text-white/80 mb-10">The journey that brought us here</p>

      <div className="timeline-wrap relative">
        {/* vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-turquoise via-sunset-orange to-coral-pink" />
        <div className="space-y-10">
          {milestones.map((m, i) => (
            <div key={i} className="timeline-card relative mx-auto max-w-xl rounded-2xl bg-[#12161c] border border-white/10 px-6 py-6 text-white/90">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-turquoise to-sunset-orange text-[#0b0c10] font-bold w-16 h-9">
                  {m.year}
                </span>
                <h3 className="font-semibold text-xl">{m.title}</h3>
              </div>
              <p className="text-white/75">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default About;
