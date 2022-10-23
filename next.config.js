/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'dash.irscloud.id',
      'cdn.irscloud.id',
      'res.cloudinary.com',
      'images.unsplash.com',
      'staticxl.ext.xlaxiata.co.id',
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
