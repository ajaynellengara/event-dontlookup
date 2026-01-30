import Image from "next/image";
import { Heading, Text } from "@/components/utils/typography";

export default function ProjectMonth({ data, locale }) {
  return (
    <section className="project-month w-full h-auto block py-7.5 sm:py-10 xl:py-25 2xl:py-[111px_172px]">
      <div className="container">
        <div className="max-w-255.5 mx-auto text-center mb-10 xl:mb-17 2xl:mb-22.5">
          <Heading as="h2" size="h2" className="mb-4.75 text-[#1e1e1e]">
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
