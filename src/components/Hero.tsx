"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { resumeData } from "@/data/resume";
import { ArrowDown, FileDown, Github, Linkedin, ExternalLink } from "lucide-react";
import Image from "next/image";
import { ReactNode, useRef } from "react";

// --- Magnetic Interaction Wrapper ---
function MagneticWrapper({ children, intensity = 0.2 }: { children: ReactNode; intensity?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((e.clientX - centerX) * intensity);
    y.set((e.clientY - centerY) * intensity);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const { basics } = resumeData;

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // --- 3D Tilt Effect Hooks ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30, mass: 0.5 });
  const rotateX = useTransform(smoothY, [-100, 100], [25, -25]);
  const rotateY = useTransform(smoothX, [-100, 100], [-25, 25]);

  // --- Cinematic Typography Animation Variants ---
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 1.8 }
    }
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      transition: { type: "spring" as const, bounce: 0.5, duration: 0.8 } 
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div className="relative z-10 text-center space-y-8 max-w-4xl px-4">
        
        {/* --- 3D Profile Section --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative mx-auto w-40 h-52 sm:w-48 sm:h-64 mb-10 mt-4"
          style={{ perspective: 1200 }}
        >
          {/* Interactive 3D Card Container */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full h-full cursor-pointer group"
          >
            {/* Animated Beautiful Aurora Glow */}
            <motion.div
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[-15%] rounded-[3rem] bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500"
              style={{ backgroundSize: "200% 200%" }}
            />

            {/* Premium Tall Glass Portrait Card */}
            <motion.div
              style={{ translateZ: 50, transformStyle: "preserve-3d" }}
              className="absolute inset-0 rounded-[2.5rem] border border-white/20 dark:border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-xl p-1.5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
            >
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-900 border border-black/10 dark:border-white/5">
                <Image
                  src="/images/fin.png"
                  alt="Ankur"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                {/* Bottom elegant fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Diagonal Glass Swipe */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 -translate-x-[150%] group-hover:translate-x-[150%] transition-all duration-[1.2s] ease-in-out pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* --- Availability Badge --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/50 dark:bg-slate-900/50 border border-white/10 backdrop-blur-md shadow-lg"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="text-[10px] sm:text-xs font-bold text-slate-300 dark:text-slate-300 tracking-wider uppercase">
            Available for opportunities
          </span>
        </motion.div>

        {/* --- Hero Content --- */}
        <div className="space-y-4">
          <motion.h1
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter flex justify-center"
            style={{ perspective: 1000 }}
          >
            {"Ankur".split("").map((char, index) => (
              <motion.span 
                 key={index} 
                 variants={letterVariants} 
                 className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-700 to-slate-800 dark:from-white dark:via-slate-200 dark:to-slate-400 inline-block origin-bottom"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
            className="relative"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 animate-shimmer tracking-wide uppercase px-4 py-2 border border-blue-500/10 dark:border-purple-500/20 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-sm inline-block shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              {basics.label}
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium"
        >
          {basics.summary}
        </motion.p>

        {/* --- CTAs --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <MagneticWrapper>
            <button
              onClick={scrollToProjects}
              className="group relative px-8 py-3.5 rounded-2xl font-black text-white overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none" />
              <span className="relative flex items-center gap-2 tracking-wider uppercase text-xs">
                View Projects
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
          </MagneticWrapper>

          <MagneticWrapper>
            <a
              href="https://drive.google.com/uc?export=download&id=1tnq84zKuiX6Beu4dZNumHRZXDGZmR7za"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3.5 rounded-2xl font-black text-xs tracking-wider uppercase text-slate-900 dark:text-slate-100 border border-slate-900/10 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-white/10 hover:shadow-xl transition-all duration-500 flex items-center gap-2 block"
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </a>
          </MagneticWrapper>
        </motion.div>

        {/* --- Social Links --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-4 pt-4"
        >
          {[
            { href: basics.links.github, icon: Github, label: "GitHub", color: "hover:text-purple-500 hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]" },
            { href: basics.links.linkedin, icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-500 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" },
            { href: basics.links.leetcode, icon: ExternalLink, label: "LeetCode", color: "hover:text-amber-500 hover:border-amber-500/30 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]" },
          ].map(({ href, icon: Icon, label, color }) => (
            <MagneticWrapper key={label} intensity={0.5}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl border border-slate-900/5 dark:border-white/5 bg-slate-900/5 dark:bg-white/5 text-slate-500 dark:text-slate-400 transition-all duration-300 block ${color}`}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            </MagneticWrapper>
          ))}
        </motion.div>
      </div>

      {/* --- Scroll indicator --- */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-slate-900/20 dark:border-white/20 hidden sm:flex items-start justify-center pt-2"
      >
        <div className="w-1 h-1.5 rounded-full bg-slate-900/40 dark:bg-white/40" />
      </motion.div>
    </section>
  );
}
