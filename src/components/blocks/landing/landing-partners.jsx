"use client";
import { cn } from "@/lib/utils";
import RevealAnimation from "@/components/utils/reveal-animation";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import { Text } from "@/components/utils/typography";

export default function LandingPartners({ data, variant }) {
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
    <section className={cn("w-full h-auto bg-white block py-[8px] sm:py-[10px] xl:py-6 2xl:py-8 overflow-hidden",
      variant === "eventDetail" && "bg-[#047F82]"
    )}>
      <div
        className={cn(
          "container",
          "max-sm:pr-0 max-sm:mask-[linear-gradient(to_right,black_0%,black_90%,transparent_100%)]")}
      >
        <RevealAnimation>
          {variant === "eventDetail" && (
            <Text
              as="p"
              size="p2"
              className="text-white mb-3 xl:mb-4 3xl:mb-6"
            >
              {data?.title}
            </Text>
          )}
          <div
            ref={emblaRef}
            className="w-full max-w-full overflow-hidden"
            data-cursor="carousel"
          >
            <div className="flex touch-pan-y touch-pinch-zoom -mx-1.5 lg:mx-0 *:p-1.5 lg:*:p-0">
              {data?.items?.map((item) => (
                <div
                  key={"partners" + item?.id}
                  className={cn(
                    "flex-[0_0_100px] 2xs:flex-[0_0_120px] sm:flex-[0_0_20%] lg:flex-[0_0_16.666%] min-w-0 select-none",
                  )}
                >
                  <div className={cn("mx-auto",
                    variant === "eventDetail" ? "w-full mx-w-8/10 aspect-333/45" : "w-[50px] 2xs:w-[60px] sm:w-[80px] xl:w-[100px] mx-auto aspect-2/1"
                  )}>
                    <Image
                      src={item?.media?.url}
                      alt={item?.media?.alt}
                      width={151}
                      height={57}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}

