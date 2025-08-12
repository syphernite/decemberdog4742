// src/pages/About.tsx
import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  const values = [
    { icon: Award, title: "Excellence", description: "We never compromise on quality. Every project receives our full attention and expertise." },
    { icon: Users, title: "Partnership", description: "We work closely with clients as partners, not just vendors." },
    { icon: Clock, title: "Reliability", description: "On time, every time. Your deadlines are our commitments." },
    { icon: Heart, title: "Passion", description: "We love the craft. It shows in every build." },
  ];

  return (
    <main className="relative z-10 min-h-screen bg-transparent text-white">
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">About Built4You</h1>
          <p className="max-w-2xl text-base sm:text-lg text-slate-200/90">
            We build fast, effective websites for small businesses that need results.
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-slate-200/90 leading-relaxed">
              <p>We started Built4You to deliver professional sites without agency bloat.</p>
              <p>We’ve helped startups and local companies across many industries get online fast.</p>
              <p>We focus on long-term relationships and measurable outcomes.</p>
            </div>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
        </div>

        <motion.div className="mb-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="text-center bg-white/10 dark:bg-slate-800/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:shadow-xl hover:shadow-emerald-500/20 transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.6 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl mb-6">
                  <v.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-slate-200">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl p-12 text-center bg-white/10 dark:bg-slate-800/50 border border-white/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">Tell us your goals. We’ll map the fastest path to launch.</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-emerald-700 hover:to-blue-700 transition-all shadow-lg"
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
