import { notFound } from "next/navigation";
import Link from "next/link";

import InnerHero from "@/components/common/inner-hero";
import ServiceList from "@/components/blocks/service/service-list";

const local_data = {
  heroInfo: {
    media: {
      media_type: "image",
      mobile_path: "/images/service-hero.webp",
      desktop_path: "/images/service-hero.webp",
      media_alt: "service-hero-1",
    },
    title: "Our Services",
    title_ar: "الخدمات",
  },

  serviceList: {
    sub_title: "WHAT WE DO",
    sub_title_ar: "ماذا نقدم",

    title: "Comprehensive Project Solutions",
    title_ar: "خدمات <span>احترافية</span>",

    description:
      "Wasso is a leading project management company committed to delivering excellence in construction and engineering solutions. We specialize in providing end-to-end services that ensure projects are completed on time, within budget, and to the highest quality standards. With expertise in project management, engineering supervision, contracts & tenders management, and quality",
    description_ar:
      "نقدم حلولاً متكاملة في إدارة المشاريع، والإشراف الهندسي، وإدارة العقود، وضمان الجودة.",

    items: [
      {
        id: 1,
        title: "Project Management",
        title_ar: "",
        description:
          "At Wasso, we understand that successful projects require more than planning — they demand foresight, coordination, and commitment.",
        description_ar: "",
        slug: "/services/project-management",
        icon: "/images/service-icon-01.png",
      },
      {
        id: 2,
        title: "Engineering Supervision",
        title_ar: "",
        description:
          "Our engineering supervision services ensure quality, safety, and efficiency at every stage of your project.",
        description_ar: "",
        slug: "/services/engineering-supervision",
        icon: "/images/service-icon-02.png",
      },
      {
        id: 3,
        title: "Engineering Supervision",
        title_ar: "",
        description:
          "Our engineering supervision services ensure quality, safety, and efficiency at every stage of your project.",
        description_ar: "",
        slug: "/services/engineering-supervision",
        icon: "/images/service-icon-03.png",
      },
      {
        id: 4,
        title: "Engineering Supervision",
        title_ar: "",
        description:
          "Our engineering supervision services ensure quality, safety, and efficiency at every stage of your project.",
        description_ar: "",
        slug: "/services/engineering-supervision",
        icon: "/images/service-icon-04.png",
      },
    ],
  },
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return {
    title: locale === "ar" ? "الخدمات" : "Services",
    description:
      locale === "ar"
        ? "استعرض خدماتنا في إدارة المشاريع والإشراف الهندسي وإدارة العقود وضمان الجودة"
        : "Browse our services in project management, engineering supervision, contracts management, and quality assurance",
  };
}

export default async function ServicesPage({ params, searchParams }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const category = searchParams?.category || null;
  const page = searchParams?.page || "1";

  let servicesData = null;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const queryParams = new URLSearchParams({
      locale,
      page,
      limit: "12",
    });
    if (category) queryParams.append("category", category);

    const res = await fetch(
      `${baseUrl}/api/services?${queryParams.toString()}`,
      {
        cache: "no-store",
      },
    );

    if (res.ok) {
      const response = await res.json();
      servicesData = response.data;
    }
  } catch (error) {
    console.error("Error fetching services data:", error);
  }

  if (!servicesData) {
    notFound();
  }

  const { services, pagination } = servicesData;

  return (
    <>
      <InnerHero
        locale={locale}
        data={local_data?.heroInfo}
        slug={"Services"}
      />

      <ServiceList data={local_data?.serviceList} locale={locale} />
    </>
  );
}
