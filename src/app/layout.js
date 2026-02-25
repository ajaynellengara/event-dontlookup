import './globals.css'
import { sora, bigShouldersDisplay } from '@/lib/fonts'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'

export const metadata = {
    title: 'Dontlookup.Events',
    description: 'Features: Feeds, Flicks , Jobs, Learning, Collabs &amp; More',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${sora.variable} ${bigShouldersDisplay.variable}`}>
                <Navbar />
                {children}
                {/* <Footer /> */}
                <Footer />
            </body>
        </html>
    )
}