"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { resumeData } from "@/data/resume";
import { ExternalLink, Github, ChevronDown, Rocket, Code, Sparkles, MoveRight } from "lucide-react";
import Image from "next/image";
import { MagneticWrapper } from "./MagneticWrapper";

const projectImages = [
  "/images/project-arovia-hd.png",
  "/images/project-bughunter-hd.png",
  "/images/project-skillindia.png",
];

const projectGradients = [
  "from-blue-600/30 to-emerald-600/30",
  "from-purple-600/30 to-cyan-600/30",
  "from-orange-600/30 to-blue-600/30",
];

const accentColors = [
  "text-emerald-600 dark:text-emerald-400 border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10",
  "text-cyan-600 dark:text-cyan-400 border-cyan-500/20 bg-cyan-500/5 dark:bg-cyan-500/10",
  "text-blue-600 dark:text-blue-400 border-blue-500/20 bg-blue-500/5 dark:bg-blue-500/10",
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 backdrop-blur-xl mb-6 shadow-sm">
          <Rocket className="w-5 h-5 text-blue-500 dark:text-blue-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">Portfolio Work</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-800 dark:from-white dark:via-blue-200 dark:to-slate-400">
            Featured Projects
          </span>
        </h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Full-stack engineering and AI integration at the core of every build.
        </p>
      </motion.div>

      <div className="space-y-32">
        {resumeData.projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            index={i}
            image={projectImages[i]}
            gradient={projectGradients[i]}
            accent={accentColors[i]}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  image,
  gradient,
  accent,
}: {
  project: (typeof resumeData.projects)[number];
  index: number;
  image: string;
  gradient: string;
  accent: string;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-200px" });
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={cardRef}
      className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
    >
      <div className={`absolute -top-10 ${isEven ? 'left-0' : 'right-0'} opacity-[0.03] dark:opacity-5 text-[15rem] font-black pointer-events-none select-none hidden lg:block text-slate-900 dark:text-white`}>
        0{index + 1}
      </div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? -100 : 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 w-full"
      >
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-900/5 dark:border-white/5 shadow-2xl transition-all duration-700 hover:border-slate-900/10 dark:hover:border-white/20"
          style={{ perspective: "1500px" }}
        >
          <motion.div
            animate={{ 
              scale: isHovered ? 1.05 : 1,
              rotateX: isHovered ? 1.5 : 0,
              rotateY: isHovered ? (isEven ? 1.5 : -1.5) : 0
            }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full"
          >
            <Image
              src={image}
              alt={project.title}
              fill
              className="object-cover opacity-90 dark:opacity-80 group-hover:opacity-100 transition-all duration-700"
              sizes="(max-w-768px) 100vw, 50vw"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 dark:opacity-40 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-700`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 dark:from-slate-950 via-transparent to-transparent opacity-60 dark:opacity-100" />
          </motion.div>

          <div className="absolute top-0 left-0 right-0 h-10 bg-white/20 dark:bg-white/5 backdrop-blur-md border-b border-slate-900/5 dark:border-white/10 flex items-center px-6 gap-2 z-20">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <div className="flex-1 mx-4 h-6 rounded-lg bg-white/10 dark:bg-white/5 border border-slate-900/5 dark:border-white/5 flex items-center justify-center">
              <span className="text-[10px] text-slate-500 dark:text-slate-500 tracking-wider">ankur-portfolio.xyz/{project.title.toLowerCase().replace(/\s+/g, '-')}/</span>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 z-30">
            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.8 }}
              className={`w-14 h-14 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-white/20 dark:border-white/20 flex items-center justify-center text-slate-900 dark:text-white shadow-2xl transition-colors duration-500`}
            >
              <Code className="w-7 h-7" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? 100 : -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex-1 space-y-8"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
             <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border shadow-sm ${accent}`}>
              {project.date}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-200 dark:from-white/10 to-transparent" />
          </div>
          
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors tracking-tight">
            {project.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {project.techStack.map((tech, j) => (
            <span
              key={j}
              className="px-4 py-2 text-xs font-bold rounded-2xl bg-white dark:bg-white/5 border border-slate-900/5 dark:border-white/10 text-slate-600 dark:text-slate-300 shadow-sm backdrop-blur-md hover:bg-slate-50 dark:hover:bg-white/10 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="space-y-4">
          {project.bullets.map((bullet, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + j * 0.1 }}
              className="flex gap-4 text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base font-medium"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.3)]" />
              <span>{bullet}</span>
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-6 pt-4">
          <MagneticWrapper>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-black font-black text-xs tracking-wider uppercase overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl"
            >
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              View Live
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </MagneticWrapper>
          
          <MagneticWrapper intensity={0.5}>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-black text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors uppercase tracking-wider relative p-2"
            >
              <Github className="w-5 h-5" />
              Repository
            </a>
          </MagneticWrapper>
        </div>
      </motion.div>
    </div>
  );
}
