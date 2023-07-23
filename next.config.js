/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options herae */
}
 
module.exports = {
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/',
      },
    ]
  },
}
