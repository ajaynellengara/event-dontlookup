
import { Heading, Text } from "@/components/utils/typography";
import { cn } from "@/lib/utils";

import parse from "html-react-parser";
import Image from "next/image";


export default function EventsWhatTrainedIn({ data }) {


  return (
    <section id="what-trained-in" className="w-full h-auto bg-white block pb-10 xl:pb-[120px] 2xl:pb-[140px] 3xl:pb-[120px] pt-[15px] xl:pt-[60px] 2xl:pt-[70px] 3xl:pt-[60px]">
      <div className="container">
        <Heading
          as="h2"
          size="h1"
          className="text-center text-[#06B5B9] mb-3 xl:mb-15 2xl:mb-17 3xl:mb-25"
        >
          {parse(data?.title)}
        </Heading>

        <div className="flex flex-wrap -mx-2 xl:-mx-3 2xl:-mx-4 3xl:-mx-4.5 [&>div]:p-2 xl:[&>div]:p-3 2xl:[&>div]:p-4 3xl:[&>div]:p-4.5">

          {data?.items?.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <div className="w-full h-full overflow-hidden bg-[#F8FAFA] p-6 xl:p-8 2xl:p-10 3xl:p-12 rounded-[20px] hover:bg-[#E6F8F8] transition-all duration-500 ease-in-out">
                <Text
                  as="h3"
                  size="p2"
                  className="font-semibold text-[#06B5B9] mb-3 xl:mb-4"
                >
                  {parse(item?.title)}
                </Text>
                <div
                  className="typography [--text-color:#121212] [&_p]:mt-0 [&_ul]:p-0 [&_ul>li]:list-none"
                  dir="ltr"
                >
                  {parse(item?.description)}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section >
  );
}