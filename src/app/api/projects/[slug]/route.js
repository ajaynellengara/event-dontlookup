import { NextResponse } from "next/server";

/**
 * GET /api/projects/[slug] - Get project by slug
 */
export async function GET(request, { params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";

  const projects = {
    "luxury-tower-dubai": {
      id: 1,
      slug: "luxury-tower-dubai",
      title: "Luxury Tower Dubai",
      title_ar: "برج دبي الفاخر",
      category: "corporate",
      category_ar: "مؤسسي",
      description:
        "A state-of-the-art corporate office building featuring modern workspace solutions and ergonomic design. This project showcases our expertise in creating premium office environments that combine functionality with luxury.",
      description_ar:
        "مبنى مكتبي مؤسسي حديث يتميز بحلول مساحات عمل متطورة وتصميم مريح. يعرض هذا المشروع خبرتنا في إنشاء بيئات مكتبية فاخرة تجمع بين الوظائف والرفاهية.",
      full_description:
        "<p>This prestigious project represents a milestone in corporate office design. Located in the heart of Dubai's business district, the Luxury Tower features cutting-edge workspace solutions that prioritize employee well-being and productivity.</p><p>Our team worked closely with the client to understand their unique requirements and delivered a space that exceeds expectations. The design incorporates flexible work zones, collaborative areas, and private executive suites.</p>",
      full_description_ar:
        "<p>يمثل هذا المشروع المرموق علامة فارقة في تصميم المكاتب المؤسسية. يقع في قلب منطقة الأعمال في دبي، ويتميز برج الفخامة بحلول مساحات عمل متطورة تعطي الأولوية لرفاهية الموظفين والإنتاجية.</p><p>عمل فريقنا بشكل وثيق مع العميل لفهم متطلباتهم الفريدة وتقديم مساحة تتجاوز التوقعات. يتضمن التصميم مناطق عمل مرنة ومناطق تعاونية ووحدات تنفيذية خاصة.</p>",
      featured_image: {
        path: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
        alt: "Luxury Tower Dubai",
        alt_ar: "برج دبي الفاخر",
      },
      gallery: [
        {
          path: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
          alt: "Luxury Tower Dubai - Exterior View",
          alt_ar: "برج دبي الفاخر - المنظر الخارجي",
        },
        {
          path: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop",
          alt: "Luxury Tower Dubai - Reception Area",
          alt_ar: "برج دبي الفاخر - منطقة الاستقبال",
        },
        {
          path: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
          alt: "Luxury Tower Dubai - Office Space",
          alt_ar: "برج دبي الفاخر - مساحة المكتب",
        },
        {
          path: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1200&h=800&fit=crop",
          alt: "Luxury Tower Dubai - Meeting Room",
          alt_ar: "برج دبي الفاخر - غرفة الاجتماعات",
        },
      ],
      location: "Dubai, UAE",
      location_ar: "دبي، الإمارات العربية المتحدة",
      client: "Dubai Holdings",
      client_ar: "دبي القابضة",
      year: "2024",
      area: "50,000 sqft",
      area_ar: "50,000 قدم مربع",
      duration: "12 months",
      duration_ar: "12 شهر",
      status: "completed",
      status_ar: "مكتمل",
      tags: ["corporate", "modern", "luxury", "premium"],
      tags_ar: ["مؤسسي", "حديث", "فاخر", "مميز"],
      services: [
        "Project Management",
        "Interior Design",
        "Space Planning",
        "Furniture Solutions",
      ],
      services_ar: [
        "إدارة المشاريع",
        "التصميم الداخلي",
        "تخطيط المساحات",
        "حلول الأثاث",
      ],
      testimonials: [
        {
          quote:
            "WASSO delivered an exceptional office space that perfectly aligns with our vision. The attention to detail and quality of execution exceeded our expectations.",
          quote_ar:
            "قدمت واسو مساحة مكتبية استثنائية تتماشى تمامًا مع رؤيتنا. تجاوز الاهتمام بالتفاصيل وجودة التنفيذ توقعاتنا.",
          author: "Ahmed Al Maktoum",
          position: "CEO, Dubai Holdings",
          position_ar: "الرئيس التنفيذي، دبي القابضة",
        },
      ],
      related_projects: [2, 4],
      seoTitle: "Luxury Tower Dubai - Corporate Office Project | WASSO",
      seoTitle_ar: "برج دبي الفاخر - مشروع مكتب مؤسسي | واسو",
      seoDescription:
        "Modern corporate office building in Dubai featuring innovative workspace solutions. Completed by WASSO Project Management LLC.",
      seoDescription_ar:
        "مبنى مكتبي مؤسسي حديث في دبي يتميز بحلول مساحات عمل مبتكرة. اكتمل بواسطة واسو لإدارة المشاريع ش.ذ.م.م.",
      createdAt: "2024-01-15T00:00:00Z",
      updatedAt: "2024-06-20T00:00:00Z",
    },
    "co-working-space-abu-dhabi": {
      id: 2,
      slug: "co-working-space-abu-dhabi",
      title: "Co-working Space Abu Dhabi",
      title_ar: "مساحة عمل مشتركة أبوظبي",
      category: "coworking",
      category_ar: "مساحات عمل مشتركة",
      description:
        "A vibrant co-working space designed to foster collaboration and creativity. This modern facility provides flexible workspace solutions for startups and entrepreneurs.",
      description_ar:
        "مساحة عمل مشتركة نابضة بالحياة مصممة لتعزيز التعاون والإبداع. توفر هذه المنشأة الحديثة حلول مساحات عمل مرنة للشركات الناشئة ورجال الأعمال.",
      full_description:
        "<p>The Co-working Space in Abu Dhabi is designed to be a hub of innovation and collaboration. With flexible seating arrangements, private pods, meeting rooms, and communal areas, it caters to diverse working styles.</p><p>Our design philosophy focused on creating zones that encourage both focused work and spontaneous collaboration. The space features modern amenities including high-speed internet, printing facilities, and refreshment areas.</p>",
      full_description_ar:
        "<p>تم تصميم مساحة العمل المشتركة في أبوظبي لتكون مركزًا للابتكار والتعاون. مع ترتيبات جلوس مرنة، وحدات خاصة، وغرف اجتماعات، ومناطق مشتركة، تلبي أنماط العمل المتنوعة.</p><p>ركزت فلسفة التصميم لدينا على إنشاء مناطق تشجع العمل المركز والتعاون التلقائي. تتميز المساحة بمرافق حديثة تشمل الإنترنت عالي السرعة ومرافق الطباعة ومناطق المرطبات.</p>",
      featured_image: {
        path: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1200&h=800&fit=crop",
        alt: "Co-working Space Abu Dhabi",
        alt_ar: "مساحة عمل مشتركة أبوظبي",
      },
      gallery: [
        {
          path: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1200&h=800&fit=crop",
          alt: "Co-working Space - Main Area",
          alt_ar: "مساحة العمل المشتركة - المنطقة الرئيسية",
        },
        {
          path: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop",
          alt: "Co-working Space - Private Pods",
          alt_ar: "مساحة العمل المشتركة - الوحدات الخاصة",
        },
      ],
      location: "Abu Dhabi, UAE",
      location_ar: "أبوظبي، الإمارات العربية المتحدة",
      client: "Innovation Hub",
      client_ar: "مركز الابتكار",
      year: "2024",
      area: "25,000 sqft",
      area_ar: "25,000 قدم مربع",
      duration: "8 months",
      duration_ar: "8 أشهر",
      status: "completed",
      status_ar: "مكتمل",
      tags: ["coworking", "collaborative", "modern", "flexible"],
      tags_ar: ["عمل مشترك", "تعاوني", "حديث", "مرن"],
      services: [
        "Space Planning",
        "Interior Design",
        "Furniture Solutions",
      ],
      services_ar: [
        "تخطيط المساحات",
        "التصميم الداخلي",
        "حلول الأثاث",
      ],
      testimonials: [],
      related_projects: [1, 3],
      seoTitle: "Co-working Space Abu Dhabi - Modern Workspace | WASSO",
      seoTitle_ar: "مساحة عمل مشتركة أبوظبي - مساحة عمل حديثة | واسو",
      seoDescription:
        "Innovative co-working space in Abu Dhabi designed for modern professionals. Completed by WASSO Project Management LLC.",
      seoDescription_ar:
        "مساحة عمل مشتركة مبتكرة في أبوظبي مصممة للمهنيين المعاصرين. اكتمل بواسطة واسو لإدارة المشاريع ش.ذ.م.م.",
      createdAt: "2024-02-10T00:00:00Z",
      updatedAt: "2024-07-15T00:00:00Z",
    },
    "university-campus-sharjah": {
      id: 3,
      slug: "university-campus-sharjah",
      title: "University Campus Sharjah",
      title_ar: "حرم جامعي الشارقة",
      category: "education",
      category_ar: "تعليمي",
      description:
        "A comprehensive educational facility with modern classrooms and collaborative spaces designed to enhance the learning experience.",
      description_ar:
        "منشأة تعليمية شاملة مع فصول دراسية حديثة ومساحات تعاونية مصممة لتعزيز تجربة التعلم.",
      full_description:
        "<p>The University Campus in Sharjah represents our commitment to creating educational environments that inspire learning. The facility includes state-of-the-art classrooms, research labs, library spaces, and student lounges.</p><p>Our design approach prioritized flexibility and adaptability, allowing spaces to be reconfigured for different teaching methods and learning styles. The campus also features sustainable design elements and energy-efficient systems.</p>",
      full_description_ar:
        "<p>يمثل الحرم الجامعي في الشارقة التزامنا بإنشاء بيئات تعليمية تلهم التعلم. تشمل المنشأة فصول دراسية متطورة ومختبرات بحثية ومساحات مكتبية وصالات طلابية.</p><p>ركز نهج التصميم لدينا على المرونة والقدرة على التكيف، مما يسمح بإعادة تكوين المساحات لطرق تدريس وأنماط تعلم مختلفة. يتميز الحرم أيضًا بعناصر تصميم مستدامة وأنظمة موفرة للطاقة.</p>",
      featured_image: {
        path: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=800&fit=crop",
        alt: "University Campus Sharjah",
        alt_ar: "حرم جامعي الشارقة",
      },
      gallery: [
        {
          path: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=800&fit=crop",
          alt: "University Campus - Main Building",
          alt_ar: "الحرم الجامعي - المبنى الرئيسي",
        },
        {
          path: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop",
          alt: "University Campus - Classroom",
          alt_ar: "الحرم الجامعي - الفصل الدراسي",
        },
      ],
      location: "Sharjah, UAE",
      location_ar: "الشارقة، الإمارات العربية المتحدة",
      client: "Sharjah University",
      client_ar: "جامعة الشارقة",
      year: "2023",
      area: "100,000 sqft",
      area_ar: "100,000 قدم مربع",
      duration: "18 months",
      duration_ar: "18 شهر",
      status: "completed",
      status_ar: "مكتمل",
      tags: ["education", "campus", "modern", "sustainable"],
      tags_ar: ["تعليمي", "حرم جامعي", "حديث", "مستدام"],
      services: [
        "Project Management",
        "Architectural Design",
        "Interior Design",
        "Space Planning",
      ],
      services_ar: [
        "إدارة المشاريع",
        "التصميم المعماري",
        "التصميم الداخلي",
        "تخطيط المساحات",
      ],
      testimonials: [],
      related_projects: [1, 2],
      seoTitle: "University Campus Sharjah - Educational Facility | WASSO",
      seoTitle_ar: "حرم جامعي الشارقة - منشأة تعليمية | واسو",
      seoDescription:
        "Modern university campus in Sharjah with state-of-the-art facilities. Completed by WASSO Project Management LLC.",
      seoDescription_ar:
        "حرم جامعي حديث في الشارقة مع مرافق متطورة. اكتمل بواسطة واسو لإدارة المشاريع ش.ذ.م.م.",
      createdAt: "2023-05-20T00:00:00Z",
      updatedAt: "2023-12-10T00:00:00Z",
    },
    "tech-startup-office-dubai": {
      id: 4,
      slug: "tech-startup-office-dubai",
      title: "Tech Startup Office Dubai",
      title_ar: "مكتب شركة تقنية ناشئة دبي",
      category: "corporate",
      category_ar: "مؤسسي",
      description:
        "A dynamic office space designed for a growing tech startup with flexible workspaces that adapt to their evolving needs.",
      description_ar:
        "مساحة مكتبية ديناميكية مصممة لشركة تقنية ناشئة متنامية مع مساحات عمل مرنة تتكيف مع احتياجاتها المتطورة.",
      full_description:
        "<p>This tech startup office in Dubai showcases how modern workspace design can support rapid growth and innovation. The space features open-plan areas for collaboration, private focus rooms, and flexible meeting spaces.</p><p>Our design incorporated elements that reflect the tech company's culture, including vibrant colors, modern furniture, and technology-integrated spaces. The layout supports both individual work and team collaboration.</p>",
      full_description_ar:
        "<p>يعرض مكتب الشركة التقنية الناشئة هذا في دبي كيف يمكن لتصميم مساحة العمل الحديثة دعم النمو السريع والابتكار. تتميز المساحة بمناطق مفتوحة للتعاون وغرف تركيز خاصة ومساحات اجتماعات مرنة.</p><p>تضمن تصميمنا عناصر تعكس ثقافة الشركة التقنية، بما في ذلك الألوان النابضة بالحياة والأثاث الحديث والمساحات المتكاملة مع التكنولوجيا. يدعم التخطيط العمل الفردي والتعاون الجماعي.</p>",
      featured_image: {
        path: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop",
        alt: "Tech Startup Office",
        alt_ar: "مكتب شركة تقنية ناشئة",
      },
      gallery: [
        {
          path: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop",
          alt: "Tech Startup Office - Open Space",
          alt_ar: "مكتب شركة تقنية ناشئة - مساحة مفتوحة",
        },
      ],
      location: "Dubai, UAE",
      location_ar: "دبي، الإمارات العربية المتحدة",
      client: "Tech Innovations LLC",
      client_ar: "الابتكارات التقنية ش.ذ.م.م",
      year: "2024",
      area: "15,000 sqft",
      area_ar: "15,000 قدم مربع",
      duration: "6 months",
      duration_ar: "6 أشهر",
      status: "completed",
      status_ar: "مكتمل",
      tags: ["corporate", "tech", "startup", "flexible"],
      tags_ar: ["مؤسسي", "تقني", "ناشئ", "مرن"],
      services: [
        "Interior Design",
        "Space Planning",
        "Furniture Solutions",
      ],
      services_ar: [
        "التصميم الداخلي",
        "تخطيط المساحات",
        "حلول الأثاث",
      ],
      testimonials: [],
      related_projects: [1, 2],
      seoTitle: "Tech Startup Office Dubai - Modern Workspace | WASSO",
      seoTitle_ar: "مكتب شركة تقنية ناشئة دبي - مساحة عمل حديثة | واسو",
      seoDescription:
        "Innovative office space for tech startups in Dubai. Completed by WASSO Project Management LLC.",
      seoDescription_ar:
        "مساحة مكتبية مبتكرة لشركات التقنية الناشئة في دبي. اكتمل بواسطة واسو لإدارة المشاريع ش.ذ.م.م.",
      createdAt: "2024-03-05T00:00:00Z",
      updatedAt: "2024-08-12T00:00:00Z",
    },
  };

  const project = projects[slug];

  if (!project) {
    return NextResponse.json(
      {
        success: false,
        message: "Project not found",
        message_ar: "المشروع غير موجود",
      },
      { status: 404 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Project fetched successfully",
      message_ar: "تم جلب المشروع بنجاح",
      data: project,
    },
    { status: 200 }
  );
}
