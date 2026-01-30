import Image from "next/image";
import { Heading, Text } from "@/components/utils/typography";

export default function SuccessStories({ data, locale }) {
  return (
    <section className="success-stories w-full h-auto block py-[30px] sm:py-[40px] xl:py-[100px] 2xl:py-[120px]">
      <div className="container">
        <div className="max-w-[1022px] mx-auto text-center mb-[90px]">
          <Heading as="h2" size="h2" className="mb-[19px] text-[#1e1e1e]">
            Building Success Stories
          </Heading>
          <Text
            as="div"
            size="p1"
            className="font-light text-black mb-4 xl:mb-8 2xl:mb-10"
          >
            At Wasso Group, we recognize that every project is unique, with its
            own set of opportunities and challenges. Our project management
            service is built on the principle of transforming complex
          </Text>
        </div>
        <div className="flex flex-wrap">
          <div className="w-[calc(100% / 2)]">
            <div className="w-full">
              <Image
                src={"/images/pom.png"}
                alt={locale == "ar" ? data?.media_alt_ar : data?.media_alt}
                width={1720}
                height={736}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
