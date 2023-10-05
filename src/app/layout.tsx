import { Header } from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { ContactForm } from '@/components/contact-form'

const inter = Inter({ 
  variable: '--font-inter',
  subsets: ['latin'] 
})

const plexMono = IBM_Plex_Mono({ 
  variable: '--font-plex-mono',
  subsets: ['latin'], 
  weight:['400', '500'] 
})

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home do Portfolio do Marcelo',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Header/>
        {children}
        <ContactForm />
      </body>
    </html>
  )
}
