import { NextResponse } from "next/server";

/**
 * GET /api/contact - Get contact information
 * POST /api/contact - Submit contact form
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";

  const contactData = {
    office: {
      title: "Main Office",
      title_ar: "المكتب الرئيسي",
      address: "Office No 133, Business Tower, Meydan Road, Al Qouz, Dubai",
      address_ar: "مكتب رقم 133، برج الأعمال، طريق ميدان، القوز، دبي",
      p_o_box: "P.O Box: 294568",
      p_o_box_ar: "ص.ب: 294568",
      country: "United Arab Emirates",
      country_ar: "الإمارات العربية المتحدة",
    },
    phone: {
      sales: {
        label: "Sales",
        label_ar: "المبيعات",
        number: "+971 56 503 6378",
      },
      support: {
        label: "Support",
        label_ar: "الدعم",
        number: "+971 56 503 6379",
      },
      general: {
        label: "General",
        label_ar: "عام",
        number: "+971 4 123 4567",
      },
    },
    email: {
      sales: {
        label: "Sales",
        label_ar: "المبيعات",
        address: "sales@wasso.ae",
      },
      support: {
        label: "Support",
        label_ar: "الدعم",
        address: "support@wasso.ae",
      },
      info: {
        label: "General Information",
        label_ar: "معلومات عامة",
        address: "info@wasso.ae",
      },
      careers: {
        label: "Careers",
        label_ar: "الوظائف",
        address: "careers@wasso.ae",
      },
    },
    business_hours: {
      title: "Business Hours",
      title_ar: "ساعات العمل",
      weekdays: "Sunday - Thursday: 9:00 AM - 6:00 PM",
      weekdays_ar: "الأحد - الخميس: 9:00 صباحًا - 6:00 مساءً",
      weekend: "Friday - Saturday: Closed",
      weekend_ar: "الجمعة - السبت: مغلق",
      timezone: "GST (Gulf Standard Time)",
      timezone_ar: "توقيت الخليج القياسي",
    },
    social_media: {
      facebook: "https://www.facebook.com/wasso",
      instagram: "https://www.instagram.com/wasso",
      linkedin: "https://www.linkedin.com/company/wasso",
      twitter: "https://www.twitter.com/wasso",
    },
    map: {
      latitude: 25.2048,
      longitude: 55.2708,
      zoom: 15,
    },
  };

  return NextResponse.json(
    {
      success: true,
      message: "Contact information fetched successfully",
      message_ar: "تم جلب معلومات الاتصال بنجاح",
      data: contactData,
    },
    { status: 200 }
  );
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      subject,
      message,
      inquiry_type,
    } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
          message_ar: "الحقول المطلوبة مفقودة",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email format",
          message_ar: "تنسيق البريد الإلكتروني غير صحيح",
        },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Save the contact form submission to a database
    // 2. Send an email notification to the team
    // 3. Send a confirmation email to the user
    // For now, we'll just return a success response

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
        message_ar: "تم إرسال نموذج الاتصال بنجاح",
        data: {
          submission_id: `CONTACT-${Date.now()}`,
          status: "received",
          status_ar: "تم الاستلام",
          estimated_response_time: "24-48 hours",
          estimated_response_time_ar: "24-48 ساعة",
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error submitting contact form",
        message_ar: "خطأ في إرسال نموذج الاتصال",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
