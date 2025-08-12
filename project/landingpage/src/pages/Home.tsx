// src/pages/Home.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Pricing from "../components/Pricing";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";

export default function Home() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    window.scrollTo(0, 0);
    navigate("/contact");
  };

  return (
    <main className="min-h-screen bg-transparent text-white font-sans">
      {/* Hero with galaxy visible */}
      <Hero />

      {/* Pricing */}
      <section id="pricing" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Pricing />
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* CTA */}
      <section className="py-20 text-center">
        <h3 className="text-4xl font-bold mb-6">Ready to Bring Your Vision to Life?</h3>
        <p className="mb-10 text-xl text-slate-200">
          Let’s build something effective and fast.
        </p>
        <button
          onClick={handleContactClick}
          className="relative inline-flex items-center justify-center px-10 py-4 text-lg rounded-xl bg-emerald-600 hover:bg-emerald-700 transition shadow-lg"
        >
          Contact Us
        </button>
      </section>
    </main>
  );
}
