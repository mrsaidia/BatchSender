/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Tắt ESLint khi build
  },
};

module.exports = nextConfig;
