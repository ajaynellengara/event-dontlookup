import { NextResponse } from "next/server";

/**
 * GET /api/global
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";

  const globalData = {
    header_data: {
      id: "uuid-primary-key",
      name: "WASSO Project Management LLC",
      name_ar: "واسو لإدارة المشاريع",
      slug: "/",
      logoUrl: "/images/brand-logo.svg",
      logoWhiteUrl: "/images/brand-footer-logo.svg",
      description: "Leading project management and workspace solutions",
      description_ar: "الحلول الرائدة في إدارة المشاريع ومساحات العمل",
      websiteUrl: "https://wasso.ae/",
      countryOfOrigin: "AE",
      establishedYear: "2025",
      specialties: ["project management", "workspace solutions", "office furniture"],
      specialties_ar: ["إدارة المشاريع", "حلول مساحات العمل", "أثاث المكاتب"],
      isFeatured: true,
      sortOrder: 0,
      isActive: true,
      seoTitle: "WASSO Project Management LLC",
      seoTitle_ar: "واسو لإدارة المشاريع",
      seoDescription: "Leading project management and workspace solutions",
      seoDescription_ar: "الحلول الرائدة في إدارة المشاريع ومساحات العمل",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    navigation_data: [
      {
        id: 1,
        hasSubmenu: false,
        name: "Home",
        name_ar: "الرئيسية",
        slug: "/",
      },
      {
        id: 2,
        hasSubmenu: true,
        name: "Services",
        name_ar: "الخدمات",
        slug: "/services",
        items: [
          {
            id: 1,
            hasSubmenu: true,
            name: "Project Management",
            name_ar: "إدارة المشاريع",
            slug: null,
            image:
              "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=450&h=300&fit=crop",
            items: [
              {
                id: 1,
                hasSubmenu: false,
                name: "Construction Management",
                name_ar: "إدارة البناء",
                slug: "/services/construction-management",
                image:
                  "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=450&h=300&fit=crop",
              },
              {
                id: 2,
                hasSubmenu: false,
                name: "Design & Planning",
                name_ar: "التصميم والتخطيط",
                slug: "/services/design-planning",
                image: "https://picsum.photos/450/300",
              },
            ],
          },
          {
            id: 2,
            hasSubmenu: true,
            name: "Workspace Solutions",
            name_ar: "حلول مساحات العمل",
            slug: "/services/workspace-solutions",
            image:
              "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=450&h=300&fit=crop",
            items: [
              {
                id: 1,
                hasSubmenu: false,
                name: "Office Design",
                name_ar: "تصميم المكاتب",
                slug: "/services/office-design",
                image:
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=450&h=300&fit=crop",
              },
              {
                id: 2,
                hasSubmenu: false,
                name: "Space Planning",
                name_ar: "تخطيط المساحات",
                slug: "/services/space-planning",
                image:
                  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=450&h=300&fit=crop",
              },
              {
                id: 3,
                hasSubmenu: false,
                name: "Furniture Solutions",
                name_ar: "حلول الأثاث",
                slug: "/services/furniture-solutions",
                image:
                  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=450&h=300&fit=crop",
              },
            ],
          },
          {
            id: 3,
            hasSubmenu: false,
            name: "Consulting Services",
            name_ar: "خدمات الاستشارات",
            slug: "/services/consulting",
            image:
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=450&h=300&fit=crop",
          },
          {
            id: 4,
            hasSubmenu: false,
            name: "Maintenance & Support",
            name_ar: "الصيانة والدعم",
            slug: "/services/maintenance-support",
            image:
              "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=450&h=300&fit=crop",
          },
        ],
      },
      {
        id: 3,
        hasSubmenu: true,
        name: "Projects",
        name_ar: "المشاريع",
        slug: "/projects",
        items: [
          {
            id: 1,
            hasSubmenu: false,
            name: "Corporate Offices",
            name_ar: "المكاتب المؤسسية",
            slug: "/projects/corporate",
            image:
              "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=450&h=300&fit=crop",
          },
          {
            id: 2,
            hasSubmenu: false,
            name: "Co-working Spaces",
            name_ar: "مساحات العمل المشتركة",
            slug: "/projects/coworking",
            image:
              "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=450&h=300&fit=crop",
          },
          {
            id: 3,
            hasSubmenu: false,
            name: "Educational Institutions",
            name_ar: "المؤسسات التعليمية",
            slug: "/projects/education",
            image:
              "https://images.unsplash.com/photo-1562774053-701939374585?w=450&h=300&fit=crop",
          },
        ],
      },
      {
        id: 4,
        hasSubmenu: false,
        name: "About Us",
        name_ar: "من نحن",
        slug: "/about",
      },
      {
        id: 5,
        hasSubmenu: false,
        name: "Careers",
        name_ar: "الوظائف",
        slug: "/careers",
      },
      {
        id: 6,
        hasSubmenu: false,
        name: "Contact Us",
        name_ar: "اتصل بنا",
        slug: "/contact",
      },
    ],
    footer_data: {
      id: "uuid-primary-key",
      name: "WASSO Project Management LLC",
      name_ar: "واسو لإدارة المشاريع",
      slug: "/",
      logoUrl: "/images/brand-footer-logo.svg",
      logoWhiteUrl: "/images/brand-logo.svg",
      address:
        "<p>WASSO Project Management LLC<br /> Office No 133, Business Tower, Meydan Road,<br /> Al Qouz, Dubai P.O Box: 294568</p>",
      address_ar:
        "<p>واسو لإدارة المشاريع ش.ذ.م.م<br /> مكتب رقم 133، برج الأعمال، طريق ميدان،<br /> القوز، دبي ص.ب: 294568</p>",
      websiteUrl: "https://wasso.ae/",
      services_navigation: [
        {
          id: "01",
          label: "Project Management",
          label_ar: "إدارة المشاريع",
          link: "/services/project-management",
        },
        {
          id: "02",
          label: "Workspace Solutions",
          label_ar: "حلول مساحات العمل",
          link: "/services/workspace-solutions",
        },
        {
          id: "03",
          label: "Consulting",
          label_ar: "الاستشارات",
          link: "/services/consulting",
        },
        {
          id: "04",
          label: "View All Services",
          label_ar: "عرض جميع الخدمات",
          link: "/services",
        },
      ],
      quick_link_navigation: [
        {
          id: "01",
          label: "Home",
          label_ar: "الرئيسية",
          link: "/",
        },
        {
          id: "02",
          label: "About",
          label_ar: "من نحن",
          link: "/about",
        },
        {
          id: "03",
          label: "Contact",
          label_ar: "اتصل بنا",
          link: "/contact",
        },
        {
          id: "04",
          label: "Projects",
          label_ar: "المشاريع",
          link: "/projects",
        },
        {
          id: "05",
          label: "Careers",
          label_ar: "الوظائف",
          link: "/careers",
        },
      ],
      // other_link_navigation: [
      //   {
      //     id: "01",
      //     label: "Privacy Policy",
      //     label_ar: "سياسة الخصوصية",
      //     link: "/privacy-policy",
      //   },
      //   {
      //     id: "02",
      //     label: "Terms & Conditions",
      //     label_ar: "الشروط والأحكام",
      //     link: "/terms-and-conditions",
      //   },
      //   {
      //     id: "03",
      //     label: "FAQ",
      //     label_ar: "الأسئلة الشائعة",
      //     link: "/faqs",
      //   },
      // ],
      // sale_enquiry: {
      //   title: "For Sales Enquiry",
      //   title_ar: "للاستفسار عن المبيعات",
      //   phone: "+971 56 503 6378",
      //   email: "sales@wasso.ae",
      // },
      // support_enquiry: {
      //   title: "For Support Enquiry",
      //   title_ar: "للاستفسار عن الدعم",
      //   phone: "+971 56 503 6379",
      //   email: "support@wasso.ae",
      // },
      copyright: "<p>© 2025 WASSO. All Rights Reserved.</p>",
      copyright_ar: "<p>© 2025 واسو لإدارة المشاريع ش.ذ.م.م. جميع الحقوق محفوظة.</p>",
      // subscription_title: "<p>Stay Updated. Subscribe to Our Newsletter</p>",
      // subscription_title_ar: "<p>ابق على اطلاع. اشترك في نشرتنا الإخبارية</p>",
      card: [
        {
          id: "01",
          name: "card",
          link: "https://www.bosq.ae/",
          media: {
            media_type: "image",
            media_path: "/images/footer-card.png",
            media_alt: "footer-card",
          },
        },
      ],
    },
    social_link_data: [
      {
        id: "01",
        name: "facebook",
        link: "https://www.facebook.com/",
        media: {
          media_type: "image",
          media_path: "/images/social-1.svg",
          media_alt: "social-fb",
        },
      },
      {
        id: "02",
        name: "instagram",
        link: "https://www.instagram.com/",
        media: {
          media_type: "image",
          media_path: "/images/social-2.svg",
          media_alt: "social-insta",
        },
      },
      {
        id: "03",
        name: "youtube",
        link: "https://www.youtube.com/",
        media: {
          media_type: "image",
          media_path: "/images/social-3.svg",
          media_alt: "social-youtube",
        },
      },
      {
        id: "04",
        name: "linkedin",
        link: "https://www.linkedin.com/",
        media: {
          media_type: "image",
          media_path: "/images/social-4.svg",
          media_alt: "social-linkedin",
        },
      },
    ],
  };

  return NextResponse.json(
    {
      success: true,
      message: "Global data fetched successfully",
      message_ar: "تم جلب البيانات العامة بنجاح",
      data: globalData,
    },
    { status: 200 }
  );
}
