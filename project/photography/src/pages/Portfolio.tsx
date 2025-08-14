// src/pages/Portfolio.tsx
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
// @ts-ignore – adjust the path to where you saved the provided component
import CircularGallery from "../components/CircularGallery";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Portraits" | "Events" | "Product" | "Lifestyle">("All");

  const categories = ["All", "Portraits", "Events", "Product", "Lifestyle"] as const;

  const portfolioImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Portraits",
      title: "Professional Portrait",
      description: "Executive headshot session",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Events",
      title: "Wedding Ceremony",
      description: "Intimate garden wedding",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Lifestyle",
      title: "Family Moments",
      description: "Natural family photography",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Events",
      title: "Corporate Event",
      description: "Annual company celebration",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Product",
      title: "Product Showcase",
      description: "Commercial product photography",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Portraits",
      title: "Creative Portrait",
      description: "Artistic portrait session",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Lifestyle",
      title: "Urban Lifestyle",
      description: "City lifestyle photography",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Product",
      title: "Fashion Product",
      description: "High-end fashion photography",
    },
  ] as const;

  const filtered = useMemo(
    () =>
      selectedCategory === "All"
        ? [...portfolioImages]
        : portfolioImages.filter((img) => img.category === selectedCategory),
    [selectedCategory]
  );

  // Map to CircularGallery items format
  const galleryItems = useMemo(
    () =>
      filtered.map((img) => ({
        image: img.src,
        text: img.title,
      })),
    [filtered]
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Portfolio</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore my collection of work across different photography styles and occasions. Each image tells a
              unique story and captures a special moment in time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-amber-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Curved OGL Carousel */}
      <section className="px-0">
        <div className="w-full bg-[#0b0710]">
          <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
            <h2 className="sr-only">Gallery</h2>
            {/* Height controls the visible area of the canvas */}
            <div className="w-full h-[65vh] md:h-[75vh] rounded-2xl overflow-hidden">
              <CircularGallery
                items={galleryItems}
                bend={3}
                textColor="#ffffff"
                borderRadius={0.06}
                font="bold 30px Figtree"
                scrollSpeed={2.5}
                scrollEase={0.08}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
