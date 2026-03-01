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
    const [openSubmenu, setOpenSubmenu] = useState(null);
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

    const toggleSubmenu = (index) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    const menuVariants = {
        closed: { opacity: 0, x: "-100%", transition: { duration: 0.3 } },
        open: { opacity: 1, x: 0, transition: { duration: 0.3 } }
    };

    return (
        <>
            <header className={cn("fixed w-full flex items-center top-0 left-0 z-[100] transition-all duration-500", scrolled ? "bg-[#000000e6] backdrop-blur-[20px] h-[100px] py-0" : "bg-transparent py-[15px]")}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

                    {/* Logo Section */}
                    {/* Logo Section */}
                    <div className={cn("relative h-auto block transition-all", scrolled ? "w-[40px] md:w-[80px]" : "w-[150px]")}>
                        <LogoLink href="/" className="" visible={!scrolled} src="/images/brand-logo.svg" width={150} />
                        <LogoLink href="/" className="" visible={scrolled} src="/assets/images/logo.webp" width={80} />
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

                        <div className="cursor-pointer p-2 -mr-2 group" onClick={toggleMenu}>
                            <div className="w-[30px] h-[30px] relative z-[2] block pt-[7px]">
                                <span className={cn(
                                    "h-[2px] bg-white block mb-[7px] transition-all duration-200 ease-linear",
                                    isMenuOpen
                                        ? "w-[15px] [transform:translate(2px,4px)_rotate(45deg)]"
                                        : "w-[16.5px] group-hover:w-[30px]"
                                )} />
                                <span className={cn(
                                    "h-[2px] bg-white block mb-[7px] transition-all duration-500 ease-linear",
                                    isMenuOpen
                                        ? "w-[30px] [transform:translate(0,0)_rotate(-45deg)]"
                                        : "w-[30px]"
                                )} />
                                <span className={cn(
                                    "h-[2px] bg-white block transition-all duration-200 ease-linear float-right",
                                    isMenuOpen
                                        ? "w-[15px] [transform:translate(-3px,-3.5px)_rotate(45deg)]"
                                        : "w-[16.5px] group-hover:w-[30px]"
                                )} />
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
                        className="fixed top-[100px] left-0 w-full h-[calc(100vh-100px)] bg-[#000000e6] backdrop-blur-[20px] z-[98] flex items-start overflow-y-auto px-10 py-10"
                    >
                        <div className="w-full max-w-lg">
                            <ul className="list-none p-0 m-0 space-y-2">
                                {NAV_ITEMS.map((item, index) => (
                                    <li key={index} className="border-b border-[#828080]">
                                        {item.submenu ? (
                                            <>
                                                <div
                                                    className="w-full flex justify-between items-center cursor-pointer py-[25px]"
                                                    onClick={() => toggleSubmenu(index)}
                                                >
                                                    <span className="font-primary text-[clamp(1.06rem,.43vw+.9rem,1.25rem)] text-white hover:text-[#06B5B9] transition-colors">
                                                        {item.label}
                                                    </span>
                                                    <span className="text-white w-10 h-10 flex items-center justify-center text-xl">
                                                        {openSubmenu === index ? "−" : "+"}
                                                    </span>
                                                </div>
                                                <AnimatePresence>
                                                    {openSubmenu === index && (
                                                        <motion.ul
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="flex flex-col overflow-hidden pb-[25px] pl-4 space-y-3"
                                                        >
                                                            {item.submenu.map((subItem, subIndex) => (
                                                                <li key={subIndex}>
                                                                    <Link
                                                                        href={subItem.href}
                                                                        target={subItem.external ? "_blank" : undefined}
                                                                        onClick={toggleMenu}
                                                                        className="font-primary text-[clamp(.94rem,.14vw+.88rem,1rem)] text-white hover:text-[#06B5B9] block transition-colors"
                                                                    >
                                                                        {subItem.label}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={toggleMenu}
                                                className={cn(
                                                    "py-[25px] flex items-center w-full font-primary text-[clamp(1.06rem,.43vw+.9rem,1.25rem)] text-white hover:text-[#06B5B9] transition-colors",
                                                    pathname === item.href && "text-[#06B5B9]"
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
        </>
    );
}

// Helper component for Logo Links to reduce boilerplate
function LogoLink({ href, className, visible, src, width }) {
    return (
        <Link href={href} className={cn("absolute top-1/2 -translate-y-1/2 transition-opacity duration-300", className,
            visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
            <Image src={src} width={width} height={109} loading="lazy" alt="logo" className="w-auto h-auto" />
        </Link>
    );
}
