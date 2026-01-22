import { notFound } from "next/navigation";

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
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
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

  const {
    hero,
    aboutSection,
    statistics,
    services,
    portfolio,
    partners,
  } = homeData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {hero?.sliders && hero.sliders.length > 0 && (
        <section className="relative h-screen w-full">
          <div className="relative h-full w-full">
            {hero.sliders.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 ${
                  index === 0 ? "opacity-100" : "opacity-0"
                } transition-opacity duration-1000`}
              >
                <img
                  src={slide.media.desktop.path}
                  alt={locale === "ar" ? slide.media_alt_ar : slide.media_alt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white md:left-16">
                  <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
                    {locale === "ar" ? slide.title_ar : slide.title}
                  </h1>
                  <div className="mt-8 flex items-center gap-4">
                    <span className="text-sm uppercase tracking-wider">
                      {locale === "ar"
                        ? slide.project_tag_ar
                        : slide.project_tag}
                    </span>
                    <span className="text-2xl font-semibold md:text-3xl">
                      {locale === "ar"
                        ? slide.project_name_ar
                        : slide.project_name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination Dots */}
          <div className="absolute bottom-8 left-8 flex gap-2">
            {hero.sliders.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === 0 ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </section>
      )}

      {/* About Section */}
      {aboutSection && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="mb-2 text-sm uppercase text-gray-500">
                  {locale === "ar"
                    ? aboutSection.small_title_ar
                    : aboutSection.small_title}
                </p>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  {locale === "ar" ? aboutSection.title_ar : aboutSection.title}
                </h2>
                <p className="mb-6 text-gray-600">
                  {locale === "ar"
                    ? aboutSection.description_ar
                    : aboutSection.description}
                </p>
                <a
                  href={`/${locale}${aboutSection.button.link}`}
                  className="inline-block border border-gray-800 px-6 py-2 transition hover:bg-gray-800 hover:text-white"
                >
                  {locale === "ar"
                    ? aboutSection.button.label_ar
                    : aboutSection.button.label}
                </a>
              </div>
              <div className="relative">
                {aboutSection.graphic && (
                  <img
                    src={aboutSection.graphic.path}
                    alt={
                      locale === "ar"
                        ? aboutSection.graphic.alt_ar
                        : aboutSection.graphic.alt
                    }
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Statistics Section */}
      {statistics && (
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              {locale === "ar" ? statistics.title_ar : statistics.title}
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {statistics.items.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-4xl font-bold text-gray-900 md:text-5xl">
                    {stat.number}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    {locale === "ar" ? stat.label_ar : stat.label}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {locale === "ar"
                      ? stat.description_ar
                      : stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {services && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex flex-col justify-between md:flex-row md:items-start">
              <div className="mb-4 md:mb-0 md:w-1/2">
                <p className="mb-2 text-sm uppercase text-gray-500">
                  {locale === "ar"
                    ? services.small_title_ar
                    : services.small_title}
                </p>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  {locale === "ar" ? services.title_ar : services.title}
                </h2>
              </div>
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-600">
                  {locale === "ar"
                    ? services.description_ar
                    : services.description}
                </p>
                <a
                  href={`/${locale}${services.button.link}`}
                  className="inline-block border border-gray-800 px-6 py-2 transition hover:bg-gray-800 hover:text-white"
                >
                  {locale === "ar"
                    ? services.button.label_ar
                    : services.button.label}
                </a>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {services.items.map((service) => (
                <a
                  key={service.id}
                  href={`/${locale}/services/${service.slug}`}
                  className="group overflow-hidden rounded-lg transition hover:shadow-lg"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image.path}
                      alt={
                        locale === "ar"
                          ? service.image.alt_ar
                          : service.image.alt
                      }
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="bg-white p-4">
                    <h3 className="text-lg font-semibold">
                      {locale === "ar" ? service.title_ar : service.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Section */}
      {portfolio && (
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex flex-col justify-between md:flex-row md:items-start">
              <div className="mb-4 md:mb-0 md:w-1/2">
                <p className="mb-2 text-sm uppercase text-gray-500">
                  {locale === "ar"
                    ? portfolio.small_title_ar
                    : portfolio.small_title}
                </p>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  {locale === "ar" ? portfolio.title_ar : portfolio.title}
                </h2>
              </div>
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-600">
                  {locale === "ar"
                    ? portfolio.description_ar
                    : portfolio.description}
                </p>
                <a
                  href={`/${locale}${portfolio.button.link}`}
                  className="inline-block border border-gray-800 px-6 py-2 transition hover:bg-gray-800 hover:text-white"
                >
                  {locale === "ar"
                    ? portfolio.button.label_ar
                    : portfolio.button.label}
                </a>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {portfolio.projects.map((project) => (
                <a
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
                  <div className="bg-white p-4">
                    <h3 className="mb-2 text-lg font-semibold">
                      {locale === "ar" ? project.title_ar : project.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {locale === "ar" ? project.location_ar : project.location}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Partners Section */}
      {partners && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <p className="mb-2 text-center text-sm uppercase text-gray-500">
              {locale === "ar"
                ? partners.small_title_ar
                : partners.small_title}
            </p>
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              {locale === "ar" ? partners.title_ar : partners.title}
            </h2>
            <div className="grid grid-cols-3 gap-8 md:grid-cols-5 lg:grid-cols-9">
              {partners.logos.map((partner) => (
                <div
                  key={partner.id}
                  className="flex items-center justify-center grayscale transition hover:grayscale-0"
                >
                  <img
                    src={partner.logo.path}
                    alt={
                      locale === "ar" ? partner.logo.alt_ar : partner.logo.alt
                    }
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
