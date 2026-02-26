import parse from "html-react-parser";
import RevealAnimation from "@/components/utils/reveal-animation";
import { Text } from "@/components/utils/typography";
import Link from "next/link";
import Image from "next/image";

export default function LandingContact({ data }) {

  return (
    <section className="w-full h-auto block bg-[#121212] py-8 sm:py-10 xl:pt-10 xl:pb-20 2xl:pt-12 2xl:pb-24 3xl:pt-14 3xl:pb-34">

      <div className="container">
        <RevealAnimation className="w-full bg-[#042626] border border-[#767676] p-4 sm:p-6 md:p-8 xl:px-15 xl:py-10 2xl:px-20 2xl:py-12 3xl:px-24 3xl:py-16">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-9/12">
              <div className="flex flex-wrap">

                {
                  data?.quickLinks?.map((item, i) => (
                    <div key={item?.id}
                      className="w-1/2 2xs:w-1/2 sm:w-1/3"
                    >
                      <Text
                        as="p"
                        size="p2"
                        className="leading-none text-white my-2 md:my-2 lg:my-2.5 xl:my-2.5 2xl:my-3 3xl:my-4 hover:text-[#06B5B9]"
                      >
                        <Link href={item?.slug}>
                          {item?.title}
                        </Link>

                      </Text>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className="w-full sm:w-3/12 mt-6 sm:mt-0">
              <div className="flex flex-wrap gap-4 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-8 3xl:gap-10">

                {
                  data?.socialLinks?.map((item, i) => (
                    <div key={item?.id}
                      className="my-2 md:my-2 lg:my-2.5 xl:my-2.5 2xl:my-3 3xl:my-4"
                    >
                      <Link href={item?.slug}>
                        <Image
                          src={item?.media?.url}
                          alt={item?.media?.alt}
                          width={30}
                          height={30}
                          className="w-[20px] md:w-[22px] lg:w-[24px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[32px] aspect-square object-contain hover:scale-115 transition-all duration-300 ease-in-out"
                        />
                      </Link>

                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
