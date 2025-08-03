import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Heart, Target, Sparkles } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="relative z-10 pt-24"
    >
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyber-pink/20 to-cyber-teal/20 rounded-full text-cyber-pink border border-cyber-pink/30 mb-6">
                ✨ Meet Anissa
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-cyber-teal bg-clip-text text-transparent">
                  Not a Guru.
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyber-pink to-cyber-purple bg-clip-text text-transparent">
                  Just a Girl Who Figured It Out.
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                At 19, I went from broke college student to helping thousands of people start their online income journey. Here's my story.
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-cyber-pink/20 to-cyber-teal/20 rounded-2xl border border-cyber-pink/30 flex items-center justify-center">
                <div className="text-6xl">👩‍💻</div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyber-gold to-cyber-pink rounded-full animate-float opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyber-teal to-cyber-purple rounded-full animate-float animation-delay-1000 opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
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
                My Journey
              </span>
            </h2>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "The Starting Point",
                content: "Like most Gen Z, I was tired of the traditional 'go to college, get a job' path. I wanted financial freedom on my own terms, but had no idea where to start."
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "The Breakthrough",
                content: "After months of trial and error, I discovered the strategies that actually work. I made my first $100 online, then $1,000, then built it into a sustainable income stream."
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "The Mission",
                content: "Now I'm on a mission to help other young people break free from financial stress. I share everything I've learned - no gatekeeping, no fluff, just real results."
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "The Community",
                content: "What started as sharing tips on TikTok became a movement. Over 3,000 students have joined the A&Y Profit Lab, and we're just getting started."
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="bg-dark-card/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
                    <div className="text-cyber-pink mb-4">
                      {story.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{story.title}</h3>
                    <p className="text-gray-300 text-lg">{story.content}</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyber-pink to-cyber-teal rounded-full flex items-center justify-center text-2xl font-bold">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
                The Numbers Don't Lie
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "3,000+", label: "Students Helped" },
              { number: "200K+", label: "TikTok Followers" },
              { number: "50K+", label: "Instagram Followers" },
              { number: "7 Days", label: "Average Time to First Sale" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-dark-card/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyber-teal to-cyber-gold bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-dark-card/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-cyber-teal bg-clip-text text-transparent">
                Ready to Start Your Journey?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students who are already building their online income with the A&Y Profit Lab.
            </p>
            <a
              href="https://whop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyber-pink to-cyber-purple px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-xl hover:shadow-cyber-pink/30 transition-all duration-300"
            >
              <span>Join the A&Y Profit Lab FREE</span>
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;