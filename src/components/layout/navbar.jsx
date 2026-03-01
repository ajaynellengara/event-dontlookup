"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Navbar({ headerData }) {
    const NAV_ITEMS = headerData?.navigation || [];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const pathname = usePathname();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setScrolled(currentScrollY > 50);

            // Hide navbar if scrolling down and past 50px, show if scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
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
            <header className={cn(
                "fixed w-full flex items-center top-0 left-0 z-[100] transition-all duration-500",
                scrolled ? "bg-[#000000e6] backdrop-blur-[20px] h-[100px] py-0" : " h-[var(--header-y-sm)] lg:h-[var(--header-y-lg)] 2xl:h-[var(--header-y-2xl)] 3xl:h-[var(--header-y-3xl)] bg-transparent py-[15px]",
                !isVisible && !isMenuOpen ? "-translate-y-full" : "translate-y-0"
            )}>
                <div className="container flex justify-between items-center">
                    {/* Logo Section */}
                    <div className={cn("relative h-auto block transition-all", scrolled ? "w-[100px] xl:w-[120px]" : "w-[130px] xl:w-[150px]")}>
                        <LogoLink href="/" className="" visible={!scrolled} src={headerData?.logo?.url || "/images/brand-logo.svg"} width={150} />
                        <LogoLink href="/" className="" visible={scrolled} src={headerData?.logo?.url || "/images/brand-logo.svg"} width={120} />
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
                            <div className="w-[30px] h-[30px] relative z-[2] flex flex-col items-end justify-center">
                                <span className={cn(
                                    "h-[1px] bg-white block mb-[7px] transition-all duration-300 ease-in-out origin-center",
                                    isMenuOpen
                                        ? "w-[30px] translate-y-[8px] rotate-45"
                                        : "w-full group-hover:w-[30px]"
                                )} />
                                <span className={cn(
                                    "h-[1px] bg-white block mb-[7px] transition-all duration-300 ease-in-out origin-center",
                                    isMenuOpen
                                        ? "w-[30px] opacity-0"
                                        : "w-1/2"
                                )} />
                                <span className={cn(
                                    "h-[1px] bg-white block transition-all duration-300 ease-in-out origin-center",
                                    isMenuOpen
                                        ? "w-[30px] -translate-y-[8px] -rotate-45"
                                        : "w-full group-hover:w-[30px]"
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
                        className="fixed top-0 right-0 w-full h-screen bg-black backdrop-blur-[20px] z-[98] flex overflow-y-auto"
                    >
                        <div className="container">
                            <div className="w-auto h-full overflow-y-auto pt-[var(--header-y-sm)] lg:pt-[var(--header-y-lg)] 2xl:pt-[var(--header-y-2xl)] 3xl:pt-[var(--header-y-3xl)] ">
                                <ul className="max-h-[calc(100vh-var(--header-y-sm))] lg:max-h-[calc(100vh-var(--header-y-lg))] 2xl:max-h-[calc(100vh-var(--header-y-2xl))] 3xl:max-h-[calc(100vh-var(--header-y-3xl))] overflow-y-auto list-none flex flex-col gap-y-2 py-10 m-0">
                                    {NAV_ITEMS.map((item, index) => (
                                        <li key={index}
                                            className="w-auto"
                                        >
                                            {item.submenu ? (
                                                <div>
                                                    <div
                                                        className="text-[32px] xl:text-[48px] 2xl:text-[56px] 3xl:text-[64px] leading-none font-normal uppercase text-white flex gap-x-2 items-center cursor-pointer py-1.5"
                                                        onClick={() => toggleSubmenu(index)}
                                                    >
                                                        <span>
                                                            {item.label}
                                                        </span>
                                                        <span>
                                                            {openSubmenu === index ? (
                                                                <ChevronUp className="size-6 xl:size-10 font-normal text-white/40 hover:text-white transition duration-300" />
                                                            ) : (
                                                                <ChevronDown className="size-6 xl:size-10 font-normal text-white/40 hover:text-white transition duration-300" />
                                                            )
                                                            }
                                                        </span>
                                                    </div>
                                                    <AnimatePresence>
                                                        {openSubmenu === index && (
                                                            <motion.ul
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                className="flex flex-col overflow-hidden my-3 space-y-3"
                                                            >
                                                                {item.submenu.map((subItem, subIndex) => (
                                                                    <li key={subIndex}>
                                                                        <Link
                                                                            href={subItem.href}
                                                                            target={subItem.external ? "_blank" : undefined}
                                                                            onClick={toggleMenu}
                                                                            className="text-[18px] xl:text-[28px] 2xl:text-[38px] 3xl:text-[48px] font-primary text-white/70 hover:text-[#06B5B9] block transition-colors"
                                                                        >
                                                                            {subItem.label}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </motion.ul>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    onClick={toggleMenu}
                                                    target={item.external ? "_blank" : undefined}
                                                    className={cn(
                                                        "text-[32px] xl:text-[48px] 2xl:text-[56px] 3xl:text-[64px] leading-none font-normal uppercase text-white py-1.5 flex items-center hover:text-[#06B5B9] transition-colors",
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
