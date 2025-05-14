import './globals.css'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'Vista',
  description: 'A creative platform by Vista',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen flex overflow-hidden">
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
