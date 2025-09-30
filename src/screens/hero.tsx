'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Header from '@/components/header';
import { 
  ChevronLeft,
  ChevronRight,
  Play,
} from 'lucide-react';

export default function FilmPortfolioHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  // Portfolio items
  const portfolioItems = [
    {
      title: "Tropical Smoothie",
      category: "Music Video",
      year: "2024",
      image: "/assests/album.jpg",
      description: "A vibrant visual journey through sound and color"
    },
    {
      title: "City Nights",
      category: "Commercial",
      year: "2024",
      image: "/assests/test4.jpg",
      description: "Urban exploration and modern aesthetics"
    },
    {
      title: "Genesis",
      category: "Short Film",
      year: "2023",
      image: "/assests/album.jpg",
      description: "An introspective look at new beginnings"
    },
    {
      title: "Word Of God",
      category: "Music Video",
      year: "2023",
      image: "/assests/test4.jpg",
      description: "Powerful imagery meets spiritual storytelling"
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, portfolioItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index:number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="min-h-screen w-full flex bg-[#0B0F14] overflow-hidden">
      {/* Left Sidebar Navigation */}


      {/* Main Content Area - Carousel */}
      <div className="flex-1 ml-20 lg:ml-24 relative bg-[#0B0F14]">
        {/* Content Container */}
        <div className="relative z-10 h-screen flex flex-col justify-between p-12 lg:p-16">
          {/* Top Section - Project Info */}
          <div className="flex-1 flex items-center gap-12">
            {/* Left Side - Text Content */}
            <Header/>
            <motion.div 
              className="flex-1 max-w-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Category Badge */}
                  <motion.div 
                    className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <span>{portfolioItems[currentSlide].category}</span>
                  </motion.div>

                  {/* Title */}
                  <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-4">
                    {portfolioItems[currentSlide].title}
                  </h1>

                  {/* Description */}
                  <p className="text-lg lg:text-xl text-gray-300 mb-6">
                    {portfolioItems[currentSlide].description}
                  </p>

                  {/* Year */}
                  <p className="text-lg text-white/60 font-medium">
                    {portfolioItems[currentSlide].year}
                  </p>

                  {/* CTA Button */}
                  <motion.button 
                    className="mt-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg inline-flex items-center space-x-2"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-5 h-5" />
                    <span>Watch Project</span>
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Right Side - Image Card */}
            <motion.div 
              className="flex-1 max-w-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                  transition={{ duration: 0.6 }}
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Image
                    src={portfolioItems[currentSlide].image}
                    alt={portfolioItems[currentSlide].title}
                    fill
                    className="object-cover"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Subtle overlay for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Bottom Section - Navigation Controls */}
          <div className="flex items-end justify-between">
            {/* Slide Counter & Dots */}
            <div className="flex items-center space-x-8">
              {/* Counter */}
              <motion.div 
                className="text-white font-medium text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-3xl">{String(currentSlide + 1).padStart(2, '0')}</span>
                <span className="text-white/40"> / {String(portfolioItems.length).padStart(2, '0')}</span>
              </motion.div>

              {/* Dots */}
              <div className="flex items-center space-x-3">
                {portfolioItems.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-12 bg-green-400' 
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={prevSlide}
                className="w-14 h-14 cursor-pointer rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.1, borderColor: 'rgba(255, 255, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                onClick={nextSlide}
                className="w-14 h-14 cursor-pointer rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/40 text-sm flex flex-col items-center"
          >
            <span className="mb-2">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}