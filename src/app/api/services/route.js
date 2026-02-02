import { NextResponse } from "next/server";

/**
 * GET /api/home
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";
  const serviceData = {
    serviceInfo: {
      heading: "Comprehensive Project Solutions",
      subHeading: "Our Services",
      description:
        "Wasso is a leading project management company committed to delivering excellence in construction and engineering solutions. We specialize in providing end-to-end services that ensure projects are completed on time, within budget, and to the highest quality standards.",
      services: [
        {
          title: "Project Management",
          excerpt:
            "We understand that successful projects require more than planning — they demand foresight, coordination, and commitment.",
          slug: "project-management",
          icon: "project-management"
        },
        {
          title: "Engineering Supervision",
          excerpt:
            "We provide hands-on engineering supervision to maintain quality and compliance throughout the project lifecycle.",
          slug: "engineering-supervision",
          icon: "engineering-supervision"
        },
        {
          title: "Contracts & Tenders Management",
          excerpt:
            "Navigating contracts and tenders can be complex and time-consuming. We simplify the process with end-to-end management.",
          slug: "contracts-and-tenders-management",
          icon: "contracts-tenders"
        },
        {
          title: "Quality & Safety Assurance",
          excerpt:
            "Quality and safety are at the heart of everything we do, enforcing rigorous quality control systems.",
          slug: "quality-and-safety-assurance",
          icon: "quality-safety"
        }
      ]
    }

  };

  return NextResponse.json(
    {
      success: true,
      message: "Service data fetched successfully",
      message_ar: "تم جلب بيانات الصفحة الرئيسية بنجاح",
      data: serviceData,
    },
    { status: 200 },
  );
}
