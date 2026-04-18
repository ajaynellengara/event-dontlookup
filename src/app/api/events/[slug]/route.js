import { NextResponse } from 'next/server'
import { eventsData } from '@/lib/data/events-data'
import { getEventBySlug } from '@/lib/api/events'

export const dynamic = 'force-dynamic'

export async function GET(request, { params }) {
    const resolvedParams = await params
    const slug = resolvedParams.slug
    
    let event = eventsData.find((e) => e.slug === slug || e.eventInfo?.slug === `/${slug}`) || null
    const dbEvent = await getEventBySlug(slug)

    if (dbEvent) {
        let parsedContent = {}
        try { parsedContent = JSON.parse(dbEvent.contentData || '{}') } catch(e){}
        event = {
            ...(event || {}),
            slug: dbEvent.slug,
            pageTitle: dbEvent.pageTitle,
            eventInfo: {
                ...(event?.eventInfo || {}),
                date: dbEvent.date || event?.eventInfo?.date,
                location: dbEvent.location || event?.eventInfo?.location,
                description: dbEvent.description || event?.eventInfo?.description,
                eventStatus: dbEvent.status || event?.eventInfo?.eventStatus,
                ...(parsedContent.eventInfo || {})
            },
            ...parsedContent
        }
    }

    if (!event) {
        return new NextResponse("Event not found", { status: 404 })
    }

    return NextResponse.json(event)
}
