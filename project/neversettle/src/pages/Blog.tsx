import { motion } from 'framer-motion';
import { Clock, Tag, Share2, BookOpen } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Ways Protein Shakes Boost Your Workout',
    excerpt: 'Discover how protein-packed shakes can accelerate muscle recovery and maximize your fitness gains.',
    body_markdown: '',
    tags: ['Nutrition Tips', 'Muscle Fuel'],
    status: 'published',
    image_url: 'https://images.pexels.com/photos/4162486/pexels-photo-4162486.jpeg?auto=compress&cs=tinysrgb&w=800',
    read_time: 4,
    created_at: '2025-10-15',
  },
  {
    id: '2',
    title: 'Energy Teas vs Coffee: What\'s Better?',
    excerpt: 'Loaded teas offer sustained energy without the crash. Learn why they\'re becoming Lawton\'s go-to fuel.',
    body_markdown: '',
    tags: ['Energy Boost', 'Motivation'],
    status: 'published',
    image_url: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800',
    read_time: 3,
    created_at: '2025-10-12',
  },
  {
    id: '3',
    title: 'Pre-Workout Nutrition Made Simple',
    excerpt: 'What to drink before your workout to maximize energy and endurance. Our expert guide.',
    body_markdown: '',
    tags: ['Nutrition Tips', 'Recipes'],
    status: 'published',
    image_url: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    read_time: 5,
    created_at: '2025-10-08',
  },
  {
    id: '4',
    title: 'Meet Our Community: Sarah\'s Transformation',
    excerpt: 'How one member lost 30 pounds while gaining confidence at Never Settle Nutrition.',
    body_markdown: '',
    tags: ['Motivation', 'Events'],
    status: 'published',
    image_url: 'https://images.pexels.com/photos/4056530/pexels-photo-4056530.jpeg?auto=compress&cs=tinysrgb&w=800',
    read_time: 6,
    created_at: '2025-10-05',
  },
  {
    id: '5',
    title: 'DIY Protein Waffle Recipes to Try',
    excerpt: 'Recreate our famous protein waffles at home with these simple, delicious recipes.',
    body_markdown: '',
    tags: ['Recipes', 'Nutrition Tips'],
    status: 'published',
    image_url: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
    read_time: 7,
    created_at: '2025-10-01',
  },
  {
    id: '6',
    title: 'Why Collagen is Your Secret Weapon',
    excerpt: 'The benefits of collagen supplementation for skin, joints, and overall wellness.',
    body_markdown: '',
    tags: ['Nutrition Tips'],
    status: 'published',
    image_url: 'https://images.pexels.com/photos/6894213/pexels-photo-6894213.jpeg?auto=compress&cs=tinysrgb&w=800',
    read_time: 4,
    created_at: '2025-09-28',
  },
];

const categories = ['All', 'Nutrition Tips', 'Motivation', 'Events', 'Recipes'];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24 pb-20">
      <AnimatedSection className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-96 rounded-3xl overflow-hidden mb-8">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent"></div>

            <div className="relative h-full flex items-center justify-center text-center px-4">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-6"
                >
                  <BookOpen className="w-20 h-20 text-emerald-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.8)]" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl md:text-7xl font-bold mb-6"
                >
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Fuel Your Mind
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-300 max-w-2xl mx-auto"
                >
                  "Tips, stories, and inspiration from Lawton's wellness community"
                </motion.p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map((category, i) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-slate-800 to-slate-900 border border-emerald-500/20 text-gray-300 hover:border-emerald-500 hover:text-emerald-400 transition-all font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <motion.div
                className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-all shadow-xl"
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full flex items-center gap-1"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-gray-300 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{post.read_time} min read</span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <span className="text-gray-500 text-sm">
                      {new Date(post.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <motion.button
                      className="flex items-center gap-2 text-emerald-400 hover:text-cyan-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Read More
                      <Share2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatedSection className="mt-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-3xl p-12 border border-emerald-500/20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Stay in the Loop
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-8 text-lg"
          >
            Get weekly tips, exclusive recipes, and wellness insights delivered to your inbox
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:w-96 px-6 py-4 rounded-full bg-slate-900 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-all"
            />
            <motion.button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/80 transition-all whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe Now
            </motion.button>
          </motion.form>
        </div>
      </AnimatedSection>
    </div>
  );
}
