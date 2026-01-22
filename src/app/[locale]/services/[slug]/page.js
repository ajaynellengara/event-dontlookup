import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

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
}

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

  if (!serviceData) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <img
          src={serviceData.featured_image.path}
          alt={
            locale === "ar"
              ? serviceData.featured_image.alt_ar
              : serviceData.featured_image.alt
          }
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              {locale === "ar" ? serviceData.title_ar : serviceData.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="mb-4 text-3xl font-bold">
                {locale === "ar" ? "نظرة عامة" : "Overview"}
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                {locale === "ar"
                  ? serviceData.description_ar
                  : serviceData.description}
              </p>
              {serviceData.full_description && (
                <div
                  className="prose max-w-none text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html:
                      locale === "ar"
                        ? serviceData.full_description_ar
                        : serviceData.full_description,
                  }}
                />
              )}

              {/* Benefits */}
              {serviceData.benefits && serviceData.benefits.length > 0 && (
                <div className="mt-12">
                  <h3 className="mb-6 text-2xl font-bold">
                    {locale === "ar" ? "الفوائد" : "Benefits"}
                  </h3>
                  <ul className="list-disc space-y-2 pl-6 text-gray-600">
                    {serviceData.benefits.map((benefit, index) => (
                      <li key={index}>
                        {locale === "ar"
                          ? serviceData.benefits_ar[index]
                          : benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Process */}
              {serviceData.process && serviceData.process.length > 0 && (
                <div className="mt-12">
                  <h3 className="mb-6 text-2xl font-bold">
                    {locale === "ar" ? "العملية" : "Process"}
                  </h3>
                  <div className="space-y-6">
                    {serviceData.process.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white">
                            {step.step}
                          </div>
                        </div>
                        <div>
                          <h4 className="mb-2 text-xl font-semibold">
                            {locale === "ar" ? step.title_ar : step.title}
                          </h4>
                          <p className="text-gray-600">
                            {locale === "ar"
                              ? step.description_ar
                              : step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery */}
              {serviceData.gallery && serviceData.gallery.length > 0 && (
                <div className="mt-12">
                  <h3 className="mb-6 text-2xl font-bold">
                    {locale === "ar" ? "معرض الصور" : "Gallery"}
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {serviceData.gallery.map((image, index) => (
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

            {/* Sidebar */}
            <div className="space-y-6">
              {serviceData.tags && serviceData.tags.length > 0 && (
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-4 text-xl font-bold">
                    {locale === "ar" ? "العلامات" : "Tags"}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {serviceData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded bg-gray-200 px-3 py-1 text-sm"
                      >
                        {locale === "ar"
                          ? serviceData.tags_ar[index]
                          : tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Link
            href={`/${locale}/services`}
            className="inline-block text-gray-700 hover:text-gray-900"
          >
            ← {locale === "ar" ? "العودة إلى الخدمات" : "Back to Services"}
          </Link>
        </div>
      </section>
    </div>
  );
}
