import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Wrench, Droplet, Search, Thermometer, Hammer, Pipette as Pipe, Phone, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

const Services = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

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

  const services = [
    {
      icon: Zap,
      title: "Emergency Plumbing",
      description: "24/7 emergency response for burst pipes, major leaks, and urgent plumbing issues that can't wait.",
      features: ["Available 24/7", "Rapid response time", "Professional equipment", "Licensed technicians"]
    },
    {
      icon: Wrench,
      title: "Drain Cleaning",
      description: "Professional drain and sewer cleaning services to restore proper flow and prevent backups.",
      features: ["Hydro jetting", "Snake services", "Camera inspection", "Preventive maintenance"]
    },
    {
      icon: Search,
      title: "Leak Detection",
      description: "Advanced leak detection technology to find hidden leaks before they cause major damage.",
      features: ["Electronic detection", "Thermal imaging", "Minimal disruption", "Accurate location"]
    },
    {
      icon: Thermometer,
      title: "Water Heater Services",
      description: "Complete water heater installation, repair, and maintenance for all types and brands.",
      features: ["Tank & tankless", "Energy efficient models", "Same-day service", "Warranty included"]
    },
    {
      icon: Hammer,
      title: "Fixture Installation",
      description: "Professional installation of faucets, toilets, showers, and other plumbing fixtures.",
      features: ["Quality fixtures", "Proper installation", "Clean workspace", "Functionality testing"]
    },
    {
      icon: Pipe,
      title: "Pipe Replacement",
      description: "Complete pipe replacement and repiping services using modern, durable materials.",
      features: ["Modern materials", "Minimal excavation", "Code compliance", "Long-term warranty"]
    }
  ];

  const faqs = [
    {
      question: "Do you offer emergency plumbing services?",
      answer: "Yes, we provide 24/7 emergency plumbing services for urgent issues like burst pipes, major leaks, and sewer backups. Our emergency response team is available nights, weekends, and holidays."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. FlowRight Plumbing is fully licensed (License #PL-12345) and carries comprehensive liability insurance and workers' compensation coverage for your protection and peace of mind."
    },
    {
      question: "Do you provide upfront pricing?",
      answer: "Yes, we believe in transparent pricing. We'll assess your plumbing issue and provide a clear, upfront estimate before any work begins. No hidden fees or surprises on your bill."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve the greater metropolitan area including Downtown, Riverside, Oakwood, Pine Valley, Sunset Hills, Maple Grove, and surrounding communities. Contact us to confirm service in your area."
    },
    {
      question: "Do you warranty your work?",
      answer: "Yes, we stand behind our work with comprehensive warranties on both labor and parts. Warranty terms vary by service type, and we'll explain all warranty coverage before starting your project."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-reveal opacity-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Plumbing Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to complete installations, we provide comprehensive 
              plumbing solutions for your home and business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="scroll-reveal opacity-0 bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2 w-full justify-center"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Request Service</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common plumbing service questions
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="scroll-reveal opacity-0 bg-white border border-gray-200 rounded-lg"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-reveal opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Plumbing Service Today?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't let plumbing problems disrupt your day. Call now for fast, professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-555-FLOWPRO"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                <span>Call (555) FLOW-PRO</span>
              </a>
              <Link
                to="/contact"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Schedule Online</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;