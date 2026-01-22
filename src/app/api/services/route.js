import { NextResponse } from "next/server";

/**
 * GET /api/services - Get all services
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";
  const category = searchParams.get("category") || null;
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  const allServices = [
    {
      id: 1,
      slug: "project-management",
      title: "Project Management",
      title_ar: "إدارة المشاريع",
      category: "management",
      category_ar: "إدارة",
      short_description:
        "Comprehensive project management services from conception to completion, ensuring timely delivery and exceptional quality.",
      short_description_ar:
        "خدمات إدارة مشاريع شاملة من التصور إلى الإنجاز، وضمان التسليم في الوقت المحدد وجودة استثنائية.",
      icon: "project-management",
      featured: true,
      featured_image: {
        path: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        alt: "Project Management",
        alt_ar: "إدارة المشاريع",
      },
      tags: ["management", "planning", "execution"],
      tags_ar: ["إدارة", "تخطيط", "تنفيذ"],
      seoTitle: "Project Management Services | WASSO",
      seoTitle_ar: "خدمات إدارة المشاريع | واسو",
      seoDescription:
        "Professional project management services for construction and real estate development projects.",
      seoDescription_ar:
        "خدمات إدارة مشاريع احترافية لمشاريع البناء وتطوير العقارات.",
      createdAt: "2024-01-10T00:00:00Z",
      updatedAt: "2024-06-15T00:00:00Z",
    },
    {
      id: 2,
      slug: "engineering-supervision",
      title: "Engineering Supervision",
      title_ar: "الإشراف الهندسي",
      category: "engineering",
      category_ar: "هندسة",
      short_description:
        "Expert engineering supervision ensuring quality, safety, and compliance with industry standards throughout the project lifecycle.",
      short_description_ar:
        "إشراف هندسي خبير يضمن الجودة والسلامة والامتثال لمعايير الصناعة طوال دورة حياة المشروع.",
      icon: "engineering",
      featured: true,
      featured_image: {
        path: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
        alt: "Engineering Supervision",
        alt_ar: "الإشراف الهندسي",
      },
      tags: ["engineering", "supervision", "quality"],
      tags_ar: ["هندسة", "إشراف", "جودة"],
      seoTitle: "Engineering Supervision Services | WASSO",
      seoTitle_ar: "خدمات الإشراف الهندسي | واسو",
      seoDescription:
        "Professional engineering supervision services for construction and infrastructure projects.",
      seoDescription_ar:
        "خدمات إشراف هندسي احترافية لمشاريع البناء والبنية التحتية.",
      createdAt: "2024-01-12T00:00:00Z",
      updatedAt: "2024-06-18T00:00:00Z",
    },
    {
      id: 3,
      slug: "contracts-tenders-management",
      title: "Contracts & Tenders Management",
      title_ar: "إدارة العقود والمناقصات",
      category: "management",
      category_ar: "إدارة",
      short_description:
        "Comprehensive contracts and tenders management services, handling procurement, negotiations, and contract administration.",
      short_description_ar:
        "خدمات شاملة لإدارة العقود والمناقصات، والتعامل مع المشتريات والتفاوض وإدارة العقود.",
      icon: "contracts",
      featured: true,
      featured_image: {
        path: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        alt: "Contracts & Tenders Management",
        alt_ar: "إدارة العقود والمناقصات",
      },
      tags: ["contracts", "tenders", "procurement"],
      tags_ar: ["عقود", "مناقصات", "مشتريات"],
      seoTitle: "Contracts & Tenders Management | WASSO",
      seoTitle_ar: "إدارة العقود والمناقصات | واسو",
      seoDescription:
        "Expert contracts and tenders management services for construction and development projects.",
      seoDescription_ar:
        "خدمات خبيرة لإدارة العقود والمناقصات لمشاريع البناء والتطوير.",
      createdAt: "2024-01-15T00:00:00Z",
      updatedAt: "2024-06-20T00:00:00Z",
    },
    {
      id: 4,
      slug: "quality-safety-assurance",
      title: "Quality & Safety Assurance",
      title_ar: "ضمان الجودة والسلامة",
      category: "quality",
      category_ar: "جودة",
      short_description:
        "Rigorous quality and safety assurance programs ensuring compliance with regulations and industry best practices.",
      short_description_ar:
        "برامج صارمة لضمان الجودة والسلامة تضمن الامتثال للوائح وأفضل ممارسات الصناعة.",
      icon: "quality",
      featured: true,
      featured_image: {
        path: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        alt: "Quality & Safety Assurance",
        alt_ar: "ضمان الجودة والسلامة",
      },
      tags: ["quality", "safety", "assurance"],
      tags_ar: ["جودة", "سلامة", "ضمان"],
      seoTitle: "Quality & Safety Assurance Services | WASSO",
      seoTitle_ar: "خدمات ضمان الجودة والسلامة | واسو",
      seoDescription:
        "Professional quality and safety assurance services for construction projects.",
      seoDescription_ar:
        "خدمات احترافية لضمان الجودة والسلامة لمشاريع البناء.",
      createdAt: "2024-01-18T00:00:00Z",
      updatedAt: "2024-06-22T00:00:00Z",
    },
  ];

  // Filter by category if provided
  let filteredServices = allServices;
  if (category) {
    filteredServices = allServices.filter(
      (service) => service.category === category
    );
  }

  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedServices = filteredServices.slice(startIndex, endIndex);

  return NextResponse.json(
    {
      success: true,
      message: "Services fetched successfully",
      message_ar: "تم جلب الخدمات بنجاح",
      data: {
        services: paginatedServices,
        pagination: {
          page,
          limit,
          total: filteredServices.length,
          totalPages: Math.ceil(filteredServices.length / limit),
        },
      },
    },
    { status: 200 }
  );
}
