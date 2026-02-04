"use client";
import Image from "next/image";
export default function ProjectImage({ data, locale }) {
  return (
    <section className="w-full h-auto block">
      <Image
        src={"/images/st4.png"}
        alt={"project premium"}
        width={1920}
        height={736}
        className="w-full h-full object-cover"
      />
    </section>
  );
}
