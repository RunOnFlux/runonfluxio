import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { FluxLabsPage } from '../components/fluxLabsPage/fluxLabsPage'
import { NavBar1 } from '../components/navbar/navbar1'
export default function FluxLabs() {
  return (
    <div>
      <Head>
        <title>Flux | FluxLabs</title>
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
      <NavBar1/>
     <FluxLabsPage/>
    </div>
  )
}