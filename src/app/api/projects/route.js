import { NextResponse } from "next/server";

/**
 * GET /api/projects - Get all projects
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";

  const projectsPageData = {
    id: "projects_page",
    slug: "projects",
    status: "published",
    publish_at: "2024-01-01T00:00:00Z",
    locale_support: ["en", "ar"],

    seo: {
      meta_title: "Our Projects | WASSO",
      meta_title_ar: "مشاريعنا | واسو",
      meta_description:
        "Explore WASSO’s portfolio of landmark residential, commercial, and mixed-use developments across the region.",
      meta_description_ar:
        "اكتشف مجموعة مشاريع واسو السكنية والتجارية والمشاريع متعددة الاستخدامات.",
    },

    hero: {
      enabled: true,
      title: "Our Projects",
      title_ar: "مشاريعنا",
      breadcrumb: [
        { label: "Home", label_ar: "الرئيسية", link: "/" },
        { label: "Projects", label_ar: "المشاريع", link: "/projects" },
      ],
      media: {
        type: "image",
        desktop: "/images/projects/project-banner.jpg",
        mobile: "/images/projects/project-banner-m.jpg",
        alt: "WASSO Projects",
        alt_ar: "مشاريع واسو",
      },
    },

    intro_section: {
      enabled: true,
      title: "Projects of the Month",
      title_ar: "مشاريع الشهر",
      description:
        "A curated selection of our most impactful residential and mixed-use developments, redefining modern living.",
      description_ar:
        "مجموعة مختارة من أبرز مشاريعنا السكنية ومتعددة الاستخدامات التي تعيد تعريف أسلوب الحياة العصري.",
    },

    filters: {
      enabled: true,
      categories: [
        {
          id: "residential",
          label: "Residential",
          label_ar: "سكني",
        },
        {
          id: "commercial",
          label: "Commercial",
          label_ar: "تجاري",
        },
        {
          id: "mixed_use",
          label: "Mixed Use",
          label_ar: "متعدد الاستخدامات",
        },
        {
          id: "hospitality",
          label: "Hospitality",
          label_ar: "ضيافة",
        },
      ],
      locations: [
        { id: "dubai", label: "Dubai", label_ar: "دبي" },
        { id: "abu_dhabi", label: "Abu Dhabi", label_ar: "أبوظبي" },
        {
          id: "ksa",
          label: "Saudi Arabia",
          label_ar: "المملكة العربية السعودية",
        },
      ],
      years: ["2024", "2023", "2022"],
    },

    projects: [
      {
        id: 1,
        slug: "luxury-residential-tower-dubai",
        title: "Luxury Residential Tower",
        title_ar: "برج سكني فاخر",
        category: "residential",
        category_ar: "سكني",
        location: "Dubai, UAE",
        location_ar: "دبي، الإمارات العربية المتحدة",
        year: "2024",
        is_featured: true,
        featured_image: {
          path: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=700&fit=crop",
          alt: "Luxury Residential Tower Dubai",
          alt_ar: "برج سكني فاخر في دبي",
        },
        cta: {
          label: "View Project",
          label_ar: "عرض المشروع",
          link: "/projects/luxury-residential-tower-dubai",
        },
      },

      {
        id: 2,
        slug: "regal-haven-al-raha-beach",
        title: "Regal Haven",
        title_ar: "ريغال هافن",
        category: "residential",
        category_ar: "سكني",
        location: "Al Raha Beach, Abu Dhabi",
        location_ar: "شاطئ الراحة، أبوظبي",
        year: "2024",
        is_featured: true,
        featured_image: {
          path: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=900&h=700&fit=crop",
          alt: "Regal Haven Al Raha Beach",
          alt_ar: "ريغال هافن شاطئ الراحة",
        },
        cta: {
          label: "View Project",
          label_ar: "عرض المشروع",
          link: "/projects/regal-haven-al-raha-beach",
        },
      },

      {
        id: 3,
        slug: "lume-residences-garden-city",
        title: "Lume Residences",
        title_ar: "مساكن لوم",
        category: "villa",
        category_ar: "فلل",
        location: "Garden City",
        location_ar: "جاردن سيتي",
        year: "2023",
        is_featured: false,
        featured_image: {
          path: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=700&fit=crop",
          alt: "Lume Residences",
          alt_ar: "مساكن لوم",
        },
        cta: {
          label: "View Project",
          label_ar: "عرض المشروع",
          link: "/projects/lume-residences-garden-city",
        },
      },

      {
        id: 4,
        slug: "victoria-residences-uae",
        title: "Victoria Residences",
        title_ar: "مساكن فيكتوريا",
        category: "residential",
        category_ar: "سكني",
        location: "UAE",
        location_ar: "الإمارات العربية المتحدة",
        year: "2023",
        is_featured: false,
        featured_image: {
          path: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&h=700&fit=crop",
          alt: "Victoria Residences",
          alt_ar: "مساكن فيكتوريا",
        },
        cta: {
          label: "View Project",
          label_ar: "عرض المشروع",
          link: "/projects/victoria-residences-uae",
        },
      },
    ],
  };

  return NextResponse.json(
    {
      success: true,
      message: "Projects fetched successfully",
      message_ar: "تم جلب المشاريع بنجاح",
      data: projectsPageData,
    },
    { status: 200 },
  );
}

// import { NextResponse } from "next/server";

// /**
//  * GET /api/projects - Get all projects
//  */
// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const locale = searchParams.get("locale") || "en";
//   const category = searchParams.get("category") || null;
//   const page = parseInt(searchParams.get("page") || "1");
//   const limit = parseInt(searchParams.get("limit") || "10");

//   const allProjects = [
//     {
//       id: 1,
//       slug: "information-technology-complex",
//       title: "Information & Technology Complex",
//       title_ar: "مجمع المعلومات والتكنولوجيا",
//       category: "commercial",
//       category_ar: "تجاري",
//       description:
//         "A state-of-the-art technology complex featuring modern infrastructure and cutting-edge facilities for the IT industry.",
//       description_ar:
//         "مجمع تقني حديث يتميز ببنية تحتية حديثة ومرافق متطورة لصناعة تكنولوجيا المعلومات.",
//       featured_image: {
//         path: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
//         alt: "Information & Technology Complex",
//         alt_ar: "مجمع المعلومات والتكنولوجيا",
//       },
//       location: "Riyadh, KSA",
//       location_ar: "الرياض، المملكة العربية السعودية",
//       gallery: [
//         {
//           path: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
//           alt: "Luxury Tower Dubai - Exterior",
//           alt_ar: "برج دبي الفاخر - الخارج",
//         },
//         {
//           path: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
//           alt: "Luxury Tower Dubai - Interior",
//           alt_ar: "برج دبي الفاخر - الداخل",
//         },
//       ],
//       location: "Dubai, UAE",
//       location_ar: "دبي، الإمارات العربية المتحدة",
//       client: "Dubai Holdings",
//       client_ar: "دبي القابضة",
//       year: "2024",
//       area: "50,000 sqft",
//       area_ar: "50,000 قدم مربع",
//       status: "completed",
//       status_ar: "مكتمل",
//       tags: ["corporate", "modern", "luxury"],
//       tags_ar: ["مؤسسي", "حديث", "فاخر"],
//       seoTitle: "Luxury Tower Dubai - Corporate Office Project",
//       seoTitle_ar: "برج دبي الفاخر - مشروع مكتب مؤسسي",
//       seoDescription:
//         "Modern corporate office building in Dubai featuring innovative workspace solutions.",
//       seoDescription_ar:
//         "مبنى مكتبي مؤسسي حديث في دبي يتميز بحلول مساحات عمل مبتكرة.",
//       createdAt: "2024-01-15T00:00:00Z",
//       updatedAt: "2024-06-20T00:00:00Z",
//     },
//     {
//       id: 2,
//       slug: "co-working-space-abu-dhabi",
//       title: "Co-working Space Abu Dhabi",
//       title_ar: "مساحة عمل مشتركة أبوظبي",
//       category: "coworking",
//       category_ar: "مساحات عمل مشتركة",
//       description:
//         "A vibrant co-working space designed to foster collaboration and creativity.",
//       description_ar:
//         "مساحة عمل مشتركة نابضة بالحياة مصممة لتعزيز التعاون والإبداع.",
//       featured_image: {
//         path: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop",
//         alt: "Co-working Space Abu Dhabi",
//         alt_ar: "مساحة عمل مشتركة أبوظبي",
//       },
//       gallery: [
//         {
//           path: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop",
//           alt: "Co-working Space - Main Area",
//           alt_ar: "مساحة العمل المشتركة - المنطقة الرئيسية",
//         },
//       ],
//       location: "Abu Dhabi, UAE",
//       location_ar: "أبوظبي، الإمارات العربية المتحدة",
//       client: "Innovation Hub",
//       client_ar: "مركز الابتكار",
//       year: "2024",
//       area: "25,000 sqft",
//       area_ar: "25,000 قدم مربع",
//       status: "completed",
//       status_ar: "مكتمل",
//       tags: ["coworking", "collaborative", "modern"],
//       tags_ar: ["عمل مشترك", "تعاوني", "حديث"],
//       seoTitle: "Co-working Space Abu Dhabi - Modern Workspace",
//       seoTitle_ar: "مساحة عمل مشتركة أبوظبي - مساحة عمل حديثة",
//       seoDescription:
//         "Innovative co-working space in Abu Dhabi designed for modern professionals.",
//       seoDescription_ar:
//         "مساحة عمل مشتركة مبتكرة في أبوظبي مصممة للمهنيين المعاصرين.",
//       createdAt: "2024-02-10T00:00:00Z",
//       updatedAt: "2024-07-15T00:00:00Z",
//     },
//     {
//       id: 3,
//       slug: "university-campus-sharjah",
//       title: "University Campus Sharjah",
//       title_ar: "حرم جامعي الشارقة",
//       category: "education",
//       category_ar: "تعليمي",
//       description:
//         "A comprehensive educational facility with modern classrooms and collaborative spaces.",
//       description_ar:
//         "منشأة تعليمية شاملة مع فصول دراسية حديثة ومساحات تعاونية.",
//       featured_image: {
//         path: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
//         alt: "University Campus Sharjah",
//         alt_ar: "حرم جامعي الشارقة",
//       },
//       gallery: [
//         {
//           path: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
//           alt: "University Campus - Main Building",
//           alt_ar: "الحرم الجامعي - المبنى الرئيسي",
//         },
//       ],
//       location: "Sharjah, UAE",
//       location_ar: "الشارقة، الإمارات العربية المتحدة",
//       client: "Sharjah University",
//       client_ar: "جامعة الشارقة",
//       year: "2023",
//       area: "100,000 sqft",
//       area_ar: "100,000 قدم مربع",
//       status: "completed",
//       status_ar: "مكتمل",
//       tags: ["education", "campus", "modern"],
//       tags_ar: ["تعليمي", "حرم جامعي", "حديث"],
//       seoTitle: "University Campus Sharjah - Educational Facility",
//       seoTitle_ar: "حرم جامعي الشارقة - منشأة تعليمية",
//       seoDescription:
//         "Modern university campus in Sharjah with state-of-the-art facilities.",
//       seoDescription_ar: "حرم جامعي حديث في الشارقة مع مرافق متطورة.",
//       createdAt: "2023-05-20T00:00:00Z",
//       updatedAt: "2023-12-10T00:00:00Z",
//     },
//     {
//       id: 4,
//       slug: "tech-startup-office-dubai",
//       title: "Tech Startup Office Dubai",
//       title_ar: "مكتب شركة تقنية ناشئة دبي",
//       category: "corporate",
//       category_ar: "مؤسسي",
//       description:
//         "A dynamic office space designed for a growing tech startup with flexible workspaces.",
//       description_ar:
//         "مساحة مكتبية ديناميكية مصممة لشركة تقنية ناشئة متنامية مع مساحات عمل مرنة.",
//       featured_image: {
//         path: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
//         alt: "Tech Startup Office",
//         alt_ar: "مكتب شركة تقنية ناشئة",
//       },
//       gallery: [],
//       location: "Dubai, UAE",
//       location_ar: "دبي، الإمارات العربية المتحدة",
//       client: "Tech Innovations LLC",
//       client_ar: "الابتكارات التقنية ش.ذ.م.م",
//       year: "2024",
//       area: "15,000 sqft",
//       area_ar: "15,000 قدم مربع",
//       status: "completed",
//       status_ar: "مكتمل",
//       tags: ["corporate", "tech", "startup"],
//       tags_ar: ["مؤسسي", "تقني", "ناشئ"],
//       seoTitle: "Tech Startup Office Dubai - Modern Workspace",
//       seoTitle_ar: "مكتب شركة تقنية ناشئة دبي - مساحة عمل حديثة",
//       seoDescription: "Innovative office space for tech startups in Dubai.",
//       seoDescription_ar: "مساحة مكتبية مبتكرة لشركات التقنية الناشئة في دبي.",
//       createdAt: "2024-03-05T00:00:00Z",
//       updatedAt: "2024-08-12T00:00:00Z",
//     },
//   ];

//   // Filter by category if provided
//   let filteredProjects = allProjects;
//   if (category) {
//     filteredProjects = allProjects.filter(
//       (project) => project.category === category,
//     );
//   }

//   // Pagination
//   const startIndex = (page - 1) * limit;
//   const endIndex = startIndex + limit;
//   const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

//   return NextResponse.json(
//     {
//       success: true,
//       message: "Projects fetched successfully",
//       message_ar: "تم جلب المشاريع بنجاح",
//       data: {
//         projects: paginatedProjects,
//         pagination: {
//           page,
//           limit,
//           total: filteredProjects.length,
//           totalPages: Math.ceil(filteredProjects.length / limit),
//         },
//       },
//     },
//     { status: 200 },
//   );
// }
