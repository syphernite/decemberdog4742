import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Play, Users, Award, Mail, Phone, MapPin } from 'lucide-react';

interface MousePosition {
  x: number;
  y: number;
}

interface Section {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  palette: string;
  content?: React.ReactNode;
}

const sections: Section[] = [
  {
    id: 'hero',
    title: 'Design Beyond Ordinary',
    subtitle: 'Premium Creative Solutions',
    description: 'We craft extraordinary digital experiences that captivate, inspire, and drive results for forward-thinking brands.',
    palette: 'hero'
  },
  {
    id: 'services',
    title: 'Our Services',
    subtitle: 'What We Do Best',
    description: 'From brand identity to digital experiences, we deliver comprehensive creative solutions.',
    palette: 'services'
  },
  {
    id: 'portfolio',
    title: 'Featured Work',
    subtitle: 'Creative Excellence',
    description: 'A showcase of our most innovative and impactful projects across various industries.',
    palette: 'portfolio'
  },
  {
    id: 'testimonials',
    title: 'Client Stories',
    subtitle: 'Trusted by Industry Leaders',
    description: 'Discover why top brands choose us to bring their visions to life.',
    palette: 'testimonials'
  },
  {
    id: 'contact',
    title: 'Start Your Project',
    subtitle: 'Let\'s Create Something Amazing',
    description: 'Ready to transform your brand? Get in touch and let\'s discuss your next big idea.',
    palette: 'contact'
  }
];

function App() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const handleScroll = () => {
      setIsScrolling(true);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);

      let currentSectionId = 'hero';
      
      for (const element of sectionElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSectionId = element.id;
            break;
          }
        }
      }
      
      setCurrentSection(currentSectionId);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getGradientStyle = () => {
    const { x, y } = mousePosition;
    
    const gradients = {
      hero: `
        radial-gradient(circle at ${x}% ${y}%, 
          rgba(99, 102, 241, 0.8) 0%, 
          rgba(168, 85, 247, 0.6) 25%, 
          rgba(236, 72, 153, 0.4) 50%, 
          rgba(59, 130, 246, 0.6) 75%, 
          rgba(139, 92, 246, 0.8) 100%
        )
      `,
      services: `
        radial-gradient(circle at ${x}% ${y}%, 
          rgba(59, 130, 246, 0.8) 0%, 
          rgba(34, 197, 243, 0.6) 25%, 
          rgba(99, 102, 241, 0.4) 50%, 
          rgba(79, 172, 254, 0.6) 75%, 
          rgba(56, 189, 248, 0.8) 100%
        )
      `,
      portfolio: `
        radial-gradient(circle at ${x}% ${y}%, 
          rgba(236, 72, 153, 0.8) 0%, 
          rgba(251, 113, 133, 0.6) 25%, 
          rgba(168, 85, 247, 0.4) 50%, 
          rgba(244, 63, 94, 0.6) 75%, 
          rgba(219, 39, 119, 0.8) 100%
        )
      `,
      testimonials: `
        radial-gradient(circle at ${x}% ${y}%, 
          rgba(245, 158, 11, 0.8) 0%, 
          rgba(251, 191, 36, 0.6) 25%, 
          rgba(249, 115, 22, 0.4) 50%, 
          rgba(234, 179, 8, 0.6) 75%, 
          rgba(217, 119, 6, 0.8) 100%
        )
      `,
      contact: `
        radial-gradient(circle at ${x}% ${y}%, 
          rgba(34, 197, 94, 0.8) 0%, 
          rgba(16, 185, 129, 0.6) 25%, 
          rgba(6, 182, 212, 0.4) 50%, 
          rgba(34, 197, 94, 0.6) 75%, 
          rgba(5, 150, 105, 0.8) 100%
        )
      `
    };

    return {
      background: gradients[currentSection as keyof typeof gradients] || gradients.hero,
      transition: isScrolling ? 'background 0.8s ease-in-out' : 'background 0.3s ease-out'
    };
  };

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <div 
        className="fixed inset-0 z-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        style={getGradientStyle()}
      />
      
      {/* Animated Overlay */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-2xl tracking-tight">
            Studio
          </div>
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-all duration-300 ${
                  currentSection === section.id
                    ? 'text-white border-b-2 border-white/50'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {sections[0].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-4 font-light">
            {sections[0].subtitle}
          </p>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            {sections[0].description}
          </p>
          <button 
            className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 animate-pulse"
            onClick={() => scrollToSection('services')}
          >
            Get Started
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
          </button>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-white/60 w-6 h-6" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {sections[1].title}
          </h2>
          <p className="text-xl text-white/80 mb-4 font-light">
            {sections[1].subtitle}
          </p>
          <p className="text-lg text-white/70 mb-16 max-w-3xl mx-auto">
            {sections[1].description}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Play, title: 'Brand Identity', desc: 'Distinctive visual identity that captures your brand essence' },
              { icon: Users, title: 'Digital Experience', desc: 'User-centered design that converts and delights' },
              { icon: Award, title: 'Creative Strategy', desc: 'Strategic thinking that drives meaningful results' }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                <service.icon className="w-12 h-12 text-white mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-white/70">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {sections[2].title}
          </h2>
          <p className="text-xl text-white/80 mb-4 font-light">
            {sections[2].subtitle}
          </p>
          <p className="text-lg text-white/70 mb-16 max-w-3xl mx-auto">
            {sections[2].description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Tech Startup Rebrand', category: 'Brand Identity', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800' },
              { title: 'E-commerce Platform', category: 'Digital Experience', image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800' },
              { title: 'Financial App Design', category: 'Mobile Experience', image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800' },
              { title: 'SaaS Dashboard', category: 'UI/UX Design', image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800' }
            ].map((project, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-white/60 mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {sections[3].title}
          </h2>
          <p className="text-xl text-white/80 mb-4 font-light">
            {sections[3].subtitle}
          </p>
          <p className="text-lg text-white/70 mb-16 max-w-3xl mx-auto">
            {sections[3].description}
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <blockquote className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed">
              "Studio transformed our brand identity beyond our wildest expectations. Their creative vision and attention to detail resulted in a 300% increase in customer engagement."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-white/40 to-white/20 rounded-full"></div>
              <div className="text-left">
                <div className="font-semibold text-white">Sarah Chen</div>
                <div className="text-white/70">CEO, TechFlow Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {sections[4].title}
          </h2>
          <p className="text-xl text-white/80 mb-4 font-light">
            {sections[4].subtitle}
          </p>
          <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto">
            {sections[4].description}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Mail, label: 'Email', value: 'hello@studio.com' },
              { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
              { icon: MapPin, label: 'Location', value: 'New York, NY' }
            ].map((contact, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <contact.icon className="w-8 h-8 text-white mx-auto mb-4" />
                <div className="text-white/70 text-sm mb-2">{contact.label}</div>
                <div className="text-white font-medium">{contact.value}</div>
              </div>
            ))}
          </div>
          
          <button className="group bg-white/10 backdrop-blur-sm text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 animate-pulse">
            Start Your Project
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;