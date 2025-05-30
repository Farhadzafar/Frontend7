/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',  // js comement this line to enable server-side rendering
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
