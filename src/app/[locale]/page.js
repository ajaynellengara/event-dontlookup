import HomeAbout from "@/components/blocks/home/home-about";
import HomeHero from "@/components/blocks/home/home-hero";
import HomeStatistics from "@/components/blocks/home/home-statistics";
import HomeServices from "@/components/blocks/home/home-services";
import HomeServicesCarousel from "@/components/blocks/home/home-services-carousel";
import HomeHeroWebgl from "@/components/blocks/home/home-hero-webgl";
import { notFound } from "next/navigation";
import HomePortfolio from "@/components/blocks/home/home-portfolio";
import HomePartners from "@/components/blocks/home/home-partners";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return {
    title: locale === "ar" ? "واسو - الصفحة الرئيسية" : "WASSO - Home",
    description:
      locale === "ar"
        ? "واسو لإدارة المشاريع - حلول رائدة في إدارة المشاريع والهندسة وتطوير العقارات"
        : "WASSO Project Management - Leading solutions in project management, engineering, and real estate development",
  };
}

export default async function HomePage({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  let homeData = null;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/home?locale=${locale}`, {
      cache: "no-store",
    });

    if (res.ok) {
      const response = await res.json();
      homeData = response.data;
    }
  } catch (error) {
    console.error("Error fetching home data:", error);
  }

  if (!homeData) {
    notFound();
  }

  const { hero, aboutSection, statistics, services, portfolio, partners } =
    homeData;

  return (
    <>
      {hero?.sliders && hero.sliders.length > 0 && (
        <>
          <HomeHero data={hero} locale={locale} />
          {/* <HomeHeroWebgl data={hero} locale={locale} /> */}
        </>
      )}
      {aboutSection && <HomeAbout data={aboutSection} locale={locale} />}

      {statistics && <HomeStatistics data={statistics} locale={locale} />}

      {services && <HomeServices data={services} locale={locale} />}

      {/* {services && <HomeServicesCarousel data={services} locale={locale} />} */}

      {portfolio && <HomePortfolio data={portfolio} locale={locale} />}

      {partners && <HomePartners data={partners} locale={locale} />}
    </>
  );
}
