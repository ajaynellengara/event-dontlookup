import { loginAction } from '../actions'

export default function LoginPage({ searchParams }) {
  const error = searchParams?.error

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-neutral-900 tracking-tight">
          Admin Dashboard
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10 border border-neutral-200">
          <form action={loginAction} className="space-y-6">
            {error && (
                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-200">
                    {error}
                </div>
            )}
            <div>
              <label className="block text-sm font-medium text-neutral-700">Email address</label>
              <div className="mt-1">
                <input name="email" type="email" required defaultValue="ajay@admin.com" className="appearance-none block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"/>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700">Password</label>
              <div className="mt-1">
                <input name="password" type="password" required defaultValue="admin@123" className="appearance-none block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"/>
              </div>
            </div>

            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
