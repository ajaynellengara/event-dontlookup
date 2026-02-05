"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heading, Text } from "@/components/utils/typography";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function SuccessStories({ data, locale }) {
  const [emblaRef] = useEmblaCarousel(
    { loop: false, direction: locale === "ar" ? "rtl" : "ltr" },
    [Autoplay({ delay: 6000, stopOnInteraction: true, pauseOnHover: true })],
  );
  return (
    <section className="w-full h-auto block bg-[#FFFBF2] py-[30px_40px] sm:py-[40px_60px] xl:py-[60px_100px] 2xl:py-[78px_133px]">
      <div className="container">
        <div className="max-w-170.25 2xl:max-w-255.5 mx-auto text-center mb-[25]">
          <Heading as="h2" size="h2" className="mb-[15px] text-[#1e1e1e]">
            Building Success Stories
          </Heading>
          <Text
            as="div"
            size="p1"
            className="font-light text-black mb-4 xl:mb-8 2xl:mb-10"
          >
            At Wasso Group, we recognize that every project is unique, with its
            own set of opportunities and challenges. Our project management
            service is built on the principle of transforming complex
          </Text>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full max-w-full overflow-hidden" ref={emblaRef}>
            <div className="flex justify-start touch-pan-y touch-pinch-zoom sm:mx-[-10px] md:mx-[-20px] xl:mx-[-30px] sm:[&>div]:px-[10px] md:[&>div]:px-[20px] xl:[&>div]:px-[30px] ">
              {[1, 2, 3, 4].map((item, index) => (
                <div
                  key={"product" + index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] min-w-0 select-none"
                >
                  <div className="w-full">
                    <div className="aspect-[830/518] w-full">
                      <Image
                        src={"/images/st1.jpg"}
                        alt={"success stories"}
                        width={830}
                        height={518}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="inset-x-0 bottom-0 pt-4 xl:pt-10 flex items-center justify-between">
                      <div>
                        <Heading
                          size="h4"
                          as="h4"
                          className="text-[#1E1E1E] mb-1"
                        >
                          Luxury Residential Tower, Dubai
                        </Heading>
                      </div>

                      <Button
                        size="none"
                        variant="outline"
                        className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-none font-normal text-[#1E1E1E] h-8 xl:h-10 2xl:h-12 rounded-[6px] 2xl:rounded-xl px-6 has-[>svg]:px-2"
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
