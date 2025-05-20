// src/components/AnalyticsProvider.tsx
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const GA_ID = 'G-M3W46FJQHF'

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const search = useSearchParams()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gtag = (window as any).gtag
    if (typeof gtag === 'function') {
      const url = pathname + (search.toString() ? `?${search}` : '')
      gtag('config', GA_ID, { page_path: url })
    }
  }, [pathname, search])

  return <>{children}</>
}
