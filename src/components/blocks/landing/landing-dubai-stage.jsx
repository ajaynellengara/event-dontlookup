
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/utils/typography";

import parse from "html-react-parser";
import Link from "next/link";


export default function LandingDubaiStage({ data }) {


  return (
    <section className="w-full h-auto bg-[#121212] block">

      <div className="container">

        <Heading
          as="div"
          size="h6"
          className="text-[#06B5B9] mb-1 xl:mb-1.5 2xl:mb-1.5"
        >
          {parse(data?.title)}
        </Heading>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-5/12">
            <div className="w-full">
              <Text
                as="div"
                size="p1"
                className="text-white mb-3 xl:mb-5 2xl:mb-6"
              >
                {parse(data?.description)}
              </Text>
            </div>
          </div>

          <div className="w-full sm:w-7/12">
            <div className="w-full">
              <Text
                as="div"
                size="p1"
                className="text-white mb-3 xl:mb-5 2xl:mb-6"
              >
                {parse(data?.longDescription)}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}