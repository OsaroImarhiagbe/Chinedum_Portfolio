'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { 
  Play,
  Pause, 
  SkipForward, 
  Heart, 
  Download, 
  MoreHorizontal } from 'lucide-react';

export default function MusicHero() {
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


  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-[#0B0F14]">
      {/* Image backgrground */}
      <Image
      src='/assests/About.png'
      alt='city'
      fill
      priority
      className='object-cover
      '
      quality={90}
      sizes="100vw"
      />
      {/* Animated Background Elements */}

      {/* Floating Music Particles */}
      {/* <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              activeParticle === i 
                ? 'bg-green-400' 
                : 'bg-green-400/30'
            }`}
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + Math.sin(i) * 20}%`,
            }}
            variants={particleVariants}
            animate="animate"
            transition={{ delay: i * 0.2 }}
          />
        ))}
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          
          {/* Left Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
          >
        <motion.div className="space-y-4">
              <motion.div 
                className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
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
                <span>Now Playing</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                I am
                <motion.span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundSize: "200% 200%"
                  }}
                >
                  Houdïnï CHïN
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-md leading-relaxed"
              >
                Embrace your inner self and transend a world beyond your imagination
              </motion.p>
            </motion.div>

            {/* Featured Tracks */}
            <motion.div className="space-y-4 mt-2">
              <h3 className="text-lg font-semibold text-white">Trending Now</h3>
              <div className="space-y-3">
                {featuredTracks.map((track, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-lg p-3 cursor-pointer"
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div 
                      className="w-10 h-10 bg-gradient-to-br from-green-400 to-purple-500 rounded-lg flex items-center justify-center"
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Play className="w-5 h-5 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{track.title}</p>
                      <p className="text-gray-400 text-sm">{track.artist}</p>
                    </div>
                    <motion.span 
                      className="text-green-400 text-sm font-medium"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + 0.3 }}
                    >
                      {track.plays}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex space-x-4 mt-4">
              <motion.button 
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              >
                Start Listening
              </motion.button>
              <motion.button 
                className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Music Player Card */}
          <div className="lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0">
            <motion.div 
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/10 max-w-md w-full"

              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              {/* Album Art */}
              <div className="relative mb-6">
                <motion.div 
                  // className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-500 via-pink-900 to-red-500 rounded-2xl shadow-2xl overflow-hidden"
                  // whileHover={{ 
                  //   scale: 1.02,
                  //   rotateY: 5 
                  // }}
                  // transition={{ type: "spring", damping: 20, stiffness: 300 }}
                >
                  <Image
                  src="/assests/album.jpg"
                  alt='cover'
                  width={64}
                  height={64}
                  quality={100}
                  className='w-64 h-64 mx-auto bg-gradient-to-br from-purple-500 via-pink-900 to-red-500 rounded-2xl shadow-2xl overflow-hidden'
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                  <motion.div 
                    className="absolute bottom-4 left-4 right-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <h3 className="text-white font-bold text-lg">Tropical Smoothie</h3>
                    <p className="text-white/80">Houdïnï CHïN</p>
                  </motion.div>
                  {/* Rotating vinyl effect */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black/30 rounded-full border-4 border-white/20"
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
                <h4 className="text-white font-bold text-xl mb-1">Tropical Smoothie</h4>
                <p className="text-gray-300">Houdïnï CHïN</p>
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
                  animate={isLiked ? "liked" : "unliked"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
                </motion.button>
                
                <motion.button 
                  className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg"
                  onClick={() => setIsPlaying(!isPlaying)}
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
        </div>
      </div>

      {/* Bottom Stats */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="flex items-center space-x-8 text-white/60 text-sm">
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <motion.div 
              className="text-2xl font-bold text-white"
              animate={{ 
                textShadow: ["0 0 0px rgba(34, 197, 94, 0)", "0 0 20px rgba(34, 197, 94, 0.5)", "0 0 0px rgba(34, 197, 94, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              50M+
            </motion.div>
            <div>Songs</div>
          </motion.div>
          <div className="w-px h-8 bg-white/20" />
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <motion.div 
              className="text-2xl font-bold text-white"
              animate={{ 
                textShadow: ["0 0 0px rgba(168, 85, 247, 0)", "0 0 20px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
            >
              100M+
            </motion.div>
            <div>Users</div>
          </motion.div>
          <div className="w-px h-8 bg-white/20" />
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <motion.div 
              className="text-2xl font-bold text-white"
              animate={{ 
                textShadow: ["0 0 0px rgba(34, 197, 94, 0)", "0 0 20px rgba(34, 197, 94, 0.5)", "0 0 0px rgba(34, 197, 94, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
            >
              24/7
            </motion.div>
            <div>Streaming</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}