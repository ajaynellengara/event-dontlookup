"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

// Navigation Data
const NAV_ITEMS = [
    { label: "Home", href: "/" },
    {
        label: "About",
        href: null,
        submenu: [
            { label: "About us", href: "/about" },
            { label: "Our story", href: "/our-story" },
            { label: "Name", href: "/brand#name" },
            { label: "Brand", href: "/brand" },
        ]
    },
    {
        label: "Features",
        href: null,
        submenu: [
            { label: "Features", href: "/features" },
            { label: "Learning", href: "https://learning.dontlookup.fashion", external: true },
            { label: "Tutors", href: "/tutor" },
        ]
    },
    { label: "Business", href: "/" },
    { label: "Community", href: "/" },
    { label: "Help center", href: "/help-center" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    }, [isMenuOpen]);

    const menuVariants = {
        closed: { opacity: 0, transition: { delay: 0.2, duration: 0.3 } },
        open: { opacity: 1, transition: { duration: 0.3 } }
    };

    return (
        <>
            <header className={cn("fixed w-full h-[115px] flex items-center top-0 left-0 z-[100] transition-all duration-300", scrolled ? "bg-black/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4")}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

                    {/* Logo Section */}
                    {/* Logo Section */}
                    <div className="relative w-[150px] h-auto">
                        <LogoLink href="/" className="" visible={!scrolled && !isMenuOpen} src="/images/brand-logo.svg" width={150} />
                        <LogoLink href="/" className="" visible={scrolled && !isMenuOpen} src="/images/brand-logo.svg" width={150} />
                        <LogoLink href="/" className="" visible={isMenuOpen} src="/assets/images/logo.webp" width={50} />
                    </div>

                    {/* Right Controls */}
                    <div className="flex items-center gap-6">
                        <Button
                            asChild
                            variant="none"
                            className="hidden sm:block min-w-[80px] bg-[#06B5B9] rounded-[6px] text-center text-white"
                        >
                            <a href="https://learning.dontlookup.fashion/#login" target="_blank">
                                Login
                            </a>
                        </Button>

                        <div className="cursor-pointer hover-target p-2 -mr-2" onClick={toggleMenu}>
                            <div className={cn("w-[30px] h-[20px] relative flex flex-col justify-between items-end", isMenuOpen && "active")}>
                                <span className={cn("h-[2px] w-full bg-white transition-transform duration-300 origin-right", isMenuOpen && "rotate-[-45deg] translate-y-[-1px]")} />
                                <span className={cn("h-[2px] w-full max-w-1/2  bg-white transition-opacity duration-300", isMenuOpen && "opacity-0")} />
                                <span className={cn("h-[2px] w-full bg-white transition-transform duration-300 origin-right", isMenuOpen && "rotate-[45deg] translate-y-[1px]")} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed top-0 left-0 w-full h-full bg-[#101010] z-[98] flex items-center justify-center overflow-y-auto"
                    >
                        <div className="text-center">
                            <ul className="list-none p-0 m-0 space-y-6">
                                {NAV_ITEMS.map((item, index) => (
                                    <li key={index} className={cn("mb-6", item.submenu && "group relative")}>
                                        {item.submenu ? (
                                            <>
                                                <div className="text-4xl sm:text-6xl font-black text-transparent text-stroke hover:text-white transition-colors uppercase cursor-pointer flex items-center justify-center gap-2 hover-target">
                                                    {item.label} <span className="text-sm">▼</span>
                                                </div>
                                                <ul className="hidden group-hover:block mt-4 space-y-2">
                                                    {item.submenu.map((subItem, subIndex) => (
                                                        <li key={subIndex}>
                                                            <Link
                                                                href={subItem.href}
                                                                target={subItem.external ? "_blank" : undefined}
                                                                onClick={toggleMenu}
                                                                className="text-xl text-gray-400 hover:text-white block hover-target"
                                                            >
                                                                {subItem.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={toggleMenu}
                                                className={cn(
                                                    "text-4xl sm:text-6xl font-black text-transparent text-stroke hover:text-white transition-colors uppercase block hover-target",
                                                    pathname === item.href && "active-nav"
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .text-stroke { -webkit-text-stroke: 1px rgba(255,255,255,0.5); }
                .text-stroke:hover { -webkit-text-stroke: 0; }
                .active-nav { color: white !important; -webkit-text-stroke: 0 !important; }
            `}</style>
        </>
    );
}

// Helper component for Logo Links to reduce boilerplate
function LogoLink({ href, className, visible, src, width }) {
    return (
        <Link href={href} className={cn("absolute top-1/2 -translate-y-1/2 transition-opacity duration-300 hover-target", className,
            visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
            <Image src={src} width={width} height={109} loading="lazy" alt="logo" className="w-auto h-auto" />
        </Link>
    );
}
