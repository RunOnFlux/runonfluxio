import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { Careers } from '../components/ careersPage/careersPage'
import { NavBar } from '../components/navbar/navbar'

export default function Career() {
  return (
    <div>
      <Head>
        <title>Flux | Careers</title>
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
     <Careers/>
    </div>
  )
}