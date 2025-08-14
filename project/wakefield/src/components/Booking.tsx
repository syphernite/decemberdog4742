import React from "react";

const KAHUNAS_URL =
  "https://kahunas.io/contact/person_info/c2b2951e-632f-4b0a-bb08-a85d7803a87f";

const FIZZI_URL =
  "https://nutricookworld.com/en-us/products/nc-fizzi-soda-maker-sparkling-water-maker";

const Booking = () => {
  return (
    <section id="booking" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-4">
          Let’s Get <span className="text-sky-400">Started</span>
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
          Ready to move? Tell me your goals and I’ll reply with next steps.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left side — Apply button centered */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg flex items-center justify-center">
            <a
              href={KAHUNAS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-600 transition text-white font-semibold text-lg shadow-lg"
            >
              Apply for Coaching
            </a>
          </div>

          {/* Right side cards */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                Special Offer — Fizzi Sparkling Water Maker
              </h3>
              <p className="text-gray-300 mb-4">
                Enjoy fresh sparkling water at home anytime. Click below to grab
                this Fizzi Soda Maker with a special discount.
              </p>
              <a
                href={FIZZI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition"
              >
                Get Fizzi — Discount Link
              </a>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-lg flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                Email Direct
              </h3>
              <p className="text-sky-400 mb-2">oli.wakefield@gmail.com</p>
              <p className="text-gray-300">
                Quick question? I typically reply within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
