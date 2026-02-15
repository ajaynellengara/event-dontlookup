
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/utils/typography";

import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";


export default function LandingAppDownload({ data }) {


  return (
    <section className="w-full h-auto bg-linear-to-t from-[#012124] to-[#215254] block py-6 sm:py-10 lg:py-5 xl:py-5 2xl:py-6 3xl:py-8 overflow-hidden relative z-0">
      <Image
        src={"/images/app-download-bg.png"}
        alt={"app-download-bg"}
        width={211}
        height={194}
        className="w-[180px] md:w-[200px] xl:w-[230px] absolute -z-1 top-0 left-1/12 -translate-y-1/2"
      />
      <div className="container">
        <div className="flex flex-wrap gap-x-6 sm:gap-x-10 lg:gap-x-20 xl:gap-x-25 2xl:gap-x-32 3xl:gap-x-40">
          <div className="w-full sm:flex-1">
            <div className="w-full flex flex-wrap items-center justify-center sm:justify-start">
              <div className="w-full xs:w-[140px] sm:w-[200px] lg:w-[230px] xl:w-[240px] 2xl:w-[260px] 3xl:w-[320px] mb-3 xs:mb-0 mr-8 md:mr-10 lg:mr-12 xl:mr-14 2xl:mr-16 3xl:mr-20 ml-6 md:ml-8 lg:ml-10 xl:ml-10 2xl:ml-12 3xl:ml-16 sm:translate-y-[20px] md:translate-y-[30px] lg:translate-y-[40px] xl:translate-y-[50px]">
                <Image
                  src={data?.media?.url}
                  alt={data?.media?.alt}
                  width={220}
                  height={250}
                  className="w-full h-full object-contain max-xs:max-w-[140px]"
                />

              </div>
              <div className="flex-1">
                <Heading
                  as="h2"
                  size="h1"
                  className="text-[#BCBEBE] mb-2 md:mb-2 lg:mb-3 xl:mb-3 2xl:mb-4 3xl:mb-5"
                >
                  {parse(data?.title)}
                </Heading>
                <Text
                  as="div"
                  size="p1"
                  className="text-white mb-3 md:mb-4 lg:mb-5 xl:mb-5 2xl:mb-6 3xl:mb-8"
                >
                  {data?.description}
                </Text>
                <div className="flex gap-4 mt-4">

                  <Button
                    size="lg"
                    variant={"none"}
                    className="p-0 max-w-[80px] sm:max-w-[100px] lg:max-w-[120px] xl:max-w-[120px] 2xl:max-w-[140px] 3xl:max-w-[160px]"
                    asChild
                  >
                    <Link href={data?.appLinkPlayStore}>
                      <Image
                        src={"/images/app-download-playstore.avif"}
                        alt={"app-download-playstore"}
                        width={211}
                        height={194}
                        className="w-full h-auto"
                      />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant={"none"}
                    className="p-0 max-w-[80px] sm:max-w-[100px] lg:max-w-[120px] xl:max-w-[120px] 2xl:max-w-[140px] 3xl:max-w-[160px]"
                    asChild
                  >
                    <Link href={data?.appLinkAppStore}>
                      <Image
                        src={"/images/app-download-appstore.avif"}
                        alt={"app-download-playstore"}
                        width={211}
                        height={194}
                        className="w-full h-auto"
                      />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[80px] sm:max-w-[100px] lg:max-w-[140px] xl:max-w-[150px] 2xl:max-w-[180px] 3xl:max-w-[220px] max-sm:hidden hover:scale-110 transition duration-300">
            <Image
              src={data?.qrCodeImage}
              alt={data?.title}
              width={150}
              height={190}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}