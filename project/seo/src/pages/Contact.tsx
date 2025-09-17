import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { ContactForm } from '../components/Contact/ContactForm';
import { tokens } from '../styles/tokens';

export const Contact: React.FC = () => {
  return (
    <div className={tokens.section}>
      <div className={tokens.container}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className={tokens.heading.h2}>
              Get In Touch
            </h1>
            <p className={`${tokens.text.bodyLarge} mt-6 max-w-2xl mx-auto`}>
              Ready to boost your search rankings? Let's discuss your SEO goals and create a custom strategy for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-1 space-y-8"
            >
              <div className={`${tokens.card} p-8`}>
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6">
                  <Mail size={24} className="text-neutral-700" />
                </div>
                <h3 className={`${tokens.heading.h3} text-lg mb-4`}>
                  Email Us
                </h3>
                <p className={tokens.text.body}>
                  We'll respond within 24 hours
                </p>
              </div>

              <div className={`${tokens.card} p-8`}>
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare size={24} className="text-neutral-700" />
                </div>
                <h3 className={`${tokens.heading.h3} text-lg mb-4`}>
                  Start a Conversation
                </h3>
                <p className={tokens.text.body}>
                  Tell us about your SEO challenges and goals
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className={`${tokens.card} p-12`}>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};