"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Heart } from "lucide-react";
import { MagneticWrapper } from "./MagneticWrapper";

export function Footer() {
  const { basics } = resumeData;

  return (
    <footer id="footer" className="relative pt-32 pb-10 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand & Summary */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400">
              Let's build something <br /> extraordinary.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed font-medium">
               I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex items-center gap-4">
               {[
                { href: basics.links.github, icon: Github, label: "GitHub" },
                { href: basics.links.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: basics.links.leetcode, icon: ExternalLink, label: "LeetCode" },
              ].map(({ href, icon: Icon, label }) => (
                <MagneticWrapper key={label} intensity={0.5}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl border border-slate-900/5 dark:border-white/5 bg-slate-900/5 dark:bg-white/5 text-slate-500 dark:text-slate-400 flex items-center justify-center transition-all hover:scale-110 active:scale-95 hover:text-blue-500 hover:border-blue-500/30 block"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                </MagneticWrapper>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${basics.email}`} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors">
                  <div className="p-2 rounded-lg bg-slate-900/5 dark:bg-white/5 group-hover:bg-blue-500/10 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold">{basics.email}</span>
                </a>
              </li>
              <li>
                <div className="group flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <div className="p-2 rounded-lg bg-slate-900/5 dark:bg-white/5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold">{basics.phone}</span>
                </div>
              </li>
              <li>
                <div className="group flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <div className="p-2 rounded-lg bg-slate-900/5 dark:bg-white/5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold">{basics.location}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links / Status */}
          <div className="space-y-6">
             <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Status</h3>
             <div className="p-6 rounded-2xl bg-slate-900/5 dark:bg-white/5 border border-slate-900/5 dark:border-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Ready for hire</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  Currently available for full-time roles & high-impact freelance projects.
                </p>
             </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Ankur Kumar. Designed for impact.
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>Made with passion</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
}
