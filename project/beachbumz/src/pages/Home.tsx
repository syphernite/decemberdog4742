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

        <div className="water-ripple"></div>
        <div className="floating-bubbles">
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
        </div>

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

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 md:mb-12 fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Link to="/menu" className="btn btn-primary icon-slide">View Menu</Link>
            <a href="https://www.doordash.com/" target="_blank" rel="noreferrer" className="btn btn-accent btn-pulse icon-slide inline-flex items-center gap-2">
              Order on DoorDash <ExternalLink className="h-4 w-4 icon-slide-target" />
            </a>
            <a href="https://maps.google.com/?q=Beach+Bumz+Pub+%26+Pizzeria" className="btn btn-outline icon-slide">
              Find Us
            </a>
          </div>
        </div>

        {/* Animated wave divider */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 wave-divider">
          <svg className="wave-svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(64,224,208,0.55)"/>
                <stop offset="100%" stopColor="rgba(10,29,58,0.0)"/>
              </linearGradient>
            </defs>
            <g className="wave-layer">
              <path d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z" fill="url(#waveGrad)"></path>
            </g>
            <g className="wave-layer wave-layer--back">
              <path d="M0,80 C200,140 400,20 600,80 C800,140 1000,20 1200,80 L1200,120 L0,120 Z" fill="url(#waveGrad)"></path>
            </g>
          </svg>
        </div>
      </section>

      {/* ...rest of your sections stay the same... */}
    </div>
  );
};

export default Home;
