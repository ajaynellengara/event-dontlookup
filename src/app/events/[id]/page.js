import EventsInfo from '@/components/blocks/events/events-info'
import LandingHero from '@/components/blocks/landing/landing-hero'
import LandingPartners from '@/components/blocks/landing/landing-partners'
import LandingAppDownload from '@/components/blocks/landing/landing-app-download'
import EventsExpertsSays from '@/components/blocks/events/events-experts-says'
import EventsWhoIsThisFor from '@/components/blocks/events/events-who-is-this-for'
import EventsOutcomes from '@/components/blocks/events/events-outcomes'
import EventsMeetYourCoach from '@/components/blocks/events/events-meet-your-coach'
import EventsWhatTrainedIn from '@/components/blocks/events/events-what-trained-in'
import EventsIndustryExposure from '@/components/blocks/events/events-industry-exposure'
import EventsJoinEvent from '@/components/blocks/events/events-join-event'
import EventsGallery from '@/components/blocks/events/events-gallery'
import { landingData } from '@/lib/data/landing-data'

async function getEvent(id) {
    const res = await fetch(`http://localhost:3000/api/events/${id}`, { cache: 'no-store' })
    if (!res.ok) {
        throw new Error('Failed to fetch event')
    }
    return res.json()
}

const data = {
    hero: {
        title: null,
        backgroundMedia: {
            type: "image",
            url: "/images/events-hero-1.jpg",
            mediaUrl: "/images/events-hero-1.jpg",
            alt: "Hero Background"
        }
    },
    partners: {
        title: "Sponsored By",
        items: [
            {
                id: 1,
                media: {
                    type: "image",
                    url: "/images/sponsored-logo-1.png",
                    alt: "Partner Logo 1"
                }
            },
            {
                id: 2,
                media: {
                    type: "image",
                    url: "/images/sponsored-logo-2.png",
                    alt: "Partner Logo 2"
                }
            },
            {
                id: 3,
                media: {
                    type: "image",
                    url: "/images/sponsored-logo-3.png",
                    alt: "Partner Logo 3"
                }
            },
            {
                id: 4,
                media: {
                    type: "image",
                    url: "/images/sponsored-logo-4.png",
                    alt: "Partner Logo 4"
                }
            },
            {
                id: 5,
                media: {
                    type: "image",
                    url: "/images/sponsored-logo-5.png",
                    alt: "Partner Logo 5"
                }
            },
            {
                id: 6,
                media: {
                    type: "image",
                    url: "/images/sponsored-logo-6.png",
                    alt: "Partner Logo 6"
                }
            },
            {
                id: 7,
                media: {
                    type: "image",
                    url: "/images/sponsored-logo-6.png",
                    alt: "Partner Logo 6"
                }
            },
        ],
    },
    eventInfo: {
        date: "29 jan 2025",
        location: "Dubai",
        duration: "6 hours",
        media: {
            type: "image",
            url: "/images/app-download-1.png",
            alt: "App Download"
        },
        title: "Get the App. Book Your Spot.",
        description: "Dubai’s Professional Entry Point Into the Modeling Industry<br/>Not a workshop. Not a class. A real-world modeling career preparation experience.",
        longDescription: `<p><span>(About the event)</span></p><p>Model Forward Live by Don’t Look-Up Fashion is a live, in-person career launch. Experience designed for aspiring models who want to enter the industry correctly, with clarity, preparation, and confidence.</p><p>This experience bridges the gap between:<br/>“I want to be a model”<br/>and<br/>“I am ready for agencies, castings, and paid opportunities.”</p><p>No recorded lessons.No theory - only sessions.No unrealistic promises.<br/>Only real training, real exposure, and real industry alignment.</p>`,
        price: "499 dhs",
        slug: "/model-forward-live",
        ctaLabel: "Unlock Instant Access",
    },
    expertsSays: {
        media: {
            type: "youtube",
            url: "https://www.youtube.com/embed/_Gc6am5tZjg?autoplay=0&mute=0&loop=1&playlist=_Gc6am5tZjg&controls=1&showinfo=0&rel=0",
            // url: "/images/eventsExpertsSays-1.jpg",
            alt: "eventsExpertsSays-1"
        },
        title: "SEE WHAT THE EXPERTS SAY",
    },
    appDownload: {
        media: {
            type: "image",
            url: "/images/app-download-1.png",
            alt: "App Download"
        },
        title: "Get the App. Book Your Spot.",
        description: "Your all-in-one platform to explore opportunities, book experiences, and stay connected.",
        qrCodeImage: "/images/qr-code.png",
        appLinkPlayStore: "#",
        appLinkAppStore: "#"
    },
    whoIsThisFor: {
        media: {
            type: "image",
            url: "/images/events-whoIsThisFor-1.jpg",
            alt: "events-whoIsThisFor"
        },
        title: "WHO IS THIS REALLY FOR",
        description: "<p>This experience is for you if:</p><ul><li>You are serious about modeling</li><li>You want to understand how the industry actually works</li><li>You want professional photos & runway exposure</li><li>You want to be taken seriously by agencies & brands</li><li>You want guidance instead of guessing</li><li>No prior experience required.</li></ul><p>Discipline, commitment, and openness to learn required.</p>"
    },
    outcomes: {
        media: {
            type: "image",
            url: "/images/events-outcomes-1.jpg",
            alt: "events-outcomes"
        },
        title: "EVENT OUTCOMES",
        description: "<p>By the end of Model Forward Live, you will:</p>",
        items: [
            {
                id: 1,
                label: "Understand how the Dubai modeling industry actually orks"
            },
            {
                id: 2,
                label: "Know what agencies, brands, and casting directors expect"
            },
            {
                id: 3,
                label: "Move with confidence on stage and in front of the camera"
            },
            {
                id: 4,
                label: "Handle pressure, rejection, and competition professionally"
            },
            {
                id: 5,
                label: "Walk away with industry-ready photos and video content"
            },
            {
                id: 6,
                label: "Gain real runway and backstage experience"
            },
            {
                id: 7,
                label: "Be better prepared for agency meetings, castings, and paid opportunities"
            },
        ],
        longDescription: "This experience is designed to help you step into the industry with confidence — not confusion."
    },
    meetYourCoach: {
        title: "MEET YOUR COACH",
        items: [
            {
                id: 1,
                mediaUrl: "/images/events-meetYourCoach-1.jpg",
                title: "Zayah D’or",
                description: "<p>globally recognised business and personal brand coach who helps ambitious professionals turn visibility into authority and authority into revenue.<br/>With over 15 years of experience working with entrepreneurs, consultants, creatives, and corporate leaders, Aarav has built a reputation for blending strategy, mindset, and personal branding into sustainable growth systems.<br/>He has coached founders across fashion, real estate, tech, and service-based businesses—helping them position themselves as premium brands in competitive markets.</p>",
            },
            {
                id: 2,
                mediaUrl: "/images/events-meetYourCoach-2.jpg",
                title: "Rashique Firoz",
                description: "<p>globally recognised business and personal brand coach who helps ambitious professionals turn visibility into authority and authority into revenue.<br/>With over 15 years of experience working with entrepreneurs, consultants, creatives, and corporate leaders, Aarav has built a reputation for blending strategy, mindset, and personal branding into sustainable growth systems.<br/>He has coached founders across fashion, real estate, tech, and service-based businesses—helping them position themselves as premium brands in competitive markets.</p>",
            },
            {
                id: 3,
                mediaUrl: "/images/events-meetYourCoach-3.jpg",
                title: "Deepak",
                description: "<p>globally recognised business and personal brand coach who helps ambitious professionals turn visibility into authority and authority into revenue.<br/>With over 15 years of experience working with entrepreneurs, consultants, creatives, and corporate leaders, Aarav has built a reputation for blending strategy, mindset, and personal branding into sustainable growth systems.<br/>He has coached founders across fashion, real estate, tech, and service-based businesses—helping them position themselves as premium brands in competitive markets.</p>",
            },
        ]
    },
    whatTrainedIn: {
        title: "WHAT YOU WILL BE TRAINED IN",
        items: [
            {
                id: 1,
                title: "1. Model Mode",
                description: "<h5>The Modelling Career Foundation</h5><p>You will understand:</p><ul><li>‣  How the Dubai modelling industry works</li><li>‣  What agencies and brands look for in new models</li><li>‣  Professional conduct, grooming & etiquette</li><li>‣  Casting preparation & first impressions</li><li>‣  How to avoid common beginner mistakes</li></ul><p>This session builds industry awareness and confidence.another user.</p>",
            },
            {
                id: 2,
                title: "2. Model Pro",
                description: "<h5>Professional Modelling Training</h5><p>You will train in:</p><ul><li>‣  Ramp walk fundamentals</li><li>‣  Runway posture & alignment</li><li>‣  Stage presence & projection</li><li>‣  Movement control & flow</li><li>‣  Grooming, walk discipline & confidence</li></ul><p>This is physical, practical training, not theory.</p>",
            },

            {
                id: 3,
                title: "3. Model EQ",
                description: "<h5>Emotional Intelligence for Models</h5><p>Because confidence without control doesn’t last.</p><p>You will learn:</p><ul><li>‣  How to handle rejection professionally</li><li>‣  Emotional control in castings & on set</li><li>‣  Competitive mindset without insecurity</li><li>‣  Long-term confidence & mental strength</li></ul><p>This separates hobbyists from professionals.</p>",
            },
            {
                id: 4,
                title: "4. Poise Pro",
                description: "<h5>Body Language & Presence</h5><p>You will master:</p><ul><li>‣  Posture, stance & movement</li><li>‣  Facial expressions & camera awareness</li><li>‣ Non-verbal confidence</li><li>‣ Presence on runway and in front of the camera</li></ul><p>Your body becomes your communication tool.</p>",
            },
            {
                id: 5,
                title: "5. Professiomal Portfolio Shoot",
                description: "<h5>Your First Industry-Ready Visual Assets</h5><p>You will participate in a guided, professional starter-level group photoshoot where you:</p><ul><li>‣  Learn posing techniques</li><li>‣  Understand angles & expressions</li><li>‣  Experience a real shoot environment</li><li>‣  Create usable modelling content</li></ul><p>Outcome:</p><ul><li>‣  Stronger non-verbal influence and instant credibility.</li></ul>",
            },
            {
                id: 6,
                title: "6. WHAT YOU WALK AWAY WITH",
                description: "<h5>Starter Professional Portfolio</h5><ul><li>‣  One group-based portfolio shoot</li><li>‣  6 High-quality edited images.</li><li>‣  3 Professional modelling videos:</li><li>Runway walk, Posing, Expressions.</li></ul><h5>Perfect for:</h5><ul><li>‣  Agency submissions.</li><li>‣  Casting calls</li><li>‣  Brand Introductions</li><li>‣  Digital Modelling Profiles</li></ul>",
            },
        ],
    },
    industryExposure: {
        title: "LIVE INDUSTRY EXPOSURE",
        items: [
            {
                id: 1,
                title: "Fashion Show Walk",
                description: "<ul><li>‣  Group runway participation</li><li>‣  Backstage experience</li><li>‣  Live audience exposure (Starter-level · T&C apply)</li></ul>",
            },
            {
                id: 2,
                title: "Brand Collaboration Opportunity",
                description: "<ul><li>‣  Entry-level paid participation</li><li>‣  Selection based on performance & suitability</li><li>‣  (T&C apply)</li></ul>",
            },
            {
                id: 3,
                title: "Face of DLU Selection",
                description: "<p>Outstanding participants may be shortlisted for:</p><ul><li>‣  Face of DLU campaigns</li><li>‣  Brand activations</li><li>‣  Future fashion opportunities</li></ul><p>Selection is earned, not promised.</p>",
            },
        ],
    },
    joinEvent: {
        title: "HOW CAN I JOIN THE EVENT?",
        description: "<p>Simplify your booking and event experience —<br/>get the app to reserve your seat, plan your day, and enjoy exclusive access.</p>",
        items: [
            {
                id: 1,
                mediaUrl: "/images/events-joinEvent-1.png",

                description: "<h5>Download the app.<br/>Wohoo! You’re in. Here’s what to do next.</h5><h5>Step 1 — Create Your Profile</h5><p>Set up your profile with basic details so we can personalise your  experience with Dont Look Up and recommend the right sessions for you.</p>",
            },
            {
                id: 2,
                mediaUrl: "/images/events-joinEvent-1.png",

                description: "<h5>Now let’s dive right into our purpose - Booking for the event!</h5><h5>Step 2— Explore & Book the Event</h5><p>Browse the Stylepreneur event inside the app, view sessions and coaches, and secure your spot with just a few taps.</p>",
            },
            {
                id: 3,
                mediaUrl: "/images/events-joinEvent-1.png",

                description: "<h5>After Finishing booking, You are in your last step!</h5><h5>Step 3 — Get Ready & Show Up</h5><p>Once you get booking confirmation, your e-ticket will be provided. Please download the ticket. In the event, dont forget to show the QR Code, so that you get your pass.</p><p>Yes, its that easy.<br/>Just arrive, connect, and experience Stylepreneur.</p>",
            },
        ],
    },
    gallery: {
        title: "VISIT THE MODEL FORWARD GALLERY",
        description: null,
        longDescription: "<h4>DontLookupFashion.Events</h4><p>Beyond events. Beyond borders. Beyond the runway.</p>",
        items: [
            {
                id: 1,
                media: {
                    type: "image",
                    url: "/images/gallery-1.jpg",
                    alt: "gallery Image 1"
                }
            },
            {
                id: 2,
                media: {
                    type: "image",
                    url: "/images/gallery-2.jpg",
                    alt: "gallery Image 2"
                }
            },
            {
                id: 3,
                media: {
                    type: "image",
                    url: "/images/gallery-3.jpg",
                    alt: "gallery Image 3"
                }
            },
            {
                id: 4,
                media: {
                    type: "image",
                    url: "/images/gallery-4.jpg",
                    alt: "gallery Image 4"
                }
            },
            {
                id: 5,
                media: {
                    type: "image",
                    url: "/images/gallery-5.jpg",
                    alt: "gallery Image 5"
                }
            },
            {
                id: 6,
                media: {
                    type: "image",
                    url: "/images/gallery-6.jpg",
                    alt: "gallery Image 6"
                }
            },
            {
                id: 7,
                media: {
                    type: "image",
                    url: "/images/gallery-7.jpg",
                    alt: "gallery Image 7"
                }
            },
            {
                id: 8,
                media: {
                    type: "image",
                    url: "/images/gallery-8.jpg",
                    alt: "gallery Image 8"
                }
            },
        ]
    },
    contact: {
        quickLinks: [
            { id: 1, title: "Workshops for models", slug: "#" },
            { id: 2, title: "Courses for models", slug: "#" },
            { id: 3, title: "Events", slug: "#" },
            { id: 4, title: "Subscription plan", slug: "#" },
            { id: 5, title: "Model Features", slug: "#" },
            { id: 6, title: "Casting", slug: "#" },
            { id: 7, title: "DLUF Model Agency", slug: "#" }
        ],
        socialLinks: [
            {
                id: 1,
                media: {
                    type: "image",
                    url: "/images/home-social-1.svg",
                    alt: "Facebook"
                },
                slug: "#"
            },
            {
                id: 2,
                media: {
                    type: "image",
                    url: "/images/home-social-2.svg",
                    alt: "Instagram"
                },
                slug: "#"
            },
            {
                id: 3,
                media: {
                    type: "image",
                    url: "/images/home-social-3.svg",
                    alt: "Twitter"
                },
                slug: "#"
            },
            {
                id: 4,
                media: {
                    type: "image",
                    url: "/images/home-social-4.svg",
                    alt: "LinkedIn"
                },
                slug: "#"
            },
            {
                id: 5,
                media: {
                    type: "image",
                    url: "/images/home-social-5.svg",
                    alt: "YouTube"
                },
                slug: "#"
            },
            {
                id: 6,
                media: {
                    type: "image",
                    url: "/images/home-social-6.svg",
                    alt: "TikTok"
                },
                slug: "#"
            }
        ]
    }
}

export default async function EventDetails({ params }) {
    const resolvedParams = await params
    const { id } = resolvedParams
    const event = await getEvent(id).catch(() => null)

    // if (!event) {
    //     return (
    //         <div className="min-h-screen flex items-center justify-center">
    //             <div className="text-center">
    //                 <h1 className="text-2xl font-bold">Event not found</h1>
    //                 <Link href="/" className="text-indigo-600 hover:underline mt-4 block">Back to Home</Link>
    //             </div>
    //         </div>
    //     )
    // }

    const { hero, partners, appDownload, intro, featuredEvents = [], platform, globalStage, impact, contact } = landingData;

    return (
        <>
            <LandingHero variant="parallax" data={data?.hero} />
            {/* <LandingHero data={data?.hero} /> */}
            <div className="relative z-10 bg-white">
                <LandingPartners variant="eventDetail" data={data?.partners} />
                <EventsInfo data={data?.eventInfo} />
                <EventsExpertsSays data={data?.expertsSays} />
                <LandingAppDownload data={data?.appDownload} />
                <EventsWhoIsThisFor data={data?.whoIsThisFor} />
                <EventsOutcomes data={data?.outcomes} />
                <EventsMeetYourCoach data={data?.meetYourCoach} />
                <EventsWhatTrainedIn data={data?.whatTrainedIn} />
                <EventsIndustryExposure data={data?.industryExposure} />
                <LandingAppDownload data={data?.appDownload} />
                <EventsJoinEvent data={data?.joinEvent} />
                <EventsGallery data={data?.gallery} />
            </div>
        </>
    )
}
