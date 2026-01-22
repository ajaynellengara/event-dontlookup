import { NextResponse } from "next/server";

/**
 * GET /api/services/[slug] - Get service by slug
 */
export async function GET(request, { params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";

  const services = {
    "project-management": {
      id: 1,
      slug: "project-management",
      title: "Project Management",
      title_ar: "إدارة المشاريع",
      category: "management",
      category_ar: "إدارة",
      description:
        "Comprehensive project management services from conception to completion. We handle every aspect of your project to ensure timely delivery and exceptional quality.",
      description_ar:
        "خدمات إدارة مشاريع شاملة من التصور إلى الإنجاز. نتعامل مع كل جانب من جوانب مشروعك لضمان التسليم في الوقت المحدد وجودة استثنائية.",
      full_description:
        "<p>Our project management services cover the entire lifecycle of your project, from initial planning and design through construction and final handover. We work closely with clients, contractors, and stakeholders to ensure seamless execution.</p><p>Our experienced project managers bring years of expertise in managing complex projects across various industries. We use proven methodologies and cutting-edge tools to track progress, manage budgets, and mitigate risks.</p><h3>Key Features:</h3><ul><li>End-to-end project oversight</li><li>Budget and timeline management</li><li>Quality assurance and control</li><li>Risk management</li><li>Stakeholder coordination</li></ul>",
      full_description_ar:
        "<p>تغطي خدمات إدارة المشاريع لدينا دورة حياة مشروعك بالكامل، من التخطيط والتصميم الأولي من خلال البناء والتسليم النهائي. نعمل بشكل وثيق مع العملاء والمقاولين وأصحاب المصلحة لضمان التنفيذ السلس.</p><p>يجلب مديرو المشاريع ذوو الخبرة لدينا سنوات من الخبرة في إدارة المشاريع المعقدة عبر مختلف الصناعات. نستخدم منهجيات مثبتة وأدوات متطورة لتتبع التقدم وإدارة الميزانيات والتخفيف من المخاطر.</p><h3>الميزات الرئيسية:</h3><ul><li>الإشراف على المشروع من البداية إلى النهاية</li><li>إدارة الميزانية والجدول الزمني</li><li>ضمان الجودة والتحكم</li><li>إدارة المخاطر</li><li>تنسيق أصحاب المصلحة</li></ul>",
      icon: "project-management",
      featured: true,
      featured_image: {
        path: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
        alt: "Project Management",
        alt_ar: "إدارة المشاريع",
      },
      gallery: [
        {
          path: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
          alt: "Project Management - Planning",
          alt_ar: "إدارة المشاريع - التخطيط",
        },
        {
          path: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
          alt: "Project Management - Execution",
          alt_ar: "إدارة المشاريع - التنفيذ",
        },
      ],
      benefits: [
        "Timely project delivery",
        "Budget control and optimization",
        "Quality assurance",
        "Risk mitigation",
        "Expert coordination",
      ],
      benefits_ar: [
        "تسليم المشروع في الوقت المحدد",
        "التحكم في الميزانية والتحسين",
        "ضمان الجودة",
        "التخفيف من المخاطر",
        "التنسيق الخبير",
      ],
      process: [
        {
          step: 1,
          title: "Planning & Design",
          title_ar: "التخطيط والتصميم",
          description:
            "Initial project assessment and detailed planning phase.",
          description_ar: "تقييم المشروع الأولي ومرحلة التخطيط التفصيلية.",
        },
        {
          step: 2,
          title: "Execution",
          title_ar: "التنفيذ",
          description:
            "Ongoing project management and coordination.",
          description_ar: "إدارة المشروع المستمرة والتنسيق.",
        },
        {
          step: 3,
          title: "Quality Control",
          title_ar: "مراقبة الجودة",
          description:
            "Regular inspections and quality assurance checks.",
          description_ar: "التفتيشات المنتظمة وفحوصات ضمان الجودة.",
        },
        {
          step: 4,
          title: "Handover",
          title_ar: "التسليم",
          description:
            "Final inspection and project handover to client.",
          description_ar: "التفتيش النهائي وتسليم المشروع للعميل.",
        },
      ],
      tags: ["management", "planning", "execution"],
      tags_ar: ["إدارة", "تخطيط", "تنفيذ"],
      related_services: [2, 3],
      seoTitle: "Project Management Services | WASSO",
      seoTitle_ar: "خدمات إدارة المشاريع | واسو",
      seoDescription:
        "Professional project management services for construction and workspace projects.",
      seoDescription_ar:
        "خدمات إدارة مشاريع احترافية لمشاريع البناء ومساحات العمل.",
      createdAt: "2024-01-10T00:00:00Z",
      updatedAt: "2024-06-15T00:00:00Z",
    },
    "workspace-solutions": {
      id: 2,
      slug: "workspace-solutions",
      title: "Workspace Solutions",
      title_ar: "حلول مساحات العمل",
      category: "design",
      category_ar: "تصميم",
      description:
        "Innovative workspace design and planning solutions tailored to your needs. We create environments that enhance productivity and employee satisfaction.",
      description_ar:
        "حلول تصميم وتخطيط مساحات عمل مبتكرة مصممة خصيصًا لاحتياجاتك. ننشئ بيئات تعزز الإنتاجية ورضا الموظفين.",
      full_description:
        "<p>Our workspace solutions combine functionality with aesthetics to create inspiring work environments. We understand that every organization has unique needs, and we tailor our solutions accordingly.</p><p>From open-plan offices to private suites, collaborative spaces to quiet zones, we design workspaces that support diverse working styles and business requirements.</p><h3>What We Offer:</h3><ul><li>Custom workspace design</li><li>Space optimization</li><li>Ergonomic solutions</li><li>Technology integration</li><li>Sustainable design practices</li></ul>",
      full_description_ar:
        "<p>تجمع حلول مساحات العمل لدينا بين الوظائف والجماليات لإنشاء بيئات عمل ملهمة. نفهم أن كل منظمة لديها احتياجات فريدة، ونصمم حلولنا وفقًا لذلك.</p><p>من المكاتب المفتوحة إلى الأجنحة الخاصة، ومن المساحات التعاونية إلى المناطق الهادئة، نصمم مساحات عمل تدعم أنماط العمل المتنوعة ومتطلبات الأعمال.</p><h3>ما نقدمه:</h3><ul><li>تصميم مساحة عمل مخصص</li><li>تحسين المساحة</li><li>حلول مريحة</li><li>تكامل التكنولوجيا</li><li>ممارسات التصميم المستدام</li></ul>",
      icon: "workspace",
      featured: true,
      featured_image: {
        path: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop",
        alt: "Workspace Solutions",
        alt_ar: "حلول مساحات العمل",
      },
      gallery: [
        {
          path: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop",
          alt: "Workspace Solutions - Modern Office",
          alt_ar: "حلول مساحات العمل - مكتب حديث",
        },
      ],
      benefits: [
        "Increased productivity",
        "Enhanced employee satisfaction",
        "Optimized space utilization",
        "Modern and functional design",
        "Cost-effective solutions",
      ],
      benefits_ar: [
        "زيادة الإنتاجية",
        "تعزيز رضا الموظفين",
        "تحسين استخدام المساحة",
        "تصميم حديث ووظيفي",
        "حلول فعالة من حيث التكلفة",
      ],
      process: [
        {
          step: 1,
          title: "Consultation",
          title_ar: "الاستشارة",
          description:
            "Understanding your needs and requirements.",
          description_ar: "فهم احتياجاتك ومتطلباتك.",
        },
        {
          step: 2,
          title: "Design & Planning",
          title_ar: "التصميم والتخطيط",
          description:
            "Creating customized workspace designs.",
          description_ar: "إنشاء تصاميم مساحات عمل مخصصة.",
        },
        {
          step: 3,
          title: "Implementation",
          title_ar: "التنفيذ",
          description:
            "Executing the workspace transformation.",
          description_ar: "تنفيذ تحويل مساحة العمل.",
        },
      ],
      tags: ["design", "planning", "workspace"],
      tags_ar: ["تصميم", "تخطيط", "مساحة عمل"],
      related_services: [1, 3, 4],
      seoTitle: "Workspace Solutions | WASSO",
      seoTitle_ar: "حلول مساحات العمل | واسو",
      seoDescription:
        "Custom workspace solutions designed to enhance productivity and employee satisfaction.",
      seoDescription_ar:
        "حلول مساحات عمل مخصصة مصممة لتعزيز الإنتاجية ورضا الموظفين.",
      createdAt: "2024-01-12T00:00:00Z",
      updatedAt: "2024-06-18T00:00:00Z",
    },
    "interior-design": {
      id: 3,
      slug: "interior-design",
      title: "Interior Design",
      title_ar: "التصميم الداخلي",
      category: "design",
      category_ar: "تصميم",
      description:
        "Creative interior design services that transform spaces into inspiring environments. Our designs balance aesthetics, functionality, and brand identity.",
      description_ar:
        "خدمات تصميم داخلي إبداعية تحول المساحات إلى بيئات ملهمة. توازن تصاميمنا بين الجماليات والوظائف وهوية العلامة التجارية.",
      full_description:
        "<p>Our interior design team brings creativity and expertise to every project. We create spaces that not only look beautiful but also function seamlessly for your business needs.</p><p>We work with a wide range of styles, from modern minimalist to classic elegance, always ensuring that the design reflects your brand and culture.</p><h3>Design Services Include:</h3><ul><li>Concept development</li><li>3D visualization</li><li>Material selection</li><li>Color schemes</li><li>Furniture and fixture selection</li></ul>",
      full_description_ar:
        "<p>يجلب فريق التصميم الداخلي لدينا الإبداع والخبرة إلى كل مشروع. ننشئ مساحات لا تبدو جميلة فحسب، بل تعمل بسلاسة لاحتياجات عملك.</p><p>نعمل مع مجموعة واسعة من الأنماط، من الحد الأدنى الحديث إلى الأناقة الكلاسيكية، مع ضمان دائمًا أن التصميم يعكس علامتك التجارية وثقافتك.</p><h3>تشمل خدمات التصميم:</h3><ul><li>تطوير المفهوم</li><li>التصور ثلاثي الأبعاد</li><li>اختيار المواد</li><li>أنظمة الألوان</li><li>اختيار الأثاث والتجهيزات</li></ul>",
      icon: "interior-design",
      featured: true,
      featured_image: {
        path: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
        alt: "Interior Design",
        alt_ar: "التصميم الداخلي",
      },
      gallery: [
        {
          path: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
          alt: "Interior Design - Modern Office",
          alt_ar: "التصميم الداخلي - مكتب حديث",
        },
      ],
      benefits: [
        "Beautiful and functional spaces",
        "Brand-aligned design",
        "Improved work environment",
        "Professional aesthetics",
        "Custom solutions",
      ],
      benefits_ar: [
        "مساحات جميلة ووظيفية",
        "تصميم متوافق مع العلامة التجارية",
        "تحسين بيئة العمل",
        "جماليات احترافية",
        "حلول مخصصة",
      ],
      process: [
        {
          step: 1,
          title: "Concept Development",
          title_ar: "تطوير المفهوم",
          description:
            "Creating initial design concepts and mood boards.",
          description_ar: "إنشاء مفاهيم التصميم الأولية ولوحات المزاج.",
        },
        {
          step: 2,
          title: "Design Development",
          title_ar: "تطوير التصميم",
          description:
            "Refining designs and creating detailed plans.",
          description_ar: "تحسين التصاميم وإنشاء خطط تفصيلية.",
        },
        {
          step: 3,
          title: "Implementation",
          title_ar: "التنفيذ",
          description:
            "Overseeing the implementation of the design.",
          description_ar: "الإشراف على تنفيذ التصميم.",
        },
      ],
      tags: ["design", "interior", "creative"],
      tags_ar: ["تصميم", "داخلي", "إبداعي"],
      related_services: [2, 4, 6],
      seoTitle: "Interior Design Services | WASSO",
      seoTitle_ar: "خدمات التصميم الداخلي | واسو",
      seoDescription:
        "Professional interior design services for offices, commercial spaces, and more.",
      seoDescription_ar:
        "خدمات تصميم داخلي احترافية للمكاتب والمساحات التجارية والمزيد.",
      createdAt: "2024-01-15T00:00:00Z",
      updatedAt: "2024-06-20T00:00:00Z",
    },
    "space-planning": {
      id: 4,
      slug: "space-planning",
      title: "Space Planning",
      title_ar: "تخطيط المساحات",
      category: "planning",
      category_ar: "تخطيط",
      description:
        "Strategic space planning to maximize efficiency and functionality. We optimize your layout for better workflow and space utilization.",
      description_ar:
        "تخطيط استراتيجي للمساحات لتعظيم الكفاءة والوظائف. نحسن تخطيطك لتدفق عمل أفضل واستخدام المساحة.",
      full_description:
        "<p>Effective space planning is crucial for creating productive work environments. Our experts analyze your current space and usage patterns to develop optimal layouts.</p><p>We consider factors such as workflow, department interactions, future growth, and regulatory requirements to create plans that work for your business.</p>",
      full_description_ar:
        "<p>تخطيط المساحة الفعال أمر بالغ الأهمية لإنشاء بيئات عمل منتجة. يحلل خبراؤنا مساحتك الحالية وأنماط الاستخدام لتطوير تخطيطات مثلى.</p><p>نأخذ في الاعتبار عوامل مثل تدفق العمل وتفاعلات الأقسام والنمو المستقبلي والمتطلبات التنظيمية لإنشاء خطط تعمل لصالح عملك.</p>",
      icon: "space-planning",
      featured: false,
      featured_image: {
        path: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop",
        alt: "Space Planning",
        alt_ar: "تخطيط المساحات",
      },
      gallery: [],
      benefits: [
        "Optimized space utilization",
        "Improved workflow",
        "Better department coordination",
        "Future-proof planning",
        "Cost efficiency",
      ],
      benefits_ar: [
        "تحسين استخدام المساحة",
        "تحسين تدفق العمل",
        "تنسيق أفضل بين الأقسام",
        "تخطيط مستقبلي",
        "كفاءة التكلفة",
      ],
      process: [
        {
          step: 1,
          title: "Analysis",
          title_ar: "التحليل",
          description:
            "Analyzing current space and usage patterns.",
          description_ar: "تحليل المساحة الحالية وأنماط الاستخدام.",
        },
        {
          step: 2,
          title: "Planning",
          title_ar: "التخطيط",
          description:
            "Developing optimal space plans.",
          description_ar: "تطوير خطط المساحة المثلى.",
        },
        {
          step: 3,
          title: "Implementation",
          title_ar: "التنفيذ",
          description:
            "Executing the space plan.",
          description_ar: "تنفيذ خطة المساحة.",
        },
      ],
      tags: ["planning", "optimization", "efficiency"],
      tags_ar: ["تخطيط", "تحسين", "كفاءة"],
      related_services: [2, 3],
      seoTitle: "Space Planning Services | WASSO",
      seoTitle_ar: "خدمات تخطيط المساحات | واسو",
      seoDescription:
        "Expert space planning services to optimize your workspace layout.",
      seoDescription_ar:
        "خدمات تخطيط مساحات خبيرة لتحسين تخطيط مساحة العمل الخاصة بك.",
      createdAt: "2024-01-18T00:00:00Z",
      updatedAt: "2024-06-22T00:00:00Z",
    },
    "consulting-services": {
      id: 5,
      slug: "consulting-services",
      title: "Consulting Services",
      title_ar: "خدمات الاستشارات",
      category: "consulting",
      category_ar: "استشارات",
      description:
        "Expert consulting services to guide your workspace and project decisions. Get professional advice from our experienced consultants.",
      description_ar:
        "خدمات استشارية خبيرة لتوجيه قرارات مساحة العمل والمشروع الخاصة بك. احصل على نصيحة احترافية من مستشارينا ذوي الخبرة.",
      full_description:
        "<p>Our consulting services provide you with expert guidance on workspace design, project management, and strategic planning. We help you make informed decisions that align with your business goals.</p><p>Whether you're planning a new office, renovating existing space, or optimizing operations, our consultants bring valuable insights and recommendations.</p>",
      full_description_ar:
        "<p>توفر خدمات الاستشارات لدينا لك إرشادات خبيرة حول تصميم مساحة العمل وإدارة المشاريع والتخطيط الاستراتيجي. نساعدك على اتخاذ قرارات مستنيرة تتماشى مع أهداف عملك.</p><p>سواء كنت تخطط لمكتب جديد أو تجدد مساحة موجودة أو تحسن العمليات، يجلب مستشارونا رؤى وتوصيات قيمة.</p>",
      icon: "consulting",
      featured: false,
      featured_image: {
        path: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
        alt: "Consulting Services",
        alt_ar: "خدمات الاستشارات",
      },
      gallery: [],
      benefits: [
        "Expert guidance",
        "Informed decision-making",
        "Strategic planning",
        "Cost optimization",
        "Risk assessment",
      ],
      benefits_ar: [
        "إرشادات خبيرة",
        "اتخاذ قرارات مستنيرة",
        "التخطيط الاستراتيجي",
        "تحسين التكلفة",
        "تقييم المخاطر",
      ],
      process: [
        {
          step: 1,
          title: "Assessment",
          title_ar: "التقييم",
          description:
            "Understanding your needs and challenges.",
          description_ar: "فهم احتياجاتك وتحدياتك.",
        },
        {
          step: 2,
          title: "Analysis",
          title_ar: "التحليل",
          description:
            "Analyzing options and opportunities.",
          description_ar: "تحليل الخيارات والفرص.",
        },
        {
          step: 3,
          title: "Recommendations",
          title_ar: "التوصيات",
          description:
            "Providing expert recommendations.",
          description_ar: "تقديم توصيات خبيرة.",
        },
      ],
      tags: ["consulting", "advisory", "expertise"],
      tags_ar: ["استشارات", "استشاري", "خبرة"],
      related_services: [1, 2],
      seoTitle: "Consulting Services | WASSO",
      seoTitle_ar: "خدمات الاستشارات | واسو",
      seoDescription:
        "Professional consulting services for workspace and project management.",
      seoDescription_ar:
        "خدمات استشارية احترافية لإدارة مساحات العمل والمشاريع.",
      createdAt: "2024-01-20T00:00:00Z",
      updatedAt: "2024-06-25T00:00:00Z",
    },
    "furniture-solutions": {
      id: 6,
      slug: "furniture-solutions",
      title: "Furniture Solutions",
      title_ar: "حلول الأثاث",
      category: "furniture",
      category_ar: "أثاث",
      description:
        "Comprehensive furniture solutions for modern workspaces. We source and provide quality furniture that combines style and functionality.",
      description_ar:
        "حلول أثاث شاملة لمساحات العمل الحديثة. نحصل على أثاث عالي الجودة ونوفره يجمع بين الأناقة والوظائف.",
      full_description:
        "<p>Our furniture solutions cover everything from ergonomic office chairs to executive desks, collaborative furniture to storage solutions. We work with leading manufacturers to provide quality products.</p><p>We help you select furniture that matches your design aesthetic, meets ergonomic standards, and fits your budget.</p>",
      full_description_ar:
        "<p>تغطي حلول الأثاث لدينا كل شيء من الكراسي المكتبية المريحة إلى المكاتب التنفيذية، والأثاث التعاوني إلى حلول التخزين. نعمل مع الشركات المصنعة الرائدة لتوفير منتجات عالية الجودة.</p><p>نساعدك على اختيار أثاث يتماشى مع جماليات التصميم الخاصة بك، ويلبي معايير الراحة، ويناسب ميزانيتك.</p>",
      icon: "furniture",
      featured: false,
      featured_image: {
        path: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=800&fit=crop",
        alt: "Furniture Solutions",
        alt_ar: "حلول الأثاث",
      },
      gallery: [],
      benefits: [
        "Quality furniture",
        "Ergonomic design",
        "Style and functionality",
        "Competitive pricing",
        "Wide selection",
      ],
      benefits_ar: [
        "أثاث عالي الجودة",
        "تصميم مريح",
        "الأناقة والوظائف",
        "أسعار تنافسية",
        "اختيار واسع",
      ],
      process: [
        {
          step: 1,
          title: "Selection",
          title_ar: "الاختيار",
          description:
            "Selecting furniture based on your needs.",
          description_ar: "اختيار الأثاث بناءً على احتياجاتك.",
        },
        {
          step: 2,
          title: "Procurement",
          title_ar: "التوريد",
          description:
            "Sourcing and procuring furniture.",
          description_ar: "الحصول على الأثاث وتوريده.",
        },
        {
          step: 3,
          title: "Installation",
          title_ar: "التركيب",
          description:
            "Professional installation and setup.",
          description_ar: "التركيب والإعداد الاحترافي.",
        },
      ],
      tags: ["furniture", "workspace", "solutions"],
      tags_ar: ["أثاث", "مساحة عمل", "حلول"],
      related_services: [2, 3],
      seoTitle: "Furniture Solutions | WASSO",
      seoTitle_ar: "حلول الأثاث | واسو",
      seoDescription:
        "Quality furniture solutions for offices and commercial spaces.",
      seoDescription_ar:
        "حلول أثاث عالية الجودة للمكاتب والمساحات التجارية.",
      createdAt: "2024-01-22T00:00:00Z",
      updatedAt: "2024-06-28T00:00:00Z",
    },
    "maintenance-support": {
      id: 7,
      slug: "maintenance-support",
      title: "Maintenance & Support",
      title_ar: "الصيانة والدعم",
      category: "support",
      category_ar: "دعم",
      description:
        "Ongoing maintenance and support services to keep your workspace in perfect condition. We ensure your space remains functional and beautiful.",
      description_ar:
        "خدمات صيانة ودعم مستمرة للحفاظ على مساحة العمل الخاصة بك في حالة مثالية. نضمن أن تظل مساحتك وظيفية وجميلة.",
      full_description:
        "<p>Regular maintenance is essential for preserving the quality and functionality of your workspace. Our maintenance services cover everything from routine cleaning to repairs and upgrades.</p><p>We offer flexible maintenance plans tailored to your needs, ensuring your workspace always looks its best and functions optimally.</p>",
      full_description_ar:
        "<p>الصيانة المنتظمة ضرورية للحفاظ على جودة ووظائف مساحة العمل الخاصة بك. تغطي خدمات الصيانة لدينا كل شيء من التنظيف الروتيني إلى الإصلاحات والترقيات.</p><p>نقدم خطط صيانة مرنة مصممة خصيصًا لاحتياجاتك، مما يضمن أن تبدو مساحة العمل الخاصة بك دائمًا في أفضل حالاتها وتعمل بشكل مثالي.</p>",
      icon: "maintenance",
      featured: false,
      featured_image: {
        path: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop",
        alt: "Maintenance & Support",
        alt_ar: "الصيانة والدعم",
      },
      gallery: [],
      benefits: [
        "Regular maintenance",
        "Quick response times",
        "Preventive care",
        "Extended lifespan",
        "Cost savings",
      ],
      benefits_ar: [
        "صيانة منتظمة",
        "أوقات استجابة سريعة",
        "رعاية وقائية",
        "عمر ممتد",
        "توفير التكاليف",
      ],
      process: [
        {
          step: 1,
          title: "Assessment",
          title_ar: "التقييم",
          description:
            "Assessing maintenance needs.",
          description_ar: "تقييم احتياجات الصيانة.",
        },
        {
          step: 2,
          title: "Planning",
          title_ar: "التخطيط",
          description:
            "Creating maintenance schedule.",
          description_ar: "إنشاء جدول الصيانة.",
        },
        {
          step: 3,
          title: "Execution",
          title_ar: "التنفيذ",
          description:
            "Performing maintenance tasks.",
          description_ar: "تنفيذ مهام الصيانة.",
        },
      ],
      tags: ["maintenance", "support", "service"],
      tags_ar: ["صيانة", "دعم", "خدمة"],
      related_services: [1, 2],
      seoTitle: "Maintenance & Support Services | WASSO",
      seoTitle_ar: "خدمات الصيانة والدعم | واسو",
      seoDescription:
        "Professional maintenance and support services for your workspace.",
      seoDescription_ar:
        "خدمات صيانة ودعم احترافية لمساحة العمل الخاصة بك.",
      createdAt: "2024-01-25T00:00:00Z",
      updatedAt: "2024-07-01T00:00:00Z",
    },
  };

  const service = services[slug];

  if (!service) {
    return NextResponse.json(
      {
        success: false,
        message: "Service not found",
        message_ar: "الخدمة غير موجودة",
      },
      { status: 404 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Service fetched successfully",
      message_ar: "تم جلب الخدمة بنجاح",
      data: service,
    },
    { status: 200 }
  );
}
