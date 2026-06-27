"use client";

import Image from 'next/image';
import React from 'react';

const CommunityIcon = () => (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full p-2.5">
        <path d="M17 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" fill="white" />
        <path d="M31 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" fill="white" />
        <path d="M24 28c-4.5 0-8.5 2-8.5 5v3h17v-3c0-3-4-5-8.5-5Z" fill="white" />
        <path d="M8 29c-2.5 0-5 1.2-5 3v2h6v-2c0-1.8-.8-3-1-3Z" fill="white" />
        <path d="M40 29c-2.5 0-5 1.2-5 3v2h6v-2c0-1.8-.8-3-1-3Z" fill="white" />
        <circle cx="12.5" cy="24" r="3" fill="white" />
        <circle cx="35.5" cy="24" r="3" fill="white" />
    </svg>
);

export default function FloatSidebar() {
    return (
        <div className="fixed bottom-8 right-6 z-100 flex flex-col gap-3">
            <a
                href="https://wa.me/+971565345046"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-11 xl:w-12 2xl:w-14 aspect-square pointer-events-auto"
                aria-label="Chat with us on WhatsApp"
            >
                <Image
                    src="/images/whatsapp.svg"
                    alt="WhatsApp"
                    width={48}
                    height={48}
                    className="w-full h-full"
                />
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#01393b] text-white text-xs xl:text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
                    Chat with us
                </span>
            </a>
            <a
                href="https://chat.whatsapp.com/K1yPeGDkRuY3ViAnid4hkc"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-11 xl:w-12 2xl:w-14 aspect-square pointer-events-auto"
                aria-label="Join WhatsApp Community"
            >
                <div className="w-full h-full rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                    <CommunityIcon />
                </div>
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#01393b] text-white text-xs xl:text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
                    Join Community
                </span>
            </a>
        </div>
    );
}