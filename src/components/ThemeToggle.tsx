"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl group overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
      aria-label="Toggle theme"
    >
      <div className="relative z-10 w-6 h-6 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "backOut" }}
            >
              <Moon className="w-5 h-5 text-blue-400 fill-blue-900/20" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "backOut" }}
            >
              <Sun className="w-5 h-5 text-amber-500 fill-amber-200/20" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Glossy background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:opacity-100 transition-opacity opacity-0" />
      
      {/* Sparkle micro-animation */}
      <motion.div
        animate={{ 
          opacity: [0, 1, 0],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{ repeat: Infinity, duration: 2, times: [0, 0.5, 1] }}
        className="absolute -top-1 -right-1"
      >
        <Sparkles className={`w-3 h-3 ${isDark ? 'text-blue-400' : 'text-amber-500'} opacity-50`} />
      </motion.div>
    </motion.button>
  );
}
