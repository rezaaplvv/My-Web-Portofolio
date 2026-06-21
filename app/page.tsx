"use client";

import React, { useRef, useEffect } from "react";
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { motion, animate, AnimatePresence, useSpring, useMotionValue, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import {
  Github,
  MessageCircle,
  Code2,
  Smartphone,
  Database,
  ArrowUpRight,
  Zap,
  Menu,
  X,
  Bug,
  Layout,
  Package,
  GitCommit,
  Users,
  BookOpen,
  Briefcase,
  FileType,
  Palette,
  FileCode,
  Atom,
  Box,
  Flame,
  Wind,
  Terminal,
  Server,
  Code,
  Coffee,
  ChevronDown,
  Mail,
  Instagram,
  Lightbulb,
  Moon,
  MapPin,
  Send,
} from "lucide-react";
import Link from "next/link";
import TransitionLink from "./components/TransitionLink";

import ReactOriginalIcon from "@devicon/react/react/original";
import NextjsOriginalIcon from "@devicon/react/nextjs/original";
import TypescriptOriginalIcon from "@devicon/react/typescript/original";
import JavascriptOriginalIcon from "@devicon/react/javascript/original";
import Html5OriginalIcon from "@devicon/react/html5/original";
import Css3OriginalIcon from "@devicon/react/css3/original";
import PythonOriginalIcon from "@devicon/react/python/original";
import JavaOriginalIcon from "@devicon/react/java/original";
import PhpOriginalIcon from "@devicon/react/php/original";
import DartOriginalIcon from "@devicon/react/dart/original";

import TailwindcssOriginalIcon from "@devicon/react/tailwindcss/original";
import NodejsOriginalIcon from "@devicon/react/nodejs/original";
import LaravelOriginalIcon from "@devicon/react/laravel/original";
import GitOriginalIcon from "@devicon/react/git/original";
import GithubOriginalIcon from "@devicon/react/github/original";
import MysqlOriginalIcon from "@devicon/react/mysql/original";
import FirebaseOriginalIcon from "@devicon/react/firebase/original";
import FlutterOriginalIcon from "@devicon/react/flutter/original";
import BootstrapOriginalIcon from "@devicon/react/bootstrap/original";
import ViteOriginalIcon from "@devicon/react/vite/original";

const PROJECTS = [
  {
    id: 1,
    title: "PPT CREATE",
    subtitle: "SaaS Digital Marketplace & Creator Platform",
    desc: "A premium, high-performance marketplace platform for Canva presentation templates, featuring automated payment gateway integration, real-time sales metrics, and an advanced creator onboarding workflow with multi-tiered pricing mechanics.",
    tech: ["Laravel 13", "Tailwind CSS", "MySQL", "Duitku API", "JavaScript"],
    image: "/pptcreate1.png", // Sesuaikan dengan nama file mockup/screenshot kamu
    demoLink: "https://pptcreate.com/",
    docLink: "https://github.com/rezaaplvv/ppt-create" // Sesuaikan dengan nama repositori GitHub aslimu
  },

  {
    id: 2,
    title: "Japanese travel website",
    subtitle: "Japanese travel website",
    desc: "A professional travel agency landing page for HelmiTour, specializing in curated Japan tour packages with a modern, high-converting design",
    tech: ["Laravel 13", "Tailwind CSS", "MySQL"],
    image: "/japanese1.png",
    demoLink: "https://helmitour.com/",
    docLink: "https://github.com/rezaaplvv/Laravel-Japanese-Travel"
  },

  {
    id: 3,
    title: "Elementary School Website",
    subtitle: "Elementary School Website",
    desc: "A comprehensive primary school web portal designed to bridge communication between the institution and parents, featuring academic news and event management.",
    tech: ["Laravel 13", "MySQL", "Tailwind"],
    image: "/sd1.png",
    demoLink: "https://sdncigowong01.sch.id/",
    docLink: "https://github.com/rezaaplvv/Laravel-Elementary-School"
  },
  {
    id: 4,
    title: "Waskita Angkasa Satya Security System",
    subtitle: "Enterprise Security Management System",
    desc: "A Next-Gen Integrated Security System featuring real-time attendance with GPS & photo verification, multi-level dashboards, broadcast command controls, and formal executive reporting.",
    tech: ["Laravel 13", "MySQL", "Blade", "Tailwind CSS"],
    image: "/waskita.png",
    demoLink: "https://web-production-00ffc.up.railway.app/",
    docLink: "https://github.com/rezaaplvv/si-security-waskita"
  },


  {
    id: 5,
    title: "Hajj & Umrah Travel Website",
    subtitle: "Hajj & Umrah Travel Website",
    desc: "A professional travel agency landing page, specializing in curated Hajj and Umrah tour packages with a modern, high-converting design.",
    tech: ["Laravel 13", "MySQL", "Blade", "Tailwind"],
    image: "/hajj1.png",
    demoLink: "https://hajjumrah.freedev.app/",
    docLink: "https://github.com/rezaaplvv/Laravel-Hajj-Umrah"
  },
  {
    id: 6,
    title: "4 in 1 Streaming Website",
    subtitle: "4 in 1 Streaming Website",
    desc: "A versatile streaming platform offering Anime, Donghua, Chinese Drama, and Comic in one seamless experience.",
    tech: ["Next.js", "Tailwind CSS", "Node.js"],
    image: "/desuwanime.png",
    demoLink: "https://zeronime-anime-stream.vercel.app/",
    docLink: "https://github.com/rezaaplvv/ZeroNime"
  },




];

const TECH_ROW_1 = [
  { name: "HTML", icon: <FileType size={20} />, color: "bg-orange-300" },
  { name: "CSS", icon: <Palette size={20} />, color: "bg-blue-300" },
  { name: "JavaScript", icon: <FileCode size={20} />, color: "bg-yellow-300" },
  { name: "TypeScript", icon: <Code2 size={20} />, color: "bg-blue-400" },
  { name: "Python", icon: <Terminal size={20} />, color: "bg-green-300" },
  { name: "Java", icon: <Coffee size={20} />, color: "bg-red-300" },
  { name: "C", icon: <Code size={20} />, color: "bg-gray-300" },
  { name: "PHP", icon: <Server size={20} />, color: "bg-purple-300" },
  { name: "Dart", icon: <Smartphone size={20} />, color: "bg-cyan-300" },
  { name: "Kotlin", icon: <Smartphone size={20} />, color: "bg-indigo-300" },
];

const TECH_ROW_2 = [
  { name: "React", icon: <Atom size={20} />, color: "bg-cyan-200" },
  { name: "Next.js", icon: <Zap size={20} />, color: "bg-gray-200" },
  { name: "Tailwind", icon: <Wind size={20} />, color: "bg-teal-300" },
  { name: "Bootstrap", icon: <Layout size={20} />, color: "bg-purple-400" },
  { name: "Flutter", icon: <Smartphone size={20} />, color: "bg-blue-400" },
  { name: "Laravel", icon: <Box size={20} />, color: "bg-red-400" },
  { name: "MySQL", icon: <Database size={20} />, color: "bg-orange-400" },
  { name: "Firebase", icon: <Flame size={20} />, color: "bg-yellow-400" },
  { name: "Vite", icon: <Zap size={20} />, color: "bg-purple-200" },
];

// --- DATA SERVICES ---
const SERVICES = [
  {
    title: "Web Engineering",
    price: "Full-Stack",
    desc: "Developing scalable web applications using Next.js and modern JavaScript ecosystems.",
    icon: <Layout size={28} />,
    color: "bg-blue-400"
  },
  {
    title: "Mobile Development",
    price: "Cross-Platform",
    desc: "Creating high-performance mobile apps for Android and iOS using Flutter and Dart.",
    icon: <Smartphone size={28} />,
    color: "bg-green-400"
  },
  {
    title: "Technical Consulting",
    price: "Solutions",
    desc: "Providing architectural advice, code reviews, and strategic technical planning for projects.",
    icon: <Package size={28} />,
    color: "bg-yellow-400"
  }
];

// --- DATA FAQ ---
const FAQS = [
  {
    question: "What is your primary tech stack?",
    answer: "I focus on Full-Stack development using Next.js and Tailwind CSS for the Frontend, and Node.js or Laravel for the Backend."
  },
  {
    question: "Are you open to project collaborations?",
    answer: "Absolutely! I am always open to collaborating on innovative projects, whether it's researching the latest technologies or contributing to open-source."
  },
  {
    question: "How do you ensure code quality?",
    answer: "I prioritize clean code principles and structured architecture to ensure applications are easy to maintain and scale in the long run."
  },
  {
    question: "What is your main focus when building a system?",
    answer: "Functionality and User Experience. I make sure every line of code I write delivers real, effective solutions for users."
  }
];

// --- CUSTOM HOOKS ---
const useTypingEffect = (text: string, typingSpeed: number = 150, deletingSpeed: number = 80, pauseTime: number = 2000) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const index = useRef(0);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (index.current < text.length) {
          setDisplayedText(text.slice(0, index.current + 1));
          index.current++;
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (index.current > 0) {
          setDisplayedText(text.slice(0, index.current - 1));
          index.current--;
        } else {
          setIsDeleting(false);
          index.current = 0;
        }
      }
    };
    const timeoutId = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, text, typingSpeed, deletingSpeed, pauseTime]);

  return displayedText;
};

const useGithubStats = () => {
  const [repos, setRepos] = useState<number | null>(null);
  useEffect(() => {
    fetch('https://api.github.com/users/rezaaplvv')
      .then(res => res.json())
      .then(data => {
        if (data.public_repos) {
          setRepos(data.public_repos);
        }
      })
      .catch(err => console.error("GitHub fetch error:", err));
  }, []);
  return { repos };
};

// --- COMPONENTS ---

// 1. COMPONENT: THEME PULL SWITCH (Tali Lampu)
const ThemePullSwitch = ({ isDarkMode, toggleTheme }: { isDarkMode: boolean, toggleTheme: () => void }) => {
  const y = useMotionValue(0);

  // Hubungkan scaleY (GPU-accelerated transform) langsung ke MotionValue y
  const scaleY = useTransform(y, (latest) => (80 + latest) / 200);

  // Fungsi untuk memutar suara klik
  const playClickSound = () => {
    const audio = new Audio('/click.mp3');
    audio.volume = 0.5;
    audio.play().catch(err => console.log("Audio play error:", err));
  };

  const handleDragEnd = (_: any, info: any) => {
    // Trigger jika ditarik cukup jauh
    if (info.offset.y > 80) {
      playClickSound(); // Memutar suara tepat saat saklar terpicu

      // Berikan sedikit jeda (150ms) agar animasi pegas selesai terlebih dahulu sebelum memicu re-render tema halaman
      setTimeout(() => {
        toggleTheme();
      }, 150);
    }
    // Kembalikan paksa ke 0 agar tali memantul ke atas
    y.set(0);
  };

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 w-12 h-[320px] pointer-events-none flex flex-col items-center">
      {/* Base */}
      <div className={`w-6 h-6 rounded-full border-2 ${isDarkMode ? 'bg-gray-800 border-white' : 'bg-gray-200 border-black'} absolute -top-3 z-20`}></div>

      {/* Tali: Menggunakan scaleY dengan origin-top agar memanjang tanpa memicu layout recalculation */}
      <motion.div
        style={{ scaleY, x: "-50%" }}
        className={`w-1 h-[200px] ${isDarkMode ? 'bg-white' : 'bg-black'} absolute top-0 left-1/2 z-10 origin-top pointer-events-none`}
      />

      {/* Handle/Bandul: Digerakkan menggunakan y translate bawaan absolute, diatur top: 80px sebagai starting point */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 200 }}
        dragElastic={0.1}
        dragSnapToOrigin={true}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 25 }} // Mengontrol kelembutan pegas bawaan Framer Motion
        onDrag={(_, info) => y.set(info.offset.y)}
        onDragEnd={handleDragEnd}
        style={{ y, x: "-50%", top: 80 }}
        className="absolute left-1/2 z-20 cursor-grab active:cursor-grabbing pointer-events-auto rope-trigger"
      >
        <div className={`w-10 h-10 rounded-full border-4 ${isDarkMode ? 'bg-yellow-400 border-white shadow-[0_0_20px_rgba(250,204,21,0.8)]' : 'bg-black border-black'} flex items-center justify-center transition-transform active:scale-90`}>
          {isDarkMode ? <Lightbulb size={20} className="text-black" /> : <Moon size={20} className="text-white" />}
        </div>
      </motion.div>
    </div>
  );
};


const LoopedTypingText = ({ text, secondLineStyle }: { text: string, secondLineStyle?: string }) => {
  const typedText = useTypingEffect(text);
  const hasSpace = typedText.includes(" ");
  const parts = typedText.split(" ");
  const firstWord = parts[0];
  const restWords = parts.slice(1).join(" ");

  return (
    <span className="inline-block leading-tight">
      {firstWord}
      {hasSpace && (
        <>
          <br />
          <span className={secondLineStyle}>
            {restWords}
          </span>
        </>
      )}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[4px] h-[0.8em] bg-current ml-1 align-middle"
      ></motion.span>
    </span>
  );
};

const DraggableTech = ({ icon, label, className, delay, color }: { icon: React.ReactNode, label: string, className?: string, delay: number, color: string }) => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      whileHover={{ scale: 1.1, cursor: "grab" }}
      whileDrag={{ scale: 1.2, cursor: "grabbing" }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", delay: delay }}
      className={`absolute z-20 flex flex-col items-center ${className}`}
    >
      <div className={`p-3 border-2 border-black ${color} text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center`}>
        {icon}
      </div>
      <div className="mt-1 bg-black text-white px-2 py-0.5 text-[10px] font-bold uppercase">
        {label}
      </div>
    </motion.div>
  );
};

const BrutalTag = ({ text, isDarkMode }: { text: string, isDarkMode: boolean }) => (
  <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider border-2 ${isDarkMode ? 'border-white bg-black text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]' : 'border-black bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'}`}>
    {text}
  </span>
);

const NavLink = ({ href, children, onClick, isDarkMode }: { href: string, children: React.ReactNode, onClick?: () => void, isDarkMode?: boolean }) => (
  <Link
    href={href}
    onClick={onClick}
    className={`font-bold text-sm uppercase tracking-wider px-3 py-1 transition-all border-2 border-transparent ${isDarkMode ? 'hover:bg-white hover:text-black hover:border-white' : 'hover:bg-black hover:text-white hover:border-black'}`}
  >
    {children}
  </Link>
);

const Marquee = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let currentSpeed = 0;
    let targetSpeed = 0;
    let updateSpeed: () => void;

    const ctx = gsap.context(() => {
      const tracks = containerRef.current?.querySelectorAll(".marquee-track");
      if (!tracks || tracks.length === 0) return;

      // Animasi horizontal loop dasar (kecepatan dasar = 1)
      const loopTween = gsap.to(tracks, {
        xPercent: -100,
        ease: "none",
        duration: 35,
        repeat: -1,
      });
      loopTween.timeScale(1);

      // ScrollTrigger untuk menangkap kecepatan scroll
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          // targetSpeed proporsional dengan kecepatan scroll (arah diatur oleh tanda +/-)
          targetSpeed = velocity * 0.003;
        },
      });

      // Ticker update loop untuk meredam dan menghaluskan pergerakan setiap frame
      updateSpeed = () => {
        // Interpolasi halus (lerp) dari kecepatan saat ini ke target
        currentSpeed += (targetSpeed - currentSpeed) * 0.08;

        // Hitung kecepatan loop secara simetris untuk scroll ke bawah dan ke atas
        let speed;
        if (currentSpeed >= 0) {
          speed = currentSpeed + 1;
        } else if (currentSpeed >= -1) {
          speed = 3 * currentSpeed + 1;
        } else {
          speed = currentSpeed - 1;
        }
        loopTween.timeScale(speed);

        // Redam target speed ke 0 (secara eksponensial) saat tidak ada scroll baru
        targetSpeed *= 0.92;
      };

      gsap.ticker.add(updateSpeed);
    }, containerRef);

    return () => {
      ctx.revert();
      if (updateSpeed) {
        gsap.ticker.remove(updateSpeed);
      }
    };
  }, []);

  const phrases = Array(4).fill(
    "FULL-STACK DEVELOPER  •  UI/UX DESIGNER  •  FREELANCER  •  READY TO WORK  •"
  );

  return (
    <div
      ref={containerRef}
      className={`w-full ${isDarkMode ? "bg-[#FDE047] border-white" : "bg-[#FDE047] border-black"
        } border-y-4 py-4 overflow-hidden flex relative z-20`}
    >
      <div className="flex whitespace-nowrap flex-row">
        {/* Track 1 */}
        <div className="marquee-track flex whitespace-nowrap flex-row shrink-0 gap-6 pr-6">
          {phrases.map((phrase, i) => (
            <span
              key={`t1-${i}`}
              className="text-2xl md:text-3xl font-black uppercase text-black"
            >
              {phrase}
            </span>
          ))}
        </div>
        {/* Track 2 */}
        <div className="marquee-track flex whitespace-nowrap flex-row shrink-0 gap-6 pr-6">
          {phrases.map((phrase, i) => (
            <span
              key={`t2-${i}`}
              className="text-2xl md:text-3xl font-black uppercase text-black"
            >
              {phrase}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, icon, color, isRealtime = false, isDarkMode }: { label: string, value: number, icon: React.ReactNode, color: string, isRealtime?: boolean, isDarkMode: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const node = nodeRef.current;
    if (!node) return;
    const controls = animate(0, value, {
      duration: 2,
      onUpdate: (latest) => {
        node.textContent = Math.floor(latest).toString();
      }
    });
    return () => controls.stop();
  }, [value, isInView]);

  return (
    <div ref={containerRef} className={`${isDarkMode ? 'bg-[#1a1a1a] border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] text-white' : 'bg-white border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black'} border-4 p-4 hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col items-center justify-center gap-2 group`}>
      <div className={`p-3 rounded-full border-2 ${isDarkMode ? 'border-white text-black' : 'border-black'} ${color} mb-1 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div className="text-4xl font-black flex items-start">
        <span ref={nodeRef}>0</span>
        <span className="text-lg mt-1">+</span>
      </div>
      <div className={`text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        {label} {isRealtime && <span className="text-green-500 animate-pulse ml-1">●</span>}
      </div>
    </div>
  );
};

const TechStickerMarquee = ({ items, direction = "left", speed = 30, isDarkMode }: { items: any[], direction?: "left" | "right", speed?: number, isDarkMode: boolean }) => {
  return (
    <div className="w-full overflow-hidden flex py-4">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 px-4 py-2 border-4 ${isDarkMode ? 'border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]' : 'border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'} ${item.color} transform hover:-translate-y-1 transition-transform`}
          >
            <div className="text-black">{item.icon}</div>
            <span className="font-black text-sm uppercase text-black">{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- FAQ ITEM COMPONENT ---
const FaqItem = ({ question, answer, isDarkMode }: { question: string, answer: string, isDarkMode: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-card opacity-0 ${isDarkMode ? 'bg-[#1a1a1a] border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]' : 'bg-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'} border-4 overflow-hidden transition-all`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-4 flex items-center justify-between text-left font-bold text-lg ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-yellow-100'} transition-colors`}
      >
        <span className="uppercase">{question}</span>
        <ChevronDown className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`border-t-4 ${isDarkMode ? 'border-white' : 'border-black'}`}
          >
            <div className={`p-4 font-medium ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-800'}`}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default function Home() {
  const containerRef = useRef(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const connectSectionRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const footerWrapperRef = useRef<HTMLElement>(null);
  const footerNamePanelRef = useRef<HTMLDivElement>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { repos } = useGithubStats();

  // STATE DARK MODE
  const [isDarkMode, setIsDarkMode] = useState(false); useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    }

    const cleanupListeners: Array<{ el: HTMLElement; enter: () => void; leave: () => void }> = [];

    const ctx = gsap.context(() => {
      // 1. Text Masking Reveal for headers
      const headers = document.querySelectorAll(".section-header-reveal");
      headers.forEach((header) => {
        const targets = header.querySelectorAll(".reveal-word");
        if (targets.length > 0) {
          gsap.fromTo(
            targets,
            { y: "100%" },
            {
              y: "0%",
              stagger: 0.05,
              ease: "power2.out",
              scrollTrigger: {
                trigger: header,
                start: "top 90%",
                end: "top 60%",
                scrub: 1,
              },
            }
          );
        }
      });

      // 2. Projects Section: Horizontal Scroll Showcase (Pinned)
      const cardsContainer = cardsContainerRef.current;
      const section = sectionRef.current;
      if (cardsContainer && section) {
        const getScrollAmount = () => {
          return cardsContainer.scrollWidth - window.innerWidth;
        };

        gsap.to(cardsContainer, {
          x: () => -getScrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            start: "top 80px",
            end: () => `+=${getScrollAmount()}`,
            invalidateOnRefresh: true,
          },
        });
      }

      // 3. Core Expertise Section: Staggered Slide-up Entrance & Hover Effects
      const servicesSection = document.querySelector("#services");
      if (servicesSection) {
        const cards = servicesSection.querySelectorAll(".service-card");
        if (cards.length > 0) {
          // Slide up & Fade in reveal (target wrapper)
          gsap.fromTo(
            servicesSection.querySelectorAll(".service-card-wrapper"),
            {
              opacity: 0,
              y: 40,
            },
            {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              ease: "power2.out",
              duration: 0.8,
              scrollTrigger: {
                trigger: servicesSection,
                start: "top 80%",
                toggleActions: "play none none reverse",
              }
            }
          );

          // Pasang listener hover interaktif menggunakan GSAP
          cards.forEach((card) => {
            const htmlEl = card as HTMLElement;

            const handleMouseEnter = () => {
              const isDark = htmlEl.classList.contains("border-white");
              const shadowColor = isDark ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)";
              gsap.to(htmlEl, {
                x: 8,
                y: 8,
                boxShadow: `0px 0px 0px 0px ${shadowColor}`,
                duration: 0.2,
                ease: "power2.out",
                overwrite: "auto",
              });
            };

            const handleMouseLeave = () => {
              const isDark = htmlEl.classList.contains("border-white");
              const shadowColor = isDark ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)";
              gsap.to(htmlEl, {
                x: 0,
                y: 0,
                boxShadow: `8px 8px 0px 0px ${shadowColor}`,
                duration: 0.2,
                ease: "power2.out",
                overwrite: "auto",
              });
            };

            htmlEl.addEventListener("mouseenter", handleMouseEnter);
            htmlEl.addEventListener("mouseleave", handleMouseLeave);
            cleanupListeners.push({ el: htmlEl, enter: handleMouseEnter, leave: handleMouseLeave });
          });
        }
      }

      // 4. FAQ Section: Staggered Pop-up Entrance
      const faqSection = document.querySelector("#faq");
      if (faqSection) {
        const faqList = faqSection.querySelector(".faq-list");
        const items = faqSection.querySelectorAll(".faq-card");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.5,
              duration: 2.0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: faqList || faqSection,
                start: "top 85%",
                toggleActions: "play none none reverse",
              }
            }
          );
        }
      }

      // 5. Contact Section: Split Bounce-in Entrance
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        const leftSide = contactSection.querySelector(".contact-left");
        const rightSide = contactSection.querySelector(".contact-right");
        if (leftSide && rightSide) {
          gsap.fromTo(
            leftSide,
            { x: -100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: contactSection,
                start: "top 80%",
                toggleActions: "play none none reverse",
              }
            }
          );
          gsap.fromTo(
            rightSide,
            { x: 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: contactSection,
                start: "top 80%",
                toggleActions: "play none none reverse",
              }
            }
          );
        }
      }

      // 6. Connect Section: Staggered Social Links Reveal & Motion Path
      const connectSection = connectSectionRef.current;
      if (connectSection) {
        const btns = connectSection.querySelectorAll(".social-link-btn");
        if (btns.length > 0) {
          gsap.fromTo(
            btns,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: connectSection,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }

      const plane = planeRef.current;
      const connectSec = connectSectionRef.current;
      if (plane && connectSec) {
        gsap.to(plane, {
          ease: "none",
          scrollTrigger: {
            trigger: connectSec,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
          motionPath: {
            path: "#connectMotionPath",
            autoRotate: true,
            align: "#connectMotionPath",
            alignOrigin: [0.5, 0.5],
          }
        });
      }

      // 7. Footer Reveal: Staggered Character Mask Reveal
      const footerNamePanel = footerNamePanelRef.current;
      if (footerNamePanel) {
        const chars = footerNamePanel.querySelectorAll(".footer-reveal-char");
        if (chars.length > 0) {
          gsap.fromTo(
            chars,
            { y: "100%" },
            {
              y: "0%",
              stagger: 0.07,
              duration: 1.0,
              ease: "power3.out",
              scrollTrigger: {
                trigger: footerNamePanel,
                start: "top 85%",
                toggleActions: "play none none reverse",
              }
            }
          );
        }
      }



      // Pastikan semua ScrollTrigger diurutkan dan dikalkulasi ulang posisinya setelah render
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
      cleanupListeners.forEach(({ el, enter, leave }) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [formData, setFormData] = useState({
    identity: "",
    coordinates: "",
    transmission: ""
  });

  const [formErrors, setFormErrors] = useState({
    identity: "",
    coordinates: "",
    transmission: ""
  });

  const handleTransmit = () => {
    let hasError = false;
    const errors = { identity: "", coordinates: "", transmission: "" };

    if (!formData.identity.trim()) {
      errors.identity = "Name cannot be empty";
      hasError = true;
    }

    if (!formData.coordinates.trim()) {
      errors.coordinates = "Email cannot be empty";
      hasError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.coordinates.trim())) {
        errors.coordinates = "Invalid email format";
        hasError = true;
      }
    }

    if (!formData.transmission.trim()) {
      errors.transmission = "Message cannot be empty";
      hasError = true;
    }

    setFormErrors(errors);

    if (hasError) {
      return;
    }

    const phoneNumber = "6283133387676"; // Ganti dengan nomor WA asli
    const message = `*NEW PROJECT TRANSMISSION*%0A` +
      `---------------------------------%0A` +
      `*// IDENTITY:* ${formData.identity || 'Unknown'}%0A` +
      `*// COORDINATES:* ${formData.coordinates || 'No Email'}%0A` +
      `*// TRANSMISSION:*%0A${formData.transmission || 'No Details'}%0A` +
      `---------------------------------`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div ref={containerRef} className={`min-h-screen ${isDarkMode ? 'bg-[#0a0a0a] text-white selection:bg-white selection:text-black' : 'bg-[#FFFDF5] text-black selection:bg-black selection:text-white'} font-sans relative overflow-x-hidden transition-colors duration-500 pt-20`}>

      {/* --- BACKGROUND GRID (Dynamic Color) --- */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${isDarkMode ? '#ffffff' : '#000000'} 1px, transparent 1px), linear-gradient(90deg, ${isDarkMode ? '#ffffff' : '#000000'} 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      ></div>



      {/* ================= NAVBAR ================= */}
      <nav className={`fixed top-0 left-0 right-0 h-20 ${isDarkMode ? 'bg-[#0a0a0a] border-white' : 'bg-[#FFFDF5] border-black'} border-b-4 z-50 px-6 md:px-12 flex items-center justify-between transition-colors duration-500`}>
        <Link href="#hero" className="flex items-center gap-2 group">
          <div className={`font-black text-xl px-2 py-1 border-2 transition-colors ${isDarkMode ? 'bg-white text-black border-white group-hover:bg-[#FDE047] group-hover:text-black' : 'bg-black text-white border-black group-hover:bg-[#FDE047] group-hover:text-black'}`}>
            PORTFOLIO
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <NavLink href="#hero" isDarkMode={isDarkMode}>About</NavLink>
          <NavLink href="#projects" isDarkMode={isDarkMode}>Projects</NavLink>
          <NavLink href="#services" isDarkMode={isDarkMode}>Skills</NavLink>
          <NavLink href="#faq" isDarkMode={isDarkMode}>FAQ</NavLink>
        </div>
        <div className="hidden md:block">
          <Link
            href="#contact"
            className={`bg-[#34D399] border-2 ${isDarkMode ? 'border-white text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]' : 'border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'} px-4 py-2 font-bold text-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2`}
          >
            <MessageCircle size={16} />
            CONTACT ME
          </Link>
        </div>
        <button
          className={`md:hidden p-2 border-2 ${isDarkMode ? 'border-white text-white shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]' : 'border-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'} active:shadow-none active:translate-y-[3px]`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fixed top-20 left-0 right-0 ${isDarkMode ? 'bg-[#0a0a0a] border-white text-white' : 'bg-white border-black text-black'} border-b-4 z-40 p-6 flex flex-col gap-4 shadow-xl md:hidden`}
        >
          <NavLink href="#hero" onClick={() => setIsMobileMenuOpen(false)} isDarkMode={isDarkMode}>About</NavLink>
          <NavLink href="#projects" onClick={() => setIsMobileMenuOpen(false)} isDarkMode={isDarkMode}>Projects</NavLink>
          <NavLink href="#services" onClick={() => setIsMobileMenuOpen(false)} isDarkMode={isDarkMode}>Skills</NavLink>
          <NavLink href="#faq" onClick={() => setIsMobileMenuOpen(false)} isDarkMode={isDarkMode}>FAQ</NavLink>
          <div className={`h-[2px] ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} my-2`}></div>
          <Link
            href="https://wa.me/6283133387676"
            className={`bg-[#34D399] text-center border-2 ${isDarkMode ? 'border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] text-black' : 'border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'} px-4 py-3 font-bold text-sm`}
          >
            CHAT WHATSAPP
          </Link>
        </motion.div>
      )}

      <main className="relative z-10">

        {/* ================= HERO SECTION ================= */}
        <section id="hero" className="min-h-[calc(100vh-80px)] max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12 pt-40 md:pt-0 mb-20 relative">

          {/* --- TALI LAMPU (PULL SWITCH) --- */}
          {/* Posisinya Absolute dalam Hero, jadi ikut scroll */}
          <ThemePullSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

          {/* LEFT: TEXT */}
          <div className="flex-[1.5] text-center md:text-left space-y-6 order-2 md:order-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`inline-block px-4 py-2 bg-[#FDE047] border-2 ${isDarkMode ? 'border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]' : 'border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}
            >
              <span className="font-bold text-sm tracking-widest uppercase flex items-center gap-2 text-black">
                <span className={`w-2 h-2 bg-red-500 rounded-full animate-pulse border ${isDarkMode ? 'border-white' : 'border-black'}`}></span>
                Open for Work
              </span>
            </motion.div>

            <div className="space-y-2 min-h-[160px] md:min-h-[220px] w-full">
              <h1 className="text-6xl md:text-8xl font-black uppercase leading-[1.1] tracking-normal block overflow-visible">
                <div className="whitespace-nowrap flex flex-col items-center md:items-start">
                  <LoopedTypingText
                    text="Reza Pahlepi"
                    secondLineStyle={`text-transparent ${isDarkMode ? 'text-stroke-3-dark md:text-stroke-4-dark' : 'text-stroke-3 md:text-stroke-4'}`}
                  />
                </div>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'} inline-block px-2 py-1 rotate-1 mt-2`}
              >
                Full-Stack Developer.
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className={`text-lg font-medium border-l-4 ${isDarkMode ? 'border-white text-gray-300' : 'border-black'} pl-4 py-2 mt-4`}
              >
                Full-Stack Developer building modern, secure, and user-centric web solutions for businesses and startups.
                <br />
                Focused on performance, scalability, and clean design.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-6"
            >
              <Link
                href="#projects"
                onClick={(e) => handleScroll(e, "projects")}
                className={`group relative px-8 py-4 bg-[#60A5FA] border-2 ${isDarkMode ? 'border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]' : 'border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'} font-bold text-black hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all`}
              >
                VIEW PROJECTS
              </Link>
              <div className={`flex items-center gap-2 font-mono text-sm font-bold bg-white border-2 ${isDarkMode ? 'border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] text-black' : 'border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'} px-3 py-1`}>
                DOWNLOAD CV
              </div>
            </motion.div>
          </div>

          {/* RIGHT: PHOTO FRAME */}
          {/* RIGHT: PHOTO FRAME */}
          <div className="flex-1 w-full h-[400px] md:h-[500px] relative flex items-center justify-center order-1 md:order-2 mt-10 md:mt-0">
            <motion.div
              initial={{ rotate: 3 }}
              whileHover={{ rotate: 0 }}
              className={`w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-white border-4 ${isDarkMode ? 'border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]' : 'border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]'} relative z-10`}
            >
              <Image
                src="/PROFIL.PNG"
                alt="Reza Pahlepi"
                fill
                className="object-cover transition-all duration-300"
                priority
              />
              <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#FDE047]/90 border-2 ${isDarkMode ? 'border-white' : 'border-black'} rotate-[-2deg] z-20`}></div>
            </motion.div>

            <div className={`absolute top-[5%] right-[15%] w-20 h-20 bg-[#F472B6] border-2 ${isDarkMode ? 'border-white' : 'border-black'} rounded-full z-0`}></div>
            <div className={`absolute bottom-[5%] left-[10%] w-16 h-16 bg-[#34D399] border-2 ${isDarkMode ? 'border-white' : 'border-black'} z-0 rotate-45`}></div>

            <DraggableTech delay={1.2} color="bg-blue-300" className="top-[10%] right-[5%]" label="Mobile" icon={<Smartphone size={24} />} />
            <DraggableTech delay={1.3} color="bg-yellow-300" className="top-[40%] left-[0%]" label="Frontend" icon={<Code2 size={24} />} />
            <DraggableTech delay={1.4} color="bg-green-300" className="bottom-[5%] right-[15%]" label="Backend" icon={<Database size={24} />} />
          </div>
        </section>

        {/* ================= MARQUEE SEPARATOR ================= */}
        <Marquee isDarkMode={isDarkMode} />

        {/* ================= LIVE STATS ================= */}
        <section className={`py-20 ${isDarkMode ? 'bg-[#0a0a0a] border-white' : 'bg-white border-black'} border-b-4`}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard
                label="GitHub Repos"
                value={repos || 15}
                isRealtime={true}
                icon={<Github size={24} />}
                color="bg-gray-200"
                isDarkMode={isDarkMode}
              />
              <StatCard
                label="Commits (Est)"
                value={540}
                icon={<GitCommit size={24} />}
                color="bg-green-300"
                isDarkMode={isDarkMode}
              />
              <StatCard
                label="Happy Clients"
                value={30}
                icon={<Users size={24} />}
                color="bg-blue-300"
                isDarkMode={isDarkMode}
              />
              <StatCard
                label="Projects Completed"
                value={25}
                icon={<Briefcase size={24} />}
                color="bg-yellow-300"
                isDarkMode={isDarkMode}
              />
            </div>
          </div>
        </section>


        <section className={`py-12 ${isDarkMode ? 'bg-[#0a0a0a] border-white' : 'bg-[#FFFDF5] border-black'} border-b-4 overflow-hidden`}>
          <div className="section-header-reveal max-w-7xl mx-auto px-6 md:px-12 mb-8 text-center overflow-hidden flex justify-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter flex flex-wrap gap-x-3 justify-center">
              <span className="inline-block overflow-hidden py-1">
                <span className="reveal-word inline-block translate-y-full">My</span>
              </span>
              <span className="inline-block overflow-hidden py-1">
                <span className={`reveal-word inline-block translate-y-full text-transparent ${isDarkMode ? 'text-stroke-2-dark' : 'text-stroke-2'}`}>Arsenal</span>
              </span>
            </h2>
          </div>
          <TechStickerMarquee items={TECH_ROW_1} direction="left" speed={30} isDarkMode={isDarkMode} />
          <TechStickerMarquee items={TECH_ROW_2} direction="right" speed={30} isDarkMode={isDarkMode} />
        </section>

        {/* ================= PROJECT VAULT ================= */}
        <div id="projects" className="pt-20 max-w-7xl mx-auto w-full px-6 md:px-12 mb-8">
          <div className="section-header-reveal border-b-4 border-current pb-4 flex justify-between items-end overflow-hidden">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter flex flex-wrap gap-x-3">
              <span className="inline-block overflow-hidden py-1">
                <span className="reveal-word inline-block translate-y-full">My</span>
              </span>
              <span className="inline-block overflow-hidden py-1">
                <span className={`reveal-word inline-block translate-y-full text-transparent ${isDarkMode ? 'text-stroke-2-dark' : 'text-stroke-2'}`}>Projects</span>
              </span>
            </h2>
            <div className={`hidden md:block text-xs font-mono font-bold border-2 ${isDarkMode ? 'border-white bg-black text-white' : 'border-black bg-white'} px-2 py-1`}>
              See All Projects (GitHub){' '}
              <a href="https://github.com/rezaaplvv" target="_blank" className="ml-2 underline decoration-4 decoration-current underline-offset-4 font-normal">
                here
              </a>
            </div>
          </div>
        </div>

        {/* Pinned horizontal scroll container */}
        <section ref={sectionRef} className="relative min-h-[calc(100vh-80px)] overflow-hidden flex items-center bg-transparent">
          <div className="overflow-hidden w-full">
            <div ref={cardsContainerRef} className="flex flex-nowrap gap-8 pl-6 md:pl-12 pr-6 md:pr-12 py-6 shrink-0">
              {PROJECTS.map((project, index) => (
                <div
                  key={index}
                  className={`w-[85vw] md:w-[480px] shrink-0 group relative bg-white border-4 ${isDarkMode ? 'border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]' : 'border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
                    } hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-200 overflow-hidden flex flex-col`}
                >
                  {/* Header Card */}
                  <div className={`h-10 border-b-4 ${isDarkMode ? 'border-white' : 'border-black'} bg-white flex items-center justify-between px-4`}>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
                    </div>
                    <div className="text-xs font-bold font-mono uppercase tracking-widest text-black">
                      {project.title}.exe
                    </div>
                  </div>

                  {/* Image & Overlay */}
                  <div className={`relative w-full aspect-[16/9] shrink-0 border-b-4 ${isDarkMode ? 'border-white' : 'border-black'} overflow-hidden bg-gray-100`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-black/40 backdrop-blur-[2px]">
                      {project.demoLink && (
                        <Link href={project.demoLink} target="_blank" className={`bg-white border-2 ${isDarkMode ? 'border-white' : 'border-black'} px-6 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black hover:scale-105 transition-transform flex items-center gap-2`}>
                          <Zap size={16} className="fill-black" /> VIEW DEMO
                        </Link>
                      )}
                      <Link href={project.docLink} target="_blank" className={`bg-[#FDE047] border-2 ${isDarkMode ? 'border-white' : 'border-black'} px-6 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black hover:scale-105 transition-transform flex items-center gap-2`}>
                        <Github size={16} /> FULL SHOWCASE
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between bg-white text-black">
                    <div>
                      <Link href={project.demoLink || project.docLink} target="_blank" className="hover:underline decoration-4 decoration-black underline-offset-4">
                        <h3 className="text-2xl font-black uppercase mb-2 leading-none flex items-center gap-2">
                          {project.title}
                          <ArrowUpRight className="w-6 h-6 transform group-hover:rotate-45 transition-transform" />
                        </h3>
                      </Link>
                      <p className="text-sm font-medium text-gray-800 leading-tight mb-4 border-l-2 border-black pl-2">
                        {project.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t, i) => (
                        <BrutalTag key={i} text={t} isDarkMode={false} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Final CTA Card to See All Projects */}
              <div className={`w-[85vw] md:w-[400px] shrink-0 group relative bg-[#FDE047] border-4 ${isDarkMode ? 'border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]' : 'border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
                } hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-200 overflow-hidden flex flex-col justify-center items-center p-8 text-center`}
                style={{ minHeight: "400px" }}>
                <h3 className="text-3xl font-black uppercase mb-4 text-black">
                  Want to see more?
                </h3>
                <p className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-6 max-w-[280px]">
                  Explore the full vault containing 17+ projects with filters and searches.
                </p>
                <TransitionLink
                  href="/projects"
                  className="bg-black text-white hover:bg-white hover:text-black border-2 border-black px-6 py-3 font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  SEE MORE <ArrowUpRight size={20} />
                </TransitionLink>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className={`pt-32 pb-20 max-w-7xl mx-auto px-6 md:px-12 border-b-4 ${isDarkMode ? 'border-white' : 'border-black'}`}>
          <div className="section-header-reveal mb-12 border-b-4 pb-4 flex justify-end text-right overflow-hidden">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter flex flex-wrap gap-x-3 justify-end">
              <span className="inline-block overflow-hidden py-1">
                <span className="reveal-word inline-block translate-y-full">Core</span>
              </span>
              <span className="inline-block overflow-hidden py-1">
                <span className={`reveal-word inline-block translate-y-full text-transparent ${isDarkMode ? 'text-stroke-2-dark' : 'text-stroke-2'}`}>Expertise</span>
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {SERVICES.map((service, index) => (
              <div key={index} className="service-card-wrapper opacity-0">
                <div className={`service-card bg-white border-4 ${isDarkMode ? 'border-white text-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]' : 'border-black text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'} p-6 h-full`}>
                  <div className={`w-16 h-16 ${service.color} border-2 border-black flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-2 text-black">{service.title}</h3>
                  <div className="text-sm font-bold bg-black text-white inline-block px-2 py-1 mb-3">
                    {service.price}
                  </div>
                  <p className="font-medium text-gray-700 leading-tight">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section id="faq" className={`py-20 ${isDarkMode ? 'bg-[#0a0a0a] border-white' : 'bg-[#F3F4F6] border-black'} border-b-4`}>
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="section-header-reveal text-center mb-12 overflow-hidden flex justify-center">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter flex flex-wrap gap-x-3 justify-center">
                <span className="inline-block overflow-hidden py-1">
                  <span className="reveal-word inline-block translate-y-full">Common</span>
                </span>
                <span className="inline-block overflow-hidden py-1">
                  <span className={`reveal-word inline-block translate-y-full px-2 ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>Questions</span>
                </span>
              </h2>
            </div>
            <div className="faq-list flex flex-col gap-4">
              {FAQS.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} isDarkMode={isDarkMode} />
              ))}
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION (White Paper Style with Adaptive Shadow) --- */}
        <section id="contact" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto mb-20">
          <div
            className="relative bg-white text-black border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] p-8 md:p-12 overflow-hidden transition-shadow duration-300"
          >
            {/* BADGE: START A PROJECT */}
            <div className="absolute -top-2 -left-2 md:top-0 md:left-8 bg-[#FDE047] border-4 border-black px-6 py-2 rotate-[-3deg] z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-black text-black font-mono tracking-widest text-sm md:text-base uppercase">
                Start A Project
              </span>
            </div>

            {/* DEKORASI GRID */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-20 mt-10 md:mt-8 relative z-0">

              {/* KIRI: INFORMASI */}
              <div className="contact-left opacity-0 flex-1 space-y-8">
                <div>
                  <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] text-black mb-6">
                    LET'S <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">TALK</span> <br />
                    CODE.
                  </h2>
                  <div className="text-lg font-medium font-mono text-gray-800 border-l-4 border-black pl-6 py-2 bg-gray-50/50">
                    <p>I am currently available for freelance work and open to full-time opportunities.</p>
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-4 group">
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center border-2 border-transparent group-hover:scale-110 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-gray-500 uppercase font-bold tracking-widest">Base Station</p>
                      <p className="font-bold text-xl text-black px-1">
                        Medan, Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* KANAN: FORM INPUT */}
              <div className="contact-right opacity-0 flex-1 bg-gray-50 border-2 border-black p-6 md:p-8 relative mt-4 md:mt-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                <form className="space-y-5">
                  <div className="space-y-1">
                    <label className="text-xs font-black font-mono uppercase tracking-widest text-gray-500">// 01. IDENTITY</label>
                    <input
                      type="text"
                      placeholder="Your Name..."
                      value={formData.identity}
                      onChange={(e) => {
                        setFormData({ ...formData, identity: e.target.value });
                        if (formErrors.identity) setFormErrors({ ...formErrors, identity: "" });
                      }}
                      className={`w-full bg-white border-2 p-3 font-bold text-black outline-none focus:bg-[#FDE047] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:font-normal placeholder:text-gray-400 ${formErrors.identity ? "border-red-600 focus:shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]" : "border-black"
                        }`}
                    />
                    {formErrors.identity && (
                      <p className="text-red-600 font-bold text-xs mt-1 font-mono uppercase tracking-wider">
                        * {formErrors.identity}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-black font-mono uppercase tracking-widest text-gray-500">// 02. COORDINATES</label>
                    <input
                      type="email"
                      placeholder="Your Email..."
                      value={formData.coordinates}
                      onChange={(e) => {
                        setFormData({ ...formData, coordinates: e.target.value });
                        if (formErrors.coordinates) setFormErrors({ ...formErrors, coordinates: "" });
                      }}
                      className={`w-full bg-white border-2 p-3 font-bold text-black outline-none focus:bg-[#FDE047] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:font-normal placeholder:text-gray-400 ${formErrors.coordinates ? "border-red-600 focus:shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]" : "border-black"
                        }`}
                    />
                    {formErrors.coordinates && (
                      <p className="text-red-600 font-bold text-xs mt-1 font-mono uppercase tracking-wider">
                        * {formErrors.coordinates}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-black font-mono uppercase tracking-widest text-gray-500">// 03. MESSAGE</label>
                    <textarea
                      rows={4}
                      placeholder="Project Details..."
                      value={formData.transmission}
                      onChange={(e) => {
                        setFormData({ ...formData, transmission: e.target.value });
                        if (formErrors.transmission) setFormErrors({ ...formErrors, transmission: "" });
                      }}
                      className={`w-full bg-white border-2 p-3 font-bold text-black outline-none focus:bg-[#FDE047] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:font-normal placeholder:text-gray-400 resize-none ${formErrors.transmission ? "border-red-600 focus:shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]" : "border-black"
                        }`}
                    ></textarea>
                    {formErrors.transmission && (
                      <p className="text-red-600 font-bold text-xs mt-1 font-mono uppercase tracking-wider">
                        * {formErrors.transmission}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleTransmit}
                    className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-black uppercase tracking-widest py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-3 mt-4"
                  >
                    <Send size={18} />
                    TRANSMIT DATA
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONNECT / SOCIAL WALL ================= */}
        <section ref={connectSectionRef} className={`py-20 ${isDarkMode ? 'bg-[#0a0a0a] border-white' : 'bg-[#FFFDF5] border-black'} border-b-4 overflow-hidden relative`}>

          {/* SVG Motion Path & Plane (travels behind cards but above background) */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
              <path
                id="connectMotionPath"
                d="M -50 150 C 200 450, 300 50, 500 250 C 700 450, 800 50, 1050 150"
                fill="none"
                stroke={isDarkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"}
                strokeWidth="4"
                strokeDasharray="8 8"
              />
            </svg>
            <div
              ref={planeRef}
              className="absolute pointer-events-none w-[50px] h-[50px] md:w-[90px] md:h-[90px]"
              style={{ transformOrigin: "center center" }}
            >
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M10 16L60 32L10 48L28 32Z" fill="#FDE047" stroke="black" strokeWidth="4" strokeLinejoin="miter" />
                <path d="M28 32L60 32" stroke="black" strokeWidth="4" />
              </svg>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
            <div className="section-header-reveal flex justify-center text-center mb-16 overflow-hidden">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter flex flex-wrap gap-x-3 justify-center">
                <span className="inline-block overflow-hidden py-1">
                  <span className="reveal-word inline-block translate-y-full">Let's</span>
                </span>
                <span className="inline-block overflow-hidden py-1">
                  <span className={`reveal-word inline-block translate-y-full text-transparent ${isDarkMode ? 'text-stroke-2-dark' : 'text-stroke-2'}`}>Connect</span>
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <Link href="https://github.com/rezaaplvv" target="_blank" className="social-link-btn group opacity-0">
                <div className={`w-32 h-32 md:w-40 md:h-40 bg-gray-900 border-4 ${isDarkMode ? 'border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]' : 'border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]'} flex flex-col items-center justify-center transform -rotate-3 hover:rotate-0 hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-300`}>
                  <Github size={48} className="text-white mb-2" />
                  <span className="font-bold text-white uppercase">GitHub</span>
                </div>
              </Link>

              <Link href="https://wa.me/6283133387676" target="_blank" className="social-link-btn group opacity-0">
                <div className={`w-32 h-32 md:w-40 md:h-40 bg-[#25D366] border-4 ${isDarkMode ? 'border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]' : 'border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]'} flex flex-col items-center justify-center transform rotate-2 hover:rotate-0 hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-300`}>
                  <MessageCircle size={48} className="text-white mb-2" />
                  <span className="font-bold text-white uppercase">WhatsApp</span>
                </div>
              </Link>

              <Link href="https://instagram.com" target="_blank" className="social-link-btn group opacity-0">
                <div className={`w-32 h-32 md:w-40 md:h-40 bg-pink-500 border-4 ${isDarkMode ? 'border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]' : 'border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]'} flex flex-col items-center justify-center transform -rotate-2 hover:rotate-0 hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-300`}>
                  <Instagram size={48} className="text-white mb-2" />
                  <span className="font-bold text-white uppercase">Instagram</span>
                </div>
              </Link>

              <Link href="mailto:rezapahlepi77654@gmail.com" className="social-link-btn group opacity-0">
                <div className={`w-32 h-32 md:w-40 md:h-40 bg-red-500 border-4 ${isDarkMode ? 'border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]' : 'border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]'} flex flex-col items-center justify-center transform rotate-3 hover:rotate-0 hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-300`}>
                  <Mail size={48} className="text-white mb-2" />
                  <span className="font-bold text-white uppercase">Email</span>
                </div>
              </Link>
            </div>
          </div>
        </section>



        {/* ================= FOOTER ================= */}
        <footer ref={footerWrapperRef} className="relative z-20 bg-black text-[#FDE047] border-t-8 border-[#FDE047] py-20 overflow-hidden">

          {/* Upper content: Social Links & Navigation */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left mb-16 border-b-2 border-dashed border-[#FDE047]/30 pb-12">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-[#FDE047] mb-2">// MEDAN, INDONESIA</p>
              <p className="font-medium text-lg max-w-md text-gray-400">
                Building high-performance, secure, and user-centric web applications.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6">
              {/* Navigation Links */}
              <div className="flex flex-nowrap justify-center gap-x-3 sm:gap-x-4 md:gap-x-6 text-xs sm:text-sm text-white">

                <Link href="#hero" className="font-bold uppercase tracking-wider hover:text-[#FDE047] transition-all">
                  About
                </Link>
                <Link href="#projects" className="font-bold uppercase tracking-wider hover:text-[#FDE047] transition-all">
                  Projects
                </Link>
                <Link href="#services" className="font-bold uppercase tracking-wider hover:text-[#FDE047] transition-all">
                  Skills
                </Link>
                <Link href="#faq" className="font-bold uppercase tracking-wider hover:text-[#FDE047] transition-all">
                  FAQ
                </Link>
                <Link href="#contact" className="font-bold uppercase tracking-wider hover:text-[#FDE047] transition-all">
                  Contact
                </Link>
              </div>
              <div className="text-sm text-gray-500 font-mono uppercase tracking-wider">
                © {new Date().getFullYear()} Reza Pahlepi. All Rights Reserved.
              </div>
            </div>
          </div>

          {/* Lower content: Giant staggered reveal name */}
          <div ref={footerNamePanelRef} className="w-full text-center overflow-hidden py-4 select-none">
            <h2 className="text-[#FDE047] font-black uppercase tracking-tighter leading-none text-6xl md:text-8xl lg:text-[12vw] select-none flex justify-center flex-wrap gap-x-6">
              {/* Word 1: REZA */}
              <span className="flex">
                {["R", "E", "Z", "A"].map((char, index) => (
                  <span key={index} className="inline-block overflow-hidden py-2">
                    <span className="footer-reveal-char inline-block">
                      {char}
                    </span>
                  </span>
                ))}
              </span>
              {/* Word 2: PAHLEPI. */}
              <span className="flex">
                {["P", "A", "H", "L", "E", "P", "I"].map((char, index) => (
                  <span key={index} className="inline-block overflow-hidden py-2">
                    <span className="footer-reveal-char inline-block">
                      {char}
                    </span>
                  </span>
                ))}
              </span>
            </h2>
          </div>

        </footer>

      </main>

      <style jsx global>{`
        .text-stroke-3 {
          -webkit-text-stroke: 3px black;
        }
        .text-stroke-2 {
          -webkit-text-stroke: 2px black;
        }
        .text-stroke-3-dark {
          -webkit-text-stroke: 3px white;
        }
        .text-stroke-2-dark {
          -webkit-text-stroke: 2px white;
        }
        html {
            scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}