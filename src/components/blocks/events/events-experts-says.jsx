
import { Heading } from "@/components/utils/typography";

import parse from "html-react-parser";
import Image from "next/image";


export default function EventsExpertsSays({ data }) {


  return (
    <section className="w-full h-auto bg-[#121212] block pt-5 xl:pt-6 2xl:pt-8 3xl:pt-10 pb-[60px] xl:pb-[120px] 2xl:pb-[180px] 3xl:pb-[180px]">
      <Heading
        as="h2"
        size="h1"
        className="xl:text-[64px] 2xl:text-[76px] 3xl:text-[96px] text-center font-medium text-white mb-4 sm:mb-8 xl:mb-12.5 2xl:mb-16 3xl:mb-20"
      >
        {parse(data?.title)}
      </Heading>
      <div className="w-full h-auto aspect-1920/740 overflow-hidden block relative z-0">
        {data?.media?.type === "video" ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={data?.media?.url} type="video/mp4" />
          </video>
        ) : (
          <picture>
            <Image
              src={data?.media?.url}
              alt={data?.media?.alt}
              width={1920}
              height={780}
              className="w-full h-full object-cover"
            />
          </picture>
        )}
        {data?.media?.type === "video" && (
          <div className="w-20 aspect-square rounded-full absolute z-1 inset-0 m-auto" />
        )}
      </div>
    </section >
  );
}