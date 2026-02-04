"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "motion/react";
import { Heading, Text } from "@/components/utils/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { cn } from "@/lib/utils";
import ProjectsCard from "./projects-card";

export default function ProjectsMore({ data, locale }) {
    const targetRef = useRef(null);
    const [itemsPerScreen, setItemsPerScreen] = useState(3);
    const items = data?.items || [];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerScreen(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerScreen(2);
            } else {
                setItemsPerScreen(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const displayItems = items.length < 6 ? [...items, ...items, ...items] : items;
    const totalItems = displayItems.length;

    // Calculate move percentage based on items per screen
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", `-${(totalItems - itemsPerScreen) * (100 / itemsPerScreen)}vw`]
    );

    if (!items || items.length === 0) return null;
    return (
        <section className="w-full py-[15px] sm:py-[20px] xl:py-[45px] 2xl:py-[55px]">
            <div className="container">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-0">
                        {displayItems.map((item, i) => (
                            <div
                                key={i}
                                className="relative h-screen w-[100vw] sm:w-[50vw] lg:w-[33.33vw] flex-shrink-0 border-r border-gray-100/10 p-4 pt-20 flex flex-col justify-center"
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
