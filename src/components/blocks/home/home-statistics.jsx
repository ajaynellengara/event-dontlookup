"use client";

import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { useState } from "react";

import { Heading, Text } from "@/components/utils/typography";

import parse from "html-react-parser";

import CountUp from "react-countup";

export default function HomeStatistics({ data, locale }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="w-full block">
      <div className="container">
        <div className="w-full h-[1px] bg-[#d9d9d9]" />
        <div className="flex flex-wrap">
          {data?.items.map((item, index) => (
            <div
              key={"statistics-item-" + index}
              className="w-1/2 sm:w-1/5 cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="w-full py-[30px] sm:py-[40px] xl:py-[60px] 2xl:py-[70px] relative z-0">
                <div className="w-full max-w-10/12 xl:max-w-9/12">
                  <Heading
                    as="div"
                    size="h1"
                    className="font-normal text-[#1e1e1e] mb-1 xl:mb-2 2xl:mb-3"
                  >
                    <CountUp
                      end={parseInt(item?.number)}
                      duration={2.75}
                      separator=""
                      suffix={item?.suffix}
                      enableScrollSpy
                    />
                  </Heading>
                  <Heading
                    as="div"
                    size="h7"
                    className="font-medium text-black mb-1.5 xl:mb-2.5 2xl:mb-3"
                  >
                    {locale === "ar" ? item?.label_ar : item?.label}
                  </Heading>
                  <Text
                    as="div"
                    size="p2"
                    className="line-clamp-2 font-normal text-black mb-1 xl:mb-2 2xl:mb-2.5"
                  >
                    {parse(
                      locale === "ar"
                        ? item?.description_ar
                        : item?.description,
                    )}
                  </Text>
                </div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      layoutId="underline"
                      className="w-[60%] h-1 bg-[#cda278] absolute z-1 top-0 left-0 right-0 -translate-y-1/2"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-[1px] bg-[#d9d9d9]" />
      </div>
    </section>
  );
}
