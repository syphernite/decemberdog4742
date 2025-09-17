import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { tokens } from '../../styles/tokens';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  message: string;
  honeypot: string;
}

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    message: '',
    honeypot: '',
  });

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot
    if (formData.honeypot) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    
    if (!formspreeEndpoint) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: 'Form configuration error. Please try again later.',
      });
      return;
    }

    setFormState({ isSubmitting: true, isSuccess: false, error: null });

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          website: formData.website,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormState({ isSubmitting: false, isSuccess: true, error: null });
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          website: '',
          message: '',
          honeypot: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: 'Failed to send message. Please try again.',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (formState.isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`${tokens.card} p-12 text-center`}
      >
        <div className="w-16 h-16 mx-auto mb-8 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        
        <h3 className={`${tokens.heading.h3} mb-6 text-green-600`}>
          Message Sent Successfully
        </h3>
        
        <p className={`${tokens.text.body} mb-8`}>
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        
        <button
          onClick={() => setFormState({ isSubmitting: false, isSuccess: false, error: null })}
          className={tokens.button.secondary}
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      {formState.error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg"
        >
          <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
          <p className="text-red-700">{formState.error}</p>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className={`block ${tokens.text.body} font-medium mb-3`}>
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${tokens.input} ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Your full name"
            required
          />
          {errors.name && <p className="text-red-600 text-sm mt-2">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="company" className={`block ${tokens.text.body} font-medium mb-3`}>
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={tokens.input}
            placeholder="Your company name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="email" className={`block ${tokens.text.body} font-medium mb-3`}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${tokens.input} ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
            placeholder="your@email.com"
            required
          />
          {errors.email && <p className="text-red-600 text-sm mt-2">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={`block ${tokens.text.body} font-medium mb-3`}>
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={tokens.input}
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="website" className={`block ${tokens.text.body} font-medium mb-3`}>
          Website
        </label>
        <input
          type="url"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className={tokens.input}
          placeholder="https://yourwebsite.com"
        />
      </div>

      <div>
        <label htmlFor="message" className={`block ${tokens.text.body} font-medium mb-3`}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={`${tokens.input} ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Tell us about your SEO goals and how we can help..."
          required
        />
        {errors.message && <p className="text-red-600 text-sm mt-2">{errors.message}</p>}
      </div>

      {/* Honeypot field - hidden from users */}
      <div style={{ display: 'none' }}>
        <label htmlFor="honeypot">Don't fill this out:</label>
        <input
          type="text"
          id="honeypot"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <motion.button
        type="submit"
        disabled={formState.isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full ${tokens.button.primary} disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3`}
      >
        {formState.isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={20} />
          </>
        )}
      </motion.button>
    </motion.form>
  );
};