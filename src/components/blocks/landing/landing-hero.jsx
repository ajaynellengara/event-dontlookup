"use client";
import {
    ParallaxProvider,
    Parallax
} from "react-scroll-parallax";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import { Heading } from "@/components/utils/typography";
import parse from "html-react-parser";
import { cn } from "@/lib/utils";
import RevealAnimation from "@/components/utils/reveal-animation";

export default function LandingHero({ data, variant = "default" }) {
    useEffect(() => {
        if (variant === "parallax") {
            window.scrollTo(0, 0);
        }
    }, [variant]);

    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 20 }, [
        Fade(),
        Autoplay({ delay: 5000, stopOnInteraction: false })
    ]);

    return (
        <ParallaxProvider>
            <section className={cn("w-full overflow-hidden bg-white",
                variant === "parallax" ? "sticky top-0 z-0 h-auto max-h-[768px] sm:max-h-[992px] xl:max-h-[1150px] 2xl:max-h-[1380px] 3xl:max-h-[1720px]" : "relative h-auto")}>
                <div className="w-full h-1/3 opacity-15 absolute z-1 inset-0 bg-linear-to-b from-white to-transparent pointer-events-none" />
                <Parallax translateY={variant === "parallax" ? ['7%', '-7%'] : ['0%', '0%']} className="w-full h-full">
                    <div className={cn("w-full h-full transform origin-center", variant === "parallax" ? "scale-[1.15]" : "")}>
                        <div
                            className="w-full max-w-full overflow-hidden"
                            ref={emblaRef}>
                            <div className="flex touch-pan-y touch-pinch-zoom">
                                {Array.isArray(data?.backgroundMedia) && data.backgroundMedia.length > 0 ? (
                                    data.backgroundMedia.map((item) => (
                                        <div key={item?.id} className="flex-[0_0_100%] min-w-0 select-none" >
                                            <picture className="w-full h-full min-h-[376px] sm:min-h-[420px] xl:min-h-[576px] 2xl:min-h-[768px] 3xl:min-h-[900px] block origin-center">
                                                <source
                                                    media="(max-width: 640px)"
                                                    srcSet={item?.mobileUrl || item?.url}
                                                />
                                                <Image
                                                    src={item?.url}
                                                    alt={item?.alt || "Hero Background"}
                                                    width={1920}
                                                    height={1080}
                                                    className="w-full h-full object-cover"
                                                    unoptimized
                                                    priority={item?.id === 1}
                                                />
                                            </picture>
                                        </div>
                                    ))
                                ) : data?.backgroundMedia ? (
                                    <div className="flex-[0_0_100%] min-w-0 select-none">
                                        <picture className="w-full h-full min-h-[376px] sm:min-h-[420px] xl:min-h-[590px] 2xl:min-h-[768px] 3xl:min-h-[900px] block origin-center">
                                            <source
                                                media="(max-width: 640px)"
                                                srcSet={data.backgroundMedia?.mediaUrl || data.backgroundMedia?.url}
                                            />
                                            <Image
                                                src={data.backgroundMedia?.url}
                                                alt={data.backgroundMedia?.alt || "Hero Background"}
                                                width={1920}
                                                height={1080}
                                                className="w-full h-full object-cover"
                                                unoptimized
                                                priority
                                            />
                                        </picture>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </Parallax>
                {data?.title && (
                    <RevealAnimation className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                        <div className="container text-center pointer-events-auto">
                            <Heading
                                as="div"
                                size="h6"
                                className="text-[#30C2C5] mb-1 xl:mb-1.5 2xl:mb-1.5"
                            >
                                {parse(data?.title)}
                            </Heading>
                        </div>
                    </RevealAnimation>
                )}
            </section>
        </ParallaxProvider>
    );
}
