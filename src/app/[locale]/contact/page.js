"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export const dynamic = "force-dynamic";

export default function ContactPage() {
  const params = useParams();
  const locale = params?.locale || "en";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiry_type: "general",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContact() {
      if (!locale) return;
      
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : "http://localhost:3000");
        const res = await fetch(`${baseUrl}/api/contact?locale=${locale}`);

        if (res.ok) {
          const response = await res.json();
          setContactData(response.data);
        }
      } catch (error) {
        console.error("Error fetching contact data:", error);
      } finally {
        setLoading(false);
      }
    }
    if (locale) {
      fetchContact();
    }
  }, [locale]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiry_type: "general",
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gray-900 py-16 text-white md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {locale === "ar" ? "اتصل بنا" : "Contact Us"}
          </h1>
          <p className="text-lg text-gray-300">
            {locale === "ar"
              ? "نحن هنا لمساعدتك. تواصل معنا اليوم"
              : "We're here to help. Get in touch with us today"}
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Information */}
            {contactData && (
              <div>
                <h2 className="mb-6 text-2xl font-bold">
                  {locale === "ar" ? "معلومات الاتصال" : "Contact Information"}
                </h2>
                <div className="space-y-6">
                  {contactData.office && (
                    <div>
                      <h3 className="mb-2 font-semibold">
                        {locale === "ar"
                          ? contactData.office.title_ar
                          : contactData.office.title}
                      </h3>
                      <p className="text-gray-600">
                        {locale === "ar"
                          ? contactData.office.address_ar
                          : contactData.office.address}
                      </p>
                      <p className="text-gray-600">
                        {locale === "ar"
                          ? contactData.office.p_o_box_ar
                          : contactData.office.p_o_box}
                      </p>
                    </div>
                  )}
                  {contactData.phone && (
                    <div>
                      <h3 className="mb-2 font-semibold">
                        {locale === "ar" ? "الهاتف" : "Phone"}
                      </h3>
                      {Object.values(contactData.phone).map((phone, index) => (
                        <p key={index} className="text-gray-600">
                          <span className="font-semibold">
                            {locale === "ar" ? phone.label_ar : phone.label}:
                          </span>{" "}
                          {phone.number}
                        </p>
                      ))}
                    </div>
                  )}
                  {contactData.email && (
                    <div>
                      <h3 className="mb-2 font-semibold">
                        {locale === "ar" ? "البريد الإلكتروني" : "Email"}
                      </h3>
                      {Object.values(contactData.email).map((email, index) => (
                        <p key={index} className="text-gray-600">
                          <span className="font-semibold">
                            {locale === "ar" ? email.label_ar : email.label}:
                          </span>{" "}
                          <a
                            href={`mailto:${email.address}`}
                            className="text-blue-600 hover:underline"
                          >
                            {email.address}
                          </a>
                        </p>
                      ))}
                    </div>
                  )}
                  {contactData.business_hours && (
                    <div>
                      <h3 className="mb-2 font-semibold">
                        {locale === "ar"
                          ? contactData.business_hours.title_ar
                          : contactData.business_hours.title}
                      </h3>
                      <p className="text-gray-600">
                        {locale === "ar"
                          ? contactData.business_hours.weekdays_ar
                          : contactData.business_hours.weekdays}
                      </p>
                      <p className="text-gray-600">
                        {locale === "ar"
                          ? contactData.business_hours.weekend_ar
                          : contactData.business_hours.weekend}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">
                {locale === "ar" ? "أرسل لنا رسالة" : "Send us a Message"}
              </h2>
              {submitted ? (
                <div className="rounded bg-green-100 p-4 text-green-800">
                  {locale === "ar"
                    ? "تم إرسال رسالتك بنجاح!"
                    : "Your message has been sent successfully!"}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-semibold">
                      {locale === "ar" ? "الاسم" : "Name"} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded border border-gray-300 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold">
                      {locale === "ar" ? "البريد الإلكتروني" : "Email"} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded border border-gray-300 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold">
                      {locale === "ar" ? "الهاتف" : "Phone"}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded border border-gray-300 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold">
                      {locale === "ar" ? "الموضوع" : "Subject"}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full rounded border border-gray-300 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold">
                      {locale === "ar" ? "الرسالة" : "Message"} *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={6}
                      className="w-full rounded border border-gray-300 px-3 py-2"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded bg-gray-900 px-4 py-2 text-white transition hover:bg-gray-800 disabled:opacity-50"
                  >
                    {submitting
                      ? locale === "ar"
                        ? "جاري الإرسال..."
                        : "Sending..."
                      : locale === "ar"
                      ? "إرسال الرسالة"
                      : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
