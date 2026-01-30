"use client";

import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Heading, Text } from "../utils/typography";

import dynamic from "next/dynamic";

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

export default function Footer({ footerData, socialLinkData, locale }) {
  return (
    <footer className="w-full py-[30px_20px] xl:py-[60px_30px] 2xl:py-[60px_40px] overflow-hidden bg-[#fffbf2] relative z-0">
      <div className="container">
        <div className="flex flex-wrap -mx-2.5 sm:-mx-3 xl:-mx-5 2xl:-mx-7.5 [&>*]:p-2.5 sm:[&>*]:p-3 xl:[&>*]:p-5 2xl:[&>*]:p-7.5">
          <div className="w-full lg:w-[24%] 2xl:w-[23.5%]">
            {footerData?.quick_link_navigation && (
              <div className="w-full">
                <MediaQuery minWidth={1024}>
                  <>
                    <Heading
                      as="h6"
                      size="h7"
                      className="font-medium text-[#c09c86] mb-1 xl:mb-2.5 2xl:mb-4"
                    >
                      {locale == "ar" ? "QUICK LINKS ar" : "QUICK LINKS"}
                    </Heading>
                    {footerData?.quick_link_navigation?.map((item, index) => (
                      <div key={"quick_link_navigation" + index}>
                        <Heading
                          as="div"
                          size="h6"
                          className="font-normal text-[#1e1e1e] transition [&>a]:hover:text-[#cda278] mb-1 xl:mb-1.5"
                        >
                          <Link href={`/${locale}${item?.link}`}>
                            {locale == "ar" ? item?.label_ar : item?.label}
                          </Link>
                        </Heading>
                      </div>
                    ))}
                  </>
                </MediaQuery>
                <MediaQuery maxWidth={1023}>
                  <AccordionItem title="Quick links" section="quick">
                    {footerData?.quick_link_navigation?.map((item, index) => (
                      <div key={"quick_link_navigation" + index}>
                        <Heading
                          as="div"
                          size="h6"
                          className="font-normal text-[#1e1e1e] transition [&>a]:hover:text-[#cda278] mb-2"
                        >
                          <Link href={`/${locale}${item?.link}`}>
                            {locale == "ar" ? item?.label_ar : item?.label}
                          </Link>
                        </Heading>
                      </div>
                    ))}
                  </AccordionItem>
                </MediaQuery>
              </div>
            )}
          </div>

          <div className="w-full lg:w-[26%] 2xl:w-[27%]">
            {footerData?.services_navigation && (
              <div className="w-full">
                <MediaQuery minWidth={1024}>
                  <>
                    <Heading
                      as="h6"
                      size="h7"
                      className="font-medium text-[#c09c86] mb-1 xl:mb-2.5 2xl:mb-4"
                    >
                      {locale == "ar" ? "SERVICES ar" : "SERVICES"}
                    </Heading>
                    {footerData?.services_navigation?.map((item, index) => (
                      <div key={"services_navigation" + index}>
                        <Heading
                          as="div"
                          size="h6"
                          className="font-normal text-[#1e1e1e] transition [&>a]:hover:text-[#cda278] mb-1 xl:mb-1.5"
                        >
                          <Link href={`/${locale}${item?.link}`}>
                            {locale == "ar" ? item?.label_ar : item?.label}
                          </Link>
                        </Heading>
                      </div>
                    ))}
                  </>
                </MediaQuery>
                <MediaQuery maxWidth={1023}>
                  <AccordionItem title="Shop" section="shop">
                    {footerData?.shop_navigation?.map((item, index) => (
                      <div key={"shop_navigation" + index}>
                        <Heading
                          as="div"
                          size="h6"
                          className="font-normal text-[#1e1e1e] transition [&>a]:hover:text-[#cda278] mb-2"
                        >
                          <Link href={`/${locale}${item?.link}`}>
                            {locale == "ar" ? item?.label_ar : item?.label}
                          </Link>
                        </Heading>
                      </div>
                    ))}
                  </AccordionItem>
                </MediaQuery>
              </div>
            )}

            {socialLinkData && (
              <div className="mt-3 xl:mt-5">
                <Heading
                  as="h6"
                  size="h7"
                  className="font-medium text-[#c09c86] mb-1 xl:mb-2.5 2xl:mb-4"
                >
                  {locale == "ar" ? "FOLLOW US ar" : "FOLLOW US"}
                </Heading>
                <div className="flex flex-wrap items-center gap-x-3 xl:gap-x-5">
                  {socialLinkData?.map((item, index) => (
                    <div key={"social_link" + index}>
                      <Button variant="link" size="none" asChild>
                        <a href={item?.link || "#"} target="_blank">
                          <Image
                            src={item?.media?.media_path}
                            alt={item?.media?.media_alt}
                            width={12}
                            height={12}
                            className="w-2.5 xl:w-3 2xl:w-5 aspect-square block hover:scale-110 transition"
                            unoptimized
                          />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-[24%] 2xl:w-[23%]">
            <Link
              href={`/${locale}/${footerData?.slug}`}
              className="w-[120px] xl:w-[160px] 2xl:w-[200px] block"
            >
              <Image
                src={footerData?.logoUrl}
                alt={locale === "ar" ? footerData?.name_ar : footerData?.name}
                width={290}
                height={260}
                className="w-full h-full block hover:scale-105 transition"
                unoptimized
              />
            </Link>
          </div>

          <div className="w-full lg:w-[26%] 2xl:w-[24%]">
            {footerData?.address && (
              <div>
                <Heading
                  as="h6"
                  size="h7"
                  className="font-medium text-[#c09c86] mb-1 xl:mb-2.5 2xl:mb-4"
                >
                  {locale == "ar" ? "CONTACT US ar" : "CONTACT US"}
                </Heading>
                <Heading
                  as="div"
                  size="h6"
                  className="font-normal text-[#1e1e1e] transition [&>a]:hover:text-[#cda278] mb-4 xl:mb-6"
                >
                  {parse(
                    locale == "ar"
                      ? footerData?.address_ar
                      : footerData?.address,
                  )}
                </Heading>
              </div>
            )}
            {footerData?.phone && (
              <div className="flex items-center gap-3 mb-1.5 xl:mb-2.5">
                <div className="w-3 xl:w-5">
                  <Image
                    src={"/images/footer-telephone.svg"}
                    alt={
                      locale === "ar" ? footerData?.name_ar : footerData?.name
                    }
                    width={20}
                    height={20}
                    className="w-full h-full block"
                    unoptimized
                  />
                </div>
                <Heading
                  as="div"
                  size="h6"
                  className="font-normal text-[#1e1e1e] flex-1 transition [&>a]:hover:text-[#cda278]"
                >
                  {footerData?.phone.map((phone, index) => (
                    <a key={"phone" + index} href={`tel:${phone}`}>
                      {phone}{" "}
                    </a>
                  ))}
                </Heading>
              </div>
            )}
            {footerData?.email && (
              <div className="flex flex-wrap items-center gap-3 mb-2.5 xl:mb-3.5">
                <div className="w-3 xl:w-5">
                  <Image
                    src={"/images/footer-mail.svg"}
                    alt={
                      locale === "ar" ? footerData?.name_ar : footerData?.name
                    }
                    width={20}
                    height={20}
                    className="w-full h-full block"
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <Heading
                    as="div"
                    size="h6"
                    className="font-normal text-[#1e1e1e] transition [&>a]:hover:text-[#cda278]"
                  >
                    {footerData?.email.map((email, index) => (
                      <a key={"email" + index} href={`mailto:${email}`}>
                        {email}{" "}
                      </a>
                    ))}
                  </Heading>
                </div>
              </div>
            )}
            {footerData?.location_map_link && (
              <Button
                size="lg"
                variant={"outline"}
                className="text-[#cda278] min-w-[100px] xl:min-w-[100px] 2xl:min-w-[130px]"
                asChild
              >
                <a href={footerData?.location_map_link} target="_blank">
                  <Image
                    src={"/images/footer-map.svg"}
                    alt={
                      locale === "ar" ? footerData?.name_ar : footerData?.name
                    }
                    width={20}
                    height={20}
                    className="w-3 xl:w-5 block"
                    unoptimized
                  />
                  {locale == "ar" ? "Locate on Map ar" : "Locate on Map"}
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center sm:justify-between  gap-x-5 mt-6 xl:mt-8 2xl:mt-10">
          <Text as="div" size="p2" className="tracking-wide text-[#1e1e1e]">
            {parse(footerData?.copyright)}
          </Text>
          <hr className="border-[#eadcce] flex-1" />
          <Text
            as="div"
            size="p2"
            className="whitespace-nowrap text-end tracking-wide text-[#1e1e1e] flex"
          >
            {locale == "ar" ? "Designed By: ar" : "Designed By:"}{" "}
            <a href="https://www.intersmartsolution.com/" target="_blank">
              <Image
                src="/images/footer-author.svg"
                alt="footer-author"
                width={100}
                height={20}
                className="w-[50px] xl:w-[70px] 2xl:w-[85px] inline ml-1"
                unoptimized
              />
            </a>
          </Text>
        </div>
      </div>
    </footer>
  );
}

// Accordion Item Component
function AccordionItem({ title, children, section }) {
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const isOpen = openAccordion === section;

  return (
    <div className="border-t border-[#333]">
      <button
        onClick={() => toggleAccordion(section)}
        className="w-full flex items-center justify-between pt-4 text-start"
      >
        <Heading
          as="h6"
          size="none"
          className="text-[14px] leading-none font-normal text-[#1e1e1e]"
        >
          {title}
        </Heading>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-[#1e1e1e] transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[500px] mt-5" : "max-h-0",
        )}
      >
        {children}
      </div>
    </div>
  );
}
