import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Award, Users, Clock, CheckCircle, Shield, Wrench } from 'lucide-react';

const About = () => {
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

  const stats = [
    { icon: Award, number: "20+", label: "Years Experience" },
    { icon: Users, number: "98%", label: "On-Time Rate" },
    { icon: Wrench, number: "500+", label: "Jobs Completed Annually" },
    { icon: Clock, number: "24/7", label: "Emergency Service" }
  ];

  const certifications = [
    "Licensed Plumbing Contractor #PL-12345",
    "Better Business Bureau A+ Rating",
    "Master Plumbers Association Member",
    "Fully Bonded & Insured",
    "EPA Certified Technicians",
    "Continuing Education Certified"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal opacity-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About FlowRight Plumbing
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                For over two decades, FlowRight Plumbing has been the trusted choice 
                for homeowners and businesses throughout the metropolitan area. We're 
                not just plumbers – we're your neighbors, committed to providing 
                exceptional service with integrity and professionalism.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+1-555-FLOWPRO"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Us Today</span>
                </a>
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Get Quote</span>
                </Link>
              </div>
            </div>
            <div className="scroll-reveal opacity-0">
              <img
                src="https://images.pexels.com/photos/5691608/pexels-photo-5691608.jpeg"
                alt="Professional plumbing team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal opacity-0 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="text-lg text-gray-600 space-y-6 text-left">
              <p>
                FlowRight Plumbing was founded in 2004 by master plumber John Martinez, 
                who recognized the need for honest, reliable plumbing services in our community. 
                What started as a one-man operation has grown into a team of skilled professionals, 
                but our core values remain unchanged.
              </p>
              <p>
                We believe that plumbing problems shouldn't disrupt your life any longer than 
                necessary. That's why we focus on prompt response times, clear communication, 
                and getting the job done right the first time. Our team takes pride in treating 
                every home and business as if it were our own.
              </p>
              <p>
                From simple drain cleaning to complex pipe replacement projects, we approach 
                every job with the same level of professionalism and attention to detail. 
                Our commitment to quality workmanship and customer satisfaction has earned us 
                thousands of loyal customers and countless referrals throughout the years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              FlowRight by the Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Our track record speaks for itself
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="scroll-reveal opacity-0 text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal opacity-0">
              <img
                src="https://images.pexels.com/photos/5691589/pexels-photo-5691589.jpeg"
                alt="Quality plumbing work"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="scroll-reveal opacity-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Service Philosophy
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At FlowRight Plumbing, we operate on three core principles that guide 
                everything we do: Integrity, Quality, and Customer Satisfaction.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Transparent Communication</h3>
                    <p className="text-gray-600">We explain the problem, solution, and costs in plain English.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Materials</h3>
                    <p className="text-gray-600">We use only high-grade parts and materials for lasting repairs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Respect for Your Home</h3>
                    <p className="text-gray-600">We treat your property with care and clean up after every job.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Guaranteed Satisfaction</h3>
                    <p className="text-gray-600">Your complete satisfaction is our measure of success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Licensed, Certified & Trusted
            </h2>
            <p className="text-xl text-blue-100">
              Your peace of mind is backed by our credentials and guarantees
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="scroll-reveal opacity-0 bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-white/20 transition-all duration-300"
              >
                <Shield className="h-8 w-8 text-white mx-auto mb-3" />
                <p className="text-white font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-reveal opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proudly Serving the Greater Metropolitan Area
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide comprehensive plumbing services throughout the region, 
              with fast response times to all areas we serve.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
              <div>Downtown</div>
              <div>Riverside</div>
              <div>Oakwood</div>
              <div>Pine Valley</div>
              <div>Sunset Hills</div>
              <div>Maple Grove</div>
            </div>
            <p className="text-gray-600 mt-6">
              Don't see your area listed? Give us a call – we may still be able to help!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-reveal opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Experience the FlowRight Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of satisfied customers who trust FlowRight Plumbing 
              for all their plumbing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-555-FLOWPRO"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                <span>Call (555) FLOW-PRO</span>
              </a>
              <Link
                to="/contact"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Request Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;