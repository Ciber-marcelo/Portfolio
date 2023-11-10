import './globals.css'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { BackToTop } from '@/components/back-to-top'
import { Header } from '@/components/header'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/toaster'

const inter = Inter({ 
  variable: '--font-inter',
  subsets: ['latin'] 
})

const plexMono = IBM_Plex_Mono({ 
  variable: '--font-plex-mono',
  subsets: ['latin'], 
  weight:['400', '500'] 
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <BackToTop />
        <Header/>
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
