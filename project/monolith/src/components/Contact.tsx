import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';

const budgetOptions = [
  '$10K - $25K',
  '$25K - $50K',
  '$50K - $100K',
  '$100K+'
];

const timelineOptions = [
  '1-2 weeks',
  '1-2 months',
  '2-4 months',
  '4+ months'
];

export const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goals: '',
    budget: '',
    timeline: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const threshold = documentHeight * 0.75;
      
      setIsOpen(scrollPosition >= threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        goals: '',
        budget: '',
        timeline: ''
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div id="contact">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-40"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ 
              type: 'spring', 
              damping: 30, 
              stiffness: 200 
            }}
          >
            <div className="glass mx-4 md:mx-8 mb-4 rounded-t-2xl overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="max-w-4xl mx-auto">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        className="text-center py-8"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="relative inline-block"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 0.6, ease: 'easeInOut' }}
                        >
                          <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-4" />
                          
                          {/* Confined sparkle effect */}
                          <motion.div
                            className="absolute inset-0 overflow-hidden"
                            animate={{
                              opacity: [0, 1, 0],
                            }}
                            transition={{ 
                              duration: 0.9,
                              times: [0, 0.5, 1],
                              repeat: 1
                            }}
                          >
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-white/60 rounded-full"
                                style={{
                                  left: `${20 + Math.random() * 60}%`,
                                  top: `${20 + Math.random() * 60}%`,
                                }}
                                animate={{
                                  scale: [0, 1, 0],
                                  opacity: [0, 1, 0],
                                }}
                                transition={{
                                  duration: 0.6,
                                  delay: i * 0.1,
                                }}
                              />
                            ))}
                          </motion.div>
                        </motion.div>
                        
                        <h3 className="text-2xl font-semibold mb-2">We'll be in touch</h3>
                        <p className="text-secondary">
                          Thank you for reaching out. We'll review your project and get back to you within 24 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-center mb-8">
                          <h3 className="text-2xl font-semibold mb-2">Start Your Project</h3>
                          <p className="text-secondary">
                            Tell us what you want the site to do. We will make it do that.
                          </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Name Field */}
                            <div className="relative">
                              <motion.label
                                className="absolute left-4 text-secondary transition-all duration-200 pointer-events-none"
                                animate={{
                                  y: focusedField === 'name' || formData.name ? -24 : 4,
                                  fontSize: focusedField === 'name' || formData.name ? '14px' : '16px',
                                  color: focusedField === 'name' ? 'rgb(232,233,236)' : 'rgb(174,178,185)'
                                }}
                              >
                                Name
                              </motion.label>
                              <input
                                type="text"
                                className="glass w-full px-4 py-4 bg-transparent border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                                required
                              />
                            </div>

                            {/* Email Field */}
                            <div className="relative">
                              <motion.label
                                className="absolute left-4 text-secondary transition-all duration-200 pointer-events-none"
                                animate={{
                                  y: focusedField === 'email' || formData.email ? -24 : 4,
                                  fontSize: focusedField === 'email' || formData.email ? '14px' : '16px',
                                  color: focusedField === 'email' ? 'rgb(232,233,236)' : 'rgb(174,178,185)'
                                }}
                              >
                                Email
                              </motion.label>
                              <input
                                type="email"
                                className="glass w-full px-4 py-4 bg-transparent border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                                required
                              />
                            </div>
                          </div>

                          {/* Project Goals */}
                          <div className="relative">
                            <motion.label
                              className="absolute left-4 top-4 text-secondary transition-all duration-200 pointer-events-none"
                              animate={{
                                y: focusedField === 'goals' || formData.goals ? -24 : 0,
                                fontSize: focusedField === 'goals' || formData.goals ? '14px' : '16px',
                                color: focusedField === 'goals' ? 'rgb(232,233,236)' : 'rgb(174,178,185)'
                              }}
                            >
                              Project Goals
                            </motion.label>
                            <textarea
                              className="glass w-full px-4 py-4 bg-transparent border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                              rows={3}
                              value={formData.goals}
                              onChange={(e) => handleInputChange('goals', e.target.value)}
                              onFocus={() => setFocusedField('goals')}
                              onBlur={() => setFocusedField(null)}
                              required
                            />
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Budget Selector */}
                            <div>
                              <label className="block text-sm font-medium mb-3 text-secondary">
                                Budget Range
                              </label>
                              <div className="grid grid-cols-2 gap-2">
                                {budgetOptions.map((option) => (
                                  <motion.button
                                    key={option}
                                    type="button"
                                    className={`stone p-3 rounded-lg text-sm transition-all ${
                                      formData.budget === option 
                                        ? 'bg-white/10 text-white' 
                                        : 'text-secondary hover:text-white'
                                    }`}
                                    onClick={() => handleInputChange('budget', option)}
                                    whileHover={{ y: -1 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    {option}
                                  </motion.button>
                                ))}
                              </div>
                            </div>

                            {/* Timeline Selector */}
                            <div>
                              <label className="block text-sm font-medium mb-3 text-secondary">
                                Timeline
                              </label>
                              <div className="grid grid-cols-2 gap-2">
                                {timelineOptions.map((option) => (
                                  <motion.button
                                    key={option}
                                    type="button"
                                    className={`stone p-3 rounded-lg text-sm transition-all ${
                                      formData.timeline === option 
                                        ? 'bg-white/10 text-white' 
                                        : 'text-secondary hover:text-white'
                                    }`}
                                    onClick={() => handleInputChange('timeline', option)}
                                    whileHover={{ y: -1 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    {option}
                                  </motion.button>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Submit Button */}
                          <div className="flex justify-center pt-4">
                            <motion.button
                              type="submit"
                              className="glass px-8 py-4 rounded-full font-medium flex items-center space-x-3 group"
                              whileHover={{ 
                                scale: 1.02,
                                backdropFilter: 'blur(12px)',
                              }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <span>Send Project Details</span>
                              <motion.div
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                              >
                                <Send className="w-4 h-4" />
                              </motion.div>
                            </motion.button>
                          </div>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};