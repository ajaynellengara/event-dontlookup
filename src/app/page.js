import Link from 'next/link'

async function getEvents() {
    const res = await fetch('http://localhost:3000/api/events/landing', { cache: 'no-store' })
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Home() {
    const { hero, featuredEvents = [] } = await getEvents().catch(() => ({ hero: {}, featuredEvents: [] }))

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
                {hero?.backgroundImage && (
                    <div className="absolute inset-0 opacity-30">
                        <img src={hero.backgroundImage} alt="Hero Background" className="w-full h-full object-cover" />
                    </div>
                )}
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">{hero?.headline || 'Upcoming Events'}</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">{hero?.subheadline}</p>
                    <div className="flex justify-center flex-col sm:flex-row gap-4 items-center">
                        <span className="text-2xl font-bold text-indigo-400">{hero?.date}</span>
                        {hero?.ctaText && <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-colors">{hero.ctaText}</button>}
                    </div>
                </div>
            </section>

            {/* Featured Events */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Events</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {featuredEvents?.items?.map((event) => (
                        <div key={event.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                            <div className="flex-shrink-0 h-48 bg-gray-200 relative">
                                <img className="h-full w-full object-cover" src={event.image} alt={event.title} />
                            </div>
                            <div className="flex-1 flex flex-col justify-between p-6">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-indigo-600">
                                        {new Date(event.date).toLocaleDateString()}
                                    </p>
                                    <Link href={`/events/${event.id}`} className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900 hover:underline">{event.title}</p>
                                    </Link>
                                    <p className="mt-3 text-base text-gray-500 line-clamp-3">{event.description}</p>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <span className="sr-only">Location</span>
                                        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.62.83.8 1.654 1.382 2.274 1.766a11.267 11.267 0 00.758.434l.017.007.006.003.002.001zM10 13a4 4 0 100-8 4 4 0 000 8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            {event.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
