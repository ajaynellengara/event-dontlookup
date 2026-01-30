import { NextResponse } from "next/server";

/**
 * GET /api/home
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";
  const homeData = {
    hero: {
      sliders: [
        {
          id: 1,
          title: "Designing Spaces,<span>Defining Lifestyles</span> ",
          title_ar: "تصميم المساحات، تعريف أنماط الحياة",
          project_tag: "PROJECT",
          project_tag_ar: "مشروع",
          project_name: "SKYLINE HEIGHTS",
          project_name_ar: "سكايلاين هايتس",
          media_type: "image",
          media_alt: "Skyline Heights Project",
          media_alt_ar: "مشروع سكايلاين هايتس",
          media_desktop_path: "/images/home-hero-1.jpg",
          media_mobile_path: "/images/home-hero-1.jpg",
        },
        {
          id: 2,
          title: "Transforming Visions,<span> into Reality</span>",
          title_ar: "تحويل الرؤى إلى واقع",
          project_tag: "PROJECT",
          project_tag_ar: "مشروع",
          project_name: "INFORMATION & TECHNOLOGY COMPLEX",
          project_name_ar: "مجمع المعلومات والتكنولوجيا",
          media_type: "image",
          media_alt: "IT Complex Project",
          media_alt_ar: "مشروع المجمع التقني",
          media_desktop_path: "/images/home-hero-2.jpg",
          media_mobile_path: "/images/home-hero-2.jpg",
        },
        {
          id: 3,
          title: "Building Excellence,<span> Creating Legacy</span>",
          title_ar: "بناء التميز، خلق الإرث",
          project_tag: "PROJECT",
          project_tag_ar: "مشروع",
          project_name: "GOLDEN DUNES APARTMENTS",
          project_name_ar: "الإقامة الفاخرة",
          media_type: "image",
          media_alt: "Luxury Residence Project",
          media_alt_ar: "مشروع الإقامة الفاخرة",
          media_desktop_path: "/images/home-hero-3.jpg",
          media_mobile_path: "/images/home-hero-3.jpg",
        },
        {
          id: 4,
          title: "Building Excellence,<span> Creating Legacy</span>",
          title_ar: "بناء التميز، خلق الإرث",
          project_tag: "PROJECT",
          project_tag_ar: "مشروع",
          project_name: "EMERALD OASIS HOMES",
          project_name_ar: "الإقامة الفاخرة",
          media_type: "image",
          media_alt: "Luxury Residence Project",
          media_alt_ar: "مشروع الإقامة الفاخرة",
          media_desktop_path: "/images/home-hero-4.jpg",
          media_mobile_path: "/images/home-hero-4.jpg",
        },
        {
          id: 5,
          title: "Building Excellence,<span> Creating Legacy</span>",
          title_ar: "بناء التميز، خلق الإرث",
          project_tag: "PROJECT",
          project_tag_ar: "مشروع",
          project_name: "BLUE HORIZON TOWERS",
          project_name_ar: "الإقامة الفاخرة",
          media_type: "image",
          media_alt: "Luxury Residence Project",
          media_alt_ar: "مشروع الإقامة الفاخرة",
          media_desktop_path: "/images/home-hero-5.jpg",
          media_mobile_path: "/images/home-hero-5.jpg",
        },
      ],
    },

    aboutSection: {
      sub_title: "ABOUT WASSO",
      sub_title_ar: "عن واسو",
      title: "Discover the WASSO Difference",
      title_ar: "اكتشف الفرق في واسو",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      description_ar:
        "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت. سيد دو إيوسمود تيمبور إنسيديدونت أوت لابور إت دولور ماجنا أليكوا.",
      button: {
        label: "Know More",
        label_ar: "اعرف المزيد",
        link: "/about",
      },
      media_type: "image",
      media_alt: "WASSO Graphic",
      media_alt_ar: "مشروع سكايلاين هايتس",
      media_path: "/images/home-about-1.jpg",
      mission: {
        title: "Our Mission",
        title_ar: "مهمتنا",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
        description_ar:
          "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت. سيد دو إيوسمود تيمبور إنسيديدونت أوت لابور إت دولور ماجنا أليكوا.",
      },
      vision: {
        title: "Our Vision",
        title_ar: "رؤيتنا",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        description_ar:
          "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت. سيد دو إيوسمود تيمبور إنسيديدونت أوت لابور إت دولور ماجنا أليكوا.",
      },
      sister_concern: {
        title: "Our Sister Concern",
        title_ar: "شركتنا الشقيقة",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        description_ar:
          "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت. سيد دو إيوسمود تيمبور إنسيديدونت أوت لابور إت دولور ماجنا أليكوا.",
        logo_path: "/images/hwmn-logo.png",
        logo_alt: "Sister Concern Logo",
        logo_alt_ar: "شعار الشركة الشقيقة",
      },
    },

    statistics: {
      title: "Our Achievements",
      title_ar: "إنجازاتنا",
      items: [
        {
          number: "25",
          suffix: "+",
          label: "Years of Experience",
          label_ar: "سنة من الخبرة",
          description: "Trusted project management solutions across the UAE.",
          description_ar:
            "حلول إدارة مشاريع موثوقة في جميع أنحاء الإمارات العربية المتحدة.",
        },
        {
          number: "50",
          suffix: "+",
          label: "Projects Delivered",
          label_ar: "مشروع تم تسليمه",
          description:
            "Completed residential, commercial, and infrastructure projects.",
          description_ar: "مشاريع سكنية وتجارية وبنية تحتية مكتملة.",
        },
        {
          number: "2",
          suffix: "B+",
          label: "Project Value Managed",
          label_ar: "قيمة المشاريع المدارة",
          description:
            "Managing diverse projects with precision and efficiency.",
          description_ar: "إدارة مشاريع متنوعة بدقة وكفاءة.",
        },
        {
          number: "300",
          suffix: "+",
          label: "Expert Professionals",
          label_ar: "محترف خبير",
          description: "Skilled team delivering quality, on-time execution.",
          description_ar:
            "فريق ماهر يقدم تنفيذًا عالي الجودة وفي الوقت المحدد.",
        },
        {
          number: "95",
          suffix: "%",
          label: "Client Satisfaction",
          label_ar: "رضا العملاء",
          description: "Proven record of exceeding project expectations.",
          description_ar: "سجل مثبت في تجاوز توقعات المشروع.",
        },
      ],
    },

    services: {
      sub_title: "OUR SERVICES",
      sub_title_ar: "خدماتنا",
      title: "Shaping Projects, Building Trust",
      title_ar: "تشكيل المشاريع، بناء الثقة",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      description_ar:
        "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت. سيد دو إيوسمود تيمبور إنسيديدونت أوت لابور إت دولور ماجنا أليكوا.",
      button: {
        label: "All Services",
        label_ar: "جميع الخدمات",
        link: "/services",
      },
      items: [
        {
          id: 1,
          title: "Project<br/> Management",
          title_ar: "إدارة المشاريع",
          description:
            "Our expert team of engineers and supervisors oversee construction works, ensuring that all activities meet technical specifications, safety regulations, and international best practices. This guarantees that your project is built to last.",
          description_ar:
            "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت. سيد دو إيوسمود تيمبور إنسيديدونت أوت لابور إت دولور ماجنا أليكوا.",
          slug: "project-management",
          icon_path: "/images/home-services-icon-.svg",
          media: {
            path: "/images/home-services-1.jpg",
            alt: "Project Management",
            alt_ar: "إدارة المشاريع",
          },
        },
        {
          id: 2,
          title: "Engineering<br/> Supervision",
          title_ar: "الإشراف الهندسي",
          description:
            "Our expert team of engineers and supervisors oversee construction works, ensuring that all activities meet technical specifications, safety regulations, and international best practices. This guarantees that your project is built to last.",
          description_ar:
            "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت. سيد دو إيوسمود تيمبور إنسيديدونت أوت لابور إت دولور ماجنا أليكوا.",
          slug: "engineering-supervision",
          icon_path: "/images/home-services-icon-.svg",
          media: {
            path: "/images/home-services-2.jpg",
            alt: "Engineering Supervision",
            alt_ar: "الإشراف الهندسي",
          },
        },
        {
          id: 3,
          title: "Contracts & Tenders Management",
          title_ar: "إدارة العقود والمناقصات",
          description:
            "Our expert team of engineers and supervisors oversee construction works, ensuring that all activities meet technical specifications, safety regulations, and international best practices. This guarantees that your project is built to last.",
          description_ar:
            "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت. سيد دو إيوسمود تيمبور إنسيديدونت أوت لابور إت دولور ماجنا أليكوا.",
          slug: "contracts-tenders-management",
          icon_path: "/images/home-services-icon-.svg",
          media: {
            path: "/images/home-services-3.jpg",
            alt: "Contracts & Tenders Management",
            alt_ar: "إدارة العقود والمناقصات",
          },
        },
        {
          id: 4,
          title: "Quality & Safety Assurance",
          title_ar: "ضمان الجودة والسلامة",
          description:
            "Our expert team of engineers and supervisors oversee construction works, ensuring that all activities meet technical specifications, safety regulations, and international best practices. This guarantees that your project is built to last.",
          description_ar:
            "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت. سيد دو إيوسمود تيمبور إنسيديدونت أوت لابور إت دولور ماجنا أليكوا.",
          slug: "quality-safety-assurance",
          icon_path: "/images/home-services-icon-.svg",
          media: {
            path: "/images/home-services-4.jpg",
            alt: "Quality & Safety Assurance",
            alt_ar: "ضمان الجودة والسلامة",
          },
        },
        {
          id: 5,
          title: "Contracts & Tenders Management",
          title_ar: "إدارة العقود والمناقصات",
          description:
            "Our expert team of engineers and supervisors oversee construction works, ensuring that all activities meet technical specifications, safety regulations, and international best practices. This guarantees that your project is built to last.",
          description_ar:
            "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت. سيد دو إيوسمود تيمبور إنسيديدونت أوت لابور إت دولور ماجنا أليكوا.",
          slug: "contracts-tenders-management",
          icon_path: "/images/home-services-icon-.svg",
          media: {
            path: "/images/home-services-1.jpg",
            alt: "Contracts & Tenders Management",
            alt_ar: "إدارة العقود والمناقصات",
          },
        },
      ],
    },

    portfolio: {
      sub_title: "LATEST PROJECTS",
      sub_title_ar: "أحدث المشاريع",
      title: "Our Signature Portfolio",
      title_ar: "محفظتنا المميزة",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
      description_ar:
        "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت. سيد دو إيوسمود تيمبور إنسيديدونت أوت لابور إت دولور ماجنا أليكوا.",
      button: {
        label: "View All Projects",
        label_ar: "عرض جميع المشاريع",
        link: "/projects",
      },
      items: [
        {
          id: 1,
          slug: "information-technology-complex",
          title: "Information & Technology Complex",
          title_ar: "مجمع المعلومات والتكنولوجيا",
          location: "Riyadh, KSA",
          location_ar: "الرياض، المملكة العربية السعودية",
          media: {
            path: "/images/home-portfolio-1.jpg",
            alt: "Information & Technology Complex",
            alt_ar: "مجمع المعلومات والتكنولوجيا",
          },
        },
        {
          id: 2,
          slug: "skyline-heights",
          title: "Skyline Heights",
          title_ar: "سكايلاين هايتس",
          location: "Dubai, UAE",
          location_ar: "دبي، الإمارات العربية المتحدة",
          media: {
            path: "/images/home-portfolio-2.jpg",
            alt: "Skyline Heights",
            alt_ar: "سكايلاين هايتس",
          },
        },
        {
          id: 3,
          slug: "luxury-residence",
          title: "Luxury Residence",
          title_ar: "الإقامة الفاخرة",
          location: "Dubai, UAE",
          location_ar: "دبي، الإمارات العربية المتحدة",
          media: {
            path: "/images/home-portfolio-3.jpg",
            alt: "Luxury Residence",
            alt_ar: "الإقامة الفاخرة",
          },
        },
        {
          id: 4,
          slug: "luxury-residence",
          title: "Luxury Residence",
          title_ar: "الإقامة الفاخرة",
          location: "Dubai, UAE",
          location_ar: "دبي، الإمارات العربية المتحدة",
          media: {
            path: "/images/home-portfolio-1.jpg",
            alt: "Luxury Residence",
            alt_ar: "الإقامة الفاخرة",
          },
        },
        {
          id: 5,
          slug: "skyline-heights",
          title: "Skyline Heights",
          title_ar: "سكايلاين هايتس",
          location: "Dubai, UAE",
          location_ar: "دبي، الإمارات العربية المتحدة",
          media: {
            path: "/images/home-portfolio-2.jpg",
            alt: "Skyline Heights",
            alt_ar: "سكايلاين هايتس",
          },
        },
        {
          id: 6,
          slug: "luxury-residence",
          title: "Luxury Residence",
          title_ar: "الإقامة الفاخرة",
          location: "Dubai, UAE",
          location_ar: "دبي، الإمارات العربية المتحدة",
          media: {
            path: "/images/home-portfolio-3.jpg",
            alt: "Luxury Residence",
            alt_ar: "الإقامة الفاخرة",
          },
        },
      ],
    },

    partners: {
      sub_title: "PARTNERS",
      sub_title_ar: "الشركاء",
      title: "Trusted by <br /> Leading Partners",
      title_ar: "موثوق به من قبل شركاء رائدين",
      items: [
        {
          id: 1,
          name: "EMPOWER",
          media: {
            path: "/images/partner-1.png",
            alt: "EMPOWER",
            alt_ar: "إمباور",
          },
        },
        {
          id: 2,
          name: "LAGUNA TOWER",
          media: {
            path: "/images/partner-2.png",
            alt: "Laguna Tower",
            alt_ar: "برج لاجونا",
          },
        },
        {
          id: 3,
          name: "WARNER BROS. WORLD",
          media: {
            path: "/images/partner-3.png",
            alt: "Warner Bros. World",
            alt_ar: "وارنر بروس وورلد",
          },
        },
        {
          id: 4,
          name: "CAYAN",
          media: {
            path: "/images/partner-4.png",
            alt: "Cayan",
            alt_ar: "كيان",
          },
        },
        {
          id: 5,
          name: "TECOM INVESTMENTS",
          media: {
            path: "/images/partner-5.png",
            alt: "TECOM Investments",
            alt_ar: "استثمارات تيكوم",
          },
        },
        {
          id: 6,
          name: "Dubai Industrial City",
          media: {
            path: "/images/partner-6.png",
            alt: "Dubai Industrial City",
            alt_ar: "مدينة دبي الصناعية",
          },
        },
        {
          id: 7,
          name: "NAKHEEL",
          media: {
            path: "/images/partner-7.png",
            alt: "Nakheel",
            alt_ar: "نخيل",
          },
        },
        {
          id: 8,
          name: "MUBADALA",
          media: {
            path: "/images/partner-8.png",
            alt: "Mubadala",
            alt_ar: "مبادلة",
          },
        },
        {
          id: 9,
          name: "Saudi Aramco",
          media: {
            path: "/images/partner-9.png",
            alt: "Saudi Aramco",
            alt_ar: "أرامكو السعودية",
          },
        },
        {
          id: 6,
          name: "Saudi Aramco",
          media: {
            path: "/images/partner-10.png",
            alt: "Saudi Aramco",
            alt_ar: "أرامكو السعودية",
          },
        },
        {
          id: 1,
          name: "EMPOWER",
          media: {
            path: "/images/partner-1.png",
            alt: "EMPOWER",
            alt_ar: "إمباور",
          },
        },
        {
          id: 2,
          name: "LAGUNA TOWER",
          media: {
            path: "/images/partner-2.png",
            alt: "Laguna Tower",
            alt_ar: "برج لاجونا",
          },
        },
        {
          id: 3,
          name: "WARNER BROS. WORLD",
          media: {
            path: "/images/partner-3.png",
            alt: "Warner Bros. World",
            alt_ar: "وارنر بروس وورلد",
          },
        },
        {
          id: 4,
          name: "CAYAN",
          media: {
            path: "/images/partner-4.png",
            alt: "Cayan",
            alt_ar: "كيان",
          },
        },
        {
          id: 5,
          name: "TECOM INVESTMENTS",
          media: {
            path: "/images/partner-5.png",
            alt: "TECOM Investments",
            alt_ar: "استثمارات تيكوم",
          },
        },
      ],
    },
  };

  return NextResponse.json(
    {
      success: true,
      message: "Home data fetched successfully",
      message_ar: "تم جلب بيانات الصفحة الرئيسية بنجاح",
      data: homeData,
    },
    { status: 200 },
  );
}
