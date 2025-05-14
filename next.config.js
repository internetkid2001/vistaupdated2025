/** @type {import('next').NextConfig} */
const dev = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    // Skip CSP in development so eval/hydration and HMR work
    if (dev) {
      return []
    }

    // Only in production, enforce a strict-but-functional CSP
    return [
      {
        // apply these headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              `default-src 'self'`,
              `script-src 'self' 'unsafe-eval' 'unsafe-inline'`,
              `style-src 'self' 'unsafe-inline'`,
              `img-src 'self' data:`,
              `media-src 'self' https://victor-videos.b-cdn.net`,
              `frame-src https://www.youtube-nocookie.com`,
              `connect-src 'self' ws:`,
            ].join('; ')
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
