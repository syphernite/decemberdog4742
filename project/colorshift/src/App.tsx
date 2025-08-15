import React, { useEffect, useState, useRef } from 'react';
import { User, Briefcase, Settings, Mail, Github, Linkedin, Twitter } from 'lucide-react';

interface MousePosition {
  x: number;
  y: number;
}

interface ColorTheme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  gradient: string;
}

const colorThemes: Record<string, ColorTheme> = {
  about: {
    name: 'About',
    primary: 'rgb(59, 130, 246)', // blue-500
    secondary: 'rgb(147, 197, 253)', // blue-300
    accent: 'rgb(219, 234, 254)', // blue-100
    gradient: 'from-blue-500/20 via-cyan-400/15 to-indigo-600/20'
  },
  work: {
    name: 'Work',
    primary: 'rgb(147, 51, 234)', // purple-600
    secondary: 'rgb(196, 181, 253)', // purple-300
    accent: 'rgb(237, 233, 254)', // purple-100
    gradient: 'from-purple-500/20 via-pink-400/15 to-indigo-600/20'
  },
  services: {
    name: 'Services',
    primary: 'rgb(245, 158, 11)', // amber-500
    secondary: 'rgb(252, 211, 77)', // amber-300
    accent: 'rgb(254, 243, 199)', // amber-100
    gradient: 'from-amber-500/20 via-orange-400/15 to-red-500/20'
  },
  contact: {
    name: 'Contact',
    primary: 'rgb(34, 197, 94)', // green-500
    secondary: 'rgb(134, 239, 172)', // green-300
    accent: 'rgb(220, 252, 231)', // green-100
    gradient: 'from-green-500/20 via-emerald-400/15 to-teal-500/20'
  }
};

function App() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('about');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const handleScroll = () => {
      const sections = ['about', 'work', 'services', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentTheme = hoveredSection ? colorThemes[hoveredSection] : colorThemes[activeSection];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', icon: User, label: 'About' },
    { id: 'work', icon: Briefcase, label: 'Work' },
    { id: 'services', icon: Settings, label: 'Services' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="fixed inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${currentTheme.primary}15, transparent 50%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, ${currentTheme.secondary}10, transparent 50%),
            linear-gradient(135deg, ${currentTheme.primary}08, ${currentTheme.secondary}05, ${currentTheme.accent}03)
          `
        }}
      />
      
      {/* Animated Gradient Overlay */}
      <div className={`fixed inset-0 bg-gradient-to-br ${currentTheme.gradient} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-pulse" />
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full p-2 shadow-2xl border border-white/20">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const isHovered = hoveredSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredSection(item.id)}
                onMouseLeave={() => setHoveredSection(null)}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300
                  ${isActive || isHovered 
                    ? 'bg-white/20 text-white shadow-lg scale-105' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                  }
                `}
                style={{
                  boxShadow: isActive || isHovered 
                    ? `0 0 20px ${currentTheme.primary}30` 
                    : 'none'
                }}
              >
                <Icon size={16} />
                <span className="text-sm font-medium hidden sm:block">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6 transition-all duration-1000"
            style={{
              textShadow: `0 0 30px ${currentTheme.primary}50, 0 0 60px ${currentTheme.secondary}30`,
              background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Alex Johnson
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            Creative Developer & Digital Strategist
          </p>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that blend innovative technology with thoughtful design. 
            Specializing in web development, user experience, and creative problem-solving.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
            {[Github, Linkedin, Twitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                style={{
                  boxShadow: '0 0 20px rgba(255,255,255,0.1)'
                }}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl md:text-6xl font-bold text-white mb-12 text-center transition-all duration-1000"
            style={{
              textShadow: `0 0 30px ${currentTheme.primary}50`,
              background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Featured Work
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                style={{
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                }}
              >
                <div className="h-48 bg-gradient-to-br from-white/20 to-white/5 rounded-xl mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Project {item}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  A beautiful web application showcasing modern design principles and cutting-edge technology.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-6xl font-bold text-white mb-12 transition-all duration-1000"
            style={{
              textShadow: `0 0 30px ${currentTheme.primary}50`,
              background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Web Development', desc: 'Modern, responsive websites built with the latest technologies' },
              { title: 'UI/UX Design', desc: 'User-centered design that creates memorable experiences' },
              { title: 'Digital Strategy', desc: 'Comprehensive digital solutions for your business needs' }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                style={{
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-white/30 to-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-6xl font-bold text-white mb-12 transition-all duration-1000"
            style={{
              textShadow: `0 0 30px ${currentTheme.primary}50`,
              background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Get In Touch
          </h2>
          
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <Mail className="mx-auto mb-4 text-white" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-white/70">alex@example.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <User className="mx-auto mb-4 text-white" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-white/70">San Francisco, CA</p>
            </div>
          </div>
          
          <button 
            className="px-8 py-4 bg-white/20 backdrop-blur-md rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 hover:scale-105 border border-white/30"
            style={{
              boxShadow: `0 0 30px ${currentTheme.primary}30`
            }}
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;