//'use client' serve para o toaster funcionar no next
//como usar o 'react-hot-toast' no next: 'https://www.youtube.com/watch?v=RVGRPleYFUI&list=PLY_G6KZ7jlfU41bdaWpTsOnfCC7bmpJcL&index=15&ab_channel=GBDev'
'use client'

import { Toaster as ToasterProvider } from 'react-hot-toast'

export function Toaster() {
   return (
      <ToasterProvider
         position="bottom-center"
         toastOptions={{
            success: {
               style: {
                  background: '#10b981',
                  color: '#fff',
               },
               iconTheme: {
                  primary: '#fff',
                  secondary: '#10b981',
               },
               duration: 2500
            },
            error: {
               style: {
                  background: '#ef4444',
                  color: '#fff',
               },
               iconTheme: {
                  primary: '#fff',
                  secondary: '#ef4444',
               },
               duration: 2500
            },
         }}
      />
   )
}