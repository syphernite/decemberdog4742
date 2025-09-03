import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import Section from '../components/Section';
import Container from '../components/Container';
import Button from '../components/Button';
import Badge from '../components/Badge';
import ImageLightbox from '../components/ImageLightbox';
import menuData from '../content/menu.json';

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Menu images for the gallery
  const menuImages = [
    { id: 1, src: '/menu-images/page-1.jpg', alt: 'Main menu page featuring appetizers and street tacos' },
    { id: 2, src: '/menu-images/page-2.jpg', alt: 'Fajitas and burritos menu page with prices' },
    { id: 3, src: '/menu-images/page-3.jpg', alt: 'Enchiladas and combo meals menu page' },
    { id: 4, src: '/menu-images/page-4.jpg', alt: 'Beverages and desserts menu page' },
  ];

  // Handle scrollspy for sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuData.categories.map(cat => cat.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveCategory(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % menuImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + menuImages.length) % menuImages.length);
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <>
      <Helmet>
        <title>Menu | Plaza Mexico</title>
        <meta name="description" content="View our authentic Mexican menu featuring street tacos, fajitas, burritos, enchiladas and more. Fresh ingredients, traditional recipes, great prices." />
      </Helmet>

      {/* Hero Section */}
      <div className="h-64 bg-gradient-to-r from-chili via-gold to-cactus flex items-center justify-center text-white mt-16">
        <Container>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Our Menu</h1>
            <p className="text-xl md:text-2xl">Authentic Mexican flavors made fresh daily</p>
          </motion.div>
        </Container>
      </div>

      {/* Menu Images Gallery */}
      <Section background="white">
        <Container>
          <motion.h2 
            className="text-3xl md:text-4xl font-heading text-center text-charcoal mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Menu Photos
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {menuImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="aspect-square overflow-hidden rounded-xl cursor-pointer group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(index)}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Full Size</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/menu.pdf" target="_blank" variant="outline">
              <Download size={20} className="mr-2" />
              Download PDF Menu
            </Button>
          </div>
        </Container>
      </Section>

      {/* Sticky Category Navigation */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4">
        <Container>
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {menuData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-chili text-white'
                    : 'bg-gray-100 text-charcoal hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Menu Categories */}
      <Section background="pattern">
        <Container>
          <div className="space-y-12">
            {menuData.categories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Category Header */}
                  <div 
                    className="bg-gradient-to-r from-chili to-gold text-white p-6 cursor-pointer lg:cursor-default flex items-center justify-between"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <h2 className="text-2xl md:text-3xl font-heading font-bold">
                      {category.name}
                    </h2>
                    <ChevronDown 
                      className={`lg:hidden transition-transform duration-200 ${
                        expandedCategories.includes(category.id) ? 'rotate-180' : ''
                      }`}
                      size={24}
                    />
                  </div>

                  {/* Category Items */}
                  <div className={`${
                    expandedCategories.includes(category.id) || window.innerWidth >= 1024 
                      ? 'block' 
                      : 'hidden lg:block'
                  }`}>
                    <div className="p-6 space-y-6">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="flex flex-col md:flex-row md:items-start md:justify-between border-b border-gray-100 pb-6 last:border-b-0 last:pb-0"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-lg font-semibold text-charcoal flex-1">
                                {item.name}
                              </h3>
                              <span className="text-chili font-bold text-lg ml-4">
                                ${item.price.toFixed(2)}
                              </span>
                            </div>
                            
                            <p className="text-gray-600 mb-3 leading-relaxed">
                              {item.desc}
                            </p>
                            
                            {(item.tags || []).length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, tagIndex) => (
                                  <Badge key={tagIndex} variant={tag as any}>
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                          
                          {item.image && (
                            <div className="mt-4 md:mt-0 md:ml-6">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full md:w-24 h-32 md:h-24 object-cover rounded-lg"
                                loading="lazy"
                              />
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section background="white">
        <Container>
          <motion.div 
            className="text-center bg-gradient-to-r from-chili to-gold text-white p-12 rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Order?
            </h2>
            <p className="text-xl mb-6">
              Call us now or visit our restaurant for the freshest Mexican food in town!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="tel:(555) 123-4567" variant="outline" size="lg">
                Call Now: (555) 123-4567
              </Button>
              <Button href="/contact" size="lg">
                Visit Us Today
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Image Lightbox */}
      <ImageLightbox
        images={menuImages}
        isOpen={isLightboxOpen}
        currentIndex={currentImageIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </>
  );
};

export default MenuPage;