"use client";

import { motion, useSpring, useMotionValue, useTransform, useMotionTemplate } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement for parallax depth 
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 100 });

  // ALL HOOKS MUST BE BEFORE EARLY RETURNS
  const rotateX = useTransform(smoothY, [0, typeof window !== "undefined" ? window.innerHeight : 1000], [8, -8]);
  const rotateY = useTransform(smoothX, [0, typeof window !== "undefined" ? window.innerWidth : 1000], [-8, 8]);

  const spotlightX = useTransform(smoothX, (val) => `${val}px`);
  const spotlightY = useTransform(smoothY, (val) => `${val}px`);
  
  const isDark = theme === "dark" || (!theme && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const spotlightColor = isDark ? 'rgba(168,85,247,0.15)' : 'rgba(59,130,246,0.08)';
  const spotlightBackground = useMotionTemplate`radial-gradient(800px circle at ${spotlightX} ${spotlightY}, ${spotlightColor}, transparent 60%)`;

  useEffect(() => {
    setMounted(true);
    
    if (typeof window !== "undefined") {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return <div className="fixed inset-0 -z-10 transition-colors duration-500" style={{ backgroundColor: 'var(--background)' }} />;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden transition-colors duration-500" style={{ backgroundColor: 'var(--background)' }}>
      
      {/* Dynamic 3D Perspective Container */}
      <motion.div 
        className="absolute inset-[-50%] w-[200%] h-[200%]"
        style={{
          rotateX,
          rotateY,
          perspective: 1200,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Animated Infinite Vaporwave/Modern Grid */}
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "0px 100px"],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-[0.25] dark:opacity-[0.1]"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${isDark ? '#a855f7' : '#3b82f6'} 1px, transparent 1px),
              linear-gradient(to bottom, ${isDark ? '#a855f7' : '#3b82f6'} 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* 3D Floating Geometry Elements for depth */}
        {isDark && (
          <>
            <motion.div
              animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-[25%] left-[25%] w-40 h-40 border-2 border-purple-500/20 rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.15)]"
              style={{ transformStyle: "preserve-3d", translateZ: 300 }}
            />
            <motion.div
              animate={{ rotateX: [360, 0], rotateZ: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[25%] right-[25%] w-64 h-64 border border-blue-500/10 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.1)]"
              style={{ transformStyle: "preserve-3d", translateZ: -200 }}
            />
          </>
        )}
      </motion.div>

      {/* Interactive Mouse Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlightBackground }}
      />
      
      {/* Edges fade to hide Grid repetition boundaries */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-[var(--background)] pointer-events-none opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-l from-[var(--background)] via-transparent to-[var(--background)] pointer-events-none opacity-90" />
    </div>
  );
}
