// app/projects/[id]/page.tsx
"use client";
import { motion, AnimatePresence } from "motion/react";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
const projects = {
  "4358": {
    title: "PEN IT DOWN",
    image: "/assests/pen.jpg",
    content:`Hold up , hold up, I think I just seen ISIS blown up. At least that's what they said in the news. 
    These days you’ll end up on an instant replay, on someone else’s TV.
    Government conspiracies, the paranoia taken its hold on me.
    I’m just tryin to slow down and breathe.
    Picture myself listening to Marley on the beach, with the sand in my feet, brush the waves in my hair as I strut to the beat. 
    Between the space and lines is where I find my peace of mind. 
    Seems I’m running out of time.
    The quicksand puling me down. 
    Till a voice said Wake up! Wake up! You ain’t done yet.
    Look at me fly now, mom look at me fly..watch me fly so high.`,
    link:'',
    description: "A vivid journey through paranoia, struggle, and hope, finding peace and rising above the chaos.",
    year: 2024,
  },
  "4590": {
    title: "Better Tomorrow ",
    image: "/assests/better.jpg",
    content:`All we ever were promised was death, so I created my own destiny. 
    It's a shame that God keeps testing me.
    If God knew what was meant for me, why does it feel like Hell is all I will ever see?
    I'm starting to become the man my parents  thought I would never be.
    I feel like I'm on my last leg and death is the only thing left for me.
    But if I was born for a greater purpose, why everyday do I keep on hurting? 
    Was it to feel the pain of the people before they entered those hearses? 
    Or was it just for me to understand that everyones hurting.
    We all have a way, I mean at least that's what they say. 
    “You can do anything you put your mind to.”
    So why the fuck do they keep trying to stop me from doing it?!
    Or are they afraid?
    They settled for the easy route and now they feel like there’s no way out.
    But I don't want that for me. I want to be the greatest Me I can be, so why is my conscience scaring me? 
    It's Adam's fault cause he ate from that forbidden tree.  
    It didn't give us sin.
    It made us aware of everything we could be, but also what's happening in reality. 
    So till the end of time I'm battling thoughts in my head.
    I just want to do what I want, before I end up dead. 
    Cause in the end I might just kill myself instead. 
    Cause what's the point of living, if I stay stuck in the same position? 
    I pray my niggas reach higher plains. 
    And have a better tomorrow, than we did today.`,
    link:'',
    description: "A raw reflection on pain, purpose, and the fight to become more than what life and fate seem to allow.",
    year: 2024,
  },
  "4678": {
    id: "2",
    title: "The End",
    year: 2024,
    image: "/assests/end.jpg",
    content:`Every end has a beginning At least we decided to start.
    We weren't born to live forever
    Even though I wish that was in the cards.
    They say everything ends
    But I don't want to hear that at all.
    Cause I'm trying to have a happy ending
    I guess that's where the contradictions start.
    Even races have a finish.
    The path I don't remember at all
    Cause how could I ever be focused on the moment
    When the only celebration i've know is getting to the destination.
    Every end has a beginning.
    I wish we never started at all
    Cause how could you say you loved me Now our relationship has fallen apart.
    Till death do us part, didn't that mean something?
    I guess death also meant the end
    Maybe the end is good cause now I can pick up where I left off.
    Cause to start is to finish.
    The cycle will never evolve.
    Cause what's an end without a beginning?
    I guess I'll never know till I start.`,
    link:'',
    description: "A poignant meditation on love, loss, and the endless cycle of beginnings and endings.",
  },
    "4546": {
    id: "3",
    title: "Boondocks",
    year: 2024,
    link:'/scripts/Thugtitious_Boondocks.pdf',
    image: "/assests/boondocks.jpg",
    content:'',
    description: "An introspective look at new beginnings",
  },
  "4589": {
    id: "4",
    title: "Agony",
    year: 2024,
    link: '/scripts/Agony.pdf',
    image: "/assests/agony.jpg",
    content:'',
    description: "Powerful imagery meets spiritual storytelling",
  },
  "4376": {
    id: "5",
    title: "Hellish Mindstate",
    year: 2024,
    image: "/assests/album.jpg",
    link:'https://linktr.ee/chinedum.wejinya?lt_utm_source=lt_share_link#506350151',
    content:'',
    description: " Album out now on Apple Music, Spotify, TIDAL,and many more.... ",
  },
};

export default function ProjectPage({ id }: { id: string }) {
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0F14] text-white">
        <p className="text-lg font-medium">Project not found.</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0B0F14] text-white flex">
      {/* Side Header */}
      <Header id={id} content={project.content} name={project.title}/>

      {/* Main Project Content */}
      <div className="flex-1 flex justify-center items-center px-8 py-16">
        <motion.div
          className="max-w-lg w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden group mx-auto"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src={project.image}
                alt={project.description}
                fill
                className="object-contain rounded-2xl"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Project Info */}
          <div className="mt-10 text-center space-y-2">
            <h1 className="font-spacegrotesk text-4xl font-bold uppercase">{project.title}</h1>
            <p className="font-spacegrotesk mt-4 text-lg text-gray-300">{project.description}</p>
          { project.link && <button
            className="font-spacegrotesk cursor-pointer px-4 py-2 bg-white text-black rounded-lg"
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">{project.link.endsWith('.pdf') ? 'View Script' : 'All Platforms'}</Link>
              </button>}
            <p className="font-spacegrotesk mt-2 text-sm text-gray-500">Year: {project.year}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

