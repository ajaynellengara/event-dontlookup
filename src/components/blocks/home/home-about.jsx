import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { cn } from "@/lib/utils";
import { Heading, Text } from "@/components/utils/typography";

export default function HomeAbout({ data, locale }) {
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[40px] xl:py-[100px] 2xl:py-[120px] bg-[#f4f4f4] overflow-hidden">
      <div className="container">
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

          <div className="w-full sm:w-5/12">
            <div className="w-full max-w-[300px] bg-gray-200 mx-auto mask-[url(/images/icon-brand.svg)] mask-center mask-contain mask-no-repeat">
              <Image
                src={data?.media_path}
                alt={locale == "ar" ? data?.media_alt_ar : data?.media_alt}
                width={308}
                height={517}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full sm:w-3/12">
            {data?.mission && <SubItems data={data?.mission} locale={locale} />}
            {data?.vision && <SubItems data={data?.vision} locale={locale} />}
            {data?.sister_concern && (
              <SubItems data={data?.sister_concern} locale={locale} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SubItems({ data, locale }) {
  return (
    <div>
      <Heading
        as="h6"
        size="h7"
        className="font-medium text-[#1e1e1e] flex items-center gap-x-4 mb-1 xl:mb-2"
      >
        {parse(locale == "ar" ? data?.title_ar : data?.title)}
        {data?.logo_path && (
          <Image
            src={data?.logo_path}
            alt={locale == "ar" ? data?.logo_alt_ar : data?.logo_alt}
            width={52}
            height={27}
            className="w-[40px] xl:w-[50px]"
          />
        )}
      </Heading>
      <Text
        as="div"
        size="p1"
        className="line-clamp-3 text-black mb-4 xl:mb-8 2xl:mb-10"
      >
        {parse(locale == "ar" ? "data?.description_ar" : "data?.description")}
      </Text>
    </div>
  );
}
