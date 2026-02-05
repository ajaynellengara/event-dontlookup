"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { cn } from "@/lib/utils";
import ProjectsCard from "./projects-card";

export default function ProjectsMore({ data, locale }) {
    const targetRef = useRef(null);
    const containerRef = useRef(null);
    const items = data?.items || [];
    const [scrollDistance, setScrollDistance] = useState(0);

    useEffect(() => {
        const calculateScrollDistance = () => {
            if (!containerRef.current) return;

            // Get the first item to measure its width
            const firstItem = containerRef.current.querySelector('[data-project-item]');
            if (!firstItem) return;

            const itemWidth = firstItem.offsetWidth;
            const containerWidth = containerRef.current.offsetWidth;
            const totalWidth = itemWidth * items.length;

            // Scroll distance = total width - visible width
            const distance = totalWidth - containerWidth;
            setScrollDistance(Math.max(0, distance));
        };

        calculateScrollDistance();
        window.addEventListener('resize', calculateScrollDistance);

        // Small delay to ensure DOM is ready
        const timeout = setTimeout(calculateScrollDistance, 100);

        return () => {
            window.removeEventListener('resize', calculateScrollDistance);
            clearTimeout(timeout);
        };
    }, [items.length]);

    if (!items || items.length === 0) return null;

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -scrollDistance]
    );

    // Calculate dynamic height based on number of items
    // Formula: 100vh base + (items × 40vh) for smooth sticky scroll
    // Example: 5 items = 100 + (5 × 40) = 300vh
    const sectionHeight = useMemo(() => {
        const baseHeight = 100;
        const heightPerItem = 40;
        const calculatedHeight = baseHeight + (items.length * heightPerItem);
        return `${calculatedHeight}vh`;
    }, [items.length]);

    return (
        <section ref={targetRef} style={{ height: sectionHeight }} className="relative w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <div
                    ref={containerRef}
                    className={cn(
                        "w-full h-full flex items-center",
                        "sm:max-w-[calc(var(--container-sm)/2+50%)] md:max-w-[calc(var(--container-md)/2+50%)] lg:max-w-[calc(var(--container-lg)/2+50%)] xl:max-w-[calc(var(--container-xl)/2+50%)] 2xl:max-w-[calc(var(--container-2xl)/2+50%)] 3xl:max-w-[calc(var(--container-3xl)/2+50%)]",
                        locale === "ar"
                            ? "pr-4 mr-auto [mask-image:linear-gradient(to_left,black_0%,black_99%,transparent_100%)] max-sm:[-webkit-mask-image:linear-gradient(to_left,black_0%,black_99%,transparent_100%)]"
                            : "pl-4 ml-auto [mask-image:linear-gradient(to_right,black_0%,black_99%,transparent_100%)] max-sm:[-webkit-mask-image:linear-gradient(to_right,black_0%,black_99%,transparent_100%)]"
                    )}
                >
                    <motion.div
                        style={{ x }}
                        className="flex gap-0 pr-4 -mx-2 lg:-mx-4 2xl:-mx-6"
                    >
                        {items.map((item, i) => (
                            <div
                                key={item.id || i}
                                data-project-item
                                className="relative h-screen w-[100vw] sm:w-[50vw] lg:w-[30vw] shrink-0 p-2 lg:p-4 2xl:p-6 flex flex-col justify-center"
                            >
                                <ProjectsCard locale={locale} data={item} />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
