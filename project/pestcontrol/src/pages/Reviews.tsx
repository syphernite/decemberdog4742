import React from 'react';
import { Star, Clock, Shield, CheckCircle } from 'lucide-react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: 'Sarah M.',
      location: 'Downtown District',
      rating: 5,
      date: '3 days ago',
      emergency: true,
      responseTime: '28 minutes',
      title: 'INCREDIBLE EMERGENCY RESPONSE!',
      review: 'Had a massive wasp nest right by my front door. Called StrikeForce at 2 PM and they were here in 28 minutes! The technician was professional, fast, and completely eliminated the threat. My kids could play outside safely that same evening.',
      service: 'Wasp Nest Removal',
      verified: true
    },
    {
      name: 'Michael R.',
      location: 'Riverside Commercial',
      rating: 5,
      date: '1 week ago',
      emergency: true,
      responseTime: '45 minutes',
      title: 'SAVED MY RESTAURANT!',
      review: 'Discovered cockroaches in my kitchen during dinner rush. StrikeForce arrived within 45 minutes and handled everything discretely. No customers noticed, and the problem was completely solved. They saved my business!',
      service: 'Commercial Cockroach Treatment',
      verified: true
    },
    {
      name: 'Jennifer L.',
      location: 'Maple Heights',
      rating: 5,
      date: '2 weeks ago',
      emergency: true,
      responseTime: '35 minutes',
      title: 'TERMITE CRISIS RESOLVED',
      review: 'Found termite swarmers throughout my home. Panicked and called StrikeForce. They responded immediately, assessed the damage, and started treatment the same day. Professional, thorough, and gave me peace of mind.',
      service: 'Termite Emergency Treatment',
      verified: true
    },
    {
      name: 'David K.',
      location: 'Oak Valley',
      rating: 5,
      date: '3 weeks ago',
      emergency: false,
      responseTime: 'Scheduled',
      title: 'QUARTERLY SERVICE EXCELLENCE',
      review: 'Been using StrikeForce for quarterly service for 2 years. Never had a single pest issue since starting with them. Technicians are always on time, thorough, and explain everything clearly.',
      service: 'Quarterly Defense Plan',
      verified: true
    },
    {
      name: 'Lisa T.',
      location: 'Pine Ridge',
      rating: 5,
      date: '1 month ago',
      emergency: true,
      responseTime: '52 minutes',
      title: 'BED BUG NIGHTMARE ENDED',
      review: 'Woke up covered in bites - bed bugs! StrikeForce came out immediately and did a full heat treatment. Followed up twice to ensure complete elimination. Finally sleeping peacefully again!',
      service: 'Bed Bug Heat Treatment',
      verified: true
    },
    {
      name: 'Robert H.',
      location: 'Cedar Springs',
      rating: 5,
      date: '1 month ago',
      emergency: true,
      responseTime: '38 minutes',
      title: 'RODENT INVASION STOPPED',
      review: 'Mice were taking over my garage and getting into the house. StrikeForce arrived fast, sealed all entry points, and set up a comprehensive treatment plan. Haven\'t seen a single mouse since!',
      service: 'Emergency Rodent Control',
      verified: true
    }
  ];

  const averageRating = 5.0;
  const totalReviews = 847;

  const handleCallNow = () => {
    window.location.href = 'tel:+1-555-STRIKE-1';
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-strike-black to-strike-steel py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline font-bold text-4xl md:text-6xl text-white mb-6">
            MISSION <span className="text-strike-red">ACCOMPLISHED</span>
          </h1>
          <p className="font-body text-xl text-gray-200 max-w-3xl mx-auto">
            Real testimonials from satisfied customers who experienced our rapid response 
            and professional pest elimination services.
          </p>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="py-12 bg-white border-b-4 border-strike-red">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-headline font-bold text-4xl text-strike-red mb-2">
                  {averageRating}
                </div>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <div className="font-body text-gray-600">Average Rating</div>
              </div>
              
              <div>
                <div className="font-headline font-bold text-4xl text-strike-red mb-2">
                  {totalReviews}
                </div>
                <div className="font-body text-gray-600">Total Reviews</div>
              </div>
              
              <div>
                <div className="font-headline font-bold text-4xl text-strike-red mb-2">
                  43
                </div>
                <div className="font-body text-gray-600">Avg. Response (Min)</div>
              </div>
              
              <div>
                <div className="font-headline font-bold text-4xl text-strike-red mb-2">
                  99%
                </div>
                <div className="font-body text-gray-600">Problem Solved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-strike-black text-center mb-12">
            CUSTOMER <span className="text-strike-red">TESTIMONIALS</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white border-4 border-strike-black hover:border-strike-red transition-all duration-300 p-8 animate-zoom-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-headline font-bold text-lg text-strike-black">
                        {review.name}
                      </h3>
                      {review.verified && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                    <div className="font-body text-sm text-gray-600">
                      {review.location} • {review.date}
                    </div>
                  </div>
                  
                  {review.emergency && (
                    <div className="bg-strike-red px-3 py-1">
                      <span className="font-headline font-bold text-white text-xs">
                        EMERGENCY
                      </span>
                    </div>
                  )}
                </div>

                {/* Rating & Response Time */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                  
                  {review.emergency && (
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-strike-red" />
                      <span className="font-body font-bold text-sm text-strike-red">
                        {review.responseTime}
                      </span>
                    </div>
                  )}
                </div>

                {/* Review Title */}
                <h4 className="font-headline font-bold text-xl text-strike-black mb-3">
                  {review.title}
                </h4>

                {/* Review Text */}
                <p className="font-body text-gray-700 mb-4 leading-relaxed">
                  "{review.review}"
                </p>

                {/* Service Type */}
                <div className="bg-gray-100 px-4 py-2 inline-block">
                  <span className="font-body font-bold text-sm text-strike-black">
                    Service: {review.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlighted Emergency Reviews */}
      <section className="py-16 bg-strike-black">
        <div className="container mx-auto px-4">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-white text-center mb-12">
            EMERGENCY <span className="text-strike-red">SUCCESS STORIES</span>
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-strike-red p-6 mb-6 inline-block">
                  <Clock className="h-12 w-12 text-white" />
                </div>
                <blockquote className="font-body text-white text-lg italic mb-4">
                  "They came in 30 minutes on a Sunday night! Saved my family from a dangerous wasp situation."
                </blockquote>
                <div className="font-headline font-bold text-strike-red">
                  - Emergency Response Testimonial
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-strike-red p-6 mb-6 inline-block">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <blockquote className="font-body text-white text-lg italic mb-4">
                  "Professional, fast, and thorough. They didn't just treat the symptoms - they solved the problem."
                </blockquote>
                <div className="font-headline font-bold text-strike-red">
                  - Quality Service Testimonial
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-strike-red p-6 mb-6 inline-block">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <blockquote className="font-body text-white text-lg italic mb-4">
                  "Guaranteed results and they delivered. No more pest problems and I sleep peacefully now."
                </blockquote>
                <div className="font-headline font-bold text-strike-red">
                  - Results Guarantee Testimonial
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-strike-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline font-bold text-4xl text-white mb-6">
            JOIN OUR SATISFIED CUSTOMERS
          </h2>
          <p className="font-body text-xl text-white mb-8 max-w-3xl mx-auto">
            Experience the same rapid response and professional service that earned us these outstanding reviews.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <button
              onClick={handleCallNow}
              className="bg-white hover:bg-strike-black border-4 border-white text-strike-red hover:text-white px-8 py-4 font-headline font-bold text-xl transition-all duration-300"
            >
              GET EMERGENCY SERVICE
            </button>
            
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-transparent hover:bg-white border-4 border-white text-white hover:text-strike-red px-8 py-4 font-headline font-bold text-xl transition-all duration-300"
            >
              SCHEDULE INSPECTION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;