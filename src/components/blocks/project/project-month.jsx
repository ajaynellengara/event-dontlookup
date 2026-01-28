import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { cn } from "@/lib/utils";
import { Heading, Text } from "@/components/utils/typography";

export default function ProjectMonth() {
  return (
    <section className="project-month">
      <div className="container">
      <div className="max-w-[1022px] mx-auto text-center">
        <Heading as="h2" size="h2" className="mb-[19px] text-[#1e1e1e] flex items-center">
          Projects of the Month
        </Heading>
        <Text as="div" size="p1" className="font-light text-black mb-4 xl:mb-8 2xl:mb-10">
          A 45-story luxury residential tower featuring sustainable design
          elements, panoramic views, and world-class amenities. This landmark
          project redefines modern urban living with its innovative
          architectural approach and commitment to environmental excellence.
        </Text>
        </div>
      </div>
    </section>
  );
}
