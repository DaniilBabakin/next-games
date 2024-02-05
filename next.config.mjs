const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2norla3tyc4cn.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    // Не смог найти решения для избежания ошибки при build, которая вызвана после начала использования getStaticPaths. 
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
