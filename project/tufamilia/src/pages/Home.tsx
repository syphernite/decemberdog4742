import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { ChefHat, Heart, Flame } from 'lucide-react';

const Home = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -150]);
  const decorativeY = useTransform(scrollY, [0, 500], [0, 100]);

  const signatureDishes = [
    {
      name: 'Carnitas Tacos',
      description: 'Slow-braised pork shoulder with house-made tortillas',
      price: '$14',
      heat: 2,
      image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Mole Poblano',
      description: 'Traditional chocolate-chili sauce with tender chicken',
      price: '$22',
      heat: 3,
      image: 'https://images.pexels.com/photos/8448328/pexels-photo-8448328.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ceviche Verde',
      description: 'Fresh catch with tomatillo, jalapeño, and cilantro',
      price: '$18',
      heat: 2,
      image: 'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Chiles Rellenos',
      description: 'Roasted poblanos stuffed with Oaxaca cheese',
      price: '$16',
      heat: 3,
      image: 'https://images.pexels.com/photos/5737530/pexels-photo-5737530.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Barbacoa Bowl',
      description: 'Tender beef with cilantro-lime rice and black beans',
      price: '$19',
      heat: 2,
      image: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Tres Leches Cake',
      description: 'Classic sponge cake soaked in three milks',
      price: '$9',
      heat: 0,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const whyRobertFamilia = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Heirloom Recipes',
      description: 'Passed down through generations of the Familia kitchen'
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: 'Fire-Grilled',
      description: 'Everything cooked over open flames for authentic flavor'
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: 'Familia Welcome',
      description: 'Every guest is treated like family at our table'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-chili/20 via-marigold/10 to-nopal/20"></div>
          <img
            src="https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Mexican food spread"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/40"></div>
        </motion.div>

        {/* Parallax decorative elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: decorativeY }}
        >
          {/* Floating ingredients */}
          <div className="absolute top-20 left-10 opacity-30">
            <motion.div
              className="w-12 h-12 bg-nopal/20 rounded-full"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
          <div className="absolute top-40 right-20 opacity-20">
            <motion.div
              className="w-8 h-8 bg-marigold/30 rounded-full"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          <div className="absolute bottom-40 left-20 opacity-25">
            <motion.div
              className="w-10 h-10 bg-chili/25 rounded-full"
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Papel picado SVG animation */}
        <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
          <svg viewBox="0 0 400 60" className="w-full h-full">
            <motion.path
              d="M0,30 Q100,10 200,30 T400,30"
              stroke="#FFC107"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,35 Q100,15 200,35 T400,35"
              stroke="#E53935"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center text-papel px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sabor auténtico.<br />
            <span className="text-marigold">Hecho con corazón.</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-10 text-papel/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the vibrant flavors of Mexico through our heirloom recipes and fire-grilled specialties
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button as={Link} to="/reservations" variant="primary" size="lg">
              Reserve Table
            </Button>
            <Button as={Link} to="/menu" variant="secondary" size="lg">
              View Menu
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Signature Dishes Carousel */}
      <section className="py-20 bg-papel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
              Signature <span className="text-chili">Dishes</span>
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Each dish tells a story of tradition, crafted with the finest ingredients and authentic techniques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  rotateX: 2
                }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${
                            i < dish.heat ? 'text-chili' : 'text-gray-300'
                          }`}
                        >
                          🌶️
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-marigold text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                      {dish.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-charcoal mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    {dish.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Robert Familia */}
      <section className="py-20 bg-gradient-to-br from-chili/5 to-nopal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
              Why <span className="text-chili">Robert Familia</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyRobertFamilia.map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-chili text-papel rounded-full mb-6 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 5 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-display font-bold text-charcoal mb-4">
                  {item.title}
                </h3>
                <p className="text-charcoal/70">
                  {item.description}
                </p>
                <motion.div
                  className="w-12 h-0.5 bg-marigold mx-auto mt-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Reservation Bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-charcoal/95 backdrop-blur-md border-t border-marigold/20 p-4 z-30"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-papel text-center sm:text-left">
            <p className="font-semibold">Ready to dine with us?</p>
            <p className="text-sm text-papel/80">Book your table today</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <select className="px-4 py-2 rounded-lg bg-papel/10 border border-papel/20 text-papel text-sm focus:outline-none focus:ring-2 focus:ring-chili">
              <option>Today</option>
              <option>Tomorrow</option>
              <option>This Weekend</option>
            </select>
            <select className="px-4 py-2 rounded-lg bg-papel/10 border border-papel/20 text-papel text-sm focus:outline-none focus:ring-2 focus:ring-chili">
              <option>7:00 PM</option>
              <option>7:30 PM</option>
              <option>8:00 PM</option>
            </select>
            <select className="px-4 py-2 rounded-lg bg-papel/10 border border-papel/20 text-papel text-sm focus:outline-none focus:ring-2 focus:ring-chili">
              <option>2 People</option>
              <option>3 People</option>
              <option>4 People</option>
            </select>
            <Button as={Link} to="/reservations" variant="primary" size="sm">
              Reserve
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;