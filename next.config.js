/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  output: 'standalone',
  images: {
    domains: ['cdn-images-1.medium.com', 'medium.com', 'academy-public.coinmarketcap.com', 'miro.medium.com'],
    formats: ['image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/fluxCloud',
        destination: 'https://cloud.runonflux.com',
        permanent: false,
        basePath: false
      },
      {
        source: '/cloud',
        destination: 'https://cloud.runonflux.com',
        permanent: false,
        basePath: false
      },
      {
        source: '/privacy-policy.html',
        destination: '/privacyPolicy',
        permanent: true,
        basePath: false
      },
      {
        source: '/term-conditions.html',
        destination: '/termsandconditions',
        permanent: true,
        basePath: false
      },
      {
        source: '/fluxEdge',
        destination: 'https://fluxedge.ai',
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
        source: '/fluxAI',
        destination: 'https://fluxai.app/',
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
        source: '/ssp',
        destination: 'https://sspwallet.io/',
        permanent: false,
        basePath: false
      },
      {
        source: '/dashboard',
        destination: 'https://home.runonflux.com/dashboard/overview',
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
        destination: 'https://wiki.runonflux.com/',
        permanent: false,
        basePath: false
      },
      {
        source: '/blockExplorer',
        destination: 'https://explorer.runonflux.com/',
        permanent: false,
        basePath: false
      },
      {
        source: '/app',
        destination: 'https://jetpack2.app.runonflux.io/hello.html',
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
        source: '/cypherPunk2024',
        destination: ' https://cypherpunk2024.com/',
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
        destination: 'mailto:labs@runonflux.com',
        permanent: false,
        basePath: false
      },
      {
        source: '/apply2',
        destination: 'mailto:labs@runonflux.com?subject=MAKE FLUX GO GREEN',
        permanent: false,
        basePath: false
      },
      {
        source: '/fluxone',
        destination: 'https://fluxai.app/fluxone',
        permanent: false,
        basePath: false
      },
    ]
  },                                                                             
} 
