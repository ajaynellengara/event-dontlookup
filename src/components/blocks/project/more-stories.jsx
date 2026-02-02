"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heading, Text } from "@/components/utils/typography";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
export default function MoreStories({ data, locale }) {
  const [emblaRef] = useEmblaCarousel(
    { loop: false, direction: locale === "ar" ? "rtl" : "ltr" },
    [Autoplay({ delay: 6000, stopOnInteraction: true, pauseOnHover: true })],
  );
  return (
    <section className="w-full h-auto block py-[40px] sm:py-[80px_60px] xl:py-[135px_100px] 2xl:py-[173px_127px]">
      <div className="container">
        
        <div className="flex flex-wrap">
          <div className="w-full max-w-full overflow-hidden" ref={emblaRef}>
            <div className="flex justify-start touch-pan-y touch-pinch-zoom mx-[-10px] md:mx-[-17px] xl:mx-[-23px] [&>div]:px-[10px] md:[&>div]:px-[17px] xl:[&>div]:px-[23px]">
              {[1, 2, 3, 4].map((item, index) => (
                <div
                  key={"product" + index}
                  className="flex-[0_0_70%] sm:flex-[0_0_calc(100%/2)] md:flex-[0_0_calc(100%/3)]  min-w-0 select-none"
                >
                  <div className="w-full">
                    <div className="aspect-[542/799] w-full">
                      <Image
                        src={"/images/st3.png"}
                        alt={"more stories"}
                        width={830}
                        height={518}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="inset-x-0 bottom-0 pt-4 xl:pt-10">
                      <div>
                        <Heading size="h4" className="text-[#1E1E1E] mb-1">
                          Luxury Residential Tower, Dubai
                        </Heading>
                      </div>

                      <Button
                        size="none"
                        variant="outline"
                        className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-none font-normal text-[#1E1E1E] bg-[#FFFBF1] h-8 xl:h-10 2xl:h-12 rounded-[6px] 2xl:rounded-xl px-6 has-[>svg]:px-2 mt-2.5 sm:mt-5 xl:mt-7.5"
                        asChild
                      >
                        <Link href={"#"}>View Project</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
