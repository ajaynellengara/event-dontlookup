
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/utils/typography";

import parse from "html-react-parser";
import Link from "next/link";


export default function LandingFeaturedEvents({ data }) {


  return (
    <section className="w-full h-auto bg-[#121212] block">
      <div className="container">
        <div className="w-full h-[1px] bg-[#767676] mb-3 sm:mb-4 xl:mb-5 2xl:mb-6" />
        <div className="flex flex-wrap">
          <div className="w-full sm:w-4/12">
            <div className="w-full">
              <Heading
                as="div"
                size="h6"
                className="text-[#30C2C5] mb-1 xl:mb-1.5 2xl:mb-1.5"
              >
                {parse(data?.sub_title)}
              </Heading>
              <Text
                as="div"
                size="p1"
                className="text-white mb-3 xl:mb-5 2xl:mb-6"
              >
                {data?.description}
              </Text>
            </div>
          </div>

          <div className="w-full sm:w-7/12">
            <div className="flex flex-wrap -mx-1 xl:-mx-8 p-1 xl:p-8">
              {data?.items?.map((item, index) => (
                <div key={item?.id}>
                  <div className="w-full h-auto block">
                    <div className="w-full rounded-[10px] overflow-hidden mb-2">
                      <Image
                        src={item?.media?.url}
                        alt={item?.media?.alt}
                        width={268}
                        height={340}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="w-full">
                      <Image
                        src={item?.eventLogo}
                        alt={item?.title}
                        width={80}
                        height={15}
                        className="w-full max-w-[80px] h-auto object-contain mb-1"
                      />
                      <Heading
                        as="div"
                        size="h6"
                        className="text-white mb-1 xl:mb-1.5 2xl:mb-1.5"
                      >
                        {parse(item?.title)}
                      </Heading>
                      <Button
                        asChild
                      >
                        <Link href={`/events/${item?.slug}`}>
                          View More
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-[1px] bg-[#767676] mt-3 sm:mt-4 xl:mt-5 2xl:mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}