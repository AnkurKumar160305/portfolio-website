"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Briefcase, Trophy, Code2, GraduationCap, Wrench, Sun, Moon } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "projects", label: "Projects", icon: Code2 },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "education", label: "Education", icon: GraduationCap },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: 0 };
        return { id: item.id, top: el.offsetTop - 200 };
      });

      const scrollY = window.scrollY;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollY >= sections[i].top) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Nav */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${
          isScrolled
            ? "bg-white/50 dark:bg-white/5 backdrop-blur-xl border-b border-white/5 dark:border-white/10"
            : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="text-lg font-black tracking-tighter transition-all hover:scale-110 active:scale-95 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-600 dark:from-blue-400 dark:via-emerald-400 dark:to-blue-400 animate-shimmer"
            style={{ backgroundSize: '200% auto' }}
          >
            AK.
          </button>

          <div className="flex items-center gap-1 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-1 border border-slate-900/5 dark:border-white/10 shadow-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-2 text-xs font-black uppercase tracking-widest transition-all duration-300 rounded-xl ${
                  activeSection === item.id
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-slate-900/5 dark:bg-white/10 rounded-xl shadow-inner"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
            <div className="w-px h-6 bg-slate-900/10 dark:bg-white/10 mx-1" />
            <ThemeToggle />
          </div>

        </div>
        <ScrollProgress />
      </motion.nav>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/50 dark:bg-white/5 backdrop-blur-xl border-t border-white/5 dark:border-white/10 overflow-hidden">
        <ScrollProgress />
        <div className="flex items-center justify-around py-2 px-2">
          {navItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-500 dark:text-slate-400"
                }`}
              >
                <Icon className={`w-5 h-5 ${activeSection === item.id ? 'opacity-100' : 'opacity-70'}`} />
                <span className="text-[10px] font-black uppercase tracking-tighter">{item.label}</span>
              </button>
            );
          })}
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent overflow-hidden">
      {/* Background Track */}
      <div className="absolute inset-0 bg-slate-900/10 dark:bg-white/5" />
      
      {/* Progress Bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30, restDelta: 0.001 }}
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600 dark:from-blue-400 dark:via-emerald-400 dark:to-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)] dark:shadow-[0_0_15px_rgba(96,165,250,0.5)]"
      >
        {/* Animated Pulse / Shimmer */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
        />
      </motion.div>
    </div>
  );
}
