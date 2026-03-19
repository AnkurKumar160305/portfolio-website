"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { resumeData } from "@/data/resume";
import { Trophy, Target, Medal, Code, Stars, Crown, Zap, TrendingUp } from "lucide-react";

const iconMap = [Trophy, Target, Medal, Code];
const decorativeIcons = [Stars, Crown, Zap, TrendingUp];

const colorMap = [
  "from-amber-400 to-orange-500",
  "from-blue-400 to-cyan-500",
  "from-purple-400 to-pink-500",
  "from-emerald-400 to-teal-500",
];

const shadowMap = [
  "group-hover:shadow-orange-500/20",
  "group-hover:shadow-cyan-500/20",
  "group-hover:shadow-pink-500/20",
  "group-hover:shadow-teal-500/20",
];

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="max-w-6xl mx-auto px-4" ref={ref}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="inline-block p-4 rounded-full bg-amber-500/10 mb-4 border border-amber-500/20 dark:bg-amber-500/10 dark:border-amber-500/20"
        >
          <Trophy className="w-8 h-8 text-amber-500" />
        </motion.div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-amber-600 to-rose-600 dark:from-amber-200 dark:via-orange-400 dark:to-rose-400">
            Major Achievements
          </span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium">
          Highlighting key competitive wins and professional milestones
        </p>
      </motion.div>

      {/* Top Impact Strip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12 p-6 sm:p-8 rounded-3xl bg-white/40 dark:bg-slate-900/80 border border-slate-900/5 dark:border-white/5 backdrop-blur-xl relative overflow-hidden shadow-2xl transition-colors duration-500"
      >
        {/* Animated background glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 dark:bg-blue-500/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-amber-500/10 dark:bg-amber-500/10 blur-[100px] rounded-full" />

        <div className="relative">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-600 dark:text-amber-500 mb-6 font-bold flex items-center gap-2">
            <Zap className="w-4 h-4 fill-amber-600 dark:fill-amber-500" />
            Impact Statistics
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {resumeData.achievements.map((ach, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className={`text-3xl font-black bg-clip-text text-transparent bg-gradient-to-br ${colorMap[i % colorMap.length]}`}>
                    {ach.metric.includes("+") ? (
                      <AnimatedCounter value={ach.metric} suffix="+" />
                    ) : (
                      ach.metric
                    )}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-tight font-medium">
                  {ach.text.split(",")[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resumeData.achievements.map((ach, i) => {
          const Icon = iconMap[i % iconMap.length];
          const DecorIcon = decorativeIcons[i % decorativeIcons.length];
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.02, rotateY: i % 2 === 0 ? 5 : -5 }}
              className={`group relative p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-900/5 dark:border-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 shadow-xl dark:shadow-none hover:shadow-2xl ${shadowMap[i % shadowMap.length]} hover:border-slate-900/10 dark:hover:border-white/20`}
              style={{ perspective: "1000px" }}
            >
              <DecorIcon className="absolute -right-8 -bottom-8 w-32 h-32 text-slate-900/[0.03] dark:text-white/[0.03] rotate-12 group-hover:rotate-0 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorMap[i % colorMap.length]} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase border bg-slate-900/5 dark:bg-slate-900/50 backdrop-blur-md ${colorMap[i % colorMap.length].replace('from-', 'text-').replace('to-', 'border-')}`}>
                    {ach.metric}
                  </span>
                </div>
                
                <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-3 leading-tight group-hover:text-amber-600 dark:group-hover:text-amber-200 transition-colors">
                  {ach.text.split("competing among")[0]}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                  {ach.text}
                </p>
                
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${colorMap[i % colorMap.length]}`} />
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">Verified Achievement</span>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[i % colorMap.length]} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
