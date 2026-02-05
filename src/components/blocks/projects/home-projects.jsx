"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "motion/react";
import { Heading, Text } from "@/components/utils/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { cn } from "@/lib/utils";


const local_data = {
    sub_title: "LATEST PROJECTS",
    sub_title_ar: "أحدث المشاريع",
    title: "Our Signature Portfolio",
    title_ar: "محفظتنا المميزة",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    description_ar:
        "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت. سيد دو إيوسمود تيمبور إنسيديدونت أوت لابور إت دولور ماجنا أليكوا.",
    button: {
        label: "View All Projects",
        label_ar: "عرض جميع المشاريع",
        link: "/projects",
    },
    items: [
        {
            id: 1,
            slug: "information-technology-complex",
            title: "Information & Technology Complex",
            title_ar: "مجمع المعلومات والتكنولوجيا",
            location: "Riyadh, KSA",
            location_ar: "الرياض، المملكة العربية السعودية",
            media: {
                path: "/images/home-portfolio-1.jpg",
                alt: "Information & Technology Complex",
                alt_ar: "مجمع المعلومات والتكنولوجيا",
            },
        },
        {
            id: 2,
            slug: "skyline-heights",
            title: "Skyline Heights",
            title_ar: "سكايلاين هايتس",
            location: "Dubai, UAE",
            location_ar: "دبي، الإمارات العربية المتحدة",
            media: {
                path: "/images/home-portfolio-2.jpg",
                alt: "Skyline Heights",
                alt_ar: "سكايلاين هايتس",
            },
        },
        {
            id: 3,
            slug: "luxury-residence",
            title: "Luxury Residence",
            title_ar: "الإقامة الفاخرة",
            location: "Dubai, UAE",
            location_ar: "دبي، الإمارات العربية المتحدة",
            media: {
                path: "/images/home-portfolio-3.jpg",
                alt: "Luxury Residence",
                alt_ar: "الإقامة الفاخرة",
            },
        },
        {
            id: 4,
            slug: "luxury-residence",
            title: "Luxury Residence",
            title_ar: "الإقامة الفاخرة",
            location: "Dubai, UAE",
            location_ar: "دبي، الإمارات العربية المتحدة",
            media: {
                path: "/images/home-portfolio-1.jpg",
                alt: "Luxury Residence",
                alt_ar: "الإقامة الفاخرة",
            },
        },
        {
            id: 5,
            slug: "skyline-heights",
            title: "Skyline Heights",
            title_ar: "سكايلاين هايتس",
            location: "Dubai, UAE",
            location_ar: "دبي، الإمارات العربية المتحدة",
            media: {
                path: "/images/home-portfolio-2.jpg",
                alt: "Skyline Heights",
                alt_ar: "سكايلاين هايتس",
            },
        },
        {
            id: 6,
            slug: "luxury-residence",
            title: "Luxury Residence",
            title_ar: "الإقامة الفاخرة",
            location: "Dubai, UAE",
            location_ar: "دبي، الإمارات العربية المتحدة",
            media: {
                path: "/images/home-portfolio-3.jpg",
                alt: "Luxury Residence",
                alt_ar: "الإقامة الفاخرة",
            },
        },
    ],
}

export default function HomeProjects({ data = local_data, locale }) {
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
        <section ref={targetRef} className="relative h-[300vh] bg-white">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-0">
                    {displayItems.map((item, i) => (
                        <div
                            key={i}
                            className="relative h-screen w-[100vw] sm:w-[50vw] lg:w-[33.33vw] flex-shrink-0 border-r border-gray-100/10 p-4 pt-20 flex flex-col justify-center"
                        >
                            <ProjectCard item={item} locale={locale} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function ProjectCard({ item, locale }) {
    const title = locale === "ar" ? item?.title_ar : item?.title;
    const location = locale === "ar" ? item?.location_ar : item?.location;
    const image = item?.media?.path;
    const alt = locale === "ar" ? item?.media?.alt_ar : item?.media?.alt;
    const link = item?.slug;

    // Simulate multiple images if not present.
    // In a real scenario, use item.images
    const images = item.images && item.images.length > 0
        ? item.images
        : [
            { path: image, alt: alt },
            { path: image, alt: alt }, // Duplicate for demo
            { path: image, alt: alt }  // Duplicate for demo
        ];

    return (
        <div className="flex h-full w-full flex-col px-4 group">
            <div className="relative flex-1 overflow-hidden w-full h-[70vh] mb-6 rounded-2xl bg-gray-100">
                <ProjectImageSlider images={images} locale={locale} />
            </div>

            <div className="space-y-4">
                <Heading as="h3" size="h5" className="font-medium text-black">
                    {parse(title || "")}
                    {location && <span className="block text-sm text-gray-500 font-normal mt-1">{parse(location)}</span>}
                </Heading>

                <Button
                    variant="outline"
                    className="rounded-full border-black/20 hover:bg-black hover:text-white transition-colors duration-300 pointer-events-auto"
                    asChild
                >
                    <Link href={link || "#"}>
                        {locale === "ar" ? "عرض المشروع" : "View Project"}
                    </Link>
                </Button>
            </div>
        </div>
    );
}

function ProjectImageSlider({ images, locale }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000); // Change every 4 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
                key={currentIndex}
                initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                exit={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", zIndex: 10 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full"
            >
                <Image
                    src={images[currentIndex]?.path}
                    alt={images[currentIndex]?.alt || "Project Image"}
                    fill
                    className="object-cover w-full h-full"
                />
            </motion.div>
        </AnimatePresence>
    );
}
