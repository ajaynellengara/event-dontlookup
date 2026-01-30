// "use client";
// import { Button } from "@/components/ui/button";
// import { Heading, Text } from "@/components/utils/typography";
// import { cn } from "@/lib/utils";

// import parse from "html-react-parser";
// import Link from "next/link";

// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// import { Suspense } from "react";
// import Image from "next/image";

// import { motion } from "motion/react";
// import { Skeleton } from "@/components/ui/skeleton";

// export default function HomePortfolio({ data, locale }) {
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true, direction: locale === "ar" ? "rtl" : "ltr" },
//     // [Autoplay({ delay: 6000, stopOnInteraction: true, pauseOnHover: true })],
//   );

//   const goToNext = () => emblaApi?.scrollNext();

//   return (
//     <section className="w-full h-auto block py-[30px] sm:py-[40px] xl:py-[70px] 2xl:py-[100px] bg-[#fffbf2] overflow-hidden">
//       <div className="container">
//         <div className="flex flex-wrap mb-6 xl:mb-10 2xl:mb-14">
//           <div className="w-7/12">
//             <Heading
//               as="div"
//               size="h6"
//               className="tracking-widest font-normal text-[#1e1e1e] flex items-center gap-x-4 mb-1 xl:mb-1.5 2xl:mb-1.5"
//             >
//               <span className="size-2 rounded-full bg-[#c09c86] inline-block" />
//               {parse(locale == "ar" ? data?.sub_title_ar : data?.sub_title)}
//             </Heading>
//             <Heading
//               as="h2"
//               size="h3"
//               className="font-normal text-[#1e1e1e] mb-2"
//             >
//               {parse(locale == "ar" ? data?.title_ar : data?.title)}
//             </Heading>
//           </div>
//           <div className="w-5/12">
//             <Text
//               as="div"
//               size="p1"
//               className="line-clamp-2 text-[#1e1e1e] mb-3 xl:mb-5 2xl:mb-6"
//             >
//               {parse(
//                 locale === "ar" ? data?.description_ar : data?.description,
//               )}
//             </Text>
//             <Button
//               size="lg"
//               variant={"outline"}
//               className="min-w-[100px] xl:min-w-[105px] 2xl:min-w-[130px]"
//               asChild
//             >
//               <Link href={data?.button?.link}>
//                 {locale == "ar" ? data?.button?.label_ar : data?.button?.label}
//               </Link>
//             </Button>
//           </div>
//         </div>
//         <div
//           className="w-full max-w-full overflow-hidden relative"
//           ref={emblaRef}
//         >
//           <div className="flex items-center touch-pan-y touch-pinch-zoom -mx-[1.5%] [&>div]:px-[1.5%]">
//             {data?.items?.map((item, index) => (
//               <div
//                 key={"product" + index}
//                 className={cn(
//                   "flex-[0_0_176px] sm:flex-[0_0_25%] min-w-0 select-none",
//                   index === 0 && "sm:flex-[0_0_60%]",
//                   index === 1 && "sm:flex-[0_0_23%]",
//                   index === 2 && "sm:flex-[0_0_18%]",
//                 )}
//               >
//                 <PortfolioCard index={index} data={item} locale={locale} />
//               </div>
//             ))}
//           </div>
//           <button
//             className="w-[80px] sm:w-[100px] xl:w-[130px] 2xl:w-[160px] absolute bottom-0 right-4 z-1 animate-spin-[10s]"
//             onClick={goToNext}
//           >
//             <Image
//               src="/images/home-portfolio-button.svg"
//               alt="home-portfolio-button"
//               width={194}
//               height={194}
//               className="w-full h-full block"
//             />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function PortfolioCard({ data, index, locale }) {
//   return (
//     <Suspense
//       fallback={
//         <Skeleton className="w-full h-[368px] lg:h-[440px] 2xl:h-[548px] 3xl:h-[668px] bg-gray-400" />
//       }
//     >
//       <motion.div
//         className={cn(
//           "w-full h-[368px] lg:h-[500px] 2xl:h-[615px] 3xl:h-[668px]",
//           index === 0 && "h-[368px] lg:h-[500px] 2xl:h-[615px] 3xl:h-[668px]",
//           index === 1 && "h-[368px] lg:h-[390px] 2xl:h-[480px] 3xl:h-[590px]",
//           index === 2 && "h-[368px] lg:h-[200px] 2xl:h-[250px] 3xl:h-[300px]",
//         )}
//       >
//         <motion.div className="w-full h-full relative">
//           <div className="absolute inset-0 backface-hidden overflow-hidden">
//             <div
//               className={cn(
//                 "w-full h-[40%] bg-linear-to-b from-transparent to-black/60  absolute z-1 inset-0 top-auto pointer-events-none",
//                 index !== 0 && "sm:hidden",
//               )}
//             />
//             <Image
//               src={data?.media?.path}
//               alt={locale == "ar" ? data?.media?.alt_ar : data?.media?.alt}
//               width={432}
//               height={668}
//               className="w-full h-full object-cover hover:scale-110 transition duration-300"
//             />
//             <div
//               className={cn(
//                 "w-full p-4 xl:p-10 2xl:p-11 absolute z-1 inset-0 top-auto flex items-center justify-between",
//                 index !== 0 && "sm:hidden sm:pointer-events-none",
//               )}
//             >
//               <div>
//                 <Heading
//                   as="div"
//                   size="h4"
//                   className="font-medium turncate text-white mb-1 xl:mb-1.5"
//                 >
//                   {parse(locale == "ar" ? data?.title_ar : data?.title)}
//                 </Heading>
//                 <Text as="div" size="p1" className="turncate text-white">
//                   <span className="font-light">Location: </span>
//                   {parse(locale === "ar" ? data?.location_ar : data?.location)}
//                 </Text>
//               </div>
//               <div>
//                 <Button
//                   size="lg"
//                   variant={"outline"}
//                   className="text-white min-w-[100px] xl:min-w-[105px] 2xl:min-w-[125px]"
//                   asChild
//                 >
//                   <Link href={data?.slug}>
//                     {locale == "ar" ? "Know More arabic" : "Know More"}
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </Suspense>
//   );
// }

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
    <section className="w-full py-[30px] sm:py-[40px] xl:py-[70px] 2xl:py-[100px] bg-[#fffbf2] overflow-hidden">
      <div className="container">
        {/* HEADER */}
        <div className="flex flex-wrap mb-6 xl:mb-10 2xl:mb-14">
          <div className="w-7/12">
            <Heading
              as="div"
              size="h6"
              className="tracking-widest font-normal text-[#1e1e1e] flex items-center gap-x-4 mb-1"
            >
              <span className="size-2 rounded-full bg-[#c09c86]" />
              {parse(locale === "ar" ? data?.sub_title_ar : data?.sub_title)}
            </Heading>
            <Heading as="h2" size="h3" className="font-normal text-[#1e1e1e]">
              {parse(locale === "ar" ? data?.title_ar : data?.title)}
            </Heading>
          </div>

          <div className="w-5/12">
            <Text
              as="div"
              size="p1"
              className="line-clamp-2 text-[#1e1e1e] mb-5"
            >
              {parse(
                locale === "ar" ? data?.description_ar : data?.description,
              )}
            </Text>

            <Button size="lg" variant="outline" asChild>
              <Link href={data?.button?.link}>
                {locale === "ar" ? data?.button?.label_ar : data?.button?.label}
              </Link>
            </Button>
          </div>
        </div>

        {/* FIXED LAYOUT */}
        <div className="relative">
          <div className="flex items-center -mx-[1.5%] [&>div]:px-[1.5%]">
            {visibleItems.map((item, slotIndex) => (
              <div
                key={`slot-${slotIndex}`}
                className={cn(
                  "flex-[0_0_176px] sm:flex-[0_0_25%]",
                  slotIndex === 0 && "sm:flex-[0_0_60%]",
                  slotIndex === 1 && "sm:flex-[0_0_23%]",
                  slotIndex === 2 && "sm:flex-[0_0_18%]",
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

          {/* NEXT BUTTON */}
          <button
            onClick={goToNext}
            className="w-[80px] sm:w-[100px] xl:w-[130px] 2xl:w-[160px] absolute bottom-0 right-4 z-10 animate-spin-[10s]"
          >
            <Image
              src="/images/home-portfolio-button.svg"
              alt="Next"
              width={194}
              height={194}
              className="w-full h-full"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   PORTFOLIO CARD (SLIDER EFFECT)
------------------------------------------------------- */

function PortfolioCard({ data, slot, locale, activeIndex }) {
  return (
    <Suspense fallback={<Skeleton className="w-full h-[368px] bg-gray-300" />}>
      <div
        className={cn(
          "relative overflow-hidden w-full bg-gray-500",
          slot === 0 && "h-[368px] lg:h-[500px] 2xl:h-[615px] 3xl:h-[668px]",
          slot === 1 && "h-[368px] lg:h-[390px] 2xl:h-[480px] 3xl:h-[590px]",
          slot === 2 && "h-[368px] lg:h-[200px] 2xl:h-[250px] 3xl:h-[300px]",
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={data?.media?.path}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              duration: 0.7,
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

            {/* Overlay only for large card */}
            {slot === 0 && (
              <>
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60" />

                <div className="absolute inset-x-0 bottom-0 p-4 xl:p-10 flex items-center justify-between">
                  <div>
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

                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white"
                    asChild
                  >
                    <Link href={data?.slug}>
                      {locale === "ar" ? "Know More arabic" : "Know More"}
                    </Link>
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Suspense>
  );
}
