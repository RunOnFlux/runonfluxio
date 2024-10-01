import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { FluxOSPage } from '../components/fluxOSPage/fluxOSPage.js'
import { NavBar4 } from '../components/navbar/navbar4.js'
export default function Team() {
  return (
    <div>
      <Head>
        <title>Flux | FluxOS</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar4/>
     <FluxOSPage/>
    </div>
  )
}