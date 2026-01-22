import { Geist, Poppins } from "next/font/google";

import localFont from "next/font/local";
import { Cairo } from "next/font/google";
import "./../globals.css";
import { cn } from "@/lib/utils";
import { locales, localeDirection } from "../../il8n/config";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// const heroNew = localFont({
//   src: [
//     {
//       path: "../../../public/fonts/HeroNew-Thin.woff2",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path: "../../../public/fonts/HeroNew-UltraLight.woff2",
//       weight: "200",
//       style: "normal",
//     },
//     {
//       path: "../../../public/fonts/HeroNew-Light.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../../../public/fonts/HeroNew-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../../public/fonts/HeroNew-Medium.woff2",
//       weight: "500",
//       style: "italic",
//     },
//     {
//       path: "../../../public/fonts/HeroNew-SemiBold.woff2",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../../../public/fonts/HeroNew-Bold.woff2",
//       weight: "700",
//       style: "italic",
//     },
//     {
//       path: "../../../public/fonts/HeroNew-ExtraBold.woff2",
//       weight: "800",
//       style: "italic",
//     },
//   ],
// });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "WASSO Project Management LLC",
  description: "wasso project management llc",
};


export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;

  const locale = resolvedParams.locale;
  const dir = localeDirection[resolvedParams.locale];


  
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/global`, {
    cache: "no-store", // or "force-cache" if static
  });

  if (!res.ok) {
    notFound();
  }

  const { data } = await res.json();

  const {
    sliders,
    aboutSection,
    formSection,
    journeySection,
    featuredSection,
    projectSection,
    fitsSection,
    brandsSection,
  } = data;

  return (
    <html
      lang={locale}
      dir={dir}
      className={cn(
        locale === "ar" ? "cairo.className" : "heroNew.className",
        "antialiased",
      )}
    >
      <body
        className={cn(
          "antialiased",
          locale === "ar" ? "font-cairo" : "font-hero",
          geistSans.variable,
        )}
      >
        <Header
          locale={locale}
          headerData={local_data.header_data}
          navigationData={local_data.navigation_data}
        />

        <main>{children}</main>

        <Footer
          locale={locale}
          footerData={local_data.footer_data}
          socialLinkData={local_data.social_link_data}
        />
      </body>
    </html>
  );
}
