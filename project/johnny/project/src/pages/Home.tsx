import React from 'react';
import { ExternalLink, Palette, Users, MapPin, Star, Award, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 animate-pulse-slow">
          <img
            src="https://images.pexels.com/photos/1813513/pexels-photo-1813513.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1600&fit=crop"
            alt="Tattoo artistry"
            className="w-full h-full object-cover opacity-30 scale-105 hover:scale-110 transition-transform duration-[10s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/20 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-float opacity-60"></div>
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-float-delayed opacity-40"></div>
            <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-float-slow opacity-50"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Floating badge */}
          <div className="inline-flex items-center space-x-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-2 mb-8 animate-slide-down">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-medium">10+ Years Experience</span>
            <Star className="w-4 h-4 text-yellow-400" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 animate-slide-up tracking-tight">
            <span className="bg-gradient-to-r from-white via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-2xl">
              Atlanta's Premier
            </span>
            <br />
            <span className="text-white drop-shadow-2xl animate-glow">Tattoo Artist</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-200 mb-12 animate-slide-up-delay font-light tracking-wide">
            Custom <span className="text-yellow-400 font-semibold">black & grey</span>, 
            <span className="text-yellow-400 font-semibold"> fine line</span>, 
            <span className="text-yellow-400 font-semibold"> bold ink</span> — by Johnny
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up-delay-2">
            <a
              href="https://tattoo-johnny.square.site"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-10 py-5 rounded-2xl text-xl font-bold hover:from-yellow-300 hover:to-yellow-500 transform hover:scale-110 hover:-rotate-1 transition-all duration-500 shadow-2xl hover:shadow-yellow-500/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Book Your Session</span>
              <ExternalLink size={24} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            
            <div className="flex items-center space-x-4 text-gray-300">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="font-medium">Premium Quality</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="font-medium">Fast Booking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-8 h-12 border-2 border-yellow-400/60 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1.5 h-4 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-yellow-400 font-semibold text-lg tracking-widest uppercase animate-fade-in">About Johnny</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 animate-slide-up">
              Master of the <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-glow">Craft</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-slide-up-delay">
              With over <span className="text-yellow-400 font-bold">10 years</span> of tattoo artistry, Johnny has perfected the art of 
              <span className="text-white font-semibold"> clean linework</span> and 
              <span className="text-white font-semibold"> smooth shading</span>. Every piece tells a story, crafted with precision and passion in 
              the heart of <span className="text-yellow-400 font-bold">Atlanta</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Highlight Cards */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Style Card */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 hover:shadow-2xl hover:shadow-yellow-500/20 animate-slide-up overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-yellow-400 mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <Palette size={56} />
                </div>
                <h3 className="text-3xl font-black text-white mb-6 group-hover:text-yellow-400 transition-colors duration-500">
                  Style
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  Fine line, black & grey, bold statement tattoos crafted with artistic precision and attention to detail.
                </p>
              </div>
            </div>

            {/* Process Card */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 transform hover:-translate-y-4 hover:-rotate-1 hover:shadow-2xl hover:shadow-yellow-500/20 animate-slide-up-delay overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-yellow-400 mb-8 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500">
                  <Users size={56} />
                </div>
                <h3 className="text-3xl font-black text-white mb-6 group-hover:text-yellow-400 transition-colors duration-500">
                  Process
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  Consultation-led approach ensuring your vision comes to life. Deposits handled securely via Square.
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 hover:shadow-2xl hover:shadow-yellow-500/20 animate-slide-up-delay-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-yellow-400 mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <MapPin size={56} />
                </div>
                <h3 className="text-3xl font-black text-white mb-6 group-hover:text-yellow-400 transition-colors duration-500">
                  Location
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  Based in Atlanta, GA. Serving the metro area with premium tattoo artistry and professional service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-400 to-yellow-600 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1040753/pexels-photo-1040753.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
            alt="Tattoo work"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/90 to-yellow-600/90"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-4xl md:text-6xl font-black text-black mb-2">10+</div>
              <div className="text-lg font-semibold text-black/80">Years Experience</div>
            </div>
            <div className="animate-slide-up-delay">
              <div className="text-4xl md:text-6xl font-black text-black mb-2">500+</div>
              <div className="text-lg font-semibold text-black/80">Happy Clients</div>
            </div>
            <div className="animate-slide-up-delay-2">
              <div className="text-4xl md:text-6xl font-black text-black mb-2">100%</div>
              <div className="text-lg font-semibold text-black/80">Satisfaction</div>
            </div>
            <div className="animate-slide-up-delay-3">
              <div className="text-4xl md:text-6xl font-black text-black mb-2">24/7</div>
              <div className="text-lg font-semibold text-black/80">Aftercare Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;