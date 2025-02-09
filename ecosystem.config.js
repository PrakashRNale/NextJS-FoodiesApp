module.exports = {
  apps: [
    {
      name: 'nextjs-app',
      script: 'npm start',
      args: 'start',
      node_args: '--max-old-space-size=2048',  // Optional for memory management
      env: {
        NODE_ENV: 'production',
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
        AWS_REGION: process.env.AWS_REGION,
        AWS_S3BUCKET_URL: process.env.AWS_S3BUCKET_URL,
        AWS_S3BUCKET_NAME: process.env.AWS_S3BUCKET_NAME,
        AWS_S3BUCKET_CONFIG: process.env.AWS_S3BUCKET_CONFIG,
      },
    },
  ],
};
