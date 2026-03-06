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
import Link from 'next/link'
import { eventsData } from '@/lib/data/events-data'

export async function generateMetadata({ params }) {
    const resolvedParams = await params
    const { slug } = resolvedParams

    if (slug === 'stylepreneur') {
        return {
            title: 'Personal Styling Workshop in Dubai| StylepreneurByDontlookupFashion',
            description: 'Join the Personal Styling Workshop in Dubai by Stylepreneur by Dontlookup Fashion. Learn personal styling, wardrobe planning, and personal branding to enhance your style and confidence.',
        }
    }

    if (slug === 'model-forward-live') {
        return {
            title: 'Modeling Workshop in Dubai| Uae|ModelforwardbyDontlookupFashion',
            description: 'Join Model Forward by Dontlookup Fashion, a Dubai, UAE modeling workshop with runway training, casting guidance and paid shoot opportunities.',
        }
    }

    return {
        title: 'Fashion Events in Dubai| UAE| Dontlookup Fashion Events',
        description: 'Discover exclusive fashion events in Dubai, UAE with Dontlookup Fashion Events. Join runway shows, designer showcases, modeling workshops, and fashion networking.',
    }
}



export default async function EventDetails({ params }) {
    const resolvedParams = await params
    const { slug } = resolvedParams
    const event = eventsData.find((e) => e.slug === slug) || null

    if (!event) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white">Event not found</h1>
                    <Link href="/" className="text-indigo-600 hover:underline mt-4 block">Back to Home</Link>
                </div>
            </div>
        )
    }

    const data = event;

    return (
        <>
            <LandingHero variant="parallax" data={data?.hero} />
            <div className="relative z-2 bg-white flex flex-col">
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
