'use server'

import { loginUser, logoutUser } from '@/lib/api/auth'
import { redirect } from 'next/navigation'

export async function loginAction(formData) {
  const email = formData.get('email')
  const password = formData.get('password')

  const res = await loginUser(email, password)
  if (res.success) {
    redirect('/admin')
  } else {
    // Basic redirect back with error in query for simple UI handling
    redirect('/admin/login?error=Invalid Credentials')
  }
}

export async function logoutAction() {
  await logoutUser()
  redirect('/admin/login')
}
