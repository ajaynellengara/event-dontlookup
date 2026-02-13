
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/utils/typography";

import parse from "html-react-parser";
import Link from "next/link";


import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";



export default function LandingImpact({ data }) {
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
    <section className="w-full h-auto bg-[#121212] block">

      <div className="container">

        <Heading
          as="div"
          size="h6"
          className="text-[#06B5B9] mb-1 xl:mb-1.5 2xl:mb-1.5"
        >
          {parse(data?.title)}
        </Heading>
        <Text
          as="div"
          size="p1"
          className="text-white mb-3 xl:mb-5 2xl:mb-6"
        >
          {parse(data?.description)}
        </Text>
        <Text
          as="div"
          size="p1"
          className="text-white mb-3 xl:mb-5 2xl:mb-6"
        >
          {parse(data?.longDescription)}
        </Text>

        <div
          ref={emblaRef}
          className="w-full max-w-full overflow-hidden"
          data-cursor="carousel"
        >
          <div className="flex touch-pan-y touch-pinch-zoom -mx-1.5 lg:-mx-7 [&>*]:p-1.5 lg:[&>*]:p-7">
            {data?.items?.map((item, index) => (
              <div
                key={"parners" + item?.id}
                className={cn(
                  "flex-[0_0_220px] sm:flex-[0_0_376px] lg:flex-[0_0_480px] min-w-0 select-none",
                )}
              >
                <div className="w-full h-auto aspect-48/46 overflow-hidden">
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