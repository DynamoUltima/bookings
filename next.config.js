/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images :{
    domains: ['i.ytimg.com','yt3.ggpht.com','plus.unsplash.com','images.unsplash.com']
  },
  env: {
    NEXTAUTH_SECRET: "unighana1126",
    // NEXTAUTH_URL: "https://expeed-admin.vercel.app"
  }
}

module.exports = nextConfig
