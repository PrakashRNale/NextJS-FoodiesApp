/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [process.env.AWS_S3BUCKET_CONFIG],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.AWS_S3BUCKET_CONFIG,
                port: '',
                pathname: '/**',
            },
        ],
    },
  };

module.exports = nextConfig
