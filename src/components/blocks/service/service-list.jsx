import Image from "next/image";
import parse from "html-react-parser";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/utils/typography";
export default function ServiceList({ data, locale }) {
  return (
    <section className="w-full h-auto block bg-white relative z-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap sm:items-center -mx-1 [&>*]:p-1">
          <div className="w-full sm:w-4/12">
            <Heading
              as="div"
              size="h6"
              className="text-[#1e1e1e] flex items-center gap-x-4 mb-2 xl:mb-4 2xl:mb-6"
            >
              <span className="size-2 rounded-full bg-[#c09c86] inline-block" />
              {parse(locale == "ar" ? data?.sub_title_ar : data?.sub_title)}
            </Heading>
            <Heading
              as="h2"
              size="h3"
              className="font-normal text-[#1e1e1e] mb-2 xl:mb-4 2xl:mb-6"
            >
              {parse(locale == "ar" ? data?.title_ar : data?.title)}
              <span
                className={cn(
                  "w-1.5 2xl:w-2 aspect-square rounded-full bg-[#f17423] inline-block translate-x-1 xl:translate-x-2 ",
                  locale === "ar"
                    ? "-translate-x-1 xl:-translate-x-2 "
                    : "translate-x-1 xl:translate-x-2 ",
                )}
              />
            </Heading>
            <Text
              as="div"
              size="p1"
              className="line-clamp-1 font-light text-black mb-4 xl:mb-8 2xl:mb-10"
            >
              {parse(locale == "ar" ? data?.description_ar : data?.description)}
            </Text>
            <Button
              variant={"black"}
              className="min-w-[100px] sm:min-w-[120px] xl:min-w-[135px] 2xl:min-w-40"
              asChild
            >
              <Link href={"/about"}>
                {locale == "ar" ? "اعرف المزيد" : "Know More"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
