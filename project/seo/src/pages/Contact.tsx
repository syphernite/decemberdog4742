// src/pages/Contact.tsx
import React from "react";
import { Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";
import { tokens } from "../styles/tokens";

export const Contact = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-neutral-900 p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Mail className="w-7 h-7 text-emerald-400" />
            Contact Us
          </h2>
          <p className="text-neutral-400 mb-8 flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Fill out the form and we’ll get back to you shortly.
          </p>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
