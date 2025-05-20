const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: '/invite',
        destination:
          'https://discord.com/oauth2/authorize?client_id=928966154817523723&permissions=2184538160&response_type=code&redirect_uri=https%3A%2F%2Fmewwme.is-a.fun%2Fthankyou&integration_type=0&scope=bot+applications.commands+guilds',
        permanent: true,
      },
      {
        source: '/support',
        destination: 'https://discord.gg/6EXgrmtkPX',
        permanent: true,
      },
      {
        source: '/fiverr',
        destination: 'https://www.fiverr.com/romanromannya',
        permanent: true,
      },
      {
        source: '/patreon',
        destination: 'https://patreon.com/mewwme/',
        permanent: true,
      },
      {
        source: '/kofi',
        destination: 'https://ko-fi.com/mewwme',
        permanent: true,
      },
      {
        source: '/buymeacoffee',
        destination: 'https://buymeacoffee.com/mewwme',
        permanent: true,
      },
      {
        source: '/builtbybit',
        destination:
          'https://builtbybit.com/resources/mewwme-discord-music-bot-premium-system.35681/',
        permanent: true,
      },
      {
        source: '/topgg',
        destination: 'https://top.gg/bot/928966154817523723/vote',
        permanent: true,
      },
      {
        source: '/uptime',
        destination: 'https://status-mewwme.is-a.fun/',
        permanent: true,
      },
      {
        source: '/mewstify',
        destination: 'https://mewstify.vercel.app',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Content-Type, Authorization',
          },
        ],
      },
    ];
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.meww.me',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.iconify.design',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
