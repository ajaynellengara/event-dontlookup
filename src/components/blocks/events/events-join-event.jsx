
"use client";
import { useState, useEffect, useCallback } from "react";
import { Heading, Text } from "@/components/utils/typography";
import { cn } from "@/lib/utils";

import parse from "html-react-parser";
import Image from "next/image";


import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    id: 1,
    media: {
      type: "image",
      url: "/images/icon-facebook-white.svg",
      alt: "Facebook"
    },
    slug: "#"
  },
  {
    id: 2,
    media: {
      type: "image",
      url: "/images/icon-Instagram-white.svg",
      alt: "Instagram"
    },
    slug: "#"
  },
  {
    id: 4,
    media: {
      type: "image",
      url: "/images/icon-linkedIn-white.svg",
      alt: "LinkedIn"
    },
    slug: "#"
  },
  {
    id: 5,
    media: {
      type: "image",
      url: "/images/icon-youTube-white.svg",
      alt: "YouTube"
    },
    slug: "#"
  },
]

export default function EventsJoinEvent({ data }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      direction: "ltr",
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 10000, stopOnInteraction: true, pauseOnHover: true })],
  );

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full h-auto bg-white block pt-10 xl:pt-[120px] 2xl:pt-[140px] 3xl:pt-[120px] pb-[15px] xl:pb-[60px] 2xl:pb-[70px] 3xl:pb-[60px]">
      <div className="container">
        <div className="w-full max-w-[468px] xl:max-w-[600px] 2xl:max-w-[720px] 3xl:w-[900px] mx-auto">

          <Heading
            as="h2"
            size="h1"
            className="sm:text-center text-[#06B5B9] mb-2 md:mb-2 lg:mb-2.5 xl:mb-2.5 2xl:mb-3 3xl:mb-4"
          >
            {parse(data?.title)}
          </Heading>
          <Text
            as="div"
            size="p1"
            className="sm:text-center text-black mb-3 sm:mb-4 xl:mb-12.5 2xl:mb-15 3xl:mb-20"
          >
            {parse(data?.description)}
          </Text>
        </div>

        <div className="w-full flex items-center gap-x-1 xl:gap-x-2 mb-4  xl:mb-6">
          <div className="w-[100px] xl:w-[160px] 2xl:w-[190px] 3xl:w-[260px] h-[1px] bg-black " />
          {data?.items?.map((item, index) => (
            <div
              key={item?.id}
              onClick={() => scrollTo(index)}
              className={cn("cursor-pointer transition-colors duration-300 text-[12px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[24px] leading-none font-semibold  w-10 2xl:w-12 3xl:w-15 aspect-square rounded-full flex items-center justify-center ",
                index === selectedIndex ? "text-white bg-[#30C2C5]" : "text-black bg-[#e7e7e7]")}
            >
              {item?.id}
            </div>))}
        </div>

        <div
          ref={emblaRef}
          className="w-full max-w-full overflow-hidden"
          data-cursor="carousel"
        >
          <div className="flex touch-pan-y touch-pinch-zoom -mx-1.5 lg:-mx-2 [&>*]:p-1.5 lg:[&>*]:p-2">

            {data?.items?.map((item) => (
              <div
                key={"join-event" + item?.id}
                className={cn(
                  "flex-[0_0_100%] min-w-0 select-none",
                )}
              >
                <div className="w-full h-full overflow-hidden bg-[#f2f2f2] p-8 xl:p-13 2xl:p-16 3xl:p-20 rounded-[16px] xl:rounded-[24px] hover:bg-[#e3e3e3] transition-all duration-500 ease-in-out flex flex-wrap xl:gap-x-[160px] 2xl:gap-x-[180px] 3xl:gap-x-[200px]">
                  <div className="w-full xl:w-[220px] 2xl:w-[260px] 3xl:w-[320px]">
                    <div className="w-full overflow-hidden transition-all duration-500 hover:scale-110">
                      <Image
                        src={item?.mediaUrl}
                        alt={item?.title || "join event"}
                        width={458}
                        height={1080}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div
                      className="typography [--text-color:#000] [&_p]:mt-0 [&_ul]:p-0 [&_ul>li]:list-none"
                      dir="ltr"
                    >
                      {parse(item?.description)}
                    </div>
                    <div>
                      <div className="w-auto h-auto inline-block p-3 xl:p-4 2xl:p-7 3xl:p-8 rounded-[8px] 2xl:rounded-[10px] 3xl:rounded-[12px] bg-white">
                        <Text
                          as="div"
                          size="p1"
                          className="text-black mb-3 xl:mb-4 2xl:mb-5 3xl:mb-6"
                        >
                          Follow MODEL FORWARD on:
                        </Text>
                        <div className="flex flex-wrap justify-start gap-x-4 xl:gap-x-3 2xl:gap-x-4 3xl:gap-x-5">
                          {socialLinks?.map((item, index) => (
                            <div key={"socialLinkData" + index}>
                              <Button variant="link" size="none" asChild>
                                <a href={item?.slug} target="_blank">
                                  <Image
                                    src={item?.media?.url}
                                    alt={item?.media?.alt}
                                    width={32}
                                    height={32}
                                    className="w-4 lg:w-5 2xl:w-6 3xl:w-8 aspect-square block hover:scale-110 transition"
                                    unoptimized
                                  />
                                </a>
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>



      </div>
    </section >
  );
}