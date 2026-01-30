"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CursorFollower() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target instanceof Element) {
        if (
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.classList.contains("cursor-highlight")
        ) {
          setIsHovering(true);
        }
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      if (target instanceof Element) {
        if (
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.classList.contains("cursor-highlight")
        ) {
          setIsHovering(false);
        }
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", checkMobile);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none opacity-40 z-[9999] mix-blend-difference transition-all duration-100"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: "-50%",
          y: "-50%",
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        <motion.div
          className="rounded-full border-1 border-white backdrop-blur-sm transition-all duration-100"
          animate={{
            width: isHovering ? 60 : 20,
            height: isHovering ? 60 : 20,
            backgroundColor: isHovering
              ? "rgba(255, 255, 255, 0.4)"
              : "rgba(255, 255, 255, 0.2)",
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        />
      </motion.div>
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full bg-white/10 mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: isHovering ? 8 : 6,
          height: isHovering ? 8 : 6,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      />
    </>
  );
}
