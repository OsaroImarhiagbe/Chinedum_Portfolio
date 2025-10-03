"use client";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
import Header from "@/components/header";

const motionVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export default function About() {
  const featuresRef = useRef(null);
  const inView = useInView(featuresRef, { once: false, amount: 0.2 });

  return (
    <section
      id="about"
      ref={featuresRef}
      className="relative min-h-screen bg-[#0B0F14] text-white px-10 flex items-center"
    >
      <Header />
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* Left Column - About */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={motionVariants}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col justify-center space-y-2"
        >
          <h2 className="text-xl font-spacegrotesk mb-4 uppercase">About</h2>
          <p className="font-spacegrotesk text-base">Chinedum Wejinya</p>
          <p className="font-spacegrotesk text-base">Ypsilanti, Michigan</p>
          <p className="py-2 font-spacegrotesk text-base md:text-lg leading-relaxed">
            I&apos;m Chinedum Wejinya aka Houdïnï CHïN. I&apos;m a Musician /
            Visual Artist from Ypsilanti, Michigan. I have a deep passion for
            Music, Film, and TV. I am dedicated to telling immersive stories
            that explore human emotions, politics, and religion. I hope my work
            fosters meaningful conversations and creates shared spaces.
          </p>
        </motion.div>

        {/* Right Column - Specialties + Work */}
        <div className="flex flex-col justify-center space-y-12">
          {/* Work */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={motionVariants}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          >
            <h2 className="text-xl font-spacegrotesk mb-4 uppercase">Work</h2>
            <ul className="flex gap-6 font-spacegrotesk text-base md:text-lg leading-relaxed">
            <li className="flex items-center before:mr-2">Agony</li>
            <li className="flex items-center before:content-['•'] before:mr-2">The End</li>
            <li className="flex items-center before:content-['•'] before:mr-2">Better Tomorrow</li>
            <li className="flex items-center before:content-['•'] before:mr-2">PEN IT DOWN</li>
          </ul>
          </motion.div>
          {/* Specialties */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={motionVariants}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          >
            <h2 className="text-xl font-spacegrotesk mb-4 uppercase">
              Specialties
            </h2>
            <ul className="flex gap-6 font-spacegrotesk text-base md:text-lg leading-relaxed">
            <li className="flex items-center before:mr-2">Film</li>
            <li className="flex items-center before:content-['•'] before:mr-2">Photography</li>
            <li className="flex items-center before:content-['•'] before:mr-2">Movies</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

         {/* Left - Image */}
        // <motion.div
        //   initial={{ opacity: 0, x: -50 }}
        //   animate={{ opacity: 1, x: 0 }}
        //   transition={{ duration: 0.8 }}
        //   className="flex justify-center items-center"
        // >
        //   <div className="relative w-[300px] h-[300px]">
        //     <Image
        //       src='/'
        //       alt="Osaro"
        //       fill
        //       className="rounded-full border-4 border-red-600 object-cover shadow-lg shadow-red-600/30"
        //     />
        //   </div>
        // </motion.div>