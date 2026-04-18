import { getEventById } from '@/lib/api/events'
import { saveEventAction, deleteEventAction } from '../../../eventsActions'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function EventFormPage({ params }) {
  const isNew = params.id === 'new'
  const event = isNew ? null : await getEventById(params.id)

  if (!isNew && !event) {
    return <div>Event not found.</div>
  }

  return (
    <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-neutral-900 sm:text-3xl sm:truncate">
            {isNew ? 'Create New Event' : `Edit Event: ${event.pageTitle}`}
          </h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <Link href="/admin/events" className="inline-flex items-center px-4 py-2 border border-neutral-300 rounded-md shadow-sm text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50 transition-colors">
            Cancel
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-sm px-4 py-5 sm:rounded-lg sm:p-6 border border-neutral-200">
        <form action={saveEventAction} className="space-y-6">
          <input type="hidden" name="id" value={params.id} />
          
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-neutral-700 mb-1">Page Title</label>
              <input type="text" name="pageTitle" required defaultValue={event?.pageTitle || ''} className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-neutral-300 rounded-md py-2 px-3 border" />
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-neutral-700 mb-1">Slug (Unique URL)</label>
              <input type="text" name="slug" required defaultValue={event?.slug || ''} className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-neutral-300 rounded-md py-2 px-3 border" />
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-neutral-700 mb-1">Status</label>
              <select name="status" defaultValue={event?.status || 'upcoming'} className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-neutral-300 rounded-md py-2 px-3 border">
                <option value="upcoming">Upcoming</option>
                <option value="announced">Announced</option>
                <option value="finished">Finished</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-neutral-700 mb-1">Date string</label>
              <input type="text" name="date" defaultValue={event?.date || ''} className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-neutral-300 rounded-md py-2 px-3 border" placeholder="e.g. 31 may 2026"/>
            </div>

            <div className="sm:col-span-6">
              <label className="block text-sm font-medium text-neutral-700 mb-1">Location</label>
              <input type="text" name="location" defaultValue={event?.location || ''} className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-neutral-300 rounded-md py-2 px-3 border" />
            </div>

            <div className="sm:col-span-6">
              <label className="block text-sm font-medium text-neutral-700 mb-1">Short Description</label>
              <textarea name="description" rows={3} defaultValue={event?.description || ''} className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-neutral-300 rounded-md py-2 px-3 border" />
            </div>

            <div className="sm:col-span-6">
              <label className="block text-sm font-medium text-neutral-700 mb-1">Advanced Content Data (JSON)</label>
              <p className="text-xs text-neutral-500 mb-2 mt-[-4px]">Paste the complex JSON structure for hero, partners, outcomes, etc.</p>
              <textarea name="contentData" rows={10} required defaultValue={event?.contentData || '{\n  "hero": {},\n  "partners": {}\n}'} className="font-mono text-xs shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-neutral-300 rounded-md py-2 px-3 border" />
            </div>
          </div>

          <div className="pt-5 border-t border-neutral-200 mt-8">
            <div className="flex justify-end gap-3">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-neutral-800 transition-colors focus:outline-none">
                {isNew ? 'Create Event' : 'Update Event'}
              </button>
            </div>
          </div>
        </form>
        
        {!isNew && (
            <div className="mt-10 pt-5 border-t border-red-200">
               <form action={deleteEventAction} className="flex justify-end">
                    <input type="hidden" name="id" value={params.id} />
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-red-700 bg-red-50 hover:bg-red-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        Delete Event
                    </button>
               </form>
            </div>
        )}
      </div>
    </div>
  )
}
