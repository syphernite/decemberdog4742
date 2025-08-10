import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Star, MapPin, Instagram, Clock, Award, Users } from 'lucide-react';

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-blue via-teal-800 to-slate-900">
          <div className="water-ripple"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-turquoise/20 to-sunset-orange/20"></div>
          
          {/* Floating Bubbles */}
          <div className="floating-bubbles">
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
          </div>

          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-1/5 w-40 h-40 bg-turquoise/25 rounded-full blur-3xl pulse-glow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-sunset-orange/25 rounded-full blur-2xl pulse-glow" style={{ animationDelay: '0.6s' }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 neon-glow leading-tight zoom-in">
            BEACH BUMZ
          </h1>
          <p className="font-display text-2xl md:text-3xl text-turquoise mb-4 slide-in-left" style={{ animationDelay: '0.3s' }}>
            PUB & PIZZERIA
          </p>
          <p className="text-xl md:text-2xl text-sandy-beige mb-8 font-light slide-in-right" style={{ animationDelay: '0.6s' }}>
            Where Comfort Meets the Coast
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-up" style={{ animationDelay: '0.9s' }}>
            <Link to="/menu" className="btn btn-primary">View Menu</Link>
            <a
              href="https://www.doordash.com/" 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-accent inline-flex items-center gap-2"
            >
              Order on DoorDash <ExternalLink className="h-4 w-4" />
            </a>
            <a href="https://www.google.com/maps/place/Beach+Bumz+Pub+%26+Pizzaria/@34.5987081,-77.7381177,9z/data=!4m10!1m2!2m1!1sBeach+Bumz+Pub+%26+Pizzeria!3m6!1s0x89a89114c3f408e1:0xa9f8802177627012!8m2!3d34.7206039!4d-76.7096405!15sChlCZWFjaCBCdW16IFB1YiAmIFBpenplcmlhWhsiGWJlYWNoIGJ1bXogcHViICYgcGl6emVyaWGSARJpdGFsaWFuX3Jlc3RhdXJhbnSqAWEQASodIhliZWFjaCBidW16IHB1YiAmIHBpenplcmlhKAAyHxABIhtQRlrDEC_1CuKkSEw4o1Sq-ob81ebASE70naoyHRACIhliZWFjaCBidW16IHB1YiAmIHBpenplcmlh4AEA!16s%2Fg%2F1trch8ny?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D" className="btn btn-outline">
              Find Us
            </a>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
            <div className="feature-card animate-on-scroll">
              <div className="icon-circle text-sunset-orange">🍹</div>
              <h3>Liquor License Now Available</h3>
              <p>Craft cocktails & premium spirits</p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="icon-circle text-turquoise">⭐</div>
              <h3>Fan Favorites</h3>
              <p>Pizza, wings, subs & more</p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="icon-circle text-sunset-orange">🤝</div>
              <h3>Beach Community Hub</h3>
              <p>Where locals & visitors unite</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider — single layer only */}
      <div className="wave-divider">
        <div className="wave wave-front"></div>
      </div>

      {/* Welcome Section */}
      <section className="py-20 bg-sandy-beige sand-texture sand-sparkle">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-in-left">
              <h2 className="section-title">Comfort Food, Coastal Vibes</h2>
              <p className="section-lead">
                Bold flavors, crispy wings, stacked subs, and fresh pizzas — served with a side of ocean breeze.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className="stat-pill animate-on-scroll" style={{ animationDelay: `${i * 100}ms` }}>
                    <span className="stat-icon">{s.icon}</span>
                    <div>
                      <div className="stat-value">{s.value}</div>
                      <div className="stat-label">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 gap-4 animate-on-scroll slide-in-right">
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
      <section className="bg-ocean-blue text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
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
