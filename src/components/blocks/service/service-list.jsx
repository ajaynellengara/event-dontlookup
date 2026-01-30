import parse from "html-react-parser";
import { Heading, Text } from "@/components/utils/typography";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "./service-card";

export default function ServiceList({
  data = {},
  locale = "en",
  service_data,
}) {
  const services = data?.service || [];
  // const displayedItems = service_data || services;

  const isArabic = locale === "ar";
  const fallbackServices = [
    {
      id: 1,
      title: "Project Management",
      title_ar: "",
      description:
        "At Wasso, we understand that successful projects require more than planning — they demand foresight, coordination, and commitment.",
      description_ar: "",
      slug: "/services/project-management",
      icon: "/images/service-icon-01.png",
    },
    {
      id: 2,
      title: "Engineering Supervision",
      title_ar: "",
      description:
        "Our engineering supervision services ensure quality, safety, and efficiency at every stage of your project.",
      description_ar: "",
      slug: "/services/engineering-supervision",
      icon: "/images/service-icon-02.png",
    },
    {
      id: 3,
      title: "Engineering Supervision",
      title_ar: "",
      description:
        "Our engineering supervision services ensure quality, safety, and efficiency at every stage of your project.",
      description_ar: "",
      slug: "/services/engineering-supervision",
      icon: "/images/service-icon-03.png",
    },
    {
      id: 4,
      title: "Engineering Supervision",
      title_ar: "",
      description:
        "Our engineering supervision services ensure quality, safety, and efficiency at every stage of your project.",
      description_ar: "",
      slug: "/services/engineering-supervision",
      icon: "/images/service-icon-04.png",
    },
    // Add more services as needed
  ];

  // Decide which items to display
  const displayedItems = service_data || data?.service || fallbackServices;

  return (
    <section className="w-full h-auto block relative z-0 py-[30px] sm:py-[40px] xl:py-[70px_90px] 2xl:py-[80px_100px] 3xl:py-[100px_130px] bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap sm:items-center">
          <div className="w-full sm:w-4/12">
            <Heading
              as="div"
              size="h6"
              className="flex items-center gap-x-4 text-[#1e1e1e]"
            >
              <span className="inline-block size-2 rounded-full bg-[#c09c86]" />
              {data?.sub_title &&
                parse(isArabic ? data?.sub_title_ar : data?.sub_title)}
            </Heading>

            <Heading
              as="h2"
              size="h3"
              className="mb-2 font-normal text-[#1e1e1e] xl:mb-4 2xl:mb-6"
            >
              {data?.title && parse(isArabic ? data?.title_ar : data?.title)}
            </Heading>
          </div>

          <div className="w-full flex items-center sm:w-8/12 pl-[30px] xl:pl-[50px] 2xl:pl-[60px] 3xl:pl-[80px] relative">
            <div className="w-[1px] h-full absolute bg-[#EACC99] inset-0 right-auto m-auto"></div>
            <Text as="div" size="p1" className="font-light text-black">
              {data?.description &&
                parse(isArabic ? data?.description_ar : data?.description)}
            </Text>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4 2xl:-mx-6 3xl:-mx-8 [&>*]:p-4 2xl:[&>*]:p-6 3xl:[&>*]:p-8">
          {displayedItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="w-1/2">
              <ServiceCard locale={locale} data={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
