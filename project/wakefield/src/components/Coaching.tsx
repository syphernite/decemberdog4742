import React from "react";

const KAHUNAS_URL =
  "https://kahunas.io/contact/person_info/c2b2951e-632f-4b0a-bb08-a85d7803a87f";

const Booking = () => {
  return (
    <section id="booking" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-4">
          Work With Me — <span className="text-sky-400">Wherever You Are</span>
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
          World-class coaching delivered to you. Train smarter. Eat better. Stay consistent.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-14">
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Personalized Workouts</h3>
            <p className="text-gray-300">
              Programs tailored to your goal, level, and schedule.
            </p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Nutrition Guidance</h3>
            <p className="text-gray-300">
              Macro targets and flexible meals you’ll actually enjoy.
            </p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Accountability & Support</h3>
            <p className="text-gray-300">
              Check-ins, progress tracking, and form feedback.
            </p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Community Motivation</h3>
            <p className="text-gray-300">
              Be part of a supportive, like-minded crew.
            </p>
          </div>
        </div>

        <div className="text-center">
          {/* Changed button link */}
          <a
            href={KAHUNAS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-600 transition text-white font-semibold text-lg shadow-lg"
          >
            Apply for Coaching
          </a>

          {/* Moved this text slightly down */}
          <p className="text-gray-300 mt-6">
            Limited spots • Personalized onboarding
          </p>
        </div>
      </div>
    </section>
  );
};

export default Booking;
