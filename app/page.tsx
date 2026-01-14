"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, animate, AnimatePresence } from "framer-motion";
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
  Linkedin,
  Mail,
  Instagram
} from "lucide-react";
import Link from "next/link";

// --- DATA PROJECTS ---
const PROJECTS = [
  {
    id: 1,
    title: "Dramatix",
    subtitle: "Streaming Platform",
    desc: "Platform streaming film performa tinggi. Arsitektur scalable Next.js 15.",
    tech: ["Next.js 15", "Tailwind", "Node.js"],
    size: "col-span-1",
    image: "/inidrama.png",
    link: "https://drama-tix.vercel.app/"
  },
  {
    id: 2,
    title: "Viauo",
    subtitle: "Multimedia App",
    desc: "Aplikasi Flutter streaming musik/video online & offline player.",
    tech: ["Flutter", "Dart", "Rest API"],
    size: "col-span-1",
    image: "/viauo.png",
    link: "https://github.com/rezaaplvv/Viauo-VideoAudioPlayer"
  },
  {
    id: 3,
    title: "Laravel POS Pro",
    subtitle: "Restaurant System",
    desc: "Sistem kasir lengkap: Real-time P&L, QRIS, Thermal Printing.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    size: "col-span-1",
    image: "/mesinkasirutama.png",
    link: "https://github.com/rezaaplvv/Laravel-Point-Of-Sales-Pro"
  },
  {
    id: 4,
    title: "EmotionFace AI",
    subtitle: "AI Detection",
    desc: "Mendeteksi ekspresi wajah user dan mengubah UI sesuai emosi secara real-time.",
    tech: ["React", "TensorFlow", "AI"],
    size: "col-span-1",
    image: "/emo.png",
    link: "https://emotion-face.vercel.app/"
  },
  {
    id: 5,
    title: "Smart Perpus",
    subtitle: "Digital Library",
    desc: "Sistem perpustakaan digital dengan fitur gamifikasi level & ranking.",
    tech: ["Flutter", "Firebase", "Gamification"],
    size: "col-span-1",
    image: "/library.png",
    link: "https://github.com/rezaaplvv/smart-perpus-app"
  },
  {
    id: 6,
    title: "Social Media Downloader",
    subtitle: "Tools Web App",
    desc: "Download media kualitas tinggi dari seluruh social media tanpa watermark.",
    tech: ["React", "Vite", "Node.js"],
    size: "col-span-1",
    image: "/zeronout.png",
    link: "https://zero-nout-downloader.vercel.app/"
  },
];

// --- DATA TECH STACK ---
const TECH_ROW_1 = [
    { name: "HTML", icon: <FileType size={20}/>, color: "bg-orange-300" },
    { name: "CSS", icon: <Palette size={20}/>, color: "bg-blue-300" },
    { name: "JavaScript", icon: <FileCode size={20}/>, color: "bg-yellow-300" },
    { name: "TypeScript", icon: <Code2 size={20}/>, color: "bg-blue-400" },
    { name: "Python", icon: <Terminal size={20}/>, color: "bg-green-300" },
    { name: "Java", icon: <Coffee size={20}/>, color: "bg-red-300" },
    { name: "C", icon: <Code size={20}/>, color: "bg-gray-300" },
    { name: "PHP", icon: <Server size={20}/>, color: "bg-purple-300" },
    { name: "Dart", icon: <Smartphone size={20}/>, color: "bg-cyan-300" },
    { name: "Kotlin", icon: <Smartphone size={20}/>, color: "bg-indigo-300" },
];

const TECH_ROW_2 = [
    { name: "React", icon: <Atom size={20}/>, color: "bg-cyan-200" },
    { name: "Next.js", icon: <Zap size={20}/>, color: "bg-gray-200" },
    { name: "Tailwind", icon: <Wind size={20}/>, color: "bg-teal-300" },
    { name: "Bootstrap", icon: <Layout size={20}/>, color: "bg-purple-400" },
    { name: "Flutter", icon: <Smartphone size={20}/>, color: "bg-blue-400" },
    { name: "Laravel", icon: <Box size={20}/>, color: "bg-red-400" },
    { name: "MySQL", icon: <Database size={20}/>, color: "bg-orange-400" },
    { name: "Firebase", icon: <Flame size={20}/>, color: "bg-yellow-400" },
    { name: "Vite", icon: <Zap size={20}/>, color: "bg-purple-200" },
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
    question: "Apa tech stack utama yang Anda gunakan?",
    answer: "Saya fokus pada pengembangan Full-Stack menggunakan Next.js dan Tailwind CSS untuk Frontend, serta Node.js atau Laravel untuk Backend."
  },
  {
    question: "Apakah Anda terbuka untuk kolaborasi proyek?",
    answer: "Tentu saja! Saya selalu terbuka untuk berkolaborasi dalam proyek inovatif, baik itu riset teknologi terbaru maupun proyek open-source."
  },
  {
    question: "Bagaimana cara Anda memastikan kualitas kode?",
    answer: "Saya mengutamakan prinsip clean code dan arsitektur yang terstruktur agar aplikasi mudah dipelihara dalam jangka panjang."
  },
  {
    question: "Apa fokus utama Anda saat membangun sistem?",
    answer: "Fungsionalitas dan User Experience. Saya memastikan setiap baris kode yang saya tulis memberikan solusi nyata bagi pengguna."
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
          className="inline-block w-[4px] h-[0.8em] bg-black ml-1 align-middle"
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

const BrutalTag = ({ text }: { text: string }) => (
  <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider border-2 border-black bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
    {text}
  </span>
);

const NavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick?: () => void }) => (
    <Link 
        href={href} 
        onClick={onClick}
        className="font-bold text-sm uppercase tracking-wider hover:bg-black hover:text-white px-3 py-1 transition-all border-2 border-transparent hover:border-black"
    >
        {children}
    </Link>
);

const Marquee = () => {
  return (
    <div className="w-full bg-[#FDE047] border-y-4 border-black py-3 overflow-hidden flex relative z-20">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 40 
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-4">
            <span className="text-2xl font-black uppercase text-black">PROBLEM SOLVER</span>
            <span className="text-2xl font-black uppercase text-transparent text-stroke-2">INNOVATIVE OR DIE</span>
            <span className="text-2xl font-black uppercase text-black">FULL-STACK CAPABILITIES</span>
            <Zap className="fill-black w-6 h-6" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const StatCard = ({ label, value, icon, color, isRealtime = false }: { label: string, value: number, icon: React.ReactNode, color: string, isRealtime?: boolean }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;
        const controls = animate(0, value, {
            duration: 2,
            onUpdate: (latest) => {
                node.textContent = Math.floor(latest).toString();
            }
        });
        return () => controls.stop();
    }, [value]);

    return (
        <div className={`bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col items-center justify-center gap-2 group`}>
            <div className={`p-3 rounded-full border-2 border-black ${color} mb-1 group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <div className="text-4xl font-black flex items-start">
                <span ref={nodeRef}>0</span>
                <span className="text-lg mt-1">+</span>
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                {label} {isRealtime && <span className="text-green-500 animate-pulse ml-1">●</span>}
            </div>
        </div>
    );
};

const TechStickerMarquee = ({ items, direction = "left", speed = 30 }: { items: any[], direction?: "left" | "right", speed?: number }) => {
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
                className={`flex items-center gap-2 px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${item.color} transform hover:-translate-y-1 transition-transform`}
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
const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between text-left font-bold text-lg hover:bg-yellow-100 transition-colors"
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
            className="border-t-4 border-black"
          >
            <div className="p-4 bg-gray-50 font-medium text-gray-800">
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { repos } = useGithubStats();

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FFFDF5] text-black font-sans selection:bg-black selection:text-white relative overflow-x-hidden pt-20">
      
      {/* --- BACKGROUND GRID --- */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      ></div>

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 h-20 bg-[#FFFDF5] border-b-4 border-black z-50 px-6 md:px-12 flex items-center justify-between">
        <Link href="#hero" className="flex items-center gap-2 group">
            <div className="bg-black text-white font-black text-xl px-2 py-1 border-2 border-black group-hover:bg-[#FDE047] group-hover:text-black transition-colors">
                PORTFOLIO.
            </div>
        </Link>
        <div className="hidden md:flex items-center gap-6">
            <NavLink href="#hero">Tentang</NavLink>
            <NavLink href="#projects">Proyek</NavLink>
            <NavLink href="#services">Jasa</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
        </div>
        <div className="hidden md:block">
            <Link 
                href="https://wa.me/6283133387676"
                className="bg-[#34D399] border-2 border-black px-4 py-2 font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2"
            >
                <MessageCircle size={16} />
                KONTAK SAYA
            </Link>
        </div>
        <button 
            className="md:hidden p-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-[3px]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
            {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
          <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed top-20 left-0 right-0 bg-white border-b-4 border-black z-40 p-6 flex flex-col gap-4 shadow-xl md:hidden"
          >
              <NavLink href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Tentang</NavLink>
              <NavLink href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Proyek</NavLink>
              <NavLink href="#services" onClick={() => setIsMobileMenuOpen(false)}>Jasa</NavLink>
              <NavLink href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</NavLink>
              <div className="h-[2px] bg-gray-100 my-2"></div>
              <Link 
                  href="https://wa.me/6283133387676"
                  className="bg-[#34D399] text-center border-2 border-black px-4 py-3 font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                  CHAT WHATSAPP
              </Link>
          </motion.div>
      )}

      <main className="relative z-10">
        
        {/* ================= HERO SECTION ================= */}
        <section id="hero" className="min-h-[calc(100vh-80px)] max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12 pt-10 md:pt-0 mb-20">
          
          {/* LEFT: TEXT */}
          <div className="flex-[1.5] text-center md:text-left space-y-6 order-2 md:order-1 min-w-0">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-2 bg-[#FDE047] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <span className="font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse border border-black"></span>
                Open for Work
              </span>
            </motion.div>

            <div className="space-y-2 min-h-[160px] md:min-h-[220px] w-full"> 
              <h1 className="text-6xl md:text-8xl font-black uppercase leading-[1.1] tracking-normal block overflow-visible">
                <div className="whitespace-nowrap flex flex-col items-center md:items-start">
                    <LoopedTypingText 
                        text="Reza Pahlepi" 
                        secondLineStyle="text-white text-stroke-3 md:text-stroke-4"
                    />
                </div>
              </h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }} 
                className="text-2xl md:text-3xl font-bold bg-black text-white inline-block px-2 py-1 rotate-1 mt-2"
              >
                Full-Stack Developer.
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg font-medium border-l-4 border-black pl-4 py-2 mt-4"
              >
                Informatics Engineering Student at USU & Freelance Developer. 
                <br />
                Skilled in full-stack development, delivering pixel-perfect frontends and robust server-side logic.
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
                className="group relative px-8 py-4 bg-[#60A5FA] border-2 border-black font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
              >
                LIHAT KARYA
              </Link>
              <div className="flex items-center gap-2 font-mono text-sm font-bold bg-white border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Zap size={14} className="fill-yellow-400 text-black"/> 
                DOWNLOAD CV
              </div>
            </motion.div>
          </div>

          {/* RIGHT: PHOTO FRAME */}
          <div className="flex-1 w-full h-[500px] relative flex items-center justify-center order-1 md:order-2">
            <motion.div
              initial={{ rotate: 3 }}
              whileHover={{ rotate: 0 }}
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative z-10"
            >
              <Image 
                src="/ppgithub.jpg" 
                alt="Reza Pahlepi"
                fill
                className="object-cover transition-all duration-300"
                priority
              />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#FDE047]/90 border-2 border-black rotate-[-2deg] z-20"></div>
            </motion.div>

            <div className="absolute top-[10%] right-[15%] w-20 h-20 bg-[#F472B6] border-2 border-black rounded-full z-0"></div>
            <div className="absolute bottom-[15%] left-[10%] w-16 h-16 bg-[#34D399] border-2 border-black z-0 rotate-45"></div>

            <DraggableTech delay={1.2} color="bg-blue-300" className="top-[10%] right-[5%]" label="Mobile" icon={<Smartphone size={24}/>} />
            <DraggableTech delay={1.3} color="bg-yellow-300" className="top-[40%] left-[0%]" label="Frontend" icon={<Code2 size={24}/>} />
            <DraggableTech delay={1.4} color="bg-green-300" className="bottom-[5%] right-[15%]" label="Backend" icon={<Database size={24}/>} />
          </div>
        </section>

        {/* ================= MARQUEE SEPARATOR ================= */}
        <Marquee />

        {/* ================= LIVE STATS ================= */}
        <section className="py-20 bg-white border-b-4 border-black">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <StatCard 
                    label="GitHub Repos" 
                    value={repos || 15} 
                    isRealtime={true}
                    icon={<Github size={24}/>} 
                    color="bg-gray-200"
                />
                <StatCard 
                    label="Commits (Est)" 
                    value={540} 
                    icon={<GitCommit size={24}/>} 
                    color="bg-green-300"
                />
                <StatCard 
                    label="Happy Clients" 
                    value={12} 
                    icon={<Users size={24}/>} 
                    color="bg-blue-300"
                />
                <StatCard 
                    label="Semester" 
                    value={3} 
                    icon={<BookOpen size={24}/>} 
                    color="bg-yellow-300"
                />
             </div>
          </div>
        </section>

        {/* ================= TECH STACK ORBIT ================= */}
        <section className="py-12 bg-[#FFFDF5] border-b-4 border-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 text-center">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                   My <span className="text-stroke-2 text-transparent">Arsenal</span>
                </h2>
            </div>
            <TechStickerMarquee items={TECH_ROW_1} direction="left" speed={30} />
            <TechStickerMarquee items={TECH_ROW_2} direction="right" speed={30} />
        </section>

        {/* ================= PROJECT VAULT ================= */}
        <section id="projects" className="pt-20 max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12 border-b-4 border-black pb-4 flex justify-between items-end">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              Selected <span className="text-stroke-2 text-transparent">Works</span>
            </h2>
            <div className="hidden md:block text-xs font-mono font-bold border-2 border-black px-2 py-1 bg-white">
                SCROLL FOR MORE
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-[380px]">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-200 overflow-hidden flex flex-col"
              >
                <div className="h-10 border-b-4 border-black bg-white flex items-center justify-between px-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
                  </div>
                  <div className="text-xs font-bold font-mono uppercase tracking-widest">
                    {project.title}.exe
                  </div>
                </div>

                <Link href={project.link} target="_blank" className="block relative h-[50%] border-b-4 border-black overflow-hidden bg-gray-100 cursor-pointer">
                  <Image 
                     src={project.image} 
                     alt={project.title}
                     fill
                     className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                     <div className="bg-white border-2 border-black px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                       VIEW PROJECT
                     </div>
                  </div>
                </Link>

                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                   <div>
                     <Link href={project.link} target="_blank" className="hover:underline decoration-4 decoration-black underline-offset-4">
                       <h3 className="text-2xl font-black uppercase mb-2 leading-none flex items-center gap-2">
                         {project.title}
                         <ArrowUpRight className="w-6 h-6 transform group-hover:rotate-45 transition-transform"/>
                       </h3>
                     </Link>
                     <p className="text-sm font-medium text-gray-800 leading-tight mb-4 border-l-2 border-black pl-2">
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
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="pt-32 pb-20 max-w-7xl mx-auto px-6 md:px-12 border-b-4 border-black">
            <div className="mb-12 border-b-4 border-black pb-4 text-right">
 <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
  Core <span className="text-stroke-2 text-transparent">Expertise</span>
</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                {SERVICES.map((service, index) => (
                    <div key={index} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                        <div className={`w-16 h-16 ${service.color} border-2 border-black flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-black uppercase mb-2">{service.title}</h3>
                        <div className="text-sm font-bold bg-black text-white inline-block px-2 py-1 mb-3">
                            {service.price}
                        </div>
                        <p className="font-medium text-gray-700 leading-tight">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section id="faq" className="py-20 bg-[#F3F4F6] border-b-4 border-black">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Common <span className="bg-black text-white px-2">Questions</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {FAQS.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* ================= CONNECT / SOCIAL WALL ================= */}
        <section className="py-20 bg-[#FFFDF5] border-b-4 border-black overflow-hidden relative">
           <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16">
                 Let's <span className="text-stroke-2 text-transparent">Connect</span>
              </h2>
              
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                 <Link href="https://github.com/rezaaplvv" target="_blank" className="group">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-900 border-4 border-black flex flex-col items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-3 hover:rotate-0 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                       <Github size={48} className="text-white mb-2"/>
                       <span className="font-bold text-white uppercase">GitHub</span>
                    </div>
                 </Link>
                 
<Link href="https://wa.me/6283133387676" target="_blank" className="group">
  <div className="w-32 h-32 md:w-40 md:h-40 bg-[#25D366] border-4 border-black flex flex-col items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-2 hover:rotate-0 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
    <MessageCircle size={48} className="text-white mb-2"/>
    <span className="font-bold text-white uppercase">WhatsApp</span>
  </div>
</Link>

                 <Link href="https://instagram.com" target="_blank" className="group">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-pink-500 border-4 border-black flex flex-col items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 hover:rotate-0 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                       <Instagram size={48} className="text-white mb-2"/>
                       <span className="font-bold text-white uppercase">Instagram</span>
                    </div>
                 </Link>
                 
                 <Link href="mailto:rezapahlepi77654@gmail.com" className="group">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-red-500 border-4 border-black flex flex-col items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-3 hover:rotate-0 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                       <Mail size={48} className="text-white mb-2"/>
                       <span className="font-bold text-white uppercase">Email</span>
                    </div>
                 </Link>
              </div>
           </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="bg-black text-white py-12 md:py-20 border-t-8 border-[#FDE047]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div>
                   <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
                      Reza <br/><span className="text-[#FDE047]">Pahlepi.</span>
                   </h2>
                   <p className="text-gray-400 font-medium text-lg max-w-md">
                      Let's build something crazy and useful. <br/>
                      Based in Medan, Indonesia.
                   </p>
                </div>
                
                <div className="flex flex-col items-center md:items-end gap-4">
                   <div className="text-xl font-bold uppercase tracking-widest text-[#FDE047]">
                      Ready to start?
                   </div>
                   <Link 
                      href="https://wa.me/6283133387676"
                      className="bg-white text-black border-4 border-[#FDE047] px-8 py-4 font-black text-xl hover:bg-[#FDE047] hover:scale-105 transition-all"
                   >
                      START PROJECT
                   </Link>
                   <div className="mt-8 text-sm text-gray-500 font-mono">
                      © {new Date().getFullYear()} Reza Pahlepi. All Rights Reserved.
                   </div>
                </div>
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
        html {
            scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}