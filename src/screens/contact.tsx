'use client'
import { motion } from "motion/react";
import Header from "@/components/header";
export default function Contact() {
  return (
    <section className="bg-[#0B0E16] text-white min-h-screen px-6 md:px-16 py-20 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <Header/>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-spacegrotesk text-4xl md:text-5xl font-bold tracking-wide text-center mb-14"
        >
          Get in <span className="text-green-500">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-spacegrotesk text-gray-400 text-center mb-12"
        >
          Whether it’s poetry, music, or collaboration, I’d love to hear from you.
        </motion.p>

         <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-spacegrotesk text-center max-w-xl mx-auto py-2 text-gray-300 text-base md:text-lg leading-relaxed"
        >
          Connect with me on my socials.
          Tell me about your project, your sound, and your vision.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center space-x-8 text-gray-400"
        >
          <a href="https://www.instagram.com/youngchin35?igsh=MXhkdzk0eXNvdmVlcg%3D%3D&utm_source=qr" className="font-spacegrotesk hover:text-cyan-400 transition">Instagram</a>
          <a href="https://www.linkedin.com/in/chinedum-wejinya-09a62a133?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="font-spacegrotesk hover:text-cyan-400 transition">Linkedin</a>
          <a href="https://x.com/youngchin35/status/1132092368482652161?s=46&t=bKN01H14h-sjUpoIQ4ivsA" className="font-spacegrotesk hover:text-cyan-400 transition">Twitter</a>
        </motion.div>
      </div>
    </section>
  );
}
