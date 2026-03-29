import './globals.css'
import { sora, bigShouldersDisplay } from '@/lib/fonts'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import { globalData } from '@/lib/data/global-data'
import FloatSidebar from '@/components/utils/float-sidebar'

export const metadata = {
    title: 'Dontlookup.Events',
    description: 'Features: Feeds, Flicks , Jobs, Learning, Collabs &amp; More',
    openGraph: {
        images: ['/images/dontlookup-events-og.png'],
    },
    twitter: {
        card: 'summary_large_image',
        images: ['/images/dontlookup-events-og.png'],
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${sora.variable} ${bigShouldersDisplay.variable}`}>
                <FloatSidebar />
                <Navbar headerData={globalData.header} />
                {children}
                {/* <Footer /> */}
                <Footer footerData={globalData.footer} />
            </body>
        </html>
    )
}