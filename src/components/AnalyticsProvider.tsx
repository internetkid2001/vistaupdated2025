'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect }                 from 'react'

const GA_ID = 'G-M3W46FJQHF'

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const search   = useSearchParams()

  useEffect(() => {
    // cast to any so TS won’t complain
    const gtag = (window as any).gtag
    if (typeof gtag === 'function') {
      const url = pathname + (search.toString() ? `?${search}` : '')
      gtag('config', GA_ID, { page_path: url })
    }
  }, [pathname, search])

  return <>{children}</>
}
