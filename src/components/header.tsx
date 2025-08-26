'use client'
import { useState} from 'react';
import { motion, AnimatePresence, useTransform,useScroll} from 'motion/react';
import { 
    Menu, 
    X
} from 'lucide-react';
const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const { scrollYProgress } = useScroll();
    const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -100]);
    return (
        <>
         {/* Header */}
      <motion.header 
        className="fixed top-0 w-full z-50 bg-transparent"
        style={{ y: headerY }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
            Houdïnï CHïN
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  className={`capitalize font-medium transition-colors cursor-pointer ${
                    activeSection === item ? 'text-green-400' : 'text-white/70 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item}
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
            >
              <nav className="container mx-auto px-6 py-4 space-y-4">
                {['home', 'about', 'projects', 'contact'].map((item) => (
                  <motion.button
                    key={item}
                    className="block capitalize font-medium text-white/70 hover:text-white transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
        </>
    );
}
export default Header