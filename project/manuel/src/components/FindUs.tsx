import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, MessageCircle, Phone } from 'lucide-react';

const FindUs = () => {
  const [isOpen] = useState(true);

  const locations = [
    { day: 'Monday', location: 'Main Street & 5th Ave', time: '11:00 AM - 3:00 PM' },
    { day: 'Tuesday', location: 'University Campus', time: '11:30 AM - 2:30 PM' },
    { day: 'Wednesday', location: 'Business District', time: '11:00 AM - 3:00 PM' },
    { day: 'Thursday', location: 'City Park', time: '11:30 AM - 2:30 PM' },
    { day: 'Friday', location: 'Downtown Square', time: '11:00 AM - 4:00 PM' },
    { day: 'Saturday', location: 'Farmer\'s Market', time: '10:00 AM - 3:00 PM' },
    { day: 'Sunday', location: 'Riverside Park', time: '12:00 PM - 4:00 PM' },
  ];

  return (
    <motion.section 
      id="findus" 
      className="py-20 bg-black-deep text-white"
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl font-normal mb-6 tracking-tight">
            FIND US
          </h2>
          <p className="font-body text-xl text-gray-300 max-w-2xl mx-auto">
            We move around to bring you the best food wherever you are. 
            Follow our weekly schedule or call to find our current location.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="bg-gray-800 rounded-xl p-8 text-center border border-silver-accent/20">
              <MapPin size={64} className="mx-auto mb-4 text-red-primary" />
              <h3 className="font-display text-2xl font-normal mb-4">LIVE LOCATION</h3>
              <p className="text-gray-400 mb-6">
                Interactive map coming soon! Call us for real-time location updates.
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.a
                href="tel:580-771-6373"
                className="bg-red-primary hover:bg-red-dark text-white p-6 rounded-xl font-body font-bold flex items-center space-x-3 shadow-xl border border-red-primary hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 24px rgba(199,20,24,0.4)'
                }}
              >
                <Phone size={24} />
                <div>
                  <div className="text-sm opacity-90">Call to Order</div>
                  <div className="font-bold">580-771-6373</div>
                </div>
              </motion.a>

              <motion.a
                href="sms:5807716373?body=Order for pickup:"
                className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-xl font-body font-bold flex items-center space-x-3 shadow-xl border border-green-600 hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={24} />
                <div>
                  <div className="text-sm opacity-90">Text Your Order</div>
                  <div className="font-bold">Quick SMS</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Schedule Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-800 rounded-xl p-6 border border-silver-accent/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl font-normal">WEEKLY SCHEDULE</h3>
                <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                  isOpen ? 'bg-green-600' : 'bg-red-600'
                }`}>
                  {isOpen ? 'OPEN NOW' : 'CLOSED'}
                </div>
              </div>

              <div className="space-y-4">
                {locations.map((schedule, index) => (
                  <motion.div
                    key={schedule.day}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <div>
                      <div className="font-body font-bold text-white">{schedule.day}</div>
                      <div className="text-sm text-gray-400">{schedule.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-body text-sm text-gray-300 flex items-center">
                        <Clock size={16} className="mr-2" />
                        {schedule.time}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-red-primary/20 rounded-lg border border-red-primary/30">
                <p className="text-sm text-red-200">
                  <strong>Note:</strong> Schedule subject to change due to weather or events. 
                  Call ahead to confirm our location!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FindUs;