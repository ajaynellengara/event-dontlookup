import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ data, index, locale }) {
  const isArabic = locale === "ar";
  return (
    <div
      className={cn(
        "group relative h-full w-full bg-[#FAFAFA] overflow-hidden rounded-md p-6 sm:p-[35px_35px_50px] 2xl:p-[45px_45px_80px] transition-colors duration-300",
        index % 2 === 0 ? "hover:bg-[#FFFBF2]" : "bg-[#FAFAFA]",
      )}
    >
      {/* Show background image ONLY for even items */}
      {index % 2 !== 0 && (
        <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Image
            src="/images/service-card-bg.png"
            alt={data?.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="flex items-start justify-between">
        <div className="w-[40px] xl:w-[56px] 2xl:w-[80px] 3xl:w-[120px] h-[40px] xl:h-[56px] 2xl:h-[80px] 3xl:h-[120px]">
          <Image
            src={data?.icon || "/images/icon-placeholder.svg"}
            alt={data?.title}
            width={56}
            height={56}
            className="h-full w-full object-contain"
          />
        </div>

        <Link
          href={data?.slug ?? "#"}
          className="rounded-[10px] border border-[#E2C2A4] px-7 py-2 text-xs font-medium text-black transition hover:bg-black hover:text-white"
        >
          Know More
        </Link>
      </div>

      <div className="mt-4 xl:mt-6 2xl:mt-8 max-w-[80%] 2xl:max-w-[52%]">
        <h3 className="mb-4 text-xl font-semibold text-black">
          {parse(locale === "ar" ? data?.title_ar : data?.title)}
        </h3>

        <p className="max-w-md text-sm leading-relaxed text-gray-600">
          {parse(locale == "ar" ? data?.description_ar : data?.description)}
        </p>
      </div>
    </div>
  );
}
