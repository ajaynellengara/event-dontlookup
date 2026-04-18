import Link from 'next/link'
import { getEvents } from '@/lib/api/events'

export const dynamic = 'force-dynamic'

export default async function EventsPage() {
  const events = await getEvents()

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-neutral-900">Events</h1>
          <p className="mt-2 text-sm text-neutral-700">A list of all events in the CMS.</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link href="/admin/events/new" className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800">
            Add Event
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        {events.length === 0 ? (
            <div className="p-8 text-center border border-dashed border-neutral-300 rounded-lg">
                <p className="text-sm text-neutral-500">No events found. Create one to get started.</p>
            </div>
        ) : (
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-neutral-300">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-neutral-900 sm:pl-6">Title</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900">Slug</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900">Status</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900">Date</th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    {events.map((event) => (
                      <tr key={event.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 sm:pl-6">{event.pageTitle}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500">{event.slug}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800">
                                {event.status}
                            </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500">{event.date}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link href={`/admin/events/${event.id}`} className="text-black hover:underline cursor-pointer">Edit</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
