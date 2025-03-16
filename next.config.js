/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during build to prevent build failures
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 