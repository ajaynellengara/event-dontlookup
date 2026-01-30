import Image from "next/image";
import { Heading, Text } from "@/components/utils/typography";

export default function SuccessStories({ data, locale }) {
  return (
    <section className="success-stories bg-[#FFFBF2] w-full h-auto block py-[30px] sm:py-[40px] xl:py-[100px] 2xl:py-[78px_133px]">
      <div className="container">
        <div className="max-w-[1022px] mx-auto text-center mb-[100px]">
          <Heading as="h2" size="h2" className="mb-[15px] text-[#1e1e1e]">
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
        <div className="flex flex-wrap [&>*]:px-[30px] mx-[-30px]">
          <div className="w-[calc(100%_/_2)]">
            <div className="aspect-[830/518] w-full">
              <Image
                src={"/images/st1.jpg"}
                alt={locale == "ar" ? data?.media_alt_ar : data?.media_alt}
                width={830}
                height={518}
                className="w-full h-full object-cover"
              />
            </div>
            
          </div>
          <div className="w-[calc(100%_/_2)]">
            <div className="aspect-[830/518] w-full">
              <Image
                src={"/images/st2.png"}
                alt={locale == "ar" ? data?.media_alt_ar : data?.media_alt}
                width={830}
                height={518}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
