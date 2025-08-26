'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { CardType } from '@/utils/types/types';
import { 
  Play,
  Pause, 
  SkipForward, 
  Heart, 
  Download, 
  MoreHorizontal } from 'lucide-react';
    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const trackVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120
      }
    },
    hover: {
      scale: 1.02,
      x: 10,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300
      }
    }
  };
  const playButtonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 400
      }
    },
    tap: { 
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const heartVariants = {
    liked: {
      scale: [1, 1.3, 1],
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    unliked: {
      scale: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  const playerVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -45 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.5
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300
      }
    }
  };

  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 1, 0.3],
      scale: [1, 1.5, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const backgroundVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const vinylVariants = {
    spinning: {
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    },
    stopped: {
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

const Card:React.FC<CardType> = ({musicTitle,artists}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [activeParticle, setActiveParticle] = useState(0);

      // Simulate audio progress
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => (prev + 1) % 240); // 4 minutes
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveParticle(prev => (prev + 1) % 6);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (currentTime / 240) * 100;

  const featuredTracks = [
    { title: "Word Of God", artist: "Houdïnï CHïN", plays: "2.1M" },
    { title: "Genesis", artist: "Houdïnï CHïN", plays: "1.8M" },
    { title: "Far From Home", artist: "Houdïnï CHïN", plays: "3.2M" }
  ];
    return(
           <div className="flex justify-center items-center mt-12 lg:mt-0">
            <motion.div 
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/10 max-w-md w-full"
              variants={playerVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              {/* Album Art */}
              <div className="relative mb-6">
                <motion.div 
                  className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-2xl shadow-2xl overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5 
                  }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                  <motion.div 
                    className="absolute bottom-4 left-4 right-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <h3 className="text-white font-bold text-lg">{musicTitle}</h3>
                    <p className="text-white/80">{artists}</p>
                  </motion.div>
                  {/* Rotating vinyl effect */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black/30 rounded-full border-4 border-white/20"
                    variants={vinylVariants}
                    animate={isPlaying ? "spinning" : "stopped"}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/20 rounded-full" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Song Info */}
              <motion.div 
                className="text-center mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h4 className="text-white font-bold text-xl mb-1">{musicTitle}</h4>
                <p className="text-gray-300">{artists}</p>
              </motion.div>

              {/* Progress Bar */}
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <motion.span
                    key={currentTime}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {formatTime(currentTime)}
                  </motion.span>
                  <span>4:00</span>
                </div>
                <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-green-400 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </motion.div>

              {/* Controls */}
              <motion.div 
                className="flex items-center justify-center space-x-6 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <motion.button 
                  className={`p-2 rounded-full transition-all duration-300 ${isLiked ? 'text-red-500' : 'text-white/60'}`}
                  onClick={() => setIsLiked(!isLiked)}
                  variants={heartVariants}
                  animate={isLiked ? "liked" : "unliked"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
                </motion.button>
                
                <motion.button 
                  className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg"
                  onClick={() => setIsPlaying(!isPlaying)}
                  variants={playButtonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <AnimatePresence mode="wait">
                    {isPlaying ? (
                      <motion.div
                        key="pause"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Pause className="w-6 h-6 text-black" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="play"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Play className="w-6 h-6 text-black ml-1" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
                
                <motion.button 
                  className="text-white/60 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SkipForward className="w-6 h-6" />
                </motion.button>
              </motion.div>

              {/* Additional Controls */}
              <motion.div 
                className="flex items-center justify-between text-white/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <motion.button 
                  className="hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Download className="w-5 h-5" />
                </motion.button>
                <motion.button 
                  className="hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MoreHorizontal className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
    );
}

export default Card;