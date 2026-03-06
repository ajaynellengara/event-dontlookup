import LandingAppDownload from '@/components/blocks/landing/landing-app-download'
import LandingContact from '@/components/blocks/landing/landing-contact'
import LandingFeaturedEvents from '@/components/blocks/landing/landing-featured-events'
import LandingHero from '@/components/blocks/landing/landing-hero'
import LandingIntro from '@/components/blocks/landing/landing-intro'
import LandingPartners from '@/components/blocks/landing/landing-partners'
import LandingPlatform from '@/components/blocks/landing/landing-platform'
import LandingDubaiStage from '@/components/blocks/landing/landing-dubai-stage'
import LandingImpact from '@/components/blocks/landing/landing-impact'
import { landingData } from '@/lib/data/landing-data'

export const metadata = {
    title: 'Fashion Events in Dubai| UAE| Dontlookup Fashion Events',
    description: 'Discover exclusive fashion events in Dubai, UAE with Dontlookup Fashion Events. Join runway shows, designer showcases, modeling workshops, and fashion networking.',
}

export default async function Home() {
    const { hero, partners, appDownload, intro, featuredEvents = [], platform, globalStage, impact, contact } = landingData;

    return (
        <>
            <LandingHero data={hero} />
            <LandingPartners data={partners} />
            <LandingAppDownload data={appDownload} />
            <LandingIntro data={intro} />
            <LandingFeaturedEvents data={featuredEvents} />
            <LandingPlatform data={platform} />
            <LandingAppDownload data={appDownload} />
            <LandingDubaiStage data={globalStage} />

            <LandingImpact data={impact} />
            <LandingContact data={contact} />
        </>
    )
}
