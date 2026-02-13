"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import {
    ParallaxProvider,
} from "react-scroll-parallax";

import Image from "next/image";
import dynamic from "next/dynamic";

const MediaQuery = dynamic(() => import("react-responsive"), {
    ssr: false,
});

export default function LandingHero({ data }) {

    const [emblaRef] = useEmblaCarousel(
        {
            loop: false,
            direction: "ltr",
            align: "start",
            slidesToScroll: 1,
            containScroll: "trimSnaps",
        },
        [Autoplay({ delay: 5000, stopOnInteraction: true, pauseOnHover: true })],
    );

    return (
        <ParallaxProvider>
            <section className="w-full h-[576px] sm:h-[576px] xl:h-screen min-h-[576px] sm:min-h-[576px] xl:min-h-[576px] 2xl:min-h-[768px] 3xl:min-h-[900px]">
                <div
                    ref={emblaRef}
                    className="w-full max-w-full overflow-hidden"
                >
                    <div className="flex touch-pan-y touch-pinch-zoom -mx-1.5 lg:-mx-0 [&>*]:p-1.5 lg:[&>*]:p-0">
                        {data?.items?.map((item, index) => (
                            <div
                                key={"product" + index}
                                className={cn(
                                    "flex-[0_0_100%] min-w-0 select-none h-screen",
                                )}
                            >
                                <Image
                                    src={item?.backgroundImage?.path}
                                    alt={item?.backgroundImage?.alt}
                                    width={1920}
                                    height={1080}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </ParallaxProvider>
    );
}
