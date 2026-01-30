"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time for smooth animation
    const timer = setTimeout(() => {
      setIsLoading(false);
      // document.body.style.overflow = "auto";
    }, 2000);

    // document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      // document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-black backdrop-blur-3xl flex items-center justify-center px-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 1, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 4 }}
              transition={{
                duration: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              <Image
                src="/images/brand-logo.svg"
                alt="WASSO"
                width={110}
                height={120}
                className="w-[90px] xl:w-[110px] h-auto"
                priority
              />
            </motion.div>
            {/* <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#c09c86]"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
