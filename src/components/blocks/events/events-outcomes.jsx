
import { Heading, Text } from "@/components/utils/typography";

import parse from "html-react-parser";
import Image from "next/image";


export default function EventsOutcomes({ data }) {


  return (
    <section className="w-full h-auto bg-[#121212] block pb-10 xl:pb-[120px] 2xl:pb-[140px] 3xl:pb-[120px] pt-[15px] xl:pt-[60px] 2xl:pt-[70px] 3xl:pt-[60px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4 xl:-mx-10 2xl:-mx-12.5 3xl:-mx-15 [&>div]:px-4 xl:[&>div]:px-10 2xl:[&>div]:px-12.5 3xl:[&>div]:px-15">
          <div className="w-full sm:w-6/12">
            <div className="w-full">
              <Heading
                as="h3"
                size="h3"
                className="xl:text-[48px] 2xl:text-[57px] 3xl:text-[72px] font-medium text-white xl:-mt-2 mb-3 xl:mb-5 2xl:mb-7 3xl:mb-10"
              >
                {parse(data?.title)}
              </Heading>
              <div className="w-full aspect-7/9 overflow-hidden">
                <Image
                  src={data?.media?.url}
                  alt={data?.media?.alt}
                  width={700}
                  height={900}
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-6/12 ">
            <Text
              as="div"
              size="p1"
              className="text-white"
            >
              {parse(data?.description)}
            </Text>
            {data?.items?.map((item) => (
              <div key={item?.id} className="group relative z-0">
                <Text
                  as="div"
                  size="p1"
                  className=" font-semibold text-white w-full p-[12px_15px] xl:p-[18px_22px] 2xl:p-[22px_26px] 3xl:p-[24px_30px] rounded-[10px] 2xl:rounded-[18px] my-5 2xl:my-6 3xl:my-7.5  bg-[#2F2E2E] group-hover:pl-10 transition-all duration-500 ease-in-out "
                >
                  {parse(item?.label)}
                </Text>
                <div className="w-2 h-2 rounded-full bg-[#06B5B9] absolute top-1/2 -translate-y-1/2 left-4 scale-0 group-hover:scale-100 group-hover:translate-x-2 transition-all duration-500 ease-in-out" />
                <div className="absolute -z-1 inset-0 bg-[#06B5B9] rounded-[10px] 2xl:rounded-[18px] group-hover:-translate-x-0.5 transition-all duration-500 ease-in-out" />
              </div>

            ))}
            <Text
              as="div"
              size="p1"
              className="text-white"
            >
              {parse(data?.longDescription)}
            </Text>
          </div>
        </div>
      </div>
    </section >
  );
}