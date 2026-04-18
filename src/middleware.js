import { NextResponse } from 'next/server'
import { decrypt } from './lib/api/auth.js'

export async function middleware(request) {
  const path = request.nextUrl.pathname
  const isProtectedRoute = path.startsWith('/admin') && !path.startsWith('/admin/login')

  if (isProtectedRoute) {
    const cookie = request.cookies.get('session')?.value
    const session = await decrypt(cookie)

    if (!session?.user) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  // Redirect /admin to /admin/events by default
  if (path === '/admin') {
      return NextResponse.redirect(new URL('/admin/events', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
