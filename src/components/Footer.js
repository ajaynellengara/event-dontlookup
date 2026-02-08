export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white mt-12">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div>
                        <p>&copy; 2026 EventApp. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-gray-300">Privacy</a>
                        <a href="#" className="text-gray-400 hover:text-gray-300">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
