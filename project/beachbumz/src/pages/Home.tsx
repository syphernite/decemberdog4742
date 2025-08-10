import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Star, MapPin, Instagram, Clock, Award, Users } from 'lucide-react';

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    heroRef.current?.classList.add('fade-in-up');
  }, []);

  const stats = [
    { label: 'Happy Guests', value: '25k+', icon: <Users className="h-5 w-5" /> },
    { label: 'Years Serving', value: '12+', icon: <Clock className="h-5 w-5" /> },
    { label: 'Top Reviews', value: '4.8★', icon: <Star className="h-5 w-5" /> },
    { label: 'Awards', value: '8', icon: <Award className="h-5 w-5" /> },
  ];

  const gallery = [
    { id: 1, image: 'https://images.pexels.com/photos/1580466/pexels-photo-1580466.jpeg?auto=compress&cs=tinysrgb&w=400', caption: 'Fresh pies daily 🍕' },
    { id: 2, image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=400', caption: 'Wings that hit different 🔥' },
    { id: 3, image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400', caption: 'Beachside vibes daily ✨' },
    { id: 4, image: 'https://images.pexels.com/photos/5490915/pexels-photo-5490915.jpeg?auto=compress&cs=tinysrgb&w=400', caption: 'Cold drinks, hot food 🍻' },
  ];

  const badges = [
    { text: 'Google 4.8★', href: 'https://google.com' },
    { text: 'Yelp Recommended', href: 'https://yelp.com' },
    { text: 'Liquor License: Yes', href: '#' },
    { text: 'Family Friendly', href: '#' },
    { text: 'Locals’ Favorite', href: '#' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero — use 100svh to avoid mobile URL bar jumps */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: '100svh', paddingTop: 'env(safe-area-inset-top)' }}
      >
        <video
          className="hero-video absolute inset-0 w-full h-full object-cover opacity-[.35] pointer-events-none"
          src="./assets/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-blue via-teal-800 to-slate-900"></div>

        {/* Ambient */}
        <div className="water-ripple"></div>
        <div className="floating-bubbles">
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 md:mb-6 neon-glow leading-tight zoom-in">
            BEACH BUMZ
          </h1>
          <p className="font-display text-xl sm:text-2xl md:text-3xl text-turquoise mb-3 md:mb-4 slide-in-left" style={{ animationDelay: '0.25s' }}>
            PUB & PIZZERIA
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-sandy-beige mb-6 md:mb-8 font-light slide-in-right" style={{ animationDelay: '0.45s' }}>
            Where Comfort Meets the Coast
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 md:mb-12 fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Link to="/menu" className="btn btn-primary icon-slide">View Menu</Link>
            <a
              href="https://www.doordash.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-accent btn-pulse icon-slide inline-flex items-center gap-2"
            >
              Order on DoorDash <ExternalLink className="h-4 w-4 icon-slide-target" />
            </a>
            <a href="https://maps.google.com/?q=Beach+Bumz+Pub+%26+Pizzeria" className="btn btn-outline icon-slide">
              Find Us
            </a>
          </div>
        </div>

        {/* Single parallax wave (disabled on touch in CSS) */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 wave-divider parallax-bob">
          <div className="wave wave-front"></div>
        </div>
      </section>

      {/* Social proof marquee */}
      <section className="bg-ocean-blue/70 backdrop-blur-sm py-3 sm:py-4">
        <div className="marquee">
          <div className="marquee-track">
            {badges.concat(badges).map((b, i) => (
              <a key={i} href={b.href} className="badge-pill" target="_blank" rel="noreferrer">
                {b.text}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-14 sm:py-20 bg-sandy-beige sand-texture sand-sparkle">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="section-title">Comfort Food, Coastal Vibes</h2>
              <p className="section-lead">
                Bold flavors, crispy wings, stacked subs, and fresh pizzas — served with a side of ocean breeze.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className="stat-pill" style={{ animationDelay: `${i * 80}ms` }}>
                    <span className="stat-icon">{s.icon}</span>
                    <div>
                      <div className="stat-value">{s.value}</div>
                      <div className="stat-label">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery (1-col on very small, 2-col on sm+) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 slide-in-right">
              {gallery.map((g) => (
                <figure key={g.id} className="gallery-card">
                  <img src={g.image} alt={g.caption} className="gallery-img" />
                  <figcaption>{g.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <section className="bg-ocean-blue text-white py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          <div className="info-card">
            <MapPin className="h-5 w-5 text-turquoise" />
            <span>5167 US-70, Morehead City, NC</span>
          </div>
          <div className="info-card">
            <Clock className="h-5 w-5 text-turquoise" />
            <span>Open Daily — 11am to Close</span>
          </div>
          <a href="https://instagram.com" className="info-card group">
            <Instagram className="h-5 w-5 text-turquoise group-hover:text-sunset-orange transition-colors" />
            <span>@beachbumzpub</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
