import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { FluxCarbonPage } from '../components/fluxCarbonPage/fluxCarbonPage'
import { NavBar2 } from '../components/navbar/navbar2'
export default function FluxCarbon() {
  return (
    <div>
      <Head>
        <title>Flux | FluxCarbon</title>
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
      <NavBar2/>
     <FluxCarbonPage/>
    </div>
  )
}