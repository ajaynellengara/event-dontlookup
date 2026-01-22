import { NextResponse } from "next/server";

/**
 * GET /api/about - Get about page data
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";

  const aboutData = {
    hero: {
      title: "About WASSO",
      title_ar: "عن واسو",
      subtitle:
        "Leading Project Management and Workspace Solutions",
      subtitle_ar:
        "الحلول الرائدة في إدارة المشاريع ومساحات العمل",
      description:
        "We are a premier project management company specializing in workspace solutions, interior design, and construction management across the UAE.",
      description_ar:
        "نحن شركة إدارة مشاريع رائدة متخصصة في حلول مساحات العمل والتصميم الداخلي وإدارة البناء في جميع أنحاء الإمارات العربية المتحدة.",
      featured_image: {
        path: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop",
        alt: "About WASSO",
        alt_ar: "عن واسو",
      },
    },
    mission: {
      title: "Our Mission",
      title_ar: "مهمتنا",
      description:
        "To deliver exceptional project management and workspace solutions that transform how businesses operate, creating environments that inspire productivity and success.",
      description_ar:
        "تقديم حلول إدارة مشاريع ومساحات عمل استثنائية تحول طريقة عمل الشركات، وإنشاء بيئات تلهم الإنتاجية والنجاح.",
      icon: "mission",
    },
    vision: {
      title: "Our Vision",
      title_ar: "رؤيتنا",
      description:
        "To be the leading provider of workspace solutions in the Middle East, recognized for innovation, quality, and client satisfaction.",
      description_ar:
        "أن نكون المزود الرائد لحلول مساحات العمل في الشرق الأوسط، معترف بنا للابتكار والجودة ورضا العملاء.",
      icon: "vision",
    },
    values: [
      {
        title: "Excellence",
        title_ar: "التميز",
        description:
          "We strive for excellence in every project, ensuring the highest standards of quality and service.",
        description_ar:
          "نسعى للتميز في كل مشروع، وضمان أعلى معايير الجودة والخدمة.",
        icon: "excellence",
      },
      {
        title: "Innovation",
        title_ar: "الابتكار",
        description:
          "We embrace innovation and cutting-edge solutions to deliver exceptional results.",
        description_ar:
          "نتبنى الابتكار والحلول المتطورة لتقديم نتائج استثنائية.",
        icon: "innovation",
      },
      {
        title: "Integrity",
        title_ar: "النزاهة",
        description:
          "We conduct business with honesty, transparency, and ethical practices.",
        description_ar:
          "نمارس الأعمال بأمانة وشفافية وممارسات أخلاقية.",
        icon: "integrity",
      },
      {
        title: "Client Focus",
        title_ar: "التركيز على العميل",
        description:
          "Our clients are at the heart of everything we do. We prioritize their needs and satisfaction.",
        description_ar:
          "عملاؤنا هم في قلب كل ما نقوم به. نعطي الأولوية لاحتياجاتهم ورضاهم.",
        icon: "client-focus",
      },
    ],
    story: {
      title: "Our Story",
      title_ar: "قصتنا",
      content:
        "<p>Founded in 2020, WASSO Project Management LLC has quickly established itself as a trusted partner for businesses seeking innovative workspace solutions. What started as a small team with a big vision has grown into a leading company serving clients across the UAE.</p><p>Our journey began with a simple belief: that well-designed workspaces can transform businesses. We've worked tirelessly to bring this vision to life, completing numerous projects that have redefined how companies operate.</p><p>Today, we continue to push boundaries, embracing new technologies and design philosophies to create spaces that not only meet but exceed our clients' expectations.</p>",
      content_ar:
        "<p>تأسست واسو لإدارة المشاريع ش.ذ.م.م في عام 2020، وسرعان ما أثبتت نفسها كشريك موثوق للشركات التي تسعى إلى حلول مساحات عمل مبتكرة. ما بدأ كفريق صغير برؤية كبيرة نما ليصبح شركة رائدة تخدم العملاء في جميع أنحاء الإمارات العربية المتحدة.</p><p>بدأت رحلتنا بمعتقد بسيط: أن مساحات العمل المصممة جيدًا يمكن أن تحول الشركات. لقد عملنا بلا كلل لتحقيق هذه الرؤية، وأكملنا العديد من المشاريع التي أعادت تعريف طريقة عمل الشركات.</p><p>اليوم، نواصل دفع الحدود، واعتماد التقنيات وفلسفات التصميم الجديدة لإنشاء مساحات لا تلبي فحسب بل تتجاوز توقعات عملائنا.</p>",
      timeline: [
        {
          year: "2020",
          title: "Company Founded",
          title_ar: "تأسيس الشركة",
          description:
            "WASSO Project Management LLC was established with a vision to transform workspaces.",
          description_ar:
            "تم تأسيس واسو لإدارة المشاريع ش.ذ.م.م برؤية لتحويل مساحات العمل.",
        },
        {
          year: "2021",
          title: "First Major Project",
          title_ar: "أول مشروع رئيسي",
          description:
            "Completed our first large-scale corporate office project in Dubai.",
          description_ar:
            "أكملنا أول مشروع مكتب مؤسسي واسع النطاق في دبي.",
        },
        {
          year: "2023",
          title: "Regional Expansion",
          title_ar: "التوسع الإقليمي",
          description:
            "Expanded operations to Abu Dhabi and Sharjah, serving clients across the UAE.",
          description_ar:
            "توسعنا في العمليات إلى أبوظبي والشارقة، وخدمة العملاء في جميع أنحاء الإمارات العربية المتحدة.",
        },
        {
          year: "2024",
          title: "Industry Recognition",
          title_ar: "الاعتراف بالصناعة",
          description:
            "Received recognition for excellence in workspace design and project management.",
          description_ar:
            "حصلنا على اعتراف بالتميز في تصميم مساحات العمل وإدارة المشاريع.",
        },
      ],
    },
    team: {
      title: "Our Team",
      title_ar: "فريقنا",
      description:
        "Our diverse team of professionals brings together expertise in project management, design, construction, and consulting.",
      description_ar:
        "يجمع فريقنا المتنوع من المحترفين الخبرة في إدارة المشاريع والتصميم والبناء والاستشارات.",
      stats: [
        {
          number: "50+",
          label: "Team Members",
          label_ar: "عضو فريق",
        },
        {
          number: "100+",
          label: "Projects Completed",
          label_ar: "مشروع مكتمل",
        },
        {
          number: "15+",
          label: "Years Combined Experience",
          label_ar: "سنة خبرة مجتمعة",
        },
      ],
    },
    achievements: [
      {
        title: "ISO Certified",
        title_ar: "معتمد ISO",
        description:
          "Certified for quality management systems and project management excellence.",
        description_ar:
          "معتمد لأنظمة إدارة الجودة والتميز في إدارة المشاريع.",
      },
      {
        title: "Award Winning",
        title_ar: "حائز على جوائز",
        description:
          "Recognized for outstanding workspace design and project execution.",
        description_ar:
          "معترف به للتصميم المتميز لمساحات العمل وتنفيذ المشروع.",
      },
      {
        title: "Client Satisfaction",
        title_ar: "رضا العملاء",
        description:
          "98% client satisfaction rate across all completed projects.",
        description_ar:
          "معدل رضا العملاء 98% عبر جميع المشاريع المكتملة.",
      },
    ],
    certifications: [
      {
        name: "ISO 9001:2015",
        name_ar: "ISO 9001:2015",
        description: "Quality Management Systems",
        description_ar: "أنظمة إدارة الجودة",
      },
      {
        name: "PMI Certified",
        name_ar: "معتمد PMI",
        description: "Project Management Institute",
        description_ar: "معهد إدارة المشاريع",
      },
    ],
    seoTitle: "About WASSO - Project Management & Workspace Solutions",
    seoTitle_ar: "عن واسو - إدارة المشاريع وحلول مساحات العمل",
    seoDescription:
      "Learn about WASSO Project Management LLC, a leading provider of workspace solutions and project management services in the UAE.",
    seoDescription_ar:
      "تعرف على واسو لإدارة المشاريع ش.ذ.م.م، مزود رائد لحلول مساحات العمل وخدمات إدارة المشاريع في الإمارات العربية المتحدة.",
  };

  return NextResponse.json(
    {
      success: true,
      message: "About data fetched successfully",
      message_ar: "تم جلب بيانات من نحن بنجاح",
      data: aboutData,
    },
    { status: 200 }
  );
}
