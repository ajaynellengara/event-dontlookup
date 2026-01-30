"use client";

import { useMemo, useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/utils/typography";
import { cn } from "@/lib/utils";

import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";

import { motion, AnimatePresence } from "motion/react";
import { Skeleton } from "@/components/ui/skeleton";
import ScrollReveal from "@/components/animations/scroll-reveal";

export default function HomePortfolio({ data, locale }) {
  const items = data?.items || [];
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleItems = useMemo(() => {
    if (!items.length) return [];
    return [
      items[activeIndex % items.length],
      items[(activeIndex + 1) % items.length],
      items[(activeIndex + 2) % items.length],
    ];
  }, [activeIndex, items]);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <section className="w-full py-[40px] sm:py-[40px] xl:py-[70px] 2xl:py-[100px] bg-[#fffbf2] overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap mb-6 xl:mb-10 2xl:mb-14">
          <div className="w-full sm:w-7/12">
            <ScrollReveal delay={0.1}>
              <Heading
                as="div"
                size="h6"
                className="tracking-widest font-normal text-[#1e1e1e] flex items-center gap-x-4 mb-1"
              >
                <span className="size-2 rounded-full bg-[#c09c86]" />
                {parse(locale === "ar" ? data?.sub_title_ar : data?.sub_title)}
              </Heading>
            </ScrollReveal>
            <Heading
              as="h2"
              size="h3"
              className="font-normal text-[#1e1e1e] mb-2"
            >
              {parse(locale === "ar" ? data?.title_ar : data?.title)}
            </Heading>
          </div>

          <div className="w-full sm:w-5/12">
            <Text
              as="div"
              size="p1"
              className="line-clamp-2 text-[#1e1e1e] mb-5"
            >
              {parse(
                locale === "ar" ? data?.description_ar : data?.description,
              )}
            </Text>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[100px] xl:min-w-[105px] 2xl:min-w-[130px] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <Link href={data?.button?.link}>
                {locale === "ar" ? data?.button?.label_ar : data?.button?.label}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "container",
          locale === "ar"
            ? "pl-0 [mask-image:linear-gradient(to_left,black_0%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_left,black_0%,black_95%,transparent_100%)]"
            : "pr-0 [mask-image:linear-gradient(to_right,black_0%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_95%,transparent_100%)]",
        )}
      >
        <div className="relative">
          <div className="flex items-center -mx-[1.5%] [&>div]:px-[1.5%]">
            {visibleItems.map((item, slotIndex) => (
              <div
                key={`slot-${slotIndex}`}
                className={cn(
                  "flex-[0_0_220px] sm:flex-[0_0_25%]",
                  slotIndex === 0 && "flex-[0_0_55%] sm:flex-[0_0_60%]",
                  slotIndex === 1 && "flex-[0_0_26%] sm:flex-[0_0_23%]",
                  slotIndex === 2 && "flex-[0_0_20%] sm:flex-[0_0_18%]",
                )}
              >
                <PortfolioCard
                  slot={slotIndex}
                  data={item}
                  locale={locale}
                  activeIndex={activeIndex}
                />
              </div>
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-[60px] sm:w-[100px] xl:w-[130px] 2xl:w-[160px] absolute z-0 bottom-0 right-2 sm:right-4"
          >
            <div className="w-full h-full bg-[url('/images/home-portfolio-button-1.svg')] bg-center bg-no-repeat bg-size-[30px] sm:bg-size-[40px] xl:bg-size-[45px] 2xl:bg-size-[50px] relative hover:bg-size-[100px] transition-all duration-300">
              <Image
                src="/images/home-portfolio-button.svg"
                alt="Next"
                width={194}
                height={194}
                className="w-full h-full animate-[spin_5s_ease-in-out_infinite] relative -z-1"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ data, slot, locale }) {
  return (
    <Suspense
      fallback={
        <Skeleton className="w-full h-[320px] sm:h-[368px] bg-gray-300" />
      }
    >
      <div
        className={cn(
          "relative overflow-hidden w-full bg-[#cda278]/10",
          slot === 0 && "h-[320px] lg:h-[500px] 2xl:h-[615px] 3xl:h-[668px]",
          slot === 1 && "h-[220px] lg:h-[390px] 2xl:h-[480px] 3xl:h-[590px]",
          slot === 2 && "h-[120px] lg:h-[200px] 2xl:h-[250px] 3xl:h-[300px]",
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={data?.media?.path}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src={data?.media?.path}
              alt={locale === "ar" ? data?.media?.alt_ar : data?.media?.alt}
              width={432}
              height={668}
              className="w-full h-full object-cover hover:scale-110 transition duration-300"
            />

            {slot === 0 && (
              <>
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60" />

                <div className="absolute inset-x-0 bottom-0 p-4 xl:p-10 flex flex-wrap gap-2 flex-col sm:flex-row sm:items-center justify-between">
                  <div className="flex-1">
                    <Heading size="h4" className="text-white mb-1">
                      {parse(locale === "ar" ? data?.title_ar : data?.title)}
                    </Heading>
                    <Text size="p1" className="text-white">
                      <span className="font-light">Location: </span>
                      {parse(
                        locale === "ar" ? data?.location_ar : data?.location,
                      )}
                    </Text>
                  </div>
                  <div>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-white min-w-[100px] xl:min-w-[105px] 2xl:min-w-[155px] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      asChild
                    >
                      <Link href={data?.slug}>
                        {locale === "ar" ? "Know More arabic" : "Know More"}
                      </Link>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Suspense>
  );
}
