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

import { useMediaQuery } from "react-responsive";

export default function LandingPartners({ data }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: false,
      direction: locale === "ar" ? "rtl" : "ltr",
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true, pauseOnHover: true })],
  );

  return (
    <section className="w-full h-auto bg-white block py-[8px] sm:py-[10px] xl:py-[12] 2xl:py-[14] overflow-hidden">
      <div
        className={cn(
          "container",
          "max-sm:pr-0 max-sm:[mask-image:linear-gradient(to_right,black_0%,black_90%,transparent_100%)] max-sm:[-webkit-mask-image:linear-gradient(to_right,black_0%,black_95%,transparent_100%)]")}
      >
        <div
          ref={emblaRef}
          className="w-full max-w-full overflow-hidden"
          data-cursor="carousel"
        >
          <div className="flex touch-pan-y touch-pinch-zoom -mx-1.5 lg:-mx-0 [&>*]:p-1.5 lg:[&>*]:p-0">
            {data?.map((item, index) => (
              <div
                key={"parners" + item?.id}
                className={cn(
                  "flex-[0_0_220px] sm:flex-[0_0_33.20%] lg:flex-[0_0_16.666%] min-w-0 select-none",
                )}
              >
                <div className="w-full h-full bg-red-500">
                  <Image
                    src={item?.media?.url}
                    alt={item?.media?.alt}
                    width={151}
                    height={57}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

