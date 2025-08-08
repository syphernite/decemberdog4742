import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Download, Calendar, AlertTriangle, CheckCircle, X, Droplets, Sun, Shirt } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { staggerChildren, fadeUp, glitchIn, bloodDrip, rotateIn } from '../utils/animations';

interface Day {
  day: number;
  title: string;
  linework: string[];
  color: string[];
  warning?: string;
}

const Aftercare: React.FC = () => {
  const [ref, isInView] = useInView(0.1);
  const [selectedTrack, setSelectedTrack] = useState<'linework' | 'color'>('linework');
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const healingDays: Day[] = [
    {
      day: 1,
      title: 'Fresh Ink',
      linework: [
        'Keep bandage on for 2-4 hours',
        'Gently wash with antibacterial soap',
        'Pat dry with clean paper towel',
        'Apply thin layer of A&D ointment'
      ],
      color: [
        'Keep bandage on for 4-6 hours',
        'Wash very gently with lukewarm water',
        'Pat dry carefully - no rubbing',
        'Apply healing ointment sparingly'
      ],
      warning: 'Do not rebandage after initial removal'
    },
    {
      day: 2,
      title: 'Initial Healing',
      linework: [
        'Wash 2-3 times daily',
        'Continue thin ointment application',
        'Expect some redness and swelling',
        'Avoid tight clothing over tattoo'
      ],
      color: [
        'Wash very gently 2-3 times daily',
        'Use fragrance-free moisturizer',
        'Colors may appear very bright',
        'Avoid any friction or pressure'
      ]
    },
    {
      day: 3,
      title: 'Scabbing Begins',
      linework: [
        'Small scabs may form - do not pick',
        'Switch to fragrance-free lotion',
        'Itching may begin - do not scratch',
        'Keep area clean and dry'
      ],
      color: [
        'Gentle scabbing - absolutely no picking',
        'Colors may start to look cloudy',
        'Use unscented lotion only',
        'Avoid hot showers on tattoo'
      ],
      warning: 'Picking scabs will damage your tattoo permanently'
    },
    {
      day: 7,
      title: 'Peeling Phase',
      linework: [
        'Skin will start to peel like sunburn',
        'Moisturize regularly but don\'t over-do it',
        'Peeling is normal - let it happen naturally',
        'Tattoo may look dull - this is temporary'
      ],
      color: [
        'Color peeling is more dramatic',
        'Don\'t panic if colors look faded',
        'Keep moisturized but not soggy',
        'True colors will return after healing'
      ]
    },
    {
      day: 14,
      title: 'Deep Healing',
      linework: [
        'Surface should be mostly healed',
        'Continue light moisturizing',
        'Tattoo may still feel slightly raised',
        'Can return to normal activities'
      ],
      color: [
        'Colors starting to settle and brighten',
        'Surface healing nearly complete',
        'Still avoid prolonged sun exposure',
        'Gentle exercise is okay'
      ]
    },
    {
      day: 30,
      title: 'Fully Healed',
      linework: [
        'Tattoo should be completely healed',
        'True colors and lines now visible',
        'Can resume all normal activities',
        'Schedule touch-up if needed'
      ],
      color: [
        'Full color vibrancy should be visible',
        'All layers of skin have regenerated',
        'Sun protection still recommended',
        'Touch-ups available if needed'
      ]
    }
  ];

  const dosList = [
    'Wash hands before touching tattoo',
    'Use fragrance-free, gentle products',
    'Keep tattoo moisturized but not soggy',
    'Wear loose, breathable clothing',
    'Sleep on clean sheets',
    'Stay hydrated and eat well'
  ];

  const dontsList = [
    'Pick, scratch, or peel scabs',
    'Soak in baths, pools, or hot tubs',
    'Expose to direct sunlight',
    'Use products with fragrances or alcohol',
    'Wear tight clothing over tattoo',
    'Exercise heavily for first 48 hours'
  ];

  const approvedProducts = [
    'Aquaphor Healing Ointment',
    'A&D Original Ointment',
    'Cetaphil Daily Facial Moisturizer',
    'Lubriderm Daily Moisture Lotion',
    'Aveeno Daily Moisturizing Lotion'
  ];

  return (
    <div className="min-h-screen bg-ink-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-ink-800 film-grain rain-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={glitchIn}
            initial="hidden"
            animate="visible"
            className="relative mb-6"
          >
            <Heart className="w-16 h-16 mx-auto mb-4 text-blood-600 animate-pulse-glow" />
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-bone-100 text-glow-white">
              AFTERCARE <span className="text-blood-600 text-glow animate-pulse-glow">GUIDE</span>
            </h1>
            <motion.div
              variants={bloodDrip}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-blood-600 opacity-60"
            />
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="text-xl text-stone-400 max-w-3xl mx-auto font-gothic"
          >
            ⚡ Proper healing ensures your ink stays vibrant for life ⚡
          </motion.p>
        </div>
      </section>

      {/* Track Selection */}
      <section className="py-12 bg-ink-800 border-b border-stone-700/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTrack('linework')}
              className={`px-8 py-3 rounded-large font-bold transition-all duration-300 ${
                selectedTrack === 'linework'
                  ? 'bg-blood-600 text-bone-100 glow-accent animate-pulse-glow'
                  : 'bg-stone-700 text-stone-300 hover:bg-stone-600'
              }`}
            >
              LINEWORK HEALING
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTrack('color')}
              className={`px-8 py-3 rounded-large font-bold transition-all duration-300 ${
                selectedTrack === 'color'
                  ? 'bg-blood-600 text-bone-100 glow-accent animate-pulse-glow'
                  : 'bg-stone-700 text-stone-300 hover:bg-stone-600'
              }`}
            >
              COLOR HEALING
            </motion.button>
          </div>
        </div>
      </section>

      {/* Healing Timeline */}
      <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {healingDays.map((day, index) => (
              <motion.div
                key={day.day}
                variants={rotateIn}
                className="bg-stone-800/50 rounded-large border border-stone-700 backdrop-blur-sm overflow-hidden"
              >
                <div
                  className="p-6 cursor-pointer hover:bg-stone-700/30 transition-colors"
                  onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blood-600 rounded-full flex items-center justify-center font-bold text-bone-100">
                        {day.day}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-bone-100">
                          Day {day.day}: {day.title}
                        </h3>
                        {day.warning && (
                          <div className="flex items-center mt-1">
                            <AlertTriangle className="w-4 h-4 text-blood-600 mr-2" />
                            <span className="text-blood-600 text-sm font-medium">
                              {day.warning}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedDay === day.day ? 45 : 0 }}
                      className="text-stone-400"
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  </div>
                </div>
                
                {expandedDay === day.day && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <div className="bg-ink-900/50 rounded-medium p-4">
                      <h4 className="font-gothic font-semibold text-bone-100 mb-3">
                        {selectedTrack === 'linework' ? 'Linework Care:' : 'Color Care:'}
                      </h4>
                      <ul className="space-y-2">
                        {(selectedTrack === 'linework' ? day.linework : day.color).map((instruction, idx) => (
                          <li key={idx} className="flex items-start text-stone-300">
                            <CheckCircle className="w-4 h-4 text-blood-600 mr-3 mt-0.5 flex-shrink-0" />
                            {instruction}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-20 bg-ink-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="font-display font-bold text-3xl text-bone-100 text-center mb-12 text-glow-white"
          >
            💀 DO'S & DON'TS 💀
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Do's */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-stone-700/50 rounded-large p-6 border border-stone-600"
            >
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-blood-600 mr-3 animate-pulse" />
                <h3 className="font-display font-bold text-2xl text-bone-100">DO</h3>
              </div>
              <ul className="space-y-3">
                {dosList.map((item, index) => (
                  <li key={index} className="flex items-start text-stone-300">
                    <Heart className="w-4 h-4 text-blood-600 mr-3 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Don'ts */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              className="bg-stone-700/50 rounded-large p-6 border border-stone-600"
            >
              <div className="flex items-center mb-4">
                <X className="w-8 h-8 text-blood-600 mr-3 animate-pulse" />
                <h3 className="font-display font-bold text-2xl text-bone-100">DON'T</h3>
              </div>
              <ul className="space-y-3">
                {dontsList.map((item, index) => (
                  <li key={index} className="flex items-start text-stone-300">
                    <AlertTriangle className="w-4 h-4 text-blood-600 mr-3 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approved Products */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-stone-800/50 rounded-large p-8 border border-stone-700 backdrop-blur-sm text-center"
          >
            <Droplets className="w-12 h-12 text-blood-600 mx-auto mb-4 animate-pulse-glow" />
            <h2 className="font-display font-bold text-2xl text-bone-100 mb-6 text-glow-white">
              APPROVED PRODUCTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {approvedProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-ink-900/50 rounded-medium p-3 border border-stone-600 hover:border-blood-600 transition-colors"
                >
                  <span className="text-stone-300 text-sm">{product}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mt-12"
          >
            <button className="inline-flex items-center px-8 py-4 bg-blood-600 text-bone-100 rounded-large font-bold text-lg hover:bg-blood-700 transition-all duration-300 glow-accent animate-pulse-glow hover:animate-shake">
              <Download className="w-5 h-5 mr-3 animate-bounce" />
              DOWNLOAD PDF GUIDE
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Aftercare;