"use client";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/utils/typography";
import { cn } from "@/lib/utils";

import parse from "html-react-parser";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { Suspense, useState } from "react";
import Image from "next/image";

import { motion } from "motion/react";

export default function HomeServices({ data, locale }) {
  const [hovered, setHovered] = useState(null);

  const [emblaRef] = useEmblaCarousel(
    { loop: false, direction: locale === "ar" ? "rtl" : "ltr" },
    [Autoplay({ delay: 6000, stopOnInteraction: true, pauseOnHover: true })],
  );

  return (
    <section className="w-full h-auto block py-[30px] sm:py-[40px] xl:py-[110px] 2xl:py-[120px] overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap mb-6 xl:mb-10 2xl:mb-14">
          <div className="w-7/12">
            <Heading
              as="div"
              size="h6"
              className="tracking-widest font-normal text-[#1e1e1e] flex items-center gap-x-4 mb-2 xl:mb-2.5 2xl:mb-4"
            >
              <span className="size-2 rounded-full bg-[#c09c86] inline-block" />
              {parse(locale == "ar" ? data?.sub_title_ar : data?.sub_title)}
            </Heading>
            <Heading
              as="h2"
              size="h3"
              className="font-normal text-[#1e1e1e] mb-2 xl:mb-4 2xl:mb-6"
            >
              {parse(locale == "ar" ? data?.title_ar : data?.title)}
            </Heading>
          </div>
          <div className="w-5/12">
            <Text
              as="div"
              size="p1"
              className="line-clamp-2 text-black mb-2 xl:mb-4 2xl:mb-6"
            >
              {parse(
                locale === "ar" ? data?.description_ar : data?.description,
              )}
            </Text>
            <Button
              variant={"black"}
              className="min-w-[100px] sm:min-w-[120px] xl:min-w-[135px] 2xl:min-w-40 bg-red-500"
              asChild
            >
              <Link href={data?.button?.link}>
                {locale == "ar" ? data?.button?.label_ar : data?.button?.label}
              </Link>
            </Button>
          </div>
        </div>
        <div className="w-full max-w-full overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y touch-pinch-zoom">
            {data?.items?.map((item, index) => (
              <div
                key={"product" + index}
                className="flex-[0_0_176px] sm:flex-[0_0_25%] min-w-0 select-none"
              >
                <Suspense fallback={"loading...."}>
                  <motion.div
                    className="w-full h-[368px] lg:h-[440px] 2xl:h-[548px] 3xl:h-[668px] relative"
                    onHoverStart={() => setHovered(index)}
                    onHoverEnd={() => setHovered(null)}
                    style={{ perspective: 1200 }}
                  >
                    {/* CARD WRAPPER */}
                    <motion.div
                      className="w-full h-full relative"
                      animate={{ rotateY: hovered === index ? 180 : 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div
                        className="absolute inset-0 backface-hidden overflow-hidden"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <div
                          className={cn(
                            "w-full h-[40%] bg-linear-to-b from-transparent to-black/50  absolute z-0 inset-0 top-auto",
                          )}
                        />
                        <Image
                          src={item?.media?.path}
                          alt={
                            locale == "ar"
                              ? item?.media?.alt_ar
                              : item?.media?.alt
                          }
                          width={432}
                          height={668}
                          className="w-full h-full object-cover hover:scale-110 transition duration-300"
                        />
                        <Heading
                          as="div"
                          size="h4"
                          className="font-semibold text-white absolute z-1 inset-0 top-auto p-2 xl:p-5 2xl:p-8"
                        >
                          {parse(locale == "ar" ? data?.title_ar : data?.title)}
                        </Heading>
                      </div>

                      <div
                        className="absolute inset-0 bg-[#fafafa] bg-[url(/images/home-services-box-bg.png)] bg-cover flex items-center p-[20px] xl:p-[35px] 2xl:p-[40px]"
                        style={{
                          transform: "rotateY(180deg)",
                          backfaceVisibility: "hidden",
                        }}
                      >
                        <div>
                          <Image
                            src={item?.icon_path}
                            alt={locale == "ar" ? item?.title_ar : item?.title}
                            width={50}
                            height={52}
                            className="w-[36px] 2xl:w-[50px] hover:scale-110 transition duration-300 mb-4 xl:mb-8 2xl:mb-10"
                          />
                          <Heading
                            as="div"
                            size="h4"
                            className="font-semibold text-black mb-1 xl:mb-2.5 2xl:mb-3"
                          >
                            {parse(
                              locale == "ar" ? item?.title_ar : item?.title,
                            )}
                          </Heading>

                          <Text
                            as="div"
                            size="p1"
                            className="line-clamp-7 text-black mb-4 xl:mb-8 2xl:mb-11"
                          >
                            {parse(
                              locale === "ar"
                                ? item?.description_ar
                                : item?.description,
                            )}
                          </Text>

                          <Button
                            variant={"black"}
                            className="min-w-[100px] sm:min-w-[120px] xl:min-w-[135px] 2xl:min-w-40 bg-red-500"
                            asChild
                          >
                            <Link href={item?.slug}>
                              {locale == "ar"
                                ? "Know More arabic"
                                : "Know More"}
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </Suspense>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
