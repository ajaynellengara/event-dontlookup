"use client";

import { useTransition, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import dynamic from "next/dynamic";
import { ChevronDown } from "lucide-react";

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
};

export default function Header({ headerData, navigationData, locale }) {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [bg, setBg] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(true);
  const [isPending, startTransition] = useTransition();
  const [headerHover, setHeaderHover] = useState(true);
  const [toggle, setToggle] = useState(false);

  const pathname = usePathname();

  const router = useRouter();

  // Close mobile menu on route change
  useEffect(() => setSheetOpen(false), [pathname]);

  // Handle scroll visibility + background
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious();
      const atTop = scrollYProgress.get() < 0.05;
      setVisible(atTop || direction < 0);
      setBg(!atTop && direction < 0);
    }
  });

  const handleNavigationLinkClick = () => setSheetOpen(false);

  const switchLocale = (newLocale) => {
    if (newLocale === locale) return;

    // Remove current locale from pathname and add new one
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = newLocale; // Replace locale segment
    const newPath = `/${segments.join("/")}`;

    // Set cookie for persistence
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    // Use transition for smooth loading state
    startTransition(() => {
      router.push(newPath);
      setIsOpen(false);
    });
  };

  const showDarkHeader = headerHover === true || pathname !== `/${locale}`;

  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        onMouseEnter={() => setHeaderHover(true)}
        onMouseLeave={() => setHeaderHover(false)}
        className={cn(
          "w-full h-(--header-y) z-10 top-0 inset-x-0 flex items-center bg-linear-to-b from-black/20 to-transparent transition-background duration-300",
          bg
            ? "border-b border-white/10 shadow-[0px_10px_4px_0px_rgba(0,0,0,0.1)] backdrop-blur-sm fixed"
            : "absolute",
          // bg && (pathname === `/${locale}` ? "bg-black/90" : "bg-white/90"),
          // pathname === `/${locale}`
          //   ? "bg-linear-to-b from-black/20 to-transparent"
          //   : "bg-linear-to-b from-white/20 to-transparent",
          headerHover
            ? "bg-white from-white to-white"
            : bg
              ? showDarkHeader
                ? "bg-white/90"
                : "bg-black/90"
              : showDarkHeader
                ? "bg-linear-to-b from-white/20 to-white"
                : "bg-transparent",
        )}
      >
        <div className="container">
          <div className="flex justify-end items-center gap-x-3 lg:gap-x-8 relative z-0">
            {/* Brand Logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <div className="w-[80px] sm:w-[75px] 2xl:w-[90px] 3xl:w-[110px]">
                <Link href={`/${locale}${headerData?.slug}`}>
                  <Image
                    src={
                      showDarkHeader
                        ? headerData?.logoUrl
                        : headerData?.logoWhiteUrl
                    }
                    alt={headerData?.name}
                    width={110}
                    height={120}
                    unoptimized
                    className="w-full h-full block object-contain"
                    priority
                  />
                </Link>
              </div>
            </div>

            <div
              className={cn(
                "flex items-center justify-end lg:justify-end transition gap-x-3.75 sm:gap-x-5 lg:gap-x-7.5 2xl:gap-x-10",
              )}
            >
              {locale == "ar" ? (
                <Button
                  variant="none"
                  onClick={() => switchLocale("ar")}
                  className={cn(
                    "text-[12px] leading-none font-normal uppercase p-0! gap-1",
                    showDarkHeader ? "text-[#282828]" : "text-white",
                  )}
                >
                  English
                  <ChevronDown className="text-[10px]" />
                </Button>
              ) : (
                <Button
                  variant="none"
                  onClick={() => switchLocale("en")}
                  className={cn(
                    "text-[12px] leading-none font-normal uppercase font-cairo p-0! gap-1",
                    showDarkHeader ? "text-[#282828]" : "text-white",
                  )}
                >
                  العربية
                  <ChevronDown className="text-[10px]" />
                </Button>
              )}
              <Button
                variant="none"
                size="none"
                className={cn(
                  "text-[12px] leading-none font-normal uppercase",
                  showDarkHeader ? "text-black" : "text-white",
                )}
                asChild
              >
                <Link href={`/${locale}/contact`}>Contact Us</Link>
              </Button>

              <MediaQuery minWidth={1024}>
                <Button
                  variant="none"
                  size="none"
                  onClick={() => setToggle((prev) => !prev)}
                  className="flex flex-col items-end gap-1.5"
                >
                  {[1, 2, 3].map((item) => (
                    <span
                      key={item}
                      className={cn(
                        "h-0.5 rounded-full transition-all duration-300 ease-in-out origin-center",
                        item === 1 && "w-8",
                        item === 2 && "w-6",
                        item === 3 && "w-8",
                        showDarkHeader ? "bg-black" : "bg-white",

                        // OPEN STATE
                        toggle && item === 1 && "rotate-45 translate-y-2",
                        toggle && item === 2 && "opacity-0 translate-x-2",
                        toggle && item === 3 && "-rotate-45 -translate-y-2",
                      )}
                    />
                  ))}
                </Button>

                {/* <HeaderNavigation
                  locale={locale}
                  pathname={pathname}
                  menuItems={navigationData}
                  onNavigationClick={handleNavigationLinkClick}
                  showDarkHeader={showDarkHeader}
                /> */}
              </MediaQuery>
            </div>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}
