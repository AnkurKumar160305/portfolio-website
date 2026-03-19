"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { ArrowDown, FileDown, Github, Linkedin, ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const { basics } = resumeData;

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div className="relative z-10 text-center space-y-8 max-w-4xl px-4">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-500 animate-spin-slow opacity-20 blur-xl" />
          <div className="relative w-full h-full rounded-full border-2 border-white/20 dark:border-white/10 p-1 backdrop-blur-sm bg-white/5 dark:bg-white/5 overflow-hidden group shadow-2xl">
            <Image
              src="/images/ankur1.png"
              alt="Ankur"
              width={160}
              height={160}
              className="rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            {/* Glowing Ring */}
            <div className="absolute inset-0 rounded-full border border-blue-500/30 dark:border-blue-400/20 group-hover:border-blue-500/50 transition-colors" />
          </div>
        </motion.div>

        {/* Availability Badge */}
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

        {/* Hero Content */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-700 to-slate-800 dark:from-white dark:via-slate-200 dark:to-slate-400">
              Ankur
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 animate-shimmer tracking-wide uppercase px-4 py-2 border border-blue-500/10 dark:border-blue-500/20 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-sm inline-block">
              {basics.label}
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium"
        >
          {basics.summary}
        </motion.p>

        {/* CTAs with 3D hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-3.5 rounded-2xl font-black text-white overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 group-hover:scale-110 transition-transform duration-500" />
            <span className="relative flex items-center gap-2 tracking-wider uppercase text-xs">
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:animate-bounce" />
            </span>
          </button>

          <a
            href="#footer"
            className="group px-8 py-3.5 rounded-2xl font-black text-xs tracking-wider uppercase text-slate-900 dark:text-slate-100 border border-slate-900/10 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-white/10 hover:shadow-xl transition-all duration-500 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <FileDown className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-4 pt-4"
        >
          {[
            { href: basics.links.github, icon: Github, label: "GitHub", color: "hover:text-purple-500 hover:border-purple-500/30" },
            { href: basics.links.linkedin, icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-500 hover:border-blue-500/30" },
            { href: basics.links.leetcode, icon: ExternalLink, label: "LeetCode", color: "hover:text-amber-500 hover:border-amber-500/30" },
          ].map(({ href, icon: Icon, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-xl border border-slate-900/5 dark:border-white/5 bg-slate-900/5 dark:bg-white/5 text-slate-500 dark:text-slate-400 transition-all duration-300 hover:scale-110 active:scale-95 ${color}`}
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
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
