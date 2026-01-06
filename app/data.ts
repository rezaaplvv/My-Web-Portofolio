// src/app/data.ts
import { Github, Linkedin, Mail, Globe, Code2, Terminal, Smartphone, Database } from "lucide-react";

export const PERSONAL_INFO = {
  name: "Reza Pahlepi",
  role: "Full-Stack Developer",
  bio: "Mahasiswa D3 Teknik Informatika USU (Semester 4). Membangun solusi web & mobile yang scalable, modern, dan berorientasi bisnis.",
  email: "rezapahlepi77654@gmail.com",
  github: "https://github.com/rezaaplvv",
  availableForFreelance: true,
};

export const TECH_STACK = [
  { name: "Next.js 15", icon: Globe },
  { name: "React", icon: Code2 },
  { name: "Flutter", icon: Smartphone },
  { name: "Laravel", icon: Database },
  { name: "Node.js", icon: Terminal },
  { name: "Tailwind CSS", icon: Code2 },
];

export const PROJECTS = [
  {
    title: "Dramatix",
    description: "Modern streaming platform with Next.js 15. Optimized video playback & scalable architecture.",
    tech: ["Next.js 15", "React", "Tailwind"],
    link: "#", // Nanti isi link demo/repo jika ada
    type: "Web App"
  },
  {
    title: "Laravel POS Pro",
    description: "Complete Restaurant POS with Real-time P&L, QRIS, and Thermal Printing support.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    link: "#",
    type: "Business"
  },
  {
    title: "Viauo",
    description: "Flutter multimedia app integrating Jamendo & Pixabay APIs with local offline player.",
    tech: ["Flutter", "Dart", "Rest API"],
    link: "#",
    type: "Mobile"
  },
  {
    title: "EmotionFace",
    description: "AI-driven app that adapts UI colors and particles based on real-time facial expressions.",
    tech: ["AI", "JavaScript", "Webcam API"],
    link: "#",
    type: "Experimental"
  },
  {
    title: "No-Watermark Downloader",
    description: "Full-stack tool to download high-quality media from IG, TikTok, FB without watermark.",
    tech: ["React", "Node.js", "Vite"],
    link: "#",
    type: "Tool"
  },
   {
    title: "Smart Perpus App",
    description: "Digital Library with Gamified Progression System & borrowing automation.",
    tech: ["Flutter", "Firebase"],
    link: "#",
    type: "Mobile"
  }
];