// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent') ?? ''
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(ua)
  const { pathname } = request.nextUrl

  // Only rewrite the root path on mobile
  if (isMobile && pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = '/mobile'
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/'],   // run middleware only for the root path
}
