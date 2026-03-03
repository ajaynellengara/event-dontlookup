"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Text } from "../utils/typography";

import dynamic from "next/dynamic";

const MediaQuery = dynamic(() => import("react-responsive"), {
    ssr: false,
});

export default function Footer({ footerData, locale }) {
    const [openSection, setOpenSection] = useState(null);
    const { socialLinks } = footerData;

    return (
        <footer className="w-full py-8 xl:pt-[70px] xl:pb-[20px] 2xl:pt-[100px] 2xl:pb-[30px] 3xl:pt-[135px] 3xl:pb-[40px] overflow-hidden bg-[#2d2d2d] relative z-1">
            <div className="container">
                <div className="flex flex-wrap -mx-1 sm:-mx-2 xl:-mx-3 [&>*]:p-1 sm:[&>*]:p-2 xl:[&>*]:px-3">
                    {footerData?.logoWhiteUrl && (
                        <div className="w-full lg:w-1/6 max-lg:hidden">
                            <Link
                                href={footerData?.slug}
                                className="w-[60px] lg:w-[70px] 2xl:w-[80px] 3xl:w-[100px] block"
                            >
                                <Image
                                    src={footerData?.logoWhiteUrl}
                                    alt={footerData?.name}
                                    width={186}
                                    height={58}
                                    className="w-full h-full block hover:scale-105 transition"
                                    unoptimized
                                />
                            </Link>
                        </div>
                    )}
                    {footerData?.navigations && (
                        footerData?.navigations?.map((item, index) => (
                            <div
                                key={"navigations" + index}
                                className="w-full lg:w-1/6">
                                <div className="w-full">
                                    <MediaQuery minWidth={1024}>
                                        <>
                                            <Text
                                                as="h6"
                                                size="p1"
                                                className="font-medium uppercase text-white mb-1 xl:mb-1 2xl:mb-2 3xl:mb-3"
                                            >
                                                {item?.title}
                                            </Text>
                                            <div className="">
                                                {item?.links?.map((item, index) => (
                                                    <div key={"navigationsLinks" + index}>
                                                        <Text
                                                            as="div"
                                                            size="p3"
                                                            className="font-normal text-[#a0a0a0] transition [&>a]:hover:text-[#30C2C5] my-0.5 xl:my-1.5"
                                                        >
                                                            <Link href={item?.href} target={item.external ? "_blank" : undefined}>{item?.label}</Link>
                                                        </Text>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    </MediaQuery>
                                    <MediaQuery maxWidth={1023}>
                                        <>
                                            <AccordionItem
                                                title={item?.title}
                                                section={item?.title}
                                                openSection={openSection}
                                                setOpenSection={setOpenSection}
                                            >
                                                {item?.links?.map((item, index) => (
                                                    <div key={"navigationsLinks" + index}>
                                                        <Text
                                                            as="div"
                                                            size="p3"
                                                            className="font-normal text-[#a0a0a0] transition [&>a]:hover:text-[#30C2C5] my-0.5 xl:my-1"
                                                        >
                                                            <Link href={item?.href} target={item.external ? "_blank" : undefined}>{item?.label}</Link>
                                                        </Text>
                                                    </div>
                                                ))}
                                            </AccordionItem>
                                        </>
                                    </MediaQuery>
                                </div>
                            </div>
                        ))
                    )}

                </div>

                <hr className="border-[#414141] my-3 lg:my-6 2xl:my-8 3xl:my-10" />

                <div className="flex flex-wrap -mx-1 sm:-mx-2 xl:-mx-3 [&>*]:p-1 sm:[&>*]:p-2 xl:[&>*]:px-3">
                    <div className="w-full lg:w-1/6">
                        <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 xl:gap-x-3 2xl:gap-x-4 3xl:gap-x-5 max-lg:mb-5">
                            {socialLinks?.map((item, index) => (
                                <div key={"socialLinkData" + index}>
                                    <Button variant="link" size="none" asChild>
                                        <a href={item?.slug} target="_blank">
                                            <Image
                                                src={item?.media?.url}
                                                alt={item?.media?.alt}
                                                width={22}
                                                height={22}
                                                className="w-4 lg:w-3.5 2xl:w-4 3xl:w-5.5 aspect-square block hover:scale-110 transition"
                                                unoptimized
                                            />
                                        </a>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-5/6">
                        <div className="flex flex-wrap justify-center lg:justify-between gap-y-2 gap-x-4 lg:gap-x-3 2xl:gap-x-4 3xl:gap-x-5">
                            {footerData?.quickLinks?.map((item, index) => (
                                <div key={"quickLinks" + index}>
                                    <Text
                                        as="div"
                                        size="p3"
                                        className="max-lg:text-[14px] max-lg:text-center font-normal text-white transition [&>a]:hover:text-[#30C2C5] my-0.5 xl:my-1"
                                    >
                                        <Link href={item?.href} target={item.external ? "_blank" : undefined}>{item?.label}</Link>
                                    </Text>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <hr className="border-[#414141] my-3 lg:my-6 2xl:my-8 3xl:my-10" />

                <div className="flex flex-wrap items-center -mx-1 sm:-mx-2 xl:-mx-3 [&>*]:p-1 sm:[&>*]:p-2 xl:[&>*]:px-3 mt-5 lg:mt-5 2xl:mt-6 3xl:mt-7 max-lg:flex-col-reverse">
                    {/* <div className="w-full lg:w-1/6">
                        <a href={footerData?.partnersMedia?.slug}
                            className="w-15 lg:w-14.5 2xl:w-18 3xl:w-22.5 h-auto max-lg:mx-auto block hover:scale-110 transition"
                            target="_blank">
                            <Image
                                src={footerData?.partnersMedia?.url}
                                alt={footerData?.partnersMedia?.alt}
                                width={70}
                                height={34}
                                className="w-full h-full block hover:scale-110 transition"
                                unoptimized
                            />
                        </a>
                    </div> */}

                    <div className="w-full mb-5 lg:mb-5 2xl:mb-6 3xl:mb-7">
                        <div className="flex flex-wrap items-center justify-center lg:justify-between -mx-2 sm:-mx-2 xl:-mx-3 [&>*]:p-2 sm:[&>*]:p-2 xl:[&>*]:px-3 not:hover:grayscale">
                            {footerData?.partners?.map((item) => (
                                <div key={item?.id}
                                >
                                    <a href={item?.slug}
                                        className="w-12 sm:w-14 lg:w-16 2xl:w-20 3xl:w-22 h-auto aspect-2/1 block hover:scale-110 transition hover:grayscale-0 "
                                        target="_blank">
                                        <Image
                                            src={item?.media?.url}
                                            alt={item?.media?.alt}
                                            width={80}
                                            height={80}
                                            className="w-full h-full block hover:scale-120 transition object-contain"
                                            unoptimized
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full">
                        <div>
                            <Text
                                as="div"
                                size="p3"
                                className="font-normal text-center text-[#a0a0a0] my-0.5 xl:my-1"
                            >
                                {footerData?.copyright}
                            </Text>
                            <Text
                                as="div"
                                size="p3"
                                className="font-normal text-center text-[#a0a0a0] my-0.5 xl:my-1 max-lg:mb-5"
                            >
                                © {new Date().getFullYear()}, {footerData?.designedBy}
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Accordion Item Component
function AccordionItem({
    title,
    children,
    section,
    openSection,
    setOpenSection,
}) {
    const isOpen = openSection === section;

    const toggleAccordion = () => {
        setOpenSection(isOpen ? null : section);
    };

    return (
        <div className="">
            <button
                onClick={toggleAccordion}
                className="w-full flex items-center justify-between pt-1 text-start"
            >
                <Text
                    as="h6"
                    size="none"
                    className="text-[13px] leading-tight font-medium uppercase text-white mb-1 xl:mb-1 2xl:mb-2 3xl:mb-3"
                >
                    {title}
                </Text>
                {!isOpen ? (
                    <Plus className={cn(
                        "w-4 h-4 text-white transition-transform duration-200",
                        isOpen && "rotate-180",
                    )} />
                ) : (
                    <Minus className={cn(
                        "w-4 h-4 text-white transition-transform duration-200",
                        isOpen && "rotate-180",
                    )} />
                )}
            </button>

            <div
                className={cn(
                    "overflow-hidden transition-all duration-300",
                    isOpen ? "max-h-[500px] my-2" : "max-h-0",
                )}
            >
                {children}
            </div>
        </div>
    );
}