
import { Heading, Text } from "@/components/utils/typography";
import parse from "html-react-parser";


export default function EventsInfo({ data }) {

  return (
    <section className="w-full h-auto bg-[#121212] block py-8 sm:py-10 md:py-16 lg:py-24 xl:py-32 2xl:py-36 3xl:py-44">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-6/12 ">
            <div className="w-full">
              <Heading
                as="h2"
                size="h2"
                className="font-normal text-white mb-2 sm:mb-0"
              >
                {parse(data?.title)}
              </Heading>
            </div>
          </div>

          <div className="w-full sm:w-6/12">
            <div className="w-full">

              <Text
                as="div"
                size="p1"
                className="text-white my-2 [&_p]:mb-4 md:[&_p]:mb-5 lg:[&_p]:mb-6 xl:[&_p]:mb-6 2xl:[&_p]:mb-7 3xl:[&_p]:mb-8"
              >
                {parse(data?.description)}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}