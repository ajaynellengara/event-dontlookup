import { NextResponse } from 'next/server'
import { eventsData } from '@/lib/data/events-data'
import { getEvents } from '@/lib/api/events'

export async function GET() {
    const dbEvents = await getEvents()
    const merged = [...eventsData]
    
    for (const dbE of dbEvents) {
        let parsedContent = {}
        try { parsedContent = JSON.parse(dbE.contentData || '{}') } catch(e){}
        const existingIdx = merged.findIndex(e => e.slug === dbE.slug)
        
        const newEvent = {
            ...(existingIdx >= 0 ? merged[existingIdx] : {}),
            slug: dbE.slug,
            pageTitle: dbE.pageTitle,
            eventInfo: {
                ...(existingIdx >= 0 ? merged[existingIdx]?.eventInfo : {}),
                date: dbE.date || merged[existingIdx]?.eventInfo?.date,
                location: dbE.location || merged[existingIdx]?.eventInfo?.location,
                description: dbE.description || merged[existingIdx]?.eventInfo?.description,
                eventStatus: dbE.status || merged[existingIdx]?.eventInfo?.eventStatus,
                ...(parsedContent.eventInfo || {})
            },
            ...parsedContent
        }
        
        if (existingIdx >= 0) {
            merged[existingIdx] = newEvent
        } else {
            merged.push(newEvent)
        }
    }
    return NextResponse.json(merged)
}
