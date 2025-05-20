// src/app/layout.tsx

import './globals.css'
import React, { Suspense } from 'react'
import Script from 'next/script'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import AnalyticsProvider from '@/components/AnalyticsProvider'

export const metadata = {
  title: 'VOLUNTEERS IN SERVICE TO ART',
  description: 'A creative platform by Vista',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
}

const GA_ID = 'G-M3W46FJQHF'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* 1) Load the gtag library */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        {/* 2) Initialize gtag */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config','${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
      </head>
      <body className="h-screen flex overflow-hidden">
        {/* 0. Mobile-only sliding nav */}
        <Navbar />

        {/* 1. Sidebar fixed width on the left */}
        <Sidebar />

        {/* 2. Main content flexes, always white, scrollable */}
        <Suspense fallback={null}>
          <AnalyticsProvider>
            <main className="flex-1 bg-white overflow-auto p-6">
              {children}
            </main>
          </AnalyticsProvider>
        </Suspense>
      </body>
    </html>
  )
}
