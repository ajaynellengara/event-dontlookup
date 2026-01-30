import Image from "next/image";
import { Heading, Text } from "@/components/utils/typography";

export default function ProjectMonth({ data, locale }) {
  return (
    <section className="project-month w-full h-auto block py-[30px] sm:py-[40px] xl:py-[100px] 2xl:py-[111px_172px]">
      <div className="container">
        <div className="max-w-[1022px] mx-auto text-center mb-[90px]">
          <Heading as="h2" size="h2" className="mb-[19px] text-[#1e1e1e]">
            Projects of the Month
          </Heading>
          <Text
            as="div"
            size="p1"
            className="font-light text-black mb-4 xl:mb-8 2xl:mb-10"
          >
            A 45-story luxury residential tower featuring sustainable design
            elements, panoramic views, and world-class amenities. This landmark
            project redefines modern urban living with its innovative
            architectural approach and commitment to environmental excellence.
          </Text>
        </div>
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
    </section>
  );
}
