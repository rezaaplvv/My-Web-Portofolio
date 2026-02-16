"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, Zap } from "lucide-react";
const ALL_PROJECTS = [
  {
    id: 1,
    title: "Dramatix",
    subtitle: "Streaming Platform",
    desc: "High-performance movie streaming platform. Scalable architecture based on Next.js 15.",
    tech: ["Next.js 15", "Tailwind", "Node.js"],
    image: "/dramaku.png",
    demoLink: "https://drama-tix.vercel.app/",
    docLink: "https://github.com/rezaaplvv/Dramatix"
  },
  {
    id: 2,
    title: "Social Media Downloader",
    subtitle: "Tools Web App",
    desc: "Download high quality media from all social media without watermark.",
    tech: ["React", "Vite", "Node.js"],
    image: "/zeronout.png",
    demoLink: "https://zero-nout-downloader.vercel.app/",
    docLink: "https://github.com/rezaaplvv/Social-Media-Downloader"
  },
  {
    id: 3,
    title: "Cashier System POS",
    subtitle: "Restaurant System",
    desc: "Cashier system: Real-time P&L, QRIS, Thermal Printing.",
    tech: ["Laravel 12", "MySQL", "Bootstrap 5"],
    image: "/mesinkasirutama.png",
    demoLink: "http://tipus.digitalku.co.id/login",
    docLink: "https://github.com/rezaaplvv/Laravel-Point-Of-Sales-Pro"
  },
    {
    id: 4,
    title: "Kost Management App",
    subtitle: "Kost Management App",
    desc: "Professional Fullstack Boarding Management System with Automated Billing and Analytics.",
    tech: ["Laravel 12", "MySQL", "Bootstrap 5"],
    image: "/dashboardowner.png",
    demoLink: "https://sewakamar.mitrabayarapp.com/",
    docLink: "https://github.com/rezaaplvv/Kost-Management-App"
  },

    {
    id: 5,
    title: "Website Desa",
    subtitle: "Village Profile Website",
    desc: "A comprehensive website for village profile management with interactive features.",
    tech: ["Laravel 12", "MySQL", "Blade", "Tailwind"],
    image: "/desaku.png",
    demoLink: null,
    docLink: "https://github.com/rezaaplvv"
  },
    {
    id: 6,
    title: "Fragrance Distribution",
    subtitle: "SFA System",
    desc: "A Full-Stack Integrated Sales Force Automation (SFA) and Inventory Management System designed for retail operations.",
    tech: ["Laravel 12", "MySQL", "Blade", "Tailwind"],
    image: "/Dashboardadminparfum.png",
    demoLink: "http://tipus.digitalku.co.id",
    docLink: "https://github.com/rezaaplvv/Parfumsfa-Integrated-System"
  },
  {
    id: 7,
    title: "EmotionFace AI",
    subtitle: "AI Detection",
    desc: "Detects user facial expressions and changes UI accordingly in real-time.",
    tech: ["React", "TensorFlow", "AI"],
    image: "/emo.png",
    demoLink: "https://emotion-face.vercel.app/",
    docLink: "https://github.com/rezaaplvv/EmotionFace-AI"
  },
  {
    id: 8,
    title: "Smart Perpus",
    subtitle: "Digital Library",
    desc: "Digital library system with gamification features for levels and rankings.",
    tech: ["Flutter", "Firebase", "Gamification"],
    image: "/library.png",
    demoLink: null,
    docLink: "https://github.com/rezaaplvv/smart-perpus-app"
  },

  {
    id: 9,
    title: "Viauo",
    subtitle: "Multimedia App",
    desc: "Flutter streaming music/video online & offline player.",
    tech: ["Flutter", "Dart", "Rest API"],
    image: "/viauo.png",
    demoLink: null,
    docLink: "https://github.com/rezaaplvv/Viauo-VideoAudioPlayer"
  },

];  

const BrutalTag = ({ text }: { text: string }) => (
  <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider border-2 border-black bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
    {text}
  </span>
);

export default function ProjectsPage() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleActiveProject = (id: number) => {
    setActiveId(prev => prev === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-black font-sans selection:bg-black selection:text-white relative">
      
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      ></div>

      {/* NAVBAR SIMPLE */}
      <nav className="fixed top-0 left-0 right-0 h-20 bg-[#FFFDF5] border-b-4 border-black z-50 px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="group">
            <div className="bg-black text-white px-4 py-2 font-bold border-2 border-black group-hover:bg-[#FDE047] group-hover:text-black transition-colors flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                <ArrowLeft size={20} />
                BACK TO HOME
            </div>
        </Link>
        <div className="text-xl font-black uppercase tracking-tighter hidden md:block">
            Project <span className="text-stroke-2 text-transparent">Vault</span>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        
        <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6">
                All <span className="text-stroke-2 text-transparent">Projects</span>
            </h1>
            <p className="text-xl font-medium max-w-2xl mx-auto border-l-4 border-black pl-4 bg-white/50 py-2">
                A collection of my technical experiments, freelance work, and open source contributions.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[450px]">
            {ALL_PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => toggleActiveProject(project.id)}
                className="group relative h-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-200 overflow-hidden flex flex-col cursor-pointer"
              >

                <div className="h-10 border-b-4 border-black bg-white flex items-center justify-between px-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></div>
                  </div>
                  <div className="text-xs font-bold font-mono uppercase tracking-widest">
                    {project.title}.exe
                  </div>
                </div>

                <div className="block relative h-[50%] border-b-4 border-black overflow-hidden bg-gray-100">
                  <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
<div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 z-10 bg-black/40 backdrop-blur-[2px] ${
  activeId === project.id 
    ? 'opacity-100 pointer-events-auto' 
    : 'opacity-0 pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto'
}`}>
                    
{project.demoLink && (
  <Link 
    href={project.demoLink} 
    target="_blank" 
    onClick={(e) => {
      e.stopPropagation();
      if (window.innerWidth < 768 && activeId !== project.id) {
        e.preventDefault();
      }
    }}
    className="bg-white border-2 border-black px-6 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black hover:scale-105 transition-transform flex items-center gap-2"
  >
    <Zap size={16} className="fill-black"/> VIEW DEMO
  </Link>
)}

<Link 
  href={project.docLink} 
  target="_blank" 
  onClick={(e) => {
    e.stopPropagation();

    if (window.innerWidth < 768 && activeId !== project.id) {
      e.preventDefault();
    }
  }}
  className="bg-[#FDE047] border-2 border-black px-6 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black hover:scale-105 transition-transform flex items-center gap-2"
>
  <Github size={16}/> FULL SHOWCASE
</Link>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                   <div>
                     <Link href={project.demoLink || project.docLink} target="_blank" className="hover:underline decoration-4 decoration-black underline-offset-4">
                       <h3 className="text-2xl font-black uppercase mb-2 leading-none flex items-center gap-2">
                         {project.title}
                         <ArrowUpRight className="w-5 h-5"/>
                       </h3>
                     </Link>
                     <p className="text-sm font-medium text-gray-800 leading-tight mb-4">
                       {project.desc}
                     </p>
                   </div>
                   <div className="flex flex-wrap gap-2 mt-auto">
                     {project.tech.map((t, i) => (
                       <BrutalTag key={i} text={t} />
                     ))}
                   </div>
                </div>
              </motion.div>
            ))}
        </div>


        <div className="mt-24 text-center">
            <div className="inline-block bg-[#FDE047] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-2xl font-black uppercase mb-4">Want to see more code?</h3>
                <Link 
                    href="https://github.com/rezaaplvv" 
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-bold uppercase border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors"
                >
                    <Github size={20}/>
                    Visit My GitHub
                </Link>
            </div>
        </div>

      </main>

      <style jsx global>{`
        .text-stroke-2 {
          -webkit-text-stroke: 2px black;
        }
      `}</style>
    </div>
  );
}