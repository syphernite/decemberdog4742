import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Mail, Phone, MapPin, Car } from 'lucide-react';

interface Package {
  name: string;
  prices: { sedan: number; suv: number; truck: number };
}

interface AddOn {
  name: string;
  price: number;
}

interface BookingFormProps {
  packages: Package[];
  addOns: AddOn[];
}

const BookingForm: React.FC<BookingFormProps> = ({ packages, addOns }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleType: 'sedan',
    package: '',
    addOns: [] as string[],
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddOnChange = (addOnName: string) => {
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addOnName)
        ? prev.addOns.filter(a => a !== addOnName)
        : [...prev.addOns, addOnName]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your booking request! We\'ll contact you within 24 hours to confirm your appointment.');
  };

  const getPackagePrice = () => {
    const selectedPackage = packages.find(p => p.name === formData.package);
    if (!selectedPackage) return 0;
    return selectedPackage.prices[formData.vehicleType as keyof typeof selectedPackage.prices];
  };

  const getAddOnsTotal = () => {
    return formData.addOns.reduce((total, addOnName) => {
      const addOn = addOns.find(a => a.name === addOnName);
      return total + (addOn?.price || 0);
    }, 0);
  };

  const totalPrice = getPackagePrice() + getAddOnsTotal();

  return (
    <motion.form
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-gray-800 rounded-lg p-8 space-y-6"
    >
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <User className="inline h-4 w-4 mr-1" />
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <Mail className="inline h-4 w-4 mr-1" />
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <Phone className="inline h-4 w-4 mr-1" />
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <MapPin className="inline h-4 w-4 mr-1" />
            Service Address *
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="123 Main Street"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">City *</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="City"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">ZIP Code *</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleInputChange}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="12345"
          />
        </div>
      </div>

      {/* Vehicle Information */}
      <div className="border-t border-gray-600 pt-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Car className="h-5 w-5 mr-2" />
          Vehicle Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Year *</label>
            <input
              type="number"
              name="vehicleYear"
              value={formData.vehicleYear}
              onChange={handleInputChange}
              required
              min="1990"
              max="2025"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="2020"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Make *</label>
            <input
              type="text"
              name="vehicleMake"
              value={formData.vehicleMake}
              onChange={handleInputChange}
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Toyota"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Model *</label>
            <input
              type="text"
              name="vehicleModel"
              value={formData.vehicleModel}
              onChange={handleInputChange}
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Camry"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">Vehicle Type *</label>
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleInputChange}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
          >
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="truck">Truck</option>
          </select>
        </div>
      </div>

      {/* Package Selection */}
      <div className="border-t border-gray-600 pt-6">
        <h3 className="text-xl font-semibold mb-4">Select Package *</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {packages.map((pkg) => (
            <label
              key={pkg.name}
              className={`cursor-pointer p-4 rounded-lg border-2 transition-colors ${
                formData.package === pkg.name
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-gray-600 bg-gray-700 hover:border-gray-500'
              }`}
            >
              <input
                type="radio"
                name="package"
                value={pkg.name}
                checked={formData.package === pkg.name}
                onChange={handleInputChange}
                className="sr-only"
              />
              <div className="flex justify-between items-center">
                <span className="font-semibold">{pkg.name}</span>
                <span className="text-blue-500 font-bold">
                  ${pkg.prices[formData.vehicleType as keyof typeof pkg.prices]}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Add-ons */}
      <div className="border-t border-gray-600 pt-6">
        <h3 className="text-xl font-semibold mb-4">Add-On Services (Optional)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addOns.map((addOn) => (
            <label
              key={addOn.name}
              className={`cursor-pointer p-4 rounded-lg border-2 transition-colors ${
                formData.addOns.includes(addOn.name)
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-gray-600 bg-gray-700 hover:border-gray-500'
              }`}
            >
              <input
                type="checkbox"
                checked={formData.addOns.includes(addOn.name)}
                onChange={() => handleAddOnChange(addOn.name)}
                className="sr-only"
              />
              <div className="flex justify-between items-center">
                <span>{addOn.name}</span>
                <span className="text-blue-500 font-bold">+${addOn.price}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Scheduling */}
      <div className="border-t border-gray-600 pt-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Calendar className="h-5 w-5 mr-2" />
          Preferred Schedule
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Date</label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Time</label>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option value="">Select time</option>
              <option value="8:00 AM">8:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Additional Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          rows={4}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
          placeholder="Special requests, parking instructions, etc..."
        />
      </div>

      {/* Total */}
      {totalPrice > 0 && (
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex justify-between items-center text-xl font-semibold">
            <span>Total Estimate:</span>
            <span className="text-blue-500">${totalPrice}</span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Final price confirmed upon inspection. 50% deposit required.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
      >
        Submit Booking Request
      </motion.button>
    </motion.form>
  );
};

export default BookingForm;