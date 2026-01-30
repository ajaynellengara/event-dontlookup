"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import {
  DotButton,
  useDotButton,
} from "@/components/utils/embla-carousel-dot-button";

import parse from "html-react-parser";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/utils/typography";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function HomeHero({ data, locale }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: locale === "ar" ? "rtl" : "ltr" },
    [
      Autoplay({ delay: 6000, stopOnInteraction: true, pauseOnHover: true }),
      Fade(),
    ],
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ParallaxProvider>
      <section className="w-full h-auto block bg-black relative z-0 overflow-hidden">
        <AnimatePresence>
          {!isRevealed && (
            <motion.div
              className="absolute inset-0 z-50 bg-white origin-bottom"
              initial={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={isRevealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="w-full max-w-full overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex touch-pan-y touch-pinch-zoom">
            {data?.sliders?.map((item, index) => (
              <div
                key={"home-hero-item-" + index}
                className="flex-[0_0_100%] min-w-0 select-none relative z-0"
              >
                <div
                  className={cn(
                    "w-full h-full bg-linear-to-b from-black/70 via-transparent to-black/60 absolute -z-1 inset-0 ",
                  )}
                />

                <Parallax speed={-30} className="absolute -z-2 inset-0">
                  {item?.media_type === "video" ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover absolute -z-2 inset-0"
                    >
                      <source src={item?.media_desktop_path} type="video/mp4" />
                    </video>
                  ) : (
                    <picture className="absolute -z-2 inset-0">
                      <source
                        media="(max-width: 640px)"
                        srcSet={item?.media_mobile_path}
                      />
                      <Image
                        src={item?.media_desktop_path}
                        alt={
                          locale === "ar" ? item?.media_alt_ar : item?.media_alt
                        }
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
                        className="-z-2 object-cover"
                        placeholder="blur"
                        blurDataURL="/images/placeholder.jpg"
                        priority={index === 0}
                      />
                    </picture>
                  )}
                </Parallax>
                <div className="w-full h-[468px] sm:h-[576px] xl:h-screen min-h-[468px] sm:min-h-[468px] xl:min-h-[576px] 2xl:min-h-[768px] 3xl:min-h-[900px] flex items-end py-[calc(20px+var(--header-y))_20px] sm:py-[calc(30px+var(--header-y))_30px] xl:py-[calc(40px+var(--header-y))_40px] 2xl:py-[calc(60px+var(--header-y))_60px]">
                  <div className="container">
                    <div className="flex flex-wrap items-end">
                      <div className="w-full">
                        <motion.div
                          initial={{ opacity: 0, y: 60 }}
                          animate={
                            isRevealed
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 60 }
                          }
                          transition={{
                            duration: 0.8,
                            delay: 0.4,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                        >
                          <Heading
                            as="h1"
                            size="h1"
                            className="leading-snug text-white mb-4 xl:mb-7.5 2xl:mb-8 [&>span]:text-[128%] [&>span]:font-medium [&>span]:block"
                          >
                            {parse(
                              locale === "ar" ? item?.title_ar : item?.title,
                            )}
                          </Heading>
                        </motion.div>
                      </div>
                      <div className="w-full sm:w-1/2">
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={
                            isRevealed
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 30 }
                          }
                          transition={{
                            duration: 0.6,
                            delay: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          className="w-fit rounded-full bg-[#d9d9d9]/20 backdrop-blur-sm p-2 flex items-center gap-0.5"
                        >
                          {scrollSnaps.map((_, index) => (
                            <DotButton
                              key={index}
                              onClick={() => onDotButtonClick(index)}
                              className={cn(
                                "size-2.5 border rounded-full transition-all ",
                                index === selectedIndex
                                  ? "bg-none border-white"
                                  : "border-[#d9d9d9] bg-[#d9d9d9] scale-60",
                              )}
                            />
                          ))}
                        </motion.div>
                      </div>
                      <div className="w-full sm:w-1/2">
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={
                            isRevealed
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 30 }
                          }
                          transition={{
                            duration: 0.6,
                            delay: 0.7,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                        >
                          <Heading
                            as="h6"
                            size="h6"
                            className="text-end tracking-widest font-normal text-white/50 mb-1 xl:mb-2"
                          >
                            {locale === "ar"
                              ? item?.project_tag_ar
                              : item?.project_tag}
                          </Heading>
                          <Heading
                            as="h5"
                            size="h5"
                            className="text-end font-medium tracking-widest text-white/50"
                          >
                            {locale === "ar"
                              ? item?.project_name_ar
                              : item?.project_name}
                          </Heading>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </ParallaxProvider>
  );
}
