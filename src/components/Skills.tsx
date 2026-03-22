"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { resumeData } from "@/data/resume";
import {
  Code2,
  Wrench,
  Layers,
  Database,
  BookOpen,
  Users,
  Compass,
} from "lucide-react";

const skillGroups = [
  {
    label: "Languages",
    key: "languages" as const,
    icon: Code2,
    color: "from-blue-400 to-indigo-600",
    shadow: "group-hover:shadow-blue-500/20",
    tagBg: "bg-blue-500/10",
    tagBorder: "border-blue-500/20",
    tagText: "text-blue-700 dark:text-blue-300",
  },
  {
    label: "Frameworks",
    key: "frameworks" as const,
    icon: Layers,
    color: "from-emerald-400 to-teal-600",
    shadow: "group-hover:shadow-emerald-500/20",
    tagBg: "bg-emerald-500/10",
    tagBorder: "border-emerald-500/20",
    tagText: "text-emerald-700 dark:text-emerald-300",
  },
  {
    label: "Developer Tools",
    key: "developerTools" as const,
    icon: Wrench,
    color: "from-violet-400 to-purple-600",
    shadow: "group-hover:shadow-violet-500/20",
    tagBg: "bg-violet-500/10",
    tagBorder: "border-violet-500/20",
    tagText: "text-violet-700 dark:text-violet-300",
  },
  {
    label: "Database & Services",
    key: "databaseServices" as const,
    icon: Database,
    color: "from-amber-400 to-orange-600",
    shadow: "group-hover:shadow-amber-500/20",
    tagBg: "bg-amber-500/10",
    tagBorder: "border-amber-500/20",
    tagText: "text-amber-700 dark:text-amber-300",
  },
  {
    label: "Coursework",
    key: "relativeCoursework" as const,
    icon: BookOpen,
    color: "from-rose-400 to-pink-600",
    shadow: "group-hover:shadow-rose-500/20",
    tagBg: "bg-rose-500/10",
    tagBorder: "border-rose-500/20",
    tagText: "text-rose-700 dark:text-rose-300",
  },
  {
    label: "Soft Skills",
    key: "softSkills" as const,
    icon: Users,
    color: "from-sky-400 to-blue-600",
    shadow: "group-hover:shadow-sky-500/20",
    tagBg: "bg-sky-500/10",
    tagBorder: "border-sky-500/20",
    tagText: "text-sky-700 dark:text-sky-300",
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4" ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white dark:bg-slate-900 border border-slate-900/5 dark:border-white/5 mb-6 shadow-xl dark:shadow-none">
          <Compass className="w-8 h-8 text-violet-500 dark:text-violet-400 animate-pulse" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-violet-600 to-pink-600 dark:from-violet-200 dark:to-pink-500">
            Technical Arsenal
          </span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium">
          A comprehensive overview of my technical stack and core competencies
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          const skills = resumeData.skills[group.key];

          return (
              <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -10, scale: 1.05, rotateX: 5, rotateY: i % 2 === 0 ? 5 : -5 }}
              className={`group relative p-8 rounded-[2rem] bg-white dark:bg-slate-900/40 border border-slate-900/5 dark:border-white/5 backdrop-blur-xl transition-all duration-500 shadow-xl dark:shadow-none hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)] ${group.shadow} hover:border-slate-900/10 dark:hover:border-white/20`}
              style={{ perspective: 1000 }}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500`} />

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-500 dark:group-hover:from-white dark:group-hover:to-slate-400 transition-all">
                    {group.label}
                  </h3>
                  <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r ${group.color} transition-all duration-500 mt-1`} />
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 + i * 0.05 + j * 0.03,
                    }}
                    className={`px-4 py-2 text-xs font-bold rounded-xl bg-slate-900/5 dark:bg-white/5 ${group.tagText} border border-slate-900/5 dark:border-white/10 hover:scale-110 hover:shadow-md transition-all duration-300 cursor-default backdrop-blur-md`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
