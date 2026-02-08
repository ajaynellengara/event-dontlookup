import Link from 'next/link'

async function getEvent(id) {
    const res = await fetch(`http://localhost:3000/api/events/${id}`, { cache: 'no-store' })
    if (!res.ok) {
        throw new Error('Failed to fetch event')
    }
    return res.json()
}

export default async function EventDetails({ params }) {
    const resolvedParams = await params
    const { id } = resolvedParams
    const event = await getEvent(id).catch(() => null)

    if (!event) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Event not found</h1>
                    <Link href="/" className="text-indigo-600 hover:underline mt-4 block">Back to Home</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Event Hero */}
            <div className="relative bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
                {event.hero?.backgroundImage && (
                    <div className="absolute inset-0 opacity-40">
                        <img src={event.hero.backgroundImage} alt="Event Hero" className="w-full h-full object-cover" />
                    </div>
                )}
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">{event.hero?.title}</h1>
                    <p className="text-2xl font-light text-indigo-300 mb-6">{event.hero?.subtitle}</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg">
                        <div className="flex items-center">
                            <span className="font-semibold text-indigo-400 mr-2">DATE:</span> {event.hero?.date}
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-indigo-400 mr-2">TIME:</span> {event.hero?.time}
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-indigo-400 mr-2">LOC:</span> {event.hero?.location}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* About */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{event.about?.title || 'About Event'}</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">{event.about?.description}</p>
                            {event.about?.highlights && (
                                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                    {event.about.highlights.map((item, idx) => <li key={idx}>{item}</li>)}
                                </ul>
                            )}
                        </section>

                        {/* Agenda */}
                        {event.agenda && (
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Agenda</h2>
                                <div className="space-y-6">
                                    {event.agenda.map((item, index) => (
                                        <div key={index} className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                                            <div className="w-24 shrink-0 font-bold text-indigo-600">{item.time}</div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{item.title || item.activity}</h4>
                                                {item.description && <p className="text-sm text-gray-500 mt-1">{item.description}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Speakers */}
                        {event.speakers && (
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Speakers & Guests</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {event.speakers.map((speaker, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden">
                                                <img src={speaker.image} alt={speaker.name} className="h-full w-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900">{speaker.name}</p>
                                                <p className="text-sm text-indigo-600">{speaker.role}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Get Tickets</h3>
                            <div className="space-y-4">
                                {event.tickets?.map((ticket, idx) => (
                                    <div key={idx} className="p-4 border border-gray-200 rounded-lg hover:border-indigo-500 transition-colors cursor-pointer">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-semibold text-gray-900">{ticket.type}</span>
                                            <span className="font-bold text-indigo-600">{ticket.price}</span>
                                        </div>
                                        <ul className="text-xs text-gray-500 space-y-1">
                                            {ticket.benefits?.map((b, i) => <li key={i}>• {b}</li>)}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-6 bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                                {event.hero?.ctaText || 'Register Now'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
