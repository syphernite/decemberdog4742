import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Palette, 
  Code, 
  Smartphone, 
  Globe, 
  Star,
  ArrowRight,
  Play,
  Pause,
  ChevronDown,
  Check,
  Heart,
  Share2,
  MessageCircle
} from 'lucide-react';

function App() {
  const [currentTab, setCurrentTab] = useState('features');
  const [isAnimating, setIsAnimating] = useState(false);
  const [likeCount, setLikeCount] = useState(247);
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setProgress(prev => (prev + 1) % 100);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Powered by Vite for instant hot reload and blazing fast builds"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Beautiful Design",
      description: "Crafted with Tailwind CSS for pixel-perfect, responsive layouts"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "TypeScript Ready",
      description: "Type-safe development with modern React patterns and hooks"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile First",
      description: "Responsive design that works seamlessly across all devices"
    }
  ];

  const stats = [
    { label: "Projects Created", value: "10K+", color: "text-blue-600" },
    { label: "Happy Developers", value: "50K+", color: "text-green-600" },
    { label: "Lines of Code", value: "1M+", color: "text-purple-600" },
    { label: "Coffee Consumed", value: "∞", color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="backdrop-blur-sm bg-white/80 border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">DemoCheck</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentTab('features')}
                className={`transition-colors ${currentTab === 'features' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Features
              </button>
              <button 
                onClick={() => setCurrentTab('showcase')}
                className={`transition-colors ${currentTab === 'showcase' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Showcase
              </button>
              <button 
                onClick={() => setCurrentTab('stats')}
                className={`transition-colors ${currentTab === 'stats' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Stats
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Demo Check ✨
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A beautiful, production-ready showcase built with React, TypeScript, and Tailwind CSS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsAnimating(!isAnimating)}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Interactive Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>View Source</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse ${isAnimating ? 'animate-bounce' : ''}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {currentTab === 'features' && (
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {currentTab === 'showcase' && (
          <div className="space-y-8">
            {/* Interactive Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Interactive Component</h3>
                  <p className="text-sm text-gray-500">Try clicking the buttons below</p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-sm text-gray-500">{progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button
                    onClick={handleLike}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all ${
                      isLiked ? 'bg-red-50 text-red-600' : 'bg-gray-50 text-gray-600'
                    } hover:scale-105`}
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                    <span className="text-sm font-medium">{likeCount}</span>
                  </button>
                  <button className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">42</span>
                  </button>
                  <button className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all hover:scale-105"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Design System', 'Animations', 'Responsiveness'].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">{item}</h4>
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Fully implemented</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentTab === 'stats' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg mb-4">Built with ❤️ using React, TypeScript & Tailwind CSS</p>
          <p className="text-gray-400">
            Demo check complete! Ready for production-level development.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;