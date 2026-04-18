import Link from 'next/link'
import { logoutAction } from '../actions'

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-neutral-200 sticky top-0 h-screen overflow-y-auto">
        <div className="p-6">
          <h1 className="text-xl font-bold tracking-tight text-neutral-900">CMS Admin</h1>
        </div>
        <nav className="mt-2 space-y-1 px-3">
          <Link href="/admin/events" className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-900 bg-neutral-100">
            Events Manager
          </Link>
          <Link href="/admin/contacts" className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50">
            Form Submissions
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-neutral-200 h-16 flex items-center justify-between px-8">
            <div className="text-sm text-neutral-500">
                Manage your website content
            </div>
            <form action={logoutAction}>
                <button type="submit" className="text-sm font-medium text-red-600 hover:text-red-800">
                    Logout
                </button>
            </form>
        </header>
        <main className="flex-1 p-8 overflow-y-auto">
            {children}
        </main>
      </div>
    </div>
  )
}
