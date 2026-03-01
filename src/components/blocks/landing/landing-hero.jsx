"use client";
import {
    ParallaxProvider,
} from "react-scroll-parallax";

import Image from "next/image";
import { Heading } from "@/components/utils/typography";
import parse from "html-react-parser";
import { cn } from "@/lib/utils";
import RevealAnimation from "@/components/utils/reveal-animation";

export default function LandingHero({ data, variant = "default" }) {
    return (
        <ParallaxProvider>
            <section className={cn("w-full overflow-hidden relative",
                variant === "eventDetail" ? "h-auto max-h-[768px] sm:max-h-[992px] xl:max-h-[1150px] 2xl:max-h-[1380px] 3xl:max-h-[1720px]" : "h-[576px] sm:h-[576px] xl:h-screen")}>
                <picture className="w-full h-full block">
                    <source
                        media="(max-width: 640px)"
                        srcSet={data?.backgroundMedia?.mediaUrl}
                    />
                    <Image
                        src={data?.backgroundMedia?.url}
                        alt={data?.backgroundMedia?.alt || "Hero Background"}
                        // fill
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                        width={1920}
                        height={1080}
                        className="w-full h-full min-h-[376px] sm:min-h-[420px] xl:min-h-[576px] 2xl:min-h-[768px] 3xl:min-h-[900px]  object-cover object-bottom"
                        priority
                    />
                </picture>
                {data?.title && (
                    <RevealAnimation className="absolute inset-0 z-10 flex items-center justify-center">
                        <div className="container text-center">
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
