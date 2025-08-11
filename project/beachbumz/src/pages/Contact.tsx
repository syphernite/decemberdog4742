import React, { useState, useEffect, useMemo } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // --- Map: ensure centered pin on exact address; tighter zoom on desktop ---
  const ADDRESS = '105 S 6th St, Morehead City, NC 28557';
  const [isDesktop, setIsDesktop] = useState<boolean>(typeof window !== 'undefined' ? window.innerWidth >= 1024 : false);
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const mapSrc = useMemo(() => {
    const q = encodeURIComponent(ADDRESS);
    const zoom = isDesktop ? 18 : 16; // desktop closer
    return `https://www.google.com/maps?q=${q}&z=${zoom}&output=embed`;
  }, [isDesktop]);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-ocean-blue to-slate-900">
        <div className="water-ripple"></div>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6 neon-glow">Get in Touch</h1>
          <p className="text-lg text-sandy-beige mb-8 animate-on-scroll">
            We'd love to hear from you! Come visit us in beautiful Morehead City
          </p>
          <a
            href="tel:252-726-7800"
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>Call Now: (252) 726-7800</span>
          </a>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-sandy-beige sand-texture">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="animate-on-scroll">
              <h2 className="font-display text-4xl text-ocean-blue mb-8">
                Visit Beach Bumz
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white/80 backdrop-blur-md rounded-lg p-6 shadow-lg hover-lift beach-card tilt-on-hover">
                  <MapPin className="h-6 w-6 text-turquoise mt-1 flex-shrink-0 bounce-subtle" />
                  <div>
                    <h3 className="font-semibold text-ocean-blue mb-2">Address</h3>
                    <p className="text-gray-700">105 South 6th Street</p>
                    <p className="text-gray-700">Morehead City, NC 28577</p>
                    <a
                      href="https://www.google.com/maps/place/105+S+6th+St,+Morehead+City,+NC+28557"
                      target="_blank"
                      rel="noreferrer"
                      className="text-turquoise underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/80 backdrop-blur-md rounded-lg p-6 shadow-lg hover-lift beach-card tilt-on-hover">
                  <Phone className="h-6 w-6 text-turquoise mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ocean-blue mb-2">Phone</h3>
                    <a
                      href="tel:252-726-7800"
                      className="text-gray-700 hover:text-sunset-orange transition-colors duration-300 text-lg font-medium"
                    >
                      (252) 726-7800
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/80 backdrop-blur-md rounded-lg p-6 shadow-lg hover-lift beach-card tilt-on-hover">
                  <Mail className="h-6 w-6 text-coral-pink mt-1 flex-shrink-0 palm-sway" />
                  <div>
                    <h3 className="font-semibold text-ocean-blue mb-2">Email</h3>
                    <a
                      href="mailto:beachbumzofmcinc@gmail.com"
                      className="text-gray-700 hover:text-coral-pink transition-colors duration-300"
                    >
                      beachbumzofmcinc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/80 backdrop-blur-md rounded-lg p-6 shadow-lg hover-lift beach-card tilt-on-hover">
                  <Clock className="h-6 w-6 text-turquoise mt-1 flex-shrink-0 starfish-spin" />
                  <div>
                    <h3 className="font-semibold text-ocean-blue mb-2">Hours</h3>
                    <div className="space-y-1 text-gray-700">
                      <p><span className="font-medium">Monday - Thursday:</span> 11:00 AM - 9:00 PM</p>
                      <p><span className="font-medium">Friday - Saturday:</span> 11:00 AM - 10:00 PM</p>
                      <p><span className="font-medium">Sunday:</span> 11:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/80 backdrop-blur-md rounded-lg p-6 shadow-lg hover-lift beach-card tilt-on-hover">
                  <Instagram className="h-6 w-6 text-coral-pink mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ocean-blue mb-2">Instagram</h3>
                    <a href="https://www.instagram.com/beachbumzmc" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-coral-pink transition-colors duration-300">@beachbumz</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/80 backdrop-blur-md rounded-lg p-6 shadow-lg hover-lift beach-card tilt-on-hover">
                  <Facebook className="h-6 w-6 text-coral-pink mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ocean-blue mb-2">Facebook</h3>
                    <a href="https://www.facebook.com/p/Beach-Bumz-Pub-Pizzaria-100063510343151/" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-coral-pink transition-colors duration-300">Facebook</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/90 rounded-lg p-8 shadow-xl animate-on-scroll">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 bounce-subtle" />
                  <h4 className="font-semibold text-ocean-blue text-xl mb-2">Thank You!</h4>
                  <p className="text-gray-600">Your message has been sent. We'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-turquoise focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-turquoise focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-turquoise focus:outline-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="relative scroll-mt-24 md:scroll-mt-28">
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Beach Bumz Pub & Pizzeria Location"
            className="filter hue-rotate-15 saturate-150"
          ></iframe>

          {/* Map Overlay */}
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl beach-card pulse-glow">
            <h4 className="font-semibold text-ocean-blue mb-2 flex items-center">
              <MapPin className="h-5 w-5 text-turquoise mr-2 bounce-subtle" />
              Beach Bumz Pub & Pizzeria
            </h4>
            <p className="text-gray-700 text-sm">105 South 6th Street</p>
            <p className="text-gray-700 text-sm">Morehead City, NC 28577</p>
          </div>

          {/* Moved "Open in Google Maps" to the opposite corner so it never sits behind the overlay */}
          <a
            href="https://www.google.com/maps/place/Beach+Bumz+Pub+%26+Pizzaria/@34.720578,-76.7094583,17z/data=!4m15!1m8!3m7!1s0x89a89114b8a75b9d:0xe614351fac2e2f60!2s105+S+6th+St,+Morehead+City,+NC+28557!3b1!8m2!3d34.720578!4d-76.7094583!16s%2Fg%2F11c14l29fg!3m5!1s0x89a89114c3f408e1:0xa9f8802177627012!8m2!3d34.7206039!4d-76.7096405!16s%2Fg%2F1trch8ny?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="absolute top-6 right-6 bg-white/95 text-ocean-blue rounded-md px-3 py-2 shadow-md hover:bg-white transition"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;