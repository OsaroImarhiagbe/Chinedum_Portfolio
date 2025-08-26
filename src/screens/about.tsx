"use client";
import Image from "next/image";
import { motion,useInView } from 'motion/react'
import React,{useRef} from 'react'
import {Download} from 'lucide-react'
import Link from 'next/link';

export default function About() {
  const featuresRef = useRef(null)
  const inView = useInView(featuresRef, { once: false, amount: 0.2 });
  return (
    <section id='about' ref={featuresRef} className="relative min-h-screen bg-[#0B0E16] text-white px-10 flex items-center">
      {/* Background image */}
      <Image
        src="/assests/aboutname.png"
        alt="Uchiha Background"
        fill
        className="object-cover object-center"
        priority
        quality={100}
        sizes="100vw"
      />
      {/* Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-5xl text-center font-bold mb-4">
            About  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">Me</span>
          </h2>
          <motion.p
            initial={{x:-100, opacity:0}}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{duration:1, ease:'easeInOut'}}
          className="py-2 text-white text-base md:text-lg leading-relaxed">
         I&apos;m Chinedum Wejinya aka Houdïnï CHïN . I&apos;m a Musician/ visual artist from Ypsilanti, Michigan. 
         I have a deep passion for Music, Film, and TV.  I am dedicated to telling immersive stories , 
         that delve into human emotions, politics, and religion.  
         I hope my music can foster meaningful conversations and allow people to have a shared space. 
        </motion.p>
          <motion.p className="mt-4 text-gray-400 italic">
            “A great interface is more than visuals — it&apos;s a feeling.”
          </motion.p>
        </motion.div>
             {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <div className="relative w-[300px] h-[300px]">
            <Image
              src='/'
              alt="Osaro"
              fill
              className="rounded-full border-4 border-red-600 object-cover shadow-lg shadow-red-600/30"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}