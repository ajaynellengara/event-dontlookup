"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { Heading, Text } from "@/components/utils/typography";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function HomeAbout({ data, locale }) {
  return (
    <ParallaxProvider>
      <section className="w-full h-auto block py-[30px] sm:py-[40px] xl:py-[110px] 2xl:py-[120px] overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap sm:items-center -mx-1 [&>*]:p-1">
            <div className="w-full sm:w-4/12">
              <Heading
                as="div"
                size="h6"
                className="tracking-widest font-normal text-[#1e1e1e] flex items-center gap-x-4 mb-2 xl:mb-4 2xl:mb-6"
              >
                <span className="size-2 rounded-full bg-[#c09c86] inline-block" />
                {parse(locale == "ar" ? data?.sub_title_ar : data?.sub_title)}
              </Heading>
              <Heading
                as="h2"
                size="h3"
                className="font-normal text-[#1e1e1e] mb-2 xl:mb-4 2xl:mb-6"
              >
                {parse(locale == "ar" ? data?.title_ar : data?.title)}
              </Heading>
              <Text
                as="div"
                size="p1"
                className="line-clamp-1 text-black mb-4 xl:mb-8 2xl:mb-10"
              >
                {parse(
                  locale == "ar" ? data?.description_ar : data?.description,
                )}
              </Text>
              <Button
                variant={"black"}
                className="min-w-[100px] sm:min-w-[120px] xl:min-w-[135px] 2xl:min-w-40"
                asChild
              >
                <Link href={data?.button?.link}>
                  {locale == "ar"
                    ? data?.button?.label_ar
                    : data?.button?.label}
                </Link>
              </Button>
            </div>

            <div className="w-full sm:w-4/12">
              <Parallax speed={-20}>
                <div className="w-full xl:max-w-[300px] 2xl:max-w-[360px] bg-gray-200 mx-auto mask-[url(/images/icon-brand.svg)] mask-center mask-contain mask-no-repeat">
                  <Image
                    src={data?.media_path}
                    alt={locale == "ar" ? data?.media_alt_ar : data?.media_alt}
                    width={308}
                    height={517}
                    className="w-full h-full object-fill"
                  />
                </div>
              </Parallax>
            </div>

            <div className="w-full sm:w-4/12">
              <div className="w-full max-w-[320px] ml-auto">
                {data?.mission && (
                  <SubItems data={data?.mission} locale={locale} />
                )}
                <hr className="my-3 xl:my-5 border-[#d9d9d9]" />
                {data?.vision && (
                  <SubItems data={data?.vision} locale={locale} />
                )}
                <hr className="my-3 xl:my-5 border-[#d9d9d9]" />
                {data?.sister_concern && (
                  <SubItems data={data?.sister_concern} locale={locale} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
}

function SubItems({ data, locale }) {
  return (
    <div className="w-full">
      <Heading
        as="h6"
        size="h7"
        className="font-medium text-[#1e1e1e] flex items-center gap-x-4 mb-1 xl:mb-2"
      >
        {parse(locale == "ar" ? data?.title_ar : data?.title)}
        {data?.logo_path && (
          <Image
            src={data?.logo_path}
            alt={locale == "ar" ? data?.logo_alt_ar : data?.logo_alt}
            width={52}
            height={27}
            className="w-[40px] xl:w-[50px]"
          />
        )}
      </Heading>
      <Text as="div" size="p1" className="line-clamp-3 text-black">
        {parse(locale == "ar" ? data?.description_ar : data?.description)}
      </Text>
    </div>
  );
}
