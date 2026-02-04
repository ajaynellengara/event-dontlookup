import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

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

export default async function ProjectDetailPage({ params }) {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="relative h-[70vh] w-full">
        <img
          src={projectData.featured_image.path}
          alt={
            locale === "ar"
              ? projectData.featured_image.alt_ar
              : projectData.featured_image.alt
          }
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              {locale === "ar" ? projectData.title_ar : projectData.title}
            </h1>
            <p className="text-xl">
              {locale === "ar" ? projectData.location_ar : projectData.location}
            </p>
          </div>
        </div>
      </section> */}

      {/* Project Details */}
      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="mb-4 text-3xl font-bold">
                {locale === "ar" ? "نظرة عامة" : "Overview"}
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                {locale === "ar"
                  ? projectData.description_ar
                  : projectData.description}
              </p>
              {projectData.full_description && (
                <div
                  className="prose max-w-none text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html:
                      locale === "ar"
                        ? projectData.full_description_ar
                        : projectData.full_description,
                  }}
                />
              )}

              {projectData.gallery && projectData.gallery.length > 0 && (
                <div className="mt-12">
                  <h3 className="mb-6 text-2xl font-bold">
                    {locale === "ar" ? "معرض الصور" : "Gallery"}
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {projectData.gallery.map((image, index) => (
                      <img
                        key={index}
                        src={image.path}
                        alt={locale === "ar" ? image.alt_ar : image.alt}
                        className="h-64 w-full rounded-lg object-cover"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-xl font-bold">
                  {locale === "ar" ? "معلومات المشروع" : "Project Information"}
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold">
                      {locale === "ar" ? "الموقع:" : "Location:"}
                    </span>{" "}
                    {locale === "ar"
                      ? projectData.location_ar
                      : projectData.location}
                  </div>
                  {projectData.client && (
                    <div>
                      <span className="font-semibold">
                        {locale === "ar" ? "العميل:" : "Client:"}
                      </span>{" "}
                      {locale === "ar"
                        ? projectData.client_ar
                        : projectData.client}
                    </div>
                  )}
                  {projectData.year && (
                    <div>
                      <span className="font-semibold">
                        {locale === "ar" ? "السنة:" : "Year:"}
                      </span>{" "}
                      {projectData.year}
                    </div>
                  )}
                  {projectData.area && (
                    <div>
                      <span className="font-semibold">
                        {locale === "ar" ? "المساحة:" : "Area:"}
                      </span>{" "}
                      {locale === "ar" ? projectData.area_ar : projectData.area}
                    </div>
                  )}
                  {projectData.status && (
                    <div>
                      <span className="font-semibold">
                        {locale === "ar" ? "الحالة:" : "Status:"}
                      </span>{" "}
                      {locale === "ar"
                        ? projectData.status_ar
                        : projectData.status}
                    </div>
                  )}
                </div>
              </div>

              {projectData.tags && projectData.tags.length > 0 && (
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-4 text-xl font-bold">
                    {locale === "ar" ? "العلامات" : "Tags"}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {projectData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded bg-gray-200 px-3 py-1 text-sm"
                      >
                        {locale === "ar" ? projectData.tags_ar[index] : tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section> */}

      {/* Back to Projects */}
      {/* <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Link
            href={`/${locale}/projects`}
            className="inline-block text-gray-700 hover:text-gray-900"
          >
            ← {locale === "ar" ? "العودة إلى المشاريع" : "Back to Projects"}
          </Link>
        </div>
      </section> */}
    </div>
  );
}
