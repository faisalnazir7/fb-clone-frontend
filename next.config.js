/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "avatars.dicebear.com",
      "images.pexels.com",
      "static.xx.fbcdn.net",
      "platform-lookaside.fbsbx.com",
      "scontent.fmaa3-2.fna.fbcdn.net",
      
    ],
  },
  swcMinify: true,
}

module.exports = nextConfig
