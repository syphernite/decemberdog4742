import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="relative z-10"
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyber-pink/20 to-cyber-teal/20 rounded-full text-cyber-pink border border-cyber-pink/30 mb-6">
              ✨ Gen Z Finance Influencer
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-cyber-teal to-cyber-pink bg-clip-text text-transparent">
              Learn to Make Money
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyber-pink to-cyber-purple bg-clip-text text-transparent">
              Online with @anissaylaa
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            19-year-old creator teaching side hustles & online income. Not a guru. Just a girl who figured it out.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="https://whop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-cyber-pink to-cyber-purple px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-xl hover:shadow-cyber-pink/30 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Join A&Y Profit Lab FREE</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            
            <Link
              to="/about"
              className="px-8 py-4 border border-cyber-teal text-cyber-teal rounded-full font-semibold hover:bg-cyber-teal/10 transition-all duration-300"
            >
              Learn My Story
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-pink mb-2">3,000+</div>
              <div className="text-gray-400">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-teal mb-2">200K+</div>
              <div className="text-gray-400">TikTok Followers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-gold mb-2">7 Days</div>
              <div className="text-gray-400">To Start Earning</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Profit Lab Preview */}
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
              <span className="bg-gradient-to-r from-cyber-pink to-cyber-teal bg-clip-text text-transparent">
                The A&Y Profit Lab
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your complete blueprint to start making money online. No fluff, just actionable strategies that work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Monetize in 7 Days",
                description: "Fast-track strategies to start earning your first dollars online within a week."
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Step-by-Step System",
                description: "Complete roadmap from zero to your first $1K+ month online."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Private Community",
                description: "Access to exclusive Discord community with 3,000+ ambitious creators."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-dark-card/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-cyber-pink/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-pink/10"
              >
                <div className="text-cyber-pink mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://whop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyber-pink to-cyber-purple px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-xl hover:shadow-cyber-pink/30 transition-all duration-300"
            >
              <span>Start Your Profit Journey</span>
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
                Student Success Stories
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                quote: "Made my first $500 in 2 weeks following Anissa's methods. The Discord community is incredible!",
                rating: 5
              },
              {
                name: "Jake T.",
                quote: "Finally found someone who actually knows what they're talking about. No BS, just results.",
                rating: 5
              },
              {
                name: "Maria L.",
                quote: "From broke college student to $2K/month in 3 months. Anissa changed my life!",
                rating: 5
              }
            ].map((testimonial, index) => (
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
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-cyber-teal font-semibold">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;