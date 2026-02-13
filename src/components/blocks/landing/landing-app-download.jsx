
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/utils/typography";

import parse from "html-react-parser";
import Link from "next/link";


export default function LandingAppDownload({ data }) {


  return (
    <section className="w-full h-auto bg-linear-t-top from-[#012124] to-[#215254] block py-5 sm:py-5 xl:py-5 2xl:py-6 overflow-hidden relative z-0">
      <Image
        src={"/images/app-download-bg.png"}
        alt={"app-download-bg"}
        width={211}
        height={194}
        className="xl:w-[210px] 2xl:w-[211px] absolute -z-1 top-0 left-5"
      />
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-7/12">
            <div className="w-full flex flex-wrap">
              <div className="w-[200px] xl:w-[220px] 2xl:w-[260px]">
                <Image
                  src={data?.media?.url}
                  alt={data?.media?.alt}
                  width={220}
                  height={250}
                  className="w-full h-full object-contain"
                />

              </div>
              <div className="flex-1">
                <Heading
                  as="div"
                  size="h6"
                  className="text-[#30C2C5] mb-1 xl:mb-1.5 2xl:mb-1.5"
                >
                  {parse(data?.sub_title)}
                </Heading>
                <Text
                  as="div"
                  size="p1"
                  className="text-white mb-3 xl:mb-5 2xl:mb-6"
                >
                  {data?.description}
                </Text>
                <Button
                  size="lg"
                  variant={"outline"}
                  asChild
                >
                  <Link href={data?.appLinkPlayStore}>
                    <Image
                      src={"/images/app-download-playstore.avif"}
                      alt={"app-download-playstore"}
                      width={211}
                      height={194}
                      className="xl:w-[210px] 2xl:w-[211px]"
                    />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant={"outline"}
                  asChild
                >
                  <Link href={data?.appLinkAppStore}>
                    <Image
                      src={"/images/app-download-appstore.avif"}
                      alt={"app-download-playstore"}
                      width={211}
                      height={194}
                      className="xl:w-[210px] 2xl:w-[211px]"
                    />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-7/12">
            <div className="w-full">
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
      </div>
    </section>
  );
}