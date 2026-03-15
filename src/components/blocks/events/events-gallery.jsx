"use client";

import { Heading, Text } from "@/components/utils/typography";

import parse from "html-react-parser";

import { cn } from "@/lib/utils";
import Image from "next/image";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect } from "react";
import RevealAnimation from "@/components/utils/reveal-animation";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function EventsGallery({ data, slug }) {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      // Your custom options
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  const gridClasses = [
    "col-span-2 row-span-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-3 row-start-2",
    "col-span-2 col-start-4 row-start-2",
    "col-span-2 row-start-3",
    "col-span-3 col-start-3 row-start-3"
  ];

  return (
    <section className="w-full h-auto bg-white block py-10 md:py-16 lg:py-20 xl:py-25 2xl:py-32 3xl:py-40">

      <div className="container">

        <RevealAnimation>
          <Heading
            as="h2"
            size="h1"
            className="font-semibold sm:text-center text-[#06B5B9] mb-2 md:mb-2 lg:mb-2.5 xl:mb-2.5 2xl:mb-3 3xl:mb-4"
          >
            {parse(data?.title)}
          </Heading>
          {data?.description && (

            <Text
              as="div"
              size="p1"
              className="sm:text-center text-black mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-6 3xl:mb-8"
            >
              {parse(data?.description)}
            </Text>
          )}

          <div
            className="typography sm:text-center [--text-color:#121212] [&_h4]:[--text-color:#06B5B9] mb-2 lg:mb-1.5 2xl:mb-2"
            dir="ltr"
          >
            {parse(data?.longDescription)}
          </div>
          <div className="flex mb-8 sm:mb-10 lg:mb-15 2xl:mb-[100px] 3xl:mb-[120px]">
            <Button
              size="lg"
              variant={"default"}
              className="max-w-[220px] xl:max-w-[268px] 2xl:max-w-[320px] 3xl:max-w-[400px] sm:mx-auto"

              asChild
            >
              <Link href={`/events/${slug}/gallery`}>
                View Full Gallery
              </Link>
            </Button>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-5 grid-rows-3 gap-2 xl:gap-3 2xl:gap-4">
          {data?.items?.map((item, index) => (
            <RevealAnimation
              key={"events-gallery" + item?.id}
              className={cn(
                "w-full h-full",
                // "max-h-[268px] xl:max-h-[310px] 2xl:max-h-[370px] 3xl:max-h-[468px]",
                gridClasses[index % gridClasses.length]
              )}
            >
              <a
                href={item?.media?.url}
                data-fancybox="gallery"
                className="w-full h-full overflow-hidden block cursor-pointer"
              >
                <Image
                  src={item?.media?.url}
                  alt={item?.media?.alt}
                  width={720}
                  height={690}
                  className="w-full h-full object-cover hover:scale-120 transition duration-300"
                />
              </a>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section >
  );
}
