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
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/utils/typography";
import { cn } from "@/lib/utils";

import parse from "html-react-parser";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";

import { Suspense } from "react";
import Image from "next/image";

import { motion } from "motion/react";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomePortfolio({ data, locale }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true, // Changed to true for looping
    direction: locale === "ar" ? "rtl" : "ltr",
  });

  const goToNext = () => emblaApi?.scrollNext();

  return (
    <section className="w-full h-auto block py-[30px] sm:py-[40px] xl:py-[70px] 2xl:py-[100px] bg-[#fffbf2] overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap mb-6 xl:mb-10 2xl:mb-14">
          <div className="w-7/12">
            <Heading
              as="div"
              size="h6"
              className="tracking-widest font-normal text-[#1e1e1e] flex items-center gap-x-4 mb-1 xl:mb-1.5 2xl:mb-1.5"
            >
              <span className="size-2 rounded-full bg-[#c09c86] inline-block" />
              {parse(locale == "ar" ? data?.sub_title_ar : data?.sub_title)}
            </Heading>
            <Heading
              as="h2"
              size="h3"
              className="font-normal text-[#1e1e1e] mb-2"
            >
              {parse(locale == "ar" ? data?.title_ar : data?.title)}
            </Heading>
          </div>
          <div className="w-5/12">
            <Text
              as="div"
              size="p1"
              className="line-clamp-2 text-[#1e1e1e] mb-3 xl:mb-5 2xl:mb-6"
            >
              {parse(
                locale === "ar" ? data?.description_ar : data?.description,
              )}
            </Text>
            <Button
              size="lg"
              variant={"outline"}
              className="min-w-[100px] xl:min-w-[105px] 2xl:min-w-[130px]"
              asChild
            >
              <Link href={data?.button?.link}>
                {locale == "ar" ? data?.button?.label_ar : data?.button?.label}
              </Link>
            </Button>
          </div>
        </div>
        <div
          className="w-full max-w-full overflow-hidden relative"
          ref={emblaRef}
        >
          <div className="flex items-center touch-pan-y touch-pinch-zoom -mx-[1.5%] [&>div]:px-[1.5%]">
            {data?.items?.map((item, index) => {
              // Calculate the position in the 3-item layout pattern (0, 1, or 2)
              const layoutPosition = index % 3;
              return (
                <div
                  key={"product" + index}
                  className={cn(
                    "flex-[0_0_176px] sm:flex-[0_0_25%] min-w-0 select-none",
                    layoutPosition === 0 && "sm:flex-[0_0_60%]",
                    layoutPosition === 1 && "sm:flex-[0_0_23%]",
                    layoutPosition === 2 && "sm:flex-[0_0_18%]",
                  )}
                >
                  <PortfolioCard
                    index={layoutPosition}
                    data={item}
                    locale={locale}
                  />
                </div>
              );
            })}
          </div>
          <button
            className="w-[80px] sm:w-[100px] xl:w-[130px] 2xl:w-[160px] absolute bottom-0 right-4 z-10 hover:scale-105 transition-transform cursor-pointer"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <Image
              src="/images/home-portfolio-button.svg"
              alt="home-portfolio-button"
              width={194}
              height={194}
              className="w-full h-full block animate-[spin_10s_linear_infinite]"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ data, index, locale }) {
  return (
    <Suspense
      fallback={
        <Skeleton className="w-full h-[368px] lg:h-[440px] 2xl:h-[548px] 3xl:h-[668px] bg-gray-400" />
      }
    >
      <motion.div
        className={cn(
          "w-full h-[368px] lg:h-[500px] 2xl:h-[615px] 3xl:h-[668px]",
          index === 0 && "h-[368px] lg:h-[500px] 2xl:h-[615px] 3xl:h-[668px]",
          index === 1 && "h-[368px] lg:h-[390px] 2xl:h-[480px] 3xl:h-[590px]",
          index === 2 && "h-[368px] lg:h-[200px] 2xl:h-[250px] 3xl:h-[300px]",
        )}
      >
        <motion.div className="w-full h-full relative">
          <div className="absolute inset-0 backface-hidden overflow-hidden">
            <div
              className={cn(
                "w-full h-[40%] bg-gradient-to-b from-transparent to-black/60 absolute z-[1] inset-0 top-auto pointer-events-none",
                index !== 0 && "sm:hidden",
              )}
            />
            <Image
              src={data?.media?.path}
              alt={locale == "ar" ? data?.media?.alt_ar : data?.media?.alt}
              width={432}
              height={668}
              className="w-full h-full object-cover hover:scale-110 transition duration-300"
            />
            <div
              className={cn(
                "w-full p-4 xl:p-10 2xl:p-11 absolute z-[1] inset-0 top-auto flex items-center justify-between",
                index !== 0 && "sm:hidden sm:pointer-events-none",
              )}
            >
              <div>
                <Heading
                  as="div"
                  size="h4"
                  className="font-medium truncate text-white mb-1 xl:mb-1.5"
                >
                  {parse(locale == "ar" ? data?.title_ar : data?.title)}
                </Heading>
                <Text as="div" size="p1" className="truncate text-white">
                  <span className="font-light">Location: </span>
                  {parse(locale === "ar" ? data?.location_ar : data?.location)}
                </Text>
              </div>
              <div>
                <Button
                  size="lg"
                  variant={"outline"}
                  className="text-white min-w-[100px] xl:min-w-[105px] 2xl:min-w-[125px]"
                  asChild
                >
                  <Link href={data?.slug}>
                    {locale == "ar" ? "Know More arabic" : "Know More"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Suspense>
  );
}
