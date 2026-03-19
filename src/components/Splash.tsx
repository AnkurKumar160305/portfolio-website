"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Splash() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 50);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712]"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Monogram */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-500/30 to-emerald-500/30 rounded-full scale-150" />
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl flex items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-400 via-cyan-300 to-emerald-400">
                  AK
                </span>
              </div>
            </div>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="w-48 md:w-56 h-0.5 bg-white/10 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.05 }}
            />
          </motion.div>

          {/* Loading text */}
          <motion.p
            className="mt-4 text-xs tracking-[0.3em] uppercase text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Loading Portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
