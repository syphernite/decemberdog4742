import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Check } from 'lucide-react';
import Button from '../components/Button';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    requests: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store to localStorage for demo
    const reservation = {
      ...formData,
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    };
    
    const existingReservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    localStorage.setItem('reservations', JSON.stringify([...existingReservations, reservation]));
    
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.TargetEvent) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="min-h-screen pt-20 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="max-w-md mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="w-20 h-20 bg-nopal rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-papel" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-3xl font-display font-bold text-charcoal mb-4">
              ¡Reservación Confirmada!
            </h1>
            <p className="text-charcoal/70 mb-6">
              Your table has been reserved for {formData.guests} guests on {formData.date} at {formData.time}.
            </p>
            <p className="text-sm text-charcoal/60 mb-8">
              We'll send a confirmation email to {formData.email}
            </p>
            <Button onClick={() => {setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: '', requests: '' }); setCurrentStep(1)}}>
              Make Another Reservation
            </Button>
          </motion.div>

          {/* Confetti Animation */}
          <div className="fixed inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-marigold rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: -20,
                  rotate: 0
                }}
                animate={{
                  y: window.innerHeight + 20,
                  rotate: 360,
                  x: Math.random() * window.innerWidth
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen pt-20 pb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal mb-4">
            Reserve Your <span className="text-chili">Table</span>
          </h1>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience. Book your table and let us welcome you to the familia.
          </p>
        </motion.div>

        {/* OpenTable Integration Option */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center">
            <h2 className="text-2xl font-display font-bold text-charcoal mb-4">
              Quick Booking
            </h2>
            <p className="text-charcoal/70 mb-6">
              Reserve instantly through our partner
            </p>
            <Button variant="primary" size="lg" className="mb-4">
              Book with OpenTable
            </Button>
            <p className="text-sm text-charcoal/60">
              Or use our form below for special requests
            </p>
          </div>
        </motion.div>

        {/* Step indicator */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step <= currentStep
                      ? 'bg-chili text-papel'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-12 h-0.5 ${
                      step < currentStep ? 'bg-chili' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reservation Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-display font-bold text-charcoal mb-6">
                When would you like to dine?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-chili" />
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chili"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-chili" />
                    Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chili"
                    required
                  >
                    <option value="">Select Time</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="5:30 PM">5:30 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                    <option value="6:30 PM">6:30 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="7:30 PM">7:30 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                    <option value="8:30 PM">8:30 PM</option>
                    <option value="9:00 PM">9:00 PM</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-chili" />
                    Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chili"
                  >
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  type="button" 
                  onClick={() => setCurrentStep(2)}
                  disabled={!formData.date || !formData.time}
                >
                  Next Step
                </Button>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-display font-bold text-charcoal mb-6">
                Tell us about yourself
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chili"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chili"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chili"
                  required
                />
              </div>
              
              <div className="flex justify-between">
                <Button 
                  type="button" 
                  variant="secondary"
                  onClick={() => setCurrentStep(1)}
                >
                  Previous
                </Button>
                <Button 
                  type="button" 
                  onClick={() => setCurrentStep(3)}
                  disabled={!formData.name || !formData.email || !formData.phone}
                >
                  Next Step
                </Button>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-display font-bold text-charcoal mb-6">
                Final touches
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Special Occasion (optional)
                </label>
                <select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chili"
                >
                  <option value="">None</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="date">Date Night</option>
                  <option value="business">Business Dinner</option>
                  <option value="celebration">Celebration</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Special Requests (optional)
                </label>
                <textarea
                  name="requests"
                  value={formData.requests}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Dietary restrictions, seating preferences, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chili resize-none"
                />
              </div>
              
              {/* Summary */}
              <div className="bg-papel/50 p-6 rounded-lg">
                <h4 className="font-semibold text-charcoal mb-3">Reservation Summary</h4>
                <div className="text-sm text-charcoal/70 space-y-1">
                  <p><strong>Date:</strong> {formData.date}</p>
                  <p><strong>Time:</strong> {formData.time}</p>
                  <p><strong>Party Size:</strong> {formData.guests} guests</p>
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Contact:</strong> {formData.email}</p>
                  {formData.occasion && <p><strong>Occasion:</strong> {formData.occasion}</p>}
                </div>
              </div>
              
              <div className="flex justify-between">
                <Button 
                  type="button" 
                  variant="secondary"
                  onClick={() => setCurrentStep(2)}
                >
                  Previous
                </Button>
                <Button type="submit">
                  Confirm Reservation
                </Button>
              </div>
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Reservations;