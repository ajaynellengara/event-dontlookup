"use client";

import { Heading, Text } from "@/components/utils/typography";

import parse from "html-react-parser";


import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Image from "next/image";



export default function LandingImpact({ data }) {
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
    <section className="w-full h-auto bg-[#121212] block bg-[#121212] pb-10 md:pb-16 lg:pb-20 xl:pb-25 2xl:pb-32 3xl:pb-40">

      <div className="container">

        <Heading
          as="h2"
          size="h1"
          className="font-normal sm:text-center text-white mb-2 md:mb-2 lg:mb-2.5 xl:mb-2.5 2xl:mb-3 3xl:mb-4"
        >
          {parse(data?.title)}
        </Heading>
        <Text
          as="div"
          size="p1"
          className="sm:text-center text-white mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-6 3xl:mb-8"
        >
          {parse(data?.description)}
        </Text>

        <div
          className="typography sm:text-center [--text-color:#fff] [&_h4]:[--text-color:#06B5B9] mb-6 md:mb-14 lg:mb-16 xl:mb-20 2xl:mb-24 3xl:mb-32"
          dir="ltr"
        >
          {parse(data?.longDescription)}
        </div>

        <div
          ref={emblaRef}
          className="w-full max-w-full overflow-hidden"
          data-cursor="carousel"
        >
          <div className="flex touch-pan-y touch-pinch-zoom -mx-1.5 md:-mx-2 lg:-mx-3 2xl:-mx-4 3xl:-mx-5 [&>*]:p-1.5 md:[&>*]:p-2 lg:[&>*]:p-3 2xl:[&>*]:p-4 3xl:[&>*]:p-5">
            {data?.items?.map((item, index) => (
              <div
                key={"parners" + item?.id}
                className={cn(
                  "flex-[0_0_220px] sm:flex-[0_0_376px] lg:flex-[0_0_480px] 2xl:flex-[0_0_540px] 3xl:flex-[0_0_640px] min-w-0 select-none",
                )}
              >
                <div className="w-full h-auto aspect-48/46 overflow-hidden">
                  <Image
                    src={item?.media?.url}
                    alt={item?.media?.alt}
                    width={720}
                    height={690}
                    className="w-full h-full object-contain hover:scale-120 transition duration-300"
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