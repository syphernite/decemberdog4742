import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Flame } from 'lucide-react';

const About = () => {
  const timelineEvents = [
    {
      year: '1987',
      title: 'The Beginning',
      description: 'Abuela Maria shares her secret mole recipe with young Roberto in Puebla, Mexico.',
      position: 'left'
    },
    {
      year: '2003',
      title: 'Journey North',
      description: 'Roberto brings his family recipes to Santa Fe, working in local kitchens.',
      position: 'right'
    },
    {
      year: '2010',
      title: 'First Restaurant',
      description: 'Robert Familia opens its doors with just 8 tables and big dreams.',
      position: 'left'
    },
    {
      year: '2015',
      title: 'Community Recognition',
      description: 'Named "Best Mexican Restaurant" by Santa Fe Food & Wine Magazine.',
      position: 'right'
    },
    {
      year: '2020',
      title: 'Pandemic Resilience',
      description: 'Adapted to serve the community with takeout and family meal packages.',
      position: 'left'
    },
    {
      year: '2024',
      title: 'New Chapter',
      description: 'Celebrating 14 years of bringing authentic Mexican flavors to New Mexico.',
      position: 'right'
    },
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'We believe in bringing people together through the universal language of food.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Craft',
      description: 'Every dish is prepared with the same care and attention as our grandmother taught us.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Freshness',
      description: 'We source locally when possible and make everything fresh daily in our kitchen.'
    },
  ];

  return (
    <motion.div
      className="min-h-screen pt-20 pb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-papel to-marigold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal mb-6">
              Our <span className="text-chili">Story</span>
            </h1>
            <p className="text-xl text-charcoal/70 leading-relaxed">
              From a small family kitchen in Puebla to the heart of Santa Fe, 
              our journey is one of tradition, passion, and the unbreakable bonds of familia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-papel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display font-bold text-charcoal mb-4">
              The <span className="text-chili">Familia</span> Journey
            </h2>
          </motion.div>

          <div className="relative">
            {/* Central timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-chili via-marigold to-nopal"></div>

            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  className={`flex items-center ${
                    event.position === 'left' ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: event.position === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-5/12 ${event.position === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                      <h3 className="text-2xl font-display font-bold text-chili mb-2">
                        {event.year}
                      </h3>
                      <h4 className="text-lg font-semibold text-charcoal mb-3">
                        {event.title}
                      </h4>
                      <p className="text-charcoal/70">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      className="w-6 h-6 bg-white border-4 border-chili rounded-full z-10"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="absolute inset-1 bg-chili rounded-full"></div>
                    </motion.div>
                  </div>

                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chef Highlight */}
      <section className="py-20 bg-gradient-to-br from-chili/5 to-nopal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Chef Roberto in the kitchen"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                
                {/* Steam animation */}
                <div className="absolute top-10 left-10">
                  <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-80">
                    <motion.path
                      d="M20,50 Q20,30 15,20 Q15,10 20,10"
                      stroke="#FFF8F0"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    />
                    <motion.path
                      d="M30,50 Q30,30 25,20 Q25,10 30,10"
                      stroke="#FFF8F0"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.path
                      d="M40,50 Q40,30 35,20 Q35,10 40,10"
                      stroke="#FFF8F0"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-display font-bold text-charcoal mb-6">
                Meet Chef <span className="text-chili">Roberto</span>
              </h2>
              <div className="space-y-6 text-charcoal/70">
                <p className="text-lg leading-relaxed">
                  Born in Puebla, Mexico, Roberto learned to cook at his grandmother's side, 
                  absorbing not just recipes but the stories and traditions behind each dish.
                </p>
                <p className="text-lg leading-relaxed">
                  "Cooking isn't just about feeding people," Roberto says. "It's about 
                  creating memories, bringing families together, and sharing our culture 
                  one meal at a time."
                </p>
                <p className="text-lg leading-relaxed">
                  Today, he continues to honor those traditions while adding his own 
                  modern touches, creating dishes that tell the story of Mexico's rich 
                  culinary heritage.
                </p>
              </div>

              <div className="mt-8 flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-chili to-chili/80 rounded-full flex items-center justify-center mr-4">
                  <Flame className="w-8 h-8 text-papel" />
                </div>
                <div>
                  <p className="font-display font-bold text-lg text-charcoal">Signature Style</p>
                  <p className="text-charcoal/70">Fire-grilled perfection with traditional techniques</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-papel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display font-bold text-charcoal mb-4">
              Our <span className="text-chili">Values</span>
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              These principles guide everything we do, from sourcing ingredients to serving our guests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-chili to-chili/80 text-papel rounded-2xl mb-6 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-charcoal mb-4">
                  {value.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {value.description}
                </p>
                <motion.div
                  className="w-16 h-0.5 bg-marigold mx-auto mt-6 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;