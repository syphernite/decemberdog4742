import React from 'react';
import { Heart, Leaf, Users } from 'lucide-react';

const Story: React.FC = () => {
  return (
    <section className="py-16 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-coffee-800 mb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Born from a passion for exceptional coffee and community connection
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Coffee roasting process"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 2018, River Roast Café began as a dream to create more than just another coffee shop. 
              We envisioned a space where neighbors become friends, where the aroma of freshly roasted beans 
              mingles with laughter and conversation.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our commitment to excellence starts with sourcing the finest beans directly from sustainable farms 
              around the world. We roast in small batches to ensure every cup captures the unique character and 
              story of its origin.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="bg-sage-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="font-semibold text-coffee-800 mb-2">Community</h3>
                <p className="text-sm text-gray-600">Building connections one cup at a time</p>
              </div>

              <div className="text-center">
                <div className="bg-sage-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="font-semibold text-coffee-800 mb-2">Sustainability</h3>
                <p className="text-sm text-gray-600">Ethically sourced, locally supported</p>
              </div>

              <div className="text-center">
                <div className="bg-sage-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="font-semibold text-coffee-800 mb-2">Quality</h3>
                <p className="text-sm text-gray-600">Crafted with passion and precision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;