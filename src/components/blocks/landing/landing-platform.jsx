
import { Heading } from "@/components/utils/typography";

import parse from "html-react-parser";
import Image from "next/image";
import RevealAnimation from "@/components/utils/reveal-animation";


export default function LandingPlatform({ data }) {


  return (
    <section className="w-full h-auto bg-[#121212] block py-10 xl:py-25 2xl:py-32 3xl:py-40">
      <div className="w-full h-auto aspect-4/3 sm:aspect-1280/520 overflow-hidden block relative z-0">
        {data?.media?.type === "video" ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster={data?.media?.posterUrl}
          >
            <source src={data?.media?.url} type="video/mp4" />
          </video>
        ) : data?.media?.type === "youtube" ? (
          <iframe
            className="w-full h-full object-cover"
            src={data?.media?.url}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="YouTube Video"
          />
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
      <div className="w-full h-1 bg-white mb-10 md:mb-14 lg:mb-16 xl:mb-20 2xl:mb-24 3xl:mb-32" />
      <div className="container">
        <RevealAnimation className="flex flex-wrap">
          <div className="w-full sm:w-5/12">
            <div className="w-full">
              <Heading
                as="h2"
                size="h1"
                className="font-medium text-white mb-2 md:mb-2.5 lg:mb-3 xl:mb-3 2xl:mb-4 3xl:mb-5"
              >
                {parse(data?.title)}
              </Heading>
            </div>
          </div>

          <div className="w-full sm:w-7/12">
            <div className="w-full">
              <div
                className="typography [--text-color:#fff]"
                dir="ltr"
              >
                {parse(data?.description)}
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section >
  );
}
