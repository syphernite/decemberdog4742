import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Upload, User, Mail, Phone, DollarSign, MapPin, Clock, Skull, Zap, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { fadeUp, glitchIn, bloodDrip, smokeRise } from '../utils/animations';

interface FormData {
  name: string;
  email: string;
  phone: string;
  artist: string;
  style: string;
  size: string;
  placement: string;
  budget: string;
  description: string;
  preferredDates: string;
  hasReference: boolean;
  agreeToDeposit: boolean;
}

const Booking: React.FC = () => {
  const [ref, isInView] = useInView(0.1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    artist: '',
    style: '',
    size: '',
    placement: '',
    budget: '',
    description: '',
    preferredDates: '',
    hasReference: false,
    agreeToDeposit: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const artists = ['Marcus Chen', 'Sofia Rivera', 'Jake Morrison', 'Any Available'];
  const styles = ['Traditional', 'Neo-traditional', 'Blackwork', 'Fine Line', 'Color Realism', 'Geometric', 'Japanese', 'Other'];
  const sizes = ['Small (2-3 inches)', 'Medium (4-6 inches)', 'Large (7-10 inches)', 'Extra Large (10+ inches)'];
  const budgets = ['$100-300', '$300-600', '$600-1000', '$1000+', 'Discuss with artist'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-ink-900 pt-20 flex items-center justify-center">
        <motion.div
          variants={smokeRise}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <CheckCircle className="w-24 h-24 text-blood-600 mx-auto mb-6 animate-pulse-glow" />
          <h1 className="font-display font-bold text-4xl text-bone-100 mb-4 text-glow-white">
            WE GOT IT
          </h1>
          <p className="text-xl text-stone-400 mb-8 font-gothic">
            ⚡ Check your inbox for confirmation ⚡
          </p>
          <div className="bg-stone-800/50 rounded-large p-6 border border-blood-600/30">
            <h2 className="font-gothic font-semibold text-bone-100 mb-4">What happens next?</h2>
            <div className="space-y-3 text-stone-300 text-left">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blood-600 mr-3" />
                <span>Confirmation email sent within 5 minutes</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blood-600 mr-3" />
                <span>Artist will contact you within 24 hours</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-blood-600 mr-3" />
                <span>Schedule consultation & deposit payment</span>
              </div>
              <div className="flex items-center">
                <Skull className="w-5 h-5 text-blood-600 mr-3" />
                <span>Get inked with intention</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

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
            <Calendar className="w-16 h-16 mx-auto mb-4 text-blood-600 animate-pulse-glow" />
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-bone-100 text-glow-white">
              BOOK YOUR <span className="text-blood-600 text-glow animate-pulse-glow">SESSION</span>
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
            ⚡ Ready to get inked? Fill out the form below ⚡
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
      <section ref={ref} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            onSubmit={handleSubmit}
            className="bg-stone-800/50 rounded-large p-8 border border-stone-700 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Info */}
              <div className="space-y-6">
                <h2 className="font-display font-bold text-2xl text-bone-100 text-glow-white flex items-center">
                  <User className="w-6 h-6 mr-3 text-blood-600" />
                  PERSONAL INFO
                </h2>
                
                <div>
                  <label className="block text-stone-300 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-ink-900 border border-stone-600 rounded-medium text-bone-100 focus:border-blood-600 focus:ring-1 focus:ring-blood-600 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-ink-900 border border-stone-600 rounded-medium text-bone-100 focus:border-blood-600 focus:ring-1 focus:ring-blood-600 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-ink-900 border border-stone-600 rounded-medium text-bone-100 focus:border-blood-600 focus:ring-1 focus:ring-blood-600 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-2">Preferred Artist</label>
                  <select
                    name="artist"
                    value={formData.artist}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-ink-900 border border-stone-600 rounded-medium text-bone-100 focus:border-blood-600 focus:ring-1 focus:ring-blood-600 transition-colors"
                  >
                    <option value="">Select an artist</option>
                    {artists.map(artist => (
                      <option key={artist} value={artist}>{artist}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tattoo Details */}
              <div className="space-y-6">
                <h2 className="font-display font-bold text-2xl text-bone-100 text-glow-white flex items-center">
                  <Skull className="w-6 h-6 mr-3 text-blood-600 animate-pulse" />
                  TATTOO DETAILS
                </h2>

                <div>
                  <label className="block text-stone-300 font-medium mb-2">Style *</label>
                  <select
                    name="style"
                    value={formData.style}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-ink-900 border border-stone-600 rounded-medium text-bone-100 focus:border-blood-600 focus:ring-1 focus:ring-blood-600 transition-colors"
                  >
                    <option value="">Select a style</option>
                    {styles.map(style => (
                      <option key={style} value={style}>{style}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-2">Size *</label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-ink-900 border border-stone-600 rounded-medium text-bone-100 focus:border-blood-600 focus:ring-1 focus:ring-blood-600 transition-colors"
                  >
                    <option value="">Select size</option>
                    {sizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-2">Placement *</label>
                  <input
                    type="text"
                    name="placement"
                    value={formData.placement}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-ink-900 border border-stone-600 rounded-medium text-bone-100 focus:border-blood-600 focus:ring-1 focus:ring-blood-600 transition-colors"
                    placeholder="e.g., forearm, shoulder, back"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-ink-900 border border-stone-600 rounded-medium text-bone-100 focus:border-blood-600 focus:ring-1 focus:ring-blood-600 transition-colors"
                  >
                    <option value="">Select budget range</option>
                    {budgets.map(budget => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <label className="block text-stone-300 font-medium mb-2">Describe Your Vision *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-ink-900 border border-stone-600 rounded-medium text-bone-100 focus:border-blood-600 focus:ring-1 focus:ring-blood-600 transition-colors resize-none"
                placeholder="Tell us about your tattoo idea, inspiration, colors, etc."
              />
            </div>

            {/* Preferred Dates */}
            <div className="mt-6">
              <label className="block text-stone-300 font-medium mb-2">Preferred Dates/Times</label>
              <textarea
                name="preferredDates"
                value={formData.preferredDates}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-4 py-3 bg-ink-900 border border-stone-600 rounded-medium text-bone-100 focus:border-blood-600 focus:ring-1 focus:ring-blood-600 transition-colors resize-none"
                placeholder="Let us know your availability"
              />
            </div>

            {/* Reference Upload */}
            <div className="mt-6">
              <div className="flex items-center space-x-3 mb-4">
                <input
                  type="checkbox"
                  name="hasReference"
                  checked={formData.hasReference}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blood-600 bg-ink-900 border-stone-600 rounded focus:ring-blood-600"
                />
                <label className="text-stone-300 font-medium">I have reference images</label>
              </div>
              {formData.hasReference && (
                <div className="border-2 border-dashed border-stone-600 rounded-medium p-6 text-center hover:border-blood-600 transition-colors">
                  <Upload className="w-8 h-8 text-stone-400 mx-auto mb-2" />
                  <p className="text-stone-400 text-sm">
                    Drag & drop images here or click to browse
                  </p>
                  <p className="text-stone-500 text-xs mt-1">
                    Max 5 files, 10MB each
                  </p>
                </div>
              )}
            </div>

            {/* Deposit Agreement */}
            <div className="mt-8 p-4 bg-blood-600/10 border border-blood-600/30 rounded-medium">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToDeposit"
                  checked={formData.agreeToDeposit}
                  onChange={handleInputChange}
                  required
                  className="w-4 h-4 text-blood-600 bg-ink-900 border-stone-600 rounded focus:ring-blood-600 mt-1"
                />
                <div className="text-sm">
                  <label className="text-bone-100 font-medium block mb-1">
                    Deposit Agreement *
                  </label>
                  <p className="text-stone-300">
                    I understand that a $50 deposit is required to secure my appointment. 
                    This deposit will be applied to the final cost of my tattoo. 
                    Deposits are non-refundable but can be transferred to a new appointment with 24-hour notice.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-12 py-4 bg-blood-600 text-bone-100 rounded-large font-bold text-xl hover:bg-blood-700 transition-all duration-300 glow-accent animate-pulse-glow hover:animate-shake disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-bone-100 mr-3"></div>
                    SUBMITTING...
                  </>
                ) : (
                  <>
                    <Skull className="w-6 h-6 mr-3 animate-bounce" />
                    SUBMIT BOOKING REQUEST
                    <Zap className="w-6 h-6 ml-3 animate-pulse" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Booking;