import { notFound } from "next/navigation";
import Link from "next/link";
import InnerHero from "@/components/common/inner-hero";
import ProjectsInfo from "@/components/blocks/projects/projects-info";
import ProjectsRecent from "@/components/blocks/projects/projects-recent";
import ProjectsExplore from "@/components/blocks/projects/projects-explore";

export const dynamic = "force-dynamic";

const local_data = {
  hero: {
    media: {
      media_type: "image",
      mobile_path: "/images/projects-hero-1.jpg",
      desktop_path: "/images/projects-hero-1.jpg",
      media_alt: "projects-hero",
    },
    title_ar: "الخدمات",
    title: "Our Projects",
  },

  project_info: {
    title_ar: "الخدمات",
    title: "Our Projects",
    items: [
      {
        id: 1,
        title: "Luxury Residential Tower, Dubai",
        title_ar: "إدارة المشاريع",
        description:
          "<p>Location: <b>Dubai, UAE</b></p><p>Completion Year: <b>2022</b></p><p>Scope: <b>Commercial & Technology Development</b></p>",
        description_ar:
          "<p>المشاريع: <b>Dubai, UAE</b></p><p>المشاريع Year: <b>2022</b></p><p>المشاريع: <b>Commercial & Technology Development</b></p>",
        media: {
          path: "/images/projects-info-1.jpg",
          alt: "projects-info",
          alt_ar: "إدارة المشاريع",
        },
      },
      {
        id: 2,
        title: "11 Luxury Residential Tower, Dubai",
        title_ar: "إدارة المشاريع",
        description:
          "<p>Location: <b>Dubai, UAE</b></p><p>Completion Year: <b>2022</b></p><p>Scope: <b>Commercial & Technology Development</b></p>",
        description_ar:
          "<p>المشاريع: <b>Dubai, UAE</b></p><p>المشاريع Year: <b>2022</b></p><p>المشاريع: <b>Commercial & Technology Development</b></p>",
        media: {
          path: "/images/projects-info-1.jpg",
          alt: "projects-info",
          alt_ar: "إدارة المشاريع",
        },
      },
      {
        id: 3,
        title: "22 Luxury Residential Tower, Dubai",
        title_ar: "إدارة المشاريع",
        description:
          "<p>Location: <b>Dubai, UAE</b></p><p>Completion Year: <b>2022</b></p><p>Scope: <b>Commercial & Technology Development</b></p>",
        description_ar:
          "<p>المشاريع: <b>Dubai, UAE</b></p><p>المشاريع Year: <b>2022</b></p><p>المشاريع: <b>Commercial & Technology Development</b></p>",
        media: {
          path: "/images/projects-info-1.jpg",
          alt: "projects-info",
          alt_ar: "إدارة المشاريع",
        },
      },
      {
        id: 4,
        title: "33 FLuxury Residential Tower, Dubai",
        title_ar: "إدارة المشاريع",
        description:
          "<p>Location: <b>Dubai, UAE</b></p><p>Completion Year: <b>2022</b></p><p>Scope: <b>Commercial & Technology Development</b></p>",
        description_ar:
          "<p>المشاريع: <b>Dubai, UAE</b></p><p>المشاريع Year: <b>2022</b></p><p>المشاريع: <b>Commercial & Technology Development</b></p>",
        media: {
          path: "/images/projects-info-1.jpg",
          alt: "projects-info",
          alt_ar: "إدارة المشاريع",
        },
      },
    ],
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

  explore_projects: {
    title: "Explore All Building Project",
    title_ar: "استكشف جميع مشاريع البناء",
    slug: "/project-details-3",
  }
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const slug = resolvedParams.slug;

  let projectData = null;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(
      `${baseUrl}/api/projects/${slug}?locale=${locale}`,
      {
        cache: "no-store",
      },
    );

    if (res.ok) {
      const response = await res.json();
      projectData = response.data;
    }
  } catch (error) {
    console.error("Error fetching project data:", error);
  }

  if (!projectData) {
    return {
      title: locale === "ar" ? "المشروع غير موجود" : "Project Not Found",
    };
  }

  return {
    title: locale === "ar" ? projectData.seoTitle_ar : projectData.seoTitle,
    description:
      locale === "ar"
        ? projectData.seoDescription_ar
        : projectData.seoDescription,
  };
}

export default async function ProjectsDetailPage({
  params,
  data = local_data,
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const slug = resolvedParams.slug;

  // let projectData = null;

  // try {
  //   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  //   const res = await fetch(
  //     `${baseUrl}/api/projects/${slug}?locale=${locale}`,
  //     {
  //       cache: "no-store",
  //     },
  //   );

  //   if (res.ok) {
  //     const response = await res.json();
  //     projectData = response.data;
  //   }
  // } catch (error) {
  //   console.error("Error fetching project data:", error);
  // }

  // if (!projectData) {
  //   notFound();
  // }

  return (
    <>
      <InnerHero locale={locale} data={data?.hero} slug={"Our Projects"} />

      <ProjectsInfo locale={locale} data={data?.project_info} />

      <ProjectsRecent locale={locale} data={data?.recent_projects} />

      <ProjectsExplore locale={locale} data={data?.explore_projects} />
    </>
  );
}
