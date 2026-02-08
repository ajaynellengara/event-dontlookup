import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
    const { slug } = params

    // Mock database of events. In a real app, this would fetch from a DB using the slug.
    const events = {
        'where-fashion-meets-entrepreneurship': {
            hero: {
                title: "MODEL FORWARD",
                subtitle: "live",
                tagline: "Where Fashion meets Entrepreneurship",
                backgroundMedia: {
                    type: "image",
                    url: "/images/event-hero-bg.jpg",
                    alt: "Model Forward Live Hero"
                }
            },
            stats: {
                date: "29 JAN 2025",
                time: "10:00 AM - 05:00 PM",
                location: "Kochi, India",
                audience: "Designers, Models, Fashion Enthusiasts",
                registration: "Register Now"
            },
            about: {
                title: "A GLIMPSE OF THE EVENT",
                description: `
          <p>Model Forward Live is a one-day workshop and networking event designed to bridge the gap between fashion and business. It brings together industry experts, aspiring models, and creative entrepreneurs for a day of learning and connection.</p>
          <p>Whether you are looking to break into the industry or scale your existing brand, this event provides the tools and network you need to succeed.</p>
        `,
                media: {
                    type: "image",
                    url: "/images/event-about.jpg",
                    alt: "Event Atmosphere"
                }
            },
            agenda: {
                title: "WHAT YOU WILL LEARN",
                items: [
                    {
                        id: 1,
                        time: "10:00 AM",
                        title: "The Business of Fashion",
                        description: "Understanding the market, branding, and monetization strategies."
                    },
                    {
                        id: 2,
                        time: "11:30 AM",
                        title: "Runway to Reality",
                        description: "Practical workshops on walking, posing, and presentation."
                    },
                    {
                        id: 3,
                        time: "02:00 PM",
                        title: "Digital Presence",
                        description: "Building your personal brand on social media and portfolios."
                    },
                    {
                        id: 4,
                        time: "03:30 PM",
                        title: "Networking 101",
                        description: "How to connect with agencies, designers, and clients."
                    },
                    {
                        id: 5,
                        time: "04:30 PM",
                        title: "Q&A and Closing",
                        description: "Open floor for questions and final networking session."
                    }
                ]
            },
            speakers: {
                title: "MEET OUR SQUAD",
                description: "Learn from the best in the industry.",
                items: [
                    {
                        id: 1,
                        name: "John Doe",
                        role: "Fashion Photographer",
                        media: {
                            type: "image",
                            url: "/images/speaker-1.jpg",
                            alt: "John Doe"
                        }
                    },
                    {
                        id: 2,
                        name: "Jane Smith",
                        role: "Runway Coach",
                        media: {
                            type: "image",
                            url: "/images/speaker-2.jpg",
                            alt: "Jane Smith"
                        }
                    },
                    {
                        id: 3,
                        name: "Mike Ross",
                        role: "Brand Strategist",
                        media: {
                            type: "image",
                            url: "/images/speaker-3.jpg",
                            alt: "Mike Ross"
                        }
                    }
                ]
            },
            tickets: {
                title: "THE OPPORTUNITIES AHEAD",
                description: "Choose the pass that suits you best.",
                items: [
                    {
                        id: 1,
                        title: "Standard Pass",
                        price: "₹ 499",
                        features: [
                            "Access to all sessions",
                            "Networking opportunities",
                            "Digital certificate"
                        ],
                        link: "#"
                    },
                    {
                        id: 2,
                        title: "VIP Pass",
                        price: "₹ 999",
                        features: [
                            "Front row seating",
                            "Exclusive Q&A session",
                            "Lunch included",
                            "Physical certificate"
                        ],
                        link: "#"
                    },
                    {
                        id: 3,
                        title: "Virtual Pass",
                        price: "Free",
                        features: [
                            "Live stream access",
                            "Digital material"
                        ],
                        link: "#"
                    }
                ]
            },
            appDownload: {
                title: "Get the App. Book Your Spot.",
                description: "Scan the QR code to download the app and secure your spot today.",
                qrCodeImage: "/images/qr-code.png",
                appLinkPlayStore: "#",
                appLinkAppStore: "#"
            },
            organizers: {
                title: "JOINTLY ORGANIZED BY",
                items: [
                    {
                        id: 1,
                        media: {
                            type: "image",
                            url: "/images/organizer-1.png",
                            alt: "Organizer 1"
                        }
                    },
                    {
                        id: 2,
                        media: {
                            type: "image",
                            url: "/images/organizer-2.png",
                            alt: "Organizer 2"
                        }
                    },
                    {
                        id: 3,
                        media: {
                            type: "image",
                            url: "/images/organizer-3.png",
                            alt: "Organizer 3"
                        }
                    }
                ]
            },
            footer: {
                text: "Don't miss out on this opportunity to elevate your fashion career."
            }
        }
    }

    const eventData = events[slug]

    if (!eventData) {
        return NextResponse.json({ error: 'Event not found' }, { status: 404 })
    }

    return NextResponse.json(eventData)
}
