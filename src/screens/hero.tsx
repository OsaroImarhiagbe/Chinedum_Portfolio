'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Header from '@/components/header';
import { useRouter } from 'next/navigation';
import { 
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
const portfolioItems = [
    {
      id: "4358",
      title: "PEN IT DOWN",
      category: "Poem",
      year: "2024",
      image: "/assests/pen.jpg",
      description: "A vivid journey through paranoia, struggle, and hope, finding peace and rising above the chaos.",
    },
    {
      id:"4590",
      title: "Better Tomorrow",
      category: "Poem",
      year: "2024",
      image: "/assests/better.jpg",
     description: "A raw reflection on pain, purpose, and the fight to become more than what life and fate seem to allow.",
    },
    {
      id:"4678",
      title: "The End",
      category: "Poem",
      year: "2024",
      image: "/assests/end.jpg",
      description: "A meditation on love, loss, and the endless cycle of beginnings and endings.",
    },
    {
      id:"4589",
      title: "AGONY",
      category: "Script",
      year: "2024",
      image: "/assests/agony.jpg",
      description:"Now a grown man John struggles to deal with the death of his father. Emotions he thought he dealt with come rushing back",
    },
    {
      id:"4546",
      title: "Boondocks",
      category: "Script",
      year: "2024",
      image: "/assests/boondocks.jpg",
      description: "Thugnificent is fed up with his long hours as an amazon delivery driver and wants his old life as a rapper back, but the rap game isn't quite how he remembers it."
    },
    {
      id:"4376",
      title: "HELLISH MINDSTATE",
      category: "Album",
      year: "2025",
      image: "/assests/album.jpg",
      description: "Powerful imagery meets spiritual storytelling"
    }
  ];
export default function FilmPortfolioHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const router = useRouter()
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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
  <div className="flex-1 relative bg-[#0B0F14]">
    <div className="relative z-10 h-full flex flex-col justify-between px-6 py-10 sm:px-12 lg:px-16">
      <div className="flex-1 flex flex-col md:flex-row md:items-center md:gap-12">
        <div>
           <Header/>
        </div>
        <motion.div 
          className="flex-1 max-w-xl text-center md:text-left mb-8 md:mb-0"
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
              <motion.div 
                className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="font-spacegrotesk">{portfolioItems[currentSlide].category}</span>
              </motion.div>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-spacegrotesk font-bold text-white leading-tight mb-3 sm:mb-4">
                {portfolioItems[currentSlide].title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 font-spacegrotesk">
                {portfolioItems[currentSlide].description}
              </p>
              <p className="font-spacegrotesk text-sm sm:text-lg text-white/60 font-medium">
                {portfolioItems[currentSlide].year}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <motion.div 
          className="flex-1 max-w-full sm:max-w-2xl"
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
              className="relative aspect-[4/5] w-full overflow-hidden flex items-center justify-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
              onClick={() => router.push(`/projects/${portfolioItems[currentSlide].id}`)}
              className="relative group w-full">
                <Image
                  priority
                  src={portfolioItems[currentSlide].image}
                  alt={portfolioItems[currentSlide].title}
                  className="object-cover"
                  quality={100}
                  width={700}
                  height={750}
                  sizes="100vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300">
                  <button
                    onClick={() => router.push(`/projects/${portfolioItems[currentSlide].id}`)}
                    className="font-spacegrotesk cursor-pointer px-4 py-2 bg-white text-black rounded-lg shadow-md opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition duration-300"
                  >
                    View
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-6 sm:gap-0">
        <div className="flex items-center space-x-6 sm:space-x-8">
          <motion.div 
            className="text-white font-medium text-base sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="font-spacegrotesk text-2xl sm:text-3xl">{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="font-spacegrotesk text-white/40"> / {String(portfolioItems.length).padStart(2, '0')}</span>
          </motion.div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            {portfolioItems.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 sm:w-12 bg-green-400' 
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-4">
          <motion.button
            onClick={prevSlide}
            className="w-12 h-12 sm:w-14 sm:h-14 cursor-pointer rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300"
            whileHover={{ scale: 1.1, borderColor: 'rgba(255, 255, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="w-12 h-12 sm:w-14 sm:h-14 cursor-pointer rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}