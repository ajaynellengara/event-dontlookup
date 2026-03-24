
"use client";
import { useState, useEffect, useCallback } from "react";
import { Heading, Text } from "@/components/utils/typography";

import parse from "html-react-parser";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";



export default function EventsIndustryExposure({ data }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      direction: "ltr",
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true, pauseOnHover: true })],
  );

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);


  return (
    <section id="industry-exposure" className="w-full h-auto bg-[#121212] block py-10 xl:py-[120px] 2xl:py-[140px] 3xl:py-[120px]">
      <div className="container">
        <Heading
          as="h2"
          size="h1"
          className="text-center text-[#06B5B9] mb-3 xl:mb-15 2xl:mb-17 3xl:mb-25"
        >
          {parse(data?.title)}
        </Heading>

        <div
          ref={emblaRef}
          className="w-full max-w-full overflow-hidden"
          data-cursor="carousel"
        >
          <div className="flex touch-pan-y touch-pinch-zoom -mx-1.5 lg:-mx-2 [&>*]:p-1.5 lg:[&>*]:p-2">

            {data?.items?.map((item, index) => (
              <div
                key={"industry-exposure" + item?.id}
                className={cn(
                  "flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 select-none",
                )}
              >
                <div className="w-full h-full overflow-hidden bg-[#3a3a3a] p-6 xl:p-8 2xl:p-10 3xl:p-12 rounded-[10px] xl:rounded-[20px] hover:bg-[#4e4e4e] transition-all duration-500 ease-in-out">
                  <Text
                    as="h3"
                    size="p2"
                    className="font-semibold text-[#06B5B9] mb-3 xl:mb-4"
                  >
                    {parse(item?.title)}
                  </Text>
                  <div
                    className="typography [--text-color:#fff] [&_p]:mt-0 [&_ul]:p-0 [&_ul>li]:list-none"
                    dir="ltr"
                  >
                    {parse(item?.description)}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {scrollSnaps.length > 1 && (
          <div className="flex justify-center items-center gap-2 mt-5 xl:mt-8 2xl:mt-10">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "w-2.5 h-2.5 xl:w-3 xl:h-3 rounded-full transition-all duration-300",
                  index === selectedIndex ? "bg-[#06B5B9] w-6 xl:w-8" : "bg-[#3a3a3a] hover:bg-[#4e4e4e]"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section >
  );
}