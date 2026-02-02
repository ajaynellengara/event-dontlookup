"use client";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/utils/typography";
import { cn } from "@/lib/utils";

import parse from "html-react-parser";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { Suspense, useState } from "react";
import Image from "next/image";

import { motion } from "motion/react";
import { Skeleton } from "@/components/ui/skeleton";
import ScrollReveal from "@/components/animations/scroll-reveal";
import DisplacementImage from "@/components/animations/DisplacementImage";

// Define visual styles for the cards to cycle through
const VISUAL_STYLES = [
    {
        hoverBg: "https://images.pexels.com/photos/1274799/pexels-photo-1274799.jpeg",
        displacement: "https://images.pexels.com/photos/1274799/pexels-photo-1274799.jpeg",
    },
    {
        hoverBg: "https://images.pexels.com/photos/32767394/pexels-photo-32767394.jpeg",
        displacement: "https://images.pexels.com/photos/32767394/pexels-photo-32767394.jpeg",
    },
    {
        hoverBg: "https://images.pexels.com/photos/33850399/pexels-photo-33850399.jpeg", // Industrial texture example
        displacement: "https://images.pexels.com/photos/33850399/pexels-photo-33850399.jpeg",
    },
    {
        hoverBg: "https://images.pexels.com/photos/16489882/pexels-photo-16489882.jpeg", // Abstract texture
        displacement: "https://images.pexels.com/photos/16489882/pexels-photo-16489882.jpeg",
    },
];

export default function HomeServicesCarousel({ data, locale }) {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, direction: locale === "ar" ? "rtl" : "ltr" },
        [Autoplay({ delay: 6000, stopOnInteraction: true, pauseOnHover: true })],
    );

    return (
        <section className="w-full h-auto block py-[40px] sm:py-[40px] xl:py-[70px_80px] 2xl:py-[80px_110px] overflow-hidden">
            <div className="container">
                <div className="flex flex-wrap mb-6 xl:mb-10 2xl:mb-14">
                    <div className="w-full sm:w-7/12">
                        <ScrollReveal delay={0.1}>
                            <Heading
                                as="div"
                                size="h6"
                                className="tracking-widest font-normal text-[#1e1e1e] flex items-center gap-x-4 mb-1 xl:mb-1.5 2xl:mb-1.5"
                            >
                                <span className="size-2 rounded-full bg-[#c09c86] inline-block" />
                                {parse(locale == "ar" ? data?.sub_title_ar : data?.sub_title)}
                            </Heading>
                        </ScrollReveal>
                        <Heading
                            as="h2"
                            size="h3"
                            className="font-normal text-[#1e1e1e] mb-2"
                        >
                            {parse(locale == "ar" ? data?.title_ar : data?.title)}
                        </Heading>
                    </div>
                    <div className="w-full sm:w-5/12">
                        <Text
                            as="div"
                            size="p1"
                            className="line-clamp-2 text-[#4b4b4b] mb-3 xl:mb-5 2xl:mb-6"
                        >
                            {parse(
                                locale === "ar" ? data?.description_ar : data?.description,
                            )}
                        </Text>
                        <Button
                            size="lg"
                            variant={"outline"}
                            className="min-w-[100px] xl:min-w-[105px] 2xl:min-w-[130px] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            asChild
                        >
                            <Link href={data?.button?.link}>
                                {locale == "ar" ? data?.button?.label_ar : data?.button?.label}
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div
                className={cn(
                    "container",
                    locale === "ar"
                        ? "max-sm:pl-0 max-sm:[mask-image:linear-gradient(to_left,black_0%,black_90%,transparent_100%)] max-sm:[-webkit-mask-image:linear-gradient(to_left,black_0%,black_95%,transparent_100%)]"
                        : "max-sm:pr-0 max-sm:[mask-image:linear-gradient(to_right,black_0%,black_90%,transparent_100%)] max-sm:[-webkit-mask-image:linear-gradient(to_right,black_0%,black_95%,transparent_100%)]",
                )}
            >
                <div
                    className="w-full max-w-full overflow-hidden"
                    ref={emblaRef}
                    data-cursor="carousel"
                >
                    <div className="flex touch-pan-y touch-pinch-zoom">
                        {data?.items?.map((item, index) => (
                            <div
                                key={"product" + index}
                                className="flex-[0_0_100%] sm:flex-[0_0_50%] xl:flex-[0_0_33.333%] min-w-0 select-none pl-4"
                            >
                                <ServiceCard data={item} index={index} locale={locale} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ data, index, locale }) {
    const [hovered, setHovered] = useState(null);
    const style = VISUAL_STYLES[index % VISUAL_STYLES.length];

    return (
        <Suspense
            fallback={
                <Skeleton className="w-full h-[320px] sm:h-[368px] lg:h-[440px] 2xl:h-[548px] 3xl:h-[668px] bg-gray-400" />
            }
        >
            <motion.div
                className="w-full h-[320px] sm:h-[368px] lg:h-[440px] 2xl:h-[540px] 3xl:h-[668px] relative overflow-hidden"
                onHoverStart={() => setHovered(index)}
                onHoverEnd={() => setHovered(null)}
            >
                {/* Background Layer: WebGL + Static Fallback */}
                <div className="absolute inset-0 z-0 bg-gray-100">
                    {/* Static Fallback for SEO/Loading */}
                    <Image
                        src={data?.media?.path}
                        alt={locale == "ar" ? data?.media?.alt_ar : data?.media?.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority={index < 3}
                    />
                    <DisplacementImage
                        image1={data?.media?.path}
                        image2={style.hoverBg}
                        displacementImage={style.displacement}
                        hovered={hovered === index}
                        className="absolute inset-0 w-full h-full"
                    />
                </div>

                {/* Front Content: Title & Gradient OVerlay */}
                <motion.div
                    className="absolute inset-0 z-1 pointer-events-none"
                    animate={{ opacity: hovered === index ? 0 : 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div
                        className={cn(
                            "w-full h-[40%] bg-linear-to-b from-transparent to-black/50 absolute z-1 inset-0 top-auto",
                        )}
                    />
                    <Heading
                        as="div"
                        size="h4"
                        className="font-semibold text-white absolute z-1 inset-0 top-auto p-3 xl:p-5 2xl:p-8"
                    >
                        {parse(locale == "ar" ? data?.title_ar : data?.title)}
                    </Heading>
                </motion.div>

                {/* Back Content: Details */}
                <motion.div
                    className="absolute z-1 inset-0 flex items-center p-5 xl:p-7.5 2xl:p-10"
                    animate={{ opacity: hovered === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ pointerEvents: hovered === index ? "auto" : "none" }}
                >
                    <div>
                        <Image
                            src={data?.icon_path}
                            alt={locale == "ar" ? data?.title_ar : data?.title}
                            width={50}
                            height={52}
                            className="w-8 2xl:w-12 hover:scale-110 transition duration-300 mb-4 xl:mb-8 2xl:mb-10"
                        />
                        <Heading
                            as="div"
                            size="h4"
                            className="font-semibold text-black mb-1 xl:mb-2.5 2xl:mb-3"
                        >
                            {parse(locale == "ar" ? data?.title_ar : data?.title)}
                        </Heading>
                        <Text
                            as="div"
                            size="p1"
                            className="line-clamp-7 text-black mb-4 xl:mb-8 2xl:mb-11"
                        >
                            {parse(
                                locale === "ar" ? data?.description_ar : data?.description,
                            )}
                        </Text>
                        <Button
                            size="lg"
                            variant={"outline"}
                            className="min-w-[100px] xl:min-w-[105px] 2xl:min-w-[130px] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            asChild
                        >
                            <Link href={data?.slug}>
                                {locale == "ar" ? "Know More arabic" : "Know More"}
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </motion.div>
        </Suspense>
    );
}
