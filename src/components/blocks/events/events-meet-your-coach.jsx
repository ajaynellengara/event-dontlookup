
import { Heading, Text } from "@/components/utils/typography";
import { cn } from "@/lib/utils";

import parse from "html-react-parser";
import Image from "next/image";


export default function EventsMeetYourCoach({ data }) {


  return (
    <section className="w-full h-auto bg-white block pt-10 xl:pt-[120px] 2xl:pt-[140px] 3xl:pt-[120px] pb-[15px] xl:pb-[60px] 2xl:pb-[70px] 3xl:pb-[60px]">
      <div className="container">
        <div className="w-full">
          <Heading
            as="h2"
            size="h1"
            className="text-center text-[#06B5B9] mb-3 xl:mb-15 2xl:mb-37 3xl:mb-40"
          >
            {parse(data?.title)}
          </Heading>
        </div>

        <div className="flex flex-wrap mb-4 xl:mb-12 2xl:mb-13 3xl:mb-15">
          <div className="w-full sm:w-[100px] xl:w-[180px] 2xl:w-[220px] 3xl:w-[260px]">
            <Heading
              as="h4"
              size="h4"
              className="xl:text-[22px] 2xl:text-[26px] 3xl:text-[33px] text-[#06B5B9] mb-3 xl:mb-4"
            >
              {parse(data?.items?.[0]?.title)}
            </Heading>
          </div>
          <div className="flex-1">

            <div
              className="typography [--text-color:#121212] [&_p]:mt-0"
              dir="ltr"
            >
              {parse(data?.items?.[0]?.description)}
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-3 grid-rows-2 gap-4 xl:gap-6 2xl:gap-7 3xl:gap-8">
          {data?.items?.map((item, index) => (
            <div key={index}
              className={cn("w-full h-full",
                index === 0 && "col-span-2 row-span-2",
                index === 1 && "col-start-3",
                index === 2 && "col-start-3 row-start-2")}
            >
              <div className="w-full h-full overflow-hidden relative z-0">
                <Image
                  src={item?.mediaUrl}
                  alt={item?.title}
                  width={935}
                  height={670}
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
                />
                <Text
                  as="div"
                  size="p1"
                  className="font-sora font-normal text-white px-4 xl:px-6 py-2 xl:py-3 bg-[#9E9E9E] rounded-[50px] absolute z-0 bottom-10 left-10 3xl:bottom-12.5 3xl:left-12.5"
                >
                  {parse(item?.title)}
                </Text>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section >
  );
}