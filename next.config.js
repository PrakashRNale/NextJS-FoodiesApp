/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['prakashrnale.s3.ap-south-1.amazonaws.com'],
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'https://prakashrnale.s3.ap-south-1.amazonaws.com/',
            port: '',
            pathname: '/**',
            },
        ],
    },
  };

module.exports = nextConfig
