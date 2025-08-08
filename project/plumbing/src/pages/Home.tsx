import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Zap, Wrench, Droplet, Shield, Clock, DollarSign, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "FlowRight saved the day! Emergency water heater repair on a Sunday morning. Professional, fast, and reasonably priced.",
      service: "Water Heater Repair"
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Excellent drain cleaning service. Arrived on time, explained everything, and left the area cleaner than they found it.",
      service: "Drain Cleaning"
    },
    {
      name: "Lisa Rodriguez",
      rating: 5,
      text: "Outstanding leak detection work. Found a hidden pipe issue that could have caused major damage. Highly recommend!",
      service: "Leak Detection"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal opacity-0">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Local Plumbing Experts
                <span className="text-blue-600 block">24/7 Service</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 mb-8">
                Professional, reliable plumbing solutions for your home and business. 
                Licensed, insured, and trusted by thousands of satisfied customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+1-555-FLOWPRO"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now: (555) FLOW-PRO</span>
                </a>
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Request Service</span>
                </Link>
              </div>
            </div>
            <div className="scroll-reveal opacity-0 hidden lg:block">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8486977/pexels-photo-8486977.jpeg"
                  alt="Professional plumber at work"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <p className="font-bold text-2xl">24/7</p>
                  <p className="text-sm">Emergency Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Emergency Plumbing", desc: "24/7 emergency response for urgent plumbing issues" },
              { icon: Wrench, title: "Drain Cleaning", desc: "Professional drain and sewer cleaning services" },
              { icon: Droplet, title: "Water Heater Services", desc: "Installation, repair, and maintenance services" }
            ].map((service, index) => (
              <div
                key={index}
                className="scroll-reveal opacity-0 text-center p-8 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FlowRight Plumbing?
            </h2>
            <p className="text-xl text-gray-600">
              Your peace of mind is our priority
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed with comprehensive insurance coverage" },
              { icon: Clock, title: "Same-Day Service", desc: "Most repairs completed the same day you call" },
              { icon: DollarSign, title: "Upfront Pricing", desc: "No hidden fees - you know the cost before we start" }
            ].map((trust, index) => (
              <div
                key={index}
                className="scroll-reveal opacity-0 bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <trust.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{trust.title}</h3>
                <p className="text-gray-600">{trust.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from real customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="scroll-reveal opacity-0 bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-blue-600">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-reveal opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get your free quote today - no obligation, just honest pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-555-FLOWPRO"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                <span>Call for Emergency Service</span>
              </a>
              <Link
                to="/contact"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Request Free Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;