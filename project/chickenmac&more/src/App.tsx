import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Clock, Phone, ChefHat, Star, Heart } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'about', 'visit', 'gallery'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About Us' },
    { id: 'visit', label: 'Visit Us' },
    { id: 'gallery', label: 'Gallery' }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-900/95 backdrop-blur-sm border-b border-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <ChefHat className="h-8 w-8 text-amber-200 mr-2" />
              <span className="text-xl font-bold text-amber-100">Chicken Mac & More</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-amber-200 border-b-2 border-amber-200'
                      : 'text-amber-100 hover:text-amber-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-amber-100 hover:text-amber-200 p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-amber-900 border-t border-amber-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-amber-200 bg-amber-800'
                      : 'text-amber-100 hover:text-amber-200 hover:bg-amber-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            <span className="text-amber-300">Cheese.</span>{' '}
            <span className="text-red-400">Crunch.</span>{' '}
            <span className="text-amber-200">Soul.</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8 drop-shadow-lg max-w-2xl mx-auto leading-relaxed">
            Bristol's favorite spot for loaded mac bowls, crispy chicken, and soul food sides – all the comfort and flavor you crave on one menu.
          </p>
          <button
            onClick={() => scrollToSection('menu')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-200 shadow-2xl border-2 border-red-500"
          >
            Come Hungry. Leave Happy.
          </button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-b from-amber-50 to-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-900 mb-4">Our Menu</h2>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Our mac doesn't mess around – we don't do bland
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Mac Bowls */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-200">
              <h3 className="text-3xl font-bold text-red-600 mb-6 flex items-center">
                <Heart className="h-8 w-8 mr-3" />
                Mac Bowls
              </h3>
              <div className="space-y-4">
                <div className="border-b border-amber-200 pb-4">
                  <h4 className="text-xl font-semibold text-amber-900">Classic Three-Cheese Mac</h4>
                  <p className="text-amber-700">Creamy blend of cheddar, gouda, and parmesan with crispy breadcrumb topping</p>
                </div>
                <div className="border-b border-amber-200 pb-4">
                  <h4 className="text-xl font-semibold text-amber-900">Buffalo Chicken Mac</h4>
                  <p className="text-amber-700">Spicy buffalo chicken, blue cheese crumbles, and celery salt finish</p>
                </div>
                <div className="border-b border-amber-200 pb-4">
                  <h4 className="text-xl font-semibold text-amber-900">Pulled Pork Mac</h4>
                  <p className="text-amber-700">Slow-smoked pulled pork with BBQ drizzle and crispy onions</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-amber-900">Brisket Mac Supreme</h4>
                  <p className="text-amber-700">Tender smoked brisket, jalapeños, and our signature cheese sauce</p>
                </div>
              </div>
            </div>

            {/* Meat Add-Ons */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-200">
              <h3 className="text-3xl font-bold text-red-600 mb-6 flex items-center">
                <Star className="h-8 w-8 mr-3" />
                Meat Add-Ons
              </h3>
              <div className="space-y-4">
                <div className="border-b border-amber-200 pb-4">
                  <h4 className="text-xl font-semibold text-amber-900">Crispy Fried Chicken</h4>
                  <p className="text-amber-700">Hand-breaded, golden fried chicken tenders</p>
                </div>
                <div className="border-b border-amber-200 pb-4">
                  <h4 className="text-xl font-semibold text-amber-900">Smoked Pulled Pork</h4>
                  <p className="text-amber-700">14-hour smoked pork shoulder, fall-apart tender</p>
                </div>
                <div className="border-b border-amber-200 pb-4">
                  <h4 className="text-xl font-semibold text-amber-900">BBQ Brisket</h4>
                  <p className="text-amber-700">Low and slow smoked brisket with signature dry rub</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-amber-900">Applewood Bacon</h4>
                  <p className="text-amber-700">Thick-cut, crispy applewood smoked bacon</p>
                </div>
              </div>
            </div>

            {/* Homemade Sides */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-200">
              <h3 className="text-3xl font-bold text-red-600 mb-6">Homemade Sides</h3>
              <div className="space-y-4">
                <div className="border-b border-amber-200 pb-4">
                  <h4 className="text-xl font-semibold text-amber-900">Southern Collard Greens</h4>
                  <p className="text-amber-700">Slow-cooked with smoked turkey and onions</p>
                </div>
                <div className="border-b border-amber-200 pb-4">
                  <h4 className="text-xl font-semibold text-amber-900">Smoky Baked Beans</h4>
                  <p className="text-amber-700">Brown sugar, molasses, and bacon goodness</p>
                </div>
                <div className="border-b border-amber-200 pb-4">
                  <h4 className="text-xl font-semibold text-amber-900">Buttermilk Cornbread</h4>
                  <p className="text-amber-700">Sweet and crumbly, served warm with honey butter</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-amber-900">Garlic Mashed Potatoes</h4>
                  <p className="text-amber-700">Creamy Yukon gold potatoes with roasted garlic</p>
                </div>
              </div>
            </div>

            {/* Signature Sauces */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-200">
              <h3 className="text-3xl font-bold text-red-600 mb-6">Signature Sauces</h3>
              <div className="space-y-4">
                <div className="border-b border-amber-200 pb-4">
                  <h4 className="text-xl font-semibold text-amber-900">Smoky BBQ</h4>
                  <p className="text-amber-700">Tangy tomato base with molasses and spices</p>
                </div>
                <div className="border-b border-amber-200 pb-4">
                  <h4 className="text-xl font-semibold text-amber-900">Spicy Buffalo</h4>
                  <p className="text-amber-700">Classic cayenne and butter blend with attitude</p>
                </div>
                <div className="border-b border-amber-200 pb-4">
                  <h4 className="text-xl font-semibold text-amber-900">Honey Mustard</h4>
                  <p className="text-amber-700">Sweet local honey with whole grain mustard</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-amber-900">Carolina Gold</h4>
                  <p className="text-amber-700">Mustard-based BBQ sauce with a Carolina kick</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-amber-900 text-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-amber-200">Our Story</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  What started as a humble food truck rolling through Bristol's neighborhoods has grown into the comfort food destination our community deserves. Born from a passion for authentic Southern flavors and the belief that a great meal means family, Chicken Mac and More began as one family's dream to serve soul-satisfying comfort food, one cheesy bowl at a time.
                </p>
                <p>
                  Proudly rooted in Southern tradition – where a meal means family, and every recipe has a story – we've been perfecting our craft since day one. From our signature three-cheese blend to our 14-hour smoked meats, every dish is crafted with the love and care that Southern hospitality demands.
                </p>
                <p className="text-amber-300 font-semibold text-xl">
                  "We don't just serve food – we serve memories, comfort, and the kind of satisfaction that keeps families coming back for generations."
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Food truck serving customers in Bristol community"
                className="rounded-2xl shadow-2xl border-4 border-amber-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-4 rounded-xl shadow-xl">
                <p className="font-bold text-lg">From Food Truck</p>
                <p className="font-bold text-lg">to Bristol Favorite!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section id="visit" className="py-20 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-900 mb-4">Visit Us</h2>
            <p className="text-xl text-amber-800">Come hungry – you're home at Chicken Mac and More</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-200">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-amber-900 mb-2">Location</h3>
                    <p className="text-lg text-amber-800">
                      123 State Street<br />
                      Bristol, TN 37620<br />
                      <span className="text-amber-700">Located in downtown Bristol near the Tennessee-Virginia border</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-amber-900 mb-2">Hours</h3>
                    <div className="text-lg text-amber-800 space-y-1">
                      <p>Monday - Saturday: 11:00 AM - 8:00 PM</p>
                      <p>Sunday: 12:00 PM - 6:00 PM</p>
                      <p className="text-red-600 font-semibold mt-2">Call ahead for daily specials!</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-amber-900 mb-2">Contact</h3>
                    <p className="text-lg text-amber-800">
                      <a href="tel:+1-423-555-0123" className="hover:text-red-600 transition-colors duration-200">
                        (423) 555-0123
                      </a>
                    </p>
                    <p className="text-amber-700 mt-2">
                      Plenty of parking available • Family-friendly atmosphere
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-amber-200">
              <div className="h-full min-h-[400px] bg-amber-200 flex items-center justify-center">
                <div className="text-center text-amber-800">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p className="text-sm">Find us in downtown Bristol</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-200 mb-4">What's Hot</h2>
            <p className="text-xl text-amber-100">The crunch you crave, the cheese you dream about</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Loaded Mac Bowl with BBQ Brisket and cheese sauce"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold">BBQ Brisket Mac</h3>
                <p className="text-sm">Customer Favorite</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Crispy fried chicken with golden coating"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold">Crispy Fried Chicken</h3>
                <p className="text-sm">Hand-Breaded Daily</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5737241/pexels-photo-5737241.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Southern sides sampler with collard greens and cornbread"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold">Sides Sampler</h3>
                <p className="text-sm">Southern Classics</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Buffalo chicken mac with blue cheese crumbles"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold">Buffalo Chicken Mac</h3>
                <p className="text-sm">Spicy & Creamy</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Behind the scenes kitchen action with chef preparing food"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold">Kitchen Love</h3>
                <p className="text-sm">Made Fresh Daily</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Pulled pork sandwich loaded with BBQ sauce"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold">Pulled Pork Special</h3>
                <p className="text-sm">Wednesday Feature</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-amber-200 font-semibold">
              Treat yourself – our Loaded Mac Bowls come with extra napkins and zero regrets
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-200 py-12 border-t border-amber-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <ChefHat className="h-8 w-8 text-amber-300 mr-2" />
                <span className="text-2xl font-bold text-amber-100">Chicken Mac & More</span>
              </div>
              <p className="text-amber-300 text-lg font-semibold mb-2">Cheese. Crunch. Soul.</p>
              <p className="text-amber-400">Bristol's comfort food destination</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-amber-100 mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  123 State Street, Bristol, TN 37620
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (423) 555-0123
                </p>
                <p className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Mon-Sat: 11AM-8PM, Sun: 12PM-6PM
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-amber-100 mb-4">Follow Our Journey</h3>
              <p className="text-amber-400 mb-4">
                From food truck to Bristol favorite – we're grateful for every bowl served and every smile shared.
              </p>
              <p className="text-amber-300 font-semibold">
                Come hungry. Leave happy. 🧀🍗
              </p>
            </div>
          </div>
          
          <div className="border-t border-amber-800 mt-8 pt-8 text-center">
            <p className="text-amber-400">
              © 2024 Chicken Mac and More. All rights reserved. Made with love in Bristol, Tennessee.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;