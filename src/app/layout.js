import './globals.css'
import { sora, bigShouldersDisplay } from '@/lib/fonts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
    title: 'Event App',
    description: 'Find and book your next event',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${sora.variable} ${bigShouldersDisplay.variable}`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}