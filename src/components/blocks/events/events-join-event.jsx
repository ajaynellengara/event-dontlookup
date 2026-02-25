
"use client";
import { Heading, Text } from "@/components/utils/typography";
import { cn } from "@/lib/utils";

import parse from "html-react-parser";
import Image from "next/image";


import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";



export default function EventsJoinEvent({ data }) {


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
                  <div className="w-full xl:w-[300px] 2xl:w-[350px] 3xl:w-[430px]">
                    <div className="w-full overflow-hidden">
                      <Image
                        src={item?.mediaUrl}
                        alt={item?.title}
                        width={458}
                        height={1080}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex-col justify-between">
                    <div
                      className="typography [--text-color:#000] [&_p]:mt-0 [&_ul]:p-0 [&_ul>li]:list-none"
                      dir="ltr"
                    >
                      {parse(item?.description)}
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