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
            <head>
                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MFQJD24W');`
                    }}
                />
                {/* End Google Tag Manager */}
            </head>
            <body className={`${sora.variable} ${bigShouldersDisplay.variable}`}>
                {/* Google Tag Manager (noscript) */}
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MFQJD24W"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`
                    }}
                />
                {/* End Google Tag Manager (noscript) */}
                <FloatSidebar />
                <Navbar headerData={globalData.header} />
                {children}
                {/* <Footer /> */}
                <Footer footerData={globalData.footer} />
            </body>
        </html>
    )
}