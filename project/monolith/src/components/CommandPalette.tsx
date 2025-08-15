import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink } from 'lucide-react';

const searchItems = [
  { title: 'Services', description: 'View our development services', section: 'services' },
  { title: 'Case Studies', description: 'Browse our recent work', section: 'work' },
  { title: 'Process', description: 'Learn about our methodology', section: 'process' },
  { title: 'About', description: 'Our principles and approach', section: 'about' },
  { title: 'Contact', description: 'Start your project', section: 'contact' },
  { title: 'Custom Development', description: 'Bespoke website creation', section: 'services' },
  { title: 'Performance Optimization', description: 'Speed and Core Web Vitals', section: 'services' },
  { title: 'Site Migration', description: 'Seamless platform transitions', section: 'services' },
];

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = searchItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
        setSearchQuery('');
        setSelectedIndex(0);
      } else if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => Math.min(prev + 1, filteredItems.length - 1));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
          e.preventDefault();
          handleItemClick(filteredItems[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredItems]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  const handleItemClick = (item: typeof searchItems[0]) => {
    const element = document.getElementById(item.section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setSearchQuery('');
    setSelectedIndex(0);
  };

  return (
    <>
      {/* Trigger hint */}
      <motion.div
        className="fixed top-6 right-6 z-50 text-xs text-secondary bg-stone/50 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        Press <span className="font-mono bg-white/10 px-1 rounded">⌘K</span> to search
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Palette */}
            <motion.div
              className="fixed top-[20%] left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4 z-50"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="glass rounded-2xl overflow-hidden">
                {/* Search input */}
                <div className="flex items-center px-6 py-4 border-b border-white/10">
                  <Search className="w-5 h-5 text-secondary mr-3" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search pages, services, contact..."
                    className="flex-1 bg-transparent text-white placeholder-secondary outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="text-xs text-secondary">
                    ESC to close
                  </div>
                </div>

                {/* Results */}
                <div className="max-h-80 overflow-y-auto">
                  {filteredItems.length === 0 ? (
                    <div className="px-6 py-8 text-center text-secondary">
                      No results found for "{searchQuery}"
                    </div>
                  ) : (
                    <div className="py-2">
                      {filteredItems.map((item, index) => (
                        <motion.button
                          key={`${item.title}-${index}`}
                          className={`w-full px-6 py-3 text-left flex items-center justify-between transition-all ${
                            selectedIndex === index 
                              ? 'bg-white/5 text-white' 
                              : 'text-secondary hover:bg-white/3 hover:text-white'
                          }`}
                          onClick={() => handleItemClick(item)}
                          whileHover={{ x: 4 }}
                          onMouseEnter={() => setSelectedIndex(index)}
                        >
                          <div>
                            <div className="font-medium mb-1">{item.title}</div>
                            <div className="text-sm opacity-60">{item.description}</div>
                          </div>
                          <ExternalLink className="w-4 h-4 opacity-40" />
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="px-6 py-3 border-t border-white/10 text-xs text-secondary flex justify-between">
                  <div>
                    <span className="font-mono bg-white/10 px-1 rounded mr-2">↑↓</span>
                    Navigate
                  </div>
                  <div>
                    <span className="font-mono bg-white/10 px-1 rounded mr-2">↵</span>
                    Select
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};