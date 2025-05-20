'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const GA_ID = 'G-M3W46FQHF'  // or pull from NEXT_PUBLIC_MEASUREMENT_ID

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const search   = useSearchParams()

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      const url = pathname + (search.toString() ? `?${search}` : '')
      window.gtag('config', GA_ID, { page_path: url })
    }
  }, [pathname, search])

  return <>{children}</>
}
