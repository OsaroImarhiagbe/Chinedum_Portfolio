'use client'
import { motion } from "motion/react";
import Header from "@/components/header";
export default function Contact() {
  return (
    <section className="bg-[#0B0E16] text-white min-h-screen px-6 md:px-16 py-20 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <Header/>
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-wide text-center mb-14"
        >
          Get in <span className="text-cyan-400">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-12"
        >
          Whether it’s poetry, music, or collaboration, I’d love to hear from you.
        </motion.p>

         <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto py-2 text-gray-300 text-base md:text-lg leading-relaxed"
        >
          Shoot me an email or connect with me on any of my socials.  
          Tell me about your project, your goals, and your vision — I’ll review the details and get back to you with a personalized quote to bring your ideas to life.
        </motion.p>
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center space-x-8 text-gray-400"
        >
          <a href="#" className="hover:text-cyan-400 transition">Instagram</a>
          <a href="#" className="hover:text-cyan-400 transition">Spotify</a>
          <a href="#" className="hover:text-cyan-400 transition">Twitter</a>
        </motion.div>
      </div>
    </section>
  );
}
