import { Heading, Text } from "@/components/utils/typography";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";

export default function ApproachCard({ data, locale, index }) {
  return (
    <div className="group w-full h-full min-h-[420px] relative z-0 transition-transform duration-300 ease-out hover:scale-y-[1.1]">
      <div className="w-full h-50 2xl:h-59 bg-[url('/images/approach-bg.png')] bg-cover bg-no-repeat absolute z-1 inset-0 top-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100 " />
      <div
        className={cn(
          "group w-full h-full px-7 px-6 sm:py-10  overflow-hidden flex flex-wrap justify-between relative",
          index % 2 === 0 ? "bg-[#FFFBF2]" : "bg-[#FAFAFA]",
        )}
      >
        <div
          className={cn(
            "text-[64px] sm:text-[80px] font-light leading-none opacity-50 bg-clip-text text-transparent",
            locale === "ar" ? "right-4" : "left-4",
            index % 2 === 0
              ? "opacity-50 bg-[linear-gradient(180deg,#FFF7E6_-32.72%,#FFDB8B_86.61%)]"
              : "opacity-50 bg-[linear-gradient(180deg,#FAFAFA_-32.72%,#DEDDDC_86.61%)]",
          )}
        >
          {String(data?.order ?? index + 1).padStart(2, "0")}
        </div>

        <div className="relative z-10 pt-20 sm:pt-24">
          <Heading
            as="div"
            size="h6"
            className="text-[14px] 2xl:text-[17px] 3xl:text-[22px] font-medium mb-5"
          >
            {parse(locale === "ar" ? data?.title_ar || "" : data?.title || "")}
          </Heading>

          <Text as="p" size="p1" className="text-[#1E1E1E]">
            {parse(
              locale === "ar"
                ? data?.description_ar || ""
                : data?.description || "",
            )}
          </Text>
        </div>
      </div>
    </div>
  );
}
