// src/app/layout.tsx

import './globals.css'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'VOLUNTEERS IN SERVICE TO ART',
  description: 'A creative platform by Vista',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen flex overflow-hidden">
        {/* 0. Mobile-only sliding nav */}
        <Navbar />

        {/* 1. Sidebar fixed width on the left */}
        <Sidebar />

        {/* 2. Main content flexes, always white, scrollable */}
        <main className="flex-1 bg-white overflow-auto p-6">
          {children}
        </main>
      </body>
    </html>
  )
}
