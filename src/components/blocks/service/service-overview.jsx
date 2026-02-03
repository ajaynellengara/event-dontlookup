"use client";
import parse from "html-react-parser";
import { Heading, Text } from "@/components/utils/typography";
import Image from "next/image";

export default function Overview({ data = {}, locale = "en", overview_data }) {
  const isArabic = locale === "ar";

  return (
    <section className="w-full h-auto block relative z-0 py-[30px] sm:py-[40px] xl:py-[90px] 2xl:py-[100px] 3xl:py-[120px] bg-white">
      <div className="container">
        <div className="flex flex-wrap sm:items-center -mx-4 xl:-mx-7 2xl:-mx-8 3xl:-mx-10 [&>*]:p-4 xl:[&>*]:p-7 2xl:[&>*]:p-8 3xl:[&>*]:p-10">
          <div className="w-full md:w-6/12 lg:w-7/12">
            <Image
              src={data?.media?.desktop_path || "/images/icon-placeholder.svg"}
              alt={data?.media?.media_alt}
              width={885}
              height={500}
              className="h-full w-full object-contain" />
          </div>
          <div className="w-full flex flex-wrap items-center md:w-6/12 lg:w-5/12 pt-[20px] md:pt-0 md:pl-[30px] xl:pl-[50px] 2xl:pl-[60px] 3xl:pl-[80px] relative">
            <Heading
              as="h3"
              size="h3"
              className="mb-4 text-xl font-normal text-black"
            >
              {parse(locale === "ar" ? data?.title_ar : data?.title)}
            </Heading>
            <Text as="div" size="p1" className="font-light text-black">
              {data?.description &&
                parse(isArabic ? data?.description_ar : data?.description)}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
