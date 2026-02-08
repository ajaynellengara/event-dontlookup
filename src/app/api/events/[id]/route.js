import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
    const resolvedParams = await params
    const { id } = resolvedParams

    // Mock data - in a real app thiswould come from a CMS
    const eventDetails = {
        id: id,
        meta: {
            title: 'Model Forward Live - Kochi',
            description: 'Fashion meets Entrepreneurship on Jan 29, 2025.'
        },
        hero: {
            title: 'Model Forward Live',
            subtitle: 'Where Fashion meets Entrepreneurship',
            date: '29 JAN 2025',
            time: '09:00 AM Onwards',
            location: 'Kochi, India',
            backgroundImage: '/images/event-hero.jpg',
            ctaText: 'Get Tickets'
        },
        about: {
            title: 'What is Model Forward?',
            description: 'Model Forward Live is a premier event designed to bridge the gap between the fashion industry and entrepreneurial success. Whether you are an aspiring model, a fashion designer, or a business enthusiast, this event offers a unique platform to learn, network, and grow.',
            highlights: [
                'Expert Masterclasses',
                'Live Runway Shows',
                'Networking Opportunities',
                'Brand Exhibitions'
            ]
        },
        agenda: [
            { time: '10:00 AM', title: 'Registration & Welcome', description: 'Check-in and collect your welcome kit.' },
            { time: '10:30 AM', title: 'Keynote: The Business of Fashion', description: 'Opening remarks by industry leaders.' },
            { time: '11:30 AM', title: 'Model Grooming Workshop', description: 'Practical session on ramp walk and posture.' },
            { time: '01:00 PM', title: 'Networking Lunch', description: 'Meet fellow attendees and speakers.' },
            { time: '02:00 PM', title: 'Makeup & Styling Masterclass', description: 'Learn the latest trends from top makeup artists.' },
            { time: '04:00 PM', title: 'Panel Discussion', description: 'Navigating the Fashion Industry in 2025.' },
            { time: '06:00 PM', title: 'Grand Finale: Model Forward Live Fashion Show', description: 'Witness the spectacular runway event.' }
        ],
        speakers: [
            { name: 'Jane Doe', role: 'Supermodel & Entrepreneur', image: '/images/speaker1.jpg' },
            { name: 'John Smith', role: 'Fashion Photographer', image: '/images/speaker2.jpg' },
            { name: 'Alice Brown', role: 'Celebrity Stylist', image: '/images/speaker3.jpg' }
        ],
        tickets: [
            { type: 'General Access', price: '₹999', benefits: ['Access to all sessions', 'Lunch included'] },
            { type: 'VIP Access', price: '₹2499', benefits: ['Front row seats', 'Backstage access', 'Exclusive dinner'] }
        ],
        sponsors: [
            { name: 'FashionWeek', tier: 'Title Sponsor', logo: '/images/sponsor1.png' },
            { name: 'GlamourMag', tier: 'Media Partner', logo: '/images/sponsor2.png' }
        ],
        faq: [
            { question: 'Is there a dress code?', answer: 'Yes, Smart Casual or Fashion Forward.' },
            { question: 'Can I register on the spot?', answer: 'Subject to availability. Online registration is recommended.' }
        ]
    }

    return NextResponse.json(eventDetails)
}
