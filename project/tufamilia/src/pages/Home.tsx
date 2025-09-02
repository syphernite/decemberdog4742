import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { ChefHat, Heart, Flame } from 'lucide-react'

const Home = () => {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, -150])
  const decorativeY = useTransform(scrollY, [0, 500], [0, 100])

  const signatureDishes = [
    {
      name: 'Street Tacos',
      description:
        '3 tortillas with seasoned beef, onions, cilantro. Served with rice, beans, and guacamole.',
      price: '$12.39',
      icon: Flame,
    },
    {
      name: 'Enchilada Dinner',
      description:
        'Three cheese enchiladas with your choice of cheese or chili sauce. Served with rice and beans.',
      price: '$8.99',
      icon: ChefHat,
    },
    {
      name: 'Family Sampler',
      description:
        'Ground beef nachos, chicken taquitos, beef fajita quesadilla with guacamole & sour cream.',
      price: '$14.39',
      icon: Heart,
    },
    {
      name: 'Sooner Special',
      description:
        'Beef or chicken chimichanga with cheese sauce + beef burrito with sour cream sauce. With rice and beans.',
      price: '$14.39',
      icon: Flame,
    },
  ]

  return (
    <div className="relative">
      <section className="relative overflow-hidden">
        <motion.div style={{ y: heroY }}>
          <div className="max-w-6xl mx-auto px-4 pt-20 pb-24 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-charcoal leading-tight">
              Authentic Mexican food in <span className="text-chili">Lawton</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto">
              Family recipes and classic Tex-Mex. Welcome to Tu Familia.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Button asChild intent="primary">
                <Link to="/menu">View Menu</Link>
              </Button>
              <Button asChild intent="secondary">
                <a href="tel:+15805954900">Call</a>
              </Button>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: decorativeY }}
        >
          <div className="absolute top-20 left-10 opacity-30">
            <motion.div
              className="w-12 h-12 bg-nopal/20 rounded-full"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
              Menu <span className="text-chili">Highlights</span>
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Popular dishes prepared daily
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatureDishes.map((dish, i) => (
              <motion.div
                key={dish.name}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <dish.icon className="h-5 w-5 text-chili" />
                  <h3 className="text-xl font-semibold">{dish.name}</h3>
                </div>
                <p className="text-sm text-charcoal/70">{dish.description}</p>
                <div className="mt-4 font-semibold">{dish.price}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild intent="secondary">
              <Link to="/menu">Explore full menu</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
