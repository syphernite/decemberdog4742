import React, { useState } from 'react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        business: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <GlassCard className="p-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <CheckCircle className="w-16 h-16 text-green-400" />
          <h3 className="text-2xl font-bold">Message Sent!</h3>
          <p className="text-muted-foreground">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
        </motion.div>
      </GlassCard>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your business? Let's discuss your digital ecosystem.
          </p>
        </motion.div>

        <GlassCard className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                  className="glass"
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                  className="glass"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="business">Business Name *</Label>
              <Input
                id="business"
                value={formData.business}
                onChange={(e) => handleChange('business', e.target.value)}
                required
                className="glass"
                placeholder="Your business name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Service Interest</Label>
              <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                <SelectTrigger className="glass">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">Custom Website Development</SelectItem>
                  <SelectItem value="automation">Front Desk Automation</SelectItem>
                  <SelectItem value="google">Google Business Pro</SelectItem>
                  <SelectItem value="social">Social Media Management</SelectItem>
                  <SelectItem value="ads">Ad Campaigns</SelectItem>
                  <SelectItem value="seo">SEO Services</SelectItem>
                  <SelectItem value="analytics">Analytics Hub</SelectItem>
                  <SelectItem value="crm">Client Management</SelectItem>
                  <SelectItem value="scheduling">Smart Scheduling</SelectItem>
                  <SelectItem value="full">Complete Digital Ecosystem</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className="glass min-h-[120px]"
                placeholder="Tell us about your business goals and challenges..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}