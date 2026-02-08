```
import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    hero: {
      title: "FACE of FASHION",
      backgroundMedia: {
        type: "image",
        url: "/images/hero-bg.jpg",
        alt: "Hero Background"
      }
    },
    partners: [
      {
        id: 1,
        media: {
          type: "image",
          url: "/images/partner-logo-1.png",
          alt: "Partner Logo 1"
        }
      },
      {
        id: 2,
        media: {
          type: "image",
          url: "/images/partner-logo-2.png",
          alt: "Partner Logo 2"
        }
      },
      {
        id: 3,
        media: {
          type: "image",
          url: "/images/partner-logo-3.png",
          alt: "Partner Logo 3"
        }
      },
      {
        id: 4,
        media: {
          type: "image",
          url: "/images/partner-logo-4.png",
          alt: "Partner Logo 4"
        }
      },
      {
        id: 5,
        media: {
          type: "image",
          url: "/images/partner-logo-5.png",
          alt: "Partner Logo 5"
        }
      },
      {
        id: 6,
        media: {
          type: "image",
          url: "/images/partner-logo-6.png",
          alt: "Partner Logo 6"
        }
      }
    ],
    appDownload: {
      title: "Get the App. Book Your Spot.",
      description: "Your all-in-one platform to explore opportunities, book experiences, and stay connected.",
      qrCodeImage: "/images/qr-code.png",
      appLinkPlayStore: "#",
      appLinkAppStore: "#"
    },
    intro: {
      title: "Where Fashion Events Become Movements",
      description: `
    < p > DontLookupFashion.Events is the global fashion events platform by Don’t Look - Up.Fashion built to create, curate, and connect fashion experiences across the world.</p >
        <p>We are not just an event organizer. We are where fashion events live, grow, and get discovered.</p>
        <p>From our own signature DontLookupFashion events to curated fashion experiences hosted by brands, event companies, designers, agencies, and creative communities, we bring the entire fashion event ecosystem together in one powerful destination.</p>
        <p>This is where fashion goes beyond the surface opportunity.</p>
`
    },
    featuredEvents: {
      title: "EVENTS",
      description: "Catch events from DontLookUp. Download the app now to register and be a part of it!",
      items: [
        {
          id: "1",
          title: "Where Fashion meets Entrepreneurship",
          eventLogo: "/images/event-logo-1.png",
          media: {
            type: "image",
            url: "/images/event-1.jpg",
            alt: "Where Fashion meets Entrepreneurship"
          },
          slug: "where-fashion-meets-entrepreneurship",
          date: "July 2025",
          category: "EVENT",
          price: "Register"
        },
        {
          id: "2",
          title: "Fashion Event 2",
          eventLogo: "/images/event-logo-1.png",
          media: {
            type: "image",
            url: "/images/event-1.jpg",
            alt: "Fashion Event 2"
          },
          slug: "fashion-event-2",
          date: "July 2025",
          category: "EVENT",
          price: "Register"
        },
        {
          id: "3",
          title: "Fashion Event 3",
          eventLogo: "/images/event-logo-1.png",
          media: {
            type: "image",
            url: "/images/event-1.jpg",
            alt: "Fashion Event 3"
          },
          slug: "fashion-event-3",
          date: "July 2025",
          category: "EVENT",
          price: "Register"
        },
        {
          id: "4",
          title: "Fashion Event 4",
          eventLogo: "/images/event-logo-1.png",
          media: {
            type: "image",
            url: "/images/event-1.jpg",
            alt: "Fashion Event 4"
          },
          slug: "fashion-event-4",
          date: "July 2025",
          category: "EVENT",
          price: "Register"
        },
        {
          id: "5",
          title: "Fashion Event 5",
          eventLogo: "/images/event-logo-1.png",
          media: {
            type: "image",
            url: "/images/event-1.jpg",
            alt: "Fashion Event 5"
          },
          slug: "fashion-event-5",
          date: "July 2025",
          category: "EVENT",
          price: "Register"
        },
        {
          id: "6",
          title: "Fashion Event 6",
          eventLogo: "/images/event-logo-1.png",
          media: {
            type: "image",
            url: "/images/event-1.jpg",
            alt: "Fashion Event 6"
          },
          slug: "fashion-event-6",
          date: "July 2025",
          category: "EVENT",
          price: "Register"
        },
        {
          id: "7",
          title: "Fashion Event 7",
          eventLogo: "/images/event-logo-1.png",
          media: {
            type: "image",
            url: "/images/event-1.jpg",
            alt: "Fashion Event 7"
          },
          slug: "fashion-event-7",
          date: "July 2025",
          category: "EVENT",
          price: "Register"
        },
        {
          id: "8",
          title: "Fashion Event 8",
          eventLogo: "/images/event-logo-1.png",
          media: {
            type: "image",
            url: "/images/event-1.jpg",
            alt: "Fashion Event 8"
          },
          slug: "fashion-event-8",
          date: "July 2025",
          category: "EVENT",
          price: "Register"
        }
      ]
    },
    platform: {
      media: {
        type: "image",
        url: "/images/platform-bg.jpg",
        alt: "Platform Background"
      },
      title: "A Platform Built for Fashion Events",
      description: `
    < p > DontLookupFashion.Events is the global fashion events platform by Don’t Look - Up.Fashion built to create, curate, and connect fashion experiences across the world.</p >
        <p>We are not just an event organizer.</p>
        <p>We are where fashion events live, grow, and get discovered.</p>
        <p>From our own signature DontLookupFashion events to curated fashion experiences hosted by brands, event companies, designers, agencies, and creative communities, we bring the entire fashion event ecosystem together in one powerful destination.</p>
        <p>This is where fashion goes beyond the surface opportunity.</p>
`
    },
    globalStage: {
      title: "Dubai: Our Home. The World: Our Stage.",
      description: `
    < p > DontLookupFashion.Events is the global fashion events platform by Don’t Look - Up.Fashion built to create, curate, and connect fashion experiences across the world.</p >
        <p>We are not just an event organizer.</p>
        <p>We are where fashion events live, grow, and get discovered.</p>
        <p>From our own signature DontLookupFashion events to curated fashion experiences hosted by brands, event companies, designers, agencies, and creative communities, we bring the entire fashion event ecosystem together in one powerful destination.</p>
        <p>This is where fashion goes beyond the surface opportunity.</p>
`,
      longDescription: `
    < p > DontLookupFashion.Events is the global fashion events platform by Don’t Look - Up.Fashion built to create, curate, and connect fashion experiences across the world.</p >
        <p>We are not just an event organizer.</p>
        <p>We are where fashion events live, grow, and get discovered.</p>
        <p>From our own signature DontLookupFashion events to curated fashion experiences hosted by brands, event companies, designers, agencies, and creative communities, we bring the entire fashion event ecosystem together in one powerful destination.</p>
        <p>This is where fashion goes beyond the surface opportunity.</p>
`
    },
    impact: {
      title: "Fashion With Meaning. Events With Impact.",
      description: "Join us in Dubai and across the globe — and be part of a fashion ecosystem built on purpose, authenticity, and connection",
      longDescription: `
    < h3 > DontLookupFashion.Events</h3 >
        <p>Beyond events. Beyond borders. Beyond the runway.</p>
`,
      items: [
        {
          id: 1,
          media: {
            type: "image",
            url: "/images/impact-1.jpg",
            alt: "Impact Image 1"
          }
        }
      ]
    },
    contact: {
      quickLinks: [
        { id: 1, title: "Workshops for models", slug: "#" },
        { id: 2, title: "Workshops for models", slug: "#" },
        { id: 3, title: "Workshops for models", slug: "#" },
        { id: 4, title: "Workshops for models", slug: "#" },
        { id: 5, title: "Workshops for models", slug: "#" },
        { id: 6, title: "Workshops for models", slug: "#" },
        { id: 7, title: "Workshops for models", slug: "#" },
        { id: 8, title: "Workshops for models", slug: "#" },
        { id: 9, title: "Workshops for models", slug: "#" }
      ],
      socialLinks: [
        { id: 1, title: "Facebook", slug: "#" },
        { id: 2, title: "Instagram", slug: "#" },
        { id: 3, title: "Twitter", slug: "#" },
        { id: 4, title: "LinkedIn", slug: "#" },
        { id: 5, title: "YouTube", slug: "#" },
        { id: 6, title: "TikTok", slug: "#" },
        { id: 7, title: "Snapchat", slug: "#" }
      ]
    }
  }

  return NextResponse.json(data)
}
```
