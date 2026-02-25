
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';


const footerSections = {
    navigations: [
        {
            title: "About us",
            links: [
                { label: "Our Story", href: "/our-story" },
                { label: "About us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Brand Assets", href: "/brand" },
                { label: "Our Name", href: "/brand#name" },
                { label: "Leadership", href: "/" },
            ]
        },
        {
            title: "Features",
            links: [
                { label: "Feeds", href: "/features" },
                { label: "Explore", href: "/features" },
                { label: "DLU Verified", href: "/features" },
                { label: "Flicks", href: "/features" },
            ]
        },
        {
            title: "Services",
            links: [
                { label: "Tutors", href: "/tutor" },
                { label: "Learn", href: "https://learning.dontlookup.fashion/learning", external: true },
            ]
        },
        {
            title: "Community",
            links: [
                { label: "Anti - Bullying", href: "/" },
                { label: "Parents", href: "/" },
                { label: "Programs", href: "/" },
            ]
        },
        {
            title: "Business",
            links: [
                { label: "Advertising", href: "/" }, // 'Adverting' corrected to 'Advertising'
                { label: "Partners", href: "/" },
            ]
        }
    ],
    socialLinks: [
        {
            label: "Instagram", href: "/",
            icon: "/images/social-1.svg"
        },
        {
            label: "Facebook", href: "/",
            icon: "/images/social-2.svg"
        },
        {
            label: "LinkedIn", href: "/",
            icon: "/images/social-3.svg"
        },
        {
            label: "YouTube", href: "/",
            icon: "/images/social-4.svg"
        },
    ],
}


export default function Footer({ data = footerSections }) {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    return (
        <footer id="Footer" className="w-full bg-[#2d2d2d] text-[#a0a0a0] overflow-hidden relative block z-0 font-sora">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-5 sm:py-10 lg:py-20">
                    <div id="FtAcco" className="ftAccordion flex flex-wrap -mx-2 md:-mx-4 lg:-mx-5 lg:mx-[-30px]">

                        {/* Logo Column */}
                        <div className="ftCol w-full px-2 md:w-1/6 md:px-4 lg:px-8 mb-4 md:mb-0">
                            <div className="itemWrap mb-4 md:mb-8">
                                <Link href="/" aria-label="Logo" className="logoWrap block w-full max-w-[40px] lg:max-w-[60px] xl:max-w-[80px] h-auto">
                                    <img src="/assets/images/logo.webp" width="70" height="109" loading="lazy" alt="logo" className="w-full h-auto block" />
                                </Link>
                            </div>
                        </div>

                        {/* Accordion Columns */}
                        {footerSections.map((section, index) => (
                            <div key={index} className="ftCol w-full px-2 md:w-1/6 md:px-4 lg:px-8 mb-2 md:mb-0 border-b border-gray-700 md:border-none">
                                <div className="itemWrap mb-4 md:mb-8">
                                    <div className="accordion-item bg-transparent border-0">
                                        <div className="accordion-header md:mb-4">
                                            <button
                                                type="button"
                                                onClick={() => toggleSection(index)}
                                                className="accordion-button w-full flex justify-between items-center text-left bg-none p-0 m-0 border-none shadow-none md:cursor-default"
                                                aria-expanded={openSection === index}
                                            >
                                                <span className="ftTle text-[13px] sm:text-[14px] lg:text-[16px] font-semibold uppercase text-white leading-tight block py-3 md:py-0">
                                                    {section.title}
                                                </span>
                                                {/* Mobile Toggle Icon */}
                                                <span className="md:hidden text-white transform transition-transform duration-300">
                                                    {openSection === index ? '−' : '+'}
                                                </span>
                                            </button>
                                        </div>

                                        <AnimatePresence>
                                            {(openSection === index || (typeof window !== 'undefined' && window.innerWidth >= 768)) && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="accordion-collapse overflow-hidden md:!h-auto md:!opacity-100 md:block" // Force show on desktop
                                                >
                                                    <div className="accordion-body pb-4 md:pb-0">
                                                        <ul className="ftUl list-none p-0 m-0 space-y-1">
                                                            {section.links.map((link, linkIndex) => (
                                                                <li key={linkIndex}>
                                                                    <Link
                                                                        href={link.href}
                                                                        target={link.external ? "_blank" : undefined}
                                                                        aria-label="nav"
                                                                        className="ftTxt text-[12px] leading-[1.2] font-normal text-[#a0a0a0] hover:text-[#3b82f6] transition-colors no-underline block py-1"
                                                                    >
                                                                        {link.label}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        {/* CSS Fallback for Desktop if JS fails/SSR matches */}
                                        <div className="hidden md:block">
                                            <div className="accordion-body pb-0">
                                                <ul className="ftUl list-none p-0 m-0 space-y-1">
                                                    {section.links.map((link, linkIndex) => (
                                                        <li key={linkIndex}>
                                                            <Link
                                                                href={link.href}
                                                                target={link.external ? "_blank" : undefined}
                                                                aria-label="nav"
                                                                className="ftTxt text-[12px] leading-[1.2] font-normal text-[#a0a0a0] hover:text-[#3b82f6] transition-colors no-underline block py-1"
                                                            >
                                                                {link.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="ftBtm py-4 sm:py-5 lg:py-8 border-t border-[#666]">
                    <div className="footer_btm_link flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">

                        {/* Social Icons */}
                        <div className="socialmedia w-full md:w-[16.666%] lg:w-[calc(16.666%+6px)]">
                            <ul className="flex gap-2.5 justify-center md:justify-start p-0 m-0 list-none">
                                {[
                                    { href: "https://www.instagram.com/dontlookup.fashion/", icon: "/assets/images/instagram.svg", alt: "Instagram" },
                                    { href: "https://www.facebook.com/dontlookupfashion", icon: "/assets/images/facebook.svg", alt: "Facebook" },
                                    { href: "https://www.linkedin.com/company/dontlookupfashion/?viewAsMember=true", icon: "/assets/images/linkedIn.svg", alt: "LinkedIn" },
                                    { href: "https://www.youtube.com/@Dontlookup.fashion", icon: "/assets/images/youtube.svg", alt: "YouTube" },
                                ].map((social, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            className="block w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] bg-white/30 border border-white/30 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                        >
                                            <img src={social.icon} alt={social.alt} className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] object-contain fill-white" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Bottom Links */}
                        <ul className="flex flex-wrap gap-2.5 w-full md:w-[calc(100%-16.666%-6px)] justify-center md:justify-between p-0 m-0 list-none">
                            {data?.socialLinks?.map((item, idx) => (
                                <li key={idx}>
                                    <a
                                        href={item?.href}
                                        className="w-[20px] 3xl:w-[24px] aspect-square block"
                                    >
                                        <Image src={item?.icon} alt={item?.label} width={24} height={24} className="w-full h-full object-contain" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Copyright & Info */}
                    <div className="ftInfo mt-5 md:mt-8 grid grid-cols-1 md:grid-cols-6 gap-4 relative text-center md:text-left">
                        <div className="hidden md:block col-span-1 relative">
                            <div className="absolute top-0 left-0 w-[80px] h-[30px] bg-[url('/assets/images/fboxx-corp.svg')] bg-no-repeat bg-contain"></div>
                        </div>
                        <div className="col-span-1 md:col-span-5 md:pl-6 text-[12px] leading-[1.2] text-[#a0a0a0]">
                            <p className="ftTxt mb-1 block">Conditions of Use. Privacy Notice consumer Health Data Privacy Disclosure, Your Ads Privacy Choices</p>
                            <p className="ftTxt block">© <span id="year">{new Date().getFullYear()}</span>, Dontlookup. or its affiliates</p>
                        </div>
                        <div className="md:hidden flex justify-center mt-4">
                            <div className="w-[80px] h-[30px] bg-[url('/assets/images/fboxx-corp.svg')] bg-no-repeat bg-contain"></div>
                        </div>
                    </div>
                </div>
            </div>

            <Image src="/images/footer-temp.svg" width={1920} height={1080} alt="Footer Top" className="w-full" />
        </footer>
    );
}
