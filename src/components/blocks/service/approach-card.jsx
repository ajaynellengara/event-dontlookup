"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function ApproachCard({ data, locale = "en", index = 0 }) {
  const title = locale === "ar" ? data?.title_ar : data?.title;
  const description =
    locale === "ar" ? data?.description_ar : data?.description;
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      axis: "X",
      align: "start",
      dragFree: true,
      containScroll: false,
      watchSlides: true,
    },
    [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
  );

  return (
    <div className="container">
      <div
        ref={emblaRef}
        className="overflow-hidden relative z-0 before:content-[''] before:w-8 2xl:before:w-10 before:h-50 2xl:before:h-59 before:bg-[url('/images/about-scale.svg')] before:bg-cover before:bg-no-repeat before:absolute before:z-1"
      >
        <div className="select-none flex">
          <div className="flex-[20%_0_0]">
            <div
              className={cn(
                "group relative w-full h-full overflow-hidden p-6 sm:p-8",
                index % 2 === 0 ? "bg-[#FBF6EC]" : "bg-[#FAFAFA]",
              )}
            >
              <div
                className={cn(
                  "absolute top-4 text-[64px] sm:text-[80px] font-light leading-none opacity-50 bg-clip-text text-transparent",
                  locale === "ar" ? "right-4" : "left-4",
                  index % 2 === 0
                    ? "bg-gradient-to-b from-[#FFF7E6] to-[#FFDB8B]"
                    : "bg-[linear-gradient(180deg,#FAFAFA_-32.72%,#DEDDDC_86.61%)]",
                )}
              >
                {String(data?.order ?? index + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10 pt-20 sm:pt-24">
                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#282828] mb-3 leading-tight">
                  {/* {parse(title || "")} */}
                  {parse(
                    locale === "ar" ? data?.title_ar || "" : data?.title || "",
                  )}
                </h3>

                <div className="text-[14px] sm:text-[15px] lg:text-[16px] font-light text-[#6F6F6F] leading-relaxed">
                  {parse(
                    locale === "ar"
                      ? data?.description_ar || ""
                      : data?.description || "",
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
