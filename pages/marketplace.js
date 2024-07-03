import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { MarketplacePage } from '../components/marketplacePage/marketplacePage.js'
import { NavBar5 } from '../components/navbar/navbar5.js'

export default function Marketplace() {
  return (
    <div>
      <Head>
        <title>Flux | Marketplace</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-KTKEYE3YMN" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-KTKEYE3YMN');
            `}
        </Script>
        <NavBar5/>
      <MarketplacePage/>
    </div>
  )
}