import { NextResponse } from "next/server";

/**
 * GET /api/projects - Get all projects
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";
  const category = searchParams.get("category") || null;
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  const allProjects = [
    {
      id: 1,
      slug: "information-technology-complex",
      title: "Information & Technology Complex",
      title_ar: "مجمع المعلومات والتكنولوجيا",
      category: "commercial",
      category_ar: "تجاري",
      description:
        "A state-of-the-art technology complex featuring modern infrastructure and cutting-edge facilities for the IT industry.",
      description_ar:
        "مجمع تقني حديث يتميز ببنية تحتية حديثة ومرافق متطورة لصناعة تكنولوجيا المعلومات.",
      featured_image: {
        path: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        alt: "Information & Technology Complex",
        alt_ar: "مجمع المعلومات والتكنولوجيا",
      },
      location: "Riyadh, KSA",
      location_ar: "الرياض، المملكة العربية السعودية",
      gallery: [
        {
          path: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
          alt: "Luxury Tower Dubai - Exterior",
          alt_ar: "برج دبي الفاخر - الخارج",
        },
        {
          path: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
          alt: "Luxury Tower Dubai - Interior",
          alt_ar: "برج دبي الفاخر - الداخل",
        },
      ],
      location: "Dubai, UAE",
      location_ar: "دبي، الإمارات العربية المتحدة",
      client: "Dubai Holdings",
      client_ar: "دبي القابضة",
      year: "2024",
      area: "50,000 sqft",
      area_ar: "50,000 قدم مربع",
      status: "completed",
      status_ar: "مكتمل",
      tags: ["corporate", "modern", "luxury"],
      tags_ar: ["مؤسسي", "حديث", "فاخر"],
      seoTitle: "Luxury Tower Dubai - Corporate Office Project",
      seoTitle_ar: "برج دبي الفاخر - مشروع مكتب مؤسسي",
      seoDescription:
        "Modern corporate office building in Dubai featuring innovative workspace solutions.",
      seoDescription_ar:
        "مبنى مكتبي مؤسسي حديث في دبي يتميز بحلول مساحات عمل مبتكرة.",
      createdAt: "2024-01-15T00:00:00Z",
      updatedAt: "2024-06-20T00:00:00Z",
    },
    {
      id: 2,
      slug: "co-working-space-abu-dhabi",
      title: "Co-working Space Abu Dhabi",
      title_ar: "مساحة عمل مشتركة أبوظبي",
      category: "coworking",
      category_ar: "مساحات عمل مشتركة",
      description:
        "A vibrant co-working space designed to foster collaboration and creativity.",
      description_ar:
        "مساحة عمل مشتركة نابضة بالحياة مصممة لتعزيز التعاون والإبداع.",
      featured_image: {
        path: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop",
        alt: "Co-working Space Abu Dhabi",
        alt_ar: "مساحة عمل مشتركة أبوظبي",
      },
      gallery: [
        {
          path: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop",
          alt: "Co-working Space - Main Area",
          alt_ar: "مساحة العمل المشتركة - المنطقة الرئيسية",
        },
      ],
      location: "Abu Dhabi, UAE",
      location_ar: "أبوظبي، الإمارات العربية المتحدة",
      client: "Innovation Hub",
      client_ar: "مركز الابتكار",
      year: "2024",
      area: "25,000 sqft",
      area_ar: "25,000 قدم مربع",
      status: "completed",
      status_ar: "مكتمل",
      tags: ["coworking", "collaborative", "modern"],
      tags_ar: ["عمل مشترك", "تعاوني", "حديث"],
      seoTitle: "Co-working Space Abu Dhabi - Modern Workspace",
      seoTitle_ar: "مساحة عمل مشتركة أبوظبي - مساحة عمل حديثة",
      seoDescription:
        "Innovative co-working space in Abu Dhabi designed for modern professionals.",
      seoDescription_ar:
        "مساحة عمل مشتركة مبتكرة في أبوظبي مصممة للمهنيين المعاصرين.",
      createdAt: "2024-02-10T00:00:00Z",
      updatedAt: "2024-07-15T00:00:00Z",
    },
    {
      id: 3,
      slug: "university-campus-sharjah",
      title: "University Campus Sharjah",
      title_ar: "حرم جامعي الشارقة",
      category: "education",
      category_ar: "تعليمي",
      description:
        "A comprehensive educational facility with modern classrooms and collaborative spaces.",
      description_ar:
        "منشأة تعليمية شاملة مع فصول دراسية حديثة ومساحات تعاونية.",
      featured_image: {
        path: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
        alt: "University Campus Sharjah",
        alt_ar: "حرم جامعي الشارقة",
      },
      gallery: [
        {
          path: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
          alt: "University Campus - Main Building",
          alt_ar: "الحرم الجامعي - المبنى الرئيسي",
        },
      ],
      location: "Sharjah, UAE",
      location_ar: "الشارقة، الإمارات العربية المتحدة",
      client: "Sharjah University",
      client_ar: "جامعة الشارقة",
      year: "2023",
      area: "100,000 sqft",
      area_ar: "100,000 قدم مربع",
      status: "completed",
      status_ar: "مكتمل",
      tags: ["education", "campus", "modern"],
      tags_ar: ["تعليمي", "حرم جامعي", "حديث"],
      seoTitle: "University Campus Sharjah - Educational Facility",
      seoTitle_ar: "حرم جامعي الشارقة - منشأة تعليمية",
      seoDescription:
        "Modern university campus in Sharjah with state-of-the-art facilities.",
      seoDescription_ar:
        "حرم جامعي حديث في الشارقة مع مرافق متطورة.",
      createdAt: "2023-05-20T00:00:00Z",
      updatedAt: "2023-12-10T00:00:00Z",
    },
    {
      id: 4,
      slug: "tech-startup-office-dubai",
      title: "Tech Startup Office Dubai",
      title_ar: "مكتب شركة تقنية ناشئة دبي",
      category: "corporate",
      category_ar: "مؤسسي",
      description:
        "A dynamic office space designed for a growing tech startup with flexible workspaces.",
      description_ar:
        "مساحة مكتبية ديناميكية مصممة لشركة تقنية ناشئة متنامية مع مساحات عمل مرنة.",
      featured_image: {
        path: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
        alt: "Tech Startup Office",
        alt_ar: "مكتب شركة تقنية ناشئة",
      },
      gallery: [],
      location: "Dubai, UAE",
      location_ar: "دبي، الإمارات العربية المتحدة",
      client: "Tech Innovations LLC",
      client_ar: "الابتكارات التقنية ش.ذ.م.م",
      year: "2024",
      area: "15,000 sqft",
      area_ar: "15,000 قدم مربع",
      status: "completed",
      status_ar: "مكتمل",
      tags: ["corporate", "tech", "startup"],
      tags_ar: ["مؤسسي", "تقني", "ناشئ"],
      seoTitle: "Tech Startup Office Dubai - Modern Workspace",
      seoTitle_ar: "مكتب شركة تقنية ناشئة دبي - مساحة عمل حديثة",
      seoDescription:
        "Innovative office space for tech startups in Dubai.",
      seoDescription_ar:
        "مساحة مكتبية مبتكرة لشركات التقنية الناشئة في دبي.",
      createdAt: "2024-03-05T00:00:00Z",
      updatedAt: "2024-08-12T00:00:00Z",
    },
  ];

  // Filter by category if provided
  let filteredProjects = allProjects;
  if (category) {
    filteredProjects = allProjects.filter(
      (project) => project.category === category
    );
  }

  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  return NextResponse.json(
    {
      success: true,
      message: "Projects fetched successfully",
      message_ar: "تم جلب المشاريع بنجاح",
      data: {
        projects: paginatedProjects,
        pagination: {
          page,
          limit,
          total: filteredProjects.length,
          totalPages: Math.ceil(filteredProjects.length / limit),
        },
      },
    },
    { status: 200 }
  );
}
