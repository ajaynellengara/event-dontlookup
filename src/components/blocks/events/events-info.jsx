
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/utils/typography";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";

export default function EventsInfo({ data }) {
  return (
    <section id="events-info" className="w-full h-auto bg-[#121212] block py-8 sm:py-10 md:py-16 lg:py-24 xl:py-32 2xl:py-36 3xl:py-44">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full mb-[60px] xl:mb-[180px] 2xl:mb-[200px] 3xl:mb-[240px]">
            <Heading
              as="h2"
              size="h3"
              className="font-extralight font-sora text-[#D6A96F] [&_span]:text-[#C58330] mb-2 sm:mb-0"
            >
              {parse(data?.description)}
            </Heading>
          </div>

          <div className="w-full sm:w-7/12 ">
            <div className="w-full">
              <div
                className={cn("text-[68px] sm:text-[100px] xl:text-[128px] 2xl:text-[150px] 3xl:text-[192px] font-normal uppercase font-big-shoulders -tracking-[0.25rem] scale-y-110 text-white mb-2 xl:mb-4 3xl:mb-6", data?.eventStatus === "finished" ? "text-[#008dd2]" : data?.eventStatus === "upcoming" ? "text-white/40" : "text-white")}
              >
                {data?.date ? parse(data?.date) : (
                  <>
                    DATE TBA <span className="text-[16px] sm:text-[20px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[28px] font-sans tracking-normal normal-case inline-block max-w-[200px] sm:max-w-[250px] xl:max-w-[300px] align-middle opacity-80 ml-2 sm:ml-4 leading-tight scale-y-90">Click <b>"Notify Me"</b> and download the mobile application for updates</span>
                  </>
                )}
              </div>
              <div className="w-full pl-4 xl:pl-6 2xl:pl-6 3xl:pl-6 border-l border-white mx-1 xl:mx-2">

                {data?.location &&
                  <EventInfoItem icon="/images/icon-events-loc.png" label={data?.location} />}

                {data?.dateInfo && <EventInfoItem icon="/images/icon-events-cal.png" label={data?.dateInfo} />}

                {data?.duration && <EventInfoItem icon="/images/icon-events-time.png" label={data?.duration} />}

              </div>
            </div>
          </div>

          <div className="w-full sm:w-5/12">
            <div className="w-full">

              <Text
                as="div"
                size="p1"
                className="text-white my-2 [&_p]:mb-4 md:[&_p]:mb-5 lg:[&_p]:mb-6 xl:[&_p]:mb-6 2xl:[&_p]:mb-7 3xl:[&_p]:mb-8 [&_span]:text-[#AEAFAF]"
              >
                {parse(data?.longDescription)}
              </Text>

              <Heading
                as="h2"
                size="h3"
                className="font-normal font-sora text-[#99E1E2] mb-2 xl:mb-4 2xl:mb-5"
              >
                {parse(data?.price)}
              </Heading>
              <HoverBorderGradient
                as="button"
                className="p-0.5"
                containerClassName="rounded-lg"
                duration="1"
              >
                <Button
                  size="lg"
                  variant={"default"}
                  className="max-w-[220px] xl:max-w-[268px] 2xl:max-w-[320px] 3xl:max-w-[400px]"
                  // onClick={() => setIsModalOpen(true)}
                  title="Download the mobile application for further information"
                  asChild
                >
                  <Link href={data?.slug} target="_blank">
                    {data?.buttonLabel || (data?.eventStatus === "finished" ? "View Event" : data?.eventStatus === "upcoming" ? "Notify Me" : "Book Now")}
                  </Link>
                </Button>
              </HoverBorderGradient>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

function EventInfoItem({ icon, label }) {
  return (
    <Heading
      as="div"
      size="h5"
      className="font-sora font-normal text-white flex gap-x-2 xl:gap-x-5 mb-4 xl:mb-6"
    >
      <Image
        src={icon}
        alt={label}
        width={30}
        height={30}
        className="w-3 xl:w-4.5 2xl:w-6 3xl:w-7 object-contain"
      />
      {parse(label)}
    </Heading>
  )
}