import { notFound } from "next/navigation";
import Link from "next/link";
import Overview from "@/components/blocks/service/overview";
import InnerHero from "@/components/common/inner-hero";
import OurApproach from "@/components/blocks/service/our-approach";

export const dynamic = "force-dynamic";

const service_detail_data = {
  heroInfo: {
    media: {
      media_type: "image",
      mobile_path: "/images/service-detail-hero.jpg",
      desktop_path: "/images/service-detail-hero.jpg",
      media_alt: "service-detail-hero-1",
    },
    title: "Project Management",
    title_ar: "الخدمات",
  },
  
  overview: {
    media: {
      media_type: "image",
      mobile_path: "/images/overview-image.jpg",
      desktop_path: "/images/overview-image.jpg",
      media_alt: "overview-image",
    },
    
    title: "Overview",
    title_ar: "خدمات <span>احترافية</span>",
    description:
      "At Wasso Group, we recognize that every project is unique, with its own set of opportunities and challenges. Our project management service is built on the principle of transforming complex requirements into seamless, successful outcomes.",
    description_ar:
      "نقدم حلولاً متكاملة في إدارة المشاريع، والإشراف الهندسي، وإدارة العقود، وضمان الجودة.",
  },
  approach: {
    media: {
      media_type: "image",
      mobile_path: "/images/overview-image.jpg",
      desktop_path: "/images/overview-image.jpg",
      media_alt: "overview-image",
    },
    
    title: "Overview",
    title_ar: "خدمات <span>احترافية</span>",
    description:
      "At Wasso Group, we recognize that every project is unique, with its own set of opportunities and challenges. Our project management service is built on the principle of transforming complex requirements into seamless, successful outcomes.",
    description_ar:
      "نقدم حلولاً متكاملة في إدارة المشاريع، والإشراف الهندسي، وإدارة العقود، وضمان الجودة.",
  },
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const slug = resolvedParams.slug;

  let serviceData = null;

  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/services/${slug}?locale=${locale}`, {
      cache: "no-store",
    });

    if (res.ok) {
      const response = await res.json();
      serviceData = response.data;
    }
  } catch (error) {
    console.error("Error fetching service data:", error);
  }

  if (!serviceData) {
    return {
      title: locale === "ar" ? "الخدمة غير موجودة" : "Service Not Found",
    };
  }

  return {
    title:
      locale === "ar" ? serviceData.seoTitle_ar : serviceData.seoTitle,
    description:
      locale === "ar"
        ? serviceData.seoDescription_ar
        : serviceData.seoDescription,
  };
};

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const slug = resolvedParams.slug;

  let serviceData = null;

  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/services/${slug}?locale=${locale}`, {
      cache: "no-store",
    });

    if (res.ok) {
      const response = await res.json();
      serviceData = response.data;
    }
  } catch (error) {
    console.error("Error fetching service data:", error);
  }

  // if (!serviceData) {
  //   notFound();
  // }

  return (
    <>
        <InnerHero
              locale={locale}
              data={service_detail_data?.heroInfo}
              slug={"Services"}
          />
        <Overview   
        data={service_detail_data?.overview}
        locale={locale} 
        />
        <OurApproach   
        data={service_detail_data?.approach}
        locale={locale} 
        />
    <div className="min-h-screen">
      
    </div>
     </>
  );
}
