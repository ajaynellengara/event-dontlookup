
import { Heading } from "@/components/utils/typography";

import parse from "html-react-parser";
import Image from "next/image";


export default function EventsWhoIsThisFor({ data }) {


  return (
    <section className="w-full h-auto bg-[#121212] block pt-10 xl:pt-[120px] 2xl:pt-[140px] 3xl:pt-[120px] pb-[15px] xl:pb-[60px] 2xl:pb-[70px] 3xl:pb-[60px]">
      <div className="container">
        <div className="flex flex-wrap  -mx-4 xl:-mx-10 2xl:-mx-12.5 3xl:-mx-15 [&>div]:px-4 xl:[&>div]:px-10 2xl:[&>div]:px-12.5 3xl:[&>div]:px-15">
          <div className="w-full sm:w-6/12">
            <div className="w-full">
              <Heading
                as="h3"
                size="h3"
                className="xl:text-[48px] 2xl:text-[57px] 3xl:text-[72px] font-medium text-white xl:-mt-2 mb-3 xl:mb-5 2xl:mb-7 3xl:mb-10"
              >
                {parse(data?.title)}
              </Heading>

              <div
                className="typography [--text-color:#fff]"
                dir="ltr"
              >
                {parse(data?.description)}
              </div>

            </div>
          </div>
          <div className="w-full sm:w-6/12 ">
            <div className="w-full aspect-90/48 overflow-hidden">
              <Image
                src={data?.media?.url}
                alt={data?.media?.alt}
                width={900}
                height={480}
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}