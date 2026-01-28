import { notFound } from "next/navigation";
import Link from "next/link";
import ProjectList from "@/components/blocks/project/project-list";

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
  const category = searchParams?.category || null;
  const page = searchParams?.page || "1";

  let projectsData = null;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const queryParams = new URLSearchParams({
      locale,
      page,
      limit: "12",
    });
    if (category) queryParams.append("category", category);

    const res = await fetch(
      `${baseUrl}/api/projects?${queryParams.toString()}`,
      {
        cache: "no-store",
      },
    );

    if (res.ok) {
      const response = await res.json();
      projectsData = response.data;
    }
  } catch (error) {
    console.error("Error fetching projects data:", error);
  }

  if (!projectsData) {
    notFound();
  }

  const { projects, pagination } = projectsData;

  return (
    <>
      <div className="min-h-screen">
        {/* Header */}
        <section className="bg-gray-900 py-16 text-white md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              {locale === "ar" ? "المشاريع" : "Our Projects"}
            </h1>
            <p className="text-lg text-gray-300">
              {locale === "ar"
                ? "استعرض محفظتنا المميزة من المشاريع المكتملة"
                : "Browse our portfolio of completed projects"}
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {projects && projects.length > 0 ? (
              <>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => (
                    <Link
                      key={project.id}
                      href={`/${locale}/projects/${project.slug}`}
                      className="group overflow-hidden rounded-lg transition hover:shadow-lg"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={project.featured_image.path}
                          alt={
                            locale === "ar"
                              ? project.featured_image.alt_ar
                              : project.featured_image.alt
                          }
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="bg-white p-6">
                        <h3 className="mb-2 text-xl font-semibold">
                          {locale === "ar" ? project.title_ar : project.title}
                        </h3>
                        <p className="mb-2 text-sm text-gray-600">
                          {locale === "ar"
                            ? project.location_ar
                            : project.location}
                        </p>
                        <p className="text-sm text-gray-500">
                          {locale === "ar"
                            ? project.category_ar
                            : project.category}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {pagination && pagination.totalPages > 1 && (
                  <div className="mt-12 flex justify-center gap-2">
                    {Array.from(
                      { length: pagination.totalPages },
                      (_, i) => i + 1,
                    ).map((pageNum) => (
                      <Link
                        key={pageNum}
                        href={`/${locale}/projects?page=${pageNum}${
                          category ? `&category=${category}` : ""
                        }`}
                        className={`px-4 py-2 ${
                          pageNum === pagination.page
                            ? "bg-gray-900 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {pageNum}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="py-12 text-center">
                <p className="text-gray-600">
                  {locale === "ar"
                    ? "لا توجد مشاريع متاحة"
                    : "No projects available"}
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      <ProjectList />
    </>
  );
}
