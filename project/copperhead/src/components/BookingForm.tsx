import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, User, Phone, Mail } from 'lucide-react';
import siteData from '../content/site.json';

interface BookingFormData {
  service: string;
  date: string;
  time: string;
  location: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    service: '',
    date: '',
    time: '',
    location: '',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM', '06:00 PM'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Booking submitted:', formData);
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          service: '',
          date: '',
          time: '',
          location: '',
          name: '',
          phone: '',
          email: '',
          notes: ''
        });
      }, 3000);
    }, 1500);
  };

  const isValidDate = (dateString: string) => {
    const selectedDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  };

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-success/10 border border-success rounded-lg p-8 text-center"
      >
        <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-bone" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-success mb-2">Booking Confirmed!</h3>
        <p className="text-bone mb-4">
          We'll call or text you within 2 hours to confirm your appointment details.
        </p>
        <p className="text-sm text-bone">
          Questions? Call us at <a href="tel:+1-555-0100" className="text-copper hover:underline">+1-555-0100</a>
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-bone rounded-lg p-6 shadow-lg space-y-6">
      <h3 className="text-2xl font-bold text-charcoal mb-6">Book Your Appointment</h3>

      {/* Service Selection */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-bone mb-2">
          Select Service *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper"
        >
          <option value="">Choose a service...</option>
          {siteData.services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name} - {service.price}
            </option>
          ))}
        </select>
      </div>

      {/* Date Selection */}
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-bone mb-2 flex items-center gap-2">
          <Calendar size={16} />
          Preferred Date *
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          min={new Date().toISOString().split('T')[0]}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper"
        />
      </div>

      {/* Time Selection */}
      <div>
        <label htmlFor="time" className="block text-sm font-medium text-bone mb-2 flex items-center gap-2">
          <Clock size={16} />
          Preferred Time *
        </label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper"
        >
          <option value="">Choose a time...</option>
          {timeSlots.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-bone mb-2 flex items-center gap-2">
          <MapPin size={16} />
          Location *
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Your address or preferred location"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper"
        />
        <p className="text-xs text-bone mt-1">
          $10 house call fee applies. Additional travel fee may apply outside service radius.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-bone mb-2 flex items-center gap-2">
            <User size={16} />
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-bone mb-2 flex items-center gap-2">
            <Phone size={16} />
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-bone mb-2 flex items-center gap-2">
          <Mail size={16} />
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper"
        />
      </div>

      {/* Special Notes */}
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-bone mb-2">
          Special Requests or Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Any specific requests or important details..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-copper text-bone py-3 px-6 rounded-lg hover:bg-copper/90 disabled:bg-charcoal transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
            Submitting...
          </>
        ) : (
          'Book Appointment'
        )}
      </button>
    </form>
  );
};