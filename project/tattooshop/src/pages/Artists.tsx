import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { staggerChildren, fadeUp, hoverTension } from '../utils/animations';

interface Artist {
  id: number;
  name: string;
  image: string;
  bio: string;
  styles: string[];
  hourlyRate: string;
  rating: number;
  portfolioImages: string[];
  experience: string;
  specialty: string;
}

const Artists: React.FC = () => {
  const [ref, isInView] = useInView(0.1);
  
  const artists: Artist[] = [
    {
      id: 1,
      name: "Marcus Chen",
      image: "https://images.pexels.com/photos/3586091/pexels-photo-3586091.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Specializing in traditional Japanese and American traditional work with over 8 years of experience. Known for bold lines and vibrant colors.",
      styles: ["Traditional", "Neo-traditional", "Japanese"],
      hourlyRate: "$150-200",
      rating: 4.9,
      portfolioImages: [
        "https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=300"
      ],
      experience: "8+ years",
      specialty: "Traditional & Japanese"
    },
    {
      id: 2,
      name: "Sofia Rivera",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Master of color realism and portrait work. Every piece is a photorealistic masterpiece that captures emotion and detail perfectly.",
      styles: ["Color Realism", "Portrait", "Fine Line"],
      hourlyRate: "$180-250",
      rating: 5.0,
      portfolioImages: [
        "https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=300"
      ],
      experience: "10+ years",
      specialty: "Color Realism & Portraits"
    },
    {
      id: 3,
      name: "Jake Morrison",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Geometric and blackwork specialist with a modern edge. Creates stunning contrast and patterns that flow with the body's natural lines.",
      styles: ["Blackwork", "Geometric", "Minimalist"],
      hourlyRate: "$140-180",
      rating: 4.8,
      portfolioImages: [
        "https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=300"
      ],
      experience: "6+ years",
      specialty: "Blackwork & Geometric"
    }
  ];

  return (
    <div className="min-h-screen bg-ink-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-ink-800 film-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-bone-100 mb-6"
          >
            Meet Our <span className="text-blood-600">Artists</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-xl text-stone-400 max-w-3xl mx-auto"
          >
            Each artist brings their unique vision and expertise to create tattoos that tell your story. 
            Licensed professionals with years of experience and passion for their craft.
          </motion.p>
        </div>
      </section>

      {/* Artists Grid */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {artists.map((artist) => (
              <motion.div
                key={artist.id}
                variants={fadeUp}
                whileHover="hover"
                initial="rest"
                className="group"
              >
                <motion.div
                  variants={hoverTension}
                  className="bg-stone-800/50 rounded-large overflow-hidden border border-stone-700 backdrop-blur-sm transition-all duration-300"
                >
                  {/* Artist Photo */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent" />
                  </div>

                  <div className="p-6">
                    {/* Artist Info */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display font-bold text-xl text-bone-100">
                        {artist.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-blood-600 fill-current" />
                        <span className="text-sm text-stone-400">{artist.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-4 text-sm text-stone-400">
                      <span>{artist.experience}</span>
                      <span>•</span>
                      <span>{artist.hourlyRate}/hr</span>
                    </div>

                    {/* Specialty */}
                    <p className="text-blood-600 font-medium text-sm mb-3">
                      {artist.specialty}
                    </p>

                    {/* Bio */}
                    <p className="text-stone-400 text-sm mb-4 line-clamp-3">
                      {artist.bio}
                    </p>

                    {/* Styles */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {artist.styles.map((style) => (
                        <span
                          key={style}
                          className="px-2 py-1 bg-stone-700 text-bone-100 text-xs rounded-small"
                        >
                          {style}
                        </span>
                      ))}
                    </div>

                    {/* Portfolio Preview */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {artist.portfolioImages.slice(0, 3).map((image, index) => (
                        <div
                          key={index}
                          className="aspect-square rounded-small overflow-hidden"
                        >
                          <img
                            src={image}
                            alt={`${artist.name}'s work ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-3">
                      <Link
                        to={`/booking?artist=${encodeURIComponent(artist.name)}`}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blood-600 text-bone-100 rounded-small font-medium hover:bg-blood-700 transition-colors group"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Now
                      </Link>
                      <Link
                        to={`/portfolio?artist=${encodeURIComponent(artist.name)}`}
                        className="px-4 py-2 border border-stone-500 text-stone-400 rounded-small font-medium hover:border-bone-100 hover:text-bone-100 transition-colors"
                      >
                        Portfolio
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Artists;