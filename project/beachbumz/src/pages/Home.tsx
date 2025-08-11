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
      {/* sky layer: sun, clouds, birds */}
      <div className="sky-bird">🕊️</div>
      <div className="sky-bird delay-1">🕊️</div>

      {/* ===== Hero Section ===== */}
      <section ref={heroRef} className="relative overflow-hidden pt-safe min-h-[88vh] md:min-h-screen flex items-center justify-center">
        {/* BACKDROP: sky → horizon → sea surface */}
        <div className="absolute inset-0 scene">
          {/* sun + rays */}
          <div className="sun-flare" />
          <div className="god-rays" />
          {/* moving clouds + cyclone wisp */}
          <div className="clouds">
            <div className="cloud c1" /><div className="cloud c2" /><div className="cloud c3" />
            <div className="cyclone" />
          </div>
          {/* sea surface shimmer */}
          <div className="caustics" />
          <div className="water-ripple" />
          <div className="surface-waves">
            <div className="crest a" /><div className="crest b" /><div className="crest c" />
          </div>

          {/* BUBBLES */}
          <div className="floating-bubbles">
            {Array.from({ length: 18 }).map((_, i) => (<div key={i} className="bubble" />))}
          </div>

          {/* BEACH SAND DUNE PARALLAX */}
          <div className="dunes back" /><div className="dunes mid" /><div className="dunes front" />

          {/* UNDERWATER SCENE OVERLAY (lower half) */}
          <div className="underwater">
            {/* sea plants */}
            <div className="reef">
              <div className="kelp k1" /><div className="kelp k2" /><div className="kelp k3" />
              <div className="starfish" /><div className="shell" />
            </div>
            {/* fish shoals */}
            <div className="shoal s1">
              {Array.from({ length: 8 }).map((_, i) => (<span key={i} className="fish f" />))}
            </div>
            <div className="shoal s2">
              {Array.from({ length: 10 }).map((_, i) => (<span key={i} className="fish f small" />))}
            </div>
            {/* jellyfish + manta */}
            <div className="jelly j1" /><div className="jelly j2" />
            <div className="manta" />
          </div>

          {/* shoreline foam at bottom */}
          <div className="shoreline">
            <div className="foam f1" /><div className="foam f2" /><div className="foam f3" />
          </div>
        </div>

        {/* CONTENT (unchanged text/structure) */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <h1 className="font-display leading-tight text-white mb-4 neon-glow zoom-in text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
            BEACH BUMZ
          </h1>
          <p className="font-display text-turquoise mb-3 slide-in-left text-xl sm:text-2xl md:text-3xl" style={{ animationDelay: "0.2s" }}>
            PUB & PIZZERIA
          </p>
          <p className="text-sandy-beige mb-8 font-light slide-in-right text-base sm:text-lg md:text-2xl" style={{ animationDelay: "0.4s" }}>
            Where Comfort Meets the Coast
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Link to="/menu" className="btn-primary w-full sm:w-auto">View Menu</Link>
            <button onClick={handleOrderClick} className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2">
              <span>Order on DoorDash</span><ExternalLink className="h-4 w-4" />
            </button>
            <Link to="/contact" className="btn-outline w-full sm:w-auto">Find Us</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center fade-in-up" style={{ animationDelay: "0.8s" }}>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-5 sm:p-6 hover-lift beach-card tilt-on-hover">
              <Award className="h-7 w-7 sm:h-8 sm:w-8 text-sunset-orange mx-auto mb-3 coconut-bounce" />
              <h3 className="font-semibold text-white mb-1.5 sm:mb-2">Diverse Drink Menu</h3>
              <p className="text-sandy-beige text-sm">Craft cocktails & premium spirits</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-5 sm:p-6 hover-lift beach-card tilt-on-hover" style={{ animationDelay: "0.2s" }}>
              <Star className="h-7 w-7 sm:h-8 sm:w-8 text-turquoise mx-auto mb-3 starfish-spin" />
              <h3 className="font-semibold text-white mb-1.5 sm:mb-2">Fan Favorites</h3>
              <p className="text-sandy-beige text-sm">Pizza, wings, subs & more</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-5 sm:p-6 hover-lift beach-card tilt-on-hover" style={{ animationDelay: "0.4s" }}>
              <Users className="h-7 w-7 sm:h-8 sm:w-8 text-coral-pink mx-auto mb-3 bounce-subtle" />
              <h3 className="font-semibold text-white mb-1.5 sm:mb-2">Beach Community Hub</h3>
              <p className="text-sandy-beige text-sm">Where locals & visitors unite</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Wave Divider (kept) ===== */}
      <div className="wave-divider">
        <div className="wave wave-back"></div>
        <div className="wave wave-mid"></div>
        <div className="wave wave-front"></div>
      </div>

      {/* ===== Welcome Section (unchanged content) ===== */}
      <section className="py-20 beach-gradient">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-on-scroll slide-in-left">
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Welcome to Paradise</h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Step into Beach Bumz Pub & Pizzeria, where every meal feels like a coastal escape. 
                Located in the heart of Morehead City, we serve fresh pizzas, crispy wings, hearty subs, 
                and ice-cold drinks that capture the spirit of beach living.
              </p>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                With a full bar, enjoy craft cocktails and premium spirits alongside your favorites.
                Locals and visitors welcome.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-turquoise bounce-subtle" />
                  <span className="font-semibold text-white">Morehead City, NC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-sunset-orange palm-sway" />
                  <span className="font-semibold text-white">Open Daily</span>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll slide-in-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Beach Bumz interior"
                  className="rounded-lg shadow-2xl w-full h-72 sm:h-80 object-cover hover-lift tilt-on-hover wave-animation"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-blue/30 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Instagram (unchanged content) ===== */}
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 animate-on-scroll fade-in-up">
            {instagramPosts.map((post) => (
              <div key={post.id} className="group relative overflow-hidden rounded-lg hover-lift cursor-pointer beach-card tilt-on-hover">
                <img src={post.image} alt={post.caption} className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-sm font-medium">{post.caption}</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="h-5 w-5 text-white bounce-subtle" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA (unchanged content; color via .cta-bg) ===== */}
      <section className="py-20 cta-bg">
        <div className="max-w-4xl mx-auto text-center px-4 animate-on-scroll zoom-in">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Ready to Dive In?</h2>
          <p className="text-xl text-white/90 mb-8">Experience the best coastal dining Morehead City has to offer</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
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
