
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/utils/typography";

import parse from "html-react-parser";
import Link from "next/link";
import RevealAnimation from "@/components/utils/reveal-animation";


export default function LandingDubaiStage({ data }) {


  return (
    <section className="w-full h-auto bg-[#121212] block py-10 sm:py-14 xl:py-35">

      <div className="container">

        <RevealAnimation>
          <Heading
            as="h2"
            size="h1"
            className="sm:text-center font-medium text-[#06B5B9] mb-1 xl:mb-15"
          >
            {parse(data?.title)}
          </Heading>
          <div className="flex flex-wrap sm:-mx-2 xl:-mx-5 sm:[&>div]:px-2 xl:[&>div]:px-5">
            <div className="w-full sm:w-6/12 xl:border-r border-[#767676]">
              <div className="w-full">

                <div
                  className="typography [h3]:font-[var(--font-big-shoulders)] [--text-color:#fff]"
                  dir="ltr"
                >
                  {parse(data?.description)}
                </div>
              </div>
            </div>

            <div className="w-full sm:w-6/12">
              <div className="w-full">

                <div
                  className="typography [--text-color:#fff]"
                  dir="ltr"
                >
                  {parse(data?.longDescription)}
                </div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}