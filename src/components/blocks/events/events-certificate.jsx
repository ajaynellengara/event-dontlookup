
"use client";
import { Heading, Text } from "@/components/utils/typography";

import parse from "html-react-parser";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

export default function EventsCertificate({ data }) {
  return (
    <section id="certificate" className="w-full h-auto bg-white block py-10 xl:py-[100px_50px] 2xl:py-[120px_60px] 3xl:py-[140px_70px] relative z-0">
      <Image
        src="/images/events-certi-bg.jpg"
        alt="events-certi-bg"
        fill
        size="100vw"
        className="-z-1 object-cover"
      />
      <div className="container">
        <div className="w-full max-w-[576px] xl:max-w-[820px] 2xl:max-w-[998px] 3xl:w-[1240px] mx-auto">
          <Heading
            as="h2"
            size="h1"
            className="sm:text-center text-[#06B5B9] mb-0.5 lg:mb-1 2xl:mb-2 3xl:mb-3"
          >
            {parse(data?.title)}
          </Heading>
          <Text
            as="div"
            size="p1"
            className="sm:text-center text-white mb-4 sm:mb-6 xl:mb-8 2xl:mb-9 3xl:mb-12"
          >
            {parse(data?.description)}
          </Text>
        </div>

        <div
          className="w-full max-w-[360px] sm:max-w-[468px] xl:max-w-[576px] 2xl:max-w-[768px] 3xl:max-w-[1080px] h-auto block mx-auto"
        >
          <Image
            src={data?.media?.url}
            alt={data?.media?.alt}
            width={1328}
            height={936}
            className="object-contain"
            quality={100}
          />
        </div>

      </div>
    </section >
  );
}