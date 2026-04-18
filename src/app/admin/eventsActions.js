'use server'

import { createEvent, updateEvent, deleteEvent } from '@/lib/api/events'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { z } from 'zod'

const eventSchema = z.object({
  slug: z.string().min(1),
  pageTitle: z.string().min(1),
  status: z.string(),
  date: z.string().optional(),
  location: z.string().optional(),
  description: z.string().optional(),
  contentData: z.string(),
})

export async function saveEventAction(formData) {
  const id = formData.get('id')
  
  const rawData = {
    slug: formData.get('slug'),
    pageTitle: formData.get('pageTitle'),
    status: formData.get('status'),
    date: formData.get('date') || '',
    location: formData.get('location') || '',
    description: formData.get('description') || '',
    contentData: formData.get('contentData') || '{}',
  }

  // Zod validation
  const parsed = eventSchema.safeParse(rawData)
  if (!parsed.success) {
      console.error(parsed.error)
      throw new Error("Invalid form data")
  }

  const data = parsed.data

  if (id === 'new') {
    await createEvent(data)
  } else {
    await updateEvent(id, data)
  }

  revalidatePath('/admin/events')
  revalidatePath('/', 'layout') // Revalidate all front-end routes so latest changes appear
  redirect('/admin/events')
}

export async function deleteEventAction(formData) {
    const id = formData.get('id')
    if (id && id !== 'new') {
        await deleteEvent(id)
        revalidatePath('/admin/events')
        revalidatePath('/', 'layout')
    }
    redirect('/admin/events')
}
