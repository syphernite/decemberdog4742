import { openSMS } from '../lib/sms'
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BookingForm } from '../components/BookingForm';

export const Book: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-charcoal mb-4">Book Your Cut</h1>
          <p className="text-xl text-bone">Choose your preferred booking method</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Quick Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-bone rounded-lg p-8 shadow-lg"
          >
            <div className="text-center mb-6">
              <MessageCircle className="w-16 h-16 text-success mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-charcoal mb-2">Quick Text</h2>
              <p className="text-bone">Fast and simple. Text or call to book.</p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+1-555-0100"
                className="w-full bg-copper text-bone py-4 px-6 rounded-lg hover:bg-copper/90 transition-colors flex items-center justify-center gap-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2"
              >
                <Phone size={24} />
                Call Now: (555) 010-0100
              </a>

              <a
                onClick={(e)=>{e.preventDefault(); openSMS("+15550100", "Hey Charmin, I'd like to book a cut for: ")}} href="#"
                className="w-full bg-success text-bone py-4 px-6 rounded-lg hover:bg-success/90 transition-colors flex items-center justify-center gap-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-success focus:ring-offset-2"
              >
                <MessageCircle size={24} />
                Send Text Message
              </a>
            </div>

            <div className="mt-8 p-4 bg-charcoal rounded-lg">
              <h3 className="font-semibold text-charcoal mb-2">What to Include:</h3>
              <ul className="text-sm text-bone space-y-1">
                <li>• Service needed (cut, fade, beard trim)</li>
                <li>• Preferred date and time</li>
                <li>• Your location</li>
                <li>• Contact info</li>
              </ul>
            </div>
          </motion.div>

          {/* Online Booking */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center mb-6">
              <Calendar className="w-16 h-16 text-copper mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-charcoal mb-2">Online Booking</h2>
              <p className="text-bone">Schedule instantly with our booking form.</p>
            </div>

            <BookingForm />
          </motion.div>
        </div>

        {/* Travel Fee Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg"
        >
          <p className="text-center text-yellow-800">
            <strong>Travel Fee:</strong> $10 house call fee applies to all appointments. 
            Additional travel fee may apply for locations outside our standard service radius.
          </p>
        </motion.div>
      </div>
    </div>
  );
};