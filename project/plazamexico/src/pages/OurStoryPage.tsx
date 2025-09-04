// src/pages/OurStoryPage.tsx
import React from "react";
import { TestimonialsColumn } from "../components/TestimonialsColumn";
import { Users, Utensils, HeartHandshake } from "lucide-react";

const BASE = (import.meta as any).env.BASE_URL || "/";

const testimonials = [
  {
    text:
      "The staff was friendly and we did not feel rushed. The food was wonderful and so was the service. The restaurant was very clean as well.",
    name: "Sherie L.",
    role: "TripAdvisor Review",
  },
  {
    text:
      "Their salsa and chips are above the rest – so thick, so much flavor. Employees are so nice and very attentive.",
    name: "Loretta W.",
    role: "TripAdvisor Review",
  },
  {
    text:
      "Food was absolutely delicious – the warm chips and flavorful salsa were a fantastic start. Our server made our dinner a wonderful dining experience.",
    name: "Rhiannon V.",
    role: "TripAdvisor Review",
  },
  {
    text:
      "Everything we tried was delicious. The service was prompt and enthusiastic, and the music was very festive. We recommend you give them a try – you’ll enjoy!",
    name: "Matt H.",
    role: "TripAdvisor Review",
  },
  {
    text:
      "The service is fast, the food is really good, and it’s budget friendly. Always recommend.",
    name: "Tara T.",
    role: "TripAdvisor Review",
  },
];

export default function OurStoryPage() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${BASE}images/storefront2.jpg), url(${BASE}images/wood-dark.jpg)`,
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative">
        {/* Story */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-red-600">
            Our Story
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Plaza Mexico Bar & Grill opened its doors in Morehead City in 2011,
            founded by a family from Jalisco, Mexico with decades of experience in
            Mexican cuisine. From day one, our mission has been to deliver an
            experience that feels like a home-cooked fiesta, where every guest is
            treated like family.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Over the years, Plaza Mexico has earned a loyal following, becoming a
            top dining destination on the Crystal Coast. We’ve been voted the best
            Mexican restaurant in Morehead City and continue to serve authentic
            recipes passed down through generations.
          </p>
        </section>

        {/* Values */}
        <section className="bg-zinc-900/70 border-t border-white/10 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-12 text-center text-red-600">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-b from-red-600/20 to-transparent border border-red-600/40 text-center">
                <Users className="mx-auto w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-red-500">
                  Family-Friendly
                </h3>
                <p className="mt-2 text-gray-200 text-sm leading-relaxed">
                  A welcoming environment where everyone feels at home. Children
                  and families are always part of our story.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-b from-green-600/20 to-transparent border border-green-600/40 text-center">
                <Utensils className="mx-auto w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-green-500">
                  Authentic Cuisine
                </h3>
                <p className="mt-2 text-gray-200 text-sm leading-relaxed">
                  Recipes handed down through our family, prepared with fresh
                  ingredients and traditional techniques.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-b from-yellow-500/20 to-transparent border border-yellow-500/40 text-center">
                <HeartHandshake className="mx-auto w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-yellow-400">
                  Community Reputation
                </h3>
                <p className="mt-2 text-gray-200 text-sm leading-relaxed">
                  We’re proud to have earned the trust of locals and visitors
                  alike, becoming a beloved part of the Crystal Coast dining
                  scene.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-12 text-center text-red-600">
              What Our Customers Say
            </h2>
            <div className="flex justify-center">
              <TestimonialsColumn
                testimonials={testimonials}
                duration={20}
                className="h-[500px] overflow-hidden"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
