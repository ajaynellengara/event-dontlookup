import { notFound } from "next/navigation";
import Link from "next/link";

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
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
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
      }
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
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gray-900 py-16 text-white md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {locale === "ar" ? "خدماتنا" : "Our Services"}
          </h1>
          <p className="text-lg text-gray-300">
            {locale === "ar"
              ? "حلول شاملة في إدارة المشاريع والهندسة وتطوير العقارات"
              : "Comprehensive solutions in project management, engineering, and real estate development"}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {services && services.length > 0 ? (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/${locale}/services/${service.slug}`}
                    className="group overflow-hidden rounded-lg transition hover:shadow-lg"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.featured_image.path}
                        alt={
                          locale === "ar"
                            ? service.featured_image.alt_ar
                            : service.featured_image.alt
                        }
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="bg-white p-6">
                      <h3 className="mb-2 text-xl font-semibold">
                        {locale === "ar" ? service.title_ar : service.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {locale === "ar"
                          ? service.short_description_ar
                          : service.short_description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {pagination && pagination.totalPages > 1 && (
                <div className="mt-12 flex justify-center gap-2">
                  {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
                    (pageNum) => (
                      <Link
                        key={pageNum}
                        href={`/${locale}/services?page=${pageNum}${
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
                    )
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="py-12 text-center">
              <p className="text-gray-600">
                {locale === "ar"
                  ? "لا توجد خدمات متاحة"
                  : "No services available"}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
