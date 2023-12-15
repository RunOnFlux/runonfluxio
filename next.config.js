/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // distDir: 'build',
}

module.exports =nextConfig

module.exports = {
  
 
  images: {

    domains: ['cdn-images-1.medium.com', 'medium.com', 'academy-public.coinmarketcap.com', 'miro.medium.com'],
    formats: ['image/webp'],
  },

  async redirects() {
    return [
      {
        source: '/fluxCloud',
        destination: 'https://cloud.runonflux.io/hello.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/fluxCore',
        destination: 'https://leaderboard.fluxcore.ai',
        permanent: false,
        basePath: false
      },
      {
        source: '/zelcore',
        destination: 'https://zelcore.io/',
        permanent: false,
        basePath: false
      },
      {
        source: '/dashboard',
        destination: 'https://home.runonflux.io/dashboard/overview',
        permanent: false,
        basePath: false
      },
      {
        source: '/whitepaper',
        destination: 'https://whitepaper.app.runonflux.io/',
        permanent: false,
        basePath: false
      },
      {
        source: '/documentation',
        destination: 'https://wiki.runonflux.io/',
        permanent: false,
        basePath: false
      },
      {
        source: '/blockExplorer',
        destination: 'https://explorer.runonflux.io/',
        permanent: false,
        basePath: false
      },
      {
        source: '/app',
        destination: 'https://cloud.runonflux.io/hello.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/node',
        destination: 'https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb',
        permanent: false,
        basePath: false
      },
      {
        source: '/fractusnode',
        destination: 'https://fluxofficial.medium.com/earn-more-with-fractus-cumulus-store-more-flux-earned-cbeac46bc9e7',
        permanent: false,
        basePath: false
      },
      {
        source: '/fluxStore',
        destination: 'https://gotflux.store/',
        permanent: false,
        basePath: false
      },
      {
        source: '/guides',
        destination: 'https://help.runonflux.io/',
        permanent: false,
        basePath: false
      },   
      {
        source: '/github',
        destination: 'https://github.com/runonflux',
        permanent: false,
        basePath: false
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/channel/UCphbdfb1MXYgUPsdhQPcnGw',
        permanent: false,
        basePath: false
      },
      {
        source: '/twitch',
        destination: 'https://www.twitch.tv/runonflux',
        permanent: false,
        basePath: false
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/RunOnFlux',
        permanent: false,
        basePath: false
      },
      {
        source: '/facebook',
        destination: 'https://www.facebook.com/runonflux',
        permanent: false,
        basePath: false
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/runonflux_official',
        permanent: false,
        basePath: false
      },
      {
        source: '/tiktok',
        destination: 'https://www.tiktok.com/@flux_runonflux',
        permanent: false,
        basePath: false
      },
      {
        source: '/linkedIn',
        destination: 'https://www.linkedin.com/company/flux-official/mycompany',
        permanent: false,
        basePath: false
      },
      {
        source: '/bitcoinTalk',
        destination: 'https://bitcointalk.org/index.php?topic=2853688.0',
        permanent: false,
        basePath: false
      },
      {
        source: '/telegram',
        destination: 'https://t.me/runonflux',
        permanent: false,
        basePath: false
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/runonflux',
        permanent: false,
        basePath: false
      },
      {
        source: '/reddit',
        destination: 'https://www.reddit.com/r/Flux_Official',
        permanent: false,
        basePath: false
      },
      {
        source: '/medium',
        destination: 'https://fluxofficial.medium.com',
        permanent: false,
        basePath: false
      },
      {
        source: '/pressKit',
        destination: 'https://github.com/RunOnFlux/press',
        permanent: false,
        basePath: false
      },
      {
        source: '/support',
        destination: 'https://support.runonflux.io/',
        permanent: false,
        basePath: false
      },
      {
        source: '/apply',
        destination: 'mailto:labs@runonflux.io',
        permanent: false,
        basePath: false
      },
      {
        source: '/apply2',
        destination: 'mailto:labs@runonflux.io?subject=MAKE FLUX GO GREEN',
        permanent: false,
        basePath: false
      },
      {
        source: '/contact',
        destination: 'mailto:info@runonflux.io?subject=Contact%20Flux!',
        permanent: false,
        basePath: false
      },
    ]
  }                                                                             
} 
