import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Havelock Cafe
            </h3>
            <p className="text-muted-foreground mb-4">
              Your neighborhood spot for fresh breakfast and lunch in Havelock, NC.
            </p>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="button-facebook"
              >
                <a href="#" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="button-instagram"
              >
                <a href="#" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/menu"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-menu"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/location"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-location"
                >
                  Hours & Location
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Hours</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Mon - Sat</p>
                  <p>7:00 AM - 3:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Sunday</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>1000 E Main St<br />Havelock, NC 28532</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:252-652-6115"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-phone"
                >
                  (252) 652-6115
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:info@havelockcafe.com"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-email"
                >
                  info@havelockcafe.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Havelock Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
