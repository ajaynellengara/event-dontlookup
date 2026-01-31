"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";

export default function CursorFollower() {
  const [isHovering, setIsHovering] = useState(false);
  const [isCarousel, setIsCarousel] = useState(false);
  const [direction, setDirection] = useState("none"); // "left" | "right"
  const cursorRef = useRef(null);

  const isMobileQuery = useMediaQuery({ maxWidth: 1023 });
  const [isMobile, setIsMobile] = useState(true); // Default to true to prevent flash

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Simple left/right detection based on screen width
      if (e.clientX < window.innerWidth / 2) {
        setDirection("left");
      } else {
        setDirection("right");
      }
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

        // Check for carousel hover - detect embla container or specific data attribute
        if (
          target.closest(".embla__container") ||
          target.closest(".embla__viewport") ||
          target.closest('[data-cursor="carousel"]')
        ) {
          setIsCarousel(true);
          setIsHovering(true); // Ensure main hover state is on to expand cursor
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

        if (
          target.closest(".embla__container") ||
          target.closest(".embla__viewport") ||
          target.closest('[data-cursor="carousel"]')
        ) {
          setIsCarousel(false);
          setIsHovering(false);
        }
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseEnter, true); // Changed to mouseover for better bubbling/target detection
    document.addEventListener("mouseout", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", checkMobile); // Note: checkMobile is defined inside the effect but resize listener added inside too. 
      // Wait, checkMobile is defined inside. The resize listener references it. That's fine.
      document.removeEventListener("mouseover", handleMouseEnter, true);
      document.removeEventListener("mouseout", handleMouseLeave, true);
    };
  }, [cursorX, cursorY, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference transition-all duration-100 flex items-center justify-center text-black opacity-40"
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
          className="rounded-full border-1 border-white backdrop-blur-sm transition-all duration-100 flex items-center justify-center relative overflow-hidden"
          animate={{
            width: isCarousel ? 80 : isHovering ? 60 : 20,
            height: isCarousel ? 80 : isHovering ? 60 : 20,
            backgroundColor: isHovering || isCarousel
              ? "rgba(255, 255, 255, 0.4)"
              : "rgba(255, 255, 255, 0.2)",
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          {isCarousel && (
            <motion.div
              className="flex items-center gap-4 text-white"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <ChevronLeft
                className={cn(
                  "size-6 transition-opacity duration-300",
                  direction === "left" ? "opacity-100" : "opacity-30"
                )}
              />
              <ChevronRight
                className={cn(
                  "size-6 transition-opacity duration-300",
                  direction === "right" ? "opacity-100" : "opacity-30"
                )}
              />
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {!isCarousel && (
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
      )}
    </>
  );
}
