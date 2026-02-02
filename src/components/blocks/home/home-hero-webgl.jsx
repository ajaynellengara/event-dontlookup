"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heading } from "@/components/utils/typography";
import WebglDisplacementCarousel from "@/components/animations/WebglDisplacementCarousel";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";

export default function HomeHeroWebgl({ data, locale }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliders = data?.sliders || [];

    // Extract images for WebGL
    // Use media_desktop_path as primary, fallback to media_mobile_path or just empty string.
    // Note: WebGL transitions currently support images. If it's a video, we might need a poster or just use the video path if it's acceptable by Three.js (TextureLoader can load videos but needs VideoTexture).
    // For now, let's  // Extract images for WebGL
    // Using dummy images as requested
    const images = React.useMemo(() => {
        if (!sliders || sliders.length === 0) return [];
        return sliders.map((_, i) => {
            const dummies = [
                "https://images.pexels.com/photos/374077/pexels-photo-374077.jpeg", // Modern architecture
                "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg", // Cityscape
                "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"  // Building detail
            ];
            return dummies[i % dummies.length];
        });
    }, [sliders]);

    const currentSlide = sliders[activeIndex];

    // Auto-slide logic
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % sliders.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [sliders.length]);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Minimum swipe distance
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            // Next Slide
            setActiveIndex((current) => (current + 1) % sliders.length);
        }
        if (isRightSwipe) {
            // Prev Slide
            setActiveIndex((current) => (current - 1 + sliders.length) % sliders.length);
        }
    };

    return (
        <section
            className="relative w-full h-screen overflow-hidden bg-gray-900 text-white touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* WebGL Background */}
            {images.length > 0 && (
                <div className="absolute inset-0 z-0">
                    <WebglDisplacementCarousel
                        images={images}
                        activeIndex={activeIndex}
                    />
                </div>
            )}

            {/* Overlay Content */}
            <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-6 md:p-12 lg:p-16">

                {/* Top / Header area (if needed, otherwise empty) */}
                <div className="w-full"></div>

                {/* Center/Bottom Content */}
                <div className="w-full h-full flex items-end pb-10">
                    <div className="w-full flex flex-col md:flex-row items-end justify-between gap-8">

                        {/* Left Side: Title & Subtitle */}
                        <div className="flex-1 max-w-4xl space-y-4">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <Heading
                                        as="h1"
                                        size="h1"
                                        className="leading-none text-white font-medium text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight"
                                    >
                                        {parse(
                                            locale === "ar"
                                                ? currentSlide?.title_ar || ""
                                                : currentSlide?.title || ""
                                        )}
                                    </Heading>
                                    <div className="mt-4 text-white/80 text-lg md:text-xl max-w-2xl font-light">
                                        {/* Subtitle if available in data, or just description */}
                                        {parse(
                                            locale === "ar"
                                                ? currentSlide?.description_ar || ""
                                                : currentSlide?.description || ""
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right Side: Project Name */}
                        <div className="flex flex-col items-end text-right md:min-w-[300px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <div className="uppercase tracking-[0.2em] text-sm text-white/60 mb-2">
                                        {locale === "ar" ? "المشروع" : "PROJECT"}
                                    </div>
                                    <Heading
                                        as="h3"
                                        size="h3"
                                        className="text-xl md:text-2xl font-light tracking-wide uppercase"
                                    >
                                        {parse(
                                            locale === "ar"
                                                ? currentSlide?.project_name_ar || ""
                                                : currentSlide?.project_name || ""
                                        )}
                                    </Heading>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>

                {/* Navigation Dots (Bottom Left/Center) */}
                <div className="absolute bottom-12 left-12 md:bottom-16 md:left-16 pointer-events-auto">
                    <div className="flex gap-3">
                        {sliders.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleDotClick(idx)}
                                className={cn(
                                    "w-3 h-3 rounded-full transition-all duration-300 border border-white/50",
                                    activeIndex === idx
                                        ? "bg-white scale-110"
                                        : "bg-transparent hover:bg-white/30"
                                )}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
