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
   
    // {
    //   source: '/fluxNodes',
    //   destination: 'https://www.runonflux.io/flux-nodes.html',
    //   permanent: false,
    //   basePath: false
    // },
    // {
    //   source: '/flux',
    //   destination: 'https://www.runonflux.io/flux.html',
    //   permanent: false,
    //   basePath: false
    // },
  
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
    // {
    //   source: '/XDAO',
    //   destination: 'https://www.runonflux.io/xdao.html',
    //   permanent: false,
    //   basePath: false
    // },
    {
      source: '/whitepaper',
      destination: 'https://whitepaper.app.runonflux.io/',
      permanent: false,
      basePath: false
    },
    // {
    //   source: '/roadmaps',
    //   destination: 'https://www.runonflux.io/roadmap.html',
    //   permanent: false,
    //   basePath: false
    // },
    // {
  
    // {
 
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
    // {
    //   source: '/carbonNeutrality',
    //   destination: 'https://www.runonflux.io/zero-carbon.html',
    //   permanent: false,
    //   basePath: false
    // },
    // {
    //   source: '/fluxLabs',
    //   destination: 'https://www.runonflux.io/fluxlabs.html',
    //   permanent: false,
    //   basePath: false
    // },
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
    // {
    //   source: '/miner',
    //   destination: 'https://www.runonflux.io/mining.html',
    //   permanent: false,
    //   basePath: false
    // },
    // {
    //   source: '/buyFlux',
    //   destination: 'https://runonflux.io/flux.html#exchanges',
    //   permanent: false,
    //   basePath: false
    // },
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
    // {
    //   source: '/social',
    //   destination: 'https://www.runonflux.io/flux-social.html',
    //   permanent: false,
    //   basePath: false
    // },
  
    // {
    //   source: '/bugBounty',
    //   destination: 'https://www.runonflux.io/bug-bounty-program.html',
    //   permanent: false,
    //   basePath: false
    // },
 
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
  ]
},
                                                                             
} 
