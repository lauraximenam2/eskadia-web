/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    // Durante el desarrollo, esto permite builds más rápidos
    // En producción, siempre verifica errores de TypeScript
    ignoreBuildErrors: false,
  },
  eslint: {
    // Durante el desarrollo, permite builds más rápidos
    // En producción, siempre verifica errores de ESLint
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
