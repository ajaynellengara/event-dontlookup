import { NextResponse } from 'next/server'
import { landingData } from '@/lib/data/landing-data'

export async function GET() {
  return NextResponse.json(landingData)
}
