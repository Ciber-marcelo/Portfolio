import { Header } from '@/components/Header'
import './globals.css'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { ContactForm } from '@/components/Contact-form'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/Toaster'
import { BackToTop } from '@/components/Back-to-top'

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
