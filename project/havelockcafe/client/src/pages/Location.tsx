import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Navigation as NavigationIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Location() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4" data-testid="badge-location">
              Find Us
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hours & Location
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're located in the heart of Havelock, ready to serve you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-0 overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.8!2d-76.9013!3d34.8789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDUyJzQ0LjAiTiA3NsKwNTQnMDQuNyJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Havelock Cafe Location"
                  data-testid="map-location"
                ></iframe>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6" data-testid="card-address">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Address</h3>
                    <p className="text-muted-foreground mb-3">
                      1000 E Main St<br />
                      Havelock, NC 28532
                    </p>
                    <Button variant="outline" size="sm" asChild data-testid="button-directions">
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=1000+E+Main+St,Havelock,NC+28532"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <NavigationIcon className="w-4 h-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6" data-testid="card-hours">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4">Hours of Operation</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Monday - Friday</span>
                        <span className="text-muted-foreground">7:00 AM - 3:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Saturday</span>
                        <span className="text-muted-foreground">7:00 AM - 3:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sunday</span>
                        <span className="text-muted-foreground">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6" data-testid="card-contact">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <a
                      href="tel:252-652-6115"
                      className="text-lg text-primary hover:underline"
                      data-testid="link-phone"
                    >
                      (252) 652-6115
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Call us for takeout orders or questions
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-8 bg-muted">
            <h3 className="text-2xl font-semibold mb-4 text-center">Parking & Accessibility</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Parking</h4>
                <p>Free parking available in our lot and on the street. Easy access from E Main St.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Accessibility</h4>
                <p>Wheelchair accessible entrance and seating. We're here to serve everyone comfortably.</p>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
