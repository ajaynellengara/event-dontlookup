import { NextResponse } from 'next/server'
import { globalData } from '@/lib/data/global-data'

export async function GET() {
    return NextResponse.json(globalData)
}
