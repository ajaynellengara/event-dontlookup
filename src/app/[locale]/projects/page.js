import { notFound } from "next/navigation";
import ProjectMonth from "@/components/blocks/projects/project-month";
import InnerHero from "@/components/common/inner-hero";
import SuccessStories from "@/components/blocks/projects/success-stories";
import ProjectImage from "@/components/blocks/projects/project-image";
import HomeProjects from "@/components/blocks/projects/home-projects";
import ProjectsRecent from "@/components/blocks/projects/projects-recent";
import ProjectsMore from "@/components/blocks/projects/projects-more";

const local_data = {
  productInfo: {
    media: {
      media_type: "image",
      mobile_path: "/images/project-banner.jpg",
      desktop_path: "/images/project-banner.jpg",
      media_alt: "service-hero-1",
    },
    title_ar: "الخدمات",
    title: "Our Projects",
  },
  recent_projects: {
    title: "Recent Projects",
    title_ar: "المشاريع الحديثة",
    description: "<p>At Wasso Group, we recognize that every project is unique, with its own set of opportunities and challenges. Our project management service is built on the principle of transforming complex</p>",
    description_ar: "<p>في مجموعة واسو، ندرك أن كل مشروع فريد من نوعه، مع مجموعة خاصة من الفرص والتحديات. وتستند خدمة إدارة المشاريع لدينا على مبدأ تحويل المشاريع المعقدة إلى نجاحات ملموسة. سواء كان مشروعًا جديدًا أو توسعة أو تجديدًا، فإننا نقدم نهجًا شاملاً يضمن تحقيق أهدافك بكفاءة وفعالية.</p>",
    items: [
      {
        id: 1,
        title: "Lume Residences, Garden City",
        title_ar: "إدارة المشاريع",
        slug: "/project-details-1",
        media: {
          path: "/images/projects-recent-1.jpg",
          alt: "Project Management",
          alt_ar: "إدارة المشاريع",
        },
      },
      {
        id: 2,
        title: "Victoria Residences, UAE",
        title_ar: "إدارة المشاريع",
        slug: "/project-details-2",
        media: {
          path: "/images/projects-recent-2.jpg",
          alt: "Project Management",
          alt_ar: "إدارة المشاريع",
        },
      },
      {
        id: 3,
        title: "The Majestic Pointe, Al Shindagha",
        title_ar: "إدارة المشاريع",
        slug: "/project-details-3",
        media: {
          path: "/images/projects-recent-3.jpg",
          alt: "Project Management",
          alt_ar: "إدارة المشاريع",
        },
      },
      {
        id: 4,
        title: "Lume Residences, Garden City",
        title_ar: "إدارة المشاريع",
        slug: "/project-details-1",
        media: {
          path: "/images/projects-recent-1.jpg",
          alt: "Project Management",
          alt_ar: "إدارة المشاريع",
        },
      },
      {
        id: 5,
        title: "Victoria Residences, UAE",
        title_ar: "إدارة المشاريع",
        slug: "/project-details-2",
        media: {
          path: "/images/projects-recent-2.jpg",
          alt: "Project Management",
          alt_ar: "إدارة المشاريع",
        },
      },
    ],
  },
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return {
    title: locale === "ar" ? "المشاريع" : "Projects",
    description:
      locale === "ar"
        ? "استعرض مشاريعنا المميزة في إدارة المشاريع والهندسة وتطوير العقارات"
        : "Browse our featured projects in project management, engineering, and real estate development",
  };
}

export default async function ProjectsPage({ params, searchParams }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  let projectsData = null;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/projects?locale=${locale}`, {
      cache: "no-store",
    });

    if (res.ok) {
      const response = await res.json();
      projectsData = response.data;
    }
  } catch (error) {
    console.error("Error fetching home data:", error);
  }

  if (!projectsData) {
    notFound();
  }

  const { hero, projects } = projectsData;

  // const category = searchParams?.category || null;
  // const page = searchParams?.page || "1";

  // let projectsData = null;

  // try {
  //   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  //   const queryParams = new URLSearchParams({
  //     locale,
  //     page,
  //     limit: "12",
  //   });
  //   if (category) queryParams.append("category", category);

  //   const res = await fetch(
  //     `${baseUrl}/api/projects?${queryParams.toString()}`,
  //     {
  //       cache: "no-store",
  //     },
  //   );

  //   if (res.ok) {
  //     const response = await res.json();
  //     projectsData = response.data;
  //   }
  // } catch (error) {
  //   console.error("Error fetching projects data:", error);
  // }

  // if (!projectsData) {
  //   notFound();
  // }

  // const { projects, pagination } = projectsData;

  return (
    <>
      <InnerHero
        locale={locale}
        data={local_data?.productInfo}
        slug={"Our Projects"}
      />

      <ProjectMonth />

      <SuccessStories />

      {/* <ProjectsMore locale={locale} data={local_data?.recent_projects} /> */}

      <ProjectsRecent locale={locale} data={local_data?.recent_projects} />

      <ProjectImage />

      <HomeProjects locale={locale} />
    </>
  );
}
