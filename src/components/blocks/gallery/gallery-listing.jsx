"use client";
import { Heading, Text } from "@/components/utils/typography";
import parse from "html-react-parser";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function GalleryListing({ data = localData }) {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            // Your custom options
            infinite: true,
            parentEl: document.body,
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <section className="w-full h-auto bg-white block pb-10 xl:pb-[120px] 2xl:pb-[140px] 3xl:pb-[160px] ">
            <div className="container">
                <Breadcrumb
                    className="mb-10 xl:mb-[80px] 2xl:mb-[100px] 3xl:mb-[120px] mt-2 xl:mt-4"
                >
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/events/model-forward-live">Model Forward Live</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Gallery</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <Heading
                    as="h3"
                    size="h3"
                    className="xl:text-[36px] 2xl:text-[43px] 3xl:text-[54px] font-bold text-black flex items-center"
                >
                    <div className="w-6 xl:w-11 h-0.5 xl:h-1 bg-[#06B5B9] mx-2 lg:mx-4" />
                    {data?.title}
                </Heading>
                <div className="flex flex-wrap -mx-2 xl:-mx-3 2xl:-mx-3.5 3xl:-mx-4.5 [&>div]:px-2 xl:[&>div]:px-3 2xl:[&>div]:px-3.5 3xl:[&>div]:px-4.5">
                    {data?.galleryCategory?.map((category) => (
                        <div
                            key={category?.id}
                            className="w-full mt-10 xl:mt-20 2xl:mt-22 3xl:mt-24"
                        >
                            <Heading
                                as="h4"
                                size="h4"
                                className="font-semibold font-sora text-black mb-1 xl:mb-1.5 2xl:mb-2 3xl:mb-3"
                            >
                                {category?.title}
                            </Heading>
                            <Text
                                as="div"
                                size="p1"
                                className="font-sora text-black mb-4 xl:mb-6 2xl:mb-7 3xl:mb-8"
                            >
                                {parse(category?.description)}
                            </Text>
                            <div className="flex flex-wrap -mx-2 xl:-mx-3 2xl:-mx-3.5 3xl:-mx-4.5 [&>div]:p-2 xl:[&>div]:p-3 2xl:[&>div]:p-3.5 3xl:[&>div]:p-4.5">
                                {category?.items?.map((item) => (
                                    <div
                                        key={item?.id}
                                        className="w-1/2 sm:w-1/4 lg:w-1/6"
                                    >
                                        {category?.status === "upcoming" ? (
                                            <Skeleton className="w-full aspect-1080/1440 overflow-hidden border border-gray-100 block cursor-pointer bg-gray-200" title="Upcoming, Join the event.">
                                            </Skeleton>
                                        ) : (
                                            <a
                                                href={item?.media?.url}
                                                data-fancybox={`gallery-${category?.id}`}
                                                className={cn("w-full aspect-1080/1440 overflow-hidden border border-gray-100 block cursor-pointer")}>
                                                <Image
                                                    src={item?.media?.url}
                                                    alt={item?.media?.alt || "Gallery Image"}
                                                    width={1080}
                                                    height={1440}
                                                    className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
                                                />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}