/** @type {import('next').NextConfig} */
const dev = process.env.NODE_ENV !== 'production';

const nextConfig = {
  output: 'export', // ✅ REQUIRED for static export

  async headers() {
    if (dev) {
      return [];
    }

    return [
      {
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
    ];
  }
};

module.exports = nextConfig;