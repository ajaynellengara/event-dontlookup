
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/utils/typography";

import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import RevealAnimation from "@/components/utils/reveal-animation";
import { cn } from "@/lib/utils";


export default function LandingFeaturedEvents({ data }) {


  return (
    <section className="w-full h-auto bg-[#121212] block">
      <div className="container">
        <div className="w-full h-[1px] bg-[#767676] mb-5 sm:mb-4 lg:mb-5 xl:mb-5 2xl:mb-6 3xl:mb-8" />
        <div className="flex flex-wrap md:-mx-4 lg:-mx-6 md:[&>div]:px-4 lg:[&>div]:px-6 2xl:-mx-8 2xl:[&>div]:px-8 3xl:-mx-12 3xl:[&>div]:px-12">
          <div className="w-full sm:w-3/12 mb-6 sm:mb-0">
            <div className="w-full">
              <Heading
                as="h2"
                size="h1"
                className="font-normal text-[#30C2C5] mb-2 md:mb-2.5 lg:mb-3 xl:mb-3 2xl:mb-4 3xl:mb-5"
              >
                {parse(data?.title)}
              </Heading>
              <Text
                as="div"
                size="p1"
                className="text-white"
              >
                {data?.description}
              </Text>
            </div>
          </div>

          <div className="w-full sm:w-9/12">
            {/* -mx-2 sm:-mx-2 md:-mx-4 lg:-mx-6 xl:-mx-8 2xl:-mx-10 3xl:-mx-12 */}
            <div className="flex flex-wrap">
              {data?.items?.map((item, index) => (
                <div key={item?.id}
                  className="w-full 3xs:w-1/2 2xs:w-1/3 sm:w-1/3"
                  title={item?.isActive ? item?.title : "Coming Soon"}
                >
                  <div className={cn("group w-full h-auto block hover:bg-[#3a3a3a] p-2 sm:p-2 md:p-4 lg:p-6 xl:p-8 2xl:p-10 3xl:p-12 rounded-[8px] transition-all duration-300 hover:[&>div]:scale-105",
                    !item?.isActive && "opacity-30 grayscale pointer-events-none")}
                  >
                    <div className="w-full rounded-[8px] xl:rounded-[10px] aspect-396/510 overflow-hidden mb-3 md:mb-3.5 lg:mb-4 xl:mb-4 2xl:mb-5 3xl:mb-6 transition-all duration-300">
                      <Image
                        src={item?.media?.url}
                        alt={item?.media?.alt}
                        width={400}
                        height={510}
                        className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-300"
                      />
                    </div>
                    <div className="w-full transition-all duration-300">
                      <Image
                        src={item?.eventLogo}
                        alt={item?.title}
                        width={80}
                        height={15}
                        className="w-[70px] sm:w-[100px] md:w-[110px] lg:w-[115px] xl:w-[120px] 2xl:w-[140px] 3xl:w-[160px] h-auto aspect-100/25 object-contain object-left mb-2 md:mb-2.5 lg:mb-3 xl:mb-3 2xl:mb-4"
                      />
                      <Heading
                        as="div"
                        size="h4"
                        className="font-normal leading-tight capitalize text-white mb-1 xl:mb-1.5 2xl:mb-1.5"
                      >
                        {parse(item?.title)}
                      </Heading>
                      <Button
                        variant="link"
                        className={"font-normal text-white p-0 underline underline-offset-4 hover:text-[#30C2C5]"}
                        asChild
                      >
                        <Link href={`/events/${item?.slug}`}>
                          View More
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-px bg-[#767676]" />
          </div>
        </div>
      </div>
    </section>
  );
}
