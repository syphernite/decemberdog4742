import { MapPin, Phone, Coffee } from 'lucide-react';

export default function Visit() {
  return (
    <section id="visit" className="py-20 px-4 bg-[#F5F3EE]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-chalk text-4xl sm:text-5xl text-[#6B5B3E] mb-6">
            Come Visit Us
          </h2>
          <div className="w-24 h-1 bg-[#F4C430] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="font-chalk text-3xl text-[#6B5B3E] mb-6">Location & Hours</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#F4C430] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-[#6B5B3E] font-medium mb-1">Address</p>
                  <p className="text-[#8B6F47]">
                    1000 E Main St<br />
                    Havelock, NC 28532
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-[#F4C430] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-[#6B5B3E] font-medium mb-1">Phone</p>
                  <a href="tel:2526526115" className="text-[#8B6F47] hover:text-[#F4C430] transition-colors">
                    (252) 652-6115
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Coffee className="text-[#F4C430] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-[#6B5B3E] font-medium mb-1">Hours</p>
                  <p className="text-[#8B6F47]">
                    Monday - Friday: 6:00 AM - 2:00 PM<br />
                    Saturday - Sunday: 7:00 AM - 3:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=1000+E+Main+St,+Havelock,+NC+28532"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-8 py-4 bg-[#9BAA8D] text-white rounded-full font-medium text-lg text-center hover:shadow-lg hover:shadow-[#9BAA8D]/50 transition-all duration-300 transform hover:scale-105"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.234!2d-76.901234!3d34.878901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9147c0e0e0e0e%3A0x0!2s1000%20E%20Main%20St%2C%20Havelock%2C%20NC%2028532!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Havelock Cafe Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
