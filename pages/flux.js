import Head from 'next/head'
import Script from 'next/script'
import { Flux } from '../components/fluxCoin/fluxpage.js'
import { NavBar } from '../components/navbar/navbar.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flux | Cryptocurency</title>
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
  
      <NavBar/>
      <Flux/> 
    </div>
  )
}
