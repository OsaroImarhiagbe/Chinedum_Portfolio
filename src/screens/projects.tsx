'use client'
import { motion } from "motion/react";
import Image from "next/image";
import Card from "@/components/card";
import { FaLinkedinIn, FaYoutube, FaGithub, FaInstagram } from 'react-icons/fa';
const projects = [
  {
    title: "Midnight Reflections",
    type: "Houdïnï CHïN",
    image: "#",
    link: "#",
  },
  {
    title: "Echoes in the City",
    type: "Houdïnï CHïN",
    image: "#",
    link: "#",
  },
  {
    title: "Neon Dreams",
    type: "Houdïnï CHïN",
    image: "#",
    link: "#",
  },
];

export default function Projects() {
  return (
     <section id='about' className="relative min-h-screen bg-[#0B0E16] text-white px-10 py-20">
       {/* Background image */}
       <Image
         src="/assests/music.png"
         alt="Uchiha Background"
         fill
         className="object-cover"
         priority
         quality={100}
          sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 100vw, 
               100vw"
       />
       {/* header */}
       <div className="flex items-center justify-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute text-center text-4xl md:text-5xl font-bold tracking-wide"
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">Music</span>
        </motion.h2>
       </div>
      <div className="mt-40">
        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
              <Card key={idx} musicTitle={project.title} artists={project.type}/>
          ))}
        </div>
      </div>
     </section>
  );
}

    //  <Image
    //         src="/assests/aboutname.png"
    //         alt="Uchiha Background"
    //         fill
    //         className="object-cover object-center"
    //         priority
    //         quality={100}
    //       /> 


      // className="relative z-10 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"

      // className="bg-[#0B0E16] text-white min-h-screen px-6 md:px-16 py-20