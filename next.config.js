const nextConfig = {
    images: {
      domains: [process.env.AWS_S3BUCKET_CONFIG || "prakashrnale-foodies.s3.ap-south-1.amazonaws.com"], // Use bucket config
      remotePatterns: [
        {
          protocol: 'https',
          hostname: process.env.AWS_S3BUCKET_CONFIG || "prakashrnale-foodies.s3.ap-south-1.amazonaws.com",
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  