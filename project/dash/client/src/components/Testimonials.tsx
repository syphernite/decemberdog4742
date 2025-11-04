import React from 'react';
import { GlassCard } from '@/components/GlassCard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    business: 'Sarah\'s Bakery',
    quote: 'Built4You transformed our online presence completely. Our website traffic increased by 300% and sales are up 150%. The dashboard makes managing everything so easy.',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    name: 'Mike Chen',
    business: 'Chen Auto Repair',
    quote: 'The automation tools saved us hours every week. Our Google Business profile is optimized perfectly, and the ad campaigns are bringing in new customers daily.',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
  },
  {
    name: 'Lisa Rodriguez',
    business: 'Rodriguez Law Firm',
    quote: 'As a law firm, trust and professionalism are everything. Built4You delivered a website that reflects our brand perfectly. The SEO improvements have us ranking #1 for local searches.',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa'
  }
];

export function Testimonials() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped small businesses thrive in the digital age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="cursor-pointer"
            >
              <GlassCard className="p-6 h-full" elevated>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}