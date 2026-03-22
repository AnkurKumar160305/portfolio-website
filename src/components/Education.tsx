"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { resumeData } from "@/data/resume";
import { GraduationCap, MapPin, Calendar, Award, ExternalLink, ShieldCheck, Milestone } from "lucide-react";

const eduColors = [
  "from-blue-600 via-indigo-600 to-blue-500",
  "from-emerald-600 via-teal-600 to-emerald-500",
  "from-violet-600 via-purple-600 to-violet-500",
];

const certGradients = [
  "from-amber-400 via-orange-500 to-red-500",
  "from-blue-400 via-cyan-500 to-indigo-500",
  "from-emerald-400 via-teal-500 to-cyan-500",
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="max-w-6xl mx-auto px-4" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 mb-6 border border-emerald-500/20 shadow-lg shadow-emerald-500/10"
        >
          <Milestone className="w-8 h-8 text-emerald-600 dark:text-emerald-500" />
        </motion.div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-emerald-600 to-blue-600 dark:from-emerald-200 dark:via-cyan-300 dark:to-blue-400">
            Education & Certifications
          </span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium">
          Academic foundation and verified technical credentials
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-blue-500 dark:text-blue-400" />
            Academic Journey
          </h3>
          <div className="relative space-y-10">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-emerald-500/30 to-transparent rounded-full" />

            {resumeData.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                whileHover={{ scale: 1.03, y: -10, x: 10, rotateX: 2 }}
                className="relative pl-16 md:pl-24 group"
                style={{ perspective: 1000 }}
              >
                <div
                  className={`absolute left-[1.25rem] md:left-[1.75rem] top-6 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-900/10 dark:border-white/20 z-10 transition-all duration-500 group-hover:scale-125 group-hover:border-blue-500 dark:group-hover:border-blue-400`}
                >
                  <div className={`absolute inset-0.5 rounded-full bg-gradient-to-br ${eduColors[i % eduColors.length]} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>

                <div className="relative p-6 rounded-[2rem] bg-white dark:bg-slate-900/40 border border-slate-900/5 dark:border-white/5 backdrop-blur-xl hover:bg-slate-50 dark:hover:bg-slate-900/60 hover:border-slate-900/10 dark:hover:border-white/10 transition-all duration-500 shadow-xl dark:shadow-none group/card overflow-hidden">
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${eduColors[i % eduColors.length]} opacity-0 group-hover/card:opacity-[0.05] blur-3xl transition-opacity duration-700`} />
                  
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors">
                        {edu.institution}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-bold mt-1 flex items-center gap-1.5 text-sm uppercase tracking-wider">
                        {edu.degree}
                        {"major" in edu && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-700" />
                            <span className="text-slate-600 dark:text-slate-300 font-bold">{edu.major}</span>
                          </>
                        )}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/5 dark:bg-white/5 text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 border border-slate-900/5 dark:border-white/5">
                        <Calendar className="w-3 h-3" />
                        {edu.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase bg-gradient-to-r ${eduColors[i % eduColors.length]} text-white shadow-lg`}
                    >
                      <Award className="w-3.5 h-3.5" />
                      {edu.score}
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-amber-500" />
            Verified Credentials
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {resumeData.certificates.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ x: 10, y: -10, scale: 1.05, rotateY: -5 }}
                className="group relative p-6 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-900/5 dark:border-white/5 backdrop-blur-xl hover:bg-slate-50 dark:hover:bg-slate-900/60 hover:border-amber-500/20 dark:hover:border-amber-500/30 transition-all duration-500 shadow-xl dark:shadow-none hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.2)] overflow-hidden"
                style={{ perspective: 1000 }}
              >
                <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${certGradients[i % certGradients.length]} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                    <Award className="w-7 h-7 text-white stroke-[2.5px]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-black text-amber-600 dark:text-amber-500/80 mb-1 block">
                      {cert.date}
                    </span>
                    <h4 className="font-bold text-slate-800 dark:text-white text-base leading-tight mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-200 transition-colors">
                      {cert.name}
                    </h4>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all group-hover:translate-x-1"
                    >
                      Verify
                      <ExternalLink className="w-3 h-3 text-blue-500" />
                    </a>
                  </div>
                </div>
                
                <div className={`absolute inset-0 bg-gradient-to-r ${certGradients[i % certGradients.length]} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
