import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4" data-testid="badge-contact">
              Get in Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question or feedback? We'd love to hear from you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    data-testid="input-phone"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    data-testid="textarea-message"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" data-testid="button-submit">
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6" data-testid="card-contact-info">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        1000 E Main St<br />
                        Havelock, NC 28532
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href="tel:252-652-6115"
                        className="text-primary hover:underline"
                        data-testid="link-contact-phone"
                      >
                        (252) 652-6115
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:info@havelockcafe.com"
                        className="text-primary hover:underline"
                        data-testid="link-contact-email"
                      >
                        info@havelockcafe.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-muted-foreground">
                        Mon-Sat: 7:00 AM - 3:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-muted">
                <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
                <p className="text-muted-foreground mb-4">
                  We typically respond to inquiries within 24 hours during business days.
                  For immediate assistance, please call us directly.
                </p>
                <a href="tel:252-652-6115">
                  <Button variant="default" className="w-full" data-testid="button-call-now">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Frequently Asked Questions</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">Do you take reservations?</p>
                    <p className="text-muted-foreground">We operate on a first-come, first-served basis.</p>
                  </div>
                  <div>
                    <p className="font-medium">Do you offer catering?</p>
                    <p className="text-muted-foreground">Yes! Call us to discuss catering options for your event.</p>
                  </div>
                  <div>
                    <p className="font-medium">Is takeout available?</p>
                    <p className="text-muted-foreground">Absolutely! Call ahead to place your order.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
