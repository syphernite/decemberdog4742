import React, { useState } from 'react';
import { Phone, Clock, MapPin, AlertTriangle, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pestProblem: '',
    urgency: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [estimatedArrival, setEstimatedArrival] = useState('');

  const handleCallNow = () => {
    window.location.href = 'tel:+1-555-STRIKE-1';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Update estimated arrival based on urgency
    if (name === 'urgency') {
      switch (value) {
        case 'within-1-hour':
          setEstimatedArrival('30-60 minutes');
          break;
        case 'same-day':
          setEstimatedArrival('2-6 hours');
          break;
        case 'schedule':
          setEstimatedArrival('24-48 hours');
          break;
        default:
          setEstimatedArrival('');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const pestProblems = [
    'Rodents (Mice/Rats)',
    'Cockroaches',
    'Termites',
    'Bed Bugs',
    'Wasps/Hornets',
    'Ants',
    'Spiders',
    'Fleas',
    'Multiple Pests',
    'Unknown/Not Sure'
  ];

  const urgencyOptions = [
    { value: 'within-1-hour', label: 'EMERGENCY - Within 1 Hour', color: 'text-red-600' },
    { value: 'same-day', label: 'URGENT - Same Day Service', color: 'text-orange-600' },
    { value: 'schedule', label: 'SCHEDULE - Within 24-48 Hours', color: 'text-green-600' }
  ];

  if (isSubmitted) {
    return (
      <div className="pt-8 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white border-4 border-green-500 p-8 mb-8">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h1 className="font-headline font-bold text-4xl text-strike-black mb-4">
              REQUEST <span className="text-green-500">RECEIVED</span>
            </h1>
            <p className="font-body text-lg text-gray-700 mb-6">
              Your emergency request has been dispatched to our rapid response team. 
              A certified technician will contact you within 5 minutes to confirm details 
              and provide arrival time.
            </p>
            
            <div className="bg-strike-red text-white p-6 mb-6">
              <h3 className="font-headline font-bold text-xl mb-2">NEXT STEPS</h3>
              <ul className="font-body text-left space-y-2">
                <li>• Technician will call you within 5 minutes</li>
                <li>• GPS tracking link will be sent via text</li>
                <li>• Please keep your phone accessible</li>
                <li>• Estimated arrival: {estimatedArrival || 'TBD'}</li>
              </ul>
            </div>
            
            <button
              onClick={handleCallNow}
              className="bg-strike-red hover:bg-strike-black text-white px-8 py-4 font-headline font-bold text-xl transition-all duration-300 mb-4"
            >
              SPEAK TO DISPATCH NOW
            </button>
            
            <p className="font-body text-sm text-gray-600">
              Need to make changes? Call our 24/7 hotline: (555) STRIKE-1
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-strike-black to-strike-steel py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline font-bold text-4xl md:text-6xl text-white mb-6">
            EMERGENCY <span className="text-strike-red">DISPATCH</span>
          </h1>
          <p className="font-body text-xl text-gray-200 max-w-3xl mx-auto">
            Get immediate professional pest control response. Fill out the form below 
            or call our 24/7 hotline for instant dispatch.
          </p>
        </div>
      </section>

      {/* Emergency Hotline Banner */}
      <section className="py-6 bg-strike-red">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="font-headline font-bold text-white text-2xl mb-2">
                IMMEDIATE EMERGENCY HOTLINE
              </h3>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <Clock className="h-6 w-6 text-white animate-flash" />
                <span className="font-body text-white text-lg">
                  24/7/365 • Average answer time: 12 seconds
                </span>
              </div>
            </div>
            
            <button
              onClick={handleCallNow}
              className="bg-white hover:bg-strike-black border-4 border-white text-strike-red hover:text-white px-8 py-4 font-headline font-bold text-2xl transition-all duration-300 animate-pulse-glow"
            >
              (555) STRIKE-1
            </button>
          </div>
        </div>
      </section>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border-4 border-strike-black p-8">
                <h2 className="font-headline font-bold text-3xl text-strike-black mb-6">
                  EMERGENCY <span className="text-strike-red">REQUEST FORM</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block font-body font-bold text-strike-black mb-2">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-4 border-strike-black focus:border-strike-red px-4 py-3 font-body text-lg transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block font-body font-bold text-strike-black mb-2">
                      PHONE NUMBER * (Required for callback)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-4 border-strike-black focus:border-strike-red px-4 py-3 font-body text-lg transition-colors duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Address Field */}
                  <div>
                    <label htmlFor="address" className="block font-body font-bold text-strike-black mb-2">
                      PROPERTY ADDRESS *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full border-4 border-strike-black focus:border-strike-red px-4 py-3 font-body text-lg transition-colors duration-300"
                      placeholder="Street address, city, state, zip"
                    />
                  </div>

                  {/* Pest Problem */}
                  <div>
                    <label htmlFor="pestProblem" className="block font-body font-bold text-strike-black mb-2">
                      PEST PROBLEM *
                    </label>
                    <select
                      id="pestProblem"
                      name="pestProblem"
                      required
                      value={formData.pestProblem}
                      onChange={handleChange}
                      className="w-full border-4 border-strike-black focus:border-strike-red px-4 py-3 font-body text-lg transition-colors duration-300"
                    >
                      <option value="">Select pest type</option>
                      {pestProblems.map((pest) => (
                        <option key={pest} value={pest}>{pest}</option>
                      ))}
                    </select>
                  </div>

                  {/* Urgency Level */}
                  <div>
                    <label htmlFor="urgency" className="block font-body font-bold text-strike-black mb-2">
                      URGENCY LEVEL *
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      required
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full border-4 border-strike-black focus:border-strike-red px-4 py-3 font-body text-lg transition-colors duration-300"
                    >
                      <option value="">Select urgency level</option>
                      {urgencyOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label htmlFor="notes" className="block font-body font-bold text-strike-black mb-2">
                      ADDITIONAL DETAILS
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={4}
                      className="w-full border-4 border-strike-black focus:border-strike-red px-4 py-3 font-body text-lg transition-colors duration-300"
                      placeholder="Describe the severity, location, or any other important details..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-strike-red hover:bg-strike-black border-4 border-strike-red text-white py-4 font-headline font-bold text-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <AlertTriangle className="h-6 w-6" />
                    <span>SEND EMERGENCY REQUEST</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech Tracker Widget */}
              <div className="bg-strike-black border-4 border-strike-red p-6">
                <h3 className="font-headline font-bold text-white text-xl mb-4">
                  TECH TRACKER
                </h3>
                
                {estimatedArrival ? (
                  <div className="space-y-4">
                    <div className="bg-strike-red p-4">
                      <div className="font-headline font-bold text-white text-lg">
                        ESTIMATED ARRIVAL
                      </div>
                      <div className="font-body text-white text-2xl">
                        {estimatedArrival}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="font-body text-white text-sm">Request received</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-yellow-400 animate-flash" />
                        <span className="font-body text-white text-sm">Technician dispatched</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-gray-400" />
                        <span className="font-body text-gray-400 text-sm">En route</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <Clock className="h-12 w-12 text-strike-red mx-auto mb-4" />
                    <p className="font-body text-gray-300">
                      Select urgency level to see estimated arrival time
                    </p>
                  </div>
                )}
              </div>

              {/* Contact Info */}
              <div className="bg-white border-4 border-strike-black p-6">
                <h3 className="font-headline font-bold text-strike-black text-xl mb-4">
                  DIRECT CONTACT
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-strike-red" />
                    <div>
                      <div className="font-body font-bold text-strike-black">
                        24/7 Emergency Hotline
                      </div>
                      <div className="font-body text-gray-600">
                        (555) STRIKE-1
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-strike-red" />
                    <div>
                      <div className="font-body font-bold text-strike-black">
                        Service Coverage
                      </div>
                      <div className="font-body text-gray-600">
                        20+ Cities • 24/7 Response
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-strike-red" />
                    <div>
                      <div className="font-body font-bold text-strike-black">
                        Average Response
                      </div>
                      <div className="font-body text-gray-600">
                        43 minutes or less
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-strike-red border-4 border-white p-6">
                <h3 className="font-headline font-bold text-white text-xl mb-4">
                  SERVICE GUARANTEE
                </h3>
                <ul className="space-y-3 font-body text-white">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                    <span>Licensed & insured technicians</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                    <span>100% satisfaction guaranteed</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                    <span>Free return visits if needed</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                    <span>Written service reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;