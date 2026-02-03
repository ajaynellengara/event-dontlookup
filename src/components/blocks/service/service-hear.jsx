"use client";
import parse from "html-react-parser";
import { Heading, Text } from "@/components/utils/typography";
import ServiceForm from "./service-form";

export default function ServiceHearFrom({ data, locale = "en" }) {
  const isArabic = locale === "ar";

  return (
    <section className="w-full h-auto block relative z-0 py-[30px] sm:py-[40px] xl:py-[90px] 2xl:py-[100px] 3xl:py-[120px] bg-white">
      <div className="container ">
        <div className="flex gap-10 sm:items-center relative">

          <div className="w-full md:w-6/12 lg:w-[30%]">
            <Heading
              as="h3"
              size="h3"
              className="mb-4 text-xl font-normal text-black"
            >
              <span className="font-extralight">
                {parse(locale === "ar" ? data?.title_lit_ar : data?.title_lit)}
              </span><br/>
              {parse(locale === "ar" ? data?.title_ar : data?.title)}
            </Heading>
          </div>
          <div className="w-full md:w-4/12 lg:w-[70%] flex flex-wrap items-center  pt-[20px] md:pt-0 md:pl-[30px] xl:pl-[50px] 2xl:pl-[60px] 3xl:pl-[80px] relative">
            <ServiceForm />
          </div>
        </div>
      </div>
    </section>
  );
}
