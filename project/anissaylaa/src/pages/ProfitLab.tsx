import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Users, TrendingUp, Shield, Clock, Star } from 'lucide-react';

const ProfitLab = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Monetize in 7 Days",
      description: "Fast-track strategies to start earning within your first week"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Step-by-Step System",
      description: "Complete roadmap from $0 to $1K+ per month online"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Private Community",
      description: "Access to exclusive Discord with 3,000+ ambitious creators"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Proven Methods",
      description: "Strategies tested by thousands of successful students"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Lifetime Access",
      description: "Keep access forever with all future updates included"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Personal Support",
      description: "Direct access to Anissa and the success team"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      result: "$2,500 in first month",
      quote: "The A&Y Profit Lab literally changed my life. I went from broke college student to making more than my part-time job in just 30 days.",
      rating: 5
    },
    {
      name: "Jake T.",
      result: "$1,200 in 3 weeks",
      quote: "Finally found someone who doesn't just talk about making money online but actually shows you how to do it step by step.",
      rating: 5
    },
    {
      name: "Maria L.",
      result: "$800 in 2 weeks",
      quote: "The community alone is worth it. Having other people on the same journey keeps you motivated and accountable.",
      rating: 5
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="relative z-10 pt-24"
    >
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyber-pink/20 to-cyber-teal/20 rounded-full text-cyber-pink border border-cyber-pink/30 mb-6">
              🚀 Join 3,000+ Students
            </span>
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-cyber-teal to-cyber-pink bg-clip-text text-transparent">
                The A&Y Profit Lab
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your complete blueprint to start making money online. No fluff, no BS - just actionable strategies that work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="https://whop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-cyber-pink to-cyber-purple px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-xl hover:shadow-cyber-pink/30 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Join FREE Now</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              
              <div className="text-cyber-teal font-semibold">
                Usually $97 • FREE for Limited Time ⏰
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-pink mb-2">3,000+</div>
                <div className="text-gray-400">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-teal mb-2">7 Days</div>
                <div className="text-gray-400">To First Sale</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-gold mb-2">24/7</div>
                <div className="text-gray-400">Community Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-dark-card/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyber-teal to-cyber-gold bg-clip-text text-transparent">
                What You Get Inside
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to start your online income journey, all in one place.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-dark-card/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-cyber-pink/50 transition-all duration-300"
              >
                <div className="text-cyber-pink mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyber-pink to-cyber-purple bg-clip-text text-transparent">
                Real Results from Real Students
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-card/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-800"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-cyber-gold fill-current" />
                  ))}
                </div>
                <div className="text-cyber-teal font-bold text-lg mb-2">{testimonial.result}</div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-white font-semibold">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-dark-card/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyber-teal to-cyber-gold bg-clip-text text-transparent">
                Complete Curriculum
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              "✅ Finding Your Profitable Niche (Week 1)",
              "✅ Setting Up Your Online Presence",
              "✅ Content Creation That Converts",
              "✅ Building Your First Income Stream",
              "✅ Scaling to $1K+ Per Month",
              "✅ Advanced Monetization Strategies",
              "✅ Building Long-Term Wealth Online",
              "✅ Access to Private Discord Community",
              "✅ Live Q&A Sessions with Anissa",
              "✅ Templates, Scripts & Resources"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-dark-card/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800"
              >
                <Check className="text-cyber-teal h-6 w-6 flex-shrink-0" />
                <span className="text-white text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-dark-card/70 to-dark-card/50 backdrop-blur-sm p-12 rounded-3xl border border-cyber-pink/30"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-cyber-teal bg-clip-text text-transparent">
                Ready to Change Your Life?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 3,000+ students who are already building their online income. Limited time FREE access.
            </p>
            
            <div className="mb-8">
              <div className="text-4xl font-bold text-cyber-pink mb-2">FREE</div>
              <div className="text-gray-400 line-through text-xl">Usually $97</div>
              <div className="text-cyber-teal font-semibold">⏰ Limited Time Offer</div>
            </div>

            <a
              href="https://whop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyber-pink to-cyber-purple px-12 py-6 rounded-full text-white font-bold text-xl hover:shadow-2xl hover:shadow-cyber-pink/40 transition-all duration-300 animate-pulse-glow"
            >
              <span>Join the A&Y Profit Lab FREE</span>
              <ArrowRight size={24} />
            </a>

            <p className="text-gray-400 mt-6 text-sm">
              🔒 Secure checkout • No credit card required • Instant access
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProfitLab;