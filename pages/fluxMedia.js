
import Head from 'next/head'
import Script from 'next/script'
import { FluxMediaPage } from '../components/fluxMediaPage/fluxMediaPage.js'
import { NavBar0 } from '../components/navbar/mainNav.js'

export default function FluxMedia() {
  return (
    <div>
      <Head>
        <title>Flux | Decentralized Cloud Computing</title>
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
      <NavBar0/>
      <FluxMediaPage/> 
    </div>
  )
}
