import GalleryListing from '@/components/blocks/gallery/gallery-listing'
import { eventsData } from '@/lib/data/events-data'
import { notFound } from 'next/navigation'

export default async function GalleryDetailsPage({ params }) {
    const resolvedParams = await params
    const { slug } = resolvedParams
    const event = eventsData.find((e) => e.slug === slug)

    if (!event || !event.moreGallery) {
        return notFound()
    }

    return (
        <>
            <div className="w-full h-[var(--header-y-sm)] lg:h-[var(--header-y-lg)] 2xl:h-[var(--header-y-2xl)] 3xl:h-[var(--header-y-3xl)] bg-[#488485]" />
            <GalleryListing data={event.moreGallery} />
        </>
    )
}
