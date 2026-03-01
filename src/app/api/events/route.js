import { NextResponse } from 'next/server'
import { eventsData } from '@/lib/data/events-data'

export async function GET() {
    return NextResponse.json(eventsData)
}
