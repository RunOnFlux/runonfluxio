import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { Node } from '../components/nodes/nodes.js'
import { NavBar } from '../components/navbar/navbar.js'
export default function Team() {
  return (
    <div>
      <Head>
        <title>Flux | Nodes</title>
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
     <Node/>
    </div>
  )
}