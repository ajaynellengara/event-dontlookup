import { NextResponse } from 'next/server'
import { eventsData } from '@/lib/data/events-data'

export async function GET(request, { params }) {
    const resolvedParams = await params
    const slug = resolvedParams.slug
    const event = eventsData.find((e) => e.slug === slug || e.eventInfo.slug === `/${slug}`)

    if (!event) {
        return new NextResponse("Event not found", { status: 404 })
    }

    return NextResponse.json(event)
}
