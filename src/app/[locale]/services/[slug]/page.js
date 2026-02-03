import Overview from "@/components/blocks/service/service-overview";
import InnerHero from "@/components/blocks/banner/inner-hero";
import OurApproach from "@/components/blocks/service/service-approach";
import Benefit from "@/components/blocks/service/service-benefits";

export const dynamic = "force-dynamic";

const local_data = {
  heroInfo_data: {
    media: {
      media_type: "image",
      mobile_path: "/images/service-detail-hero.jpg",
      desktop_path: "/images/service-detail-hero.jpg",
      media_alt: "service-detail-hero-1",
    },
    title: "Project Management",
    title_ar: "الخدمات",
  },

  overview_data: {
    media: {
      media_type: "image",
      mobile_path: "/images/overview-image.jpg",
      desktop_path: "/images/overview-image.jpg",
      media_alt: "overview-image",
    },

    title: "Overview",
    title_ar: "خدمات <span>احترافية</span>",
    description: `
      <p> DefiAt Wasso Group, we recognize that every project is unique, with its own set of opportunities and challenges. Our project management service is built on the principle of transforming complex requirements into seamless, successful outcomes.</p>

    `,
    description_ar:
      "نقدم حلولاً متكاملة في إدارة المشاريع، والإشراف الهندسي، وإدارة العقود، وضمان الجودة.",
  },

  approach_data: {
    main_title: "Our Approach",
    items: [
      {
        id: 1,
        order: 1,
        title: "Project Management",
        title_ar: "",
        description: "Defining project goals, resources, and timelines.",
        description_ar: "",
        slug: "/services/project-management",
        icon: "/images/service-icon-01.png",
      },
      {
        id: 2,
        order: 2,
        title: "Engineering Supervision",
        title_ar: "",
        description: "Aligning with architects, engineers, and consultants.",
        description_ar: "",
        slug: "/services/engineering-supervision",
        icon: "/images/service-icon-02.png",
      },
      {
        id: 3,
        order: 3,
        title: "Engineering Supervision",
        title_ar: "",
        description:
          "Supervising activities, controlling costs, and tracking milestones.",
        description_ar: "",
        slug: "/services/engineering-supervision",
        icon: "/images/service-icon-03.png",
      },
      {
        id: 4,
        order: 4,
        title: "Engineering Supervision",
        title_ar: "",
        description: "Mitigating risks and ensuring compliance with standards.",
        description_ar: "",
        slug: "/services/engineering-supervision",
        icon: "/images/service-icon-04.png",
      },
      {
        id: 5,
        order: 5,
        title: "Engineering Supervision",
        title_ar: "",
        description: "Delivering completed projects with client satisfaction.",
        description_ar: "",
        slug: "/services/engineering-supervision",
        icon: "/images/service-icon-05.png",
      },
    ],
  },

  benefit_data: {
    media: {
      media_type: "image",
      mobile_path: "/images/benefit-image.jpg",
      desktop_path: "/images/benefit-image.jpg",
      media_alt: "benefit-image",
    },

    title: "Key Benefits",
    title_ar: "خدمات <span>احترافية</span>",
    description: `
      <ul>
        <li>Reduced delays and cost overruns.</li>
        <li>Professional guidance from start to finish.</li>
        <li>Reliable coordination with contractors and suppliers.</li>
        <li>Peace of mind with risk-free, compliant execution.</li>
      </ul>
    `,
    description_ar: "",
  },
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const slug = resolvedParams.slug;

  let serviceData = null;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(
      `${baseUrl}/api/services/${slug}?locale=${locale}`,
      {
        cache: "no-store",
      },
    );

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
    title: locale === "ar" ? serviceData.seoTitle_ar : serviceData.seoTitle,
    description:
      locale === "ar"
        ? serviceData.seoDescription_ar
        : serviceData.seoDescription,
  };
}

export default async function ServiceDetailPage({ params, data = local_data }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const slug = resolvedParams.slug;

  let serviceData = null;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(
      `${baseUrl}/api/services/${slug}?locale=${locale}`,
      {
        cache: "no-store",
      },
    );

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
      <InnerHero locale={locale} data={data?.heroInfo_data} slug={"Services"} />
      <Overview data={data?.overview_data} locale={locale} />
      <OurApproach data={data?.approach_data} locale={locale} />
      <Benefit data={data?.benefit_data} locale={locale} />
    </>
  );
}
