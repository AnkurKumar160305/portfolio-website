"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useTheme } from "next-themes";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { theme } = useTheme();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Snappy spring for the inner dot
  const springXDot = useSpring(mouseX, { stiffness: 1500, damping: 35, mass: 0.1 });
  const springYDot = useSpring(mouseY, { stiffness: 1500, damping: 35, mass: 0.1 });

  // Floating spring for the trailing ring
  const springXRing = useSpring(mouseX, { stiffness: 150, damping: 25, mass: 0.5 });
  const springYRing = useSpring(mouseY, { stiffness: 150, damping: 25, mass: 0.5 });

  useEffect(() => {
    setMounted(true);

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      setIsHovering(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null
      );
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  // Disable completely on devices pointing with touch
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const isDark = theme === "dark" || (!theme && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const dotSize = isHovering ? 6 : 8;
  const ringSize = isHovering ? 50 : 36;
  const color = isDark ? "#a855f7" : "#3b82f6";
  const ringColor = isDark ? "rgba(168, 85, 247, 0.4)" : "rgba(59, 130, 246, 0.4)";

  return (
    <>
      {/* Custom Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] hidden md:flex items-center justify-center bg-transparent border-[1.5px] backdrop-invert-[0.1]"
        style={{
          width: ringSize,
          height: ringSize,
          x: springXRing,
          y: springYRing,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: ringColor,
        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
          opacity: isHovering ? 0.9 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      
      {/* Core Dot with Mix Blend Mode */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{
          width: dotSize,
          height: dotSize,
          x: springXDot,
          y: springYDot,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: isDark ? "#ffffff" : "#0f0a1a",
        }}
        animate={{
          scale: isHovering ? 0.3 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      {/* Dramatic glowaura */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9997] hidden md:block blur-[20px] opacity-40 mix-blend-screen"
        style={{
          width: ringSize * 1.5,
          height: ringSize * 1.5,
          x: springXRing,
          y: springYRing,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: color,
        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  );
}
