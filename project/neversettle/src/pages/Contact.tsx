import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Calendar, Dumbbell } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const classes = [
    {
      name: 'HIIT Bootcamp',
      description: 'High-intensity interval training to torch calories',
      time: 'Mon, Wed, Fri @ 6:00 AM',
      icon: Dumbbell,
    },
    {
      name: 'Dance Fitness',
      description: 'Fun, energetic dance routines that feel like a party',
      time: 'Tue, Thu @ 7:00 PM',
      icon: Calendar,
    },
    {
      name: 'Strength & Conditioning',
      description: 'Build muscle and functional fitness',
      time: 'Sat @ 9:00 AM',
      icon: Dumbbell,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24 pb-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-950/60"></div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <MapPin className="w-20 h-20 text-emerald-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.8)]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Join the Movement
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300"
          >
            Classes • Community • Connection
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Our Classes
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {classes.map((cls, i) => (
              <motion.div
                key={cls.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all"
                whileHover={{ y: -5 }}
              >
                <cls.icon className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">{cls.name}</h3>
                <p className="text-gray-400 mb-4">{cls.description}</p>
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <Clock className="w-5 h-5" />
                  <span>{cls.time}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-emerald-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Book Your Class</h3>
            <div className="aspect-video bg-slate-950 rounded-xl flex items-center justify-center border border-slate-700">
              <div className="text-center">
                <Calendar className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <p className="text-gray-400 mb-4">
                  Calendly integration placeholder
                </p>
                <motion.a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule on Calendly
                </motion.a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-emerald-500/20 h-full">
              <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 font-medium">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 font-medium">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 transition-all resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-emerald-400 font-medium"
                  >
                    Message sent successfully!
                  </motion.div>
                )}
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-emerald-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Visit Us</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">Location</p>
                      <p className="text-gray-400">Lawton, Oklahoma</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">Phone</p>
                      <a
                        href="tel:+15555555555"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        (555) 555-5555
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">Email</p>
                      <a
                        href="mailto:info@neversettlenutrition.com"
                        className="text-gray-400 hover:text-emerald-400 transition-colors"
                      >
                        info@neversettlenutrition.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">Hours</p>
                      <div className="text-gray-400 space-y-1">
                        <p>Mon-Fri: 6:00 AM - 8:00 PM</p>
                        <p>Sat: 7:00 AM - 6:00 PM</p>
                        <p>Sun: 8:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-emerald-500/20">
                <div className="aspect-video bg-slate-950 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                    <p className="text-gray-400">Google Maps placeholder</p>
                    <p className="text-gray-500 text-sm mt-2">Lawton, Oklahoma</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.a
                  href="tel:+15555555555"
                  className="flex-1 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Call Now
                </motion.a>
                <motion.a
                  href="sms:+15555555555"
                  className="flex-1 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-xl text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Text Us
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full shadow-xl shadow-emerald-500/50 flex items-center justify-center text-white"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
        >
          <Mail className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </div>
  );
}
