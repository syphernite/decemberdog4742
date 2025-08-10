import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Star, MapPin, Instagram, Clock, Award, Users } from "lucide-react";

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("fade-in-up")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleOrderClick = () => window.open("https://www.doordash.com", "_blank");

  const instagramPosts = [
    { id: 1, image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400", caption: "Fresh pizza perfection! 🍕" },
    { id: 2, image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=400", caption: "Wings that hit different 🔥" },
    { id: 3, image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400", caption: "Beachside vibes daily ✨" },
    { id: 4, image: "https://images.pexels.com/photos/5490915/pexels-photo-5490915.jpeg?auto=compress&cs=tinysrgb&w=400", caption: "Cold drinks, hot food 🍻" },
  ];

  return (
    <div className="min-h-screen">
      {/* one bird across the top */}
      <div className="sky-bird">🕊️</div>

      {/* Hero */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-blue via-black/50 to-black">
          <div className="water-ripple"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-turquoise/14 to-sunset-orange/14"></div>

          {/* Floating bubbles (CSS-driven, cheap) */}
          <div className="floating-bubbles">
            <div className="bubble"></div><div className="bubble"></div><div className="bubble"></div>
            <div className="bubble"></div><div className="bubble"></div><div className="bubble"></div>
            <div className="bubble"></div><div className="bubble"></div><div className="bubble"></div>
            <div className="bubble"></div><div className="bubble"></div><div className="bubble"></div>
          </div>

          {/* Sand particles */}
          <div className="beach-particles">
            <div className="particle"></div><div className="particle"></div><div className="particle"></div>
            <div className="particle"></div><div className="particle"></div><div className="particle"></div>
            <div className="particle"></div>
          </div>

          {/* Soft flares */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-sunset-orange/30 rounded-full blur-3xl pulse-glow"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-turquoise/20 rounded-full blur-2xl pulse-glow" style={{ animationDelay: "1s" }}></div>

          {/* Waves */}
          <div className="ocean-wave"></div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 neon-glow leading-tight zoom-in">BEACH BUMZ</h1>
          <p className="font-display text-2xl md:text-3xl text-turquoise mb-4 slide-in-left" style={{ animationDelay: "0.3s" }}>PUB & PIZZERIA</p>
          <p className="text-xl md:text-2xl text-sandy-beige mb-8 font-light slide-in-right" style={{ animationDelay: "0.6s" }}>
            Where Comfort Meets the Coast
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-up" style={{ animationDelay: "0.9s" }}>
            <Link to="/menu" className="btn-primary w-full sm:w-auto">View Menu</Link>
            <button onClick={handleOrderClick} className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
              <span>Order on DoorDash</span><ExternalLink className="h-4 w-4" />
            </button>
            <Link to="/contact" className="btn-outline w-full sm:w-auto">Find Us</Link>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center fade-in-up" style={{ animationDelay: "1.2s" }}>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover-lift beach-card tilt-on-hover">
              <Award className="h-8 w-8 text-sunset-orange mx-auto mb-3 coconut-bounce" />
              <h3 className="font-semibold text-white mb-2">Diverse Drink Menu</h3>
              <p className="text-sandy-beige text-sm">Craft cocktails & premium spirits</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover-lift beach-card tilt-on-hover" style={{ animationDelay: "0.2s" }}>
              <Star className="h-8 w-8 text-turquoise mx-auto mb-3 starfish-spin" />
              <h3 className="font-semibold text-white mb-2">Fan Favorites</h3>
              <p className="text-sandy-beige text-sm">Pizza, wings, subs & more</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover-lift beach-card tilt-on-hover" style={{ animationDelay: "0.4s" }}>
              <Users className="h-8 w-8 text-coral-pink mx-auto mb-3 bounce-subtle" />
              <h3 className="font-semibold text-white mb-2">Beach Community Hub</h3>
              <p className="text-sandy-beige text-sm">Where locals & visitors unite</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider">
        <div className="wave wave-back"></div>
        <div className="wave wave-mid"></div>
        <div className="wave wave-front"></div>
      </div>

      {/* Welcome */}
      <section className="py-20 bg-sandy-beige sand-texture sand-sparkle">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-in-left">
              <h2 className="font-display text-4xl md:text-5xl text-ocean-blue mb-6">Welcome to Paradise</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Step into Beach Bumz Pub & Pizzeria, where every meal feels like a coastal escape. Located in the heart of Morehead City,
                we're serving up fresh pizzas, crispy wings, hearty subs, and ice-cold drinks that capture the spirit of beach living.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Now with our liquor license, we're bringing you craft cocktails and premium spirits to complement our comfort food favorites.
                Whether you're a local or just visiting, Beach Bumz is your home away from home.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-sunset-orange bounce-subtle" />
                  <span className="font-semibold text-ocean-blue">Morehead City, NC</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-turquoise palm-sway" />
                  <span className="font-semibold text-ocean-blue">Open Daily</span>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll slide-in-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Beach Bumz interior"
                  className="rounded-lg shadow-2xl w-full h-80 object-cover hover-lift tilt-on-hover wave-animation"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-blue/30 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-20 bg-ocean-blue">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll zoom-in">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              Live the <span className="text-gradient">Beach Bumz</span> Life
            </h2>
            <p className="text-sandy-beige text-lg mb-8">Follow us on Instagram for daily vibes & specials</p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-turquoise hover:text-sunset-orange transition-colors duration-300 bounce-subtle"
            >
              <Instagram className="h-6 w-6" />
              <span className="font-semibold">@beachbumzpub</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-on-scroll fade-in-up">
            {instagramPosts.map((post) => (
              <div key={post.id} className="group relative overflow-hidden rounded-lg hover-lift cursor-pointer beach-card tilt-on-hover">
                <img src={post.image} alt={post.caption} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">{post.caption}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="h-5 w-5 text-white bounce-subtle" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with logo gradient */}
      <section className="py-20 cta-bg">
        <div className="max-w-4xl mx-auto text-center px-4 animate-on-scroll zoom-in">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Ready to Dive In?</h2>
          <p className="text-xl text-white/90 mb-8">Experience the best coastal dining Morehead City has to offer</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/menu"
              className="bg-white text-ocean-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-none transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:rotate-1 w-full sm:w-auto"
            >
              Explore Our Menu
            </Link>
            <button
              onClick={handleOrderClick}
              className="border-2 border-white text-white hover:bg-white hover:text-ocean-blue font-semibold py-4 px-8 rounded-none transition-all duration-300 transform hover:scale-105 hover:-rotate-1 w-full sm:w-auto"
            >
              Order Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
