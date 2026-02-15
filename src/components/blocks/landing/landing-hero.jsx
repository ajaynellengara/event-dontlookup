"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import {
    ParallaxProvider,
} from "react-scroll-parallax";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Heading } from "@/components/utils/typography";
import parse from "html-react-parser";

const MediaQuery = dynamic(() => import("react-responsive"), {
    ssr: false,
});

export default function LandingHero({ data }) {
    return (
        <ParallaxProvider>
            <section className="w-full h-[576px] sm:h-[576px] xl:h-screen min-h-[576px] sm:min-h-[576px] xl:min-h-[576px] 2xl:min-h-[768px] 3xl:min-h-[900px] relative">
                <div className="absolute inset-0 z-0">
                    <picture className="absolute -z-2 inset-0">
                        <source
                            media="(max-width: 640px)"
                            srcSet={data?.backgroundMedia?.mediaUrl}
                        />
                        <Image
                            src={data?.backgroundMedia?.url}
                            alt={data?.backgroundMedia?.alt || "Hero Background"}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                            className="object-cover"
                            priority
                        />
                    </picture>
                </div>
                {data?.title && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <div className="container text-center">
                            <Heading
                                as="div"
                                size="h6"
                                className="text-[#30C2C5] mb-1 xl:mb-1.5 2xl:mb-1.5"
                            >
                                {parse(data?.title)}
                            </Heading>
                        </div>
                    </div>
                )}
            </section>
        </ParallaxProvider>
    );
}
