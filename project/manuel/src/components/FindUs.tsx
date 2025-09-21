import React from 'react';

export default function FindUs() {
  return (
    <section id="findus" className="relative py-10 sm:py-16">
      <div className="mx-auto max-w-4xl px-3 sm:px-4">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-center">FIND US</h2>

        <div className="mx-auto mt-4 w-full max-w-xl rounded-2xl border border-black/10 bg-gradient-to-r from-red-600 to-red-500 text-white p-4 text-center shadow">
          <div className="text-lg font-semibold">
            1303 SW 30th St, Lawton, OK 73505
          </div>
        </div>

        {/* Larger map for mobile and desktop */}
        <div className="mx-auto mt-5 w-full max-w-xl rounded-xl overflow-hidden border border-black/10 shadow-lg">
          <iframe
            title="Map"
            src="https://www.google.com/maps?q=1303+SW+30th+St,+Lawton,+OK+73505&output=embed"
            width="100%"
            height="380"
            loading="lazy"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
