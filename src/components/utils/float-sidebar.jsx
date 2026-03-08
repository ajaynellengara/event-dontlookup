"use client";

import Image from 'next/image';
import React from 'react';

export default function FloatSidebar() {
    return (
        <div className="fixed bottom-8 right-6 z-100 flex flex-col gap-3">
            <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 xl:w-12 2xl:w-14 aspect-square not-hover:animate-whatsapp-bounce pointer-events-auto"
                aria-label="Chat with us on WhatsApp"
            >
                <Image
                    src="/images/whatsapp.svg"
                    alt="WhatsApp"
                    width={48}
                    height={48}
                    className="1/2"
                />
            </a>
        </div>
    );
}